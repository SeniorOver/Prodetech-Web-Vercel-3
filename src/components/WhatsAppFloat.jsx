import { Mail, MessageCircle } from 'lucide-react'
import { hasWhatsApp, waLink } from '../config'

export default function WhatsAppFloat() {
  const href = hasWhatsApp
    ? waLink('Hola Prodetech, quiero cotizar una máquina láser.')
    : '#contacto'

  return (
    <a
      href={href}
      aria-label={hasWhatsApp ? 'Cotizar por WhatsApp' : 'Ir a contacto'}
      className={`group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full py-3 pl-3.5 pr-4 text-[12px] font-semibold shadow-[0_18px_50px_-12px_rgba(0,0,0,.85)] transition-transform hover:-translate-y-0.5 ${
        hasWhatsApp
          ? 'bg-[#25D366] text-[#052b14]'
          : 'bg-flame text-[#180a03]'
      }`}
      {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
        {hasWhatsApp ? <MessageCircle size={17} /> : <Mail size={16} />}
      </span>
      <span className="hidden sm:inline">{hasWhatsApp ? 'Cotizar por WhatsApp' : 'Contacto'}</span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-current opacity-10" />
    </a>
  )
}
