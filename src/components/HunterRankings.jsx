import { motion } from 'framer-motion'

const TIERS = ['S', 'A', 'B', 'C', 'D', 'E']

function TierBadge({ tier }) {
  const colors = {
    S: 'from-[#0ef0ff] to-[#8a2be2]',
    A: 'from-[#0ef0ff] to-[#0ef0ff]',
    B: 'from-[#8a2be2] to-[#8a2be2]',
    C: 'from-blue-400 to-purple-400',
    D: 'from-blue-300 to-purple-300',
    E: 'from-blue-200 to-purple-200',
  }
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${colors[tier]} text-black font-extrabold shadow-[0_0_25px_rgba(14,240,255,0.4)]`}> 
      <span className="text-xs">Tier</span>
      <span className="text-base">{tier}</span>
    </div>
  )
}

export default function HunterRankings() {
  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Hunter Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-[#16213e] rounded-xl p-5 bg-[#0a0a1a]/60 hover:border-[#0ef0ff]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <TierBadge tier={t} />
                <div className="text-right">
                  <p className="text-blue-100/80 text-sm">Top Power</p>
                  <p className="text-white font-bold text-xl">{Math.round(10000 / (i + 1))}</p>
                </div>
              </div>
              <div className="mt-4 h-2 rounded bg-[#16213e] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0ef0ff] to-[#8a2be2]" style={{ width: `${100 - i * 12}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
