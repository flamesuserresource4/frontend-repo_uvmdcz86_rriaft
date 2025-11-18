import { useEffect, useRef } from 'react'

// Subtle mana particle effect using canvas
export default function Particles({ color = '#0ef0ff', density = 0.6 }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = Math.max(window.innerHeight, 900))

    const particleCount = Math.floor((width * height) / (12000 / density))

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.6 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particlesRef.current.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
        grad.addColorStop(0, hexToRgba(color, p.alpha))
        grad.addColorStop(1, hexToRgba(color, 0))
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
        ctx.fill()
      })
      animationRef.current = requestAnimationFrame(draw)
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = Math.max(window.innerHeight, 900)
    }

    draw()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [color, density])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-60 mix-blend-screen"
      style={{ pointerEvents: 'none' }}
      aria-hidden
    />
  )
}

function hexToRgba(hex, alpha = 1) {
  const clean = hex.replace('#', '')
  const bigint = parseInt(clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
