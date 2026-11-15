import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { rawMaterials } from '../data/content'
import Reveal from './Reveal'

export default function RawMaterials() {
  return (
    <section id="raw-materials" className="section raw">
      <div className="raw-grid-bg" />
      <div className="container">
        <div className="raw-intro">
          {rawMaterials.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 0.1}>{p}</Reveal>
          ))}
        </div>

        <div className="spec">
          {rawMaterials.items.map((m, i) => (
            <motion.div
              key={m.title}
              className="spec-row"
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="spec-code">{m.symbol}</span>
              <h3>{m.title}</h3>
              <p className="mono">{m.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="raw-forms">
          <Reveal as="p">{rawMaterials.formsText}</Reveal>
          <div className="tags">
            {rawMaterials.forms.map((f, i) => (
              <motion.span
                key={f}
                className="mono tag"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                [ {f} ]
              </motion.span>
            ))}
          </div>
        </div>

        <motion.a
          href="#contact"
          className="raw-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>{rawMaterials.cta}</span>
          <span className="raw-cta-btn"><ArrowRight size={28} /></span>
        </motion.a>
      </div>
    </section>
  )
}
