import React, { useEffect } from "react";
import { aboutMe, infome } from "../utils/Interfaces";
import { IAboutMe } from "../utils/Interfaces";
import { projects } from "../utils/Interfaces";
import { IProject } from "../utils/Interfaces";

export default function About({ ScrollPosition }: { ScrollPosition: number }) {

  // Get the section from localStorage, default to section 1 if not found
  const [Section, setSection] = React.useState<number>(() => {
    const savedSection = localStorage.getItem('section');
    return savedSection ? parseInt(savedSection) : 1;
  });

  const doneProjects = projects.filter(project => project.Type === "Done");

  // Save the section value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('section', Section.toString());
  }, [Section]);


  if (Section === 0) {
    return (
      <div className="w-full flex flex-col items-center mt-12 mb-12 p-6 z-15">
        {/* Container */}
        <div className="rounded-lg max-w-5xl  w-full p-6 flex flex-col lg:flex-row shadow-lg bg-white"
          style={{
            marginTop: `${-ScrollPosition * 0.15}px`,
            zIndex: 15,
          }}>
          {/* Left Column (Text Content) */}
          <div className="lg:w-2/3 w-full p-6 space-y-6">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              About Me
            </h1>
            <div className="space-y-4">
              {aboutMe.map((section: IAboutMe, index: number) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold text-gray-600 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 font-light">{section.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-600 mb-2">Projects</h2>
            </div>
          </div>

          {/* Right Column (Profile Info) */}
          <div className="lg:w-1/3 w-full p-6 flex flex-col items-center justify-center">
            <div className="h-64 w-64 bg-gray-200 rounded-full mb-6 flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src="/Images/pvital-m.jpg" // Profile picture path
                alt="Pedro Mota"
                className="h-64 w-64 rounded-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-700 text-center">
              {infome.first_name + " " + infome.last_name}
            </h1>
            <p className="text-gray-600 text-center mt-2">
              <a href={`mailto:${infome.email}`} className="text-blue-600 hover:underline">
                {infome.email}
              </a>
            </p>
            <p className="text-gray-600 text-center mt-1">
              {infome.phone_number_ext} {infome.phone_number}
            </p>
            <div className="w-full flex  justify-center align-middle mt-6">
              <button
                onClick={() => window.open("/Pdf/pedroCv.pdf", "_blank")}
                className="mx-1 mt-6 bg-cyan-600 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
              >
                Download CV
              </button>
              <button className="mx-1 mt-6 bg-cyan-600 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
                onClick={() => {
                  setSection(1);
                }}>
                Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center mt-12 mb-12 p-6 z-15">
      {/* Container */}
      <div className="rounded-lg max-w-5xl  w-full p-6 flex flex-col lg:flex-row shadow-lg bg-white"
        style={{
          marginTop: `${-ScrollPosition * 0.15}px`,
          zIndex: 15,
        }}>

        {/* Left Column (Text Content) */}
        <div className="w-full p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              Done Projects
            </h1>
            <button
              onClick={() => {
                setSection(0);
              }}
              className="bg-cyan-600 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200">
              Back
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
            {doneProjects.map((project: IProject, index: number) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full">
                {project.Image && (
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.Image}
                      alt={project.Title}
                      className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.Title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {project.Description}
                </p>

                {/* Tech Stack Tags */}
                {project.usedTech && (
                  <div className="flex flex-wrap mb-4">
                    {project.usedTech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-500 text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.Link && (
                  <a href={project.Link} target="_blank" rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}