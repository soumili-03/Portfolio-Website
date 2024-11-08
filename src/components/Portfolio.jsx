import React from "react";
import SudokuSolver from "../assets/SudokuSolver.png";
import ngologs from "../assets/ngologs.png";
import Translation from "../assets/Translation.jpg";
import FourthFloor from "../assets/FourthFloor.png";
import DodgeThePipes from "../assets/DodgeThePipes.png";
import soilmoisture from "../assets/soilmoisture.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: SudokuSolver,
      title: "Sudoku Solver",
      description: "Designed an interactive GUI with Qt Widgets, allowing users to input Sudoku puzzles and visualize the solving process.",
      githubLink: "https://github.com/soumili-03/SudokuSolver",
    },
    {
      id: 2,
      src: ngologs,
      title: "NGO Logs",
      description: "Designed a user-friendly GUI to streamline NGO search processes, especially aiding service-learning students for efficient searching of their preferred NGOs.",
      githubLink: "https://github.com/soumili-03/NGOLogs",
    },
    {
      id: 3,
      src: Translation,
      title: "Headlines to Insights",
      description: "Developed a GUI for extracting text from newspapers, summarizing it, and translating it from English to Marathi, aimed at providing rural Indians with remote access to global news.",
      githubLink: "https://github.com/soumili-03/Headlines-to-Insights--Global-News-Summarized",
    },
    {
      id: 4,
      src: FourthFloor,
      title: "Fourth Floor",
      description: "A VR game designed for a tech fest, with Blender and Unity.",
      githubLink: "https://github.com/soumili-03/4th_floor",
    },
    {
      id: 5,
      src: DodgeThePipes,
      title: "Dodge The Pipes",
      description: "A fun, interactive game inspired by Flappy Bird, created with Unity.",
      githubLink: "https://github.com/soumili-03/DODGE-THE-PIPES---MARINE-EDITION",
    },
    {
      id: 6,
      src: soilmoisture,
      title: "Soil Moisture Detector",
      description: "An IoT project that helps farmers monitor soil moisture remotely via a mobile application.",
      githubLink: "https://github.com/soumili-03/IOT_based_Smart_Irrigation_System",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#532d77] via-[#1e3a8a] to-black w-full text-white pt-24 pb-10 scroll-mt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-col gap-12">
          {portfolios.map(({ id, src, title, description, githubLink }) => (
            <div key={id} className="flex flex-col md:flex-row items-center gap-8">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg shadow-gray-600 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover border-4 border-gray-700 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:contrast-125"
                />
              </a>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-lg mb-4">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
