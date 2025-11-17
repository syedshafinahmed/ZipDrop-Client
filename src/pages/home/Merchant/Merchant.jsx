import React from 'react';
import location from '../../../assets/location-merchant.png'
import bg from '../../../assets/be-a-merchant-bg.png'
const Merchant = () => {
  return (
    <div className='py-20'>
      <div className='bg-secondary p-15 flex items-center rounded-xl'>
        <div className='relative'>
          <img src={bg} className='absolute -top-21.5 left-70 hidden md:block' alt="" />
          <h1 className='font-bold text-4xl text-base-200'>Merchant and Customer Satisfaction is Our First Priority</h1>
          <p className='text-[#DADADA] py-10'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
          <div className='flex gap-5'>
            <button className='btn rounded-full bg-primary shadow-none border border-primary text-secondary'>Become a Merchant</button>
            <button className='btn rounded-full bg-secondary shadow-none text-primary border border-primary'>Earn with ZipDrop Courier</button>
          </div>
        </div>
        <img src={location} alt="" />
      </div>
    </div>
  );
};

export default Merchant;