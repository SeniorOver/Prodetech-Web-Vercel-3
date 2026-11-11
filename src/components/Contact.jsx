import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react'
import { hasWhatsApp, site, waLink } from '../config'

const initialForm = {
  nombre: '',
  ciudad: '',
  contacto: '',
  interes: '',
  mensaje: '',
}

const displayPhone = site.phone || (site.whatsapp ? `+${site.whatsapp}` : 'Respuesta directa')

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)

  const update = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const message = [
      `Hola Prodetech, soy ${form.nombre || 'un cliente interesado'}${form.ciudad ? ` de ${form.ciudad}` : ''}.`,
      form.contacto ? `Mi contacto: ${form.contacto}.` : '',
      form.interes ? `Me interesa: ${form.interes}.` : '',
      form.mensaje ? `Consulta: ${form.mensaje}` : '',
    ]
      .filter(Boolean)
      .join(' ')

    const link = waLink(message)
    if (hasWhatsApp) {
      window.open(link, '_blank', 'noopener,noreferrer')
      setStatus('whatsapp')
    } else {
      window.location.href = link
      setStatus('email')
    }
  }

  const directLink = waLink('Hola Prodetech, quiero información sobre sus máquinas láser.')

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-white/[0.08] bg-[#060A10]">
      <div className="pointer-events-none absolute inset-0">
        <div className="tech-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_70%_20%,black,transparent_75%)]" />
        <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-flame/[0.09] blur-[100px]" />
      </div>

      <div className="shell relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Información */}
          <div className="reveal">
            <div className="eyebrow">Hablemos</div>
            <h2 className="h2 mt-4">
              Cuéntanos qué
              <br />
              <span className="text-flame">quieres producir.</span>
            </h2>
            <p className="lead mt-5 max-w-[440px]">
              Escríbenos con tu idea, el material que quieres trabajar o el equipo que te interesa. Te
              respondemos con una orientación clara y una cotización cuando la necesites.
            </p>

            <div className="mt-8 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              <a
                href={directLink}
                className="group bg-[#080D15] p-5 transition-colors hover:bg-[#0B121C]"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <MessageCircle size={18} className="text-flame" />
                <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  {hasWhatsApp ? 'WhatsApp comercial' : 'Escríbenos'}
                </span>
                <span className="mt-1 block text-[12.5px] font-medium text-mist group-hover:text-flame">
                  {displayPhone}
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="group bg-[#080D15] p-5 transition-colors hover:bg-[#0B121C]">
                <Mail size={18} className="text-flame" />
                <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">Correo</span>
                <span className="mt-1 block break-all text-[12.5px] font-medium text-mist group-hover:text-flame">
                  {site.email}
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=Quitumbe,+Quito,+Ecuador"
                target="_blank"
                rel="noreferrer"
                className="group bg-[#080D15] p-5 transition-colors hover:bg-[#0B121C]"
              >
                <MapPin size={18} className="text-flame" />
                <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">Ubicación</span>
                <span className="mt-1 block text-[12.5px] font-medium text-mist group-hover:text-flame">
                  {site.address}
                </span>
              </a>
              <div className="bg-[#080D15] p-5">
                <Clock size={18} className="text-flame" />
                <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">Horario</span>
                <span className="mt-1 block text-[12px] font-medium leading-relaxed text-mist">{site.hours}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Síguenos</span>
              <span className="h-px flex-1 bg-white/10" />
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center border border-white/10 text-muted transition-colors hover:border-flame/50 hover:text-flame"
                >
                  <Instagram size={14} />
                </a>
              )}
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center border border-white/10 text-muted transition-colors hover:border-flame/50 hover:text-flame"
                >
                  <Facebook size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Formulario */}
          <div className="reveal" style={{ '--reveal-delay': '100ms' }}>
            <div className="relative border border-white/10 bg-[#080D15] p-6 sm:p-8">
              <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-flame" />
              <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-flame" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-[21px] font-bold tracking-tight text-mist">Solicitar cotización</h3>
                  <p className="mt-1 text-[12px] text-muted">Completa los datos y te contactamos.</p>
                </div>
                <span className="hidden border border-flame/25 bg-flame/[0.07] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-flame sm:block">
                  Respuesta directa
                </span>
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="field-label">
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.nombre}
                      onChange={update}
                      placeholder="Tu nombre"
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="ciudad" className="field-label">
                      Ciudad
                    </label>
                    <input
                      id="ciudad"
                      name="ciudad"
                      type="text"
                      autoComplete="address-level2"
                      value={form.ciudad}
                      onChange={update}
                      placeholder="Quito, Guayaquil..."
                      className="field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contacto" className="field-label">
                    WhatsApp o correo *
                  </label>
                  <input
                    id="contacto"
                    name="contacto"
                    type="text"
                    required
                    autoComplete="tel"
                    value={form.contacto}
                    onChange={update}
                    placeholder="Número o correo para responderte"
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="interes" className="field-label">
                    Me interesa
                  </label>
                  <select id="interes" name="interes" value={form.interes} onChange={update} className="field appearance-none">
                    <option value="" className="bg-[#0A1018]">
                      Selecciona una opción
                    </option>
                    <option value="Máquina láser de diodo" className="bg-[#0A1018]">
                      Máquina láser de diodo
                    </option>
                    <option value="Máquina láser CO₂" className="bg-[#0A1018]">
                      Máquina láser CO₂
                    </option>
                    <option value="Máquina láser de fibra" className="bg-[#0A1018]">
                      Máquina láser de fibra
                    </option>
                    <option value="Repuestos o accesorios" className="bg-[#0A1018]">
                      Repuestos o accesorios
                    </option>
                    <option value="Capacitación o soporte" className="bg-[#0A1018]">
                      Capacitación o soporte
                    </option>
                    <option value="Aún no lo sé" className="bg-[#0A1018]">
                      Aún no lo sé, necesito asesoría
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="field-label">
                    ¿Qué quieres fabricar? *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={update}
                    placeholder="Cuéntanos sobre tu proyecto, material o producción estimada."
                    className="field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Enviar consulta
                  <Send size={15} />
                </button>

                <p className="text-center font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-muted/70">
                  Al enviar se abrirá {hasWhatsApp ? 'WhatsApp' : 'tu correo'} con el mensaje listo.
                  <br />
                  No compartimos tus datos.
                </p>

                {status && (
                  <div className="flex items-start gap-2 border border-flame/30 bg-flame/[0.07] px-3 py-2.5">
                    <Check size={14} className="mt-0.5 shrink-0 text-flame" />
                    <p className="text-[11.5px] leading-relaxed text-mist">
                      {status === 'whatsapp'
                        ? 'Abrimos WhatsApp con tu consulta. Si no se abrió, '
                        : 'Abrimos tu correo con la consulta. Si no se abrió, '}
                      <a
                        href={waLink(`Hola Prodetech, soy ${form.nombre}. ${form.mensaje}`)}
                        className="font-semibold text-flame underline decoration-flame/40 underline-offset-2"
                        {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        haz clic aquí
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 border border-white/[0.08] bg-white/[0.02] px-4 py-3">
              <span className="text-[11.5px] text-muted">
                ¿Prefieres conversar directamente?
              </span>
              <a
                href={directLink}
                className="link-arrow shrink-0 text-[12px] text-flame hover:text-flame-300"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {hasWhatsApp ? 'Abrir WhatsApp' : 'Escribir correo'} <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
