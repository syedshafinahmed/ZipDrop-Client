import React from 'react';
import riderImg from '../../assets/agent-pending.png'
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors }
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map(c => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: 'senderRegion' });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    const districts = regionDistricts.map(d => d.district);
    return districts;
  }

  const handleRiderApplication = (data) => {
    console.log(data);
  }

  return (
    <div className='py-10'>
      <h2 className='text-4xl font-bold text-secondary'>Be a Rider</h2>
      <p className='py-2 text-gray-400 text-justify'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
      <div className='flex justify-between items-center'>
        <div className='w-full px-5'>
          <form className=''>
            <p className='text-2xl text-secondary pb-5'>Tell us about yourself</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-15'>
              {/* sender */}
              <div>
                {/* name */}
                <fieldset className="fieldset mb-3">
                  <label className="label">Your Name</label>
                  <input type="text" {...register('senderName')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Your Name" />
                </fieldset>
                {/* email */}
                <fieldset className="fieldset mb-3">
                  <label className="label">Your Email</label>
                  <input type="email" {...register('senderEmail')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Your Email" />
                </fieldset>
                {/* nid */}
                <fieldset className="fieldset mb-3">
                  <label className="label">NID no</label>
                  <input type="email" {...register('senderEmail')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="NID no" />
                </fieldset>
              </div>
              {/* receiver */}
              <div>
                {/* age  */}
                <fieldset className="fieldset mb-3">
                  <label className="label">Your Age</label>
                  <input type="text" {...register('receiverName')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Your Age" />
                </fieldset>
                {/* region */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Receiver Regions</legend>
                  <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select outline-none border-gray-300 w-full focus:border-primary">
                    <option disabled={true}>Pick a Region</option>
                    {/* {
                      regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                    } */}
                  </select>
                </fieldset>
                {/* phone */}
                <fieldset className="fieldset mb-3">
                  <label className="label">Your Phone No</label>
                  <input type="tel" {...register('receiverPhone')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Your Phone No" />
                </fieldset>
              </div>
            </div>
            <input type="submit" value="Send Parcel" className='btn btn-primary w-full text-black' />
          </form>
        </div>
        <img src={riderImg} className='p-5' alt="" />
      </div>
    </div>
  );
};

export default Rider;