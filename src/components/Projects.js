'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '@/constants/constants'

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('projects')
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    return (
        <section id="projects" className="py-20 bg-neutral-900/50">
            <div className="section-padding container-max">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for creating
                        innovative digital solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group bg-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 card-hover ${isVisible ? 'animate-slide-up' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-brand-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wide">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-brand-500/20 text-brand-400 text-sm rounded-full border border-brand-500/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.visit}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 btn-primary flex items-center justify-center group/btn"
                                    >
                                        <FaExternalLinkAlt className="mr-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 btn-secondary flex items-center justify-center group/btn"
                                    >
                                        <FaGithub className="mr-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Projects Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center group"
                    >
                        View More on GitHub
                        <FaGithub className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}
