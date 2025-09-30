import React from 'react'
import QuotationBot from "@/components/QuotationBot";

const page = () => {
  return (
    <div className="mt-28 bg-gray-50 flex flex-col items-center justify-center p-6">
        <div>
            <h1 className='text-3xl font-bold mb-10 text-center'>Structural Profiles & Beams</h1>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h1 className='border-b border-double border-purple-950'>01</h1>
                <h1>UPN BEAMS</h1>
                <ul>
                    <li>
                        Height: 50-400mm, 
                    </li>
                    <li>
                        Length: 6 or 12m,
                    </li>
                    <li>
                         Quality: S235JR or S275JR,
                    </li>
                    <li>
                         Tolerance: -0/+100mm
                    </li>
                </ul>
            </div>
        <div>
                <h1 className='border-b border-double border-purple-950'>02</h1>
                <h1>IPN Beams</h1>
                <ul>
                    <li>
                        Height: 80-450mm,
                    </li>
                    <li>
                        Length: 6 or 12m, 
                    </li>
                    <li>
                         Quality: S235JR or S275JR,
                    </li>
                    <li>
                          Commercial: 180-450mm
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='border-b border-double border-purple-950'>03</h1>
                <h1>IPE Beams</h1>
                <ul>
                    <li>
                        Height: 100-600mm, 
                    </li>
                    <li>
                        Length: 12m,
                        </li>
                    <li>
                         Quality: S275JR, 
                    </li>
                    
                    <li>
                         Commercial range: 100-600mm
                    </li>
                </ul>
            </div>
                        <div>
                <h1 className='border-b border-double border-purple-950'>04</h1>
                <h1>HEA/HEB Beams</h1>
                <ul>
                    <li>
                        Height: 100-1000mm, 
                    </li>
                    <li>
                        Length: 12m, 
                    </li>
                    <li>
                        Quality: S275JR, 
                    </li>
                    <li>
                         Used in steel buildings and reinforced concrete
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