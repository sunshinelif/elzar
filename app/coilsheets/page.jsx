import React from 'react'
import Image from "next/image";
import QuotationBot from "@/components/QuotationBot";
const page = () => {
  return (
//     <div className="mt-28 bg-gray-50 flex flex-col items-center justify-center">
//         <div>
//         <Image
//   src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1758828811/hotrolled_pl36km.png"
//   alt="hot rolled"
//   width={0}
//   height={0}
//   sizes="100vw"
//   className="w-full h-auto"
// />


//             <h1 className='text-3xl font-bold mb-10 text-center'>COILS & SHEETS</h1>


// {/* 
//         <div class="grid grid-cols-2 gap-6">

//             <div>
              
//                 <h1 className='border-b border-dotted border-purple-950 font-bold'>Hot Rolled Coils</h1>
        
//                 <ul>
//                     <li>
//                        Thickness: 1-25mm, 
//                     </li>
//                     <li>
//                         Width: 1000-2000mm, 
//                     </li>
//                     <li>
//                         Standard: DIN/EN/ASTM/GB/JIS
//                     </li>
//                 </ul>
//             </div>
        // <div>
        // <h1 className='border-b border-dotted border-purple-950 font-bold'>Galvanized Coils</h1>
        //         <ul>
        //             <li>
        //                 Thickness: 0.2-6mm,
        //             </li>
        //             <li>
        //                 Width: 650-1500mm, 
        //             </li>
        //             <li>
        //                  Zinc Coating: 30-275g/sm
        //             </li>

        //         </ul>
                
        //     </div>

//                           <Image
//                             src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1758810326/galvanized-1_ezvtyf.jpg"
//                             alt="Galvanized coil"
//                             width={400}
//                             height={250}
//                             className="object-contain border-2 border-black p-5"
//                             priority
//                           />
        //  <div>
        // <h1 className='border-b border-dotted border-purple-950 font-bold'>Cold Rolled Coils</h1>
        //         <ul>
        //             <li>
        //                 Standard: DIN/EN/ASTM/GB/JIS,
        //             </li>
        //             <li>
        //                 Thickness 0.3 ~ 3mm,
        //             </li>
        //             <li>
        //                  Width: 850 ~ 2500,
        //             </li>

        //         </ul>
        //     </div>
//         </div> */}
//             <QuotationBot />
//         </div>
//     </div>
<div className="mt-28 bg-gray-50 flex flex-col items-center justify-center">

  <div className="relative w-full h-[600px]">
    <Image
      src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1758828811/hotrolled_pl36km.png"
      alt="hot rolled"
      fill
      className="object-cover w-full"
      priority
    />
   
    <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl">
      <h1 className='text-5xl font-bold mb-10 text-center'>COILS & SHEETS</h1>
    </div>
  </div>

 
  <div className="w-full  px-6 py-12 text-left">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
<div>
        <h2 className="border-b border-dotted border-purple-950 font-bold ">
      Hot Rolled Steel
    </h2>
                 <ul>
                     <li>
                        Thickness: 1-25mm, 
                     </li>
                     <li>
                         Width: 1000-2000mm, 
                     </li>
                     <li>
                         Standard: DIN/EN/ASTM/GB/JIS
                     </li>
               </ul>
</div>
        <div>
        <h1 className='border-b border-dotted border-purple-950 font-bold '>Galvanized Coils</h1>
                <ul>
                    <li>
                        Thickness: 0.2-6mm,
                    </li>
                    <li>
                        Width: 650-1500mm, 
                    </li>
                    <li>
                         Zinc Coating: 30-275g/sm
                    </li>

                </ul>
                
        </div>
     <div>
        <h1 className='border-b border-dotted border-purple-950 font-bold '>Cold Rolled Coils</h1>
                <ul>
                    <li>
                        Standard: DIN/EN/ASTM/GB/JIS,
                    </li>
                    <li>
                        Thickness 0.3 ~ 3mm,
                    </li>
                    <li>
                         Width: 850 ~ 2500,
                    </li>

                </ul>
            </div>

                 <div>
        <h1 className='border-b border-dotted border-purple-950 font-bold '> Black And Galvanized Tear-Dropcoils </h1>
                <ul>
                    <li>
                        Standard: DIN/EN/ASTM/GB/JIS
                    </li>
                    <li>
                       Thickness 1,1-18mm
                    </li>
                    <li>
                        Width: 650-1500
                    </li>
                    <li>
                        Zinc Coating: 100~ 275g/sm
                    </li>
                </ul>
            </div>
        <div>
        <h1 className='border-b border-dotted border-purple-950 font-bold '> Hotrolled Plates </h1>
                <ul>
                    <li>
                        Standard: DIN/EN/ASTM/GB/JIS
                    </li>
                    <li>
                      Thickness: 6 ~ 150mm
                    </li>
                    <li>
                       Width: 1000 ~ 2500
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