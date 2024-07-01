"use client"
import React, { useEffect } from 'react';

const Help = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <section className='w-full h-auto flex py-12 sm:py-16 lg:py-20 border-x border-black/10 font-pathwayExtreme'>
      {/* Left border spacer */}
      <div className='w-[5%] border-y border-r border-black/10 h-auto'></div>
      
      {/* Main content area */}
      <section className='w-[90%] h-full'>
        {/* Title section */}
        <section className='w-full border-y border-black/10'>
          <h1 className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-semibold text-center py-8'>
            Help
          </h1>
        </section>

        {/* Help content */}
        <section className='border-b border-black/10 px-5 sm:px-16 lg:px-32 xl:px-40 py-8 sm:py-12 lg:py-16 flex flex-col gap-10 text-[14px] sm:text-[15px] xl:text-[18px]'>
          <p>
            Welcome to the megasaverr Help Center! We're here to assist you in finding the best hosting discounts and navigating our website effortlessly. Whether you have questions about our services, need assistance with using coupon codes, or want to know more about our featured hosting providers, you've come to the right place.
          </p>

          {/* FAQs section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>FAQs</h1>
            <ol className='list-decimal pl-5'>
              <br/>
              <li><span className='font-semibold'>How do I use coupon codes on megasaverr?</span><br/><br/>To use a coupon code, simply click on the offer you're interested in. You'll be redirected to the hosting provider's website where you can apply the code during checkout.</li>
              <br/>
              <li><span className='font-semibold'>Are the hosting deals on megasaverr updated regularly?</span><br/><br/>Yes, we strive to keep our deals updated regularly to ensure you have access to the latest discounts and promotions from top hosting providers.</li>
              <br/>
              <li><span className='font-semibold'>Can I suggest a hosting provider or offer to be featured on megasaverr?</span><br/><br/>Absolutely! We welcome suggestions and feedback from our users. Please contact us at megasaverr@gmail.com with your recommendations.</li>
            </ol>
          </section>

          {/* Contact Us section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Contact Us</h1>
            <p>If you have any further questions or need assistance, please don't hesitate to reach out to us:
              <br/>
              Email: megasaverr@gmail.com
            </p>
          </section>

          <p>
            Thank you for choosing megasaverr. We're here to make your hosting experience affordable and hassle-free!
          </p>
        </section>
      </section>
      
      {/* Right border spacer */}
      <div className='w-[5%] border-y border-l border-black/10'></div>
    </section>
  );
}

export default Help;
