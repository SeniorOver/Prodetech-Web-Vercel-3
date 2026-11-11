import { ArrowDown, ArrowRight, ArrowUpRight, Check, Crosshair, ShieldCheck, Wrench } from 'lucide-react'
import MachineArt from './MachineArt'
import { hasWhatsApp, waLink } from '../config'
import { stats } from '../data/site'

const proof = [
  { icon: ShieldCheck, title: 'Asesoría real', text: 'Antes de elegir' },
  { icon: Crosshair, title: 'Configuración', text: 'Según tu producción' },
  { icon: Wrench, title: 'Soporte', text: 'Y repuestos' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="tech-grid absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_60%_35%,black,transparent_78%)]" />
        <div className="absolute -right-40 top-[-18rem] h-[42rem] w-[42rem] rounded-full bg-flame/[0.11] blur-[110px]" />
        <div className="absolute -left-52 top-40 h-[32rem] w-[32rem] rounded-full bg-[#1d3b63]/20 blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-12 pb-14 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-20 lg:pt-20">
          {/* Texto */}
          <div>
            <div className="animate-rise inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Quito · Ecuador · Cobertura nacional
              </span>
            </div>

            <h1 className="display mt-6 text-[clamp(2.6rem,5.5vw,4.5rem)]">
              Tecnología láser
              <br />
              que <span className="text-flame text-glow">impulsa</span>
              <br />
              tu negocio.
            </h1>

            <p className="lead mt-6 max-w-[520px]">
              Máquinas de <strong className="font-medium text-mist">diodo, CO₂ y fibra</strong> para crear,
              personalizar y producir. Te acompañamos desde la elección del equipo hasta la puesta en marcha.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#maquinas" className="btn-primary group">
                Explorar máquinas
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={waLink('Hola Prodetech, quiero asesoría para elegir una máquina láser.')}
                className="btn-ghost group"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                Hablar con un asesor
                <ArrowUpRight size={16} className="text-flame transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {proof.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-flame/25 bg-flame/[0.08] text-flame">
                    <Icon size={13} />
                  </span>
                  <span className="text-[12px] leading-tight text-muted">
                    <strong className="block font-semibold text-mist">{title}</strong>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="animate-rise relative mx-auto w-full max-w-[600px] [animation-delay:180ms]">
            <div className="absolute -inset-8 rounded-full bg-flame/[0.13] blur-[70px]" />
            <div className="animate-spin-slow absolute -inset-10 hidden rounded-full border border-dashed border-white/[0.07] sm:block" />

            <div className="relative overflow-hidden border border-white/12 bg-[#070C13]/90 shadow-card">
              {/* Esquinas técnicas */}
              <span className="absolute left-0 top-0 z-20 h-4 w-4 border-l-2 border-t-2 border-flame" />
              <span className="absolute right-0 top-0 z-20 h-4 w-4 border-r-2 border-t-2 border-flame" />
              <span className="absolute bottom-0 left-0 z-20 h-4 w-4 border-b-2 border-l-2 border-flame" />
              <span className="absolute bottom-0 right-0 z-20 h-4 w-4 border-b-2 border-r-2 border-flame" />

              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                  FIG. 001 / SISTEMA CO₂
                </span>
                <span className="hidden sm:inline">CORTE · GRABADO</span>
              </div>

              <div className="tech-grid relative">
                <MachineArt kind="co2" className="relative z-10 h-auto w-full" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px animate-scan bg-gradient-to-r from-transparent via-flame/70 to-transparent" />
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                <span>PRECISIÓN INDUSTRIAL</span>
                <span className="text-flame">PRODETECH / EC</span>
              </div>

              {/* Etiquetas flotantes */}
              <div className="absolute right-3 top-14 z-20 hidden border border-white/12 bg-ink/90 px-3 py-2 backdrop-blur-sm sm:block">
                <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-muted">Área de trabajo</span>
                <span className="font-display text-sm font-bold text-mist">900 × 600 mm</span>
              </div>
              <div className="absolute bottom-14 left-3 z-20 hidden items-center gap-2 border border-white/12 bg-ink/90 px-3 py-2 backdrop-blur-sm sm:flex">
                <span className="flex h-6 w-6 items-center justify-center bg-flame text-[#180a03]">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-[10px] leading-tight text-muted">
                  <strong className="block text-[11px] font-semibold text-mist">Lista para producir</strong>
                  Configurada y probada
                </span>
              </div>
            </div>

            <div className="absolute -bottom-5 right-4 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted sm:flex">
              <ArrowDown size={12} className="text-flame" />
              Conoce las tres tecnologías
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="relative grid grid-cols-2 gap-px border-t border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink px-5 py-6 sm:px-7">
              <div className="display flex items-baseline text-[clamp(1.7rem,3vw,2.4rem)] text-mist">
                {stat.value}
                <span className="ml-1.5 inline-block h-1.5 w-1.5 bg-flame" aria-hidden="true" />
              </div>
              <div className="mt-1.5 text-[12px] font-semibold text-mist">{stat.label}</div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
