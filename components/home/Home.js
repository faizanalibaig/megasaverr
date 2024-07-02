"use client"
import React, { useEffect, useRef } from 'react';
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react';

const Home = () => {

  const mainHeading = useRef();
  const description = useRef();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // useGSAP(() => {
  //   let timeline = gsap.timeline();

  //   timeline.from("#mainHeading span", {
  //      opacity: 0,
  //      scale: 0.5,
  //      duration: 0.5,
  //      delay: 0.2,
  //      stagger: 0.08,
  //   });

  //   timeline.from("#description span", {
  //     opacity: 0,
  //     scale: 0.8,
  //     duration: 0.1,
  //     stagger: 0.06,
  //  });

  //    timeline.from("#mainButton button", {
  //     opacity: 0,
  //     scale: 0.8,
  //     duration: 0.1,
  //     stagger: 0.2,
  //    });
  // });

  return (
    <main className='w-full h-auto'>
      {/* Top spacing */}
      <div className='bg-black h-[64px] sm:h-[96px] lg:h-[112px] w-full' />

      <section className='flex'>
        {/* Left border */}
        <aside className='bg-black text-white h-auto w-[5%]' />

        <section className='w-full'>
          <div className='w-full h-full flex flex-col'>

            {/* Main heading section */}
            <section className='bg-black text-white w-full h-full'>
              <h1 id='mainHeading' className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-bold w-full h-auto text-center pt-8 px-3 sm:px-0'>
                <span>gateway </span>
                <span>to </span>
                <span>hosting </span>
                <span>discounts</span>
                <span className='text-red-500'>.</span>
              </h1>
            </section>

            {/* Description section */}
            <section className='bg-black text-white w-full h-full'>
              <p id='description' className='text-[14px] sm:text-[15px] xl:text-[18px] px-3 sm:px-20 lg:px-5 w-full h-auto text-center pt-5 pb-10 sm:py-8'>
              megasaverr is a leading platform for accessing exclusive discounts and coupon codes for popular web hosting services. with megasaverr, you can discover the latest deals, read unbiased reviews, and find expert tips to optimize your hosting experience.unlock savings on top hosting providers and stay updated with the best offers available. explore comprehensive guides and recommendations tailored to your hosting needs.
              </p>
            </section>

            {/* Button section */}
            <div id='mainButton' className='bg-black text-white text-[14px] sm:text-[15px] xl:text-[18px] 
            w-full h-auto py-8 flex justify-center gap-2'>
              <Link href='/couponcodes'>
                <button className='px-3 lg:px-4 py-[10px] bg-red-500 text-white cursor-pointer'>
                  coupon code
                </button>
              </Link>
              <Link href='/discounts'>
                <button className='px-3 lg:px-4 py-2 border-2 border-white flex gap-1 items-center'>
                  <span>discounts</span>
                  <MdArrowOutward />
                </button>
              </Link>
            </div>

          </div>
        </section>

        {/* Right border */}
        <aside className='bg-black text-white h-auto w-[5%]' />
      </section>
    </main>
  );
}

export default Home;
