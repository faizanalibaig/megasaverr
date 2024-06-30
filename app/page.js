import React from 'react';
import Home from '@/components/home/Home';
import ArticleSection from '@/components/articlesection/ArticleSection';
import CouponSection from '@/components/couponsection/CouponSection';
import SaveContact from '@/components/savecontact/SaveContact';
import WelcomeNotification from '@/components/welcomenotification/WelcomeNotification';
import Navbar from '@/components/navbar/Navbar';
import AlertMessage from '@/components/alertmessage/AlertMessage';
import Footer from '@/components/footer/Footer';

function App() {
  return (
    <main>
      <AlertMessage/>
      <Navbar/>
      <Home />
      <div className="bg-black text-white h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[180px] border-x-[2px] border-gray-50/25" />
      <ArticleSection />
      <div className="bg-black text-white h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[180px] border-x-[2px] border-gray-50/25" />
      <CouponSection />
      <div className="bg-black text-white h-[50px] sm:h-[120px] lg:h-[150px] xl:h-[180px] border-x-[2px] border-gray-50/25" />
      <SaveContact />
      {/* <Cashback /> */}
      <div className="fixed bottom-0 w-full">
      <WelcomeNotification />
      </div>

      <div className="bg-black text-white h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[180px] border-x-[2px] border-gray-50/25" />
      <Footer/>
    </main>
  );
}

export default App;
