import { useState, useEffect } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sectionIds = [
      'home', 'about', 'skills', 'projects',
      'education', 'certifications', 'contact'
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-pill">
        {links.map((link) => (
          <a
            key={link.id}
            href={'#' + link.id}
            className={'nav-link' + (active === link.id ? ' active' : '')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}