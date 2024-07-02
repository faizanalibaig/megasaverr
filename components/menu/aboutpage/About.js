import React from 'react';

const About = () => {
  return (
    <section className='bg-black text-white w-full h-auto flex py-12 sm:py-16 lg:py-20 border-x border-black/10 font-pathwayExtreme'>
      {/* Left border spacer */}
      <div className='sm:w-[5%] border-y border-r border-black/10 h-auto'></div>
      
      {/* Main content area */}
      <section className='w-full sm:w-[90%] h-full'>
        {/* Title section */}
        <section className='w-full border-y border-black/10'>
          <h1 className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-semibold text-center pt-8'>
            About Us
          </h1>
        </section>

        {/* About Us content */}
        <section className='border-b border-black/10 px-5 sm:px-16 lg:px-32 xl:px-40 py-8 sm:py-12 lg:py-16 flex flex-col gap-10 text-[14px] sm:text-[15px] xl:text-[18px]'>
          <p>
            Welcome to megasaverr, your gateway to hosting discounts! At megasaverr, we are passionate about helping you find the best deals on web hosting services. Our team works tirelessly to scour the internet for the latest discounts and coupon codes from top hosting providers like Bluehost and Hostinger. Whether you are launching a new website or upgrading your current hosting plan, we are here to save you money and simplify your hosting journey.
          </p>

          <p>
            Our mission is simple: to provide you with up-to-date information on the best hosting deals available. We understand that choosing the right hosting provider is crucial for your online success, which is why we strive to make your decision easier by offering comprehensive savings opportunities right here at megasaverr.
          </p>

          <p>
            Thank you for visiting us. Stay tuned for regular updates and exclusive offers!
          </p>
        </section>
      </section>
      
      {/* Right border spacer */}
      <div className='sm:w-[5%] border-y border-l border-black/10'></div>
    </section>
  );
}

export default About;
