import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import blender from "../assets/blender.png";
import unity from "../assets/unity.png";
import qt from "../assets/qt.png";

const Skills = () => {
  const techs = [
    { id: 1, src: cpp, title: "C++", style: "shadow-sky-600" },
    { id: 2, src: java, title: "Core Java", style: "shadow-orange-500" },
    { id: 3, src: python, title: "Python", style: "shadow-amber-400" },
    { id: 4, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 5, src: css, title: "CSS", style: "shadow-sky-600" },
    { id: 6, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 7, src: reactImage, title: "React", style: "shadow-cyan-400" },
    { id: 8, src: tailwind, title: "Tailwind", style: "shadow-cyan-300" },
    { id: 9, src: qt, title: "QT Creator", style: "shadow-green-400" },
    { id: 10, src: github, title: "GitHub", style: "shadow-white" },
    { id: 11, src: blender, title: "Blender", style: "shadow-orange-500" },
    { id: 12, src: unity, title: "Unity", style: "shadow-black" },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-[#030303] via-[#0a2b43de] to-[#173039c9] w-full py-10 pt-24 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-400 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies and tech stack I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 font-bold text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
