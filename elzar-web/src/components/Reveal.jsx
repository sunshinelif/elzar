import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 32, className, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

// Sola hizalı bölüm başlığı: kırmızı çizgi + tek başlık
export function SectionHeading({ title, light }) {
  return (
    <div className={`sh${light ? ' light' : ''}`}>
      <motion.span
        className="sh-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <h2 className="sh-title">
        <span className="line-mask">
          <motion.span
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.span>
        </span>
      </h2>
    </div>
  )
}
