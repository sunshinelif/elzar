import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero, products, stats } from '../data/content'
import { Link } from 'react-router-dom'
import ProductIcon from './ProductIcon'
import Magnetic from './Magnetic'

const MotionLink = motion.create(Link)

const ease = [0.22, 1, 0.36, 1]

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

const SLIDE_MS = 4000

// Ürün gruplarını sırayla tanıtan vitrin
function Showcase() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const p = products[idx]

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setIdx((i) => (i + 1) % products.length), SLIDE_MS)
    return () => clearTimeout(t)
  }, [idx, paused])

  return (
    <div className="showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="showcase-top mono">
        <span>{String(idx + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}</span>
      </div>

      <AnimatePresence mode="wait">
        <MotionLink
          key={p.id}
          to={`/products/${p.id}`}
          className="showcase-body"
          initial="enter"
          animate="show"
          exit="leave"
        >
          <motion.span
            className="showcase-icon"
            variants={{
              enter: { opacity: 0, scale: 0.6, rotate: -15 },
              show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, ease } },
              leave: { opacity: 0, scale: 1.2, transition: { duration: 0.3 } },
            }}
          >
            <ProductIcon type={p.icon} size={150} />
          </motion.span>
          <span className="line-mask">
            <motion.h2
              variants={{
                enter: { y: '105%' },
                show: { y: 0, transition: { duration: 0.7, delay: 0.1, ease } },
                leave: { y: '-105%', transition: { duration: 0.3 } },
              }}
            >
              {p.title}
            </motion.h2>
          </span>
          <motion.p
            variants={{
              enter: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25 } },
              leave: { opacity: 0, transition: { duration: 0.2 } },
            }}
          >
            {p.text}
          </motion.p>
          <motion.span
            className="showcase-link mono"
            variants={{ enter: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.4 } }, leave: { opacity: 0 } }}
          >
            View product <ArrowRight size={16} />
          </motion.span>
        </MotionLink>
      </AnimatePresence>

      <div className="showcase-tabs">
        {products.map((item, i) => (
          <button key={item.id} className={i === idx ? 'active' : ''} onClick={() => setIdx(i)}>
            <span className="tab-fill" style={i === idx ? { animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? 'paused' : 'running' } : undefined} />
            <span className="mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="tab-title">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, { duration: 1.6, delay: 1.2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, value])

  return <span ref={ref}>{String(n).padStart(2, '0')}</span>
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-main">
        <div className="hero-left">
          <h1>
            {hero.titleLines.map((text, i) => (
              <span className="line-mask" key={text}>
                <motion.span
                  className={i === hero.accentLine ? 'accent' : ''}
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.25 + i * 0.12, ease }}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="hero-desc" {...fadeUp(0.75)}>{hero.description}</motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.9)}>
            <Magnetic>
              <a href="#contact" className="btn btn-red">
                {hero.primaryCta} <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#products" className="btn btn-outline">{hero.secondaryCta}</a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="hero-right-grid" />
          <Showcase />
        </motion.div>
      </div>

      <div className="hero-strip">
        {stats.map((s, i) => (
          <motion.div key={s.label} className="strip-cell" {...fadeUp(1 + i * 0.08)}>
            <strong>{s.text ?? <><Counter value={s.value} />{s.suffix}</>}</strong>
            <span className="mono">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
