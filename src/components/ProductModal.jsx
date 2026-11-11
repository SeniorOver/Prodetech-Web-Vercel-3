import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, Check, X } from 'lucide-react'
import MachineArt from './MachineArt'
import { categoryLabel } from '../data/products'
import { hasWhatsApp, waLink } from '../config'

export default function ProductModal({ product, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!product) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [product, onClose])

  if (!product) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <button
        type="button"
        aria-label="Cerrar ficha"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/85 backdrop-blur-sm"
        tabIndex={-1}
      />

      <div className="animate-rise relative max-h-[92vh] w-full max-w-4xl overflow-y-auto border border-white/15 bg-[#080D15] shadow-card">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#080D15]/95 px-5 py-3 backdrop-blur">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
            Ficha de equipo <span className="text-flame">/ Prodetech</span>
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-8 w-8 items-center justify-center border border-white/10 text-muted transition-colors hover:border-flame/60 hover:text-flame"
          >
            <X size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-[0.92fr_1.08fr]">
          {/* Visual */}
          <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden border-b border-white/10 bg-[#060A10] md:border-b-0 md:border-r">
            <div className="tech-grid absolute inset-0 opacity-50" />
            <div className="absolute inset-0 bg-radial-flame opacity-70" />
            <div className="relative z-10 flex items-center justify-between px-5 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              <span>{categoryLabel[product.category]}</span>
              <span className="text-flame">{product.badge}</span>
            </div>
            <MachineArt kind={product.art} className="relative z-10 h-auto w-full" />
            <div className="relative z-10 flex items-center justify-between border-t border-white/[0.08] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              <span>Configuración disponible</span>
              <span className="text-flame">PRODETECH / EC</span>
            </div>
          </div>

          {/* Detalle */}
          <div className="p-5 sm:p-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-flame">
              {categoryLabel[product.category]}
            </span>
            <h3 id="product-modal-title" className="mt-2 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-tight text-mist">
              {product.name}
            </h3>
            <p className="mt-1 text-[13px] font-medium text-flame-300">{product.tagline}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">{product.description}</p>

            <div className="mt-5">
              <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Especificaciones</div>
              <div className="grid grid-cols-1 gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
                {product.specs.map(([label, value]) => (
                  <div key={label} className="bg-[#0A1018] px-3 py-2.5">
                    <span className="block font-mono text-[8px] uppercase tracking-[0.12em] text-muted">{label}</span>
                    <span className="mt-0.5 block text-[12px] font-medium text-mist">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Aplicaciones</div>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span key={tag} className="chip !px-2.5 !py-0.5 !text-[9px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-start gap-2 border border-white/[0.08] bg-white/[0.02] px-3 py-2.5">
              <Check size={14} className="mt-0.5 shrink-0 text-flame" />
              <p className="text-[11.5px] leading-relaxed text-muted">
                <strong className="font-medium text-mist">Ideal para:</strong> {product.ideal}. Te asesoramos
                sobre la configuración que mejor se adapta a tu proyecto.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <a
                href={waLink(`Hola Prodetech, me interesa el equipo ${product.name}. ¿Me pueden enviar una cotización con las opciones disponibles?`)}
                className="btn-primary flex-1 !min-h-[46px] text-[12.5px]"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                Cotizar este equipo
                <ArrowUpRight size={15} />
              </a>
              <a
                href="#maquinas"
                onClick={onClose}
                className="btn-ghost !min-h-[46px] flex-1 text-[12.5px]"
              >
                Ver otros equipos
              </a>
            </div>

            <p className="mt-3 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-muted/70">
              Precio y disponibilidad se confirman en la cotización.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
