import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-mana-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2 className="section-heading">What is MANA 88?</h2>
            <div className="space-y-5 text-mana-dark/80 leading-relaxed">
              <p>
                MANA 88 is a regenerative, master-planned community set within 88 hectares of pristine
                jungle in Akumal, along Mexico's Riviera Maya. Designed to harmonize luxury living with
                the natural world, every element — from the architecture to the infrastructure — follows
                principles of sustainability, wellness, and ecological stewardship.
              </p>
              <p>
                With 378 home sites connected by winding paths through cenotes and tropical canopy,
                MANA 88 offers a lifestyle unlike anything else in the Caribbean. World-class amenities
                include a wellness spa, sports complex, fine dining, observatory, yoga sanctuary, and
                an art walk — all designed by award-winning architects who draw inspiration from the
                land itself.
              </p>
              <p>
                This is not just a place to live. It's a place to regenerate.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/about.webp"
              alt="MANA 88 community rendering"
              loading="lazy"
              width={800}
              height={600}
              className="w-full rounded-sm shadow-2xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-mana-cream">
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-mana-gold mb-2">
              <AnimatedCounter end={378} />
            </div>
            <p className="text-sm uppercase tracking-widest text-mana-dark/60 font-sans">Home Sites</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-mana-gold mb-2">
              <AnimatedCounter end={80} suffix="+" />
            </div>
            <p className="text-sm uppercase tracking-widest text-mana-dark/60 font-sans">Amenities</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-mana-gold mb-2">
              <AnimatedCounter end={88} />
            </div>
            <p className="text-sm uppercase tracking-widest text-mana-dark/60 font-sans">Hectares</p>
          </div>
        </div>
      </div>
    </section>
  )
}
