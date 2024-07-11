import React from 'react'
import { FaRegUser, FaLock } from "react-icons/fa";

const login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('/media/b6.jpg')" }}>
      <form className='bg-black bg-opacity-40 max-w-xs text-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
        <div className='mb-4 flex items-center border-b border-gray-300 py-2'>
          <FaRegUser className='text-gray-500 mr-3' />
          <input 
            type='text' 
            placeholder='Username or Email' 
            className='bg-transparent w-full focus:outline-none'
            required
          />
        </div>
        <div className='mb-4 flex items-center border-b border-gray-300 py-2'>
          <FaLock className='text-gray-500 mr-3' />
          <input 
            type='password' 
            placeholder='Password' 
            className='bg-transparent w-full focus:outline-none'
            required
          />
        </div>
        <div className='mb-6 flex items-center justify-between'>
          <label className='flex items-center text-sm'>
            <input type='checkbox' className='mr-2' /> Remember Me
          </label>
          <a href='#' className='text-sm text-blue-500 hover:underline'>Forgot Password?</a>
        </div>
        <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors'>Login</button>
        <div className='mt-6 text-center'>
          <p className='text-sm'>Don't have an account? <a href='/signup' className='text-blue-500 hover:underline'>Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default login;
