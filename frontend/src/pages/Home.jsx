import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
<div>
  <section className="relative h-screen overflow-hidden">
    <video autoPlay muted loop className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2">
      <source src="/media/v1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-2xl text-blue-500 font-bold hover:text-blue-700 px-4">Boxers Hub</h1>
        <div className="flex-1 flex justify-center space-x-14">
          <a href="#work-section" className="text-lg text-blue-400 hover:text-blue-700">
            Profile
          </a>
          <a href="#Pricing" className="text-lg text-blue-400 hover:text-blue-700">
            Pricing
          </a>
          <Link to="/contact" className="text-lg text-blue-400 hover:text-blue-700">
            Contact Us
          </Link>
          <a href="#about" className="text-lg text-blue-400 hover:text-blue-700">
            About Us
          </a>
        </div>
      </div>
    </header>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
      <h1 className="text-5xl py-2">Boxing Mania</h1>
      <p className="px-4 py-4 max-w-5xl text-center">
        Welcome to Boxing World, your ultimate destination for mastering the art of boxing. 
        Whether you're a beginner looking to start your journey or a seasoned fighter aiming 
        to hone your skills, we provide the resources and support you need to achieve your 
        goals. Our platform offers expert training guides, tips from professional boxers, 
        and a community of enthusiasts to keep you motivated. 
        Stay updated with the latest news, upcoming events, and exclusive interviews. 
        Join us today and become an expert in the world of boxing. 
        Your path to greatness starts here!
      </p>
      <h1 className="py-4">LET'S BEGIN</h1>
    </div>
  </section>
</div>


  


   </div>
  );
};

export default Home;
