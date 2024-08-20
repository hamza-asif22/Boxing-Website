import React from "react";
import CountrySelect from "./styles/country";
import GenderSelection from "./styles/gender";

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-4xl w-auto space-y-8 min-h-screen bg-no-repeat bg-cover bg-fixed bg-gray-700 p-10 rounded-2xl shadow-xl"
        style={{
          backgroundImage: "url('/media/black4.jpg')",
          backgroundPosition: "center",
        }}
      >
        {/* General Information */}
        <section>
          <h3 className="text-3xl text-center font-semibold mb-5 text-white">
            <i>General Information</i>
          </h3>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
              />
              <input
                type="text"
                placeholder="Middle Name"
                className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
              />
            </div>
            <GenderSelection />
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/*<select className="block w-40  mt-4 mb-4 bg-gray-400 text-white py-1 px-2 rounded-lg border-transparent focus:ring-0 focus:bg-gray-500 focus:text-white">
                  <option value="" disabled selected hidden>Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>*/}

              <CountrySelect />
              <input
                type="number"
                placeholder="Age"
                className="block w-20 px-2  mt-4 mb-4 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
              />
            </div>
          </div>

          <h3 className="text-3xl text-center text-white font-semibold mb-5">
            <i>Contact Details</i>
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Address"
              className="block w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
            />
            <input
              type="text"
              placeholder="Additional Information"
              className="block w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Zip Code"
                className="block w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="block w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
              />
            </div>

            <input
              type="email"
              placeholder="Your Email"
              className="block w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-300 focus:border-black focus:ring-0"
            />

            <section>
              <h1 className="text-3xl text-center text-white font-semibold mb-5">
                <i>Payement Details</i>
              </h1>
            </section>

            <button className="mt-4 w-full py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Submit
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterForm;
