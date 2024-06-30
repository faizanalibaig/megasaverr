import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import Link from 'next/link';

const menulist = [
  { id: 1, title: 'contact', link: '/contact' },
  { id: 2, title: 'about', link: '/about' },
  { id: 3, title: 'disclaimer', link: '/disclaimer' },
  { id: 4, title: 'privacy policy', link: '/privacypolicy' },
  { id: 5, title: 'discounts', link: '/discounts' },
  { id: 6, title: 'help', link: '/help' }
];

const MobileMenu = ({ close }) => {
  const handleClick = () => {
    close(); 
  };

  return (
    <section className='w-full h-auto block lg:hidden text-[16px] sm:text-[17px] bg-black z-10 pb-52 border-[2px] border-gray-50/25'>
      <div className='flex flex-col gap-8 px-6 sm:px-7 py-5 sm:py-6'>
        {menulist.map((value, index) => (
          <Link key={value.id} href={value.link} className='font-semibold flex items-center gap-1' onClick={handleClick}>
            {value.title}
            <MdArrowOutward />
          </Link>
        ))}
      </div>

      <section className='mt-36 flex items-center justify-between border-y-[2px] border-gray-50/25 px-6 sm:px-7 py-5 sm:py-6'>
        <h1 className='font-semibold'>
          Latest Updates
        </h1>
        <BsFillBellFill className='text-[16px] text-[#E72929]' />
      </section>
    </section>
  );
};

export default MobileMenu;
