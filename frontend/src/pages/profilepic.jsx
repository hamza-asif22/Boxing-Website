import React, { useState } from 'react';

const ProfilePictureUploader = () => {
  const [image, setImage] = useState('https://bootdey.com/img/Content/avatar/avatar7.png');
  const [preview, setPreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='relative p-8 flex items-center justify-center'>
      <img 
        src={preview || image} 
        alt='Avatar' 
        className='w-64 h-64 rounded-full border-4 border-gray-300'
      />
      <label className='absolute bottom-2 right-2'>
        <input 
          type='file' 
          accept='image/*' 
          onChange={handleImageChange} 
          className='hidden' // Hide the actual file input
        />
        <img 
          src='/media/icon1.png' // Replace with the actual path to your PNG icon
          alt='Upload Icon'
          className='w-10 h-10 cursor-pointer bg-white p-2 rounded-full border-2 border-gray-300'
        />
      </label>
    </div>
  );
};


export default ProfilePictureUploader;
