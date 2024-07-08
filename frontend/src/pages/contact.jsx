import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url('/media/b2.jpg')` }}>
        <div className="text-center">
          <Link to="/Home">
            <h1 className="text-5xl text-white py-6">Boxers Hub</h1>
          </Link>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          {/* Contact Info Card */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Info</h2>
            <h2 className="text-xl font-bold mt-4">Email</h2>
            <a href='mailto:info@boxershub.com' className="text-lg text-gray-600 hover:underline">info@boxershub.com</a>

            <h2 className="text-xl font-bold mt-4">Contact Number</h2>
            <a href='tel:+11234567890' className="text-lg text-gray-600 hover:underline">+1 123-456-7890</a>
          </div>

          {/* Contact Form Card */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <form action="https://formspree.io/f/xayrwedb" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Get in touch
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className=" mx-auto py-8 px-4">
        <div className="flex justify-center mb-8">
            <a href="#" className="text-white mx-2">
              <i className="fab fa-facebook text-white text-2xl"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-instagram text-white text-2xl"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-twitter text-white text-2xl"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-google-plus text-white text-2xl"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-youtube text-white text-2xl"></i>
            </a>
          </div>
          <div className="flex justify-center mb-4">
            <ul className="flex">
              <li className="mx-4">
                <a href="#" className="text-white">
                  News
                </a>
              </li>
              <li className="mx-4">
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li className="mx-4">
                <a href="#" className="text-white">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center py-4">
          © 2023 Boxing Mania. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
