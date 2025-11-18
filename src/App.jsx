import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Particles from './components/Particles'
import CharacterProfiles from './components/CharacterProfiles'
import HunterRankings from './components/HunterRankings'
import QuestBoard from './components/QuestBoard'
import SystemInterface from './components/SystemInterface'
import GuildDatabase from './components/GuildDatabase'
import ShadowArmy from './components/ShadowArmy'
import InteractiveTools from './components/InteractiveTools'
import Navbar from './components/Navbar'

const colors = {
  primary: '#0a0a1a',
  secondary: '#1a1a2e',
  accent: '#16213e',
  neonBlue: '#0ef0ff',
  neonPurple: '#8a2be2',
}

function App() {
  const [systemOn, setSystemOn] = useState(false)
  const [soundOn, setSoundOn] = useState(false)

  useEffect(() => {
    // Optional sound effects simple toggle (no actual sounds bundled)
    if (soundOn) {
      // Placeholder for enabling sounds
      // Could hook into UI interactions
    }
  }, [soundOn])

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white relative">
      <Particles color={colors.neonBlue} />
      <Navbar onToggleSystem={() => setSystemOn(v => !v)} systemOn={systemOn} onToggleSound={() => setSoundOn(v => !v)} soundOn={soundOn} />
      <Hero />

      <main className="relative z-10">
        <CharacterProfiles />
        <HunterRankings />
        <QuestBoard />
        <InteractiveTools />
        <GuildDatabase />
        <ShadowArmy />
      </main>

      <footer className="relative z-10 py-10 text-center text-blue-200/70 border-t border-[#16213e] bg-[#0a0a1a]/60">
        <p>Fan-made experience inspired by Solo Leveling. All rights belong to their respective owners.</p>
      </footer>

      <SystemInterface enabled={systemOn} />
    </div>
  )
}

export default App
