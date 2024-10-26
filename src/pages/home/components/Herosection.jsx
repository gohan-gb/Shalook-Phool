import React from 'react'
import MarginWrapper from '../../../common/MarginWrapper'


const HeroSection = () => {
  return (

        <div className='pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-12'>
        <MarginWrapper>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='mb-6 sm:mb-8 md:mb-0 hidden sm:block'>
            <img src="/assets/home.png" alt="Image 1" className='h-48 sm:h-64 md:h-80 lg:h-96'/>
          </div>
          <div className='text-center mt-16 sm:mt-8 md:mt-0 md:mx-8'>
            <h1 className='text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-kalpanaUnicode text-[#363020]'>
              ভালোবাসার বুনন
            </h1>
          </div>
          <div className='mt-6 sm:mt-8 md:mt-0 '>
            <img src="/assets/home1.png" alt="Image 2" className='h-48 sm:h-64 md:h-80 lg:h-96'/>
          </div>
        </div>

        <div className='mt-8'>
          <p className='text-center text-sm sm:text-base md:text-lg lg:text-xl'>
            Shalook Phool is a unique and vibrant design company that specializes in creating customized art on a <br className='hidden md:block'/>
            wide range of products, including clothing for men, women, and children, umbrellas, tote bags, and even <br className='hidden md:block'/>
            road surfaces with traditional Alpana. Rooted in the rich and diverse heritage of Bengali culture, <br className='hidden md:block'/>
            Shalook Phool brings a modern twist to classic designs, celebrating the beauty of local artistry. Whether <br className='hidden md:block'/>
            it’s a personalized saree, a hand-painted umbrella, or a festive Alpana on a street corner, Shalook Phool's <br className='hidden md:block'/>
            creations reflect the soul of Bengal, infusing every piece with creativity, tradition, and craftsmanship.
          </p>
        </div>
      </MarginWrapper>

      <div className='mt-8 sm:mt-12'>
        <img src="/assets/cover.jpg" alt="Cover Image" className='w-full rounded-s-full rounded-e-full'/>
      </div>
      
      
    </div>
 
 
  )
}

export default HeroSection