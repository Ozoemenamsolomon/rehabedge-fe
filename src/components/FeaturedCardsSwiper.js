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
// <div id="PlusAd" style={{ display: `flex`, width: `100%` }}>
//   <div style={{ flex: `3` }}>
//   </div>

//   <div className="Ad" style={{ flex: `1`, height: `100%` }}></div>
// </div>

const FeaturedCardsSwiper = props => {
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
      style={{
        borderRadius: `15px`,
        boxShadow: `-9px -7px 15px rgba(0, 0, 0, 0.11)`,
        margin: `0em 0em 3em 0`,
      }}
    >
      {props.children}
      {
        /***/ props.articleQuery.edges.map(edge => {
          return (
            <SwiperSlide key={edge.node.id}>
              <FeaturedCard
                title={edge.node.Titel}
                readtime={edge.node.Read_duration}
                excerpt={`${edge.node.Excerpt.trim()}...`}
                date={edge.node.Date}
                imageurl={edge.node.Images.url}
                imagealt={edge.node.Images.alternativeText}
                slug={edge.node.Slug}
                path={`/posts/${edge.node.Slug}`}
              ></FeaturedCard>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default FeaturedCardsSwiper;

// <FeaturedCard
//   title="How to be a man"
//   readtime={13}
//   excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
//   date="april 16, 2020"
//   imageurl=""
// />
// <SwiperSlide>
//   <FeaturedCard />
// </SwiperSlide>
// <SwiperSlide>
//   <FeaturedCard
//     title="How to be a man"
//     readtime={45}
//     excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
//     date="april 16, 2020"
//     imageurl=""
//   />
// </SwiperSlide>
// <SwiperSlide>
//   <FeaturedCard />
// </SwiperSlide>
// <SwiperSlide>
//   <FeaturedCard
//     title="How to be a man"
//     readtime={20}
//     excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia aut quaerat veniam sunt corporis corrupti sequi ex quam non abi eleyi o bgo ni?Lorem ipsum dolor sit amet, consectetur adipisicing elit.    rerg"
//     date="april 16, 2020"
//     imageurl=""
//   />
// </SwiperSlide>
