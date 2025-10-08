import React from 'react'
import Image from 'next/image'
import Title from '@/components/layout/ui/Title';

const AboutContent = () => {
  return (
<section id='about'>
      <div className='max-container'>
      <div className='flex md:flex-row flex-col w-full items-center pt-[170px] pb-16'>

        <div className='max-w-[1000px] w-full'>
            <Title>
            <h4 className='text-black text-5xl mb-6 mr-3'> hello About Elzar Commercial Steel</h4>
            </Title>
            <div className=' items-start '>
            <p className='block block-start top-0  text-black text-justify mr-3'>
 Elzar Commercial Steel stands as Türkiye & Egypt's leading subcontracted-manufacturing commercial company that provides comprehensive clientele services ensuring full satisfaction with capacity to swiftly respond to all inquiries within our profile.</p>
<p className='mt-3 mr-3'>Our commitment extends to delivering a wide range of products and services, creating a seamless experience for our valued clients across diverse industrial sectors.
      </p>

            </div>
         </div>
                 <div className=''>
          <img src='https://res.cloudinary.com/dypxjkgd8/image/upload/v1758810654/aboutus_qnyvpl.jpg' alt='ELZAR' width={600} height={600} />
        </div>
      </div>
    </div>
</section>
  )
}

export default AboutContent