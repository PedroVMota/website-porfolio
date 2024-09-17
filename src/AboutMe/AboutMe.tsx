import { Link } from "react-router-dom";
import React from "react";
// Remove the import statements for the files
// import pvital from "../assets/pvital-m.jpg";
// import cv from "../assets/PedroMotaCV.pdf";
// import PedroMotaCV from "PedroMotaCV.pdf";

/*
About Me
Hey there! I'm a software engineer who loves diving into creative problem-solving. I'm all about taking on challenges and finding fresh ways to improve my skills. Right now, I'm playing around with AWS, Django, and Rust, pushing myself to build cool, dynamic web apps. I'm always up for learning something new and working under pressure doesn't scare me—it actually fuels me!

Passionate & Determined
I'm super passionate about tech and always hungry to learn more. Whether it's figuring out a tricky algorithm or picking up a new coding language, I love the challenge. My drive to keep growing keeps me excited about every new project I dive into.

Problem Solver & Fast Thinker
Problem-solving is my thing, especially when things get tough. I can think on my feet and find the quickest, smartest solutions. When the pressure's on, that's when I really thrive—whether it's optimizing code or coming up with real-time fixes, I'm all in.

Projects
No projects available.

*/

interface AboutMe {
    title: string;
    description: string;
}

const aboutMe: AboutMe[] = [
    {
        title: "About Me",
        description:
            "Hey there! I'm a software engineer who loves diving into creative problem-solving. I'm all about taking on challenges and finding fresh ways to improve my skills. Right now, I'm playing around with AWS, Django, and Rust, pushing myself to build cool, dynamic web apps. I'm always up for learning something new and working under pressure doesn't scare me—it actually fuels me!",
    },
    {
        title: "Passionate & Determined",
        description:
            "I'm super passionate about tech and always hungry to learn more. Whether it's figuring out a tricky algorithm or picking up a new coding language, I love the challenge. My drive to keep growing keeps me excited about every new project I dive into.",
    },
    {
        title: "Problem Solver & Fast Thinker",
        description:
            "Problem-solving is my thing, especially when things get tough. I can think on my feet and find the quickest, smartest solutions. When the pressure's on, that's when I really thrive—whether it's optimizing code or coming up with real-time fixes, I'm all in.",
    },
];

interface Info {
    first_name: string;
    last_name: string;
    email: string;
    phone_number_ext: string;
    phone_number: string;
    address: string;
}

let infome: Info = {
    first_name: "Pedro",
    last_name: "Vital",
    email: "pedromotaseguranca@gmail.com",
    phone_number_ext: "+351",
    phone_number: "939341958",
    address: "Avenida Cidade Lisboa, 2735-009 Cacém",
};

export default function About() {

    const Download = () => {
        const handleDownload = () => {
          window.open("/pedroCv.pdf", "_blank");
        };
      
        React.useEffect(() => {
            handleDownload();
        }, []);
      
        return null; // Render nothing as this is a utility component
      };
      

    console.log(process.env.PUBLIC_URL + '/pedroCv.pdf');
    return (
        <div className="min-h-screen flex justify-center items-center p-6">
            <div className="rounded-lg max-w-6xl w-full p-6 flex flex-col lg:flex-row shadow-lg">
                {/* Right Column (Details) */}
                <div className="lg:w-2/3 w-full p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                    <div className="space-y-4">
                        {aboutMe.map((section: AboutMe, index: number) => (
                            <div key={index}>
                                <h2 className="text-xl font-semibold text-gray-500 mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-gray-700 font-thin">{section.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-500 mb-4">
                            Projects
                        </h2>
                        <Link to="/projects" className="text-blue-500 hover:underline">
                            View all projects
                        </Link>
                    </div>
                </div>

                {/* Left Column (Profile Info) */}
                <div className="lg:w-1/3 w-full p-4">
                    <div className="flex flex-col items-center">
                        <div className="h-64 w-64 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                            <img
                                src="/pvital-m.jpg" // Use absolute path
                                alt="Pedro Vital"
                                className="h-64 w-64 rounded-full object-cover"
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-600 text-center">
                            {infome.first_name + " " + infome.last_name}
                        </h1>
                        <p className="text-gray-600 text-center bg-gray-200 p-1 px-2 rounded-full">
                            <a href={`mailto:${infome.email}`} className="text-gray-600 hover:underline">
                                {infome.email}
                            </a>
                        </p>
                        <p className="text-gray-600 text-center">
                            {infome.phone_number_ext} {infome.phone_number}
                        </p>
                        <button
                            onClick={() => {
                                window.open("/pedroCv.pdf", "_blank");
                            }}
                            className="text-cyan-800 px-4 py-2 rounded-lg hover:bg-cyan-800 hover:text-white mt-4 ease-in-out transition"
                        >
                            See my CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}