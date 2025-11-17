import React from 'react';
import quote from '../../../assets/reviewQuote.png';

const ReviewCard = ({ review }) => {
  return (
    <div className='
      p-5 md:p-7 
      bg-gray-200 
      w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px]
      min-h-[220px] md:min-h-[260px]
      rounded-xl 
      mt-10 
      border border-gray-400
    '>

      <img src={quote} className='w-6 md:w-8' alt="" />

      <p className='text-[#606060] mt-4 text-sm md:text-base leading-relaxed'>
        {review.review}
      </p>

      <hr className="border-t-2 border-dashed border-secondary my-5 md:my-6" />

      <div className='flex gap-4 items-center'>
        <img
          src={review.user_photoURL}
          className='w-8 md:w-10 rounded-full object-cover'
          alt=""
        />
        <div>
          <h1 className='text-secondary font-bold text-sm md:text-base'>
            {review.userName}
          </h1>
          <p className='text-xs md:text-sm text-[#606060]'>
            {review.user_email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
