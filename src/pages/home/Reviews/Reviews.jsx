import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import review from '../../../assets/customer-top.png'
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className='py-20'>
      <div className='flex flex-col justify-center items-center'>
        <img src={review} alt="" />
        <h1 className='text-3xl text-center font-bold text-secondary pt-10 pb-5'>What our customers are sayings</h1>
        <p className='text-sm text-center text-[#606060]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      </div>
      <>
        <Swiper
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 30,
            stretch: 50,
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: false,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {
            reviews.map(review => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review}></ReviewCard>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </>
    </div>
  );
};

export default Reviews;