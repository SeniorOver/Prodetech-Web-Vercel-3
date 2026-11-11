import { ArrowRight, ArrowUpRight } from 'lucide-react'
import MachineArt from './MachineArt'
import { categories } from '../data/products'

export default function Categories() {
  return (
    <section className="section-pad relative" aria-labelledby="tecnologias-title">
      <div className="shell">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[640px]">
            <div className="eyebrow">Nuestras tecnologías</div>
            <h2 id="tecnologias-title" className="h2 mt-4">
              Tres formas de crear.
              <br />
              <span className="text-muted">Una sola precisión.</span>
            </h2>
          </div>
          <p className="lead max-w-[360px] lg:pb-2">
            Cada tecnología tiene su terreno. Te ayudamos a identificar cuál encaja con tu material, tu espacio
            y tu meta de producción.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#maquinas"
              className="reveal group relative flex flex-col overflow-hidden border border-white/[0.08] bg-panel/50 transition-colors duration-300 hover:border-flame/40"
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <div className="relative h-[250px] overflow-hidden border-b border-white/[0.07] bg-[#070C13]">
                <div className="tech-grid absolute inset-0 opacity-50" />
                <div className="absolute left-0 top-0 h-40 w-40 bg-radial-flame opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute left-4 top-4 z-10 font-mono text-[10px] tracking-[0.18em] text-muted">
                  {cat.number} / {cat.mark}
                </div>
                <span className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center border border-white/10 bg-ink/60 text-muted transition-all duration-300 group-hover:border-flame/50 group-hover:bg-flame group-hover:text-[#180a03]">
                  <ArrowUpRight size={15} />
                </span>
                <MachineArt
                  kind={cat.art}
                  className="absolute inset-x-0 bottom-[-14px] z-[1] h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] h-16 bg-gradient-to-t from-[#070C13] to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[22px] font-bold tracking-tight text-mist">{cat.name}</h3>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-flame">{cat.ideal}</span>
                <p className="mt-3 font-display text-[15px] font-semibold text-flame-300">{cat.headline}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">{cat.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cat.materials.map((m) => (
                    <span key={m} className="chip !px-2.5 !py-0.5 !text-[9px]">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6 text-[12.5px] font-semibold text-mist">
                  Ver equipos
                  <ArrowRight size={14} className="text-flame transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-6 flex flex-col items-start justify-between gap-3 border border-white/[0.08] bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-[13px] text-muted">
            <strong className="font-semibold text-mist">¿No sabes cuál elegir?</strong> Cuéntanos qué quieres
            fabricar y te orientamos sin compromiso.
          </p>
          <a href="#contacto" className="link-arrow shrink-0 text-[13px]">
            Recibir asesoría <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
