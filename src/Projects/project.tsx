import { projects } from '../utils/Interfaces';

export default function Project() {
    // Filter projects based on their type (Done and In Development)
    const doneProjects = projects.filter(project => project.Type === "Done");
    const inDevelopmentProjects = projects.filter(project => project.Type === "In Development");

    return (
        <div className="flex flex-col justify-center items-center  p-8 ">
            <h1 className="text-4xl font-bold text-blue-500 mb-8">Projects</h1>
            {/* In Development Section */}
            {inDevelopmentProjects.length > 0 && (
                <div className="w-full max-w-6xl mb-16">
                    <h2 className="text-3xl font-bold text-gray-700 mb-8">In Development</h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {inDevelopmentProjects.map((project, index) => (
                            <div onClick={() => project.Link && window.open(project.Link, '_blank')}
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            >
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
            )}

            {/* Done Section */}
            <div className="w-full max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-700 mb-8">Done</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {doneProjects.map((project, index) => (
                        <div onClick={() => project.Link && window.open(project.Link, '_blank')}
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
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
    );
}
