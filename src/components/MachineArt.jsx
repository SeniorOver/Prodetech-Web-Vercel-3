import { useId } from 'react'

/**
 * Ilustraciones técnicas vectoriales de los equipos.
 * No dependen de imágenes externas: cargan rápido y siempre se ven nítidas.
 */
export default function MachineArt({ kind = 'co2', className = '', label }) {
  const rawId = useId()
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '')
  const g = (name) => `${name}-${uid}`

  const metal = (
    <linearGradient id={g('metal')} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#5d6977" />
      <stop offset="0.28" stopColor="#333e4b" />
      <stop offset="0.55" stopColor="#151d27" />
      <stop offset="0.78" stopColor="#3a4653" />
      <stop offset="1" stopColor="#1b2430" />
    </linearGradient>
  )

  const metalDark = (
    <linearGradient id={g('metalDark')} x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0" stopColor="#2b3644" />
      <stop offset="0.5" stopColor="#141c26" />
      <stop offset="1" stopColor="#090e15" />
    </linearGradient>
  )

  const glass = (
    <linearGradient id={g('glass')} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#1a2430" />
      <stop offset="0.45" stopColor="#0b1119" />
      <stop offset="0.72" stopColor="#2a1a12" />
      <stop offset="1" stopColor="#0a0f16" />
    </linearGradient>
  )

  const flame = (
    <linearGradient id={g('flame')} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#ffb083" />
      <stop offset="0.5" stopColor="#ff6b2c" />
      <stop offset="1" stopColor="#ff4d0f" />
    </linearGradient>
  )

  const glow = (
    <radialGradient id={g('glow')}>
      <stop offset="0" stopColor="#ff7a3d" stopOpacity="0.9" />
      <stop offset="0.45" stopColor="#ff5f1f" stopOpacity="0.35" />
      <stop offset="1" stopColor="#ff5f1f" stopOpacity="0" />
    </radialGradient>
  )

  const wood = (
    <linearGradient id={g('wood')} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#a9713f" />
      <stop offset="0.5" stopColor="#7d4c26" />
      <stop offset="1" stopColor="#5a3418" />
    </linearGradient>
  )

  const defs = (
    <defs>
      {metal}
      {metalDark}
      {glass}
      {flame}
      {glow}
      {wood}
      <filter id={g('blur')} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="12" />
      </filter>
      <filter id={g('soft')} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
      <pattern id={g('honey')} width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <path d="M0 0H9V9H0Z" fill="none" stroke="#7d8896" strokeWidth="0.7" opacity="0.5" />
      </pattern>
      <linearGradient id={g('scan')} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ff6b2c" stopOpacity="0" />
        <stop offset="0.5" stopColor="#ff8a57" stopOpacity="0.55" />
        <stop offset="1" stopColor="#ff6b2c" stopOpacity="0" />
      </linearGradient>
      <clipPath id={g('window')}>
        <path d="M332 231 L531 195 L531 327 L332 365 Z" />
      </clipPath>
    </defs>
  )

  if (kind === 'diode') {
    return (
      <svg viewBox="0 0 640 480" className={className} role="img" aria-label={label || 'Máquina láser de diodo'}>
        {defs}
        <ellipse cx="320" cy="412" rx="228" ry="26" fill="#000" opacity="0.55" filter={`url(#${g('blur')})`} />

        {/* Estructura trasera */}
        <path d="M210 118 L500 96" stroke={`url(#${g('metal')})`} strokeWidth="9" strokeLinecap="round" />
        <path d="M210 118 L210 330" stroke={`url(#${g('metal')})`} strokeWidth="9" strokeLinecap="round" />
        <path d="M500 96 L500 312" stroke={`url(#${g('metal')})`} strokeWidth="9" strokeLinecap="round" />

        {/* Estructura frontal */}
        <path d="M140 152 L440 140" stroke={`url(#${g('metal')})`} strokeWidth="11" strokeLinecap="round" />
        <path d="M140 152 L140 366" stroke={`url(#${g('metal')})`} strokeWidth="11" strokeLinecap="round" />
        <path d="M440 140 L440 356" stroke={`url(#${g('metal')})`} strokeWidth="11" strokeLinecap="round" />

        {/* Laterales */}
        <path d="M140 152 L210 118" stroke={`url(#${g('metal')})`} strokeWidth="8" strokeLinecap="round" />
        <path d="M440 140 L500 96" stroke={`url(#${g('metal')})`} strokeWidth="8" strokeLinecap="round" />

        {/* Base */}
        <path d="M140 366 L440 356 L500 312" fill="none" stroke={`url(#${g('metalDark')})`} strokeWidth="12" strokeLinecap="round" />
        <path d="M140 366 L210 330" stroke={`url(#${g('metalDark')})`} strokeWidth="9" strokeLinecap="round" />
        <path d="M210 330 L500 312" stroke={`url(#${g('metalDark')})`} strokeWidth="9" strokeLinecap="round" />

        {/* Cama de trabajo */}
        <path d="M168 330 L452 314 L500 282 L220 298 Z" fill="#0b1119" stroke="#3d4856" strokeWidth="1.5" />
        <path d="M168 330 L452 314 L500 282 L220 298 Z" fill={`url(#${g('honey')})`} opacity="0.65" />
        <path d="M190 318 L462 302 L496 280 L228 294 Z" fill={`url(#${g('wood')})`} opacity="0.92" />
        <path d="M214 310 L444 296 L472 280 L246 292 Z" fill="none" stroke="#d9a06a" strokeWidth="0.8" opacity="0.5" />

        {/* Pieza grabada */}
        <g opacity="0.85">
          <path d="M318 300 L352 297 L352 286 L318 289 Z" fill="#2b1a0e" />
          <path d="M326 297 L334 296 L334 290 L326 291 Z" fill="#ff7a3d" opacity="0.55" />
        </g>

        {/* Pórtico y cabezal */}
        <path d="M178 250 L474 230" stroke={`url(#${g('metal')})`} strokeWidth="12" strokeLinecap="round" />
        <path d="M178 250 L474 230" stroke="#0b1119" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <g>
          <rect x="322" y="212" width="42" height="38" rx="4" fill={`url(#${g('metal')})`} stroke="#6f7c8b" strokeWidth="1" />
          <rect x="330" y="220" width="26" height="14" rx="2" fill="#0a0f16" />
          <circle cx="343" cy="227" r="3" fill="#ff7a3d" className="animate-beam" />
          <path d="M336 250 L350 250 L346 268 L340 268 Z" fill="#8d99a6" />
          <path d="M343 268 L343 320" stroke="#ff6b2c" strokeWidth="2" className="animate-beam" />
          <circle cx="343" cy="320" r="22" fill={`url(#${g('glow')})`} opacity="0.9" />
          <circle cx="343" cy="320" r="3" fill="#ffd0b0" />
        </g>

        {/* Cableado */}
        <path d="M210 240 C250 250 260 270 300 262" fill="none" stroke="#0a0f16" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        <path d="M440 220 C460 224 468 236 474 232" fill="none" stroke="#0a0f16" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

        {/* Detalles */}
        <circle cx="140" cy="152" r="5" fill="#ff6b2c" />
        <circle cx="440" cy="140" r="5" fill="#ff6b2c" />
        <rect x="152" y="178" width="10" height="26" rx="2" fill="#0a0f16" />
        <rect x="420" y="166" width="10" height="24" rx="2" fill="#0a0f16" />
        <text x="152" y="398" fill="#6d7987" fontSize="9" fontFamily="monospace" letterSpacing="3">
          PRODETECH / DIODE
        </text>
      </svg>
    )
  }

  if (kind === 'fiber') {
    return (
      <svg viewBox="0 0 640 480" className={className} role="img" aria-label={label || 'Máquina láser de fibra'}>
        {defs}
        <ellipse cx="325" cy="420" rx="220" ry="24" fill="#000" opacity="0.55" filter={`url(#${g('blur')})`} />

        {/* Gabinete */}
        <path d="M150 292 L470 292 L510 270 L190 270 Z" fill={`url(#${g('metal')})`} />
        <rect x="150" y="292" width="320" height="112" fill={`url(#${g('metalDark')})`} stroke="#3b4654" strokeWidth="1.5" />
        <path d="M470 292 L510 270 L510 380 L470 404 Z" fill="#0c121a" stroke="#333e4b" strokeWidth="1.5" />
        <rect x="166" y="306" width="132" height="84" rx="2" fill="#0a0f16" stroke="#39434f" />
        <g opacity="0.6">
          <rect x="178" y="320" width="46" height="4" rx="2" fill="#ff6b2c" />
          <rect x="178" y="332" width="88" height="3" rx="1.5" fill="#5a6675" />
          <rect x="178" y="342" width="72" height="3" rx="1.5" fill="#5a6675" />
          <rect x="178" y="352" width="96" height="3" rx="1.5" fill="#5a6675" />
          <circle cx="270" cy="368" r="10" fill="none" stroke="#ff6b2c" strokeWidth="1.5" />
        </g>
        <circle cx="330" cy="330" r="8" fill="#ff6b2c" />
        <circle cx="356" cy="330" r="8" fill="#1b2430" stroke="#4b5765" />
        <rect x="388" y="320" width="60" height="7" rx="3.5" fill="#0a0f16" stroke="#3d4856" />
        <g opacity="0.5">
          <path d="M488 300 L488 386" stroke="#26313d" strokeWidth="2" />
          <path d="M494 300 L494 386" stroke="#26313d" strokeWidth="2" />
          <path d="M500 300 L500 386" stroke="#26313d" strokeWidth="2" />
        </g>

        {/* Mesa de trabajo */}
        <path d="M196 270 L432 270 L466 246 L230 246 Z" fill={`url(#${g('metal')})`} stroke="#5b6775" strokeWidth="1.5" />
        <path d="M232 262 L420 262 L440 250 L252 250 Z" fill="#0b1119" opacity="0.55" />
        <path d="M250 260 L400 260 L416 251 L266 251 Z" fill="#7d8896" opacity="0.35" />

        {/* Rotativo con pieza */}
        <g>
          <rect x="268" y="236" width="82" height="15" rx="7" fill={`url(#${g('metal')})`} stroke="#697584" strokeWidth="1" />
          <circle cx="268" cy="243" r="12" fill="#1b2430" stroke="#6b7785" strokeWidth="2" />
          <circle cx="268" cy="243" r="5" fill="#ff6b2c" opacity="0.8" />
          <circle cx="350" cy="243" r="8" fill="#2a3542" stroke="#6b7785" strokeWidth="2" />
        </g>

        {/* Columna y cabezal */}
        <rect x="452" y="120" width="34" height="152" rx="3" fill={`url(#${g('metal')})`} stroke="#4a5664" strokeWidth="1.2" />
        <rect x="462" y="130" width="14" height="120" rx="2" fill="#0b1119" opacity="0.45" />
        <path d="M452 132 L398 132" stroke={`url(#${g('metal')})`} strokeWidth="18" strokeLinecap="round" />
        <g>
          <rect x="362" y="114" width="54" height="44" rx="4" fill={`url(#${g('metal')})`} stroke="#6f7c8b" strokeWidth="1" />
          <rect x="370" y="122" width="38" height="14" rx="2" fill="#0a0f16" />
          <circle cx="389" cy="129" r="3" fill="#ff7a3d" className="animate-beam" />
          <path d="M380 158 L398 158 L394 180 L384 180 Z" fill="#98a4b0" />
          <path d="M389 180 L389 238" stroke="#ff6b2c" strokeWidth="2" className="animate-beam" />
          <circle cx="389" cy="240" r="20" fill={`url(#${g('glow')})`} />
          <circle cx="389" cy="240" r="3" fill="#ffd0b0" />
        </g>

        {/* Monitor */}
        <path d="M214 292 L214 212" stroke={`url(#${g('metal')})`} strokeWidth="8" strokeLinecap="round" />
        <rect x="130" y="146" width="166" height="106" rx="5" fill="#0b1119" stroke="#4d5967" strokeWidth="2" />
        <rect x="140" y="156" width="146" height="86" rx="2" fill="#071019" />
        <g opacity="0.8">
          <rect x="150" y="166" width="52" height="5" rx="2.5" fill="#ff6b2c" />
          <rect x="150" y="180" width="96" height="3" rx="1.5" fill="#3d4a58" />
          <rect x="150" y="189" width="78" height="3" rx="1.5" fill="#3d4a58" />
          <rect x="150" y="198" width="106" height="3" rx="1.5" fill="#3d4a58" />
          <rect x="150" y="214" width="126" height="18" rx="2" fill="#111c27" stroke="#2a3644" />
          <path d="M156 226 L170 218 L184 223 L198 214 L212 222" fill="none" stroke="#ff6b2c" strokeWidth="1.5" />
        </g>
        <rect x="192" y="252" width="42" height="6" rx="3" fill="#1b2430" />
        <rect x="200" y="258" width="26" height="34" fill={`url(#${g('metalDark')})`} />

        <text x="166" y="426" fill="#6d7987" fontSize="9" fontFamily="monospace" letterSpacing="3">
          PRODETECH / FIBER
        </text>
      </svg>
    )
  }

  if (kind === 'parts') {
    return (
      <svg viewBox="0 0 640 480" className={className} role="img" aria-label={label || 'Repuestos y accesorios para máquinas láser'}>
        {defs}
        <ellipse cx="320" cy="410" rx="220" ry="22" fill="#000" opacity="0.5" filter={`url(#${g('blur')})`} />
        <g stroke="#2c3744" strokeWidth="1" strokeDasharray="4 6" opacity="0.7">
          <path d="M92 240 H548" />
          <path d="M320 80 V400" />
        </g>

        {/* Lente */}
        <g transform="translate(196 178)">
          <circle r="76" fill="#0b1119" stroke={`url(#${g('metal')})`} strokeWidth="12" />
          <circle r="58" fill="#1a2430" stroke="#4a5664" strokeWidth="2" />
          <circle r="46" fill={`url(#${g('glass')})`} stroke="#7d8896" strokeWidth="1.5" />
          <circle r="46" fill="#ff6b2c" opacity="0.13" />
          <path d="M-30 -32 A44 44 0 0 1 24 -36" fill="none" stroke="#ffb083" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
          <circle r="9" fill="#ff6b2c" opacity="0.8" />
          <circle r="3" fill="#ffe0cc" />
          <g stroke="#6d7987" strokeWidth="1" opacity="0.6">
            <path d="M-76 0 H-64" />
            <path d="M76 0 H64" />
            <path d="M0 -76 V-64" />
            <path d="M0 76 V64" />
          </g>
        </g>
        <text x="144" y="286" fill="#8b96a4" fontSize="9" fontFamily="monospace" letterSpacing="2">
          LENTE ZnSe · Ø20
        </text>

        {/* Boquilla */}
        <g transform="translate(448 156)">
          <path d="M-38 -34 H38 L22 8 L10 8 L6 66 H-6 L-10 8 L-22 8 Z" fill={`url(#${g('metal')})`} stroke="#74808e" strokeWidth="1.5" />
          <path d="M-24 -20 H24 L14 4 H-14 Z" fill="#0b1119" opacity="0.55" />
          <path d="M-10 8 H10 L6 58 H-6 Z" fill="#2a3542" />
          <circle cx="0" cy="62" r="3" fill="#ff6b2c" />
          <circle cx="0" cy="62" r="14" fill={`url(#${g('glow')})`} opacity="0.8" />
          <path d="M-38 -34 H38" stroke="#ff6b2c" strokeWidth="2" />
        </g>
        <text x="396" y="262" fill="#8b96a4" fontSize="9" fontFamily="monospace" letterSpacing="2">
          BOQUILLA / NOZZLE
        </text>

        {/* Rotativo */}
        <g transform="translate(330 352)">
          <rect x="-108" y="-18" width="216" height="34" rx="17" fill={`url(#${g('metalDark')})`} stroke="#485565" strokeWidth="1.5" />
          <rect x="-82" y="-30" width="164" height="58" rx="29" fill={`url(#${g('metal')})`} stroke="#6b7785" strokeWidth="1.5" />
          <circle cx="-72" cy="0" r="26" fill="#0b1119" stroke="#7d8896" strokeWidth="3" />
          <circle cx="-72" cy="0" r="12" fill="#1b2430" />
          <g stroke="#ff6b2c" strokeWidth="3" strokeLinecap="round">
            <path d="M-72 -18 V-8" />
            <path d="M-58 9 L-66 3" />
            <path d="M-86 9 L-78 3" />
          </g>
          <rect x="-40" y="-16" width="108" height="32" rx="16" fill="#131b25" stroke="#3d4856" />
          <path d="M-18 -16 V16 M4 -16 V16 M26 -16 V16 M48 -16 V16" stroke="#2d3946" strokeWidth="1" />
          <circle cx="86" cy="0" r="14" fill="#0b1119" stroke="#7d8896" strokeWidth="3" />
          <circle cx="86" cy="0" r="5" fill="#ff6b2c" />
        </g>
        <text x="242" y="418" fill="#8b96a4" fontSize="9" fontFamily="monospace" letterSpacing="2">
          ROTATIVO / ROTARY
        </text>

        {/* Aire */}
        <path d="M256 96 C310 64 372 96 392 138" fill="none" stroke="#2a3542" strokeWidth="12" strokeLinecap="round" />
        <path d="M256 96 C310 64 372 96 392 138" fill="none" stroke="#4b5765" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 12" />
        <circle cx="256" cy="96" r="9" fill="#0b1119" stroke="#6b7785" strokeWidth="2" />
        <circle cx="392" cy="138" r="7" fill="#ff6b2c" opacity="0.8" />
      </svg>
    )
  }

  // CO₂ (por defecto)
  return (
    <svg viewBox="0 0 640 480" className={className} role="img" aria-label={label || 'Máquina láser CO₂'}>
      {defs}
      <ellipse cx="330" cy="424" rx="240" ry="26" fill="#000" opacity="0.55" filter={`url(#${g('blur')})`} />

      {/* Cuerpo */}
      <path d="M96 156 L360 104 L566 158 L302 214 Z" fill={`url(#${g('metal')})`} stroke="#4c5866" strokeWidth="1.5" />
      <path d="M96 156 L302 214 L302 408 L96 344 Z" fill="#0b1119" stroke="#333e4b" strokeWidth="1.5" />
      <path d="M302 214 L566 158 L566 352 L302 408 Z" fill={`url(#${g('metalDark')})`} stroke="#3b4654" strokeWidth="1.5" />

      {/* Reflejos del cuerpo */}
      <path d="M302 214 L566 158 L566 172 L302 228 Z" fill="#ffffff" opacity="0.06" />
      <path d="M96 156 L302 214 L302 226 L96 168 Z" fill="#ffffff" opacity="0.04" />
      <path d="M360 104 L566 158 L566 168 L360 114 Z" fill="#ffffff" opacity="0.08" />

      {/* Ventana */}
      <path d="M332 231 L531 195 L531 327 L332 365 Z" fill={`url(#${g('glass')})`} stroke="#65717f" strokeWidth="2" />
      <path d="M340 239 L523 206 L523 319 L340 355 Z" fill="none" stroke="#0a0f16" strokeWidth="4" opacity="0.7" />

      <g clipPath={`url(#${g('window')})`}>
        {/* Interior */}
        <path d="M332 231 L531 195 L531 327 L332 365 Z" fill="#0a1017" opacity="0.5" />
        <path d="M350 268 L520 237" stroke="#6b7785" strokeWidth="4" />
        <path d="M350 268 L520 237" stroke="#111a24" strokeWidth="1.5" />
        {/* Material */}
        <path d="M350 330 L516 300 L516 318 L350 350 Z" fill={`url(#${g('wood')})`} />
        <path d="M350 330 L516 300" stroke="#d9a06a" strokeWidth="1" opacity="0.6" />
        {/* Cabezal */}
        <g>
          <rect x="424" y="248" width="30" height="24" rx="3" fill={`url(#${g('metal')})`} stroke="#74808e" />
          <rect x="430" y="254" width="18" height="7" rx="1.5" fill="#0a0f16" />
          <circle cx="439" cy="257" r="2.5" fill="#ff7a3d" className="animate-beam" />
          <path d="M435 272 L444 272 L442 284 L437 284 Z" fill="#98a4b0" />
          <path d="M439 284 L439 330" stroke="#ff6b2c" strokeWidth="2" className="animate-beam" />
          <circle cx="439" cy="330" r="24" fill={`url(#${g('glow')})`} />
          <circle cx="439" cy="330" r="3" fill="#ffe0cc" />
        </g>
        {/* Línea de escaneo */}
        <rect x="332" y="240" width="199" height="46" fill={`url(#${g('scan')})`} className="animate-scan" opacity="0.35" />
      </g>

      {/* Panel de control */}
      <path d="M474 300 L546 286 L546 332 L474 346 Z" fill="#090e15" stroke="#4a5664" strokeWidth="1.2" />
      <path d="M482 306 L536 296 L536 318 L482 328 Z" fill="#101a24" />
      <path d="M487 311 L515 306" stroke="#ff6b2c" strokeWidth="2" strokeLinecap="round" />
      <path d="M487 317 L527 309" stroke="#586574" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="492" cy="337" r="4" fill="#ff6b2c" />
      <circle cx="506" cy="334" r="4" fill="#1b2430" stroke="#586574" />
      <circle cx="520" cy="332" r="4" fill="#1b2430" stroke="#586574" />

      {/* Detalles frontales */}
      <path d="M320 370 L450 344" stroke="#1b2530" strokeWidth="1.5" />
      <path d="M320 378 L450 352" stroke="#1b2530" strokeWidth="1.5" />
      <path d="M320 386 L450 360" stroke="#1b2530" strokeWidth="1.5" />
      <text x="330" y="398" fill="#6d7987" fontSize="9" fontFamily="monospace" letterSpacing="3">
        PRODETECH / CO₂
      </text>

      {/* Laterales y patas */}
      <g opacity="0.6">
        <path d="M118 190 L150 198" stroke="#26313d" strokeWidth="2" />
        <path d="M118 202 L150 210" stroke="#26313d" strokeWidth="2" />
        <path d="M118 214 L150 222" stroke="#26313d" strokeWidth="2" />
        <path d="M118 226 L150 234" stroke="#26313d" strokeWidth="2" />
        <path d="M118 238 L150 246" stroke="#26313d" strokeWidth="2" />
      </g>
      <path d="M112 344 L134 350 L134 374 L112 368 Z" fill="#0a0f16" stroke="#333e4b" />
      <path d="M470 402 L494 397 L494 420 L470 425 Z" fill="#0a0f16" stroke="#333e4b" />
      <circle cx="123" cy="372" r="5" fill="#1b2430" stroke="#4a5664" />
      <circle cx="482" cy="422" r="5" fill="#1b2430" stroke="#4a5664" />

      {/* Acento naranja */}
      <path d="M302 214 L566 158" stroke="#ff6b2c" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M96 156 L302 214" stroke="#ff6b2c" strokeWidth="1.5" opacity="0.55" />
      <circle cx="566" cy="158" r="4" fill="#ff6b2c" />
      <circle cx="96" cy="156" r="3.5" fill="#ff6b2c" opacity="0.7" />
    </svg>
  )
}
