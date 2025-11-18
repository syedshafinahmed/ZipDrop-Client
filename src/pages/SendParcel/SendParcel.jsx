import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleSendParcel = (data) => {

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
            <fieldset className="fieldset mb-3">
              <label className="label">Sender Name</label>
              <input type="text" {...register('senderName')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Sender Name" />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <label className="label">Sender Address</label>
              <input type="text" {...register('senderAddress')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Sender Address" />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <label className="label">Sender Phone No</label>
              <input type="text" {...register('senderPhone')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Sender Phone No" />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <label className="label">Sender District</label>
              <input type="text" {...register('senderDistrict')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Sender District" />
            </fieldset>

          </div>
          {/* receiver */}
          <div>
            <h4 className="text-2xl text-secondary font-semibold mb-5">Receiver Details</h4>
            <fieldset className="fieldset mb-3">
              <label className="label">Receiver Name</label>
              <input type="text" {...register('receiverName')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Receiver Name" />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <label className="label">Receiver Address</label>
              <input type="text" {...register('receiverAddress')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Receiver Address" />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <label className="label">Receiver Phone No</label>
              <input type="text" {...register('receiverPhone')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Receiver Phone No" />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <label className="label">Receiver District</label>
              <input type="text" {...register('ReceiverDistrict')} className="input w-full outline-none focus:border-primary hover:border-primary" placeholder="Receiver District" />
            </fieldset>
          </div>
        </div>
        <input type="submit" value="Send Parcel" className='btn btn-primary text-black' />
      </form>
    </div>
  );
};

export default SendParcel;