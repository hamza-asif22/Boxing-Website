import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import BookModal from "./BookModal";

const BookSingleCard = ({ book, type }) => {
  const [showModal, setShowModal] = useState(false);

  const getTypeStyles = (type) => {
    switch (type) {
      case "Free":
        return "bg-blue-300";
      case "Standard":
        return "bg-yellow-300";
      case "Premium":
        return "bg-green-300";
      default:
        return "bg-red-300";
    }
  };

  return (
    <div className="flex-shrink-0 bg-white bg-opacity-50 max-w-xs border-2 border-black rounded-lg px-4 py-6 m-2 relative hover:shadow-xl transition duration-300 transform hover:-translate-y-0 hover:scale-105">
      <h2
        className={`absolute top-1 right-2 px-4 py-1 ${getTypeStyles(
          type
        )} rounded-lg text-sm text-white`}
      >
        {type}
      </h2>
      <div>
        <h2 className="text-xl font-bold">{book.price}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2 mt-2">
        <h2 className="my-1">{book.description}</h2>
      </div>
      <div>
        <ul className="text-base mb-2 font-semibold">
          {book.features.map((feature, index) => (
            <li key={index}>
              <span className="text-blue-500">&#8226;</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center gap-x-2 mt-2">
        <button className="bg-gray-300 rounded-lg px-4 py-2 hover:bg-gray-400 transition">
          Get Started
        </button>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-2">
        <div className="flex justify-start items-center gap-x-2">
          <h2 className="my-1">{book.rating}</h2>
        </div>
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
          aria-label="Show book details"
        />
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
