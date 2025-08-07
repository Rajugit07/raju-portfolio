import React from "react";

const ProjectCard = ({
    image,
    name,
    description,
    features,
    techStack,
    projectLink,
    githubLink,
}) => (
    <div className="project-card-container mb-16 group animate-fadeInUp">
        <div className="flex flex-col lg:flex-row bg-[var(--color-card-bg)] rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

            {/* Left: Enhanced Project Image/Preview */}
            <div className="lg:w-1/2 w-full relative min-h-[300px] project-image-container overflow-hidden">
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative group"
                >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="project-image-overlay" />

                    {/* Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 z-10">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <svg className="w-8 h-8 text-[var(--color-button-bg)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </a>

                {/* Floating Status Badge */}
                <div className="absolute top-4 left-4 bg-[var(--color-button-bg)] text-black px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                    FEATURED
                </div>
            </div>

            {/* Right: Enhanced Project Details */}
            <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center bg-gradient-to-br from-[#121217] via-[#1a1a1f] to-[#0f0f11] relative">


                <div className="relative z-10">
                    {/* Project Name with Accent */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-button-bg)] to-[var(--color-accent)] rounded-full"></div>
                        <h3 className="text-3xl font-bold text-[var(--color-primary-font)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                            {name}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {description}
                    </p>

                    {/* Features with Enhanced Styling */}
                    {features && features.length > 0 && (
                        <div className="mb-6">
                            <h4 className="text-[var(--color-accent)] font-semibold mb-3 text-sm uppercase tracking-wide">
                                Key Features
                            </h4>
                            <ul className="space-y-2">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <div className="w-2 h-2 bg-[var(--color-button-bg)] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Enhanced Tech Stack */}
                    <div className="mb-8">
                        <h4 className="text-[var(--color-accent)] font-semibold mb-3 text-sm uppercase tracking-wide">
                            Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="tech-stack-glow bg-gradient-to-r from-[var(--color-background)] to-[#1a1a1f] text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-semibold border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/50 transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex gap-4">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-[var(--color-primary-font)] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5 group/github"
                                aria-label="View on GitHub"
                            >
                                <svg
                                    className="w-5 h-5 transition-transform group-hover/github:scale-110"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                                </svg>
                                <span className="font-medium">GitHub</span>
                            </a>
                        )}

                        {projectLink && (
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-glow flex items-center gap-2 bg-gradient-to-r from-[var(--color-button-bg)] to-[var(--color-accent)] text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/project"
                            >
                                <span>View Project</span>
                                <svg className="w-4 h-4 transition-transform group-hover/project:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectCard;
