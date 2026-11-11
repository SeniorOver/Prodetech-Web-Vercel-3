import { ArrowUpRight } from 'lucide-react'
import { processSteps } from '../data/site'
import { hasWhatsApp, waLink } from '../config'

export default function Process() {
  return (
    <section className="section-pad relative">
      <div className="shell">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[660px]">
            <div className="eyebrow">Cómo trabajamos</div>
            <h2 className="h2 mt-4">
              Un proceso claro,
              <br />
              <span className="text-muted">de principio a fin.</span>
            </h2>
          </div>
          <p className="lead max-w-[340px] lg:pb-2">
            Sin sorpresas ni pasos sueltos. Sabes qué sigue en cada etapa y con quién hablar.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="reveal group relative bg-ink p-6 transition-colors duration-300 hover:bg-[#090F17] sm:p-7"
              style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="display text-[34px] leading-none text-white/[0.13] transition-colors duration-300 group-hover:text-flame/30">
                  {step.number}
                </span>
                <span className="h-px w-10 bg-white/10 transition-colors group-hover:bg-flame/50" />
              </div>
              <h3 className="mt-6 font-display text-[17px] font-bold tracking-tight text-mist">{step.title}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-6 flex flex-col items-start justify-between gap-3 border border-flame/25 bg-flame/[0.05] px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-[13px] text-mist">
            <strong className="font-semibold">Empieza por una conversación.</strong>{' '}
            <span className="text-muted">Sin compromiso, sin presión de compra.</span>
          </p>
          <a
            href={waLink('Hola Prodetech, quiero iniciar el proceso de asesoría para comprar una máquina láser.')}
            className="link-arrow shrink-0 text-[13px] text-flame hover:text-flame-300"
            {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            Agendar asesoría <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
