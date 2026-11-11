import {
  ArrowUpRight,
  Compass,
  GraduationCap,
  Handshake,
  Layers,
  Ship,
  Wrench,
} from 'lucide-react'
import { benefits } from '../data/site'
import { hasWhatsApp, waLink } from '../config'

const icons = {
  compass: Compass,
  ship: Ship,
  graduation: GraduationCap,
  wrench: Wrench,
  layers: Layers,
  handshake: Handshake,
}

export default function WhyUs() {
  return (
    <section className="section-pad relative border-y border-white/[0.07] bg-[#060A10]">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <div className="eyebrow">Por qué Prodetech</div>
            <h2 className="h2 mt-4">
              El equipo importa.
              <br />
              <span className="text-flame">El respaldo también.</span>
            </h2>
            <p className="lead mt-5 max-w-[420px]">
              Una máquina láser es una inversión. Nuestro trabajo es que sepas qué comprar, cómo usarla y con
              quién contar cuando la necesites.
            </p>
            <a
              href={waLink('Hola Prodetech, quiero conocer más sobre su acompañamiento y soporte.')}
              className="btn-ghost mt-7"
              {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              Conoce cómo trabajamos
              <ArrowUpRight size={16} className="text-flame" />
            </a>

            <div className="mt-10 hidden border-l-2 border-flame/60 pl-4 lg:block">
              <p className="font-display text-[17px] font-semibold leading-snug text-mist">
                “No vendemos máquinas.
                <br />
                Instalamos capacidades.”
              </p>
              <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                Prodetech · Quito, Ecuador
              </span>
            </div>
          </div>

          <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {benefits.map((benefit, i) => {
              const Icon = icons[benefit.icon] || Compass
              return (
                <article
                  key={benefit.title}
                  className="reveal group relative bg-[#080D15] p-6 transition-colors duration-300 hover:bg-[#0B121C]"
                  style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-flame/25 bg-flame/[0.07] text-flame transition-colors group-hover:bg-flame group-hover:text-[#180a03]">
                      <Icon size={17} />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-muted/60">{benefit.number}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[17px] font-bold tracking-tight text-mist">{benefit.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{benefit.text}</p>
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-flame transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
