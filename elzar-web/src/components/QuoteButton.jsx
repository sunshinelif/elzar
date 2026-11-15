import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

// Alt sayfalarda sabit duran "Request for Quotation" butonu (sayfadaki iletişim formuna gider)
export default function QuoteButton() {
  return (
    <motion.a
      href="#contact"
      className="quote-float"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
    >
      <FileText size={20} /> Request for Quotation
    </motion.a>
  )
}
