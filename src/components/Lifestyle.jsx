const amenities = [
  {
    title: 'Wellness & Spa',
    description: 'Holistic treatments, hydrotherapy circuits, and meditation spaces surrounded by jungle canopy.',
    image: '/images/lifestyle-wellness.webp',
  },
  {
    title: 'Sports Complex',
    description: 'Tennis, padel, pickleball courts, a fitness center, and swimming pools for every age.',
    image: '/images/lifestyle-sports.webp',
  },
  {
    title: 'Fine Dining & Wine Bar',
    description: 'Farm-to-table restaurants, a curated wine cellar, and open-air dining under the stars.',
    image: '/images/lifestyle-dining.webp',
  },
  {
    title: 'Observatory',
    description: 'A stargazing pavilion celebrating the Maya astronomical heritage of the Yucatán.',
    image: '/images/lifestyle-observatory.webp',
  },
  {
    title: 'Yoga Sanctuary',
    description: 'Open-air shalas nestled among cenotes, designed for daily practice and wellness retreats.',
    image: '/images/lifestyle-yoga.webp',
  },
  {
    title: 'Art Walk',
    description: 'Sculpture gardens and gallery spaces winding through the natural landscape.',
    image: '/images/lifestyle-art.webp',
  },
]

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="section-padding bg-mana-cream/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-xl md:text-2xl italic text-mana-dark/70 max-w-3xl mx-auto mb-8">
            "Every path, every shadow is part of a ritual that reconnects you with the essence of life."
          </p>
          <h2 className="section-heading">The MANA Lifestyle</h2>
          <p className="section-subheading mx-auto">
            80+ world-class amenities designed to nourish body, mind, and spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity) => (
            <div key={amenity.title} className="group relative overflow-hidden aspect-[4/5]">
              <img
                src={amenity.image}
                alt={amenity.title}
                loading="lazy"
                width={600}
                height={750}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mana-dark/80 via-mana-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl text-white mb-2">{amenity.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
