import React from 'react'
import { FaRegUser} from "react-icons/fa";
import { HiMiniLockClosed } from "react-icons/hi2";
import { MdEmail } from 'react-icons/md';
import {Link} from "react-router-dom";

const login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('/media/b8.jpg')" }}>
      <form className='bg-black bg-opacity-40 max-w-xs text-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Sign Up</h1>
        <div className='mb-4 flex items-center border-b border-gray-300 py-2'>
          <FaRegUser className='text-gray-500 mr-3' />
          <input 
            type='text' 
            placeholder='Username' 
            className='bg-transparent w-full focus:outline-none'
            required
          />
        </div>
        <div className='mb-4 flex items-center border-b border-gray-300 py-2'>
          <MdEmail className='text-gray-500 mr-3' />
          <input 
            type='text' 
            placeholder='Email' 
            className='bg-transparent w-full focus:outline-none'
            required
          />
        </div>
        <div className='mb-4 flex items-center border-b border-gray-300 py-2'>
          <HiMiniLockClosed className='text-gray-500 mr-3' />
          <input 
            type='password' 
            placeholder='Password' 
            className='bg-transparent w-full focus:outline-none'
            required
          />
        </div>
        <div className='mb-4 flex items-center border-b border-gray-300 py-2'>
          <HiMiniLockClosed className='text-gray-500 mr-3' />
          <input 
            type='confirm-password' 
            placeholder='Confirm Password' 
            className='bg-transparent w-full focus:outline-none'
            required
          />
        </div>
        <div className='mb-6 flex items-center justify-between'>
          <label className='flex items-center text-sm'>
            <input type='checkbox' className='mr-2' /> I agree to the terms & conditions.
          </label>
        </div>
        <Link to="/registerform">
        <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors'>Register</button>
        </Link>
        <div className='mt-6 text-center'>
          <p className='text-sm'>Already have an account? <a href='/login' className='text-blue-500 hover:underline'>Login</a></p>
        </div>
      </form>
    </div>
  )
}

export default login;
