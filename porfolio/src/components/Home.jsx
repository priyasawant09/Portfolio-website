import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/priya.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Software Engineer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        Aspiring Software Engineer | Full-Stack Developer
Passionate about crafting robust and scalable applications with cutting-edge technologies.
Committed to continuous learning and innovation in the ever-evolving tech landscape.
        </p>
        <div>
        <Link to="/about" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
  About Me
  <span className="group-hover:rotate-90 duration-300">
    <HiArrowNarrowRight size={25} className="ml-3" />
  </span>
</Link>
        </div>
      </div>
      <div className="md:mr-8 mb-6 md:mb-0">
          <div className="rounded-full overflow-hidden">
            <img
              src={me}
              alt="Your Name"
              className="rounded-full mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
        </div>

  </div>
  );
};
export default Home;