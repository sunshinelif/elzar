// ELZAR Commercial Metals logosunun SVG uyarlaması.
// Orijinal logo dosyası elinize geçerse public/ klasörüne koyup bu bileşeni <img> ile değiştirebilirsiniz.
export default function Logo({ className = '' }) {
  return (
    <svg className={`logo-svg ${className}`} viewBox="0 0 230 70" role="img" aria-label="ELZAR Commercial Metals">
      <defs>
        <linearGradient id="logo-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f07a6e" />
          <stop offset="0.45" stopColor="#c0281f" />
          <stop offset="1" stopColor="#7a0d0a" />
        </linearGradient>
        <linearGradient id="logo-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9dce1" />
          <stop offset="0.5" stopColor="#7c828c" />
          <stop offset="0.55" stopColor="#4b5059" />
          <stop offset="1" stopColor="#9aa0a8" />
        </linearGradient>
      </defs>
      <rect x="2" y="4" width="46" height="12" rx="5" fill="url(#logo-red)" />
      <rect x="2" y="20" width="40" height="12" rx="5" fill="url(#logo-red)" />
      <rect x="2" y="36" width="46" height="12" rx="5" fill="url(#logo-red)" />
      <text x="50" y="48" textLength="176" lengthAdjust="spacingAndGlyphs" className="logo-word" fill="url(#logo-steel)">
        LZAR
      </text>
      <text x="4" y="66" textLength="222" lengthAdjust="spacing" className="logo-sub">
        COMMERCIAL METALS
      </text>
    </svg>
  )
}
