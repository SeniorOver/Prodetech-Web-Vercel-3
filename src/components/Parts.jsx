import { ArrowUpRight, Check, PackageCheck } from 'lucide-react'
import MachineArt from './MachineArt'
import { parts } from '../data/site'
import { hasWhatsApp, waLink } from '../config'

export default function Parts() {
  return (
    <section id="repuestos" className="section-pad relative overflow-hidden border-y border-white/[0.07] bg-[#060A10]">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          {/* Visual */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-full bg-flame/[0.07] blur-3xl" />
            <div className="relative overflow-hidden border border-white/10 bg-[#070C13]">
              <span className="absolute left-0 top-0 z-20 h-4 w-4 border-l-2 border-t-2 border-flame" />
              <span className="absolute right-0 top-0 z-20 h-4 w-4 border-r-2 border-t-2 border-flame" />
              <span className="absolute bottom-0 left-0 z-20 h-4 w-4 border-b-2 border-l-2 border-flame" />
              <span className="absolute bottom-0 right-0 z-20 h-4 w-4 border-b-2 border-r-2 border-flame" />

              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                <span>Componentes / Óptica · Rotativo · Aire</span>
                <span className="text-flame">FIG. 004</span>
              </div>
              <div className="tech-grid relative">
                <div className="absolute inset-0 bg-radial-flame opacity-60" />
                <MachineArt kind="parts" className="relative z-10 h-auto w-full" />
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                <span>Repuestos originales y compatibles</span>
                <span className="text-flame">PRODETECH / EC</span>
              </div>

              <div className="absolute bottom-16 right-4 z-20 hidden items-center gap-2 border border-white/12 bg-ink/90 px-3 py-2 backdrop-blur-sm sm:flex">
                <PackageCheck size={15} className="text-flame" />
                <span className="text-[10px] leading-tight text-muted">
                  <strong className="block text-[11px] font-semibold text-mist">Pedido por cotización</strong>
                  Sujeto a disponibilidad
                </span>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="reveal order-1 lg:order-2">
            <div className="eyebrow">Repuestos y accesorios</div>
            <h2 className="h2 mt-4">
              Tu máquina no
              <br />
              <span className="text-flame">debería detenerse.</span>
            </h2>
            <p className="lead mt-5 max-w-[460px]">
              Mantén tu equipo produciendo con componentes adecuados. Si no sabes qué pieza necesitas, envíanos
              una foto y el modelo de tu máquina: te ayudamos a identificarla.
            </p>

            <div className="mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {parts.map((part) => (
                <div key={part.title} className="flex gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-flame/30 bg-flame/[0.08] text-flame">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="text-[13px] font-semibold text-mist">{part.title}</h3>
                    <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">{part.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink('Hola Prodetech, necesito un repuesto o accesorio para mi máquina láser. Les envío foto y modelo.')}
                className="btn-primary"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                Solicitar repuesto
                <ArrowUpRight size={16} />
              </a>
              <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                Envíanos foto + modelo
                <br />
                para identificar la pieza
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
