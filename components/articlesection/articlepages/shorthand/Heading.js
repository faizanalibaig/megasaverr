import React from 'react'

const Heading = ({heading}) => {
  return (
    <>
      <h1 className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-semibold text-center pt-8 sm:pb-6'>
            {heading}
      </h1>
    </>
  )
}

export default Heading
