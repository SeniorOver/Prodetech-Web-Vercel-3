import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { hasWhatsApp, site, waLink } from '../config'

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Tecnologías',
    links: [
      ['Láser de diodo', '#maquinas'],
      ['Láser CO₂', '#maquinas'],
      ['Láser de fibra', '#maquinas'],
      ['Repuestos y accesorios', '#repuestos'],
    ],
  },
  {
    title: 'Empresa',
    links: [
      ['Aplicaciones', '#aplicaciones'],
      ['Cómo trabajamos', '#soporte'],
      ['Nosotros', '#nosotros'],
      ['Preguntas frecuentes', '#faq'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#04070B]">
      <div className="shell relative z-10 pt-14">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.45fr_1fr_1fr_1.15fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[310px] text-[12.5px] leading-relaxed text-muted">
              Máquinas láser de diodo, CO₂ y fibra, repuestos, capacitación y soporte técnico para emprendedores
              y empresas en Ecuador.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de Prodetech"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-muted transition-colors hover:border-flame/50 hover:text-flame"
                >
                  <Instagram size={15} />
                </a>
              )}
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook de Prodetech"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-muted transition-colors hover:border-flame/50 hover:text-flame"
                >
                  <Facebook size={15} />
                </a>
              )}
              <a
                href={waLink('Hola Prodetech, quiero información sobre sus máquinas láser.')}
                aria-label="WhatsApp de Prodetech"
                className="flex h-9 w-9 items-center justify-center border border-white/10 text-muted transition-colors hover:border-flame/50 hover:text-flame"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-flame">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[12.5px] text-muted transition-colors hover:text-mist">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-flame">Contacto</h3>
            <ul className="mt-4 space-y-3 text-[12.5px] text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-start gap-2 transition-colors hover:text-mist">
                  <Mail size={13} className="mt-0.5 shrink-0 text-flame" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0 text-flame" />
                {site.address}
              </li>
              <li>
                <a
                  href={waLink('Hola Prodetech, quiero cotizar una máquina láser.')}
                  className="link-arrow text-[12.5px] text-mist hover:text-flame"
                  {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  Cotizar ahora <ArrowUpRight size={13} className="text-flame" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/[0.08] py-5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center">
          <span>© {year} Prodetech · Todos los derechos reservados.</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Quito · Ecuador</span>
            <span className="hidden h-2.5 w-px bg-white/10 sm:block" />
            <span>Especificaciones sujetas a confirmación</span>
          </span>
        </div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1200 150"
        className="pointer-events-none w-full select-none overflow-hidden"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          x="600"
          y="124"
          textAnchor="middle"
          fontFamily="Archivo, Helvetica Neue, Arial, sans-serif"
          fontSize="160"
          fontWeight="900"
          letterSpacing="-8"
          fill="rgba(255,255,255,0.03)"
        >
          PRODETECH
        </text>
      </svg>
    </footer>
  )
}
