import { Zap } from 'lucide-react'

const items = [
  'Láser de diodo',
  'Láser CO₂',
  'Láser de fibra',
  'Repuestos',
  'Capacitación',
  'Soporte técnico',
  'Importación directa',
  'Asesoría personalizada',
]

export default function TechStrip() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.08] bg-[#060A10]">
      <div className="mask-fade-x flex">
        <div className="animate-marquee flex shrink-0 items-center gap-8 py-3.5 pr-8">
          {[...items, ...items].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex shrink-0 items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
            >
              {item}
              <Zap size={11} className="text-flame/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
