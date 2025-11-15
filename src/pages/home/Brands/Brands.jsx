import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/brands/amazon.png'
import img2 from '../../../assets/brands/amazon_vector.png'
import img3 from '../../../assets/brands/casio.png'
import img4 from '../../../assets/brands/moonstar.png'
import img5 from '../../../assets/brands/randstad.png'
import img6 from '../../../assets/brands/star.png'
import img7 from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';
const Brands = () => {
  return (
    <div className='py-20'>
      <p className='text-center font-bold text-secondary text-2xl mb-20'>We've helped thousands of sales teams</p>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;