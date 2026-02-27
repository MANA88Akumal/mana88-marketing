import { MapPin, Droplets, Home, Wifi, Leaf } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Privileged Location',
    description: 'Nestled in Akumal on the Riviera Maya, between Playa del Carmen and Tulum, with direct access to pristine beaches and ancient cenotes.',
  },
  {
    icon: Droplets,
    title: 'Connected to Cenotes',
    description: 'Lots designed around natural cenotes, preserving these sacred freshwater pools as the heart of the community.',
  },
  {
    icon: Home,
    title: 'Designer Villas',
    description: 'Award-winning architects create homes that blend seamlessly with the jungle, using local materials and biophilic design principles.',
  },
  {
    icon: Wifi,
    title: 'Cutting-Edge Infrastructure',
    description: 'Fiber-optic connectivity, smart home integration, and modern utilities hidden beneath the natural landscape.',
  },
  {
    icon: Leaf,
    title: 'Renewable Energy',
    description: 'Solar power, rainwater harvesting, purified water systems, and regenerative waste management throughout the community.',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-mana-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why MANA 88</h2>
          <p className="section-subheading mx-auto">
            Five pillars that define a new standard for luxury living in harmony with nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mana-ivory text-mana-gold mb-6 group-hover:bg-mana-gold group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
              <p className="text-sm text-mana-dark/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
