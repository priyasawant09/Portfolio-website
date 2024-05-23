import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'Java', level: 60 },
    { name: 'SQL', level: 55 },
  ];

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
            Skills
          </p>
          <p className="py-4 text-2xl">
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#0a192f] rounded-lg p-6 shadow-md shadow-[#040c16]">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-bold">{skill.name}</p>
                <p className="text-lg font-semibold">{skill.level}%</p>
              </div>
              <div className="w-full bg-gray-500 rounded-full h-2.5">
                <div
                  className="bg-cyan-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;