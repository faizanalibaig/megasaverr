import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

const Errorpage = () => {
  return (
    <section className='bg-black text-white w-full h-screen flex justify-center items-center font-pathwayExtreme'>
      <div className='h-auto flex flex-col justify-start sm:ml-10'>
      <section className='flex items-center gap-4 justify-start'>
            <h1 className='font-semibold text-[60px] sm:text-[70px] lg:text-[75px] xl:text-[80px]'>
            404</h1>
        </section>
        <p className='text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[30px] font-semibold mb-4'>page not found</p>
        <p className='text-[14px] sm:text-[15px] xl:text-[18px] mb-4 text-start text-wrap'>
            we could not find the page you are looking for
        </p>
        <section className='flex justify-start items-center '>
          <Link href='/' className=''>
            <button className='border border-white px-3 lg:px-4 py-2 text-[14px] sm:text-[15px] xl:text-[18px] flex items-center gap-1'>go back to the homepage            
             <MdArrowOutward/>
            </button>
          </Link>
        </section>
      </div>
    </section>
  )
}

export default Errorpage
