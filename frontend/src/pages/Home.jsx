import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading time of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <p className="text-xl font-bold text-blue-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/media/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <header className="absolute top-0 left-0 w-full z-20">
          <div className=" mx-auto flex items-center justify-between py-4">
            <h1 className="text-2xl text-blue-500 font-bold hover:text-blue-700 px-4">
              Boxers Hub
            </h1>
            <div className="flex-1 flex justify-end space-x-10 pr-5">
              <Link
                to="/login"
                className="text-lg text-blue-400 hover:text-blue-700"
              >
                Profile
              </Link>
              <Link
                to="/pricing"
                className="text-lg text-blue-400 hover:text-blue-700"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-lg text-blue-400 hover:text-blue-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </header>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className="text-5xl py-2">Boxing Mania</h1>
          <p className="px-4 py-4 max-w-5xl text-center">
            Welcome to Boxing World, your ultimate destination for mastering the
            art of boxing. Whether you're a beginner looking to start your
            journey or a seasoned fighter aiming to hone your skills, we provide
            the resources and support you need to achieve your goals. Our
            platform offers expert training guides, tips from professional
            boxers, and a community of enthusiasts to keep you motivated. Stay
            updated with the latest news, upcoming events, and exclusive
            interviews. Join us today and become an expert in the world of
            boxing. Your path to greatness starts here!
          </p>
          <h1 className="py-4">LET'S BEGIN</h1>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/media/b1.jpg')` }}
      >
        <div className="h-40 rounded-t-lg"></div>
        <h1 className="text-xl text-center font-bold">
          Learn Different Boxing Styles
        </h1>
        <div className="flex flex-wrap justify-center">
          <Link to="/swarmer">
            <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                The Swarmer
              </h2>
              <img
                src="/media/swar.jpg"
                alt="The Swarmer"
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </div>
          </Link>

          <Link to="/outboxer">
            <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                The Out-Boxer
              </h2>
              <img
                src="/media/outb.jpg"
                alt="The Out-Boxer"
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </div>
          </Link>

          <Link to="/slugger">
            <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                The Slugger
              </h2>
              <img
                src="/media/slu2.jpg"
                alt="The Slugger"
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </div>
          </Link>

          <Link to="/boxerpunch">
            <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                The Boxer-Puncher
              </h2>
              <img
                src="/media/bp.jpg"
                alt="The Boxer-Puncher"
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </div>
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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

export default Home;
