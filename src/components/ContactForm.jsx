import { useState, useRef } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '../utils/supabase'
import { getStoredUtmParams } from '../utils/analytics'

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    // Get reCAPTCHA response
    const recaptchaResponse = window.grecaptcha?.getResponse()
    if (!recaptchaResponse) {
      setStatus('error')
      setErrorMsg('Please complete the reCAPTCHA verification.')
      return
    }

    const utms = getStoredUtmParams()

    try {
      // Insert into Supabase
      const { error } = await supabase.from('marketing_leads').insert({
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone,
        utm_source: utms.utm_source || null,
        utm_medium: utms.utm_medium || null,
        utm_campaign: utms.utm_campaign || null,
        utm_content: utms.utm_content || null,
      })

      if (error) throw error

      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '' })
      window.grecaptcha?.reset()
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <section id="contact" className="relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-mana-dark/90" />
      </div>

      <div className="relative section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            Let's Talk About MANA 88
          </h2>
          <p className="text-white/60 mb-12">
            Share your details and our team will reach out with exclusive information about available home sites.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-sm p-10 text-center">
              <CheckCircle className="w-16 h-16 text-mana-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-white mb-3">Thank you!</h3>
              <p className="text-white/70 mb-6">We'll be in touch shortly.</p>
              <a
                href="https://manaakumal.com/wp-content/uploads/2025/11/M88_Brochure_v5_English.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Brochure
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-mana-gold transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-mana-gold transition-colors"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-mana-gold transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-mana-gold transition-colors"
              />

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <div
                  ref={recaptchaRef}
                  className="g-recaptcha"
                  data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  data-theme="dark"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm justify-center">
                  <AlertCircle className="w-4 h-4" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full sm:w-auto mx-auto flex items-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request Information
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
