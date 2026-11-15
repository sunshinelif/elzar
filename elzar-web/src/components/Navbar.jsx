import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { company, nav, products } from '../data/content'
import HashLink from './HashLink'
import Logo from './Logo'
import ProductIcon from './ProductIcon'

const subItems = { products }
const MotionLink = motion.create(Link)
const num = (i) => String(i + 1).padStart(2, '0')

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(null)
  const [mobileSub, setMobileSub] = useState(null)
  const [section, setSection] = useState('top')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ana sayfada hangi bölümde olunduğunu izle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSection(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach(({ section: id }) => {
      const el = id && document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  const isActive = (item) => {
    if (item.children === 'products' && pathname.startsWith('/products/')) return true
    return item.section ? pathname === '/' && section === item.section : pathname === item.to
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const closeAll = () => {
    setOpen(false)
    setMega(null)
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} onMouseLeave={() => setMega(null)}>
      <div className="utility mono">
        <div className="container utility-inner">
          <span>{company.offices.map((o) => o.city).join('  /  ')}</span>
          <span>
            <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>{company.phone}</a>
            <i>/</i>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
        </div>
      </div>

      <div className="nav-main">
        <div className="container nav-inner">
          <HashLink to="/#top" className="logo" onClick={closeAll}>
            <Logo />
          </HashLink>

          <nav className="nav-links">
            {nav.map((item, i) => {
              const children = subItems[item.children]
              return (
                <HashLink
                  key={item.label}
                  to={item.to}
                  className={isActive(item) ? 'active' : ''}
                  onMouseEnter={() => setMega(children ? item.label : null)}
                  onClick={closeAll}
                >
                  <span className="mono nav-num">{num(i)}</span>
                  {item.label}
                  {children && <ChevronDown size={14} className={`chev${mega === item.label ? ' up' : ''}`} />}
                </HashLink>
              )
            })}
          </nav>

          <a href="#contact" className="nav-cta" onClick={closeAll}>
            <span>Contact Sales</span> <ArrowRight size={18} />
          </a>

          <button className={`burger${open ? ' open' : ''}`} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span /><span />
          </button>
        </div>
        <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      </div>

      {/* Masaüstü mega menü */}
      <AnimatePresence>
        {mega && (
          <motion.div
            className="mega"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container mega-grid">
              {subItems[nav.find((n) => n.label === mega).children].map((c, i) => (
                <MotionLink
                  key={c.id}
                  to={`/products/${c.id}`}
                  className="mega-item"
                  onClick={closeAll}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <span className="mono">{num(i)}</span>
                  <ProductIcon type={c.icon} size={42} />
                  <strong>{c.title}</strong>
                  <ArrowRight size={18} className="mega-arrow" />
                </MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobil tam ekran menü */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="overlay"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container overlay-inner">
              {nav.map((item, i) => {
                const children = subItems[item.children]
                const expanded = mobileSub === item.label
                return (
                  <motion.div key={item.label} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.07 }}>
                    {children ? (
                      <button className={`overlay-link${expanded ? ' expanded' : ''}`} onClick={() => setMobileSub(expanded ? null : item.label)}>
                        <span className="mono">{num(i)}</span>{item.label}
                        <ChevronDown size={28} className={`chev${expanded ? ' up' : ''}`} />
                      </button>
                    ) : (
                      <HashLink className="overlay-link" to={item.to} onClick={closeAll}>
                        <span className="mono">{num(i)}</span>{item.label}
                      </HashLink>
                    )}
                    <AnimatePresence>
                      {children && expanded && (
                        <motion.div className="overlay-sub" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                          {children.map((c) => (
                            <Link key={c.id} to={`/products/${c.id}`} onClick={closeAll}>{c.title}</Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
              <motion.div className="overlay-foot mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <a href={`mailto:${company.email}`}>{company.email}</a>
                <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>{company.phone}</a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
