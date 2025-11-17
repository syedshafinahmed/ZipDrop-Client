import React from 'react';
import live from '../../../assets/live-tracking.png';
import safe from '../../../assets/safe-delivery.png';
import call from '../../../assets/Call center-bro.png';

const Live = () => {
  return (
    <div className='py-20 border-t border-b border-secondary border-dashed space-y-10'>

      <div className='px-5'>
        <div className='flex flex-col md:flex-row bg-white p-8 md:p-10 rounded-xl items-center'>
          
          <img src={live} className='w-40 md:w-56' alt="" />

          <div className='w-full md:w-auto md:h-40 my-5 md:my-0 border-t-2 md:border-t-0 md:border-l-2 border-dashed border-secondary mx-0 md:mx-10'></div>
          
          <div className='text-center md:text-left'>
            <h1 className='font-bold text-secondary text-2xl mb-2'>
              Live Parcel Tracking
            </h1>
            <p className='text-[#606060] font-medium'>
              Stay updated in real-time with our live parcel tracking feature. 
              From pick-up to delivery, monitor your shipment's journey and get 
              instant status updates for complete peace of mind.
            </p>
          </div>

        </div>
      </div>

      <div className='px-5'>
        <div className='flex flex-col md:flex-row bg-white p-8 md:p-10 rounded-xl items-center'>
          
          <img src={safe} className='w-40 md:w-56' alt="" />

          <div className='w-full md:w-auto md:h-40 my-5 md:my-0 border-t-2 md:border-t-0 md:border-l-2 border-dashed border-secondary mx-0 md:mx-10'></div>

          <div className='text-center md:text-left'>
            <h1 className='font-bold text-secondary text-2xl mb-2'>
              100% Safe Delivery
            </h1>
            <p className='text-[#606060] font-medium'>
              We ensure your parcels are handled with the utmost care and delivered 
              securely. Our reliable process guarantees safe and damage-free 
              delivery every time.
            </p>
          </div>

        </div>
      </div>

      <div className='px-5'>
        <div className='flex flex-col md:flex-row bg-white p-8 md:p-10 rounded-xl items-center'>
          
          <img src={call} className='w-40 md:w-56' alt="" />

          <div className='w-full md:w-auto md:h-40 my-5 md:my-0 border-t-2 md:border-t-0 md:border-l-2 border-dashed border-secondary mx-0 md:mx-10'></div>

          <div className='text-center md:text-left'>
            <h1 className='font-bold text-secondary text-2xl mb-2'>
              24/7 Call Center Support
            </h1>
            <p className='text-[#606060] font-medium'>
              Our dedicated support team is available around the clock to assist 
              you with any questions, updates, or delivery concerns—anytime you 
              need us.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Live;
