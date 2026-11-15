import { motion } from 'framer-motion'
import { origins } from '../data/content'
import { SectionHeading } from './Reveal'

// Şematik rota haritası (ölçeksiz): Ankara, Kahire, Çin
const nodes = {
  TR: { x: 230, y: 120 },
  EG: { x: 160, y: 250 },
  CN: { x: 540, y: 170 },
}
const routes = [
  'M230 120 Q150 170 160 250',
  'M230 120 Q390 30 540 170',
  'M160 250 Q360 340 540 170',
]

function RouteMap() {
  return (
    <svg className="routemap" viewBox="0 0 640 360">
      <defs>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" className="dot-fill" />
        </pattern>
      </defs>
      <rect width="640" height="360" fill="url(#dots)" />
      {routes.map((d, i) => (
        <g key={d}>
          <motion.path
            d={d}
            className="route-base"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.3 + i * 0.25, ease: 'easeInOut' }}
          />
          <path d={d} className="route-flow" />
          <circle r="5" className="shipment">
            <animateMotion dur={`${4 + i}s`} repeatCount="indefinite" path={d} />
          </circle>
        </g>
      ))}
      {origins.map((o, i) => {
        const n = nodes[o.code]
        return (
          <motion.g
            key={o.code}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.2, type: 'spring' }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle cx={n.x} cy={n.y} r="22" className="node-pulse" />
            <rect x={n.x - 9} y={n.y - 9} width="18" height="18" className="node" />
            <text x={n.x + 18} y={n.y - 16} className="node-label">{o.code}</text>
            {o.coords && <text x={n.x + 18} y={n.y - 2} className="node-coords">{o.coords}</text>}
          </motion.g>
        )
      })}
    </svg>
  )
}

export default function Global() {
  return (
    <section id="global" className="section global">
      <div className="container">
        <SectionHeading title="Global Reach" />
        <div className="global-grid">
          <RouteMap />
          <div className="olist">
            {origins.map((o, i) => (
              <motion.div
                key={o.code}
                className="orow"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
              >
                <span className="orow-code">{o.code}</span>
                <div>
                  <span className="mono">{o.role}</span>
                  <h3>{o.name}</h3>
                  <p>{o.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
