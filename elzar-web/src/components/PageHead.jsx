import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductIcon from './ProductIcon'

const ease = [0.22, 1, 0.36, 1]

// Alt sayfaların başlık alanı: kırıntı yolu + dev başlık (+ isteğe bağlı fotoğraf / ikon)
export default function PageHead({ title, crumbs = [], icon, image, lead }) {
  return (
    <section className={`page-head${image ? ' has-image' : ''}`}>
      {image && (
        <motion.div
          className="page-head-img"
          style={{ backgroundImage: `url(${image.startsWith('/') ? import.meta.env.BASE_URL + image.slice(1) : image})` }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
        />
      )}
      <div className="page-head-grid" />
      {icon && !image && (
        <motion.span
          className="page-head-icon"
          initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          <ProductIcon type={icon} size={420} />
        </motion.span>
      )}
      <div className="container page-head-inner">
        <motion.nav className="crumbs mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <i>/</i>
              {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}
            </span>
          ))}
          <i>/</i>
          <span className="crumb-current">{title}</span>
        </motion.nav>
        <h1>
          <span className="line-mask">
            <motion.span initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease }}>
              {title}
            </motion.span>
          </span>
        </h1>
        {lead && (
          <motion.p className="page-head-lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
            {lead}
          </motion.p>
        )}
        <motion.div
          className="page-head-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
    </section>
  )
}
