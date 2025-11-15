import React from 'react';
import quote from '../../../assets/reviewQuote.png'
const ReviewCard = ({ review }) => {
  return (
    <div className='p-7 bg-gray-200 w-[420px] h-60 rounded-xl mt-10 border border-gray-400'>
      <img src={quote} alt="" />
      <p className='text-[#606060] mt-5'>{review.review}</p>
      <hr class="border-t-2 border-dashed border-secondary my-6" />
      <div className='flex gap-5'>
        <img src={review.user_photoURL} className='w-10 rounded-full' alt="" />
        <div>
          <h1 className='text-secondary font-bold text-sm'>{review.userName}</h1>
          <p className='text-xs text-[#606060]'>{review.user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;