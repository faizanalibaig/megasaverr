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
      <Home />
      <div className="bg-black text-white h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[180px] " />
      <ArticleSection />
      <div className="bg-black text-white h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[180px]" />
      <CouponSection />
      <div className="bg-black text-white h-[40px] sm:h-[110px] lg:h-[130px] xl:h-[160px]" />
      <SaveContact />
      {/* <Cashback /> */}
      <div className="fixed bottom-0 w-full">
      <WelcomeNotification />
      </div>

      <div className="bg-black text-white h-[40px] sm:h-[110px] lg:h-[130px] xl:h-[160px]" />
    </main>
  );
}

export default App;
