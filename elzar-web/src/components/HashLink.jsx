import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// "/#products" gibi bağlantılar: aynı sayfadaysa kaydırır, değilse sayfayı açar
export default function HashLink({ to, onClick, ...props }) {
  const { pathname } = useLocation()
  const [path, hash] = to.split('#')

  const handle = (e) => {
    onClick?.(e)
    if ((path || '/') === pathname && hash) {
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return <Link {...props} to={to} onClick={handle} />
}

// Sayfa değişince başa döner, hash varsa ilgili bölüme kaydırır
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 60)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}
