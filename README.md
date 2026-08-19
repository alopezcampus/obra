# OBRA · Observatorio de Barrios y Residencias Autoconstruidas

Sitio web estático, bilingüe (español e inglés), preparado para publicarse en GitHub Pages sin ningún paso de compilación. Son archivos HTML, CSS y JavaScript planos: se suben tal cual y funcionan.

---

## 1. Qué contiene

```
obra-site/
├── index.html            Portada con el manifiesto
├── equipo.html           Fichas del equipo
├── plataforma.html       Índice de publicaciones con filtros
├── actividades.html      Próximas actividades y archivo
├── unete.html            Formulario de contacto
├── robots.txt            Indexación para buscadores
├── sitemap.xml           Mapa del sitio para buscadores
├── .nojekyll             Necesario para que GitHub Pages no procese los archivos
└── assets/
    ├── css/style.css     Toda la identidad visual
    ├── js/content.js     ← EL ÚNICO ARCHIVO QUE NECESITAS EDITAR
    ├── js/main.js        Lógica (idioma, filtros, formulario)
    └── fonts/            Familjen Grotesk y JetBrains Mono, alojadas aquí
```

**Todos los textos actuales son provisionales.** Sirven para ver el sitio funcionando. Reemplázalos por los definitivos en `assets/js/content.js`.

---

## 2. Ver el sitio en tu computador

Los navegadores bloquean la carga de tipografías cuando abres un archivo con doble clic. Levanta un servidor local en su lugar. Abre la Terminal, entra a la carpeta del sitio y ejecuta:

```bash
cd ruta/a/obra-site
python3 -m http.server 8000
```

Luego abre `http://localhost:8000` en el navegador. Para detenerlo, pulsa `Control + C`.

---

## 3. Publicar en GitHub Pages

1. Crea una cuenta en [github.com](https://github.com) si no la tienes.
2. Crea un repositorio nuevo, público, llamado `obra`.
3. Sube todo el contenido de la carpeta `obra-site` a la raíz del repositorio. Puedes arrastrar los archivos en la interfaz web con el botón **Add file → Upload files**. Sube también la carpeta `assets` completa.
4. Entra a **Settings → Pages**.
5. En **Source**, elige `Deploy from a branch`. En **Branch**, elige `main` y la carpeta `/ (root)`. Guarda.
6. Espera un minuto. El sitio queda en `https://TU-USUARIO.github.io/obra/`.

Cada vez que subas un archivo modificado, el sitio se actualiza solo en un par de minutos.

### Dominio propio

Si compras un dominio, por ejemplo `obra-observatorio.org`:

1. En **Settings → Pages → Custom domain**, escribe el dominio y guarda. GitHub crea un archivo `CNAME` en el repositorio.
2. En el panel de tu proveedor de dominio, crea estos registros DNS:
   - Cuatro registros `A` apuntando a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`.
   - Un registro `CNAME` para `www` apuntando a `TU-USUARIO.github.io`.
3. Vuelve a Settings → Pages y activa **Enforce HTTPS**.

Después, actualiza el dominio en `robots.txt` y en `sitemap.xml`.

---

## 4. Cómo editar el contenido

Abre `assets/js/content.js` con cualquier editor de texto. Todo está en pares de idioma:

```js
"hero.lede": { es: "Texto en español", en: "Text in English" },
```

Cambia lo que está entre comillas y guarda. Cuida de no borrar las comas, las llaves ni las comillas.

### Agregar una publicación

Copia un bloque completo dentro de `publications` y edítalo:

```js
{
  year: "2026", cat: "articulo", url: "https://enlace-al-texto.com",
  author: { es: "Nombre de quien firma", en: "Author name" },
  title: { es: "Título en español", en: "Title in English" },
  desc:  { es: "Una o dos frases.", en: "One or two sentences." }
},
```

El campo `cat` acepta: `articulo`, `blog`, `libro`, `iniciativa`, `archivo`. Si necesitas otra categoría, agrégala en la lista `categories` del mismo archivo y quedará disponible en los filtros automáticamente.

### Agregar una actividad

Copia un bloque dentro de `activities`. Usa el formato de fecha `AAAA-MM-DD`. El sitio separa solo las próximas de las ya realizadas según la fecha del día.

### Agregar a alguien al equipo

Copia el bloque de `team` completo y edítalo. El retrato provisional es un dibujo generado por el propio sitio, distinto para cada persona. Si prefieres una fotografía, avísame y adapto la ficha.

---

## 5. Conectar el formulario de "Únete"

Un sitio estático no puede procesar formularios por su cuenta. Mientras no configures nada, el botón de envío abre el programa de correo del visitante con el mensaje ya redactado. Funciona, aunque pierdes envíos de quien no tenga correo configurado en su equipo.

Para recibir los mensajes en tu bandeja de entrada:

1. Crea una cuenta gratuita en [formspree.io](https://formspree.io). El plan gratuito permite 50 mensajes al mes.
2. Crea un formulario nuevo. Formspree te entrega una dirección parecida a `https://formspree.io/f/xxxxxxxx`.
3. Pega esa dirección en `assets/js/content.js`, al final del archivo:

```js
formEndpoint: "https://formspree.io/f/xxxxxxxx"
```

Guarda y sube el archivo. Los mensajes llegarán a tu correo.

---

## 6. Cambiar los colores y la tipografía

Todo está al inicio de `assets/css/style.css`, en el bloque `:root`:

```css
--paper:     #FFFFFF;   /* White, fondo general */
--ink:       #00171F;   /* Ink Black, texto y secciones oscuras */
--deep:      #003459;   /* Deep Space Blue, franja de llamado a la acción */
--accent:    #007EA7;   /* Cerulean, detalles sobre fondo claro */
--accent-lt: #00A8E8;   /* Cerulean claro, detalles sobre fondo oscuro */
```

Cambia esos valores y la identidad completa del sitio cambia con ellos.

Una nota sobre `--accent-lt`: el cerulean #007EA7 sobre el negro #00171F queda en
una relación de contraste de 3,97 a 1, por debajo del mínimo de 4,5 que exigen las
normas de accesibilidad para texto pequeño. Por eso los detalles azules que van
sobre fondo oscuro (la numeración del manifiesto, los enlaces del pie) usan la
versión clara #00A8E8, que llega a 6,8 a 1. Es el mismo azul de la familia, un paso
más arriba.

### Tipografías

**Familjen Grotesk** para los títulos y para el texto corrido. Es la fuente que
elegiste en Fontshare, y viene incluida en el paquete como archivo variable: un
solo archivo de 19 KB cubre todos los pesos de 400 a 700.

**JetBrains Mono** para las etiquetas técnicas en versalitas: los numeritos de
sección, las categorías de la plataforma, los botones. Familjen Grotesk no tiene
versión monoespaciada, y ese contraste entre la grotesca y la monoespaciada es
buena parte del carácter del sitio. Si prefieres usar Familjen Grotesk también
ahí, cambia una sola línea en `:root`:

```css
--mono: "Familjen Grotesk", ui-monospace, monospace;
```

Ambas son de código abierto y están alojadas dentro del propio sitio, así que no
dependes de Google ni de Fontshare, el sitio carga más rápido y no se envían datos
de tus visitantes a terceros.

Un detalle técnico: Familjen Grotesk llega hasta el peso 700 y no tiene eje de
ancho, a diferencia de la tipografía anterior. Ajusté los tamaños y el interlineado
del sitio para esa proporción. Si más adelante cambias de fuente, revisa el
interlineado de la clase `.display`: con mayúsculas acentuadas en español, los
títulos de varias líneas necesitan aire para que la tilde no choque con la línea
de arriba.

---

## 7. Detalles que conviene saber

- El idioma se detecta del navegador del visitante y se recuerda. También se puede forzar con `?lang=en` o `?lang=es` en la dirección, útil para compartir un enlace en un idioma específico.
- El sitio funciona sin JavaScript solo parcialmente. Los listados de publicaciones, actividades y equipo se dibujan con JavaScript. Si esto te preocupa para la indexación en buscadores, avísame y paso esos listados a HTML fijo.
- Los correos de contacto que aparecen en el sitio son provisionales (`contacto@obra-observatorio.org`). Cámbialos en `content.js`, en el bloque `contact`.
- Los enlaces a redes sociales están en `#` porque todavía no existen. Cámbialos o borra las líneas que no uses.

---

Licencia sugerida para los contenidos: Creative Commons BY-NC-SA 4.0. El código del sitio puedes usarlo libremente.
