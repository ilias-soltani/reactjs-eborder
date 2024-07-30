import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import "./TestimonialsSwiper.scss";

function SwiperNav() {
  const swiper = useSwiper();

  const [activeSlide, setActiveSlide] = useState(0);

  const slideOnClick = (type) => {
    type ? swiper.slideNext() : swiper.slidePrev();
  };

  swiper.on("slideChange", function () {
    setActiveSlide(swiper.realIndex);
  });

  return (
    <div className="swiper-nav-btns">
      <div className="number">
        <span>
          <span>{`0${activeSlide + 1}`}</span> / {` 0${swiper.slides.length}`}
        </span>
      </div>
      <div className="arrows">
        <GoArrowLeft onClick={() => slideOnClick(false)} />
        <GoArrowRight onClick={() => slideOnClick(true)} />
      </div>
    </div>
  );
}

export default SwiperNav;
