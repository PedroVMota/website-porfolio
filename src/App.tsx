// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './AboutMe/AboutMe';
// // import Menu from './Menu/Menu';
// import Project from './Projects/project';
// // import { bestProjects } from './utils/Interfaces';
// // import { Link } from 'react-router-dom';
// import '@mui/material';
// import { ArrowBack, ArrowBackIosNew, ArrowForward, ArrowForwardIos, ArrowForwardSharp, ArrowRightAltOutlined } from '@mui/icons-material';
// import { TypeAnimation } from 'react-type-animation';

// export const routeSystem = () => {

//   return (
//     <Router>
//       {/* <Menu /> */}
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="about" element={<About />} />
//         <Route path="projects" element={<Project />} />
//       </Routes>
//     </Router>
//   );
// };

// /*
// const BestProjects = ({ number }: { number: number }) => {
//   const selectedProjects = bestProjects.slice(0, number);
//   return (
//     <div className="w-full flex flex-col items-center">
//       <div className="w-full h-96 bg-cyan-800 flex items-center justify-center">
//         <h1 className="text-4xl text-white">Best Projects</h1>
//       </div>
//     </div>
//   );
// };
// */


// function App() {
//   const [Scroll, setScroll] = React.useState(0);
//   React.useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setScroll(window.scrollY);
//       console.log(Scroll);
//     });
//   }, []);

//   return (
//     <div className="h-screen relative m-h-screen bg-black">
//       <div className="w-full h-screen flex items-center justify-center flex-col">
//         <h1 className="text-6xl text-white font-bold">Welcome, I'm Pedro</h1>
//         <div className="flex items-center justify-center overflow-hidden text-slate-50">
//           <TypeAnimation
//             sequence={[
//               "Software Developer",
//               500,
//               "Web Developer",
//               500,
//             ]}
//           />
//           <ArrowForwardSharp />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;


import React from "react";
import { TypeAnimation } from 'react-type-animation'; // Assuming you're using this library
import "@mui/icons-material";
import { ArrowDownwardRounded } from "@mui/icons-material";
import About from "./AboutMe/AboutMe";


function App() {
  const [scrollY, setScrollY] = React.useState<number>(() => {
    // Check if there's a saved scroll position in localStorage and return it, otherwise default to 0
    const savedScroll = localStorage.getItem('scrollPosition');
    return savedScroll ? parseInt(savedScroll) : 0;
  });

  // Track vertical scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      localStorage.setItem('scrollPosition', window.scrollY.toString()); // Save scroll position to localStorage
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the last saved position when the component mounts
  React.useEffect(() => {
    if (scrollY > 0) {
      window.scrollTo(0, scrollY);
    }
  }, [scrollY]);

  return (
    <div className="relative h-full w-screen">
      <section>
        <div className="h-screen relative m-h-screen bg-black" style={{
          backgroundImage: "url(/Images/Fractol.png)",
          backgroundSize: "cover",
          backgroundPosition: `50% ${scrollY * 0.5}px`,

        }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 blur-4xl"></div>
          <div className={`w-full h-screen flex items-center justify-center flex-col`}
            style={{
              transform: `translateY(${-scrollY * 0.25}px)`,
              opacity: 1 - scrollY / 300,
            }}
          >
            <h1 className="text-6xl text-white font-bold">Welcome, I'm Pedro</h1>
            <div className="flex items-center justify-center overflow-hidden text-slate-50 transition-transform duration-300 ease-in-out">
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
                className="blur-4xl" />
            </div>
          </div>
          <ArrowDownwardRounded className="absolute bottom-4 left-1/2 text-white text-4xl bounce" style={
            {
              transform: `translateY(${-scrollY * 0.25}px)`,
              opacity: 1 - scrollY / 300,
            }
          } />
        </div>
      </section>
      <section className="bg-white">
        <About ScrollPosition={scrollY} />
      </section>
    </div>
  );
}

export default App;
