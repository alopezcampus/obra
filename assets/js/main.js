/* ==========================================================================
   OBRA — Lógica del sitio
   Idioma, navegación, renderizado de listados, filtros, formulario
   y animaciones de entrada. No necesitas editar este archivo para
   cambiar contenido: eso se hace en content.js
   ========================================================================== */

(function () {
  "use strict";

  var DATA = window.OBRA;
  var LANGS = ["es", "en"];
  var STORE_KEY = "obra-lang";
  var lang = "es";

  /* ----------------------------------------------------------------------
     Utilidades
     ---------------------------------------------------------------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function t(key) {
    var entry = DATA.ui[key];
    if (!entry) { return "[" + key + "]"; }
    return entry[lang] || entry.es || "";
  }

  function pick(field) {
    if (field === null || field === undefined) { return ""; }
    if (typeof field === "string") { return field; }
    return field[lang] || field.es || "";
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  function store(key, value) {
    try {
      if (value === undefined) { return window.localStorage.getItem(key); }
      window.localStorage.setItem(key, value);
    } catch (e) { /* almacenamiento no disponible */ }
    return null;
  }

  /* ----------------------------------------------------------------------
     Fechas
     ---------------------------------------------------------------------- */
  function parseDate(iso) {
    var parts = String(iso).split("-");
    return new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2]));
  }

  function formatDay(iso) {
    var d = parseDate(iso);
    var locale = lang === "en" ? "en-GB" : "es-ES";
    var fmt = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", timeZone: "UTC" });
    return fmt.format(d).replace(".", "").toUpperCase();
  }

  function formatFull(iso) {
    var d = parseDate(iso);
    var locale = lang === "en" ? "en-GB" : "es-ES";
    var fmt = new Intl.DateTimeFormat(locale, { year: "numeric", timeZone: "UTC" });
    return fmt.format(d).toUpperCase();
  }

  function isUpcoming(iso) {
    var today = new Date();
    var midnight = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    return parseDate(iso).getTime() >= midnight;
  }

  /* ----------------------------------------------------------------------
     Idioma
     ---------------------------------------------------------------------- */
  function detectLang() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.indexOf(fromUrl) > -1) { return fromUrl; }
    var saved = store(STORE_KEY);
    if (LANGS.indexOf(saved) > -1) { return saved; }
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return nav === "en" ? "en" : "es";
  }

  function applyStaticText() {
    $$("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    $$("[data-i18n-attr]").forEach(function (node) {
      // formato: "placeholder:clave" o "aria-label:clave"
      node.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length === 2) { node.setAttribute(bits[0].trim(), t(bits[1].trim())); }
      });
    });
  }

  function applyPageMeta() {
    var page = document.body.getAttribute("data-page");
    var meta = DATA.pageMeta[page];
    if (!meta) { return; }
    document.title = meta[lang].t;
    var desc = $('meta[name="description"]');
    if (desc) { desc.setAttribute("content", meta[lang].d); }
  }

  function setLang(next, push) {
    lang = LANGS.indexOf(next) > -1 ? next : "es";
    document.documentElement.setAttribute("lang", lang);
    store(STORE_KEY, lang);

    $$("[data-lang-btn]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-btn") === lang));
    });

    applyStaticText();
    applyPageMeta();
    buildMarquee();
    renderAll();

    if (push) {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url);
    }
  }

  /* ----------------------------------------------------------------------
     Marquesina
     ---------------------------------------------------------------------- */
  function buildMarquee() {
    var track = $(".marquee__track");
    if (!track) { return; }
    track.innerHTML = "";
    var text = t("marquee");
    // Se repite el bloque para que el desplazamiento sea continuo.
    for (var i = 0; i < 6; i++) {
      track.appendChild(el("span", null, text));
    }
  }

  /* ----------------------------------------------------------------------
     Publicaciones
     ---------------------------------------------------------------------- */
  var activeFilter = "all";

  function categoryLabel(id) {
    var found = DATA.categories.filter(function (c) { return c.id === id; })[0];
    return found ? (found[lang] || found.es) : id;
  }

  function publicationRow(item) {
    var a = el("a", "entry");
    a.href = item.url || "#";

    a.appendChild(el("span", "entry__year", item.year));

    var mid = el("span");
    var h = el("h3", "entry__title", pick(item.title));
    mid.appendChild(h);
    if (item.author) {
      var au = el("p", "meta", pick(item.author));
      au.style.marginTop = "0.5rem";
      mid.appendChild(au);
    }
    mid.appendChild(el("p", "entry__desc", pick(item.desc)));
    a.appendChild(mid);

    a.appendChild(el("span", "entry__tag", categoryLabel(item.cat)));
    a.appendChild(el("span", "entry__go", "↗"));
    return a;
  }

  function renderPublications() {
    var list = $("#publication-list");
    if (!list) { return; }
    list.innerHTML = "";

    var items = DATA.publications.filter(function (p) {
      return activeFilter === "all" || p.cat === activeFilter;
    });

    if (!items.length) {
      var empty = el("p", "lede", t("platform.empty"));
      empty.style.paddingBlock = "3rem";
      list.appendChild(empty);
    } else {
      items.forEach(function (item) { list.appendChild(publicationRow(item)); });
    }

    var counter = $("#publication-count");
    if (counter) { counter.textContent = items.length + " " + t("platform.count"); }
  }

  function renderFilters() {
    var bar = $("#publication-filters");
    if (!bar) { return; }
    bar.innerHTML = "";

    var defs = [{ id: "all", label: t("platform.filter.all") }].concat(
      DATA.categories.map(function (c) { return { id: c.id, label: c[lang] || c.es }; })
    );

    defs.forEach(function (def) {
      var btn = el("button", null, def.label);
      btn.type = "button";
      btn.setAttribute("aria-pressed", String(def.id === activeFilter));
      btn.addEventListener("click", function () {
        activeFilter = def.id;
        renderFilters();
        renderPublications();
      });
      bar.appendChild(btn);
    });
  }

  function renderLatest() {
    var list = $("#latest-list");
    if (!list) { return; }
    list.innerHTML = "";
    DATA.publications.slice(0, 3).forEach(function (item) {
      list.appendChild(publicationRow(item));
    });
  }

  /* ----------------------------------------------------------------------
     Actividades
     ---------------------------------------------------------------------- */
  function activityRow(item, past) {
    var wrap = el("article", "event" + (past ? " event--past" : ""));

    var date = el("div", "event__date");
    date.appendChild(document.createTextNode(formatDay(item.date)));
    var sub = el("small", null, formatFull(item.date) + " · " + pick(item.place));
    date.appendChild(sub);
    wrap.appendChild(date);

    var body = el("div");
    body.appendChild(el("h3", "event__title", pick(item.title)));
    body.appendChild(el("p", "event__desc", pick(item.desc)));
    wrap.appendChild(body);

    var cta = el("div", "event__cta");
    if (!past) {
      var link = el("a", "btn", t("activities.register"));
      link.href = item.url || "#";
      cta.appendChild(link);
    }
    wrap.appendChild(cta);

    return wrap;
  }

  function sortByDate(a, b) { return parseDate(a.date) - parseDate(b.date); }

  function renderActivities() {
    var upcomingBox = $("#activities-upcoming");
    var pastBox = $("#activities-past");
    var homeBox = $("#next-list");

    var upcoming = DATA.activities.filter(function (a) { return isUpcoming(a.date); }).sort(sortByDate);
    var past = DATA.activities.filter(function (a) { return !isUpcoming(a.date); }).sort(sortByDate).reverse();

    if (homeBox) {
      homeBox.innerHTML = "";
      if (upcoming.length) {
        upcoming.slice(0, 2).forEach(function (a) { homeBox.appendChild(activityRow(a, false)); });
      } else {
        homeBox.appendChild(el("p", "lede", t("activities.none")));
      }
    }

    if (upcomingBox) {
      upcomingBox.innerHTML = "";
      if (upcoming.length) {
        upcoming.forEach(function (a) { upcomingBox.appendChild(activityRow(a, false)); });
      } else {
        upcomingBox.appendChild(el("p", "lede", t("activities.none")));
      }
    }

    if (pastBox) {
      pastBox.innerHTML = "";
      past.forEach(function (a) { pastBox.appendChild(activityRow(a, true)); });
    }
  }

  /* ----------------------------------------------------------------------
     Equipo
     ---------------------------------------------------------------------- */
  function portraitSVG(seed) {
    // Retrato provisional: composición axonométrica generada, distinta por persona.
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 200 250");
    svg.setAttribute("aria-hidden", "true");

    var rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

    var bg = document.createElementNS(ns, "rect");
    bg.setAttribute("width", "200"); bg.setAttribute("height", "250");
    bg.setAttribute("fill", "#EDF3F6");
    svg.appendChild(bg);

    for (var i = 0; i < 14; i++) {
      var w = 26 + rnd() * 46;
      var h = 20 + rnd() * 58;
      var x = 12 + rnd() * (176 - w);
      var y = 250 - h - rnd() * 130;
      var r = document.createElementNS(ns, "rect");
      r.setAttribute("x", x.toFixed(1)); r.setAttribute("y", y.toFixed(1));
      r.setAttribute("width", w.toFixed(1)); r.setAttribute("height", h.toFixed(1));
      r.setAttribute("fill", "none");
      r.setAttribute("stroke", i % 5 === 0 ? "#007EA7" : "#00171F");
      r.setAttribute("stroke-width", "1");
      svg.appendChild(r);
    }
    return svg;
  }

  function renderTeam() {
    var grid = $("#team-grid");
    if (!grid) { return; }
    grid.innerHTML = "";

    DATA.team.forEach(function (person, idx) {
      var card = el("article", "person");
      card.setAttribute("data-reveal", "");

      var portrait = el("div", "person__portrait");
      portrait.appendChild(portraitSVG(idx * 977 + 13));
      card.appendChild(portrait);

      var head = el("div");
      head.appendChild(el("h2", "person__name", person.name));
      head.appendChild(el("p", "person__role", pick(person.role)));
      head.appendChild(el("p", "meta", pick(person.affiliation)));
      card.appendChild(head);

      card.appendChild(el("p", "person__bio", pick(person.bio)));

      if (person.links && person.links.length) {
        var links = el("div", "person__links");
        person.links.forEach(function (l) {
          var a = el("a", null, pick(l.label));
          a.href = l.url;
          links.appendChild(a);
        });
        card.appendChild(links);
      }

      if (person.works && person.works.length) {
        var works = el("div", "person__works");
        works.appendChild(el("p", "meta", t("team.works")));
        var ul = el("ul");
        person.works.forEach(function (w) { ul.appendChild(el("li", null, pick(w))); });
        works.appendChild(ul);
        card.appendChild(works);
      }

      grid.appendChild(card);
    });

    // Tarjeta de convocatoria abierta
    var open = el("article", "person person--open");
    open.setAttribute("data-reveal", "");
    open.appendChild(el("p", "meta", "+ " + t("nav.join")));
    open.appendChild(el("h2", "person__name", t("team.open.h")));
    open.appendChild(el("p", "person__bio", t("team.open.p")));
    var btn = el("a", "btn", t("team.open.btn"));
    btn.href = "unete.html";
    open.appendChild(btn);
    grid.appendChild(open);
  }

  /* ----------------------------------------------------------------------
     Contacto y pie de página
     ---------------------------------------------------------------------- */
  function renderContact() {
    $$("[data-contact-email]").forEach(function (node) {
      node.textContent = DATA.contact.email;
      if (node.tagName === "A") { node.href = "mailto:" + DATA.contact.email; }
    });

    var social = $("#footer-social");
    if (social) {
      social.innerHTML = "";
      DATA.contact.social.forEach(function (s) {
        var li = el("li");
        var a = el("a", null, s.label);
        a.href = s.url;
        li.appendChild(a);
        social.appendChild(li);
      });
    }

    var year = $("#footer-year");
    if (year) { year.textContent = new Date().getFullYear(); }
  }

  /* ----------------------------------------------------------------------
     Formulario
     ---------------------------------------------------------------------- */
  function initForm() {
    var form = $("#join-form");
    if (!form) { return; }
    var status = $("#form-status");

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var endpoint = DATA.contact.formEndpoint;
      var payload = new FormData(form);

      if (!endpoint) {
        // Sin servicio configurado: se abre el cliente de correo del visitante.
        var lines = [];
        payload.forEach(function (value, key) { lines.push(key + ": " + value); });
        var href = "mailto:" + DATA.contact.email +
          "?subject=" + encodeURIComponent("OBRA · " + (payload.get("name") || "")) +
          "&body=" + encodeURIComponent(lines.join("\n"));
        window.location.href = href;
        status.textContent = t("join.ok");
        status.setAttribute("data-state", "ok");
        return;
      }

      fetch(endpoint, { method: "POST", body: payload, headers: { Accept: "application/json" } })
        .then(function (res) {
          if (!res.ok) { throw new Error("bad response"); }
          form.reset();
          status.textContent = t("join.ok");
          status.setAttribute("data-state", "ok");
        })
        .catch(function () {
          status.textContent = t("join.err");
          status.setAttribute("data-state", "err");
        });
    });
  }

  /* ----------------------------------------------------------------------
     Navegación
     ---------------------------------------------------------------------- */
  function initNav() {
    var toggle = $(".nav-toggle");
    var nav = $(".nav");
    if (!toggle || !nav) { return; }

    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      document.body.setAttribute("data-nav", !open ? "open" : "closed");
      toggle.setAttribute("data-i18n", !open ? "nav.close" : "nav.menu");
      toggle.textContent = !open ? t("nav.close") : t("nav.menu");
      toggle.setAttribute("aria-expanded", String(!open));
    });

    $$(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        document.body.setAttribute("data-nav", "closed");
      });
    });

    $$("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang-btn"), true);
      });
    });
  }

  /* ----------------------------------------------------------------------
     Revelado al hacer scroll
     ---------------------------------------------------------------------- */
  function initReveal() {
    var nodes = $$("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ----------------------------------------------------------------------
     Arranque
     ---------------------------------------------------------------------- */
  function renderAll() {
    renderFilters();
    renderPublications();
    renderLatest();
    renderActivities();
    renderTeam();
    renderContact();
    initReveal();
  }

  document.addEventListener("DOMContentLoaded", function () {
    lang = detectLang();
    initNav();
    initForm();
    setLang(lang, false);
  });
})();
