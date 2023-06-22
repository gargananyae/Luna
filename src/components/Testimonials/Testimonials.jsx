import React from 'react';
import css from './Testimonials.module.css';
import Review from '../../assets/Review.png';
import {TestimonialsData} from "../../data/testimonials";
import {Swiper, SwiperSlide} from 'swiper/react';


const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
            <span>Top Rated</span>
            <span>
                I really enjoyed their products and service as they promote having a a healthy environment along with healthy menses!!
            </span>
            </div>
        

        <img src={Review} alt=""/>

        <div className={css.container}>
            <span>100k</span>
            <span>Happy Customers With Us!!</span>
        </div>
    </div>

    <div className={css.reviews}>Reviews</div>

    <div className={css.carousel}>
      <Swiper
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={20}
      className={css.tCarousel}>
        
        {
          TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt=""/>
                <span>{testimonial.comment}</span>
                <hr/>
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </div>
    </div>
  )
}

export default Testimonials