// ============================================================
//  CONFIGURACIÓN DE PRODETECH
//  Edita este archivo para actualizar los datos de contacto.
//  Todo el sitio toma la información desde aquí.
// ============================================================

export const site = {
  name: 'Prodetech',
  tagline: 'Tecnología láser que impulsa tu negocio',
  domain: 'https://prodetechec.com',

  // WhatsApp comercial en formato internacional, SIN +, espacios ni guiones.
  // Ecuador: 0960701199 → 593960701199
  whatsapp: '593960701199',

  // Teléfono visible (opcional). Ejemplo: '+593 98 765 4321'
  phone: '+593 96 070 1199',

  email: 'infoec.prodetech@gmail.com',

  city: 'Quito',
  region: 'Pichincha',
  country: 'Ecuador',
  address: 'Quitumbe, Quito · Pichincha, Ecuador',
  hours: 'Lun a Vie · 09:00 – 18:00 · Sáb · 09:00 – 13:00',

  // Verifica y actualiza estos enlaces con tus cuentas reales.
  social: {
    instagram: 'https://www.instagram.com/prodetechec/',
    facebook: 'https://www.facebook.com/PRODETECH.Ingenieria.y.Desarrollo/',
    tiktok: '',
    youtube: '',
  },
}

export const hasWhatsApp = Boolean(site.whatsapp)

/**
 * Genera un enlace de WhatsApp con mensaje precargado.
 * Si no hay número configurado, devuelve un mailto equivalente.
 */
export function waLink(message = 'Hola Prodetech, quiero información sobre sus máquinas láser.') {
  if (site.whatsapp) {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
  }
  const subject = 'Consulta desde prodetechec.com'
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
}

export function mailLink(message = 'Hola Prodetech, quiero información sobre sus máquinas láser.') {
  return `mailto:${site.email}?subject=${encodeURIComponent('Consulta desde prodetechec.com')}&body=${encodeURIComponent(message)}`
}
