import { useEffect, useMemo, useState } from 'react'

export default function InteractiveTools() {
  // Level progression calculator
  const [level, setLevel] = useState(1)
  const [exp, setExp] = useState(0)
  const nextExp = useMemo(() => Math.floor(100 * Math.pow(level, 1.6)), [level])
  const progress = Math.min(100, Math.floor((exp / nextExp) * 100))

  // Daily dungeon reset timer (resets at next UTC midnight)
  const [resetIn, setResetIn] = useState('')
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1))
      const diff = Math.max(0, Math.floor((next.getTime() - now.getTime()) / 1000))
      const h = String(Math.floor(diff / 3600)).padStart(2, '0')
      const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0')
      const s = String(diff % 60).padStart(2, '0')
      setResetIn(`${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // Character comparison tool
  const [charA, setCharA] = useState('Sung Jin-Woo')
  const [charB, setCharB] = useState('Cha Hae-In')
  const stats = {
    'Sung Jin-Woo': { atk: 99, def: 90, agi: 100, int: 95 },
    'Cha Hae-In': { atk: 92, def: 85, agi: 94, int: 80 },
    'Baek Yoonho': { atk: 88, def: 92, agi: 86, int: 70 },
  }

  const calcBar = (v) => `${v}%`

  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Hunter Tools</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Level progression */}
          <div className="border border-[#16213e] rounded-xl p-5 bg-[#0a0a1a]/60">
            <h3 className="text-white font-semibold mb-3">Level Progression Calculator</h3>
            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm text-blue-100/80">Level
                <input type="number" value={level} min={1} onChange={e => setLevel(parseInt(e.target.value || '1'))} className="mt-1 w-full bg-[#1a1a2e] border border-[#16213e] rounded px-2 py-1 text-white focus:outline-none focus:border-[#0ef0ff]" />
              </label>
              <label className="text-sm text-blue-100/80">Current EXP
                <input type="number" value={exp} min={0} onChange={e => setExp(parseInt(e.target.value || '0'))} className="mt-1 w-full bg-[#1a1a2e] border border-[#16213e] rounded px-2 py-1 text-white focus:outline-none focus:border-[#8a2be2]" />
              </label>
            </div>
            <div className="mt-4 text-sm text-blue-100">EXP needed for next level: <span className="text-white font-semibold">{nextExp}</span></div>
            <div className="mt-2 h-3 bg-[#16213e] rounded overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#0ef0ff] to-[#8a2be2]" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Daily dungeon reset */}
          <div className="border border-[#16213e] rounded-xl p-5 bg-[#0a0a1a]/60">
            <h3 className="text-white font-semibold mb-3">Daily Dungeon Reset Timer</h3>
            <div className="text-3xl font-mono text-white tracking-wider">{resetIn}</div>
            <p className="mt-2 text-blue-100/80 text-sm">Resets at next UTC midnight</p>
          </div>

          {/* Character comparison */}
          <div className="md:col-span-2 border border-[#16213e] rounded-xl p-5 bg-[#0a0a1a]/60">
            <h3 className="text-white font-semibold mb-3">Character Comparison</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <select value={charA} onChange={e => setCharA(e.target.value)} className="bg-[#1a1a2e] border border-[#16213e] rounded px-3 py-2 text-white">
                {Object.keys(stats).map(n => <option key={n}>{n}</option>)}
              </select>
              <select value={charB} onChange={e => setCharB(e.target.value)} className="bg-[#1a1a2e] border border-[#16213e] rounded px-3 py-2 text-white">
                {Object.keys(stats).map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              {["atk","def","agi","int"].map(k => (
                <div key={k}>
                  <div className="flex items-center justify-between text-sm text-blue-100/80">
                    <span className="uppercase">{k}</span>
                    <span className="text-white">{stats[charA][k]} vs {stats[charB][k]}</span>
                  </div>
                  <div className="h-2 bg-[#16213e] rounded overflow-hidden mt-2 flex">
                    <div className="h-full bg-[#0ef0ff]" style={{ width: calcBar(stats[charA][k]) }} />
                    <div className="h-full bg-[#8a2be2]" style={{ width: calcBar(stats[charB][k]) }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
