# Prodetech · Sitio web oficial

Sitio web de **Prodetech**, empresa ecuatoriana de máquinas láser de diodo, CO₂ y fibra, repuestos, capacitación y soporte técnico.

Construido con **React + Vite + Tailwind CSS**, listo para publicarse gratis en **Vercel**.

---

## 1. Ver el sitio en tu computadora

Requisitos: Node.js 18 o superior (recomendado: LTS).

```bash
cd "Prodetech Web Vercel 3"
npm install
npm run dev
```

Abre la dirección que muestra la terminal, normalmente:

```text
http://localhost:5173
```

Para generar la versión final:

```bash
npm run build
npm run preview
```

---

## 2. Configurar WhatsApp y datos de contacto

Abre **`src/config.js`** y edita:

```js
export const site = {
  whatsapp: '593960701199', // ← tu número, sin +, sin espacios
  phone: '+593 96 070 1199', // opcional, se muestra en el sitio
  email: 'infoec.prodetech@gmail.com',
  address: 'Quitumbe, Quito · Pichincha, Ecuador',
  social: {
    instagram: 'https://www.instagram.com/prodetechec/',
    facebook: 'https://www.facebook.com/PRODETECH.Ingenieria.y.Desarrollo/',
  },
}
```

> **Importante:** mientras `whatsapp` esté vacío, los botones abren el correo. Al colocar el número, **todos** los botones de cotización del sitio pasan a abrir WhatsApp automáticamente.

Verifica también que los enlaces de Instagram y Facebook sean los reales.

---

## 3. Editar el catálogo

Todo el catálogo está en **`src/data/products.js`**.

Cada equipo tiene esta estructura:

```js
{
  id: 'falcon-2-12w',
  category: 'diodo', // diodo | co2 | fibra | accesorios
  name: 'Falcon 2 · 12W',
  tagline: 'Precisión para empezar a producir',
  description: '...',
  badge: 'Más elegido',
  featured: true,
  art: 'diode', // diode | co2 | fiber | parts
  specs: [
    ['Potencia', '12W'],
    ['Área de trabajo', '400 × 415 mm'],
  ],
  tags: ['Madera', 'Acrílico', 'Cuero'],
  ideal: 'Emprendimientos y personalización',
}
```

Para agregar un producto, copia un bloque, cambia el `id` (debe ser único) y actualiza los datos. Aparecerá automáticamente en el catálogo y en el filtro correspondiente.

Las aplicaciones, beneficios, proceso y preguntas frecuentes están en **`src/data/site.js`**.

---

## 4. Publicar gratis en Vercel

### Paso A — Subir a GitHub

1. Crea un repositorio nuevo en [github.com/new](https://github.com/new). Nombre sugerido: `prodetech-web`.
2. No marques “Add a README” (ya existe uno).
3. En la terminal, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Sitio web Prodetech"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/prodetech-web.git
git push -u origin main
```

### Paso B — Conectar Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. Pulsa **Add New → Project**.
3. Importa el repositorio `prodetech-web`.
4. Vercel detecta Vite automáticamente. Verifica:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Pulsa **Deploy**.

En 1–2 minutos tendrás una URL gratuita tipo `prodetech-web.vercel.app`.

### Paso C — Dominio propio (opcional)

Si recuperas `prodetechec.com`:

1. En Vercel: **Project → Settings → Domains**.
2. Agrega `prodetechec.com` y `www.prodetechec.com`.
3. Configura los DNS que Vercel te indique en tu proveedor del dominio.

---

## 5. Qué incluye el sitio

- Diseño premium industrial oscuro con acentos naranja.
- Hero con ilustración técnica vectorial de equipo CO₂.
- Tres líneas de tecnología: diodo, CO₂ y fibra.
- Catálogo filtrable con 18 equipos y fichas de producto.
- Modal de ficha técnica con especificaciones y cotización.
- Sección interactiva de aplicaciones con muestras visuales.
- Beneficios, proceso de compra, repuestos y soporte.
- Preguntas frecuentes con acordeón.
- Formulario de contacto que arma el mensaje para WhatsApp o correo.
- Botón flotante de WhatsApp.
- Diseño responsive para móvil, tablet y escritorio.
- SEO: metadatos, Open Graph, JSON-LD (Store + FAQ), `robots.txt`, `sitemap.xml`.
- Animaciones respetando `prefers-reduced-motion`.
- Accesibilidad: navegación por teclado, foco visible, etiquetas ARIA.

---

## 6. Estructura del proyecto

```text
Prodetech Web Vercel 3/
├── public/
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechStrip.jsx
│   │   ├── Categories.jsx
│   │   ├── Catalog.jsx
│   │   ├── ProductModal.jsx
│   │   ├── MachineArt.jsx
│   │   ├── Applications.jsx
│   │   ├── Sample.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Process.jsx
│   │   ├── Parts.jsx
│   │   ├── Support.jsx
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   └── Logo.jsx
│   ├── data/
│   │   ├── products.js
│   │   └── site.js
│   ├── hooks/
│   │   └── useRevealOnScroll.js
│   ├── App.jsx
│   ├── config.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## 7. Recomendaciones para la siguiente versión

1. **Fotografías reales:** cuando tengas fotos de tus equipos, trabajos y taller, reemplaza las ilustraciones SVG por imágenes en `public/images/`. Eso aumenta mucho la confianza.
2. **Testimonios reales:** agrega 3–5 opiniones de clientes con nombre, ciudad y tipo de máquina. No inventar testimonios.
3. **Precios:** si decides mostrarlos, agrega un campo `price` a cada producto y muéstralo en la tarjeta.
4. **Analítica:** instala Vercel Analytics o Google Analytics para medir visitas y clics a WhatsApp.
5. **Formulario con backend:** para recibir consultas por correo sin depender de WhatsApp, se puede conectar a Resend, Formspree o un endpoint propio.
6. **Blog / recursos:** una sección de guías (“cómo elegir tu primera máquina láser”, “qué material usar”) ayuda mucho al SEO.

---

## 8. Comandos útiles

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local con recarga |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Prueba localmente la versión de producción |

---

Hecho en Quito · Ecuador.
