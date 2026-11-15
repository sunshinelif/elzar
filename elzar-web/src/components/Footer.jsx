import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { company, nav, products } from '../data/content'
import { Link } from 'react-router-dom'
import HashLink from './HashLink'
import Logo from './Logo'

const digits = (s) => s.replace(/[^\d+]/g, '')

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <HashLink to="/#top" className="logo logo-footer"><Logo /></HashLink>
          <p className="footer-name">{company.name}</p>
        </div>
        <div>
          <h4 className="mono">Menu</h4>
          {nav.map((n) => <HashLink key={n.label} to={n.to}>{n.label}</HashLink>)}
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4 className="mono">Products</h4>
          {products.map((p) => <Link key={p.id} to={`/products/${p.id}`}>{p.title}</Link>)}
        </div>
        <div>
          <h4 className="mono">Offices</h4>
          {company.offices.map((o) => (
            <p key={o.code}><strong>{o.label}:</strong> {o.address}</p>
          ))}
          <a href={`tel:${digits(company.phone)}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>

      <div className="container footer-bottom mono">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <span>All rights reserved</span>
      </div>

      <a
        href={`https://wa.me/${digits(company.whatsapp).replace('+', '')}`}
        target="_blank"
        rel="noreferrer"
        className="wa-float"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#top"
            className="to-top"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ArrowUp size={20} />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  )
}
