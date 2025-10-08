// src/components/Banner.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";

// Swiper CSS
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const vedio = new URL('../assets/vedio2.mp4', import.meta.url).href
//const poster = new URL('../assets/banner1.png', import.meta.url).href
const poster2 = new URL('../assets/poster2.png', import.meta.url).href

const banner2 = new URL('../assets/banner2.png', import.meta.url).href
const banner3 = new URL('../assets/banner3.png', import.meta.url).href

export default function Banner() {
  const [autoplayCfg, setAutoplayCfg] = useState({
    delay: 10000,
    disableOnInteraction: false,
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    // if user prefers reduced motion, turn off autoplay
    if (mq.matches) {
      setAutoplayCfg(false)
    } else {
      setAutoplayCfg({
        delay: 10000,
        disableOnInteraction: false,
      })
    }
    // keep listener in case user changes system setting while page open
    const handler = (e) => {
      setAutoplayCfg(e.matches ? false : { delay: 10000, disableOnInteraction: false })
    }
    try {
      mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler)
    } catch {
      /* noop for older browsers */
    }
    return () => {
      try {
        mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler)
      } catch { /* empty */ }
    }
  }, [])

  /**
   * Layout approach:
   * - For small screens use an aspect-based height so banner scales proportionally:
   *    h = 56.25vw -> 16:9
   * - For small tablets (sm) use a taller viewport portion (50vh)
   * - For md+ use full viewport height (h-screen)
   *
   * Each slide uses absolute-positioned <video> or <img> covering the container (object-cover).
   * The caption is positioned responsively (left & bottom offsets change with breakpoints).
   */

  const slideContainerClasses = 'relative w-full h-[56.25vw] sm:h-[50vh] md:h-screen overflow-hidden'

  const captionClasses =
    'absolute left-4 md:left-10 bottom-6 md:bottom-10 bg-[#4b4d9c] text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg max-w-[90%] md:max-w-[40%] text-sm md:text-lg'

  return (
    <section aria-label="Hero banner" className="w-full ">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={autoplayCfg}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {/* Slide 1 - Video for md+, poster image for small screens */}
        <SwiperSlide>
          <div className={slideContainerClasses}>
            {/* Desktop video */}
            <div className="hidden md:block absolute inset-0">
              <video
                className="w-full h-full object-cover"

                loop
                muted
                playsInline
                autoPlay
              >
                <source src={vedio} type="video/mp4" />
              </video>
            </div>

            {/* Mobile video */}
            <div className="block md:hidden absolute inset-0">
              <video
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay
              >
                <source src={vedio} type="video/mp4" />
              </video>
            </div>
            <motion.div
              className={captionClasses}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
            >
              Clarity in every move, confident in every trade
            </motion.div>
          </div>

        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={slideContainerClasses}>
            <img src={banner2} alt="Slide 2" className="absolute inset-0 w-full h-full object-cover" />
            <motion.div
              className={captionClasses}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.25 }}
            >
              Clarity in every move, confident in every trade
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
      <SwiperSlide>
  <div className={slideContainerClasses}>
    {/* Banner background */}
    <img
      src={banner3}
      alt="Slide 3"
      className="absolute inset-0 w-full h-full object-cover"/>

    {/* Quote aligned top-left */}
    {/* <h2 className="absolute top-8 left-6 md:top-12 md:left-12 text-lg md:text-2xl font-semibold text-white bg-black/40 px-4 py-2 rounded-lg">
      Clarity in every move, confident in every trade
    </h2> */}

    {/* Main heading */}
    <h1 className="relative mt-24 md:mt-60 text-5xl md:text-6xl text-[#ffffff] font-bold mb-30 text-center ml-30 md:text-left z-10">
          Your future is <br></br><span className='ml-10'>already in your hand.</span>
     
    </h1>

    {/* Caption animation */}
   <motion.div
      className={captionClasses}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
    > Clarity in every move, confident in every trade
      {/* You can keep extra text here if needed */}
    </motion.div>

    {/* Mobile poster overlay */}
    <div className="block md:hidden absolute inset-0">
      <img
        src={banner3}
        alt="Hero poster"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</SwiperSlide>

      </Swiper>
    </section>
  )
}
