import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './AboutMe/AboutMe';
import Menu from './Menu/Menu';
import Project from './Projects/project';
import { bestProjects } from './utils/Interfaces';
import { Link } from 'react-router-dom';

export const routeSystem = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<div><App /></div>} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
      </Routes>
    </Router>
  );
};

const BestProjects = ({ number }: { number: number }) => {
  const selectedProjects = bestProjects.slice(0, number);
  return (
    <div className="flex justify-center flex-col items-center mb-12">
      <div className="rounded-lg max-w-6xl w-full p-6 flex flex-col shadow-lg">
        <div className="lg:w-full w-full p-4">
          <h2 className='text-xl font-semibold text-gray-500'>
              Introduction
          </h2>
          <div className='text-gray-600 my-4'>
            Here are some of my best works projects I truly enjoyed and am proud to share with you. Feel free to explore the details by checking out the project cards below.
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {selectedProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => project.Link && window.open(project.Link, "_blank")}
                className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300  shadow-md"
              >
                {project.Image && (
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.Image}
                      alt={project.Title}
                      className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.Title}
                </h3>
                <p className="text-gray-600 mb-4">{project.Description}</p>
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
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          {/* Header */}
          <div className='p-4'>
            <h2 className='text-xl font-semibold text-gray-500'>
              Introduction
            </h2>
            <div className='text-gray-600 my-4'>
              Welcome to my portfolio! I'm Pedro Mota, a creative and driven individual passionate about solving <strong className='font-semibold'>challenges</strong> and pushing the boundaries of <strong className='font-semibold'>knowledge</strong>. My focus is on <strong className='font-semibold'>web development</strong> and <strong className='font-semibold'>AI</strong>, where I strive to build solutions that are both <strong className='font-semibold'>practical</strong> and <strong className='font-semibold'>visually appealing</strong>.
            </div>
            <div className='text-gray-600 my-4'>
              I love diving into <strong className='font-semibold'>new technologies</strong> and thrive on learning. With experience in diverse projects, my goal is always to create tools that are not only <strong className='font-semibold'>useful</strong> but also elevate the <strong className='font-semibold'>user experience</strong>. From developing <strong className='font-semibold'>dynamic web applications</strong> to exploring the potential of <strong className='font-semibold'>AI</strong>, I'm excited to share my journey and work with you.
            </div>

            <p className='text-gray-600 my-4'>
              Feel free to explore some of my projects:
            </p>
            <div className='flex items-center'>
              <Link to='/projects' className='text-blue-500 hover:underline text-cyan-800 font-bold'> Projects </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <BestProjects number={3} />
      {/* <About /> */}
    </div>
  );
}

export default App;