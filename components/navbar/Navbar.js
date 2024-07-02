'use client'
import React, { useState } from 'react';
import { BsFillBellFill } from "react-icons/bs";
import { IoMdSearch, IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Search from './Search';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
// import gsap from 'gsap'
// import {useGSAP} from '@gsap/react'


const menulist = [
    { id: 1, title: 'contact', link: 'contact' },
    { id: 2, title: 'about', link: 'about' },
    { id: 3, title: 'disclaimer', link: 'disclaimer' },
    { id: 4, title: 'privacy policy', link: 'privacypolicy' },
    { id: 5, title: 'discounts', link: 'discounts' },
    { id: 6, title: 'help', link: 'help' }
];

const disableScroll = {
    on: () => {
        document.body.style.overflow = 'hidden';
    },
    off: () => {
        document.body.style.overflow = 'auto';
    }
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openMenu, setMenu] = useState(false);
    

    // useGSAP(()=>{

    //     let timeline=gsap.timeline()
    
    //     timeline.from("#navheading",{
    //         opacity:0,
    //         scale:0.8,
    //         duration:0.4,
    //         delay:0.1,
    //     })

    //     timeline.from("#menuoption section",{
    //         opacity:0,
    //         scale:0.8,
    //         duration:0.4,
    //         delay:0.1,
    //         stragger:1
    //     })

    //   })

    const handleOpenMenu = () => {
        setOpen(true);
        disableScroll.on();
    };

    const handleCloseMenu = () => {
        setOpen(false);
        disableScroll.off();
    };

    const handleOpenMobileMenu = () => {
        setMenu(true);
        disableScroll.on();
    };

    const handleCloseMobileMenu = () => {
        setMenu(false);
        disableScroll.off();
    };

    return (
        <nav className='bg-black text-white w-full h-[80px] border-y-[2px] border-gray-50/25 font-pathwayExtreme relative'>
            <header className='h-full flex items-center justify-between relative'>
                <section className='border-r-[2px] border-gray-50/25 h-full'>
                  <Link href='/' id='navheading' className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-6 sm:px-7 lg:px-6 xl:px-10 py-5 cursor-pointer h-full flex items-center'>
                    megasaverr<span className='text-red-500 sm:text-[20px] lg:text-[22px] xl:text-2xl'>.</span>
                  </Link>
                </section>    
                <section className='hidden lg:block h-full w-full'>
                    <section className='h-full flex justify-center items-center w-full '>
                        <div id='menuoption' className='flex lg:text-[15px] xl:text-[18px] font-normal w-full h-full'>
                            {menulist.map((value, index) => (
                               <section key={value.id} className={`h-full hover:border-r-[2px] border-gray-50/25 ${index !== 0 ? 'hover:border-l-[2px]' : ''}`}>
                                 <Link href={`${value.link}`} className={` h-full lg:px-6 xl:px-10 w-auto flex items-center transition ease-in-out delay-100 duration-200`}>{value.title}</Link>
                               </section>))}
                        </div>
                        <div className='lg:px-6 xl:px-10 h-full border-l-[2px] border-gray-50/25 flex justify-center items-center' onClick={handleOpenMenu}>
                            <IoMdSearch className='text-[20px]' />
                        </div>
                        <div className='lg:px-6 xl:px-10 h-full border-l-[2px] border-gray-50/25 flex justify-center items-center'>
                            <BsFillBellFill className='text-[16px]' />
                        </div>
                    </section>
                </section>
                <div className='flex w-auto h-full'>
                    {openMenu !==true && <section className='h-full block lg:hidden'>
                        <div className='px-6 sm:px-8 h-full border-l-[2px] border-gray-50/25 flex justify-center items-center'>
                            <IoMdSearch className='text-[22px] sm:text-[24px]' onClick={handleOpenMenu} />
                        </div>
                    </section>}
                    <section className='h-full block lg:hidden'>
                        {openMenu ?
                            <div className='px-6 sm:px-8 h-full border-l-[2px] border-gray-50/25 flex justify-center items-center bg-[#333333] text-white'>
                                <MdClose className='text-[22px] sm:text-[24px]' onClick={handleCloseMobileMenu} />
                            </div> :
                            <div className='px-6 sm:px-8 h-full border-l-[2px] border-gray-50/25 flex justify-center items-center'>
                                <IoMdMenu className='text-[22px] sm:text-[24px]' onClick={handleOpenMobileMenu} />
                            </div>}
                    </section>
                </div>
            </header>
            {open && <section className='absolute top-0 w-full'>
                <Search close={handleCloseMenu} />
            </section>}
            {openMenu && <section className='absolute w-full'>
                <MobileMenu close={handleCloseMobileMenu} />
            </section>}
        </nav>
    );
};

export default Navbar;
