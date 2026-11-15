import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, animate, motion } from 'framer-motion'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Logo from './components/Logo'
import { ScrollManager } from './components/HashLink'
import HomePage from './pages/HomePage'
import RawMaterialsPage from './pages/RawMaterialsPage'
import ProductPage from './pages/ProductPage'

function Preloader({ onDone }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.3,
      ease: 'easeInOut',
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: onDone,
    })
    return () => controls.stop()
  }, [onDone])

  return (
    <motion.div
      className="preloader"
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <Logo className="logo-preloader" />
      <div className="preloader-bottom">
        <span className="mono">Loading steel solutions</span>
        <span className="preloader-count">{String(n).padStart(3, '0')}</span>
      </div>
      <span className="preloader-bar" style={{ transform: `scaleX(${n / 100})` }} />
    </motion.div>
  )
}

// Sayfa değişiminde ekranı açan kırmızı perde
function Curtain() {
  const { pathname } = useLocation()
  return (
    <motion.div
      key={pathname}
      className="curtain"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.75, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
    />
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const done = useCallback(() => setLoading(false), [])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Cursor />
      <AnimatePresence>{loading && <Preloader onDone={done} />}</AnimatePresence>
      {!loading && (
        <>
          <ScrollManager />
          <Curtain />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/raw-materials" element={<RawMaterialsPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}
