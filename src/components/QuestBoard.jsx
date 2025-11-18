import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const initialQuests = [
  { title: 'Clear the Red Gate', difficulty: 'S', reward: 50000, time: 7200 },
  { title: 'Eliminate Frost Giants', difficulty: 'A', reward: 25000, time: 5400 },
  { title: "Subjugate Orc Warlord's Camp", difficulty: 'B', reward: 12000, time: 3600 },
  { title: 'Escort the Healer', difficulty: 'C', reward: 6000, time: 2400 },
]

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0')
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
  const s = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${h}:${m}:${s}`
}

export default function QuestBoard() {
  const [quests, setQuests] = useState(initialQuests)

  useEffect(() => {
    const timer = setInterval(() => {
      setQuests(qs => qs.map(q => ({ ...q, time: Math.max(0, q.time - 1) })))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="quest-board" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Quest Board</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {quests.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-[#16213e] rounded-xl p-5 bg-[#0a0a1a]/60 hover:border-[#8a2be2]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{q.title}</h3>
                  <p className="text-blue-100/80 text-sm">Reward: {q.reward.toLocaleString()} Gold</p>
                </div>
                <span className="px-3 py-1 rounded bg-[#16213e] text-[#8a2be2] border border-[#8a2be2]/30 font-bold">{q.difficulty}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-blue-100/80 text-sm">Time left</div>
                <div className="font-mono text-white text-lg tracking-wide">{formatTime(q.time)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
