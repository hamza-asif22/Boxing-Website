import React from 'react'

 const RegisterForm = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* General Information */}
          <div>
            <h3 className="text-3xl font-semibold mb-5 text-blue-600">General Information</h3>
            <div className="space-y-4">
              {/* Select Title */}
              <select className="block w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0">
                <option value="1">Title</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <input
                  type="text"
                  placeholder="First Name"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                />
                {/* Last Name */}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                />
              </div>

              {/* Position Select */}
              <select className="block w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0">
                <option value="1">Position</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </select>

              {/* Position Input */}
              <input
                type="text"
                placeholder="Position"
                className="block w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Arena */}
                <input
                  type="text"
                  placeholder="Business Arena"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                />
                {/* Employees Select */}
                <select className="block w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0">
                  <option value="1">Employees</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-indigo-600 p-5 rounded-2xl text-white">
            <h3 className="text-3xl font-semibold mb-5">Contact Details</h3>
            <div className="space-y-4">
              {/* Street + Nr */}
              <input
                type="text"
                placeholder="Street + Nr"
                className="block w-full px-4 py-3 rounded-lg bg-indigo-500 text-white placeholder-white focus:border-indigo-300 focus:bg-indigo-700 focus:ring-0"
              />
              {/* Additional Information */}
              <input
                type="text"
                placeholder="Additional Information"
                className="block w-full px-4 py-3 rounded-lg bg-indigo-500 text-white placeholder-white focus:border-indigo-300 focus:bg-indigo-700 focus:ring-0"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Zip Code */}
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="block w-full px-4 py-3 rounded-lg bg-indigo-500 text-white placeholder-white focus:border-indigo-300 focus:bg-indigo-700 focus:ring-0"
                />
                {/* Place */}
                <input
                  type="text"
                  placeholder="Place"
                  className="block w-full px-4 py-3 rounded-lg bg-indigo-500 text-white placeholder-white focus:border-indigo-300 focus:bg-indigo-700 focus:ring-0"
                />
              </div>

              {/* Country */}
              <input
                type="text"
                placeholder="Country"
                className="block w-full px-4 py-3 rounded-lg bg-indigo-500 text-white placeholder-white focus:border-indigo-300 focus:bg-indigo-700 focus:ring-0"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Code + */}
                <input
                  type="text"
                  placeholder="Code +"
                  className="block w-full px-4 py-3 rounded-lg bg-indigo-500 text-white placeholder-white focus:border-indigo-300 focus:bg-indigo-700 focus:ring-0"
                />
                {/* Phone Number */}
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="block w-full px-4 py-3 rounded-lg bg-indigo-500 text-white placeholder-white focus:border-indigo-300 focus:bg-indigo-700 focus:ring-0"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="block w-full px-4 py-3 rounded-lg bg-indigo-500 text-white placeholder-white focus:border-indigo-300 focus:bg-indigo-700 focus:ring-0"
              />

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  id="flexCheckDefault"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 bg-indigo-500 border-transparent rounded focus:ring-0"
                />
                <label htmlFor="flexCheckDefault" className="ml-2 text-sm">
                  I do accept the Terms and Conditions of your site.
                </label>
              </div>

              {/* Register Button */}
              <button className="mt-4 w-full py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RegisterForm;
