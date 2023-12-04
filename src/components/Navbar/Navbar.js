import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IsHomeContext } from '../../App';
const Navbar = () => {
  const [isHome, setIsHome] = useContext(IsHomeContext);
  return (
    <nav className="flex justify-between px-5 md:px-12 h-20 bg-slate-100 items-center ">
      <div>
        <h2 className="text-3xl font-bold">RESUME BULDER</h2>
      </div>
      <div onClick={() => setIsHome(!isHome)} className="w-fit">
        {isHome ? (
          <Link to="/resume">
            <button className="coustom-btn border-none">Create Resume</button>
          </Link>
        ) : (
          <Link to="/">
            <button className="coustom-btn border-none">Go Home</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
