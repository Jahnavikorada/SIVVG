import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import './home.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




import qr from './assets/qr.png';
import playstore from './assets/playstore.png';
import appstore from './assets/app-store.png';

import iphone from './assets/iphone.png';
import iphone2 from './assets/iphone2.png';
import BeginjourneySection from './pages/Beginjourney';
import Banner from './pages/banner';
import WelcomeSection from "./pages/Welcome";

import WhyChoose from "./pages/Whychoose";
import PortfolioDashboard from "./pages/Portfolio";
import DownloadAppSection from "./pages/Downloadapp";

function Home() {
  return (
    <>
          
         <Banner/>
        <WelcomeSection />
          <WhyChoose />  
         <PortfolioDashboard />

        <DownloadAppSection />
        

    </>



  );
}

export default Home;
