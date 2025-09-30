/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Hafif sağ-sol titreme (normal shake)
        'shake': {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '25%': { transform: 'rotateY(-10deg)' },
          '50%': { transform: 'rotateY(10deg)' },
          '75%': { transform: 'rotateY(-5deg)' },
        },
        // Hafif büyüme efekti
        'zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        // Üzerine gelindiğinde çapraz oynama efekti + büyüme
        'diagonal-shake': {
          '0%, 100%': { transform: 'rotate(0deg) translate(0, 0) scale(1)' },
          '25%': { transform: 'rotate(4deg) translate(6px, -6px) scale(1.05)' },
          '50%': { transform: 'rotate(-4deg) translate(-6px, 6px) scale(1.05)' },
          '75%': { transform: 'rotate(2deg) translate(3px, -3px) scale(1.05)' },
        },
        animation: {
          shake: "shake 1.5s ease-in-out infinite",
        },
      },
      animation: {
        'shake': 'shake 2s ease-in-out infinite',
        'zoom': 'zoom 0.3s ease-in-out',
        'diagonal-shake': 'diagonal-shake 0.5s ease-in-out',
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        gray: {
          '100': '#f7fafc',
          '200': '#edf2f7',
          '300': '#e2e8f0',
          '400': '#cbd5e0',
          '500': '#a0aec0',
          '600': '#718096',
          '700': '#4a5568',
          '800': '#2d3748',
          '900': '#1a202c',
        },
        primary: {
          '50': '#f0f5ff',
          '100': '#dbe4ff',
          "150": '#00204a',
          '200': '#b3cfff',
          '300': '#809fff',
          '400': '#5173cc',
          '500': '#2e4da3',
          '600': '#1c3480',
          '700': '#102161',
          '800': '#091843',
          '900': '#040d28',
        },
        secondary: {
          '50': '#fff5f0',
          '100': '#ffdbcc',
          '150':'#8B0000',
          '200': '#ffaa80',
          '300': '#ff784d',
          '400': '#ff562b',
          '500': '#e63a0d',
          '600': '#b72f0b',
          '700': '#8f2309',
          '800': '#671805',
          '900': '#3f0d03',
        },
      },
    },
  },
  plugins: [],
};
