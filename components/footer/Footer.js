import React from 'react'
import Link from 'next/link';

const Footer = () => {
  const legalLinks = [
    { 
      title: 'legal', 
      links: [
        { name: 'privacy policy', link: 'privacypolicy', target: '' },
        { name: 'disclaimer', link: 'disclaimer', target: '' },
        { name: 'help', link: 'help', target: '' }
      ]
    },
    { 
      title: 'company', 
      links: [
        { name: 'contact us', link: 'contact', target: '' },
        { name: 'about us', link: 'about', target: '' },
        { name: 'discounts', link: 'discounts', target: '' }
      ]
    },
    { 
      title: 'follow us', 
      links: [
        { name: 'instagram', link: 'https://www.instagram.com/megasaverr/', target: '_blank' },
        { name: 'threads', link: 'https://www.threads.net/@megasaverr?xmt=AQGzHs2vR23M2MREncHVX4j86wJLpxNr0Q-oaL-zPmkEgt8', target: '_blank' },
        { name: 'youtube', link: '', target: '' },
        { name: 'facebook', link: 'https://www.facebook.com/profile.php?id=61560459940267', target: '_blank' }
      ]
    }
  ];
  

  return (
    <section className='bg-black text-white border-y-[2px] border-gray-50/25 w-full h-[550px] sm:h-[450px] lg:h-[400px] font-pathwayExtreme sm:pt-5'>
      <section className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 h-[90%]'>
        <section className='pt-5 sm:py-5 flex items-start'>
          <Link href='/' className='text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[25px] font-semibold px-7 lg:px-6 xl:px-10 cursor-pointer flex items-center'>
            megasaverr<span className='sm:text-[20px] lg:text-[22px] xl:text-2xl text-red-500'>.</span>
          </Link>
        </section>

        <section className='flex justify-center gap-10 py-6 col-span-2'>
          {legalLinks.map((section, index) => (
            <div key={index} className='flex flex-col'>
              <h1 className='font-semibold mb-5 text-[15px] xl:text-[18px]'>{section.title}</h1>
              {section.links.map((value, linkIndex) => (
                <Link href={`${value.link}`} key={linkIndex} target={`${value.target}`} className='text-[13px] sm:text-[14px] xl:text-[16px] mb-2 cursor-pointer'>{value.name}</Link>
              ))}
            </div>
          ))}
        </section>

        <section className='flex flex-col gap-3 lg:gap-5 py-6 col-span-2 lg:col-span-1 px-6 sm:px-7 lg:px-0'>
          <h1 className='font-semibold sm:mb-3 lg:mb-5 text-[15px] xl:text-[18px]'>connect with us</h1>
          <p className='text-[13px] sm:text-[14px] xl:text-[16px]'>Stay updated on new releases and features, guides, and case studies.</p>
          <div className='w-full h-[40px] sm:w-[60%] sm:h-[35px] lg:w-[90%] xl:w-[85%] lg:h-[38px] xl:h-[42px] rounded-[12px] border-[2px] border-gray-50/25 flex items-center justify-between pl-3 pr-1'>
            <input type='email' placeholder='you@domain.com' className='outline-none text-[11px] sm:text-[11px] lg:text-[11px] xl:text-[12px] bg-black'/>
            <div className='px-3 lg:px-2 xl:w-[32%] h-[80%] rounded-[12px] sm:rounded-[10px] lg:rounded-[12px] flex items-center justify-center bg-[#E72929] text-white cursor-pointer'>
              <h1 className='text-[11px] sm:text-[12px] xl:text-[14px]'>subscribe</h1>
            </div>
          </div>
        </section>
      </section>

      <div className='h-[10%] sm:border-t-[2px] border-gray-50/25 flex items-center px-5 justify-between text-[10px] sm:text-[11px] lg:text-[11px] xl:text-[12px]'>
      <p>megasaverr, Inc.</p>
      <p>© 2024 all right reserved</p>
      </div>
    </section>
  )
}

export default Footer
