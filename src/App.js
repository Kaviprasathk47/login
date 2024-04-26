 
import React from 'react';
import { FaUser, FaLock, FaGoogle } from 'react-icons/fa'; // Import icons from react-icons library

const SignInForm = () => {
  return (
    <form className="space-y-4 w-full">
      <div className="flex flex-col">
        <label htmlFor="userId" className="sr-only">User ID</label>
        <div className="relative">
          <input
            type="text"
            id="userId"
            name="userId"
            placeholder="Enter your User ID"
            className="border rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out hover:border-green-500 w-full"
          />
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="sr-only">Password</label>
        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            className="border rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out hover:border-green-500 w-full"
          />
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      <button
        type="submit"
        className="bg-blue-700 text-white rounded-md px-4 py-2 border border-blue-500 hover:shadow-lg hover:border-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full mb-4 cursor-pointer transform transition-transform hover:scale-105"
      >
        Sign In
      </button>
      <button
        type="submit"
        className="bg-blue-700 text-white rounded-md px-4 py-2  hover:shadow-lg hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 w-full mb-4 cursor-pointer transform transition-transform hover:scale-105"
      >
        <span className="flex items-center justify-center">
          <FaGoogle className="mr-2" />
          Sign in with Google
        </span>
      </button>
    </form>
  );
};

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gradient-multicolor">
      <link rel="icon" href="imag.jpg" />
      <title>BAPS Login</title>

      <style >{`
        .bg-gradient-multicolor {
          background: linear-gradient(
           45deg,
           #ff8e9e 0%,  
           #ffc3d1 10%,  /* Lighter pink */
           #e0f2f1 20%,  /* Pale blue */
           #b2f5ea 30%,  /* Light turquoise */
           #e8f8f5 40%, /* Very light blue */
           #e5f1fe 50%, /* Light lavender */
           #f3f9fe 60%, /* Pale blue */
           #fbfcff 70%, /* Very light blue */
           #fff4f5 80%, /* Light pink */
           #ffebe6 90%,  /* Light peach */
           #ff8e9e 100%
          );
          background-size: 1000% 200%;
          animation: gradientAnimation 30s ease infinite;
        }
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          10% {
            background-position: 10% 50%;
          }
          20% {
            background-position: 20% 50%;
          }
          30% {
            background-position: 30% 50%;
          }
          40% {
            background-position: 40% 50%;
          }
          50% {
            background-position: 50% 50%;
          }
          60% {
            background-position: 60% 50%;
          }
          70% {
            background-position: 70% 50%;
          }
          80% {
            background-position: 80% 50%;
          }
          90% {
            background-position: 90% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        
      `}</style>

      <main className="flex items-center justify-center w-full flex-1 px-20 text-center relative">
        {/* Right-hand side content */}
        <div className="absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl bg-white flex flex-col items-center justify-center w-full max-w-md px-12 py-16 space-y-8 hover:shadow-md">
          <div className="text-left font-bold text-gray-700 mb-4">
            <span className="text-orange-500">B</span> <span className="text-gray-200">A</span> <span className="text-gray-500">P</span> <span className="text-green-500">S</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-700">
            Sign-In
          </h2>
          <SignInForm />
        </div>
      </main>
    </div>
  );
};

export default Page;
