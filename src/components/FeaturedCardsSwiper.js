import React from "react";
// , { useRef, useState }
import FeaturedCard from "./FeaturedCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/components/navigation/navigation.min.css";

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
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      <SwiperSlide>
        <FeaturedCard>Slide 1</FeaturedCard>
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedCard>Slide 2</FeaturedCard>
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedCard>Slide 3</FeaturedCard>
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedCard>Slide 4</FeaturedCard>
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedCard>Slide 5</FeaturedCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default FeaturedCardsSwiper;
