import { motion } from 'framer-motion'

const SHADOWS = [
  { name: 'Igris', type: 'Knight', ability: 'Crimson Blade' },
  { name: 'Beru', type: 'Ant King', ability: 'Royal Guard' },
  { name: 'Tank', type: 'Ice Bear', ability: 'Frost Roar' },
  { name: 'Iron', type: 'Knight', ability: 'Shield Wall' },
]

export default function ShadowArmy() {
  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Shadow Army</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {SHADOWS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative group border border-[#16213e] rounded-xl p-5 bg-[#0a0a1a]/60 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_0%,rgba(138,43,226,0.15),transparent_60%)]" />
              <div className="relative z-10">
                <h3 className="text-white font-semibold">{s.name}</h3>
                <p className="text-blue-100/80 text-sm">{s.type}</p>
                <div className="mt-4 text-xs text-[#0ef0ff]">{s.ability}</div>
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-tr from-[#0ef0ff]/30 to-[#8a2be2]/30 blur-2xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
