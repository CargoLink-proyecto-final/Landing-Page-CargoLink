import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  const handleLinkClick = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <nav>
      <div className="container nav-inner">
        <a href="#" className="nav-brand">Cargo<span>Link</span></a>
        <div className="nav-menu" ref={menuRef}>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`nav-dropdown${open ? ' open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#problema" onClick={handleLinkClick}>Problema</a></li>
              <li><a href="#solucion" onClick={handleLinkClick}>Solución</a></li>
              <li><a href="#como-funciona" onClick={handleLinkClick}>Cómo Funciona</a></li>
              <li><a href="#funcionalidades" onClick={handleLinkClick}>Funcionalidades</a></li>
              <li><a href="#encuestas" onClick={handleLinkClick}>Encuestas</a></li>
              <li><a href="#equipo" onClick={handleLinkClick}>Equipo</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
