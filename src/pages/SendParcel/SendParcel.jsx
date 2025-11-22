import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors }
  } = useForm();

  const { user } = useAuth();

  const navigate = useNavigate();

  const serviceCenters = useLoaderData();

  const axiosSecure = useAxiosSecure();

  const regionsDuplicate = serviceCenters.map(c => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: 'senderRegion' });
  const receiverRegion = useWatch({ control, name: 'receiverRegion' });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    const districts = regionDistricts.map(d => d.district);
    return districts;
  }

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === 'document';
    const parcelWeight = parseFloat(data.parcelWeight);
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    }
    else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      }
      else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log('cost', cost);
    data.cost = cost;
    Swal.fire({
      title: "Please confirm the cost",
      text: `You will be charged ${cost} Taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and Continue"
    }).then((result) => {
      if (result.isConfirmed) {

        // save the parcel info to the database
        axiosSecure.post('/parcels', data)
          .then(res => {
            console.log('after saving parcel', res.data);
            if (res.data.insertedId) {
              navigate('/dashboard/my-parcels')
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Parcel has created. Please Pay",
                showConfirmButton: false,
                timer: 2500,
                text: "Your file has been deleted.",
              });
            }
          })

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }
  return (
    <div className='bg-base-200 p-7 rounded-xl mt-10'>
      <h1 className='text-5xl text-secondary font-black py-8 pl-5'>Send Parcel</h1>
      <p className='text-2xl font-semibold text-secondary pl-5'>Enter your parcel details</p>
      <form onSubmit={handleSubmit(handleSendParcel)} className='p-5 text-black'>
        {/* parcel type */}
        <div>
          <label className='label mr-5'>
            <input type="radio" value='document' {...register('parcelType')} className="radio bg-primary border-secondary checked:text-secondary" defaultChecked />
            Document
          </label>
          <label className='label'>
            <input type="radio" value='non-document' {...register('parcelType')} className="radio bg-primary border-secondary checked:text-secondary" />
            Non-Document
          </label>
        </div>

        {/* parcel info */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-15 my-8'>
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input type="text" {...register('parcelName')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Parcel name" />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (Kg)</label>
            <input type="number" {...register('parcelWeight')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Parcel Weight" />
          </fieldset>
        </div>

        {/* 2 column */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-15'>
          {/* sender */}
          <div>
            <h4 className="text-2xl text-secondary font-semibold mb-5">Sender Details</h4>
            {/* name */}
            <fieldset className="fieldset mb-3">
              <label className="label">Sender Name</label>
              <input type="text" {...register('senderName')} defaultValue={user?.displayName} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Sender Name" />
            </fieldset>
            {/* email */}
            <fieldset className="fieldset mb-3">
              <label className="label">Sender Email</label>
              <input type="email" {...register('senderEmail')} defaultValue={user?.email} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Sender Email" />
            </fieldset>
            {/* region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select {...register('senderRegion')} defaultValue="Pick a Region" className="select outline-none border-gray-300 w-full focus:border-primary">
                <option disabled={true}>Pick a Region</option>
                {
                  regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                }
              </select>
            </fieldset>
            {/* district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Districts</legend>
              <select {...register('senderDistrict')} defaultValue="Pick a District" className="select outline-none border-gray-300 w-full focus:border-primary">
                <option disabled={true}>Pick a District</option>
                {
                  districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                }
              </select>
            </fieldset>
            {/* address */}
            <fieldset className="fieldset mb-3">
              <label className="label">Sender Address</label>
              <input type="text" {...register('senderAddress')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Sender Address" />
            </fieldset>
            {/* phone */}
            <fieldset className="fieldset mb-3">
              <label className="label">Sender Phone No</label>
              <input type="tel" {...register('senderPhone')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Sender Phone No" />
            </fieldset>
          </div>
          {/* receiver */}
          <div>
            <h4 className="text-2xl text-secondary font-semibold mb-5">Receiver Details</h4>
            {/* name  */}
            <fieldset className="fieldset mb-3">
              <label className="label">Receiver Name</label>
              <input type="text" {...register('receiverName')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Receiver Name" />
            </fieldset>
            {/* email */}
            <fieldset className="fieldset mb-3">
              <label className="label">Receiver Email</label>
              <input type="email" {...register('receiverEmail')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Receiver Email" />
            </fieldset>
            {/* region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Regions</legend>
              <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select outline-none border-gray-300 w-full focus:border-primary">
                <option disabled={true}>Pick a Region</option>
                {
                  regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                }
              </select>
            </fieldset>
            {/* district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Districts</legend>
              <select {...register('receiverDistrict')} defaultValue="Pick a District" className="select outline-none border-gray-300 w-full focus:border-primary">
                <option disabled={true}>Pick a District</option>
                {
                  districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                }
              </select>
            </fieldset>
            {/* address */}
            <fieldset className="fieldset mb-3">
              <label className="label">Receiver Address</label>
              <input type="text" {...register('receiverAddress')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Receiver Address" />
            </fieldset>
            {/* phone */}
            <fieldset className="fieldset mb-3">
              <label className="label">Receiver Phone No</label>
              <input type="tel" {...register('receiverPhone')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Receiver Phone No" />
            </fieldset>
          </div>
        </div>
        <input type="submit" value="Send Parcel" className='btn btn-primary text-black' />
      </form>
    </div>
  );
};

export default SendParcel;