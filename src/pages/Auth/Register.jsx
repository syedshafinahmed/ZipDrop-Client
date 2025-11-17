import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router';

const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <fieldset className="fieldset">
          <h1 className='text-2xl text-center font-bold py-3'>Create an Account</h1>
          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input w-full outline-none hover:border-primary hover:not-focus:border-primary focus:border-primary" placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

          <label className="label">Password</label>
          <input type="password" {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:'",.<>/?]).+$/
          })} className="input w-full outline-none hover:border-primary hover:not-focus:border-primary focus:border-primary" placeholder="Password" />
          {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
          {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be atleast 6 characters long.</p>}
          {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must contain atleast one Uppercase, atleast one Lowercase, atleast one digit and atleast one special character.</p>}

          <button className="btn btn-primary border-none text-black mt-4">Register</button>
          <p className='text-center pt-2'>Already have an account? <NavLink to='/login' className='text-secondary font-bold'>Login</NavLink></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;