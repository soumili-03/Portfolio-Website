import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import girlIcon from "../assets/girl.png"; // Make sure this path is correct

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "experience" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "education" },
    { id: 6, link: "extracurricular" },
    { id: 7, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed backdrop-blur-sm z-50">
      <div className="flex items-center">
        <h1 className="text-5xl font-signature ml-2">Soumili</h1>
        <img src={girlIcon} alt="icon" className="w-10 h-10 ml-4" /> {/* Icon Image */}
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
