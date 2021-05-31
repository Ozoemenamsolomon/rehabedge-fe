import React from "react";
// , { useRef, useState }
import FeaturedCard from "./FeaturedCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
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
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      style={{
        borderRadius: `15px`,
        boxShadow: `-9px -7px 15px rgba(0, 0, 0, 0.11)`,
        margin: `0em 0em 3em 0`,
      }}
    >
      <SwiperSlide>
        <FeaturedCard
          title="How to be a man"
          readtime="hjadg"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
          date="april 16, 2020"
          imageurl=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedCard />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedCard
          title="How to be a man"
          readtime="hjadg"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
          date="april 16, 2020"
          imageurl=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedCard />
      </SwiperSlide>
      <SwiperSlide>
        <FeaturedCard
          title="How to be a man"
          readtime="hjadg"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
          date="april 16, 2020"
          imageurl=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default FeaturedCardsSwiper;
