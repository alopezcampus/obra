/* ==========================================================================
   OBRA: CONTENIDO DEL SITIO
   --------------------------------------------------------------------------
   Este es el único archivo que necesitas editar para cambiar textos,
   publicaciones, actividades y miembros del equipo.

   Todo el contenido está en pares { es: "...", en: "..." }.
   Los textos actuales son PROVISIONALES. Reemplázalos por los definitivos.
   ========================================================================== */

window.OBRA = {

  /* ------------------------------------------------------------------------
     1. TEXTOS DE INTERFAZ Y DE PÁGINA
     Cada clave corresponde a un atributo data-i18n="clave" en el HTML.
     ------------------------------------------------------------------------ */
  ui: {

    /* --- Navegación y elementos globales --- */
    "nav.home":        { es: "Inicio",       en: "Home" },
    "nav.team":        { es: "Equipo",       en: "Team" },
    "nav.platform":    { es: "Plataforma",   en: "Platform" },
    "nav.activities":  { es: "Actividades",  en: "Activities" },
    "nav.join":        { es: "Únete",        en: "Join" },
    "nav.menu":        { es: "Menú",         en: "Menu" },
    "nav.close":       { es: "Cerrar",       en: "Close" },
    "skip":            { es: "Ir al contenido", en: "Skip to content" },

    "brand.full":      { es: "Observatorio de Barrios y Residencias Autoconstruidas",
                         en: "Observatory of Self-Built Neighbourhoods and Housing" },

    /* --- Portada: hero --- */
    "hero.meta1":      { es: "Observatorio de Barrios y Residencias Autoconstruidas",
                         en: "Observatory of Self-Built Neighbourhoods and Housing" },
    "hero.meta2":      { es: "Plataforma de investigación emergente",
                         en: "Emerging research platform" },
    "hero.meta3":      { es: "Red abierta",
                         en: "Open network" },
    "hero.lede":       { es: "Reunimos a investigadoras e investigadores emergentes que trabajan sobre las viviendas y los barrios que sus propios habitantes producen. Documentamos cómo se construyen, qué formas políticas generan y qué se ha escrito sobre ellos.",
                         en: "We bring together emerging researchers working on the housing and neighbourhoods that residents build themselves. We document how they are made, the political forms they generate, and what has been written about them." },
    "hero.scroll":     { es: "Desliza · Manifiesto", en: "Scroll · Manifesto" },

    /* --- Portada: marquesina --- */
    "marquee":         { es: "Autoconstrucción · Campamentos · Vivienda progresiva · Tenencia · Bricolaje · Ciudadanía urbana · Asentamientos populares · Infraestructura por cuenta propia · Archivo · Sur global ·",
                         en: "Self-building · Informal settlements · Incremental housing · Tenure · Bricolage · Urban citizenship · Popular infrastructure · Do-it-yourself infrastructure · Archive · Global South ·" },

    /* --- Portada: manifiesto --- */
    "manifesto.label": { es: "§01 / Manifiesto", en: "§01 / Manifesto" },
    "manifesto.title": { es: "Seis puntos de partida", en: "Six starting points" },

    "m1.h": { es: "La ciudad se construye sin permiso", en: "The city is built without permission" },
    "m1.p": { es: "Tratar como regla lo que todavía se discute como excepción. La mayor parte de la vivienda del mundo se levanta fuera de los circuitos formales de la arquitectura, el crédito y la norma, y ese hecho ordena la vida cotidiana de miles de millones de personas.",
              en: "Treat as the rule what is still discussed as an exception. Most of the world's housing goes up outside the formal circuits of architecture, credit and regulation, and this fact organises the daily life of billions of people." },

    "m2.h": { es: "La autoconstrucción es un método", en: "Self-building is a method" },
    "m2.p": { es: "Documentar la autoconstrucción como un saber técnico, financiero y político propio. Levantar una casa por partes, durante décadas, con los materiales disponibles, es un oficio con historia, gramática y capacidad de transmisión.",
              en: "Document self-building as a technical, financial and political knowledge in its own right. Raising a house in stages, over decades, with whatever materials are at hand is a craft with a history, a grammar and the capacity to be taught." },

    "m3.h": { es: "El barrio es una institución política", en: "The neighbourhood is a political institution" },
    "m3.p": { es: "Observar la autoridad, la membresía y las formas concretas de ciudadanía que producen los asentamientos autoproducidos cuando resuelven agua, electricidad, suelo y seguridad antes de que llegue el Estado.",
              en: "Observe the authority, membership and concrete forms of citizenship that self-produced settlements generate when they resolve water, electricity, land and safety before the state arrives." },

    "m4.h": { es: "La investigación emergente está dispersa", en: "Emerging research is scattered" },
    "m4.p": { es: "Reunir en un solo lugar, con nombre, autoría y contexto, las tesis doctorales, los trabajos de campo y los archivos comunitarios que hoy circulan poco y envejecen en repositorios institucionales.",
              en: "Gather in one place, with names, authorship and context, the doctoral theses, fieldwork and community archives that today circulate little and age inside institutional repositories." },

    "m5.h": { es: "El sur global no es un caso de estudio", en: "The global South is not a case study" },
    "m5.p": { es: "Trabajar entre los campamentos de Santiago, las favelas de São Paulo, los sótanos habitados de Nueva York y las construcciones por cuenta propia de Nairobi, sin jerarquías de referencia. Todos comparten problemas de tenencia, financiamiento y reconocimiento.",
              en: "Work across Santiago's campamentos, São Paulo's favelas, New York's inhabited basements and Nairobi's owner-built housing, without hierarchies of reference. All of them share problems of tenure, finance and recognition." },

    "m6.h": { es: "Visibilizar es una operación política", en: "Making visible is a political operation" },
    "m6.p": { es: "Publicar para que estos barrios entren en la discusión sobre política de vivienda con su propio vocabulario. Nombrar, mapear y difundir cambia lo que puede discutirse.",
              en: "Publish so that these neighbourhoods enter the housing policy debate in their own vocabulary. Naming, mapping and circulating changes what can be discussed." },

    /* --- Portada: qué observamos --- */
    "axioms.label": { es: "§02 / Qué observamos", en: "§02 / What we observe" },
    "axioms.title": { es: "Tres frentes de trabajo", en: "Three lines of work" },

    "ax1.h": { es: "El expediente técnico", en: "The technical record" },
    "ax1.p": { es: "Materiales, etapas, costos y técnicas de la construcción por cuenta propia. Cómo se financia una casa que se levanta durante veinte años.",
               en: "Materials, stages, costs and techniques of owner-built construction. How a house that takes twenty years to build gets financed." },

    "ax2.h": { es: "La trama política", en: "The political fabric" },
    "ax2.p": { es: "Organización vecinal, negociación con el Estado, disputas de tenencia y el derecho a permanecer en el lugar construido.",
               en: "Neighbourhood organisation, negotiation with the state, tenure disputes and the right to remain in the place one has built." },

    "ax3.h": { es: "El archivo", en: "The archive" },
    "ax3.p": { es: "Publicaciones, tesis, cartografías y registros producidos tanto por quienes investigan como por quienes habitan estos barrios.",
               en: "Publications, theses, cartographies and records produced both by researchers and by the people who live in these neighbourhoods." },

    /* --- Portada: últimas publicaciones y próxima actividad --- */
    "latest.label":  { es: "§03 / Plataforma", en: "§03 / Platform" },
    "latest.title":  { es: "Publicaciones recientes", en: "Recent publications" },
    "latest.all":    { es: "Ver toda la plataforma", en: "See the full platform" },
    "next.label":    { es: "§04 / Actividades", en: "§04 / Activities" },
    "next.title":    { es: "Próximas actividades", en: "Upcoming activities" },
    "next.all":      { es: "Ver el calendario completo", en: "See the full calendar" },

    /* --- Llamado final --- */
    "cta.title":  { es: "¿Investigas barrios autoconstruidos? Este observatorio también es tuyo.",
                    en: "Do you research self-built neighbourhoods? This observatory is yours too." },
    "cta.text":   { es: "OBRA está abierto a investigadoras e investigadores en formación, colectivos de barrio y archivos comunitarios de cualquier país.",
                    en: "OBRA is open to early-career researchers, neighbourhood collectives and community archives from any country." },
    "cta.btn":    { es: "Súmate al observatorio", en: "Join the observatory" },

    /* --- Página Equipo --- */
    "team.title": { es: "Equipo", en: "Team" },
    "team.lede":  { es: "OBRA reúne a investigadoras e investigadores emergentes que trabajan sobre vivienda y barrios autoproducidos. La red está en formación y admite nuevas incorporaciones de forma permanente.",
                    en: "OBRA brings together emerging researchers working on self-produced housing and neighbourhoods. The network is being formed and accepts new members on an ongoing basis." },
    "team.works": { es: "Trabajos", en: "Work" },
    "team.open.h":{ es: "Este espacio está abierto", en: "This space is open" },
    "team.open.p":{ es: "Buscamos investigadoras e investigadores en doctorado, magíster o etapa posdoctoral que trabajen sobre autoconstrucción, asentamientos populares o vivienda progresiva, en cualquier ciudad del mundo.",
                    en: "We are looking for doctoral, master's and postdoctoral researchers working on self-building, informal settlements or incremental housing, in any city in the world." },
    "team.open.btn": { es: "Postula tu perfil", en: "Submit your profile" },

    /* --- Página Plataforma --- */
    "platform.title": { es: "Plataforma", en: "Platform" },
    "platform.lede":  { es: "Un índice abierto de lo que se escribe, se publica y se organiza en torno a los barrios autoconstruidos: artículos, entradas de blog, libros, iniciativas y archivos.",
                        en: "An open index of what is written, published and organised around self-built neighbourhoods: articles, blog posts, books, initiatives and archives." },
    "platform.filter.all": { es: "Todo", en: "All" },
    "platform.count":      { es: "entradas", en: "entries" },
    "platform.empty":      { es: "No hay entradas en esta categoría todavía.", en: "No entries in this category yet." },
    "platform.submit.h":   { es: "Publica en OBRA", en: "Publish with OBRA" },
    "platform.submit.p":   { es: "Recibimos textos inéditos, reseñas, cartografías y registros de campo en español y en inglés. La revisión es interna y el envío no tiene plazos.",
                             en: "We accept unpublished texts, reviews, cartographies and field records in Spanish and English. Review is internal and submissions are open year-round." },
    "platform.submit.btn": { es: "Enviar una propuesta", en: "Send a proposal" },

    /* --- Página Actividades --- */
    "activities.title": { es: "Actividades", en: "Activities" },
    "activities.lede":  { es: "Seminarios, talleres y conversatorios organizados por el observatorio. Las sesiones son abiertas y se realizan en formato híbrido salvo indicación contraria.",
                          en: "Seminars, workshops and conversations organised by the observatory. Sessions are open and held in hybrid format unless otherwise stated." },
    "activities.next":  { es: "Próximas", en: "Upcoming" },
    "activities.past":  { es: "Realizadas", en: "Past" },
    "activities.none":  { es: "Estamos preparando el próximo ciclo. Escríbenos para recibir el aviso.",
                          en: "We are preparing the next cycle. Write to us to be notified." },
    "activities.register": { es: "Inscribirse", en: "Register" },

    /* --- Página Únete --- */
    "join.title": { es: "Únete", en: "Join" },
    "join.lede":  { es: "Escríbenos si investigas, habitas o documentas barrios y viviendas autoconstruidas. Leemos cada mensaje con atención.",
                    en: "Write to us if you research, inhabit or document self-built neighbourhoods and housing. We read every message with care." },
    "join.invite": { es: "Puedes escribirnos directamente a nuestro correo y contarnos quién eres y qué te gustaría hacer en OBRA. Revisamos la casilla de forma constante y estamos siempre atentos a nuevas propuestas, colaboraciones e incorporaciones a la red.",
                     en: "Write to us directly at our email and tell us who you are and what you would like to do with OBRA. We check the inbox regularly and are always attentive to new proposals, collaborations and new members joining the network." },
    "join.note2": { es: "Leemos y respondemos cada mensaje personalmente.",
                    en: "We read and reply to every message personally." },
    "join.f.name":   { es: "Nombre completo", en: "Full name" },
    "join.f.email":  { es: "Correo electrónico", en: "Email" },
    "join.f.aff":    { es: "Institución o colectivo", en: "Institution or collective" },
    "join.f.city":   { es: "Ciudad y país", en: "City and country" },
    "join.f.profile":{ es: "Perfil", en: "Profile" },
    "join.f.topic":  { es: "Tema o territorio de trabajo", en: "Topic or territory of work" },
    "join.f.link":   { es: "Enlace a tu trabajo (opcional)", en: "Link to your work (optional)" },
    "join.f.msg":    { es: "Cuéntanos qué te interesa de OBRA", en: "Tell us what interests you about OBRA" },
    "join.f.send":   { es: "Enviar mensaje", en: "Send message" },
    "join.f.note":   { es: "Usamos tus datos solo para responderte y para el directorio interno del observatorio.",
                       en: "We use your data only to reply to you and for the observatory's internal directory." },
    "join.opt.phd":  { es: "Investigador/a en formación", en: "Early-career researcher" },
    "join.opt.res":  { es: "Investigador/a con doctorado", en: "Researcher with a doctorate" },
    "join.opt.com":  { es: "Organización o colectivo de barrio", en: "Neighbourhood organisation or collective" },
    "join.opt.arch": { es: "Archivo o institución", en: "Archive or institution" },
    "join.opt.other":{ es: "Otro", en: "Other" },
    "join.ok":       { es: "Mensaje enviado. Gracias por escribir.", en: "Message sent. Thank you for writing." },
    "join.err":      { es: "No pudimos enviar el mensaje. Escríbenos directamente al correo de contacto.",
                       en: "We could not send the message. Please write to us directly at the contact address." },
    "join.a1.h": { es: "Qué implica sumarse", en: "What joining involves" },
    "join.a1.p": { es: "Aparecer en el directorio del observatorio, publicar en la plataforma, participar de las sesiones internas y proponer actividades. No hay cuota ni exclusividad institucional.",
                   en: "Appearing in the observatory's directory, publishing on the platform, taking part in internal sessions and proposing activities. There is no fee and no institutional exclusivity." },
    "join.a2.h": { es: "Idiomas de trabajo", en: "Working languages" },
    "join.a2.p": { es: "Español e inglés. Recibimos propuestas en portugués y las traducimos junto con quien las envía.",
                   en: "Spanish and English. We accept proposals in Portuguese and translate them together with the author." },
    "join.a3.h": { es: "Contacto directo", en: "Direct contact" },

    /* --- Pie de página --- */
    "footer.about.h":   { es: "Observatorio", en: "Observatory" },
    "footer.about.p":   { es: "OBRA documenta y pone en circulación la investigación sobre barrios y viviendas producidas por sus propios habitantes.",
                          en: "OBRA documents and circulates research on neighbourhoods and housing produced by their own inhabitants." },
    "footer.nav.h":     { es: "Navegación", en: "Navigation" },
    "footer.contact.h": { es: "Contacto", en: "Contact" },
    "footer.follow.h":  { es: "Seguir", en: "Follow" },
    "footer.newsletter":{ es: "Boletín", en: "Newsletter" },
    "footer.rights":    { es: "Contenidos bajo licencia Creative Commons BY-NC-SA 4.0.",
                          en: "Content licensed under Creative Commons BY-NC-SA 4.0." },
    "footer.credit":    { es: "Sitio en construcción permanente.", en: "A site under permanent construction." }
  },

  /* ------------------------------------------------------------------------
     2. TÍTULOS Y DESCRIPCIONES DE CADA PÁGINA (para buscadores)
     La clave corresponde al atributo data-page del <body>.
     ------------------------------------------------------------------------ */
  pageMeta: {
    home:       { es: { t: "OBRA · Observatorio de Barrios y Residencias Autoconstruidas",
                        d: "Plataforma de investigación emergente sobre viviendas y barrios autoproducidos por sus habitantes." },
                  en: { t: "OBRA · Observatory of Self-Built Neighbourhoods and Housing",
                        d: "An emerging research platform on housing and neighbourhoods produced by their own inhabitants." } },
    team:       { es: { t: "Equipo · OBRA", d: "Investigadoras e investigadores emergentes del observatorio OBRA." },
                  en: { t: "Team · OBRA", d: "Emerging researchers of the OBRA observatory." } },
    platform:   { es: { t: "Plataforma · OBRA", d: "Artículos, entradas, libros e iniciativas sobre autoconstrucción." },
                  en: { t: "Platform · OBRA", d: "Articles, posts, books and initiatives on self-building." } },
    activities: { es: { t: "Actividades · OBRA", d: "Seminarios, talleres y conversatorios del observatorio OBRA." },
                  en: { t: "Activities · OBRA", d: "Seminars, workshops and conversations of the OBRA observatory." } },
    join:       { es: { t: "Únete · OBRA", d: "Súmate al observatorio de barrios y residencias autoconstruidas." },
                  en: { t: "Join · OBRA", d: "Join the observatory of self-built neighbourhoods and housing." } }
  },

  /* ------------------------------------------------------------------------
     3. CATEGORÍAS DE LA PLATAFORMA
     El id se usa en el campo "cat" de cada publicación.
     ------------------------------------------------------------------------ */
  categories: [
    { id: "articulo",  es: "Artículo",  en: "Article" },
    { id: "blog",      es: "Blog",      en: "Blog" },
    { id: "libro",     es: "Libro",     en: "Book" },
    { id: "iniciativa",es: "Iniciativa",en: "Initiative" },
    { id: "archivo",   es: "Archivo",   en: "Archive" }
  ],

  /* ------------------------------------------------------------------------
     4. PUBLICACIONES (contenido provisional)
     Para agregar una entrada, copia un bloque completo y edítalo.
     "url" puede ser un enlace externo o "#" si todavía no existe.
     ------------------------------------------------------------------------ */
  publications: [
    {
      year: "2025", cat: "articulo", url: "https://revistaabismo.com/construir-un-futuro-incierto/",
      author: { es: "Renato González y Alonso López · Revista Abismo",
                en: "Renato González and Alonso López · Revista Abismo" },
      title: { es: "Construir un futuro incierto",
               en: "Construir un futuro incierto (Building an uncertain future, in Spanish)" },
      desc:  { es: "Crónica sobre el Campamento Nueva Cordillera, en Puente Alto: la autoconstrucción de 174 hogares en los faldeos del cerro La Ballena bajo la amenaza del desalojo.",
               en: "A chronicle of Campamento Nueva Cordillera in Puente Alto: 174 households self-building their homes on the slopes of Cerro La Ballena under the threat of eviction." }
    }
  ],

  /* ------------------------------------------------------------------------
     5. ACTIVIDADES (contenido provisional)
     Usa el formato de fecha AAAA-MM-DD. El sitio separa automáticamente
     las próximas de las ya realizadas.
     ------------------------------------------------------------------------ */
  activities: [
    {
      date: "2026-12-15", url: "#",
      place: { es: "Lugar por confirmar", en: "Venue to be confirmed" },
      title: { es: "Lanzamiento de la plataforma OBRA",
               en: "Launch of the OBRA platform" },
      desc:  { es: "Presentación pública del observatorio, su equipo y su plataforma de publicaciones sobre barrios y viviendas autoconstruidas.",
               en: "Public presentation of the observatory, its team and its publication platform on self-built neighbourhoods and housing." }
    },
    {
      date: "2027-03-15", url: "#",
      place: { es: "Lugar por confirmar", en: "Venue to be confirmed" },
      title: { es: "Puntapié inicial del Workshop Trimestral de OBRA",
               en: "Kick-off of the OBRA Quarterly Workshop" },
      desc:  { es: "Primera sesión del workshop trimestral, un espacio regular para discutir investigaciones en curso sobre autoconstrucción y asentamientos populares.",
               en: "First session of the quarterly workshop, a regular space to discuss ongoing research on self-building and informal settlements." }
    }
  ],

  /* ------------------------------------------------------------------------
     6. EQUIPO
     Para agregar a alguien, copia un bloque completo y edítalo.
     ------------------------------------------------------------------------ */
  team: [
    {
      name: "Alonso López",
      photo: "assets/img/alonso-lopez.jpg",
      role: { es: "Director", en: "Director" },
      affiliation: { es: "The New School for Social Research",
                     en: "The New School for Social Research" },
      bio: { es: "Doctorando en Sociología. Investiga la autoconstrucción de viviendas y la formación de ciudadanía en los asentamientos de Santiago. Editor general de Cuadernos de Teoría Social.",
             en: "PhD student in Sociology. Researches self-built housing and the formation of citizenship in Santiago's settlements. General editor of Cuadernos de Teoría Social." }
    },
    {
      name: "Monise Valente da Silva",
      photo: "assets/img/monise-valente-da-silva.jpg",
      role: { es: "Investigadora principal", en: "Principal researcher" },
      affiliation: { es: "City University of New York, John Jay College",
                     en: "City University of New York, John Jay College" },
      bio: { es: "Doctora en Políticas Públicas y Urbanas y profesora asistente de Estudios Interdisciplinarios. Investiga las tácticas de los movimientos de vivienda y la política socioespacial de las ocupaciones en Brasil.",
             en: "Doctor in Public and Urban Policy and Assistant Professor of Interdisciplinary Studies. Researches housing movement tactics and the sociospatial politics of squatting in Brazil." }
    },
    {
      name: "Julia Sotomayor",
      photo: "assets/img/julia-sotomayor.jpg",
      role: { es: "Investigadora asociada", en: "Associate researcher" },
      affiliation: { es: "Universidad Alberto Hurtado",
                     en: "Universidad Alberto Hurtado" },
      bio: { es: "Antropóloga. Trabaja en patrimonio, educación y metodologías participativas, con experiencia en investigación aplicada, mediación comunitaria y producción documental en Santiago.",
             en: "Anthropologist. Works on heritage, education and participatory methods, with experience in applied research, community mediation and documentary production in Santiago." }
    },
    {
      name: "Gustavo Azevedo",
      photo: "assets/img/gustavo-azevedo.jpg",
      role: { es: "Investigador asociado", en: "Associate researcher" },
      affiliation: { es: "IESP, Universidade do Estado do Rio de Janeiro",
                     en: "IESP, Universidade do Estado do Rio de Janeiro" },
      bio: { es: "Doctorando en Sociología e investigador del grupo CASA. Estudia cómo los habitantes de la Baixada Fluminense autoconstruyen sus casas a través de mercados informales de servicios de construcción.",
             en: "PhD student in Sociology and researcher at the CASA group. Studies how residents of the Baixada Fluminense self-build their homes through informal markets for construction services." }
    }
  ],

  /* ------------------------------------------------------------------------
     7. DATOS DE CONTACTO Y REDES
     ------------------------------------------------------------------------ */
  contact: {
    email: "obra.obs@gmail.com",
    social: [
      { label: "Instagram", url: "#" },
      { label: "Bluesky",   url: "#" },
      { label: "LinkedIn",  url: "#" }
    ],
    /* Pega aquí tu endpoint de Formspree. Mientras esté vacío,
       el formulario abre el correo del usuario con el mensaje redactado. */
    formEndpoint: ""
  }
};
