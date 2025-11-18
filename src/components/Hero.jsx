import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0a1a]/60 to-[#0a0a1a] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
        <div className="backdrop-blur-sm/0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(14,240,255,0.35)]">
            Solo Leveling
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0ef0ff] via-[#8a2be2] to-[#0ef0ff]">
              Awakened Chronicles
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-blue-100/90 max-w-2xl">
            Step into the shadows and rise through the ranks. Command your army, conquer quests, and carve your legend in a neon-drenched world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#characters" className="px-5 py-3 text-sm sm:text-base font-semibold rounded-md border border-[#0ef0ff]/40 text-white bg-[#0a0a1a]/60 hover:bg-[#0a0a1a]/80 hover:border-[#0ef0ff] transition-all shadow-[0_0_30px_rgba(14,240,255,0.15)]">
              Meet the Hunters
            </a>
            <a href="#quest-board" className="px-5 py-3 text-sm sm:text-base font-semibold rounded-md border border-[#8a2be2]/40 text-white bg-[#0a0a1a]/60 hover:bg-[#0a0a1a]/80 hover:border-[#8a2be2] transition-all shadow-[0_0_30px_rgba(138,43,226,0.15)]">
              Claim a Quest
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
