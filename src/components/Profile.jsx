import React from 'react';
import pic from '../../public/pic.png';
import logo from '../../public/logo.png';

const Profile = () => {
  return (
    <>
    
    <div>
        <h1 className='className="flex items-center justify-center p-10 bg-gray-100 text-xl font-bold w-full'>
        Account Settings
        </h1>

    </div>
    <div className="flex items-center justify-center  w-full">
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        {/* <h2 className="text-xl font-bold mb-4 w-full">Account Settings</h2> */}
        <div className="flex items-center mb-4">
            <div className=' relative'>

            
            <img className='absolute bottom-0 right-0' src={logo} alt="" />
          <img 
            src={pic}
            alt="Profile" 
            className="rounded-full border-2 border-gray-300"
          />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Marry Doe</h3>
            <p className="text-gray-600">Marry@gmail.com</p>
          </div>
        </div>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </div>
    </div>
    </>
  );
}

export default Profile;