import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
