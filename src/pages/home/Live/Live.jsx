import React from 'react';
import live from '../../../assets/live-tracking.png'
import safe from '../../../assets/safe-delivery.png'
import call from '../../../assets/Call center-bro.png'
const Live = () => {
  return (
    <div className='py-20 border-t border-b border-secondary border-dashed'>
      <div className='px-5 pb-10 md:px-5'>
        <div className='flex bg-white p-10 rounded-xl items-center'>
          <img src={live} alt="" />
          <div className="h-40 border-l-2 border-dashed border-secondary mx-10"></div>
          <div>
            <h1 className='font-bold text-secondary text-2xl'>Live Parcel Tracking</h1>
            <p className='text-[#606060] font-medium'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
          </div>
        </div>
      </div>
      <div className='px-5 pb-10 md:px-5'>
        <div className='flex bg-white p-10 rounded-xl items-center'>
          <img src={safe} alt="" />
          <div className="h-40 border-l-2 border-dashed border-secondary mx-10"></div>
          <div>
            <h1 className='font-bold text-secondary text-2xl'>100% Safe Delivery</h1>
            <p className='text-[#606060] font-medium'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
          </div>
        </div>
      </div>
      <div className='px-5 md:px-5'>
        <div className='flex bg-white p-10 rounded-xl items-center'>
          <img src={call} alt="" />
          <div className="h-40 border-l-2 border-dashed border-secondary mx-10"></div>
          <div>
            <h1 className='font-bold text-secondary text-2xl'>24/7 Call Center Support</h1>
            <p className='text-[#606060] font-medium'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;