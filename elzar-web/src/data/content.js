// Sitedeki tüm metinler burada. Kaynak: www.elzar.com.tr

export const company = {
  name: 'Elzar Commercial Steel',
  short: 'ELZAR',
  phone: '+90 312 544 11 12',
  whatsapp: '+90 505 849 12 03',
  email: 'sales@elzar.com.tr',
  offices: [
    { code: 'TR', label: 'TR Office', city: 'Ankara, Türkiye', timeZone: 'Europe/Istanbul', address: 'Sinan Cd. 94A, Ankara/Turkey', mapQuery: 'Sinan Cd. 94A, Ankara, Turkey' },
    { code: 'EG', label: 'EG Office', city: 'Cairo, Egypt', timeZone: 'Africa/Cairo', address: '3 Mansour Diab st, El Sabteya, Cairo, Egypt.', mapQuery: 'Mansour Diab St, El Sabteya, Cairo, Egypt' },
  ],
}

// Menü elzar.com.tr ile aynı: Home · Raw Materials · Products (alt menülü)
// section: ana sayfada aktif menüyü belirlemek için izlenen bölüm
export const nav = [
  { to: '/#top', section: 'top', label: 'Home' },
  { to: '/raw-materials', label: 'Raw Materials' },
  { to: '/#products', section: 'products', label: 'Products', children: 'products' },
]

export const rawMaterials = {
  title: 'Raw Materials',
  paragraphs: [
    'We specialize in purchasing and supplying a comprehensive range of high-value industrial scrap and raw materials. Our inventory includes all grades of stainless steel (such as 304, 316, 309/310, 400 series, and Duplex/Super Duplex), nickel alloys (Inconel, Ni-Hard, Niresist), and titanium (both Ferro and Vacuum grade).',
    'We are also a major buyer & supplier of ferrous scrap, including HMS 80/20 and 3S/5SP billets, slabs, and blooms. Beyond ferrous and stainless, we accept all forms of aluminum, copper, and brass, along with precious metals like Platinum, Iridium, and Rhodium.',
  ],
  forms: ['Turnings', 'Solids', 'Nickel', 'Chromium', 'Molybdenum', 'Powders', 'Runnings'],
  formsText: 'We are interested in both solid forms (turnings, solids) and materials containing Nickel, Chromium, and Molybdenum, including powders and runnings.',
  cta: 'Contact us today for competitive pricing on your scrap & other raw materials.',
  // symbol: kartta gösterilen kısa kod
  items: [
    { symbol: 'SS', title: 'Stainless Steel', text: '304, 316, 309/310, 400 series, Duplex/Super Duplex' },
    { symbol: 'Ni', title: 'Nickel Alloys', text: 'Inconel, Ni-Hard, Niresist' },
    { symbol: 'Ti', title: 'Titanium', text: 'Ferro & Vacuum grade' },
    { symbol: 'Cu', title: 'Aluminum, Copper, Brass', text: 'All forms accepted' },
    { symbol: 'Pt', title: 'Precious Metals', text: 'Platinum, Iridium, Rhodium' },
    { symbol: 'Fe', title: 'Ferrous', text: 'HMS 80/20, 3S/5SP billets, slabs, blooms' },
  ],
}

export const hero = {
  eyebrow: 'Iron & Steel · Scrap & Raw Materials',
  titleLines: ['Elzar', 'Commercial', 'Steel'],
  accentLine: 2,
  description:
    'Leading subcontracted-manufacturing trading company with global export records, delivering comprehensive iron-steel solutions from Türkiye, Egypt and Chinese origins.',
  primaryCta: 'Contact Sales',
  secondaryCta: 'View Catalog',
}

// value: sayaçla animasyonlu sayı, text: sabit metin
export const stats = [
  { value: 3, label: 'Sourcing Origins' },
  { value: 2, label: 'Regional Offices' },
  { value: 4, suffix: '+', label: 'Product Groups' },
  { text: 'Global', label: 'Export Records' },
]

export const about = {
  title: 'About Elzar Commercial Steel',
  paragraphs: [
    "Elzar Commercial Steel stands as Türkiye & Egypt's leading subcontracted-manufacturing commercial company that provides comprehensive clientele services ensuring full satisfaction with capacity to swiftly respond to all inquiries within our profile.",
    'Our commitment extends to delivering a wide range of products and services, creating a seamless experience for our valued clients across diverse industrial sectors.',
  ],
  mission:
    'Effectively collaborate with manufacturers and shipping companies to offer the very best services on both production and delivery lead time.',
  vision:
    'To remain your reliable supplier for all iron-steel products, and maintaining our leadership position in the industry.',
}

// Sıralama sitedeki menüyle aynı. icon: ProductIcon tipi (beam | bars | rebar | coil)
// details: ürün sayfasındaki teknik bloklar (specs: [etiket, değer], grades: kalite listesi)
// image: ürün sayfası başlık fotoğrafı (public/ klasöründeki dosya yolu, ör. '/products/rebar.jpg')
export const products = [
  {
    id: 'rebar-wire-rod',
    icon: 'rebar',
    title: 'Rebar & Wire Rod',
    text: 'Reinforcing steel and wire rod for concrete construction and wire drawing.',
    image: null,
    details: [
      {
        title: 'Reinforced Steel Bars - Rebar',
        text: 'Reinforcing steel placed in concrete to offset tensile and shear stresses in reinforced concrete structures, manufactured and delivered as finished products.',
        specs: [
          ['Size range', '8 – 50 mm diameter'],
          ['Weldability', 'Available as weldable or non-weldable'],
          ['Forms', 'Bars, coils, de-coiled bars'],
          ['Designed for', 'Tensile and shear stress resistance'],
        ],
        grades: ['B500B', 'ASTM A615', 'FE500', 'B500C', 'BST500S', 'S400W'],
      },
      {
        title: 'Wire Rod in Coil',
        text: 'Semi-finished metallic products in coil form, manufactured through hot rolling process. Used for cold drawing of round sections in various industrial applications.',
        specs: [
          ['Size range', '5.5 – 32 mm diameter'],
          ['Process', 'Hot rolling'],
          ['Use', 'Cold drawing of round sections'],
        ],
        grades: ['SAE 1006 – 1085'],
      },
    ],
  },
  {
    id: 'profiles-beams',
    icon: 'beam',
    title: 'Profiles & Beams',
    pageTitle: 'Structural Profiles & Beams',
    text: 'Structural profiles and beams for construction, infrastructure and industrial projects.',
    image: null,
    details: [
      {
        title: 'UPN Beams',
        specs: [
          ['Height', '50 – 400 mm'],
          ['Length', '6 or 12 m'],
          ['Tolerance', '-0 / +100 mm'],
        ],
        grades: ['S235JR', 'S275JR'],
      },
      {
        title: 'IPN Beams',
        specs: [
          ['Height', '80 – 450 mm'],
          ['Length', '6 or 12 m'],
          ['Commercial', '180 – 450 mm'],
        ],
        grades: ['S235JR', 'S275JR'],
      },
      {
        title: 'IPE Beams',
        specs: [
          ['Height', '100 – 600 mm'],
          ['Length', '12 m'],
          ['Commercial range', '100 – 600 mm'],
        ],
        grades: ['S275JR'],
      },
      {
        title: 'HEA / HEB Beams',
        // Ekran görüntüsünde cümlenin sonu kesik; sitedeki tam metinle kontrol edin
        text: 'Used in steel buildings and reinforced concrete structures.',
        specs: [
          ['Height', '100 – 1000 mm'],
          ['Length', '12 m'],
        ],
        grades: ['S275JR'],
      },
    ],
  },
  {
    id: 'merchant-bars',
    icon: 'bars',
    title: 'Merchant Bars',
    pageTitle: 'Merchant Bars & Equal Angles',
    text: 'Flat, angle, square and round bars for fabrication and general engineering.',
    image: null,
    details: [
      {
        title: 'Round Bars',
        specs: [
          ['Sizes', '6 – 120 mm'],
          ['Length', '6 – 12 m'],
        ],
        grades: ['S235JR', 'S275JR', 'S355JR', 'S355J2'],
      },
      {
        title: 'Square Bars',
        specs: [
          ['Sizes', '6x6 – 100x100 mm'],
          ['Length', '6 – 12 m'],
        ],
        grades: ['S235JR', 'S275JR', 'S355JR'],
      },
      {
        title: 'Flat Bars',
        specs: [
          ['Size', '12x2.5 – 160x40 mm'],
          ['Length', '6 – 12 m'],
        ],
        grades: ['S235JR', 'S275JR', 'S355JR', 'S355J2'],
      },
      {
        title: 'Equal Angles',
        specs: [
          ['Height', '18 – 120 mm'],
          ['Length', '6 or 12 m'],
          ['Production', '90 – 120 mm'],
          ['Commercial', '40 – 150 mm'],
        ],
        grades: ['S235JR'],
      },
    ],
  },
  {
    id: 'coils-sheets',
    icon: 'coil',
    title: 'Coils & Sheets',
    text: 'Hot and cold rolled coils and sheets for manufacturing and processing.',
    image: null,
    details: [
      {
        title: 'Hot Rolled Steel',
        specs: [
          ['Thickness', '1 – 25 mm'],
          ['Width', '1000 – 2000 mm'],
        ],
        gradesLabel: 'Standards',
        grades: ['DIN', 'EN', 'ASTM', 'GB', 'JIS'],
      },
      {
        title: 'Galvanized Coils',
        specs: [
          ['Thickness', '0.2 – 6 mm'],
          ['Width', '650 – 1500 mm'],
          ['Zinc coating', '30 – 275 g/m²'],
        ],
      },
      {
        title: 'Cold Rolled Coils',
        specs: [
          ['Thickness', '0.3 – 3 mm'],
          ['Width', '850 – 2500 mm'],
        ],
        gradesLabel: 'Standards',
        grades: ['DIN', 'EN', 'ASTM', 'GB', 'JIS'],
      },
      {
        title: 'Black & Galvanized Tear-Drop Coils',
        specs: [
          ['Thickness', '1.1 – 18 mm'],
          ['Width', '650 – 1500 mm'],
          ['Zinc coating', '100 – 275 g/m²'],
        ],
        gradesLabel: 'Standards',
        grades: ['DIN', 'EN', 'ASTM', 'GB', 'JIS'],
      },
      {
        title: 'Hot Rolled Plates',
        specs: [
          // Ekran görüntüsünde üst sınır kısmen kapalı; sitedeki değerle kontrol edin
          ['Thickness', '6 – 150 mm'],
          ['Width', '1000 – 2500 mm'],
        ],
        gradesLabel: 'Standards',
        grades: ['DIN', 'EN', 'ASTM', 'GB', 'JIS'],
      },
    ],
  },
]

export const process = [
  { title: 'Inquiry', text: 'Share your requirements — we respond swiftly to every inquiry within our profile.' },
  { title: 'Sourcing', text: 'We match your order with partner mills in Türkiye, Egypt and China.' },
  { title: 'Production', text: 'Subcontracted manufacturing with close follow-up on production lead time.' },
  { title: 'Delivery', text: 'Coordinated shipping with our logistics partners to your destination.' },
]

export const origins = [
  { code: 'TR', name: 'Türkiye', role: 'Regional Office · Ankara', coords: '39.93°N 32.86°E', text: 'Regional office in Ankara and a strong network of Turkish mills.' },
  { code: 'EG', name: 'Egypt', role: 'Regional Office · Cairo', coords: '30.04°N 31.24°E', text: 'Regional office in Cairo serving Egyptian and regional markets.' },
  { code: 'CN', name: 'China', role: 'Sourcing Origin', coords: null, text: 'Competitive sourcing options for large-volume requirements.' },
]
