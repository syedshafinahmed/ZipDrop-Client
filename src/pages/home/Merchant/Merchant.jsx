import React from 'react';
import location from '../../../assets/location-merchant.png';
import bg from '../../../assets/be-a-merchant-bg.png';

const Merchant = () => {
  return (
    <div className='py-20 px-5'>
      <div className='bg-secondary p-10 lg:p-15 flex flex-col lg:flex-row items-center rounded-xl relative overflow-hidden'>
        <img src={bg} className='absolute top-0 right-10 w-40 md:w-60 hidden md:block' alt="" />
        <div className='relative z-10 flex-1'>
          <h1 className='font-bold text-3xl md:text-4xl text-base-200'>
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className='text-[#DADADA] py-6 md:py-10'>
            We offer the lowest delivery charge with the highest value along with
            100% safety of your product. Pathao courier delivers your parcels in
            every corner of Bangladesh right on time.
          </p>
          <div className='flex gap-4 flex-wrap'>
            <button className='btn rounded-full bg-primary shadow-none border border-primary text-secondary'>
              Become a Merchant
            </button>
            <button className='btn rounded-full bg-secondary shadow-none text-primary border border-primary'>
              Earn with ZipDrop Courier
            </button>
          </div>
        </div>
        <img src={location} className='w-64 md:w-80 lg:w-96 mt-10 lg:mt-0 flex-1' alt="" />
      </div>
    </div>
  );
};

export default Merchant;
