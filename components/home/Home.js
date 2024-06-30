"use client"
import React, { useEffect, useRef } from 'react'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';
// import gsap from 'gsap'
// import {useGSAP} from '@gsap/react'


const Home = () => {

  const mainHeading=useRef()
  const description=useRef()

  useEffect(()=>{
   window.scroll(0,0)
  },[])

  // useGSAP(()=>{

  //   let timeline=gsap.timeline()

  //   timeline.from("#mainHeading span",{
  //      opacity:0,
  //      scale:0.5,
  //      duration:0.5,
  //      delay:0.2,
  //      stagger:0.08,
  //   })

  //   timeline.from("#description span",{
  //     opacity:0,
  //     scale:0.8,
  //     duration:0.1,
  //     stagger:0.06,
  //  })

  //    timeline.from("#mainButton button", {
  //     opacity:0,
  //     scale:0.8,
  //     duration:0.1,
  //     stagger:0.2,
  //    })
  // })

  return (
    <section className='bg-black text-white w-full h-auto pt-16 sm:pt-24 lg:pt-28 font-pathwayExtreme border-x-[2px] border-gray-50/25 flex'>
        <div className='bg-black text-white border-y-[2px] border-gray-50/5 h-auto w-[5%]'/>

      <div className=' w-full h-full flex flex-col border-[2px] border-gray-50/5'>
      {/*  */}
          <section className='bg-black text-white w-full h-full border-b-[2px] border-gray-50/5 -z-10'>
            <h1 id='mainHeading' className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-bold  w-full h-auto text-center py-8 px-3 sm:px-0 '>
            <span> gateway </span> <span> to </span> <span> hosting </span> <span> discounts</span>
             <span className='text-red-500'>.</span>
          </h1>
           </section> 
           {/*  */}
         <section className='bg-black text-white w-full h-full border-b-[2px] border-gray-50/5 -z-10'>
            <h1 id='description' className='text-[14px] sm:text-[15px] xl:text-[18px] px-3 sm:px-20 lg:px-5 w-full h-auto text-center py-8 '>
            <span>Megasaverr</span> <span>is</span> <span>a</span> <span>leading</span> <span>platform</span> <span>for</span> <span>accessing</span> <span>exclusive</span> <span>discounts</span> <span>and</span> <span>coupon</span> <span>codes</span> <span>for</span> <span>popular</span> <span>web</span> <span>hosting</span> <span>services.</span> <span>With</span> <span>Megasaverr,</span> <span>you</span> <span>can</span> <span>discover</span> <span>the</span> <span>latest</span> <span>deals,</span> <span>read</span> <span>unbiased</span> <span>reviews,</span> <span>and</span> <span>find</span> <span>expert</span> <span>tips</span> <span>to</span> <span>optimize</span> <span>your</span> <span>hosting</span> <span>experience.</span>
            </h1>
          </section>   
        
        <div id='mainButton' className='bg-black text-white text-[14px] sm:text-[15px] xl:text-[18px]  w-full h-auto py-8 flex justify-center gap-2'>
            <Link href='/couponcode'>
            <button className='px-3 lg:px-4 py-2 bg-red-500 text-white cursor-pointer'>
                coupon code
            </button>
            </Link>
            <Link href='/discounts'>
            <button className='px-3 lg:px-4 py-2 border-[2px] border-gray-50/5 flex gap-1 items-center'>
                <h1>discounts</h1>
                <MdArrowOutward/>
            </button>
            </Link>
        </div>
      </div>

      <div className='bg-black text-white border-y-[2px] border-gray-50/5 h-auto w-[5%]'/>
    </section>
  )
}

export default Home
