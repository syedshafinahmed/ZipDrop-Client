import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router';

const Login = () => {
  const { signInUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          <h1 className='text-2xl text-center font-bold py-3'>Welcome Back</h1>
          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input w-full outline-none hover:border-primary hover:not-focus:border-primary focus:border-primary" placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

          <label className="label">Password</label>
          <input type="password" {...register('password', {
            required: true,
            minLength: 6
          })} className="input w-full outline-none hover:border-primary hover:not-focus:border-primary focus:border-primary" placeholder="Password" />
          {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must contain atleast 6 charcters</p>}

          <div><a className="link link-hover">Forgot password?</a></div>


          <button className="btn btn-primary border-none text-black mt-4">Login</button>
          <p className='text-center pt-2'>Don't have an account? <NavLink to='/register' className='text-secondary font-bold'>Register</NavLink></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;