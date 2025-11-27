import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router';
import Social from './Social/Social';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BeatLoader } from 'react-spinners';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { registerUser, updateUserProfile, loading, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleRegistration = (data) => {
    setLoading(true);
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);

        // store the image in form data
        const formData = new FormData();
        formData.append('image', profileImg);

        // send the photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
        axios.post(image_API_URL, formData)
          .then(res => {
            const photoURL = res.data.data.url;
            // create user in the databse
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: photoURL
            }
            axiosSecure.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log("user created in the database");
                }
              })
            // update user profile to firebase
            const userProfile = {
              displayName: data.name,
              photoURL: photoURL,
            }
            updateUserProfile(userProfile)
              .then(() => {
                setLoading(false);
                Swal.fire({
                  title: `Welcome, ${data.name}!`,
                  text: "Your account has been created successfully.",
                  icon: "success",
                  confirmButtonColor: "#CAEB66"
                });
                navigate(location?.state || '/');
              })
              .catch(error => {
                setLoading(false);
                Swal.fire({
                  title: "Profile Update Failed",
                  text: error.message,
                  icon: "error"
                });
              })
          })
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#CAEB66" />
      </div>
    );
  }

  return (
    <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <fieldset className="fieldset">
          <h1 className='text-2xl text-center font-bold py-3'>Create an Account</h1>

          {/* name */}
          <label className="label">Name</label>
          <input type="text" {...register('name', { required: true })} className="input w-full outline-none hover:border-primary hover:not-focus:border-primary focus:border-primary" placeholder="Your Name" />
          {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}

          {/* image  */}
          <label className="label">Photo</label>
          <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />
          {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}

          {/* email  */}
          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input w-full outline-none hover:border-primary hover:not-focus:border-primary focus:border-primary" placeholder="Your Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

          {/* password  */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:'",.<>/?]).+$/
          })} className="input w-full outline-none hover:border-primary hover:not-focus:border-primary focus:border-primary" placeholder="Password" />
          {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
          {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be atleast 6 characters long.</p>}
          {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must contain atleast one Uppercase, atleast one Lowercase, atleast one digit and atleast one special character.</p>}
          <Social></Social>
          <button className="btn btn-primary border-none text-black mt-4">Register</button>
          <p className='text-center pt-2'>Already have an account? <NavLink state={location.state} to='/login' className='text-secondary font-bold'>Login</NavLink></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;