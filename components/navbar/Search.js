import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";


const Search = ({close}) => {
  return (
    <section className='w-full h-[78.2px] sm:h-[79px] font-pathwayExtreme flex justify-between bg-black lg:text-[15px] xl:text-[18px] border-b-[2px] border-gray-50/25'>
      <div className='h-full w-[80%] flex items-center'>
        <section className='hidden lg:block h-full'>
        <div className='text-xl px-6 border-r-[2px] border-gray-50/25 h-full flex items-center'>
            <IoMdSearch/>
        </div> 
        </section>   
        <input 
          className='w-full px-6 outline-none h-full placeholder:text-white text-[14px] sm:text-[15px] 
          xl:text-[18px] bg-black' placeholder='type to search' />
      </div>    
      <div className='h-full w-[20%] hidden lg:block'>
      <div className='w-full h-full flex lg:text-[15px] xl:text-[18px]'>
        <h1 className='px-10 w-[50%] h-full border-l-[2px] border-gray-50/25 flex justify-center items-center cursor-pointer 
        hover:bg-[#E72929] hover:text-white active:bg-[#E72929] active:text-white'>
          search 
        </h1>
        <h1 className='px-10 w-[50%] h-full border-l-[2px] border-gray-50/25 flex justify-center items-center cursor-pointer'
        onClick={close}>
          close 
        </h1>   
      </div>
      </div>  
      <div className='flex'>
      <section className='h-full block lg:hidden'>
         <div className='px-6 sm:px-8 h-full border-l-[2px] border-gray-50/25 flex justify-center items-center'>
             <IoMdSearch className='text-[22px] sm:text-[24px] '/>
           </div> 
         </section>
         <section className='h-full block lg:hidden bg-[#333333] text-white'>
           <div className='px-6 sm:px-8 h-full border-l-[2px] border-gray-50/25 flex justify-center items-center' onClick={close}>
             <MdClose className='text-[22px] sm:text-[24px]'/>
           </div> 
         </section>
      </div>  
    </section>
  );
}

export default Search;
