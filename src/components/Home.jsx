import React from "react";
import HeroImage from "../assets/my_photo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-[#bc6685] via-[#86bbe9] to-[#7bacda] pt-28"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <span className="text-[#7e2323] glow-text">Hi! I'm <span className="text-[#7e2323]">Soumili</span> Biswas</span>
            <span className="block text-2xl sm:text-6xl text-gray-700 mt-2">Coder, Dreamer, Lifelong Learner</span>
          </h2>

          <p className="text-gray-800 py-4 max-w-md">
            I'm currently pursuing my B.Tech in Computer Science and Engineering at 
            Symbiosis Institute of Technology, Pune. Skilled in C++, Java, and Python, 
            I'm driven to use technology to make a meaningful impact in the world.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-900 to-pink-100 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
