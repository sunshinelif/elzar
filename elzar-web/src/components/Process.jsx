import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { process } from '../data/content'

// Masaüstünde dikey kaydırma yatay harekete dönüşür; mobilde normal liste
export default function Process() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [distance, setDistance] = useState(0)
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 900px)').matches)
  const dist = useMotionValue(0)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    const measure = () => {
      const d = mq.matches || !trackRef.current ? 0 : Math.max(0, trackRef.current.scrollWidth - window.innerWidth)
      setMobile(mq.matches)
      setDistance(d)
      dist.set(d)
    }
    measure()
    document.fonts?.ready.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [dist])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform([scrollYProgress, dist], ([v, d]) => -v * d)
  const bar = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section
      id="process"
      ref={sectionRef}
      className="process"
      style={{ height: mobile ? 'auto' : `calc(100vh + ${distance}px)` }}
    >
      <div className="process-sticky">
        <motion.div className="process-track" ref={trackRef} style={{ x }}>
          <div className="pcard pcard-intro">
            <span className="sh-line" />
            <h2>How We Work</h2>
            <p>We collaborate with manufacturers and shipping companies to optimise both production and delivery lead time.</p>
          </div>
          {process.map((s, i) => (
            <div key={s.title} className="pcard">
              <span className="pcard-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
        {!mobile && (
          <div className="process-rail container">
            <motion.span style={{ scaleX: bar }} />
          </div>
        )}
      </div>
    </section>
  )
}
