import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Clubhouse', 'Villas', 'Wellness', 'Sports', 'Dining']

const images = [
  { src: '/images/gallery-01.webp', alt: 'MANA 88 Clubhouse exterior', category: 'Clubhouse' },
  { src: '/images/gallery-02.webp', alt: 'MANA 88 Villa design', category: 'Villas' },
  { src: '/images/gallery-03.webp', alt: 'MANA 88 Wellness spa', category: 'Wellness' },
  { src: '/images/gallery-04.webp', alt: 'MANA 88 Sports complex', category: 'Sports' },
  { src: '/images/gallery-05.webp', alt: 'MANA 88 Fine dining', category: 'Dining' },
  { src: '/images/gallery-06.webp', alt: 'MANA 88 Clubhouse interior', category: 'Clubhouse' },
  { src: '/images/gallery-07.webp', alt: 'MANA 88 Villa interior', category: 'Villas' },
  { src: '/images/gallery-08.webp', alt: 'MANA 88 Yoga sanctuary', category: 'Wellness' },
  { src: '/images/gallery-09.webp', alt: 'MANA 88 Tennis courts', category: 'Sports' },
  { src: '/images/gallery-10.webp', alt: 'MANA 88 Wine bar', category: 'Dining' },
  { src: '/images/gallery-11.webp', alt: 'MANA 88 Pool area', category: 'Clubhouse' },
  { src: '/images/gallery-12.webp', alt: 'MANA 88 Villa terrace', category: 'Villas' },
  { src: '/images/gallery-13.webp', alt: 'MANA 88 Cenote view', category: 'Wellness' },
  { src: '/images/gallery-14.webp', alt: 'MANA 88 Community pathway', category: 'Villas' },
  { src: '/images/gallery-15.webp', alt: 'MANA 88 Observatory', category: 'Clubhouse' },
  { src: '/images/gallery-16.webp', alt: 'MANA 88 Art walk', category: 'Wellness' },
  { src: '/images/gallery-17.webp', alt: 'MANA 88 Aerial view', category: 'Clubhouse' },
  { src: '/images/gallery-18.webp', alt: 'MANA 88 Garden villa', category: 'Villas' },
  { src: '/images/gallery-19.webp', alt: 'MANA 88 Lounge area', category: 'Dining' },
  { src: '/images/gallery-20.webp', alt: 'MANA 88 Sunset view', category: 'Clubhouse' },
  { src: '/images/gallery-21.webp', alt: 'MANA 88 Nature trail', category: 'Wellness' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }

  const navigate = (dir) => {
    setLightboxIndex(prev => {
      const next = prev + dir
      if (next < 0) return filtered.length - 1
      if (next >= filtered.length) return 0
      return next
    })
  }

  return (
    <section id="gallery" className="section-padding bg-mana-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Gallery</h2>
          <p className="section-subheading mx-auto">
            A glimpse into life at MANA 88.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-sans uppercase tracking-wider transition-colors ${
                activeCategory === cat
                  ? 'bg-mana-dark text-white'
                  : 'bg-white text-mana-dark/60 hover:text-mana-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-mana-dark/0 group-hover:bg-mana-dark/30 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
