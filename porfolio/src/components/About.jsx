import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Priyadarshini Sawant, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
             A passionate and dedicated computer science student with a strong academic background and practical experience in software development. With a current GPA of 3.9/4.0, I am pursuing a Bachelor's degree in Computer Science from California State University Monterey Bay, set to graduate in May 2024.
My academic journey has equipped me with a solid foundation in various computer science domains, including Object-Oriented Programming, Data Structures & Algorithms, Operating Systems, Discrete Mathematics, Computer Architecture, Software Engineering, Data Science, Software Design, Reasoning with Logic, and Databases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;