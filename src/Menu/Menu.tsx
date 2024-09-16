import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="">
      <ul className="flex justify-center items-center pt-4">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "container-link text-gray-900" : "container-link"} 
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "container-link text-gray-900" : "container-link"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "container-link text-gray-900" : "container-link"}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;