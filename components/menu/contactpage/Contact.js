"use client"
import React, { useEffect } from 'react'

const Contact = () => {

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <section className='bg-black text-white font-pathwayExtreme w-full h-auto sm:h-[700px] flex py-20 border-x border-black/10'>
      <div className='w-[5%] border-y border-black/10'></div>

    <section className='flex flex-col sm:flex-row w-[90%]'>
    <div className='sm:w-[50%] py-8 px-8 border border-black/10'>
          <h1 className='font-semibold text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px]'>
            contact us
          </h1> 
          <p className='text-[14px] sm:text-[15px] xl:text-[18px]'>
          <br/>
          <br/>
          For any request or question regarding the discounts or coupon code on the website, please contact us at the following email address: <span className='font-semibold'>megasaverr@gmail.com</span>. We will respond to you as soon as possible; within 24 hours - working days.
         <br/>
         <br/>
         <br/>
         For all other requests, please contact us at the following addresses: 
         <br/>
         <span className='font-semibold'>email: megasaverr@gmail.com</span>
         <br/>
         <span className='font-semibold'>instagram: megasaverr</span>         
         </p>
      </div>

      <div className='w-full sm:w-[50%] px-5 py-16 flex flex-col gap-5 border-x border-b sm:border-x-0 sm:border-y border-black/10 border-r'> 

      <div className='flex flex-col xl:flex-row gap-3 w-full'>
       <input type="text" placeholder='enter your first name' className='bg-transparent w-full xl:w-[49%] h-[50px] sm:h-[45px] lg:h-[50px] xl:h-[60px] px-4 outline-none text-[15px] xl:text-[16px] border-[2px] border-gray-50/25'/>
       <input type='text' placeholder='enter your second name' className='bg-transparent border-[2px] border-gray-50/25  w-full xl:w-[49%] h-[50px] sm:h-[45px] lg:h-[50px] xl:h-[60px] px-4 outline-none text-[15px] xl:text-[16px]'/>
     </div> 
     {/* second */}

     <div className='flex gap-3 w-full'>
       <textarea type="textarea" placeholder='enter your details here (maximum 100  words)' className='bg-transparent border-[2px] border-gray-50/25 w-full h-[100px] xl:h-[120px] px-4 outline-none text-[15px] xl:text-[16px] resize-none pt-3'/>
     </div>

     <div className='flex flex-col sm:flex-row gap-3 w-full'>
       <input type="email" placeholder='enter your email here' className='bg-transparent border-[2px] border-gray-50/25  w-full sm:w-[70%] h-[50px] sm:h-[45px] lg:h-[50px] xl:h-[60px] px-4 outline-none text-[15px] xl:text-[16px]'/>
       <button type='submit' className='w-full sm:w-[28%] bg-[#EF4444] text-white h-[50px] sm:h-full'>submit</button>
     </div>
     
      </div>
    </section>

      <div className='w-[5%] border-y border-black/10'></div>
    </section>
  )
}

export default Contact
