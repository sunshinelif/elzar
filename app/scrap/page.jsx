import React from 'react'

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 ">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col items-center text-center mt-28">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">SCRAP</h1>
        <p className="mt-6 text-gray-700 max-w-3xl leading-relaxed text-lg text-justify">
          We specialize in purchasing and supply comprehensive range of high-value industrial scrap. Our inventory includes all grades of stainless steel (such as 304, 316, 309/310, 400 series, and Duplex/Super Duplex), nickel alloys (Inconel, Ni-Hard, Niresist), and titanium (both Ferro and Vacuum grade). We also accept all forms of aluminum, copper, and brass, along with precious metals like Platinum, Iridium, and Rhodium. We are interested in both solid forms (turnings, solids) and materials containing Nickel, Chromium, and Molybdenum, including powders and runnings. Contact us today for competitive pricing on your scrap materials.
        </p>

      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Features / Highlights Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Materials We Handle</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Stainless Steel</h3>
            <p>304, 316, 309/310, 400 series, Duplex/Super Duplex</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Nickel Alloys</h3>
            <p>Inconel, Ni-Hard, Niresist</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Titanium</h3>
            <p>Ferro & Vacuum grade</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Aluminum, Copper, Brass</h3>
            <p>All forms accepted</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Precious Metals</h3>
            <p>Platinum, Iridium, Rhodium</p>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Page
