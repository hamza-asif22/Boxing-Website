import React from 'react';
import { Link } from 'react-scroll';

const Scroll = () => {
  const handleSetActive = (to) => {
    console.log(`Scrolled to: ${to}`);
  };

  return (
    <div>
      <Link
        activeClass="active"
        to="2page"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        <button className="py-4 px-4 scroll-smooth flex border-2 shadow-lg bg-transparent hover:bg-blue-200 relative rounded-3xl align-bottom">
          Check Out The Website
          <img
            src="/media/down-arr.gif"
            alt="Down Arrow"
            className="w-7 h-6 ml-2"
          />
        </button>
      </Link>
    </div>
  );
};

export default Scroll;
