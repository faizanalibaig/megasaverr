import React from 'react'

const SaveContact = () => {
  return (
    <section className='bg-black text-white'>
      <section className='w-full h-auto font-pathwayExtreme border-y border-black/10 py-0'>

<section className='h-full flex flex-col justify-center'>
{/* block first */}

<section className='flex'>
    <section className='w-[5%] sm:w-[10%] border-t border-black/10'/>
    <section className='sm:px-20 py-8 border border-black/10 w-[90%] sm:w-[80%] flex justify-center items-center'>
   <h1 className='font-semibold text-[18px] sm:text-[22px] lg:text-[28px] xl:text-[38px] mb-2 text-start sm:text-center px-5 sm:px-0 sm:w-[750px]'>transform your money into passive earning with megasaverr<span className='text-[#EF4444]'>.</span></h1>
  </section>
    <section className='w-[5%] sm:w-[10%] border-y border-black/10'/>

  </section>

{/* block second */}
  <section className='w-full flex'>

    <section className='w-[5%] sm:w-[10%] border-b border-black/10 '/>

    <section className='px-5 sm:px-16 lg:px-24 xl:px-60 py-8 w-[90%] sm:w-[80%] flex flex-col gap-5 items-center justify-between border-b border-x border-black/10'>

    {/* first */}

     <div className='flex flex-col sm:flex-row gap-3 w-full'>
       <input type="text" placeholder='enter your first name' className='bg-transparent border-[2px] border-gray-50/25  w-full sm:w-[49%] h-[50px] sm:h-[45px] lg:h-[50px] xl:h-[60px] px-4 outline-none text-[15px] xl:text-[16px]'/>
       <input type='text' placeholder='enter your second name' className='bg-transparent border-[2px] border-gray-50/25   w-full sm:w-[49%] h-[50px] sm:h-[45px] lg:h-[50px] xl:h-[60px] px-4 outline-none text-[15px] xl:text-[16px]'/>
     </div> 
     {/* second */}

     <div className='flex gap-3 w-full'>
       <textarea type="textarea" placeholder='enter your details here (maximum 100  words)' className='bg-transparent border-[2px] border-gray-50/25   w-full h-[100px] xl:h-[120px] px-4 outline-none text-[15px] xl:text-[16px] resize-none pt-3'/>
     </div>

     <div className='flex flex-col sm:flex-row gap-3 w-full'>
       <input type="email" placeholder='enter your email here' className='bg-transparent border-[2px] border-gray-50/25   w-full sm:w-[70%] h-[50px] sm:h-[45px] lg:h-[50px] xl:h-[60px] px-4 outline-none text-[15px] xl:text-[16px]'/>
       <button type='submit' className='w-full sm:w-[28%] bg-[#EF4444] text-white h-[50px] sm:h-full'>submit</button>
     </div>

  </section>

    <section className='w-[5%] sm:w-[10%] border-b border-black/10'/>

  </section>
</section>  

</section>
    </section>)}

export default SaveContact
