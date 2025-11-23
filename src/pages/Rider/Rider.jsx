import React from 'react';
import riderImg from '../../assets/agent-pending.png'
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
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
  const riderRegion = useWatch({ control, name: 'region' });
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    const districts = regionDistricts.map(d => d.district);
    return districts;
  }

  const handleRiderApplication = (data) => {
    // console.log(data);
    axiosSecure.post('/riders', data)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Yoyr application has been submitted.",
            showConfirmButton: false,
            timer: 2000,
            text: "Be patient!",
          });
        }
      })
  }

  return (
    <div className='py-10'>
      <h2 className='text-4xl px-5 md:px-0 font-bold text-secondary'>Be a Rider</h2>
      <p className='py-2 text-gray-400 px-5 md:px-0 text-justify'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10'>
        <div className='w-full px-5'>
          <form onSubmit={handleSubmit(handleRiderApplication)}>
            <p className='text-2xl text-secondary pb-5'>Tell us about yourself</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

              {/* Column 1 */}
              <div>
                <fieldset className="fieldset mb-3">
                  <label className="label">Your Name</label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    {...register('name')}
                    className="input w-full outline-none focus:border-primary hover:border-primary"
                    placeholder="Your Name"
                  />
                </fieldset>

                <fieldset className="fieldset mb-3">
                  <label className="label">Driving License</label>
                  <input
                    type="text"
                    {...register('drivingLicense')}
                    className="input w-full outline-none focus:border-primary hover:border-primary"
                    placeholder="Driving License"
                  />
                </fieldset>

                <fieldset className="fieldset mb-3">
                  <legend className="fieldset-legend">Your Region</legend>
                  <select
                    {...register('region')}
                    defaultValue="Pick a Region"
                    className="select outline-none border-gray-300 w-full focus:border-primary"
                  >
                    <option disabled>Pick a Region</option>
                    {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                  </select>
                </fieldset>

                <fieldset className="fieldset mb-3">
                  <legend className="fieldset-legend">Your District</legend>
                  <select
                    {...register('district')}
                    defaultValue="Pick a District"
                    className="select outline-none border-gray-300 w-full focus:border-primary"
                  >
                    <option disabled>Pick a District</option>
                    {districtsByRegion(riderRegion)?.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </fieldset>
              </div>

              {/* Column 2 */}
              <div>
                <fieldset className="fieldset mb-3">
                  <label className="label">Your Email</label>
                  <input
                    type="text"
                    defaultValue={user?.email}
                    {...register('email')}
                    className="input w-full outline-none focus:border-primary hover:border-primary"
                    placeholder="Your Email"
                  />
                </fieldset>

                <fieldset className="fieldset mb-5">
                  <label className="label">NID Number</label>
                  <input
                    type="text"
                    {...register('nid')}
                    className="input w-full outline-none focus:border-primary hover:border-primary"
                    placeholder="NID Number"
                  />
                </fieldset>

                <fieldset className="fieldset mb-4">
                  <label className="label">Your Phone</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="input w-full outline-none focus:border-primary hover:border-primary"
                    placeholder="Phone Number"
                  />
                </fieldset>

                <fieldset className="fieldset mb-3">
                  <label className="label">Your Bike</label>
                  <input
                    type="text"
                    {...register('bike')}
                    className="input w-full outline-none focus:border-primary hover:border-primary"
                    placeholder="Bike Model"
                  />
                </fieldset>
              </div>

            </div>

            <input
              type="submit"
              value="Apply as a Rider"
              className='btn mt-5 btn-primary w-full text-black'
            />
          </form>
        </div>

        {/* Responsive Image */}
        <img
          src={riderImg}
          className='p-5 w-full max-w-sm mx-auto md:max-w-md'
          alt=""
        />
      </div>

    </div>
  );
};

export default Rider;