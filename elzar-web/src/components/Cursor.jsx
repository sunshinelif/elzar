import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Masaüstünde imleci takip eden nişangah halkası
export default function Cursor() {
  const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 400, damping: 35 })
  const sy = useSpring(y, { stiffness: 400, damping: 35 })

  useEffect(() => {
    if (!enabled) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHover(!!e.target.closest('a, button, input, textarea'))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [enabled, x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div className={`cursor-ring${hover ? ' hover' : ''}`} style={{ x: sx, y: sy }} />
      <motion.div className="cursor-dot" style={{ x, y }} />
    </>
  )
}
