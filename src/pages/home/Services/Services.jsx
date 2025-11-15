import React from 'react';
import {
  FaShippingFast,
  FaGlobeAsia,
  FaHandHoldingUsd,
  FaBoxOpen,
  FaHandshake,
  FaUndo
} from "react-icons/fa";

const Services = () => {
  const datas = [
    {
      "title": "Express & Standard Delivery",
      "id": 1,
      "image": <FaShippingFast size={45} className='text-secondary' />,
      "description": "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
    },
    {
      "title": "Nationwide Delivery",
      "id": 2,
      "image": <FaGlobeAsia size={45} className='text-secondary' />,
      "description": "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
    },
    {
      "title": "Cash on Home Delivery",
      "id": 3,
      "image": <FaHandHoldingUsd size={45} className='text-secondary' />,
      "description": "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
    },
    {
      "title": "Fulfillment Solution",
      "id": 4,
      "image": <FaBoxOpen size={45} className='text-secondary' />,
      "description": "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
    },
    {
      "title": "Contract in Logistics",
      "id": 5,
      "image": <FaHandshake size={45} className='text-secondary' />,
      "description": "Customized corporate services which includes warehouse and inventory management support."
    },
    {
      "title": "Parcel Return",
      "id": 6,
      "image": <FaUndo size={45} className='text-secondary' />,
      "description": "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
    }
  ];

  return (
    <div className='py-10'>
      <div className='bg-secondary p-20 rounded-xl'>
        <h1 className='text-4xl text-white text-center font-bold'>Our Services</h1>
        <p className='text-[#DADADA] text-center pt-3 pb-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {
            datas.map(data => (
              <div key={data.id} className='p-10 rounded-xl flex flex-col items-center justify-center bg-base-200 hover:bg-primary transition-transform duration-300 hover:scale-102'>
                {data.image}
                <h1 className='text-secondary text-2xl font-bold py-5 text-center'>{data.title}</h1>
                <p className='text-[#606060] text-justify'>{data.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Services;