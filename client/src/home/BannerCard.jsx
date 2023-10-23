import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./BannerCard.css";

import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";

const BannerCard = ({ images }) => {
  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.bookID}>
            <Link to="/">
              <div>
                <img src={image.imageURL} alt="" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCard;
