import { useEffect, useState } from 'react'
import { ArrowUpRight, Clock, Facebook, Instagram, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import { hasWhatsApp, site, waLink } from '../config'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      const offset = window.scrollY + 140
      let current = 'inicio'
      for (const link of navLinks) {
        const el = document.querySelector(link.href)
        if (el && el.offsetTop <= offset) current = link.href.slice(1)
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* Barra superior */}
      <div className="hidden border-b border-white/[0.06] bg-[#04070B] lg:block">
        <div className="shell flex h-10 items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin size={12} className="text-flame" />
              {site.city} · {site.country}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={12} className="text-flame" />
              {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-mist">
              <Mail size={12} className="text-flame" />
              {site.email}
            </a>
            {site.phone && (
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 transition-colors hover:text-mist">
                <Phone size={12} className="text-flame" />
                {site.phone}
              </a>
            )}
            {!site.phone && site.whatsapp && (
              <a href={`tel:+${site.whatsapp}`} className="inline-flex items-center gap-2 transition-colors hover:text-mist">
                <Phone size={12} className="text-flame" />
                +{site.whatsapp}
              </a>
            )}
            <span className="h-3 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              {site.social.instagram && (
                <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Prodetech" className="transition-colors hover:text-flame">
                  <Instagram size={13} />
                </a>
              )}
              {site.social.facebook && (
                <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook de Prodetech" className="transition-colors hover:text-flame">
                  <Facebook size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-white/[0.08] bg-ink/90 backdrop-blur-xl'
            : 'border-transparent bg-ink/40 backdrop-blur-sm'
        }`}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-4">
          <a href="#inicio" onClick={close} className="shrink-0">
            <Logo />
            <span className="sr-only">Ir al inicio</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-sm px-3 py-2 text-[13px] font-medium transition-colors ${
                    isActive ? 'text-mist' : 'text-muted hover:text-mist'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-flame transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={waLink('Hola Prodetech, quiero cotizar una máquina láser.')}
              className="btn-primary hidden !min-h-[42px] !px-4 !py-2 text-[12.5px] sm:inline-flex"
              {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              Cotizar ahora
              <ArrowUpRight size={15} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/12 text-mist transition-colors hover:border-flame/60 hover:text-flame lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-white/[0.06] bg-ink/98 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
            open ? 'visible max-h-[calc(100vh-72px)] opacity-100' : 'invisible max-h-0 opacity-0'
          }`}
        >
          <nav className="shell flex flex-col py-4" aria-label="Navegación móvil">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex items-center justify-between border-b border-white/[0.06] py-3.5 text-[15px] text-mist transition-colors hover:text-flame"
              >
                <span>{link.label}</span>
                <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
              </a>
            ))}
            <a
              href={waLink('Hola Prodetech, quiero cotizar una máquina láser.')}
              onClick={close}
              className="btn-primary mt-5 w-full"
              {...(hasWhatsApp ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              Cotizar ahora
              <ArrowUpRight size={16} />
            </a>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin size={12} className="text-flame" /> {site.city}
              </span>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-mist">
                <Mail size={12} className="text-flame" /> {site.email}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
