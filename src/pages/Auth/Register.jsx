import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleRegistration = () => {

  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">

          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

          <label className="label">Password</label>
          <input type="password" {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:'",.<>/?]).+$/
          })} className="input" placeholder="Password" />
          {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
          {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be atleast 6 characters long.</p>}
          {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must contain atleast one Uppercase, atleast one Lowercase, atleast one digit and atleast one special character.</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;