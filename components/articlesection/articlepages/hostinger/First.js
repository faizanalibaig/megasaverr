'use client'
import React, { useEffect, useState } from 'react';
import { BsEmojiHeartEyes, BsEmojiSmile, BsEmojiFrown, BsEmojiExpressionless } from "react-icons/bs";
import Heading from '../shorthand/Heading';
import Paragraph from '../shorthand/Paragraph';

const First = ({ heading, metaDescription, description }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
    // Retrieve the selected emoji from localStorage when the component mounts
    const savedEmoji = localStorage.getItem('selectedEmoji1');
    if (savedEmoji) {
      setSelectedEmoji(Number(savedEmoji));
    }
  }, []);

  const emojis = [
    { id: 1, icon: <BsEmojiHeartEyes /> },
    { id: 2, icon: <BsEmojiSmile /> },
    { id: 3, icon: <BsEmojiFrown /> },
    { id: 4, icon: <BsEmojiExpressionless /> },
  ];

  const handleEmojiClick = (id) => {
    setSelectedEmoji(id);
    // Save the selected emoji to localStorage
    localStorage.setItem('selectedEmoji1', id);
  };

  return (
    <section className='bg-black text-white  w-full h-auto flex py-12 sm:py-16 lg:py-20 border-x border-black/10 font-pathwayExtreme'>
      {/* Left border spacer */}
      <div className='sm:w-[5%] border-y border-r border-black/10 h-auto'></div>
      
      {/* Main content area */}
      <section className='sm:w-[90%] h-full'>
        {/* Title section */}
        <section className='w-full border-y border-black/10'>
          
        </section>

        <section className='w-full'>
          <Heading heading={'Bluehost offer'}/>
        </section>

        {/* Disclaimer content */}
        <section className='border-b border-black/10 px-5 sm:px-16 lg:px-32 xl:px-40 pt-4 pb-8 lg:pt-3 lg:pb-16 flex flex-col gap-10 text-[14px] sm:text-[15px] xl:text-[18px]'>
          <Paragraph paragraph={'The information provided on megasaverr (the Website) is for general informational purposes only. All information on the Website is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.'}/>

          <section className='flex flex-col sm:flex-row gap-2'>
            <button className='bg-white/10 py-3 px-4 border border-black/10'>
                purchase now
            </button>
            <button className='bg-white/10 py-3 px-4 border border-black/10'>
                view more on bluehost
            </button>
          </section>

          {/* External Links Disclaimer section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>External Links Disclaimer</h1>
            <p>
              The Website may contain (or you may be sent through the Website) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
            </p>
          </section>

          {/* Affiliate Disclaimer section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Affiliate Disclaimer</h1>
            <p>
              The Website may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include Bluehost and Hostinger, among others.
            </p>
          </section>

          {/* Professional Disclaimer section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Professional Disclaimer</h1>
            <p>
              The Website cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. The use or reliance of any information contained on this site is solely at your own risk.
            </p>
          </section>

          {/* Testimonials Disclaimer section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Testimonials Disclaimer</h1>
            <p>
              The Website may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.
            </p>
          </section>

          {/* Limitation of Liability section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Limitation of Liability</h1>
            <p>
              In no event shall megasaverr, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
          </section>

          {/* Contact Us section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Contact Us</h1>
            <p>If you have any questions about this Disclaimer, you can contact us at:
              <br />
              Email: megasaverr@gmail.com
            </p>
          </section>

          <section className='flex flex-col sm:flex-row gap-2'>
            <button className='bg-white/10 py-3 px-4 border border-black/10'>
                purchase now
            </button>
            <button className='bg-white/10 py-3 px-4 border border-black/10'>
                view more on bluehost
            </button>
          </section>

          <section className='w-full h-[55px] flex justify-end'>
            <div className=' w-full border border-black/10 sm:w-auto bg-white/10 rounded-[12px] flex 
            justify-between sm:justify-start items-center gap-1 xl:gap-2 px-3 sm:px-4'>
              <h1 className='text-[12px] sm:text-[14px] xl:text-[15px]'>
                did you find this helpful?
              </h1>
              <section className='flex'>
                {emojis.map(emoji => (
                  <div
                    key={emoji.id}
                    className={`p-1 sm:p-2 rounded-full cursor-pointer ${selectedEmoji === emoji.id ? 'bg-white/20' : 'hover:bg-white/15'}`}
                    onClick={() => handleEmojiClick(emoji.id)}>
                    {emoji.icon}
                  </div>
                ))}
              </section>
            </div>
          </section>

        </section>
      </section>

      {/* Right border spacer */}
      <div className='sm:w-[5%] border-y border-l border-black/10'></div>
    </section>
  );
}

export default First;
