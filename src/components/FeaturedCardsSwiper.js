import React from "react";
// , { useRef, useState }
import FeaturedCard from "./FeaturedCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";

import "swiper/components/navigation/navigation.scss";

// Import Swiper styles
import "swiper/swiper.scss";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

// loop={true}
const FeaturedCardsSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      <SwiperSlide>
        <FeaturedCard></FeaturedCard>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default FeaturedCardsSwiper;
