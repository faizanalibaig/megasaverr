'use client'
import React, {useEffect} from 'react'
import Link from 'next/link';

const ArticleCard = () => (
  <div className='bg-black text-white h-[375px] lg:h-[380px] xl:h-[400px] sm:w-[350px] lg:w-[300px] xl:w-[340px]  px-3 py-3 flex flex-col justify-between shadow-[0_2px_4px_rgba(0,0,0,0.05)]'>
    <section className='h-full flex flex-col gap-3'>
      <div className='h-[55%] bg-gray-50/20' />
      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-[16px] lg:text-[18px] xl:text-[19px]'>
          bluehost - up to 70% off
        </h1>
        <p className='text-[14px] xl:text-[15px]'>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur itaque pariatur iure eaque cum!
        </p>
      </div>
    </section>
    <div className='flex justify-between text-[14px] xl:text-[15px]'>
      <Link href='bluehost/' className='px-3 lg:px-4 py-2 bg-gray-50/10 border border-black/10 
      flex gap-1 items-center hover:bg-gray-100/10 active:bg-gray-100/10 hover:border-black/20 active:border-black/20'>
        read more
      </Link>
      <button className='px-3 lg:px-4 py-2 bg-gray-50/10 border border-black/10 flex gap-1 items-center 
      hover:bg-gray-100/10 active:bg-gray-100/10 hover:border-black/20 active:border-black/20'>
        buy now
      </button>
    </div>
  </div>
);

const MainArticlePage = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

   return (
    <section className='bg-black text-white w-full h-auto flex py-12 sm:py-16 lg:py-20 border-x border-black/10 font-pathwayExtreme'>
      {/* Left border spacer */}
      <div className='w-[0%] sm:w-[5%] border-y border-r border-black/10 h-auto'></div>
      
      {/* Main content area */}
      <section className='w-[100%] h-full'>
        {/* Title section */}
        <section className='w-full border-y border-black/10'>
          <h1 className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-semibold text-center pt-8'>
            hosting discounts
          </h1>
        </section>

        {/* Help content */}
        <section className='border-b border-black/10 py-8 sm:py-12 lg:py-16 flex flex-col gap-10 text-[14px] sm:text-[15px] xl:text-[18px]'>
          <p className='px-5 sm:px-16 lg:px-32 xl:px-40'>
          megasaverr is a leading platform for accessing exclusive discounts and coupon codes for popular web hosting services. with megasaverr, you can discover the latest deals, read unbiased reviews, and find expert tips to optimize your hosting experience.welcome to the hosting discounts page at megasaverr! here, you will find a comprehensive collection of discounts from leading hosting providers. whether you are launching a new website or upgrading your current hosting plan, our platform offers exclusive deals from companies like bluehost, hostinger, godaddy, namecheap, and more.<br/><br/>we understand the importance of reliable and affordable hosting services, which is why we are dedicated to bringing you the best deals in the industry.stay tuned as we continually update our offerings to bring you the latest savings opportunities across a wide range of hosting services. start saving today with megasaverr!
          </p>

          {/* FAQs section */}
          <section className='flex flex-col gap-2'>
           <section className='mt-14 w-full'>
             <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-5 sm:px-16 lg:px-[135px] xl:px-[170px] pt-5'>
               hostinger discounts
             </h1>
           </section>
            
            <section className='px-2 sm:px-10 lg:px-32 xl:px-40 py-6 sm:py-8 lg:py-10 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-8'>
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
            </section>

          </section>

          <section className='flex flex-col gap-2'>
           <section className='mt-10 w-full border-y border-black/10'>
             <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-5 sm:px-16 lg:px-32 xl:px-40 pt-5'>
               bluehost discounts
             </h1>
           </section>

           
           <section className='px-2 sm:px-10 lg:px-32 xl:px-40 py-6 sm:py-8 lg:py-10 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-8'>
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
            </section>

          </section>
         
          <p className='px-5 sm:px-16 lg:px-32 xl:px-40'>
          currently, we offer discount details for these hosting platforms. soon, we will expand our selection to include more options.</p>


          {/* Contact Us section */}
          <section>

          </section>

          
        </section>
      </section>
      
      {/* Right border spacer */}
      <div className='w-[0%] sm:w-[5%] border-y border-l border-black/10'></div>
    </section>
  );
}

export default MainArticlePage
