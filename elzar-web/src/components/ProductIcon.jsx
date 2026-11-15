// Ürün gruplarını temsil eden kesit çizimleri
export default function ProductIcon({ type, size = 30 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'square', strokeLinejoin: 'miter' }
  switch (type) {
    case 'beam':
      return <svg {...common}><path d="M3 3h18v4h-7v10h7v4H3v-4h7V7H3z" /></svg>
    case 'bars':
      return <svg {...common}><rect x="3" y="4" width="18" height="3.5" /><rect x="3" y="10.25" width="18" height="3.5" /><rect x="3" y="16.5" width="18" height="3.5" /></svg>
    case 'rebar':
      return <svg {...common}><path d="M6 3v18M12 3v18M18 3v18" /><path d="M4.5 6l3 1.5M4.5 11l3 1.5M4.5 16l3 1.5M10.5 6l3 1.5M10.5 11l3 1.5M10.5 16l3 1.5M16.5 6l3 1.5M16.5 11l3 1.5M16.5 16l3 1.5" /></svg>
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="2" /></svg>
  }
}
