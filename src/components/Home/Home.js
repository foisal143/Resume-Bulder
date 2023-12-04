import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IsHomeContext } from '../../App';
const Home = () => {
  const [isHome, setIsHome] = useContext(IsHomeContext);
  return (
    <div className="min-h-[calc(100vh-160px)] flex justify-center items-center bg-black text-white">
      <div>
        <h1 className="text-5xl  font-semibold">
          Build Your Best <span className="text-sky-400">Resume</span>
        </h1>
        <p className="text-gray-500 my-5">
          This Application build for make resume . User can build their resume
          in their own details
        </p>
        <Link to="/resume">
          <button
            onClick={() => setIsHome(false)}
            className="coustom-btn border-none"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
