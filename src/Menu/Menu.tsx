import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <div className="p-2 flex justify-center">
        <NavLink to="/" className="p-4 mx-2 text-lg">Home</NavLink>
        <NavLink to="/about" className="p-4 mx-2">About</NavLink>
        <NavLink to="/projects" className="p-4 mx-2">Projects</NavLink>
      </div>
    </>
  );
};

export default Menu;