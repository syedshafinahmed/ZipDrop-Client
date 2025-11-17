import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import review from '../../../assets/customer-top.png';

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className='py-20 px-4'>
      <div className='flex flex-col justify-center items-center text-center max-w-2xl mx-auto'>
        <img src={review} className="w-32 md:w-44" alt="" />
        <h1 className='text-2xl md:text-3xl font-bold text-secondary pt-6 pb-3'>
          What our customers are saying
        </h1>
        <p className='text-sm md:text-base text-[#606060]'>
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <div className='mt-10'>
        <Swiper
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}

          breakpoints={{
            0: { slidesPerView: 1.2, coverflowEffect: { depth: 150, rotate: 20 } },
            480: { slidesPerView: 1.5, coverflowEffect: { depth: 180, rotate: 25 } },
            768: { slidesPerView: 2.5, coverflowEffect: { depth: 200, rotate: 30 } },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4 },
          }}

          coverflowEffect={{
            rotate: 30,
            stretch: 50,
            depth: 200,
            modifier: 1,
            scale: 0.8,
            slideShadows: false,
          }}

          autoplay={{
            delay: 1500,
            disableOnInteraction: false
          }}

          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
