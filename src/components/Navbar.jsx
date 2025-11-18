import { useEffect, useState } from 'react'

export default function Navbar({ onToggleSystem, systemOn, onToggleSound, soundOn }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-30 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-[#16213e]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-white font-bold tracking-wider">Awakened Chronicles</a>
        <div className="flex items-center gap-3">
          <button onClick={onToggleSystem} className={`px-3 py-1 rounded-md border ${systemOn ? 'border-[#0ef0ff] text-[#0ef0ff]' : 'border-[#16213e] text-blue-100'} bg-[#0a0a1a]/60`}>System</button>
          <button onClick={onToggleSound} className={`px-3 py-1 rounded-md border ${soundOn ? 'border-[#8a2be2] text-[#8a2be2]' : 'border-[#16213e] text-blue-100'} bg-[#0a0a1a]/60`}>Sound</button>
        </div>
      </div>
    </header>
  )
}
