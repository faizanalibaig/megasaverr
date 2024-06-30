"use client"
import React, { useState, useEffect } from 'react';

const WelcomeNotification = () => {
  const [notificationCondition, setNotificationCondition] = useState(false);

  useEffect(() => {
    const notificationStatus = sessionStorage.getItem('notification');
    if (notificationStatus) {
      setNotificationCondition(true);
    }
  }, []);

  const handleNotification = () => {
    sessionStorage.setItem('notification', true);
    setNotificationCondition(true);
  };

  return (
    !notificationCondition && (
      <section className='bg-black h-auto lg:h-[100px] w-full px-6 sm:px-7 lg:px-6 xl:px-10 py-3 lg:py-5 border-[2px] border-gray-50/25 font-robotoMono flex flex-col gap-5 lg:gap-0 lg:flex-row text-[13px] sm:text-[14px] xl:text-[16px]'>
        <div className='w-full lg:w-[80%] h-full flex items-center'>
          <p>The website is under construction, with new features being added regularly. Stay tuned for updates as we enhance user experience and content. Thank you for your patience.</p>
        </div>
        <div className='w-full lg:w-[20%] h-full flex items-center lg:justify-center'>
          <button onClick={handleNotification} className='border-[2px] border-gray-50/25 px-3 py-2'>
            Ok, I understand
          </button>
        </div>
      </section>
    )
  );
};

export default WelcomeNotification;
