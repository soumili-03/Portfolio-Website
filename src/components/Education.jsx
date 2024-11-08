import React from "react";

const educationData = [
  {
    degree: "BTech in Computer Science and Engineering",
    institution: "Symbiosis Institute of Technology, Pune",
    duration: "2022 - Present",
    details: "CGPA: 8.1725",
  },
  {
    degree: "Higher Secondary School",
    institution: "Calcutta Girls' High School, Kolkata, West Bengal",
    duration: "2008 - 2022",
    details: "Class 12th (ISC): 92% | Class 10th (ICSE): 95.6%",
  },
];

const Education = () => {
  return (
    <div
      name="education"
      className="bg-gradient-to-b from-[#173039c9] via-[#5c8999c9] to-[#8dbbccc9] w-full py-10 pt-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400">
            Education
          </p>
        </div>

        <div className="flex flex-col space-y-8 mt-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800">{item.degree}</h3>
              <p className="text-xl font-semibold text-gray-700">
                {item.institution}
              </p>
              <p className="text-gray-600">{item.duration}</p>
              <p className="text-gray-700 mt-2 font-semibold">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
