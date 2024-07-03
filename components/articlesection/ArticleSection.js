'use client'
import React, { useEffect } from 'react';
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

const artilcelist=[
  {
    id:1,
    title:'bluehost - up to 70% off',
    description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur itaque pariatur iure eaque cum!',
    slug:'bluehost-discount-number-01'
  },{
    id:1,
    title:'hostinger - up to 70% off',
    description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur itaque pariatur iure eaque cum!',
    slug:'hostinger-discount-number-01'
  },
  {
    id:1,
    title:'godaddy - up to 70% off',
    description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur itaque pariatur iure eaque cum!',
    slug:'godaddy-discount-number-01'
  }
]

const ArticleCard = ({title, description, slug}) => (
  <div className='bg-black text-white h-[375px] lg:h-[380px] xl:h-[400px] sm:w-[350px] lg:w-[300px] 
  xl:w-[340px]  px-3 py-3 flex flex-col justify-between shadow-[0_2px_4px_rgba(0,0,0,0.05)]'>
    <section className='h-full flex flex-col gap-3'>
      <div className='h-[55%] bg-gray-50/20' />
      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-[16px] lg:text-[18px] xl:text-[19px]'>
          {title}
        </h1>
        <p className='text-[14px] xl:text-[15px]'>
          {description}
        </p>
      </div>
    </section>
    <div className='flex justify-between text-[14px] xl:text-[15px]'>
      <Link href={`bluehost/${slug}`} className='px-3 lg:px-4 py-2 bg-gray-50/10 border 
      border-black/10 
      flex gap-1 items-center hover:bg-gray-100/10 active:bg-gray-100/10 hover:border-black/20 
      active:border-black/20'>
        read more
      </Link>
      <button className='px-3 lg:px-4 py-2 bg-gray-50/10 border border-black/10 flex gap-1 items-center 
      hover:bg-gray-100/10 active:bg-gray-100/10 hover:border-black/20 active:border-black/20'>
        buy now
      </button>
    </div>
  </div>
);


const ArticleSection = () => {

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <section className='bg-black text-white font-pathwayExtreme '>
      <section className='flex justify-between items-end border-t border-black/10 mb-12'>
        <div className='h-full'>
          <h1 className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] mb-1 font-semibold w-full h-auto pt-10 pl-6 sm:pl-7 lg:pl-16 xl:pl-9'>
            latest discounts
          </h1>
          <p className='text-[15px] xl:text-[18px] pl-6 pr-4 sm:pr-0 sm:pl-7 lg:pl-16 xl:pl-9'>
            the latest discounts on the popular hostings and domains
          </p>
        </div>
        <div className='sm:pr-7 lg:pr-16 xl:pr-9 hidden sm:block'>
        <Link href='/discounts'>
                <button className='px-3 lg:px-4 py-2 bg-gray-50/10 border-[2px] border-white/10 flex gap-1 items-center'>
                  <span>view all</span>
                  <MdArrowOutward />
                </button>
              </Link>
        </div>
      </section>
      <div className='px-3 sm:px-7 lg:px-16 xl:px-8 pb-16 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 xl:gap-8 border-b border-black/10'>

        <ArticleCard title={'bluehost - up to 70% off'} description={'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur itaque pariatur iure eaque cum!'} slug={'first'}/>

        <ArticleCard title={'hostinger - up to 70% off'} description={'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur itaque pariatur iure eaque cum!'} slug={'second'}/>
        <ArticleCard title={'godaddy - up to 70% off'} description={'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur itaque pariatur iure eaque cum!'} slug={'third'}/>
        <section className='hidden sm:block lg:hidden xl:block'>

        <ArticleCard title={'namecheap - up to 70% off'} description={'lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur itaque pariatur iure eaque cum!'} slug={'third'}/>

        </section>

        <div className='bg-black text-white pl-3 block sm:hidden'>
          <Link href='/discounts'>
                <button className='px-3 lg:px-4 py-2 bg-gray-50/10 border-[2px] border-white/10 flex gap-1 items-center'>
                  <span>view all</span>
                  <MdArrowOutward />
                </button>
              </Link>
        </div>
        
      </div>
    </section>
  );
};

export default ArticleSection;
