'use client'
import React, { useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

const couponheading=[
    {
        id:0,
        title:'no.',
        width:'10'
    },
    {
        id:1,
        title:'company',
        width:'30'
    },
    {
        id:2,
        title:'coupon code',
        width:'30'
    },
    {
        id:3,
        title:'valid date',
        width:'30'
    }
]

const couponlist = [
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

const CouponSection = () => {

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <section className='bg-black text-white font-pathwayExtreme'>
      <section className='flex justify-between items-end mb-12'>
        <div className='h-full'>
          <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] mb-1 font-semibold w-full h-auto pt-10 pl-6 sm:pl-7 lg:pl-16 xl:pl-9'>
            latest coupons
          </h1>
          <p className='text-[15px] xl:text-[18px] px-6 sm:pl-7 lg:pl-16 xl:pl-9'>
            the latest coupons on the popular hostings and domains
          </p>
        </div>
        <div className='sm:pr-7 lg:pr-16 xl:pr-9  hidden sm:block'>
        <Link href='/couponcodes'>
                <button className='px-3 lg:px-4 py-2 bg-gray-50/10 border-[2px] border-white/10 flex gap-1 items-center'>
                  <span>view all</span>
                  <MdArrowOutward />
                </button>
              </Link>
        </div>

      </section>

     <section className='px-6 sm:px-7 lg:px-16 xl:px-8 pb-16'>
       <div className='h-auto w-full'>

       <section className='w-full h-[60px] flex bg-gray-100/10'>
       {couponheading.map((value, index) => {
             const hiddenClass = index === 0 ? 'hidden sm:flex sm:items-center justify-center' : 'block';
             const widthClass = index === 0 ? 'w-0 sm:w-[10%]' : 'pl-3 w-[34%] sm:w-[30%]';
     
       return (
        <h1 
            key={value.id} 
            className={`text-[15px] xl:text-[18px] ${widthClass} h-full flex items-center border-r 
            border-black/10 ${hiddenClass}`}>
            {value.title}
        </h1>)})}
          
         </section>

         <section className='flex flex-col w-full h-auto'>
  {couponlist.map((coupon, index) => (
    <div key={index} className='w-full flex h-[60px]'>
      {coupon.item.map((value, indexvalue) => {
        const hiddenClass = indexvalue === 0 ? 'hidden sm:flex sm:items-center justify-center' : 'block';
        const widthClass = indexvalue === 0 ? 'w-0 sm:w-[10%]' : 'pl-3 w-[34%] sm:w-[30%]';

        return (
          <h1
            key={value.id}
            className={`text-[15px] xl:text-[18px] hover:bg-gray-50/5 ${hiddenClass} ${widthClass} flex items-center`}>
            {value.title}
          </h1>
        );
      })}
    </div>
  ))}
</section>
        

        
       </div>

       <div className='block sm:hidden'>
       <Link href='/discounts'>
                <button className='px-3 lg:px-4 py-2 bg-gray-50/10 border-[2px] border-white/10 flex gap-1 items-center'>
                  <span>view all</span>
                  <MdArrowOutward />
                </button>
              </Link>
        </div>
     </section>

    </section>
  )
}

export default CouponSection
