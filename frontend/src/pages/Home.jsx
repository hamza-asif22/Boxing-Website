import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
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
            <div className="container mx-auto flex items-center justify-between py-4">
              <h1 className="text-2xl text-blue-500 font-bold hover:text-blue-700 px-4">
                Boxers Hub
              </h1>
              <div className="flex-1 flex justify-center space-x-14">
                <Link to="/profile" className="text-lg text-blue-400 hover:text-blue-700">
                  Profile
                </Link>
                <Link to="/pricing" className="text-lg text-blue-400 hover:text-blue-700">
                  Pricing
                </Link>
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
              Welcome to Boxing World, your ultimate destination for mastering the art of
              boxing. Whether you're a beginner looking to start your journey or a seasoned
              fighter aiming to hone your skills, we provide the resources and support you
              need to achieve your goals. Our platform offers expert training guides, tips
              from professional boxers, and a community of enthusiasts to keep you
              motivated. Stay updated with the latest news, upcoming events, and exclusive
              interviews. Join us today and become an expert in the world of boxing. Your
              path to greatness starts here!
            </p>
            <h1 className="py-4">LET'S BEGIN</h1>
          </div>
        </section>
      </div>

      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/media/b1.jpg')` }}>
  <div className="h-40 rounded-t-lg"></div>
  <h1 className="text-xl text-center font-bold">Learn Different Boxing Styles</h1>
  <div className="flex flex-wrap justify-center">
    {/* Card 1 */}
    <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 text-center">The Swarmer</h2>
      <img
        src="/media/swar.jpg"
        alt="The Swarmer"
        className="w-full h-40 object-cover rounded-t-lg"
      />
    </div>

    {/* Card 2 */}
    <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 text-center">The Out-Boxer</h2>
      <img
        src="/media/outb.jpg"
        alt="The Out-Boxer"
        className="w-full h-40 object-cover rounded-t-lg"
      />
    </div>

    {/* Card 3 */}
    <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 text-center">The Slugger</h2>
      <img
        src="/media/slu2.jpg"
        alt="The Slugger"
        className="w-full h-40 object-cover rounded-t-lg"
      />
    </div>

    {/* Card 4 */}
    <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 w-80 md:w-96 border-4 border-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-200 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 text-center">The Boxer-Puncher</h2>
      <img
        src="/media/bp.jpg"
        alt="The Boxer-Puncher"
        className="w-full h-40 object-cover rounded-t-lg"
      />
    </div>
  </div>
</div>



    </div>
  );
};

export default Home;
