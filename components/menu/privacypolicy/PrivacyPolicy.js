import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className='bg-black text-white w-full h-auto flex py-12 sm:py-16 lg:py-20 border-x border-black/10 font-pathwayExtreme'>
      {/* Left border spacer */}
      <div className='w-[5%] border-y border-r border-black/10 h-auto'></div>
      
      {/* Main content area */}
      <section className='w-[90%] h-full'>
        {/* Title section */}
        <section className='w-full border-y border-black/10'>
          <h1 className='text-[26px] sm:text-[36px] lg:text-[45px] xl:text-[50px] font-semibold text-center py-8'>
            Privacy Policy
          </h1>
        </section>

        {/* Privacy policy content */}
        <section className='border-b border-black/10 px-5 sm:px-16 lg:px-32 xl:px-40 py-8 sm:py-12 lg:py-16 flex flex-col gap-10 text-[14px] sm:text-[15px] xl:text-[18px]'>
          <p>
            At megasaverr, we are committed to protecting your privacy. This Privacy Policy outlines the types of information we collect from our users, how we use and protect that information, and your rights regarding your personal information.
          </p>

          {/* Information We Collect section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Information We Collect</h1>
            <ul className='list-disc pl-5'>
              <li><span>Personal Information:</span> We collect the following personal information from users who fill out forms on our website:
                <ul className='list-disc pl-5 pb-2'>
                  <li>Name</li>
                  <li>Email address</li>
                </ul>
              </li>
              <li><span>Non-Personal Information:</span> We do not collect any non-personal information at this time.</li>
            </ul>
          </section>

          {/* Methods of Information Collection section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Methods of Information Collection</h1>
            <p>We collect personal information directly from you when you fill out forms on our website.</p>
          </section>

          {/* Use of Collected Information section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Use of Collected Information</h1>
            <ul className='list-disc pl-5'>
              <li>To connect with users.</li>
              <li>To send users the latest updates.</li>
            </ul>
          </section>

          {/* Data Security section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Data Security</h1>
            <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet or email transmission is ever fully secure or error-free. Please keep this in mind when disclosing any personal information to us via the internet.</p>
          </section>

          {/* Cookies and Tracking Technologies section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Cookies and Tracking Technologies</h1>
            <p>We do not use cookies or other tracking technologies to collect information about your visit to our website.</p>
          </section>

          {/* Third-Party Links section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Third-Party Links</h1>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
          </section>

          {/* Children's Privacy section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Children’s Privacy</h1>
            <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.</p>
          </section>

          {/* Changes to the Privacy Policy section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Changes to the Privacy Policy</h1>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
          </section>

          {/* Contact Us section */}
          <section className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Contact Us</h1>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:
              <br/>
              Email: megasaverr@gmail.com
            </p>
          </section>

          {/* Privacy Policy Summary */}
          <section>
            <p>
              At megasaverr, we are dedicated to protecting your privacy. We collect personal information, specifically your name and email address, to connect with you and provide updates. We do not collect non-personal information or use cookies and tracking technologies. Your information is not shared with third parties. We implement reasonable security measures to protect your data. Our services are not directed to individuals under 13. For any changes to our policy, updates will be posted on our website. If you have any questions, please contact us at megasaverr@gmail.com.
            </p>
          </section>
        </section>
      </section>
      
      {/* Right border spacer */}
      <div className='w-[5%] border-y border-l border-black/10'></div>
    </section>
  )
}

export default PrivacyPolicy
