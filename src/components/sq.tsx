import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css"
import '../img/1.jpg'
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


const Swipq = (props:any)=>{
return (
   <div className="about_sw">
  <>
    <Swiper 
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
      pagination={true
      }
      navigation={true}
      modules={[Pagination, Navigation,Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
          <img src='1.jpg' ></img>
         
         </SwiperSlide>
      <SwiperSlide>ddqddw</SwiperSlide>
    </Swiper>
  </>
  </div>
);
    }
    export default Swipq;
