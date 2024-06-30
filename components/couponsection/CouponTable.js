import React from 'react';

const CouponTable = ({ couponHeading, couponList }) => {
  return (
    <section className='flex flex-col px-5 sm:px-16 lg:px-32 xl:px-40'>
      <section className='w-full h-[60px] border-l border-t border-b border-black/10 flex bg-gray-100'>
        {couponHeading.map((value, index) => {
          const hiddenClass = index === 0 ? 'hidden sm:flex sm:items-center justify-center' : 'block';
          const widthClass = index === 0 ? 'w-0 sm:w-[10%]' : 'pl-3 w-[34%] sm:w-[30%]';
          return (
            <h1 key={value.id} className={`text-[15px] xl:text-[18px] ${widthClass} h-full flex items-center border-r border-black/10 ${hiddenClass}`}>
              {value.title}
            </h1>
          );
        })}
      </section>

      <section className='flex flex-col w-full h-auto border-l border-black/10'>
        {couponList.map((coupon, index) => (
          <div key={index} className='w-full flex h-[60px]'>
            {coupon.item.map((value, indexvalue) => {
              const hiddenClass = indexvalue === 0 ? 'hidden sm:flex sm:items-center justify-center' : 'block';
              const widthClass = indexvalue === 0 ? 'w-0 sm:w-[10%]' : 'pl-3 w-[34%] sm:w-[30%]';
              return (
                <h1
                  key={value.id}
                  className={`text-[15px] xl:text-[18px] border-r border-b hover:bg-gray-50 border-black/10 ${hiddenClass} ${widthClass} flex items-center`}>
                  {value.title}
                </h1>
              );
            })}
          </div>
        ))}
      </section>
    </section>
  );
};

export default CouponTable;
