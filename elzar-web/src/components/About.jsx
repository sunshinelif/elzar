import { createElement } from 'react'
import { motion } from 'framer-motion'
import { Diamond, Users } from 'lucide-react'
import { about } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

// Misyon / vizyon paneli: üzerine gelince genişler ve kırmızıyla dolar
function Statement({ icon, word, label, text, dark, delay }) {
  return (
    <motion.article
      className={`mv${dark ? ' dark' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="mv-word" aria-hidden="true">{word}</span>
      <div className="mv-icon">{createElement(icon, { size: 30, strokeWidth: 1.6 })}</div>
      <div className="mv-body">
        <h3>{label}</h3>
        <p>{text}</p>
      </div>
    </motion.article>
  )
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading title={about.title} />

        <div className="about-cols">
          <Reveal className="about-lead">
            <p>{about.paragraphs[0]}</p>
          </Reveal>
          <Reveal className="about-side" delay={0.15}>
            <p>{about.paragraphs[1]}</p>
          </Reveal>
        </div>
      </div>

      <div className="container mv-wrap">
        <Statement icon={Users} word="Mission" label="Our Mission" text={about.mission} delay={0} />
        <Statement icon={Diamond} word="Vision" label="Our Vision" text={about.vision} dark delay={0.12} />
      </div>
    </section>
  )
}
