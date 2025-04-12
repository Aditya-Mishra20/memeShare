import React from "react";
import { signInWithGoogle } from "../firebase/setup";
import { useNavigate } from 'react-router-dom';

const Signinwithgoogle = () => {
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      const user = res.user;
      console.log("user_info", user);
      if(user.emailVerified){
        navigate('/')
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      console.log(error);
    }
  };
  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handleSignIn}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        <span className="text-sm text-gray-700">Sign in with Google</span>
      </button>
    </div>
  );
};

export default Signinwithgoogle;
