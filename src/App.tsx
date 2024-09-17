import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import About from './AboutMe/AboutMe';
import Project from './Projects/project';
import Menu from './Menu/Menu';




export const routeSystem = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Hello World</h1>
    </div>
  );
}

export default App;
