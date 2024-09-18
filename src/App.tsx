// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// //Components
// import About from './AboutMe/AboutMe';
// import Project from './Projects/project';
// import Menu from './Menu/Menu';
// import { TypeAnimation } from 'react-type-animation';




// export const routeSystem = () => {
//   return (
//     <Router>
//       <Menu />
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="about" element={<About />} />
//         <Route path="projects" element={<Project />} />
//       </Routes>
//     </Router>
//   );
// }

// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-500">
//         <TypeAnimation
//           sequence={[
//             // Same substring at the start will only be typed out once, initially
//             'Ohhh, Welcome to my website!',
//             1000, // wait 1s before replacing "Mice" with "Hamsters"
//             'Scrool to see more!',
//             1000,
//           ]}
//           wrapper="span"
//           speed={50}
//           style={{ fontSize: '2em', display: 'inline-block' }}
//           repeat={Infinity}
//         />
//       </h1>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './AboutMe/AboutMe';
// import Project from './Projects/project';
// import Menu from './Menu/Menu';
// import { TypeAnimation } from 'react-type-animation';
// import ScrollComponent from './scroll/ScrollComponent';

// export const routeSystem = () => {
//   return (
//     <Router>
//       <Menu />
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="about" element={<About />} />
//         <Route path="projects" element={<Project />} />
//       </Routes>
//     </Router>
//   );
// };

// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-500">
//         <TypeAnimation
//           sequence={[
//             'Ohhh, Welcome to my website!',
//             1000,
//             'Scroll to see more!',
//             1000,
//           ]}
//           wrapper="span"
//           speed={50}
//           style={{ fontSize: '2em', display: 'inline-block' }}
//           repeat={Infinity}
//         />
//       </h1>
//       <ScrollComponent>
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold text-gray-500 mb-4">
//             Download CV
//           </h2>
//           <a
//             href="/PedroMotaCV.pdf"
//             className="text-blue-500 hover:underline"
//             download
//           >
//             Download PDF
//           </a>
//         </div>
//       </ScrollComponent>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './AboutMe/AboutMe';
import Menu from './Menu/Menu';
import { TypeAnimation } from 'react-type-animation';
import ScrollComponent from './scroll/ScrollComponent';
import Project from './Projects/project';
import { bestProjects } from './utils/Interfaces';

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
  // Select the top projects
  const selectedProjects = bestProjects.slice(0, number);

  return (
    <div className="flex justify-center flex-col items-center mb-12">
      <div className="rounded-lg max-w-6xl w-full p-6 flex flex-col shadow-lg">
        <div className="lg:w-full w-full p-4">
          <h2 className="text-xl font-semibold text-gray-500 mb-4">
            Best Projects
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {selectedProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => project.Link && window.open(project.Link, "_blank")}
                className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
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
      </div>
    </div>
  );
};


function App() {
  return (
    <div className="flex flex-col items-center h-screen">
        <BestProjects number={3} />      
        <About />
    </div>
  );
}

export default App;