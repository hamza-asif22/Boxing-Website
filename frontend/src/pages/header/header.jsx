import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20 text-white ">
    <div className=" mx-auto flex items-center justify-between py-4">
      <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-pink-500 font-semibold hover:text-yellow-50 px-4 flex items-center">
       <img
          src="/media/boxing-ico.gif"
          alt="Boxing Icon"
          className="w-9 h-8 mr-2"
        />
        <Link to="/home">
        Ring Warriors
        </Link>
      </h1>

      <div className="flex-1 flex justify-center font-medium space-x-10 pr-5 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-pink-500 ">
        <Link
          to="/pricing"
          className="text-lg hover:text-yellow-50 "
        >
          Training Program
        </Link>
        <Link
          to="/trainers"
          className="text-lg hover:text-yellow-50"
        >
          Trainers
        </Link>
        <Link
          to="/contact"
          className="text-lg hover:text-yellow-50 "
        >
          Contact Us
        </Link>
        
      </div>
      <div className="flex justify-end px-9 font-medium bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-pink-500">
        <Link
          to="/login"
          className="text-lg  hover:text-blue-700"
        >
          <button className=" rounded-lg py-1 px-3 hover:text-yellow-50">
          Log In
          </button>
        </Link>
        <Link
          to="/signup"
          className="text-lg  hover:text-blue-700"
        >
          <button className=" border-2 rounded-lg py-1 px-3 hover:text-yellow-50">
          Register
          </button>
        </Link>
        </div>
    </div>
  </header>
  )
}

export default Header;