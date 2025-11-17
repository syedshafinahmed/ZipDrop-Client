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
import img8 from '../../../assets/brands/DHL.png'
import img9 from '../../../assets/brands/Aramex.png'
import img10 from '../../../assets/brands/maersk.png'
import img11 from '../../../assets/brands/ups.png'
import img12 from '../../../assets/brands/fedex.png'
import img13 from '../../../assets/brands/Ecourier.png'
import img14 from '../../../assets/brands/redx.png'
import img15 from '../../../assets/brands/pathao.png'
import { Autoplay } from 'swiper/modules';
const Brands = () => {
  return (
    <div className='py-30'>
      <p className='text-center font-bold text-secondary text-2xl mb-20'>We've helped thousands of sales teams</p>
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
        <SwiperSlide><img src={img15} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img13} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img14} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;