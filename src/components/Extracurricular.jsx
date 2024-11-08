import React from "react";

const activities = [
  {
    title: "Singing Open Mic Competition",
    achievement: "1st Prize",
    description:
      "Awarded 1st prize in the college's open mic singing competition.",
  },
  {
    title: "Indian Classical Music",
    achievement: "Distinction",
    description:
      "Completed Indian Classical Music training with distinction through the third year.",
  },
  {
    title: "Fine Arts",
    achievement: "Distinction",
    description:
      "Achieved distinction in Fine Arts through the fifth year, demonstrating dedication and artistic growth.",
  },
  {
    title: "Poetry Competition",
    achievement: "1st Prize",
    description:
      "Won 1st prize in a poetry competition on the theme of 'Mental Health as an Inherent Human Right.'",
  },
];

const Extracurricular = () => {
  return (
    <div
      name="extracurricular"
      className="w-full bg-gradient-to-b from-[#8dbbccc9] via-[#15779b7b] to-[#173039c9] py-10 pt-24"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Extracurricular Activities
          </p>
          <p className="mt-4 text-lg text-gray-700">
            A showcase of achievements in music, arts, and poetry
          </p>
        </div>

        <div className="flex flex-col space-y-8 mt-10">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800">{activity.title}</h3>
              <p className="text-gray-700 italic font-semibold">{activity.achievement}</p>
              <p className="text-gray-800 mt-2 text-lg">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extracurricular;
