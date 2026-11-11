export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Prodetech">
      <rect width="40" height="40" rx="7" fill="#0B1119" stroke="rgba(255,255,255,0.14)" />
      <path
        d="M20 5.5 32.5 12.8v14.4L20 34.5 7.5 27.2V12.8Z"
        fill="none"
        stroke="#FF6B2C"
        strokeWidth="1.5"
      />
      <path
        d="M15.5 27.5V12.8h6.3a4.7 4.7 0 0 1 0 9.4h-6.3"
        fill="none"
        stroke="#F3F1EC"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27" cy="27.5" r="2" fill="#FF6B2C" />
    </svg>
  )
}

export default function Logo({ className = '', showText = true, compact = false }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={compact ? 'h-8 w-8 shrink-0' : 'h-10 w-10 shrink-0'} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-mist">
            PRODETECH
          </span>
          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.28em] text-muted">
            Tecnología láser · EC
          </span>
        </span>
      )}
    </span>
  )
}
