import React, { useState } from 'react';
import ProfilePictureUploader from './profilepic';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    birthday: '4th April 1998',
    age: '22 Yr',
    residence: 'Canada',
    address: 'California, USA',
    email: 'info@domain.com',
    phone: '820-885-3321',
    skype: 'skype.0404',
    membership:'Premium'
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // State for progress
  const [progress, setProgress] = useState(20); // Example progress value

  const handleEditClick = () => setEditing(!editing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Implement save logic here if necessary
  };

  return (
    <div className='min-h-screen p-8 text-gray-700 ' 
    style={{
      backgroundImage: "url('/media/black1.jpg')",
      backgroundPosition: "center",
    }}>
      <header className="absolute top-0 left-0 w-full z-20 text-white">
      <div className="mx-auto flex items-center justify-between py-4">
        <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-pink-500 font-semibold hover:text-yellow-50 px-4 flex items-center">
          <img
            src="/media/boxing-ico.gif"
            alt="Boxing Icon"
            className="w-9 h-8 mr-2"
          />
          <Link to="/home">Ring Warriors</Link>
        </h1>

        <div className="flex-1 flex justify-center font-medium space-x-10 pr-5 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-pink-500">
          <Link to="/home" className="text-lg hover:text-yellow-50">
            Home
          </Link>
          <Link to="/contact" className="text-lg hover:text-yellow-50">
            Contact Us
          </Link>
        </div>

        <div className="relative flex justify-end px-9 font-medium bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-400 to-pink-500">
  <button
    onClick={toggleDropdown}
    className="text-lg hover:text-blue-700 flex items-center"
  >
    <img
      src="/media/icon4.png"
      alt="Menu Icon"
      className="w-6 h-6"
    />
    {/*<svg
      className={`ml-2 w-4 h-4 transition-transform duration-200 ${
        isDropdownOpen ? 'transform rotate-180' : ''
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>*/}
  </button>
  {isDropdownOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
      <Link
        to="/profile"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Profile
      </Link>
      <Link
        to="/videos"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Videos
      </Link>
      <Link
        to="/live-session"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Live Session
      </Link>
      <Link
        to="/settings"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        My Purchase
      </Link>
      <Link
        to="/login"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Log Out
      </Link>
    </div>
  )}
</div>

      </div>
    </header>

    
      <section className='bg-gray-500 mt-12 rounded-xl py-12' id='about'>
      <h1 className='text-4xl font-semibold text-center mb-8 text-blue-900'>Account</h1>
        <div className='container mx-auto flex flex-wrap lg:flex-nowrap'>
          <div className='lg:w-1/2 p-8'>
            <div className='bg-yellow-50 p-6 rounded-lg shadow-md'>
              <h3 className='text-3xl font-bold mb-4 text-blue-900'>Personal Info</h3>
              <div className='flex flex-wrap pt-2'>
                <div className='w-full lg:w-1/2 p-2'>
                  {['birthday', 'age', 'residence', 'address'].map((field) => (
                    <div className='mb-4' key={field}>
                      <label className='block text-blue-900 font-semibold capitalize'>{field}</label>
                      {editing ? (
                        <input
                          type='text'
                          name={field}
                          value={profileData[field]}
                          onChange={handleChange}
                          className='text-gray-600 w-full p-2 border border-gray-300 rounded'
                        />
                      ) : (
                        <p className='text-gray-600'>{profileData[field]}</p>
                      )}
                    </div>
                  ))}
                </div>
                <div className='w-full lg:w-1/2 p-2'>
                  {['email', 'phone', 'skype','membership'].map((field) => (
                    <div className='mb-4' key={field}>
                      <label className='block text-blue-900 font-semibold capitalize'>{field}</label>
                      {editing ? (
                        <input
                          type='text'
                          name={field}
                          value={profileData[field]}
                          onChange={handleChange}
                          className='text-gray-600 w-full p-2 border border-gray-300 rounded'
                        />
                      ) : (
                        <p className='text-gray-600'>{profileData[field]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={editing ? handleSaveClick : handleEditClick}
                className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
              >
                {editing ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
          <div className='lg:w-1/2 p-8 flex items-center justify-center'>
            <ProfilePictureUploader/>
          </div>
        </div>
        <div className='container mx-auto mt-12'>
          <div className='flex flex-wrap'>
            <div className='w-1/2 lg:w-1/4 text-center p-4'>
              <h6 className='text-3xl font-semibold mb-2 text-blue-900'>50+</h6>
              <p className='text-gray-600 font-semibold'>Videos Access</p>
            </div>
            <div className='w-1/2 lg:w-1/4 text-center p-4'>
              <h6 className='text-3xl font-semibold mb-2 text-blue-900'>10</h6>
              <p className='text-gray-600 font-semibold'>Live Session/Week</p>
            </div>
            <div className='w-1/2 lg:w-1/4 text-center p-4'>
              <h6 className='text-3xl font-semibold mb-2 text-blue-900'>25</h6>
              <p className='text-gray-600 font-semibold'>Achievements</p>
            </div>
            <div className='w-1/2 lg:w-1/4 text-center p-4'>
              <div className='mt-4'>
                <div className='relative'>
                  
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-gray-600 font-semibold'><br/>{progress}%</span>
                  </div>
                  
                  <div className='h-2 bg-gray-300 rounded-full'>
                    <div
                      className='h-full bg-blue-600 rounded-full'
                      style={{ width: `${progress}%` }}
                    >
                      <br/>
                      
                    </div>
                    <h1 className='py-5 text-gray-600 font-semibold'>Progress</h1>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
