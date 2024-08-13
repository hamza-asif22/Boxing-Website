import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Samantha Sarah',
    position: 'Founder & CEO',
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    name: 'Nazrul Islam',
    position: 'UI Designer',
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar7.png',
  },
  {
    name: 'Riyadh Khan',
    position: 'Developer',
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar6.png',
  },
  {
    name: 'Niloy Islam',
    position: 'Marketing Manager',
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar2.png',
  },
];

const TeamSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-[#eee]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">
          Our Creative <span className="text-blue-600">Team</span>
        </h3>
        <p className="text-gray-600">
          Appland is completely creative, lightweight, clean & super responsive app landing page.
        </p>
        <div className="w-16 mx-auto border-b-2 border-blue-600 my-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-lg mb-12 transition-transform transform hover:scale-105">
            <div className="relative bg-blue-600 p-8 rounded-t-lg overflow-hidden">
              <img src={member.imgSrc} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="absolute bottom-0 right-4 text-black flex space-x-4 z-10 group">
                <a href="#" className="text-lg hover:text-white"><FaFacebook /></a>
                <a href="#" className="text-lg hover:text-white"><FaTwitter /></a>
                <a href="#" className="text-lg hover:text-white"><FaLinkedin /></a>
              </div>
              <div className="absolute bottom-[-45px] left-[-25%] w-[150%] h-20 bg-white transform rotate-[-15deg] z-0"></div>
            </div>
            <div className="p-8 text-right bg-white rounded-b-lg relative">
              <div className="absolute top-3 right-8 w-12 h-1 bg-blue-600 z-10"></div>
              <h6 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h6>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
