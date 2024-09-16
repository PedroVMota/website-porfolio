import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { AboutMe } from "../utils/Request";

export default function About() {
    const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get<AboutMe[]>("http://ec2-54-242-67-108.compute-1.amazonaws.com/api/get_user_info/")
            .then((response: AxiosResponse<AboutMe[]>) => {
                const userInfo = response.data[0];  // Access the first element of the array
                if (userInfo) {
                    setAboutMe(userInfo);
                    console.log("User information loaded successfully:", userInfo);
                }
            })
            .catch((error) => {
                console.error("Error fetching user information:", error);
                setError("Failed to load user information");
            });
    }, []);

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    if (!aboutMe) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex justify-center items-center p-6">
            <div className="rounded-lg max-w-6xl w-full p-6 flex shadow-lg">
                {/* Right Column (Details) */}
                <div className="w-2/3 p-4 border-r border-gray-200">
                    <div className="space-y-4">
                        {aboutMe.about.map((section, index) => (
                            <div key={index} className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-500">{section.title}</h3>
                                <p className="text-gray-700 font-thin">{section.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-500 mb-4">Projects</h2>
                        {aboutMe.projects.length > 0 ? (
                            <Link to="/projects" className="text-blue-500 hover:underline">
                                View all projects
                            </Link>
                        ) : (
                            <p className="text-gray-700 font-thin">No projects available.</p>
                        )}
                    </div>
                </div>

                {/* Left Column (Profile Info) */}
                <div className="p-4">
                    <div className="flex flex-col items-center">
                        <div className="h-64 w-64 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                            {aboutMe.image ? (
                                <img
                                    src={`http://ec2-54-242-67-108.compute-1.amazonaws.com/api/get_user_photo/1/`}
                                    alt={aboutMe.full_name}
                                    className="w-64 h-64 object-cover rounded-full mx-auto"
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                        <h1 className="text-2xl font-bold text-gray-600 text-center">{aboutMe.first_name + " " + aboutMe.last_name}</h1>
                        <p className="text-gray-600 text-center bg-gray-200 p-1 px-2 rounded-full">
                            <a href={`mailto:${aboutMe.email}`} className="text-gray-600 hover:underline">
                                {aboutMe.email}
                            </a>
                        </p>
                        <p className="text-gray-600 text-center">
                            {aboutMe.phone_number_ext} {aboutMe.phone_number}
                        </p>
                        <p className="text-gray-600 text-center">{aboutMe.address}</p>

                        {aboutMe.resume && (
                            <a
                                href={aboutMe.resume}
                                className="mt-4 text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Resume
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}