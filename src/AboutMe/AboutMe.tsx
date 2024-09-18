import { Link } from "react-router-dom";
import React from "react";
import { aboutMe, infome } from "../utils/Interfaces";
import { IAboutMe } from "../utils/Interfaces";




export default function About() {
    console.log(process.env.PUBLIC_URL + '/pedroCv.pdf');
    return (
        <div className="flex justify-center flex-col items-center">
            <div className="rounded-lg max-w-6xl w-full p-6 flex flex-col lg:flex-row shadow-lg">
                <div className="lg:w-2/3 w-full p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                    <div className="space-y-4">
                        {aboutMe.map((section: IAboutMe, index: number) => (
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