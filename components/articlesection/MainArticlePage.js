import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';


const ArticleCard = () => (
  <div className='h-[375px] lg:h-[380px] xl:h-[400px] sm:w-[300px] xl:w-[340px] border border-black/10 px-3 py-3 flex flex-col justify-between shadow-[0_2px_4px_rgba(0,0,0,0.05)]'>
    <section className='h-full flex flex-col gap-3'>
      <div className='h-[55%] bg-black' />
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
      <Link to={'discounts/hello'} className='px-3 lg:px-4 py-2 bg-gray-50/10 border border-black/10 flex gap-1 items-center 
      hover:bg-gray-100/10 active:bg-gray-100/10 hover:border-black/20 active:border-black/20'>
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
    <section className='w-full h-auto flex py-12 sm:py-16 lg:py-20 border-x border-black/10 font-pathwayExtreme'>
      {/* Left border spacer */}
      <div className='w-[5%] border-y border-r border-black/10 h-auto'></div>
      
      {/* Main content area */}
      <section className='w-[90%] h-full'>
        {/* Title section */}
        <section className='w-full border-y border-black/10'>
          <h1 className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-semibold text-center py-8'>
            hosting discounts
          </h1>
        </section>

        {/* Help content */}
        <section className='border-b border-black/10 py-8 sm:py-12 lg:py-16 flex flex-col gap-10 text-[14px] sm:text-[15px] xl:text-[18px]'>
          <p className='px-5 sm:px-16 lg:px-32 xl:px-40'>
          Welcome to the Hosting Discounts page at megasaverr! Here, you'll find a comprehensive collection of discounts from leading hosting providers. Whether you're launching a new website or upgrading your current hosting plan, our platform offers exclusive deals from companies like Bluehost, Hostinger, godaddy, namecheap and more.<br/><br/> Stay tuned as we continually update our offerings to bring you the latest savings opportunities across a wide range of hosting services. Start saving today with megasaverr!
          </p>

          {/* FAQs section */}
          <section className='flex flex-col gap-2'>
           <section className='mt-10 w-full border-y border-black/10'>
             <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-5 sm:px-16 lg:px-32 xl:px-40 py-8'>
               hostinger discounts
             </h1>
           </section>
            
            <section className='px-5 sm:px-10 lg:px-32 xl:px-40 py-6 sm:py-8 lg:py-10 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-8'>
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
            </section>

          </section>

          <section className='flex flex-col gap-2'>
           <section className='mt-10 w-full border-y border-black/10'>
             <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-5 sm:px-16 lg:px-32 xl:px-40 py-8'>
               bluehost discounts
             </h1>
           </section>

           
           <section className='px-5 sm:px-10 lg:px-32 xl:px-40 py-6 sm:py-8 lg:py-10 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-8'>
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
            </section>
            

          </section>

          {/* Contact Us section */}
          <section className='flex flex-col gap-2'>
            

          </section>

          
        </section>
      </section>
      
      {/* Right border spacer */}
      <div className='w-[5%] border-y border-l border-black/10'></div>
    </section>
  );
}

export default MainArticlePage
