import React from "react";

const experiences = [
  {
    title: "Technical Member of AR/VR Club",
    duration: "August 2023 - Present",
    description: [
      "Held workshops on Blender and basics of AR/VR Technology.",
      "Designed a 3D virtual racing game with a team themed around the Computer Science Department for Tech Fest '23. The event saw great success, with over 128 participants in two days.",
    ],
    techStack: "Tech Stack: Blender, Unity",
  },
  {
    title: "Programming Community Member - Code-X Club SIT",
    duration: "March 2023 - December 2023",
    description: [
      "Participated in community events, coding challenges, and group learning sessions.",
    ],
  },
  {
    title: "VR Developer Intern at Guruji AIR",
    duration: "May 2023 - September 2023",
    description: [
      "Worked as a Virtual Reality intern at Guruji AIR, an educational startup company based in Pune.",
      "Created 3D models of high-tech labs and deployed them using Oculus headsets.",
    ],
    techStack: "Tech Stack: Oculus, Blender, Unity",
  },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-[#7bacda] via-[#5097d5] to-[#532d77] text-black py-10 pt-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400">
            Experience
          </p>
        </div>

        <div className="flex flex-col space-y-8 mt-10">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center bg-white bg-opacity-20 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                {index + 1}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800">
                  {experience.title}
                </h3>
                <p className="text-gray-700 italic">{experience.duration}</p>
                <ul className="list-disc list-inside text-gray-800 mt-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-lg">{item}</li>
                  ))}
                </ul>
                {experience.techStack && (
                  <p className="text-gray-700 mt-2 font-semibold">
                    {experience.techStack}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
