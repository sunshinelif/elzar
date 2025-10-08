import React from 'react'
import Image from "next/image";
import QuotationBot from "@/components/QuotationBot";
const page = () => {
  return (
//     <div className="mt-32 flex flex-col items-center justify-center min-h-screen">
//                   <div className="relative w-full h-[400px]">
//                     <Image
//                       src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1759409680/MERCHANT_cl8gdu.png"
//                       alt="hot rolled"
//                       fill
//                       className="object-cover w-full"
//                       priority
//                     />
                   
//                     <div className="absolute inset-0 bg-black/40"></div>
//                         <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl">
//                       <h1 className='text-5xl font-bold mb-10 text-center'>Merchant Bars & Equal Angles</h1>
//                     </div>
//                   </div>
    
// <div className='flex'>
//                 <div>
//                 <div className='border-2 border-black p-4 rounded-xl mt-2'>
//                     <h2 className='font-bold text-2xl '>Round Bars</h2>
//                     <ul>
//                         <li>
//                             Grade: S235JR, S275JR, S355JR, S355J2
//                         </li>
//                         <li>
//                             Sizes: 6-120mm
//                         </li>
//                         <li>Length: 6-12m</li>
//                     </ul>
//                 </div>
//                     <div className='border-2 border-black p-4 rounded-xl mt-2'>
//                     <h2 className='font-bold text-2xl '>Square Bars</h2>
                    // <ul>
                    //     <li>
                    //         Grade: S235JR, S275JR, S355JR

                    //     </li>
                    //     <li>
                    //         Sizes: 6x6-100x100mm

                    //     </li>
                    //     <li>Length: 6-12m</li>
                    // </ul>
//                 </div>
//                <div className='border-2 border-black p-4 rounded-xl mt-2'>
//                     <h2 className='font-bold text-2xl '>Flat Bars</h2>
                    // <ul>
                    //     <li>
                    //         Grade: S235JR, S275JR, S355JR, S355J2

                    //     </li>
                    //     <li>
                    //         Size: 12x2.5-160x40mm
                    //     </li>
                    //     <li>Length: 6-12m</li>
                    // </ul>
//                 </div>
//             </div>
//             <div className='ml-3'>
//                <div className='border-2 border-black p-4 rounded-xl mt-2'>
//                     <h2 className='font-bold text-2xl '>Equal Angles</h2>
                    // <ul>
                    //     <li>Height: 18-120mm, Length: 6 or 12m, Quality: S235JR, 
                    //     </li>
                    //     <li>
                    //         Production: 90-120mm, Commercial: 40-150mm
                    //     </li>
     
                    // </ul>
//                                                  {/* <Image
//                                     src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1758810206/equal-1_c0kbbd.jpg"
//                                     alt="Equal Angles"
//                                     width={400}
//                                     height={250}
                                    
//                                     priority
//                                   /> */}
//                 </div>
//             </div>
//                 <QuotationBot />
// </div>
//     </div>
<div className="mt-28 bg-gray-50 flex flex-col items-center justify-center">

  <div className="relative w-full h-[600px]">
    <Image
      src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1759409680/MERCHANT_cl8gdu.png"
      alt="hot rolled"
      fill
      className="object-cover w-full"
      priority
    />
   
    <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl">
         <h1 className='text-5xl font-bold mb-10 text-center'>Merchant Bars & Equal Angles</h1>
    </div>
  </div>

 
  <div className="w-full  px-6 py-12 text-left">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
<div>
        <h2 className="border-b border-dotted border-purple-950 font-bold ">
      Round Bars
    </h2>
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
        <div>
        <h1 className='border-b border-dotted border-purple-950 font-bold '>Square Bars</h1>
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
     <div>
        <h1 className='border-b border-dotted border-purple-950 font-bold '>Flat Bars</h1>
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

                 <div>
        <h1 className='border-b border-dotted border-purple-950 font-bold '> Equal Angles</h1>
                    <ul>
                        <li>Height: 18-120mm, Length: 6 or 12m, Quality: S235JR, 
                        </li>
                        <li>
                            Production: 90-120mm, Commercial: 40-150mm
                        </li>
     
                    </ul>
            </div>

    </div>
      <QuotationBot />
  </div>
</div>

  )
}

export default page