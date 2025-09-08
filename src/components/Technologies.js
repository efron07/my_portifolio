'use client'

import { useState, useEffect } from 'react'
import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaPhp,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaShieldAlt
} from 'react-icons/fa'
import {
    SiNextdotjs,
    SiTypescript,
    SiMysql,
    SiPostgresql,
    SiSupabase,
    SiTailwindcss,
    SiLaravel,
    SiExpress,
    SiNginx,
    SiDigitalocean,
    SiFirebase
} from 'react-icons/si'

const technologies = [
    // Languages
    { name: 'PHP', icon: FaPhp, color: 'text-purple-400' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },

    // Frameworks
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },

    // Databases
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'Supabase', icon: SiSupabase, color: 'text-green-400' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },

    // UI/UX
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },

    // DevOps & Tools
    { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
    { name: 'Nginx', icon: SiNginx, color: 'text-green-600' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
    { name: 'DigitalOcean', icon: SiDigitalocean, color: 'text-blue-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'Security', icon: FaShieldAlt, color: 'text-red-400' },
]

export default function Technologies() {
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

        const element = document.getElementById('technologies')
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
        <section id="technologies" className="py-20">
            <div className="section-padding container-max">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        <span className="gradient-text">Technologies</span> I Use
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        I work with a wide range of modern technologies to build scalable and efficient applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {technologies.map((tech, index) => {
                        const IconComponent = tech.icon
                        return (
                            <div
                                key={tech.name}
                                className={`group bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/30 hover:border-brand-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="flex flex-col items-center space-y-3">
                                    <div className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent />
                                    </div>
                                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors text-center">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Additional Info */}
                <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                    <div className="bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-2xl p-8 border border-brand-500/20">
                        <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                            Always Learning
                        </h3>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Technology evolves rapidly, and I'm committed to staying current with the latest trends and tools.
                            I'm always exploring new frameworks, languages, and methodologies to deliver the best solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
