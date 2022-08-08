import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousuel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousuel() {
  return (

    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://cdn.flipshope.com/wp-content/uploads/2021/07/ajio-iconic-fashion-sale-offers-coupons-2021.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1620638991270/myntra-offers.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://couponswala.com/blog/wp-content/uploads/2021/12/myntra-upcomming-sale-min-1-696x392.png" alt="" /> </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
