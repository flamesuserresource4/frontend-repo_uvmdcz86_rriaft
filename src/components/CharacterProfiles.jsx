import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CARDS = [
  {
    name: 'Sung Jin-Woo',
    rank: 'S',
    class: 'Shadow Monarch',
    level: 120,
    skills: ['Shadow Extraction', 'Monarch’s Domain', 'Stealth'],
    path: 'Monarch of Shadows',
  },
  {
    name: 'Cha Hae-In',
    rank: 'S',
    class: 'Swordmaster',
    level: 95,
    skills: ['Sword Aura', 'Perception', 'Spirit Slash'],
    path: 'Sword Saint',
  },
  {
    name: 'Baek Yoonho',
    rank: 'S',
    class: 'Beast Monarch',
    level: 90,
    skills: ['Lycanthropy', 'Beast Roar', 'Regeneration'],
    path: 'Feral King',
  },
]

export default function CharacterProfiles() {
  const [active, setActive] = useState(0)

  return (
    <section id="characters" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Character Profiles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.name}
              className={`relative group rounded-xl border bg-[#0a0a1a]/60 p-5 overflow-hidden ${
                active === i ? 'border-[#0ef0ff]' : 'border-[#16213e]'
              }`}
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_0%,rgba(14,240,255,0.15),transparent_60%)]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                  <span className="px-2 py-1 rounded bg-[#16213e] text-[#0ef0ff] text-xs font-bold border border-[#0ef0ff]/30">{c.rank}-Rank</span>
                </div>
                <p className="text-blue-100/80">{c.class}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-[#0a0a1a]/60 border border-[#16213e] rounded p-2 text-blue-100">Level <span className="text-white font-semibold">{c.level}</span></div>
                  <div className="bg-[#0a0a1a]/60 border border-[#16213e] rounded p-2 text-blue-100">Path <span className="text-white font-semibold">{c.path}</span></div>
                </div>
                <div className="mt-4">
                  <p className="text-blue-100/80 text-sm mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {c.skills.map(s => (
                      <span key={s} className="px-2 py-1 rounded border border-[#8a2be2]/40 text-[#8a2be2] text-xs bg-[#1a1a2e]/60">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-16 right-0 w-40 h-40 rounded-full blur-3xl bg-[#8a2be2]/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
