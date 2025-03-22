import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 


  const handleLogin = (e) => {
    e.preventDefault(); 

 
    if (email && password) {
      
      navigate('/profile'); 
    } else {
      
      alert('Please enter both email and password!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Signin to your PopX account</h2>
        <p className="text-gray-600 mb-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button
            type="submit"
            className="bg-gray-400 text-white font-bold py-2 rounded focus:outline-none w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
