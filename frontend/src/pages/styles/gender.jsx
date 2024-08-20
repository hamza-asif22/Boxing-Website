import React, { useState } from "react";

const GenderSelection = () => {
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="p-2 py-4">
      
      <form className="flex ">
      <h2 className="text-lg font-medium text-white mb-4">Select Your Gender: </h2>
        <div className="flex mx-2 items-center mb-4">
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
            className="h-4 mx-2  w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="male" className="ml-2 block text-sm font-medium text-white">
            Male
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
            className="h-4 mx-2 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="female" className="ml-2 block text-sm font-medium text-white">
            Female
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="other"
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleGenderChange}
            className="h-4 mx-2 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="other" className="ml-2 block text-sm font-medium text-white">
            Other
          </label>
        </div>
      </form>
     
    </div>
  );
};

export default GenderSelection;
