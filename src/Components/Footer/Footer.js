import React from "react";
import "./Footer.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
// import "swiper/css";

function Footer() {
  return (
    <div>
      <h2>Hello world</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Footer;
