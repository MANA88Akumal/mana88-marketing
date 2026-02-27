import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-mana-gold text-white px-6 py-3 shadow-2xl hover:bg-mana-gold/90 transition-all duration-300 animate-fade-in font-sans text-sm uppercase tracking-wider"
      aria-label="Request information"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Request Info</span>
    </a>
  )
}
