"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Both = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleSignupClick = () => {
    router.push('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="space-x-4">
        <button
          onClick={handleLoginClick}
          className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
        <button
          onClick={handleSignupClick}
          className="px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
        >
          Signup
        </button>
        
      </div>
    </div>
  );
};

export default Both;
