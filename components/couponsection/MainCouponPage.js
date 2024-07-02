import React from 'react'
import CouponTable from './CouponTable';

const couponHeading = [
  { id: 0, title: 'no.', width: '10' },
  { id: 1, title: 'company', width: '30' },
  { id: 2, title: 'coupon code', width: '30' },
  { id: 3, title: 'valid date', width: '30' }
];

const couponList = [
  {
    item: [
      { id: 0, title: '01', width: '10%' },
      { id: 1, title: 'hostinger', width: '30%' },
      { id: 2, title: 'eduiman', width: '30%' },
      { id: 3, title: '10 August 2024', width: '30%' }
    ]
  },
  {
    item: [
      { id: 0, title: '02', width: '25%' },
      { id: 1, title: 'hostinger', width: '25%' },
      { id: 2, title: 'eduiman', width: '25%' },
      { id: 3, title: '10 August 2024', width: '30%' }
    ]
  },
  {
    item: [
      { id: 0, title: '03', width: '25%' },
      { id: 1, title: 'hostinger', width: '25%' },
      { id: 2, title: 'eduiman', width: '25%' },
      { id: 3, title: '10 August 2024', width: '30%' }
    ]
  },
  {
    item: [
      { id: 0, title: '04', width: '25%' },
      { id: 1, title: 'hostinger', width: '25%' },
      { id: 2, title: 'eduiman', width: '25%' },
      { id: 3, title: '10 August 2024', width: '30%' }
    ]
  },
  {
    item: [
      { id: 0, title: '05', width: '25%' },
      { id: 1, title: 'hostinger', width: '25%' },
      { id: 2, title: 'eduiman', width: '25%' },
      { id: 3, title: '10 August 2024', width: '30%' }
    ]
  }
];

const MainCouponPage = () => {
  return (
    <section className='bg-black text-white w-full h-auto flex py-12 sm:py-16 lg:py-20 border-x border-black/10 font-pathwayExtreme'>
      {/* Left border spacer */}
      <div className='w-[0%] sm:w-[5%] border-y border-r border-black/10 h-auto'></div>
      
      {/* Main content area */}
      <section className='w-[100%] h-full'>
        {/* Title section */}
        <section className='w-full border-y border-black/10'>
          <h1 className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-semibold text-center pt-8 pb-0'>
            coupon code
          </h1>
        </section>

        {/* Help content */}
        <section className='border-b border-black/10 py-8 sm:py-12 lg:py-16 flex flex-col gap-10 text-[14px] sm:text-[15px] xl:text-[18px]'>
          <p className='px-5 sm:px-16 lg:px-32 xl:px-40'>
            welcome to the coupon codes section at megasaverr! Here, you can find the latest and most exclusive coupon codes for popular hosting companies. Our team regularly updates this page to bring you the best deals from top providers like Bluehost, Hostinger, SiteGround, and more.
            <br /><br />
            Whether you are starting a new website or upgrading your hosting plan, our curated selection of verified discounts ensures you get the best value. Save time and money with our easy-to-use platform, designed to help you find exceptional hosting deals quickly.
            <br /><br />
            Start browsing now and unlock significant savings on your hosting needs with megasaverr!
          </p>

          {/* Specific coupon code section */}
          <section className='mt-10 w-full border-y border-black/10'>
            <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-5 sm:px-16 lg:px-32 xl:px-40 pt-5 pb-1'>
              hostinger coupon code
            </h1>
          </section>

          {/* Reusable CouponSection Component */}
          <CouponTable couponHeading={couponHeading} couponList={couponList} />

          <section className='mt-10 w-full border-y border-black/10'>
            <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-5 sm:px-16 lg:px-32 xl:px-40 pt-5 pb-1'>
              bluehost coupon code
            </h1>
          </section>
          
          {/* You can use CouponSection multiple times */}
          <CouponTable couponHeading={couponHeading} couponList={couponList} />

          <section className='mt-10 w-full border-y border-black/10'>
            <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-5 sm:px-16 lg:px-32 xl:px-40 pt-5 pb-1'>
              godaddy coupon code
            </h1>
          </section>

          {/* Reusable CouponSection Component */}
          <CouponTable couponHeading={couponHeading} couponList={couponList} />

          <section className='mt-10 w-full border-y border-black/10'>
            <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-5 sm:px-16 lg:px-32 xl:px-40 pt-5 pb-1'>
              namecheap coupon code
            </h1>
          </section>
          
          {/* You can use CouponSection multiple times */}
          <CouponTable couponHeading={couponHeading} couponList={couponList} />

          {/* Contact Us section */}
          <section className='flex flex-col gap-2'>
            {/* Add contact us content here */}
          </section>

          <p className='px-5 sm:px-16 lg:px-32 xl:px-40'>
          currently, we offer coupon codes for these hosting platforms. soon, we will expand our selection to include more options. </p>

        </section>
      </section>
      
      {/* Right border spacer */}
      <div className='w-[0%] sm:w-[5%] border-y border-l border-black/10'></div>
    </section>
  );
}

export default MainCouponPage
