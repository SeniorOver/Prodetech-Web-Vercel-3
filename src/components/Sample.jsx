/**
 * Muestras físicas estilizadas para la sección de aplicaciones.
 * Se construyen con CSS + SVG para no depender de fotografías.
 */
export default function Sample({ kind = 'plaque', title }) {
  if (kind === 'sign') {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-8">
        <div className="absolute h-48 w-48 rounded-full bg-flame/25 blur-3xl" />
        <div className="relative -rotate-3">
          <div className="absolute inset-0 translate-y-3 rounded-md bg-flame/30 blur-2xl" />
          <div className="material-acrilico relative flex h-[190px] w-[290px] items-center justify-center overflow-hidden rounded-md border border-white/30 shadow-[0_20px_60px_-20px_rgba(0,0,0,.9)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/20" />
            <div className="absolute inset-3 border border-white/25" />
            <div className="relative text-center">
              <div className="font-display text-[30px] font-black tracking-[0.08em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.35)]">
                PRODETECH
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-white/80">
                Letreros que destacan
              </div>
            </div>
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/20 blur-xl" />
          </div>
          <div className="mx-auto mt-3 h-2 w-40 rounded-full bg-black/40 blur-md" />
        </div>
      </div>
    )
  }

  if (kind === 'tag') {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-8">
        <div className="absolute h-44 w-44 rounded-full bg-white/10 blur-3xl" />
        <div className="relative rotate-6">
          <div className="material-metal relative flex h-[230px] w-[165px] flex-col items-center justify-center overflow-hidden rounded-[26px] border border-white/50 shadow-[0_26px_60px_-18px_rgba(0,0,0,.95)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/35" />
            <div className="absolute left-1/2 top-4 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-black/40 bg-[#1b2430] shadow-inner" />
            <div className="relative mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-black/35">
              <span className="font-display text-[30px] font-black text-[#252b31]">P</span>
            </div>
            <div className="relative mt-3 font-mono text-[8px] uppercase tracking-[0.24em] text-[#252b31]">
              Acero inoxidable
            </div>
            <div className="relative mt-1 font-display text-[10px] font-bold tracking-[0.18em] text-[#2f363d]">
              PRODETECH
            </div>
          </div>
          <div className="mx-auto mt-4 h-2 w-32 rounded-full bg-black/45 blur-md" />
        </div>
      </div>
    )
  }

  if (kind === 'patch') {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-8">
        <div className="absolute h-44 w-44 rounded-full bg-[#7a4a25]/40 blur-3xl" />
        <div className="material-cuero relative flex h-[190px] w-[250px] -rotate-2 flex-col items-center justify-center rounded-lg border border-[#2c1810] shadow-[0_24px_60px_-18px_rgba(0,0,0,.95)]">
          <div className="absolute inset-3 rounded-md border border-dashed border-[#d9a06a]/45" />
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d9a06a]/50">
            <span className="font-display text-[26px] font-black text-[#e7c49a]">P</span>
          </div>
          <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.28em] text-[#d9a06a]/90">
            Cuero grabado
          </div>
          <div className="mt-1 font-display text-[9px] font-bold tracking-[0.2em] text-[#e7c49a]">
            PRODETECH
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'tumbler') {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-8">
        <div className="absolute h-48 w-48 rounded-full bg-flame/20 blur-3xl" />
        <div className="relative flex flex-col items-center">
          <div className="relative h-[270px] w-[130px] overflow-hidden rounded-t-[38px] rounded-b-[22px] border border-white/30 bg-[linear-gradient(100deg,#4c5661_0%,#c7ced5_22%,#7d8792_46%,#e2e6e9_66%,#5a646e_100%)] shadow-[0_28px_60px_-20px_rgba(0,0,0,.95)]">
            <div className="absolute inset-x-0 top-0 h-12 border-b border-white/20 bg-[linear-gradient(100deg,#3e4750,#9aa3ac,#4a535c)]" />
            <div className="absolute inset-x-0 top-12 h-1 bg-black/20" />
            <div className="absolute inset-x-0 top-[92px] flex flex-col items-center">
              <div className="h-14 w-14 rounded-full border border-[#2a3037]/40" />
              <span className="mt-1 font-display text-[12px] font-black tracking-[0.18em] text-[#2a3037]">P</span>
              <span className="mt-1 font-mono text-[6.5px] uppercase tracking-[0.24em] text-[#2a3037]">
                Prodetech
              </span>
            </div>
            <div className="absolute inset-y-0 left-4 w-6 bg-gradient-to-r from-white/30 to-transparent" />
            <div className="absolute inset-y-0 right-5 w-3 bg-gradient-to-l from-white/25 to-transparent" />
          </div>
          <div className="mt-4 h-2 w-28 rounded-full bg-black/45 blur-md" />
        </div>
      </div>
    )
  }

  // plaque (madera y MDF)
  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <div className="absolute h-44 w-44 rounded-full bg-[#c98a4b]/25 blur-3xl" />
      <div className="relative rotate-[-3deg]">
        <div className="material-madera relative flex h-[200px] w-[290px] flex-col items-center justify-center overflow-hidden rounded-md border border-[#4a2a14] shadow-[0_26px_60px_-18px_rgba(0,0,0,.95)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/25" />
          <div className="absolute inset-3 border border-[#3b2110]/50" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#3b2110]/60">
            <span className="font-display text-[27px] font-black text-[#33200f]">P</span>
          </div>
          <div className="relative mt-2 font-display text-[13px] font-black tracking-[0.2em] text-[#33200f]">
            PRODETECH
          </div>
          <div className="relative mt-1 font-mono text-[7.5px] uppercase tracking-[0.28em] text-[#3b2110]/80">
            Corte y grabado láser
          </div>
          <div className="absolute bottom-2 right-3 font-mono text-[6.5px] uppercase tracking-[0.2em] text-[#3b2110]/50">
            MDF · 3 mm
          </div>
        </div>
        <div className="mx-auto mt-4 h-2 w-40 rounded-full bg-black/45 blur-md" />
      </div>
    </div>
  )
}
