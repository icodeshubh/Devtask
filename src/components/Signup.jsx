import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('');
  
  const navigate = useNavigate(); 

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (fullName && phoneNumber && email && password) {
      
      navigate('/profile'); 
    } else {
      alert('Please fill all required fields!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Create your PopX account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name*</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone number*</label>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email address*</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password*</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Company name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter Company Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Are you an Agency?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={() => setIsAgency('yes')}
                  className="mr-1"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={() => setIsAgency('no')}
                  className="mr-1"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
