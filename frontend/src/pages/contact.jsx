import React from 'react';

const Contact = () => {
  return (
    <div className='min-h-screen'>
      <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url('/media/b2.jpg')` }}>
        <div className='text-center'>
          <h1 className='text-5xl text-white py-6'>Boxers Hub</h1>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          {/* Card 1 */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h2 className="text-xl font-bold text-gray-800">Email</h2>
            <p className="text-lg text-gray-600">info@boxershub.com</p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h2 className="text-xl font-bold text-gray-800">Contact Number</h2>
            <p className="text-lg text-gray-600">+1 123-456-7890</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
