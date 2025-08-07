import React from "react";
import ProjectCard from "../ProjectCard";

const projects = [
    {
        image: "https://res.cloudinary.com/dswqab8r2/image/upload/v1754463905/eCommerce_myttja.png",
        name: "eCommerce Website",
        description:
            "A full-featured eCommerce platform built with MERN stack, Redux, Redis, and Docker.",
        features: [
            "Product catalog and search",
            "Shopping cart and checkout",
            "Admin dashboard",
            "Scalable with Docker and Redis cache",
        ],
        techStack: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Redux",
            "Redis",
            "Docker",
        ],
        projectLink: "https://e-commerce-chi-two-50.vercel.app/",
        githubLink: "https://github.com/Rajugit07/e-commerce",
    },
    {
        image: "https://res.cloudinary.com/dswqab8r2/image/upload/v1754464005/expense-tracker_u4mdel.png",
        name: "Expense Tracker",
        description:
            "A simple MERN stack application to track your expenses and manage your budget.",
        features: ["User authentication", "Add, edit, and delete expenses"],
        techStack: ["MongoDB", "Express", "React", "Node.js"],
        projectLink: "https://github.com/Rajugit07/expense-tracker",
        githubLink: "https://expense-tracker-pi-henna.vercel.app/",
    },
    {
        image: "https://res.cloudinary.com/dswqab8r2/image/upload/v1754464004/crypto_qyxdgg.png",
        name: "Crypto Price Tracker",
        description:
            "Live crypto price tracking and smart insights with Gemini AI.",
        features: ["Responsive layout", "Modern design"],
        techStack: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
        projectLink: "https://simplewebpage1-demo.com",
        githubLink: "https://github.com/yourusername/simple-webpage-1",
    },
    {
        image: "https://res.cloudinary.com/dswqab8r2/image/upload/v1754464592/course_w1kjpk.png",
        name: "Course Selling Platform",
        description:
            "Course Selling Platform static webpage using only React, Tailwind CSS.",
        features: ["Clean UI", "Interactive elements"],
        techStack: ["React", "Tailwind Css"],
        projectLink: "https://course-site-six.vercel.app/",
        githubLink: "https://github.com/Rajugit07/course-site",
    },
];

const Projects = () => (
    <section id="projects" className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-10 text-[var(--color-accent)] ">
            Projects
        </h2>
        <div>
            {projects.map((project, idx) => (
                <div key={idx}>
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
