import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <nav>
      <div className="container nav-inner">
        <a href="#" className="nav-brand">Cargo<span>Link</span></a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#problema" onClick={handleLinkClick}>Problema</a></li>
          <li><a href="#solucion" onClick={handleLinkClick}>Solución</a></li>
          <li><a href="#como-funciona" onClick={handleLinkClick}>Cómo Funciona</a></li>
          <li><a href="#funcionalidades" onClick={handleLinkClick}>Funcionalidades</a></li>
          <li><a href="#encuestas" onClick={handleLinkClick}>Encuestas</a></li>
          <li><a href="#equipo" onClick={handleLinkClick}>Equipo</a></li>
        </ul>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
