import { ArrowUpRight, GraduationCap, Headphones, MapPin, PackageCheck } from 'lucide-react'
import { hasWhatsApp, site, waLink } from '../config'

const services = [
  {
    icon: GraduationCap,
    title: 'Capacitación práctica',
    text: 'Puesta en marcha, manejo del equipo, configuración del software y primeras aplicaciones.',
  },
  {
    icon: Headphones,
    title: 'Soporte técnico',
    text: 'Orientación directa para resolver dudas de operación, ajustes y mantenimiento.',
  },
  {
    icon: PackageCheck,
    title: 'Repuestos y continuidad',
    text: 'Acceso a lentes, boquillas, rotativos, air assist y componentes para tu equipo.',
  },
]

export default function Support() {
  return (
    <section id="soporte" className="section-pad relative">
      <div className="shell">
        <div className="reveal relative overflow-hidden border border-white/10 bg-[#070C13]">
          <div className="tech-grid absolute inset-0 opacity-30" />
          <div className="absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-flame/[0.12] blur-[80px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flame/70 to-transparent" />

          <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.02fr_0.98fr] lg:p-12">
            <div>
              <div className="eyebrow">Soporte y capacitación</div>
              <h2 className="h2 mt-4">
                Comprar es el inicio.
                <br />
                <span className="text-flame">Producir es el objetivo.</span>
              </h2>
              <p className="lead mt-5 max-w-[480px]">
                Te acompañamos para que el equipo no se quede parado y tu inversión empiece a trabajar. La
                asesoría no termina cuando recibes la máquina.
              </p>

              <div className="mt-7 inline-flex flex-wrap items-center gap-x-5 gap-y-2 border border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  <MapPin size={12} className="text-flame" /> {site.city} · {site.country}
                </span>
                <span className="h-3 w-px bg-white/10" />
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  Atención directa
                </span>
              </div>

              <div className="mt-7">
                <a
                  href={waLink('Hola Prodetech, necesito soporte o capacitación para mi máquina láser.')}
                  className="btn-ghost"
                  {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  Hablar con soporte
                  <ArrowUpRight size={16} className="text-flame" />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {services.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  className={`flex gap-4 py-5 ${i !== 0 ? 'border-t border-white/[0.08]' : ''}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-flame/25 bg-flame/[0.07] text-flame">
                    <Icon size={17} />
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-bold tracking-tight text-mist">{title}</h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
