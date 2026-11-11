import { useState } from 'react'
import { ArrowUpRight, ChevronRight, Crosshair } from 'lucide-react'
import Sample from './Sample'
import { applications } from '../data/site'
import { hasWhatsApp, waLink } from '../config'

const glows = {
  madera: 'from-[#8a552c]/40',
  acrilico: 'from-[#ff5a1f]/35',
  metal: 'from-[#aeb7c1]/20',
  cuero: 'from-[#6b3f29]/45',
  personalizacion: 'from-[#ff6b2c]/30',
}

export default function Applications() {
  const [activeId, setActiveId] = useState(applications[0].id)
  const active = applications.find((a) => a.id === activeId) || applications[0]

  return (
    <section id="aplicaciones" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-flame/[0.05] blur-[100px]" />

      <div className="shell relative">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[680px]">
            <div className="eyebrow">De la idea a la producción</div>
            <h2 className="h2 mt-4">
              Una herramienta.
              <br />
              <span className="text-muted">Un mundo por crear.</span>
            </h2>
          </div>
          <p className="lead max-w-[360px] lg:pb-2">
            El límite no es la máquina: es lo que imaginas. Estas son algunas de las aplicaciones que puedes
            desarrollar con tecnología láser.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10">
          {/* Lista */}
          <div className="reveal order-2 border-t border-white/[0.08] lg:order-1">
            {applications.map((app) => {
              const isActive = app.id === activeId
              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setActiveId(app.id)}
                  aria-expanded={isActive}
                  className={`group block w-full border-b border-white/[0.08] py-5 text-left transition-colors ${
                    isActive ? 'bg-white/[0.015]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="flex items-center gap-4 px-1 sm:px-2">
                    <span className={`font-mono text-[10px] tracking-[0.16em] ${isActive ? 'text-flame' : 'text-muted'}`}>
                      {app.number}
                    </span>
                    <h3
                      className={`flex-1 font-display text-[20px] font-bold tracking-tight transition-colors sm:text-[23px] ${
                        isActive ? 'text-mist' : 'text-muted group-hover:text-mist'
                      }`}
                    >
                      {app.title}
                    </h3>
                    <div className="hidden gap-1.5 sm:flex">
                      {app.tech.map((t) => (
                        <span
                          key={t}
                          className={`border px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.1em] ${
                            isActive ? 'border-flame/40 text-flame-300' : 'border-white/10 text-muted'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ChevronRight
                      size={16}
                      className={`shrink-0 transition-transform ${isActive ? 'rotate-90 text-flame' : 'text-muted'}`}
                    />
                  </div>

                  <div
                    className={`grid transition-all duration-300 ${
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-1 pt-3 sm:pl-9 sm:pr-2">
                        <p className="max-w-[520px] text-[13px] leading-relaxed text-muted">{app.description}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {app.examples.map((ex) => (
                            <span key={ex} className="chip !px-2.5 !py-0.5 !text-[9px]">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[12px] text-muted">¿Tu producto no aparece en la lista?</p>
              <a
                href={waLink('Hola Prodetech, quiero saber si puedo fabricar mi producto con una máquina láser.')}
                className="link-arrow text-[12.5px]"
                {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                Cuéntanos tu idea <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Vista previa */}
          <div className="reveal order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/3.5] overflow-hidden border border-white/10 bg-[#070C13]">
              <span className="absolute left-0 top-0 z-30 h-4 w-4 border-l-2 border-t-2 border-flame" />
              <span className="absolute right-0 top-0 z-30 h-4 w-4 border-r-2 border-t-2 border-flame" />
              <span className="absolute bottom-0 left-0 z-30 h-4 w-4 border-b-2 border-l-2 border-flame" />
              <span className="absolute bottom-0 right-0 z-30 h-4 w-4 border-b-2 border-r-2 border-flame" />

              <div className={`absolute inset-0 bg-gradient-to-t ${glows[active.id]} via-transparent to-transparent`} />
              <div className="tech-grid absolute inset-0 opacity-30" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,8,13,.7)_100%)]" />
              <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
              <Crosshair size={22} className="absolute left-5 top-1/2 -translate-y-1/2 text-flame/50" />

              <div className="relative z-20 flex items-center justify-between px-5 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                <span>Muestra / {active.number}</span>
                <span className="text-flame">{active.tech.join(' · ')}</span>
              </div>

              <div className="absolute inset-0 z-10">
                <Sample kind={active.sample} />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 border-t border-white/[0.08] bg-ink/60 px-5 py-3 backdrop-blur-sm">
                <div>
                  <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-muted">Aplicación</span>
                  <span className="font-display text-[14px] font-bold text-mist">{active.title}</span>
                </div>
                <a
                  href={waLink(`Hola Prodetech, me interesa la aplicación de ${active.title}. ¿Qué máquina me recomiendan?`)}
                  className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-flame transition-colors hover:text-flame-300"
                  {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  Cotizar <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {applications.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setActiveId(a.id)}
                    aria-label={`Ver ${a.title}`}
                    className={`h-1 transition-all ${
                      a.id === activeId ? 'w-8 bg-flame' : 'w-3 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                Hecho con láser · Prodetech
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
