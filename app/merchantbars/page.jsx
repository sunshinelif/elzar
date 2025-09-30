import React from 'react'
import Image from "next/image";
import QuotationBot from "@/components/QuotationBot";
const page = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center min-h-screen">

            <h1 className='font-bold text-4xl mb-4'>Merchant Bars & Equal Angles</h1>
<div className='flex'>
                <div>
                <div className='border-2 border-black p-4 rounded-xl mt-2'>
                    <h2 className='font-bold text-2xl '>Round Bars</h2>
                    <ul>
                        <li>
                            Grade: S235JR, S275JR, S355JR, S355J2
                        </li>
                        <li>
                            Sizes: 6-120mm
                        </li>
                        <li>Length: 6-12m</li>
                    </ul>
                </div>
                    <div className='border-2 border-black p-4 rounded-xl mt-2'>
                    <h2 className='font-bold text-2xl '>Square Bars</h2>
                    <ul>
                        <li>
                            Grade: S235JR, S275JR, S355JR

                        </li>
                        <li>
                            Sizes: 6x6-100x100mm

                        </li>
                        <li>Length: 6-12m</li>
                    </ul>
                </div>
               <div className='border-2 border-black p-4 rounded-xl mt-2'>
                    <h2 className='font-bold text-2xl '>Flat Bars</h2>
                    <ul>
                        <li>
                            Grade: S235JR, S275JR, S355JR, S355J2

                        </li>
                        <li>
                            Size: 12x2.5-160x40mm
                        </li>
                        <li>Length: 6-12m</li>
                    </ul>
                </div>
            </div>
            <div className='ml-3'>
               <div className='border-2 border-black p-4 rounded-xl mt-2'>
                    <h2 className='font-bold text-2xl '>Equal Angles</h2>
                    <ul>
                        <li>Height: 18-120mm, Length: 6 or 12m, Quality: S235JR, 
                        </li>
                        <li>
                            Production: 90-120mm, Commercial: 40-150mm
                        </li>
     
                    </ul>
                                                 <Image
                                    src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1758810206/equal-1_c0kbbd.jpg"
                                    alt="Equal Angles"
                                    width={400}
                                    height={250}
                                    
                                    priority
                                  />
                </div>
            </div>
                <QuotationBot />
</div>
    </div>
  )
}

export default page