import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#lifestyle' },
  { label: 'Master Plan', href: '#masterplan' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [brochureOpen, setBrochureOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-mana-dark shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="MANA 88"
            className="h-10"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-mana-gold font-sans text-sm uppercase tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setBrochureOpen(!brochureOpen)}
              className="btn-primary flex items-center gap-2"
            >
              Download Brochure
              <ChevronDown className={`w-4 h-4 transition-transform ${brochureOpen ? 'rotate-180' : ''}`} />
            </button>
            {brochureOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded shadow-xl py-2 min-w-[180px]">
                <a
                  href="https://manaakumal.com/wp-content/uploads/2025/11/M88_Brochure_v5_English.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-mana-dark hover:bg-mana-ivory text-sm"
                  onClick={() => setBrochureOpen(false)}
                >
                  English (PDF)
                </a>
                <a
                  href="https://manaakumal.com/wp-content/uploads/2025/08/M88_Brochure_v4_Spanish-ch.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-mana-dark hover:bg-mana-ivory text-sm"
                  onClick={() => setBrochureOpen(false)}
                >
                  Español (PDF)
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-mana-dark z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-serif hover:text-mana-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col items-center gap-3 mt-4">
            <a
              href="https://manaakumal.com/wp-content/uploads/2025/11/M88_Brochure_v5_English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              Brochure (EN)
            </a>
            <a
              href="https://manaakumal.com/wp-content/uploads/2025/08/M88_Brochure_v4_Spanish-ch.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              onClick={() => setMobileOpen(false)}
            >
              Brochure (ES)
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
