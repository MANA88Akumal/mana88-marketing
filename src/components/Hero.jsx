export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="MANA 88 aerial view of luxury community in Akumal"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mana-dark/80 via-mana-dark/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
          Regenerative Eco-Luxury<br />Living in Akumal
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-sans mb-10">
          378 home sites &middot; 80+ amenities &middot; Riviera Maya
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#about" className="btn-primary">
            Explore the Community
          </a>
          <a
            href="https://manaakumal.com/wp-content/uploads/2025/11/M88_Brochure_v5_English.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Brochure
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
