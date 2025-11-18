import { useEffect, useState } from 'react'

const SAMPLE_GUILDS = [
  { name: 'Hunters Association', leader: 'Go Gun-Hee', members: 120, region: 'Korea', reputation: 98 },
  { name: 'White Tiger', leader: 'Baek Yoonho', members: 80, region: 'Korea', reputation: 92 },
  { name: 'Knights Guild', leader: 'Choi Jong-In', members: 90, region: 'Korea', reputation: 90 },
]

export default function GuildDatabase() {
  const [query, setQuery] = useState('')

  const filtered = SAMPLE_GUILDS.filter(g => g.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Guild Database</h2>
        <div className="mb-6">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search guilds..."
            className="w-full max-w-md bg-[#0a0a1a]/60 border border-[#16213e] rounded-md px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-[#0ef0ff]"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {filtered.map(g => (
            <div key={g.name} className="border border-[#16213e] rounded-xl p-5 bg-[#0a0a1a]/60">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{g.name}</h3>
                <span className="text-xs px-2 py-1 rounded bg-[#16213e] text-[#0ef0ff] border border-[#0ef0ff]/30">{g.region}</span>
              </div>
              <p className="text-blue-100/80 mt-2 text-sm">Leader: {g.leader}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-[#1a1a2e]/60 border border-[#16213e] rounded p-2 text-blue-100">Members <span className="text-white font-semibold">{g.members}</span></div>
                <div className="bg-[#1a1a2e]/60 border border-[#16213e] rounded p-2 text-blue-100">Reputation <span className="text-white font-semibold">{g.reputation}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
