import { createElement } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Clock, Globe2, Layers, Timer, Handshake } from 'lucide-react'
import { origins } from '../data/content'
import { SectionHeading } from './Reveal'

// Metinler sitedeki "About" ve "Mission" ifadelerinden derlendi
const items = [
  { icon: Globe2, title: 'Global Export Records', text: 'Delivering comprehensive iron-steel solutions from Türkiye, Egypt and Chinese origins.', big: true },
  { icon: Timer, title: 'Swift Response', text: 'Capacity to swiftly respond to all inquiries within our profile.' },
  { icon: Handshake, title: 'Full Satisfaction', text: 'Comprehensive clientele services ensuring full satisfaction.' },
  { icon: Clock, title: 'Lead Time Focus', text: 'Working with manufacturers and shipping companies on production and delivery lead time.' },
  { icon: Layers, title: 'Wide Range', text: 'A wide range of products and services across diverse industrial sectors.' },
]

// Fareyle eğilen kart
function TiltCard({ item, index }) {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })
  const glareX = useTransform(mx, (v) => `${v * 100}%`)
  const glareY = useTransform(my, (v) => `${v * 100}%`)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const reset = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.article
      className={`why-card${item.big ? ' big' : ''}`}
      style={{ rotateX: rx, rotateY: ry, '--gx': glareX, '--gy': glareY }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="why-glare" />
      <span className="why-num mono">{String(index + 1).padStart(2, '0')}</span>
      <div className="why-icon">{createElement(item.icon, { size: item.big ? 34 : 26, strokeWidth: 1.6 })}</div>
      <div className="why-body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        {item.big && (
          <div className="why-origins">
            {origins.map((o) => <span key={o.code}>{o.code}</span>)}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default function WhyElzar() {
  return (
    <section className="section why">
      <div className="container">
        <SectionHeading title="Why Elzar" />
        <div className="why-grid">
          {items.map((it, i) => <TiltCard key={it.title} item={it} index={i} />)}
        </div>
      </div>
    </section>
  )
}
