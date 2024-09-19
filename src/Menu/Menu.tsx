import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index: number) => {
    setActiveIndex(index);
  };

  return (
      <nav className="w-full py-4 py-2 lg:p-0  bg-white z-10">
        <img src="/svg/SinWave.1.svg" alt="Sin Wave" className=" w-full hidden lg:block" />
        <div className="absolute top-0 left-0 right-0 z-0 m-auto w-5/6 flex justify-between items-center py-2">
          <div className="flex-1 flex items-center">
            <h1 className="text-2xl font-semi">Home</h1>
          </div>
            <NavLink
              to="/"
              onClick={() => handleActive(0)}
              className={({ isActive }) =>
                isActive
                  ? "p-2 mx-2 px-4 text-cyan-800 bg-softOrange lg:bg-transparent rounded-lg"
                  : "p-4 mx-2 text-lg hover:text-cyan-800 hover:scale-110 transition-transform duration-300 ease-in-out"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => handleActive(1)}
              className={({ isActive }) =>
                isActive
                  ? "p-2 mx-2 px-4 text-cyan-800 bg-softOrange lg:bg-transparent rounded-lg"
                  : "p-4 mx-2 hover:text-cyan-800 hover:scale-110 transition-transform duration-300 ease-in-out"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => handleActive(2)}
              className={({ isActive }) =>
                isActive
                  ? "p-4 mx-2 text-cyan-800 bg-softOrange lg:bg-transparent"
                  : "p-4 mx-2 hover:text-cyan-800 hover:scale-110 transition-transform duration-300 ease-in-out"
              }
            >
              Projects
            </NavLink>
          </div>
      </nav>
  );
};

export default Menu;
