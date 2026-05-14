import { useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import Skills from './components/skill'
import Projects from './components/project'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/contact'

function App() {
  const canvasRef = useRef(null)
  const mousePos = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let dots = []
    let rafId = null

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 90; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.35 + 0.15
      })
    }

    function animate() {
    if (!canvas) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(d => {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0) d.x = canvas.width
        if (d.x > canvas.width) d.x = 0
        if (d.y < 0) d.y = canvas.height
        if (d.y > canvas.height) d.y = 0
        const dx = d.x - mousePos.current.x
        const dy = d.y - mousePos.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100
          d.x += (dx / dist) * force * 3
          d.y += (dy / dist) * force * 3
        }
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(17,17,17,${d.opacity})`
        ctx.fill()
      })
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    function handleMouseMove(e) {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} className="dots-canvas" />
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      <Certifications />
      <div className="section-divider" />
      <Contact />
    </div>
  )
}

export default App