interface IProject {
    Type: string
    Title?: string;
    Description?: string;
    Link?: string;
    Image?: string;
    usedTech?: string[];
}

interface IAboutMe {
    title: string;
    description: string;
}

interface IIinfo {
    first_name: string;
    last_name: string;
    email: string;
    phone_number_ext: string;
    phone_number: string;
    address: string;
}

let infome: IIinfo = {
    first_name: "Pedro",
    last_name: "Vital",
    email: "pedromotaseguranca@gmail.com",
    phone_number_ext: "+351",
    phone_number: "939341958",
    address: "Avenida Cidade Lisboa, 2735-009 Cacém",
};


const aboutMe: IAboutMe[] = [
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


const projects: IProject[] = [
    {
        Type: "Done",
        Title: "Minishell",
        Description: "A simple shell implementation in C, handling command execution, piping, redirection, and environment variable expansion.",
        Link: "https://github.com/PedroVMota/Minishell", // Add the link to the project repository or demo
        Image: "/Minishell.jpg", // Add an image or logo for the project
        usedTech: ["C/C++", "Shell Scripting", "Linux", "System Calls", "POSIX", "Process Management", "Unix", "Forks", "Makefile"],
    },
    {
        Type: "Done",
        Title: "Fractol",
        Description: "A project visualizing fractals through efficient algorithms, using stack manipulation to optimize operations.",
        Link: "https://github.com/PedroVMota/Fractol",
        Image: "/Fractol.png", // Add an image or logo for the project
        usedTech: ["C/C++", "Algorithms", "Data Structures", "Fractal Geometry", "Graphics Programming", "Math Algorithms", "Makefile"],
    },
    {
        Type: "Done",
        Title: "MiniRT",
        Description: "A basic ray tracing engine that renders simple 3D shapes, showcasing the fundamentals of rendering.",
        Link: "https://github.com/PedroVMota/MiniRT",
        Image: "/MiniRT.png",
        usedTech: ["C/C++", "Ray Tracing", "3D Rendering", "Linear Algebra", "Lighting Algorithms", "Math Functions", "Makefile"],
    },
    {
        Type: "Done",
        Title: "FT_IRC",
        Description: "An implementation of the IRC protocol in C++, allowing multiple clients to communicate over a network, you can make your own chat room, send files, images and you can also interect with a bot.",
        Link: "https://github.com/PedroVMota/FT_IRC-Chat-Hex-Compatibility-",
        Image: "/FT_IRC.jpg",
        usedTech: ["C/C++", "Networking", "IRC Protocol", "Sockets", "Multithreading", "Concurrency", "TCP/IP", "Makefile"],
    },
    {
        Type: "Done",
        Title: "Inception",
        Description: "A project that builds and deploys multiple Docker containers, focusing on system architecture and deployment automation.",
        Link: "https://github.com/PedroVMota/Inception",
        Image: "/Wordpress.png",
        usedTech: ["Docker", "System Architecture", "Automation", "Nginx", "WordPress", "MariaDB", "Virtualization", "CI/CD", "SSL"],
    },
    {
        Type: "In Development",
        Title: "FT_Transcendence",
        Description: "A web development project creating a dynamic website where users can play games, chat, and manage profiles.",
        Link: undefined, // Add the link to the project repository or demo
        Image: "/FT_Transcendence.png", // Add an image or logo for the project
        usedTech: ["Javascript", "Django", "HTML", "CSS", "Python", "PostgreSQL", "JWT Authentication", "WebSockets", "HTTP", "SSL"],
    }
];


const bestProjects: IProject[] = projects.filter(project => project.Title && ["Minishell", "FT_IRC", "MiniRT"].includes(project.Title))

// Export the interfaces
export type { IProject, IAboutMe, IIinfo };
//export the data
export { aboutMe, infome, projects, bestProjects };