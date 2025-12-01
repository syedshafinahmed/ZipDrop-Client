import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { BeatLoader } from 'react-spinners';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Social = () => {
  const { signInGoogle, loading, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleSignIn = () => {
    setLoading(true);
    signInGoogle()
      .then(result => {
        setLoading(false);
        const user = result.user;
        const name = user.displayName || "User";

        Swal.fire({
          title: "Login Successful!",
          text: `Welcome Back, ${name}!`,
          icon: "success",
          confirmButtonColor: "#CAEB66"
        });


        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
        }
        axiosSecure.post('/users', userInfo)
          .then(res => {
            console.log('user data has been stored', res.data);
            navigate(location?.state || '/');
          })
      })
      .catch(error => {
        setLoading(false);
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#d33"
        });
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
    <div>
      <button onClick={handleSignIn} className="btn bg-base-200 w-full border-primary text-black mt-5">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Continue with Google
      </button>
    </div>
  );
};

export default Social;