import { useState } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { faqs } from '../data/site'
import { hasWhatsApp, waLink } from '../config'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-pad relative" aria-labelledby="faq-title">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <div className="eyebrow">Preguntas frecuentes</div>
            <h2 id="faq-title" className="h2 mt-4">
              Hablemos
              <br />
              <span className="text-flame">con claridad.</span>
            </h2>
            <p className="lead mt-5 max-w-[340px]">
              Resolvemos las dudas más comunes antes de que des el siguiente paso. Si te queda algo pendiente,
              escríbenos.
            </p>
            <a
              href={waLink('Hola Prodetech, tengo una consulta sobre sus máquinas láser.')}
              className="link-arrow mt-6 text-[13px]"
              {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              Haznos tu consulta <ArrowUpRight size={14} className="text-flame" />
            </a>
          </div>

          <div className="reveal border-t border-white/[0.08]">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={faq.question} className="border-b border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-start justify-between gap-5 py-5 text-left transition-colors hover:text-flame"
                  >
                    <span className="flex gap-4">
                      <span className={`mt-0.5 font-mono text-[10px] tracking-[0.14em] ${isOpen ? 'text-flame' : 'text-muted'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-display text-[15px] font-semibold tracking-tight sm:text-[16.5px] ${isOpen ? 'text-mist' : 'text-mist/85'}`}>
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border transition-colors ${
                        isOpen ? 'border-flame bg-flame text-[#180a03]' : 'border-white/15 text-muted'
                      }`}
                    >
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pl-9 pr-8 text-[13px] leading-relaxed text-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
