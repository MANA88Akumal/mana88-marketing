import { useState } from 'react'

const hotspots = [
  { label: 'Clubhouse', x: '35%', y: '40%' },
  { label: 'Sports Complex', x: '65%', y: '30%' },
  { label: 'Cenotes', x: '50%', y: '55%' },
  { label: 'Wellness Spa', x: '25%', y: '60%' },
  { label: 'Observatory', x: '70%', y: '65%' },
  { label: 'Main Entrance', x: '50%', y: '85%' },
]

export default function Masterplan() {
  const [activeHotspot, setActiveHotspot] = useState(null)

  return (
    <section id="masterplan" className="section-padding bg-mana-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Master Plan</h2>
          <p className="section-subheading mx-auto">
            88 hectares thoughtfully designed to preserve and enhance the natural landscape.
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/masterplan.webp"
            alt="MANA 88 Master Plan"
            loading="lazy"
            width={2400}
            height={1600}
            className="w-full rounded-sm shadow-lg"
          />

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <button
              key={spot.label}
              className="absolute group"
              style={{ left: spot.x, top: spot.y, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActiveHotspot(spot.label)}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === spot.label ? null : spot.label)}
              aria-label={spot.label}
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-mana-gold/90 text-white shadow-lg ring-4 ring-mana-gold/30 hover:ring-mana-gold/60 transition-all">
                <span className="w-2 h-2 bg-white rounded-full" />
              </span>
              {activeHotspot === spot.label && (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-mana-dark text-white text-xs font-sans uppercase tracking-wider whitespace-nowrap rounded shadow-lg">
                  {spot.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
