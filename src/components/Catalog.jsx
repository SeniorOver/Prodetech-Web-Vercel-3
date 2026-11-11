import { useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, SlidersHorizontal } from 'lucide-react'
import MachineArt from './MachineArt'
import ProductModal from './ProductModal'
import { categories, categoryLabel, filters, products } from '../data/products'
import { hasWhatsApp, waLink } from '../config'

export default function Catalog() {
  const [filter, setFilter] = useState('todos')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'todos' ? products : products.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="maquinas" className="section-pad relative border-y border-white/[0.07] bg-[#060A10]">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />

      <div className="shell relative">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[680px]">
            <div className="eyebrow">Catálogo de equipos</div>
            <h2 className="h2 mt-4">
              Una máquina para
              <br />
              <span className="text-flame">lo que quieres producir.</span>
            </h2>
          </div>
          <div className="max-w-[330px] lg:pb-2">
            <p className="lead">
              Configuraciones de diodo, CO₂ y fibra. Cada equipo se cotiza según potencia, área de trabajo y
              accesorios.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              <SlidersHorizontal size={12} className="text-flame" />
              {visible.length} {visible.length === 1 ? 'equipo' : 'equipos'} en esta selección
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="reveal mt-10 flex flex-wrap items-center gap-2 border-y border-white/[0.07] py-3">
          {filters.map((f) => {
            const count = f.id === 'todos' ? products.length : products.filter((p) => p.category === f.id).length
            const active = filter === f.id
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`inline-flex items-center gap-2 rounded-sm border px-3.5 py-2 text-[12px] font-medium transition-all ${
                  active
                    ? 'border-flame bg-flame text-[#180a03]'
                    : 'border-white/10 bg-white/[0.02] text-muted hover:border-white/25 hover:text-mist'
                }`}
              >
                {f.label}
                <span className={`font-mono text-[9px] ${active ? 'text-[#180a03]/70' : 'text-muted/60'}`}>
                  {String(count).padStart(2, '0')}
                </span>
              </button>
            )
          })}
          <a href="#contacto" className="ml-auto hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-flame sm:inline-flex">
            ¿Buscas otra configuración? <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((product, i) => (
            <article
              key={`${filter}-${product.id}`}
              className="animate-rise group flex flex-col overflow-hidden border border-white/[0.08] bg-panel/60 transition-all duration-300 hover:border-flame/35 hover:bg-panel"
              style={{ animationDelay: `${Math.min(i, 8) * 55}ms` }}
            >
              <div className="relative h-[250px] overflow-hidden border-b border-white/[0.07] bg-[#070C13]">
                <div className="tech-grid absolute inset-0 opacity-40" />
                <div className="absolute inset-0 bg-radial-flame opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                <span className="absolute left-3.5 top-3.5 z-10 bg-flame px-2 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-[#180a03]">
                  {product.badge}
                </span>
                <span className="absolute right-3.5 top-3.5 z-10 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  P / {String(i + 1).padStart(2, '0')}
                </span>
                <MachineArt
                  kind={product.art}
                  className="absolute inset-x-0 bottom-[-10px] z-[1] h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] h-14 bg-gradient-to-t from-[#070C13] to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-flame">
                    {categoryLabel[product.category]}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                    {product.specs[0][1]}
                  </span>
                </div>

                <h3 className="mt-2.5 font-display text-[21px] font-bold tracking-tight text-mist">
                  {product.name}
                </h3>
                <p className="mt-1 text-[12.5px] font-medium text-flame-300">{product.tagline}</p>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">{product.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-px border border-white/[0.07] bg-white/[0.07]">
                  {product.specs.slice(0, 2).map(([label, value]) => (
                    <div key={label} className="bg-[#0A1018] px-3 py-2">
                      <span className="block font-mono text-[8px] uppercase tracking-[0.12em] text-muted">{label}</span>
                      <span className="mt-0.5 block text-[11.5px] font-medium text-mist">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="chip !px-2.5 !py-0.5 !text-[9px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelected(product)}
                    className="inline-flex flex-1 items-center justify-center gap-2 border border-white/12 px-3 py-2.5 text-[12px] font-semibold text-mist transition-colors hover:border-flame/50 hover:text-flame"
                  >
                    Ver ficha
                    <ArrowRight size={13} />
                  </button>
                  <a
                    href={waLink(`Hola Prodetech, me interesa el equipo ${product.name}. ¿Me pueden enviar una cotización?`)}
                    className="inline-flex flex-1 items-center justify-center gap-2 bg-flame px-3 py-2.5 text-[12px] font-semibold text-[#180a03] transition-colors hover:bg-flame-400"
                    {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    Cotizar
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Tarjeta de cierre */}
          <article className="animate-rise relative flex min-h-[360px] flex-col justify-between overflow-hidden border border-dashed border-white/15 bg-white/[0.02] p-6">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/[0.09] blur-3xl" />
            <div className="relative">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-flame">Configuración a medida</span>
              <h3 className="mt-4 font-display text-[26px] font-bold leading-tight tracking-tight text-mist">
                ¿No ves la{' '}
                <br />
                configuración exacta?
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                Potencia, área de trabajo, controlador y accesorios se ajustan a tu operación. Cuéntanos qué
                necesitas y armamos una propuesta.
              </p>
            </div>
            <div className="relative mt-8">
              <div className="mb-4 flex flex-wrap gap-1.5">
                {categories.map((c) => (
                  <span key={c.id} className="chip !text-[9px]">
                    {c.name}
                  </span>
                ))}
              </div>
              <a
                href={waLink('Hola Prodetech, necesito una configuración especial de máquina láser. ¿Me pueden asesorar?')}
                className="btn-primary w-full !min-h-[44px] text-[12.5px]"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                Pedir asesoría
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        </div>

        <p className="reveal mt-6 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted/70">
          * Las especificaciones y disponibilidad se confirman en la cotización. Los equipos pueden configurarse
          según potencia, área de trabajo y accesorios.
        </p>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
