import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/content'
import { SectionHeading } from './Reveal'
import ProductIcon from './ProductIcon'

const MotionLink = motion.create(Link)

export default function Products() {
  const [hovered, setHovered] = useState(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 250, damping: 25 })
  const y = useSpring(my, { stiffness: 250, damping: 25 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <section id="products" className="section products">
      <div className="container">
        <SectionHeading title="Product Overview" />

        <div className="plist" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
          {products.map((p, i) => (
            <MotionLink
              key={p.id}
              to={`/products/${p.id}`}
              className="prow"
              onMouseEnter={() => setHovered(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mono prow-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="prow-icon"><ProductIcon type={p.icon} size={34} /></span>
              <span className="prow-arrow"><ArrowUpRight size={26} /></span>
            </MotionLink>
          ))}

          {/* İmleci takip eden ürün önizlemesi (masaüstü) */}
          <motion.div className="pfloat" style={{ x, y }}>
            <AnimatePresence mode="wait">
              {hovered !== null && (
                <motion.div
                  key={hovered}
                  className="pfloat-card"
                  initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.4, opacity: 0, rotate: 8 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProductIcon type={products[hovered].icon} size={90} />
                  <span className="mono">View details</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
