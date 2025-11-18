import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SystemInterface({ enabled }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (!enabled) return
    const sequence = [
      'System initializing... ',
      'Mana circuits synchronized.',
      'Shadow core detected.',
      'Welcome, Hunter. Your path awaits.',
    ]
    let i = 0
    const id = setInterval(() => {
      if (i >= sequence.length) return
      setMessages(prev => [...prev, sequence[i++]])
    }, 1000)
    return () => clearInterval(id)
  }, [enabled])

  return (
    <AnimatePresence>
      {enabled && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed right-4 bottom-4 w-80 max-w-[90vw] z-40"
        >
          <div className="border border-[#0ef0ff]/30 bg-[#0a0a1a]/80 backdrop-blur-md rounded-lg shadow-[0_0_30px_rgba(14,240,255,0.2)] p-3">
            <div className="text-[#0ef0ff] font-semibold text-sm mb-2">System Interface</div>
            <div className="space-y-1 text-xs text-blue-100/80 max-h-48 overflow-auto">
              {messages.map((m, i) => (
                <div key={i} className="px-2 py-1 rounded bg-[#1a1a2e]/60 border border-[#16213e]">{m}</div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
