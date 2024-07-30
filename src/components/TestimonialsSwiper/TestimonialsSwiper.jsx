import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import images from "../../constants/images";
import SwiperNav from "./SwiperNav";
import "./TestimonialsSwiper.scss";

function TestimonialsSwiper() {
  const testimonials = [
    {
      name: "Nadir Ismail",
      location: "Rabat, Morocco",
      image: images.testimonials1,
      desc: "eBorder made my immigration process incredibly smooth. Their team's expertise and guidance were invaluable, and I'm now happily settled in Portugal.",
    },
    {
      name: "Uiara Maiara",
      location: "Quito, Ecuador",
      image: images.testimonials2,
      desc: "I can't thank eBorder enough for their personalized services. They tailored everything to my needs, making my move hassle-free and enjoyable.",
    },
    {
      name: "Wasswa Abdullaahi",
      location: "Luanda, Angola",
      image: images.testimonials3,
      desc: "Efficiency is eBorder's middle name. They ensured that I received my NIF in record time, saving me both time and stress.",
    },
    {
      name: "Châu Chi Ngo",
      location: "Hanoi, Vietnam",
      image: images.testimonials4,
      desc: "The team at eBorder delivers on their promises. They're not just reliable; they're exceptional. I recommend their services to anyone moving to Portugal.",
    },
    {
      name: "Manjeet Manpreet",
      location: "New Delhi, India",
      image: images.testimonials5,
      desc: "eBorder's expertise shines through in every interaction. Their knowledge of the system and dedication to their clients make them my top choice.",
    },
    {
      name: "Medhi Ayache",
      location: "Oran, Algeria",
      image: images.testimonials6,
      desc: "Choosing eBorder was a game-changer for my residency application. Their guidance made all the difference, and I'm now living my dream in Portugal.",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      autoHeight={true}
      autoplay={true}
      className="mySwiper"
    >
      {testimonials.map((test, i) => (
        <SwiperSlide key={i}>
          <div className="test-box">
            <p>{test.desc}</p>
            <div className="image">
              <img src={test.image} alt="" />
              <div className="text">
                <h3>{test.name}</h3>
                <p>{test.location}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <SwiperNav />
    </Swiper>
  );
}

export default TestimonialsSwiper;
