import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg"
import AVATAR2 from "../../assets/avatar2.jpg"
import AVATAR3 from "../../assets/avatar3.jpg"
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: "User",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur natus quo enim aspernatur tenetur harum inventore. Facilis sint, perferendis quis facere cupiditate repellatarchitecto illo laudantium praesentium nemo reprehenderit?",

  },
  {
    id: 2,
    avatar: AVATAR2,
    name: "User",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur natus quo enim aspernatur tenetur harum inventore. Facilis sint, perferendis quis facere cupiditate repellatarchitecto illo laudantium praesentium nemo reprehenderit?",
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: "User",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur natus quo enim aspernatur tenetur harum inventore. Facilis sint, perferendis quis facere cupiditate repellatarchitecto illo laudantium praesentium nemo reprehenderit?",
  }
]

const Testimonials = () => {
  return <section id="testimonials">
    <h5>Reviews</h5>
    <h2>Ttestimonials</h2>
    <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

    >
      {data.map(({ avatar, name, review, id }) => {
        return (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>


        )
      })}

    </Swiper>

  </section>;
};

export default Testimonials;
