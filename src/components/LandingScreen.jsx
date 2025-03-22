import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 h-[500px] my-10 max-w-sm w-full text-center">
          <div className='absolute text-center top-15 left-1 p-10'>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to PopX</h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button onClick={()=>navigate("/signup")} className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full w-full mb-4 hover:bg-purple-700 transition duration-200">
              Create Account
            </button>
            <p className="text-gray-600 text-sm sm:text-base">
              Already Registered?{' '}
              <span onClick={()=>navigate("/login")} className="text-purple-600 font-semibold cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
