import { ArrowRight, ArrowUpRight, Crosshair } from 'lucide-react'
import { LogoMark } from './Logo'
import { hasWhatsApp, waLink } from '../config'

const values = [
  {
    number: '01',
    title: 'Conocimiento técnico',
    text: 'Entendemos las máquinas, los materiales y el software. Hablamos tu idioma, no solo el de la ficha técnica.',
  },
  {
    number: '02',
    title: 'Trato directo',
    text: 'Conversas con personas que conocen el equipo y tu proyecto, no con un intermediario que solo toma el pedido.',
  },
  {
    number: '03',
    title: 'Compromiso con tu producción',
    text: 'Nos interesa que la máquina trabaje y que tú puedas vender. El acompañamiento sigue después de la entrega.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="section-pad relative border-y border-white/[0.07] bg-[#060A10]">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div className="reveal">
            <div className="eyebrow">Nosotros</div>
            <h2 className="h2 mt-4">
              Tecnología láser
              <br />
              <span className="text-muted">con acento ecuatoriano.</span>
            </h2>

            <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-muted">
              <p>
                <strong className="font-medium text-mist">Prodetech</strong> es un negocio ecuatoriano dedicado a
                la comercialización de máquinas láser, equipos de grabado y corte, repuestos y soluciones para
                fabricación y personalización.
              </p>
              <p>
                Nacimos en Quito y trabajamos con emprendedores, talleres y empresas que quieren producir mejor.
                Importamos equipos y componentes, los configuramos según cada operación y acompañamos a nuestros
                clientes en la puesta en marcha.
              </p>
              <p>
                No creemos en vender por vender. Creemos en que cada máquina tenga un propósito y que quien la
                compra sepa cómo sacarle provecho.
              </p>
            </div>

            <div className="mt-8 space-y-5 border-t border-white/[0.08] pt-6">
              {values.map((value) => (
                <div key={value.number} className="flex gap-4">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-flame">{value.number}</span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-mist">{value.title}</h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#maquinas" className="btn-primary group">
                Ver equipos
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={waLink('Hola Prodetech, quiero conocer más sobre la empresa.')}
                className="btn-ghost"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                Hablemos
                <ArrowUpRight size={15} className="text-flame" />
              </a>
            </div>
          </div>

          {/* Panel de identidad */}
          <div className="reveal relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[470px] overflow-hidden border border-white/10 bg-[#070C13] p-8 sm:p-10">
              <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-flame" />
              <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-flame" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-flame" />
              <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-flame" />
              <div className="tech-grid absolute inset-0 opacity-40" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-flame/[0.14] blur-3xl" />

              <div className="relative flex flex-col items-center text-center">
                <div className="relative flex h-44 w-44 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-dashed border-white/15" />
                  <span className="absolute inset-5 rounded-full border border-white/10" />
                  <span className="absolute inset-0 rounded-full bg-flame/[0.06] blur-2xl" />
                  <LogoMark className="relative h-20 w-20" />
                </div>

                <h3 className="mt-4 font-display text-[26px] font-extrabold tracking-[0.08em] text-mist">
                  PRODETECH
                </h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-flame">
                  Tecnología láser · Ecuador
                </p>

                <div className="mt-7 grid w-full grid-cols-3 gap-px border border-white/[0.08] bg-white/[0.08]">
                  {['Diodo', 'CO₂', 'Fibra'].map((t) => (
                    <div key={t} className="bg-[#0A1018] px-2 py-3">
                      <span className="block font-mono text-[8px] uppercase tracking-[0.12em] text-muted">Línea</span>
                      <span className="mt-0.5 block font-display text-[13px] font-bold text-mist">{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  <Crosshair size={12} className="text-flame" />
                  0° 13′ S · 78° 30′ O · Quito
                </div>
                <p className="mt-4 max-w-[300px] text-[12px] leading-relaxed text-muted">
                  Fundada por dos hermanos en Quito. Un equipo técnico y comercial enfocado en que la tecnología
                  láser sea una herramienta real para tu negocio.
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/[0.08] bg-ink/60 px-5 py-2.5 font-mono text-[8px] uppercase tracking-[0.16em] text-muted backdrop-blur-sm">
                <span>Desde Quito para todo Ecuador</span>
                <span className="text-flame">PRODETECH / EC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
