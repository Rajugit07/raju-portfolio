import React from "react";
import SplitText from "../../../RectBits/SplitText/SplitText";

const links = [
    {
        href: "https://github.com/Rajugit07",
        label: "GitHub",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
        ),
    },
    {
        href: "www.linkedin.com/in/raju-pradhani-mern-dev",
        label: "LinkedIn",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z" />
            </svg>
        ),
    },
    {
        href: "https://x.com/RajuPradhani3",
        label: "Twitter",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M24 4.56c-.89.39-1.85.65-2.86.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15a4.93 4.93 0 0 0-.66 2.48c0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.24-.62v.06c0 2.39 1.7 4.39 3.95 4.84-.41.11-.84.17-1.29.17-.31 0-.61-.03-.9-.08.62 1.91 2.41 3.3 4.53 3.34a9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.18-.07a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a10.06 10.06 0 0 0 2.46-2.57z" />
            </svg>
        ),
    },
];

const Home = () => (
    <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen px-8 py-16 font-b relative overflow-hidden"
    >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 border border-gray-700 rounded-full opacity-20"></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 border border-gray-600 rounded-full opacity-15"></div>
            <div className="absolute top-1/2 right-8 w-16 h-16 border border-gray-700 rounded-full opacity-10"></div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center z-10">
            {/* Hero Section */}
            <div className="mb-12">
                <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                    <SplitText
                        text="Hi, I'm Raju Pradhani"
                        splitType="chars"
                        className="inline-block"
                    />
                </h1>
                <div className="mb-8">
                    <p className="text-xl md:text-3xl lg:text-4xl text-gray-300 mb-4 font-light">
                        MERN Stack Developer
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        I craft clean, modern web applications that are
                        intuitive, user-friendly, and built with cutting-edge
                        technologies. Let's create something amazing together.
                    </p>
                </div>
            </div>

            {/* Skills Tags */}
            <div className="mb-12">
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {[
                        "React",
                        "Node.js",
                        "MongoDB",
                        "Express",
                        "JavaScript",
                        "Tailwind CSS",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-gray-400 transition-colors duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button
                    className="button-custom px-8 py-4 text-lg font-semibold min-w-[200px] transform hover:scale-105 transition-all duration-300"
                    onClick={() => {
                        const section = document.getElementById("projects");
                        if (section)
                            section.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    View My Work
                </button>

                <button
                    className="px-8 py-4 text-lg font-semibold border-2 border-gray-600 rounded-md text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-300 min-w-[200px]"
                    onClick={() => {
                        const section = document.getElementById("contact");
                        if (section)
                            section.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Get In Touch
                </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-16 mb-8">
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-gray-400 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                    {link.icon}
                </a>
            ))}
        </div>

        </div>
    </section>
);

export default Home;
