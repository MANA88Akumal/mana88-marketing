import { MapPin, Mail, ExternalLink } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#lifestyle' },
  { label: 'Master Plan', href: '#masterplan' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Download Brochure', href: 'https://manaakumal.com/wp-content/uploads/2025/11/M88_Brochure_v5_English.pdf', external: true },
]

export default function Footer() {
  return (
    <footer className="bg-mana-dark text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="MANA 88"
              className="h-12 mb-6"
            />
            <p className="text-sm leading-relaxed mb-6">
              A regenerative, master-planned community set within 88 hectares of pristine jungle in Akumal, Riviera Maya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-sans text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm hover:text-mana-gold transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-sans text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-mana-gold flex-shrink-0" />
                <span>Humana Workcenter<br />Playa del Carmen, Quintana Roo, Mexico</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-mana-gold flex-shrink-0" />
                <a href="mailto:info@ManaAkumal.com" className="hover:text-mana-gold transition-colors">
                  info@ManaAkumal.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="https://forms.monday.com/forms/e78b0b077df5c2102b08a82dc88362d5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-mana-gold hover:text-mana-gold/80 transition-colors inline-flex items-center gap-1"
              >
                Solicitud de Compra
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Proyecto Kan Nab Xulha, S.A.P.I. de C.V. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
