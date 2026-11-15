import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../data/content'
import PageHead from '../components/PageHead'
import ProductIcon from '../components/ProductIcon'
import Contact from '../components/Contact'
import QuoteButton from '../components/QuoteButton'

const ease = [0.22, 1, 0.36, 1]

function DetailBlock({ block, index }) {
  return (
    <motion.article
      className="pd-block"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease }}
    >
      <span className="pd-index mono">{String(index + 1).padStart(2, '0')}</span>
      <h2>{block.title}</h2>
      {block.text && <p className="pd-text">{block.text}</p>}

      {block.specs?.length > 0 && (
        <dl className="pd-specs">
          {block.specs.map(([k, v], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.07 }}
            >
              <dt className="mono">{k}</dt>
              <dd>{v}</dd>
            </motion.div>
          ))}
        </dl>
      )}

      {block.grades?.length > 0 && (
        <div className="pd-grades">
          <span className="mono">{block.gradesLabel ?? 'Grades'}</span>
          <div>
            {block.grades.map((g, i) => (
              <motion.span
                key={g}
                className="grade"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 260, damping: 18 }}
              >
                {g}
              </motion.span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  if (!product) return <Navigate to="/#products" replace />

  const others = products.filter((p) => p.id !== id)

  return (
    <>
      <PageHead
        title={product.pageTitle ?? product.title}
        crumbs={[{ label: 'Products', to: '/#products' }]}
        icon={product.icon}
        image={product.image}
        lead={product.text}
      />

      <section className="section pd">
        <div className="container">
          {product.details?.length ? (
            <div className="pd-grid">
              {product.details.map((b, i) => <DetailBlock key={b.title} block={b} index={i} />)}
            </div>
          ) : (
            <div className="pd-empty">
              <p>Detailed specifications for {product.title.toLowerCase()} are available on request.</p>
              <a href="#contact" className="btn btn-red">Request specifications <ArrowRight size={18} /></a>
            </div>
          )}
        </div>
      </section>

      <section className="pd-others">
        <div className="container">
          <h3 className="mono">Other products</h3>
          <div className="pd-others-grid">
            {others.map((p) => (
              <Link key={p.id} to={`/products/${p.id}`} className="pd-other">
                <ProductIcon type={p.icon} size={36} />
                <strong>{p.title}</strong>
                <ArrowRight size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <QuoteButton />
    </>
  )
}
