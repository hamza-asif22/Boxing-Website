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
    <div
      className="min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/media/bg2.jpg')",
        backgroundSize: "100% auto",
      }}
    >
      <section className="relative h-screen overflow-hidden">
        <header className="absolute top-0 left-0 w-full z-20 text-white ">
          <div className=" mx-auto flex items-center justify-between py-4">
            <h1 className="text-2xl text-blue-500 font-semibold hover:text-blue-700 px-4 flex items-center">
              <img
                src="/media/boxing-ico.gif"
                alt="Boxing Icon"
                className="w-9 h-8 mr-2"
              />
              Boxers Hub
            </h1>

            <div className="flex-1 flex justify-end space-x-10 pr-5">
              <Link
                to="/login"
                className="text-lg text-blue-400 hover:text-blue-700"
              >
                Log In
              </Link>
              <Link
                to="/pricing"
                className="text-lg text-blue-400 hover:text-blue-700"
              >
                Training Program
              </Link>
              <Link
                to="/trainers"
                className="text-lg text-blue-400 hover:text-blue-700"
              >
                Trainers
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white ">
          <h1 className="text-5xl py-4 font-bold mb-9">
            <i>Train Like a Champion</i>
          </h1>
          <p className="px-4 py-6 max-w-5xl text-xl mb-9 text-center">
            Unlock your potential with expert boxing training and elevate your
            skills to new heights in the ring. Join a community of champions
            dedicated to success and experience the support and motivation
            needed to achieve your goals. With top-notch coaching and a
            commitment to excellence, you're on the path to becoming your best.{" "}
          </p>
          <div>
            <a href="#2page">
              <button className="py-4 px-4 flex border-2 shadow-lg border-gradient-to-r  bg-transparent hover:bg-blue-200 relative rounded-3xl align-bottom ">
                Check Out The Website
                <img
                  src="/media/down-arr.gif"
                  alt="Down Arrow"
                  className="w-7 h-6"
                />
              </button>
            </a>
          </div>
        </div>
      </section>

      <section
        id="2page"
        className="bg-slate-300 bg-cover bg-center bg-no-repeat"
      >
        <div className="py-4 px-4 ">
          <h1 className="font-bold text-5xl px-9 py-8 leading-tight  text-center flex align-top justify-center">
            We are enhancing YOUR experience through our team's accomplishments
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 text-center">
              {/* Card 1 */}
              <div className="relative max-w-xs rounded-3xl shadow-lg p-6 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 bg-transparent bg-opacity-50 hover:bg-blue-100 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[url('/media/bg3.jpg')] bg-cover bg-no-repeat group">
                <h1 className="font-semibold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group-hover:text-white transition-colors duration-300 ease-in-out">16</h1>
                <div className="mt-16">
                  <h1 className="text-3xl text-gray-700 font-semibold font-serif">
                    World best Coaches and Ex Boxers are hired for our members.
                  </h1>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative max-w-xs rounded-3xl shadow-lg p-6 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 bg-transparent bg-opacity-50 hover:bg-blue-100 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[url('/media/bg3.jpg')] bg-cover bg-no-repeat group">
                <h1 className="font-semibold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group-hover:text-white transition-colors duration-300 ease-in-out">
                  300+
                </h1>
                <div className="mt-16">
                  <h1 className="text-3xl text-gray-700 font-semibold font-serif">
                    Training videos and tutorials made by our experts.
                  </h1>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative max-w-xs rounded-3xl shadow-lg p-6 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 bg-transparent bg-opacity-50 hover:bg-blue-100 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[url('/media/bg3.jpg')] bg-cover bg-no-repeat group">
                <h1 className="font-semibold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group-hover:text-white transition-colors duration-300 ease-in-out">24/7</h1>
                <div className="mt-16">
                  <h1 className="text-3xl text-gray-700 font-semibold font-serif">
                    Customer Support available for the members.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-200 bg-cover bg-center bg-no-repeat">
        <div className="h-4 rounded-t-lg"></div>
        <h1 className="text-5xl text-center font-semibold">
          Top 4 Boxing Styles in the World
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
            <a href="https://www.facebook.com/UFC/" className="text-white mx-2">
              <i className="fab fa-facebook text-white text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/espnmma?igsh=MXJ6Y202b3g0YmQ2Nw=="
              className="text-white mx-2"
            >
              <i className="fab fa-instagram text-white text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              className="text-white mx-2"
            >
              <i className="fab fa-twitter text-white text-2xl"></i>
            </a>
            <a href="https://www.youtube.com/@ufc" className="text-white mx-2">
              <i className="fab fa-youtube text-white text-2xl"></i>
            </a>
          </div>
        </div>
        <p className="text-center py-4">
          © 2024 Boxing Mania. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
