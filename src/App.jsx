import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Masterplan from './components/Masterplan'
import Lifestyle from './components/Lifestyle'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import { captureUtmParams } from './utils/analytics'

export default function App() {
  useEffect(() => {
    captureUtmParams()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Masterplan />
        <Lifestyle />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
