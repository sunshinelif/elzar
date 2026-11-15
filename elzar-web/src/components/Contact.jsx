import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, MapPin, MessageCircle, Phone, X } from 'lucide-react'
import { company } from '../data/content'

const digits = (s) => s.replace(/[^\d+]/g, '')
const ease = [0.22, 1, 0.36, 1]

const fields = [
  { name: 'name', label: 'Your name', required: true },
  { name: 'email', label: 'Email address', type: 'email', required: true },
  { name: 'phone', label: 'Phone number', type: 'tel' },
  { name: 'message', label: 'How can we help?', textarea: true, required: true },
]

// Ofis haritasını açan pencere
function MapModal({ office, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div className="cx-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="cx-modal-box"
        initial={{ y: 40, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 40, scale: 0.96 }}
        transition={{ duration: 0.4, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <div>
            <span className="mono">{office.label}</span>
            <strong>{office.address}</strong>
          </div>
          <button onClick={onClose} aria-label="Close"><X size={22} /></button>
        </header>
        <iframe
          title={office.label}
          src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Contact() {
  const [mapOffice, setMapOffice] = useState(null)
  const [sent, setSent] = useState(false)

  // Form henüz bir sunucuya bağlı değil; e-posta istemcisini açar.
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    const body = `Full Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Website inquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
    form.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container cx">
        <div className="cx-intro">
          <motion.span
            className="sh-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          />
          <h2 className="cx-title">
            <span className="line-mask">
              <motion.span initial={{ y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}>
                Contact Us
              </motion.span>
            </span>
          </h2>
          <p className="cx-lead">Our sales team responds swiftly to all inquiries. Write to us directly:</p>

          <a href={`mailto:${company.email}`} className="cx-mail">
            <span>{company.email}</span>
            <ArrowUpRight className="cx-mail-arrow" />
          </a>

          <div className="cx-pills">
            <a href={`tel:${digits(company.phone)}`} className="cx-pill"><Phone size={16} /> {company.phone}</a>
            <a href={`https://wa.me/${digits(company.whatsapp).replace('+', '')}`} target="_blank" rel="noreferrer" className="cx-pill wa">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>

          <div className="cx-offices">
            {company.offices.map((o, i) => (
              <motion.div
                key={o.code}
                className="cx-office"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              >
                <span className="mono">{o.label}</span>
                <p>{o.address}</p>
                <button onClick={() => setMapOffice(o)} className="cx-maplink mono"><MapPin size={14} /> View map</button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.form
          className="cx-form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
        >
          {fields.map((fd, i) => {
            const Tag = fd.textarea ? 'textarea' : 'input'
            return (
              <label key={fd.name} className="cx-field">
                <span className="cx-num mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="cx-label">{fd.label}{fd.required && <i> *</i>}</span>
                <Tag name={fd.name} type={fd.textarea ? undefined : fd.type ?? 'text'} required={fd.required} rows={fd.textarea ? 3 : undefined} />
                <span className="cx-underline" />
              </label>
            )
          })}

          <div className="cx-submit-row">
            <p className="cx-note">Your message opens in your email app, addressed to {company.email}.</p>
            <button type="submit" className={`cx-send${sent ? ' sent' : ''}`} aria-label="Send">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span key="ok" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check size={30} /></motion.span>
                ) : (
                  <motion.span key="go" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="cx-send-inner">
                    <span>Send</span>
                    <ArrowUpRight size={26} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.form>
      </div>

      <AnimatePresence>
        {mapOffice && <MapModal office={mapOffice} onClose={() => setMapOffice(null)} />}
      </AnimatePresence>
    </section>
  )
}
