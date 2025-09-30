import React from 'react'
import Image from "next/image";
import QuotationBot from "@/components/QuotationBot";
const page = () => {
  return (

<div className="mt-28 bg-gray-50 flex flex-col items-center justify-center">

  <div className="relative w-full h-[600px]">
    <Image
      src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1759152035/wirerodrebar_j5rmrq.png"
      alt="hot rolled"
      fill
      className="object-cover w-full"
      priority
    />
   
    <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl">
      <h1 className='text-5xl font-bold mb-10 text-center'>REBAR & WIRE ROD</h1>
    </div>
  </div>

 
  <div className="w-full  px-6 py-12 text-left container">
    <div className="grid grid-cols-2 gap-6">
<div>
        <h2 className="border-b border-dotted border-purple-950 font-bold ">
         Reinforced Steel Bars - Rebar
    </h2>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4 text-gray-700 leading-relaxed">
            <li>Size range: 8-50mm diameter</li>
            <li>Available as weldable or non-weldable</li>
            <li>Forms: bars, coils, de-coiled bars</li>
            <li>Designed for tensile and shear stress resistance</li>
            <li>Grade: B500B, ASTMA615, FE500, B500C, BST500S, S400W</li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            Reinforcing steel placed in concrete to offset tensile and shear
            stresses in reinforced concrete structures, manufactured and
            delivered as finished products.
          </p>

</div>
        <div>
        <h1 className='border-b border-dotted border-purple-950 font-bold '>Wire Rod in Coil</h1>

          <p className="text-gray-700 text-lg leading-relaxed">
Semi-finished metallic products in coil form, manufactured through hot rolling process. 

          </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Size range: 5.5-32mm diameter. Used for cold drawing of round sections in various industrial applications.</p>  
                <p className="text-gray-700 text-lg leading-relaxed">
                     Grade : SAE 1006 - 1085
                </p>

        </div>

    </div>
     <QuotationBot />
  </div>
 
</div>


  )
}

export default page