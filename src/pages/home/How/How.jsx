import React from 'react';
import { FaBuilding, FaMoneyBillWave, FaMotorcycle, FaWarehouse } from 'react-icons/fa';
const How = () => {
  const datas = [
    {
      "title": "Booking Pick & Drop",
      "id": 1,
      "image": <FaMotorcycle size={45} />,
      "description": "A fast and convenient pick & drop service allowing customers to easily book parcel pickups from any location. Designed for quick dispatch and reliable handling, ensuring your items reach their destination safely and on time."
    },
    {
      "title": "Cash On Delivery",
      "id": 2,
      "image": <FaMoneyBillWave size={45} />,
      "description": "A secure cash-on-delivery solution enabling customers to pay after receiving their products. This builds trust, increases sales, and reduces the risk for buyers by offering a flexible payment option."
    },
    {
      "title": "Delivery Hub",
      "id": 3,
      "image": <FaWarehouse size={45} />,
      "description": "A centralized delivery hub system that streamlines parcel sorting, routing, and dispatching. Ensures faster delivery times, better tracking, and efficient management of large volumes of shipments."
    },
    {
      "title": "Booking SME & Corporate",
      "id": 4,
      "image": <FaBuilding size={45} />,
      "description": "A dedicated booking and logistics service tailored for SMEs and corporate clients. Offers bulk shipment handling, priority support, scheduled pickups, and tailored delivery solutions for growing businesses."
    }
  ]

  return (
    <div className='flex justify-center items-center gap-5 py-10 flex-wrap md:flex-nowrap px-5 md:px-0'>
      {
        datas.map(data => (
          <div key={data.id} className='text-secondary hover:text-primary p-8 w-80 h-72 bg-primary hover:bg-secondary rounded-xl transition-transform duration-300 hover:scale-102'>
            {data.image}
            <h1 className='font-bold text-xl py-3'>{data.title}</h1>
            <p className='text-[#606060] hover:text-white text-sm text-justify'>{data.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default How;