'use client'

import { useState, useEffect } from 'react'
import { FaCode, FaServer, FaShieldAlt, FaRocket, FaLightbulb } from 'react-icons/fa'

export default function About() {
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

        const element = document.getElementById('about')
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    const expertise = [
        {
            icon: FaCode,
            title: 'Frontend Development',
            description: 'Modern JavaScript, React, HTML5, CSS3, and responsive design'
        },
        {
            icon: FaServer,
            title: 'Backend Development',
            description: 'Laravel, PHP, Node.js, Express.js, and database management'
        },
        {
            icon: FaRocket,
            title: 'Full-Stack Solutions',
            description: 'End-to-end web applications from concept to deployment'
        },
        {
            icon: FaShieldAlt,
            title: 'System Analysis',
            description: 'Analyzing requirements and designing efficient solutions'
        },
        {
            icon: FaLightbulb,
            title: 'Problem Solving',
            description: 'Transforming complex problems into elegant, maintainable code'
        }
    ]

    return (
        <section id="about" className="py-20 bg-neutral-900/50">
            <div className="section-padding container-max">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                        I'm a <strong className="text-brand-400">Fullstack Developer</strong> with a degree in Information Systems from the University of Dodoma.
                        I specialize in <strong className="text-accent-400">JavaScript, React, Node.js, Laravel, and PHP</strong>, creating robust and user-friendly web applications that solve real-world problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {expertise.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={index}
                                className={`bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/30 hover:border-brand-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/20 ${isVisible ? 'animate-slide-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="text-4xl text-brand-400">
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-xl font-display font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Experience Summary */}
                <div className={`bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-2xl p-8 border border-brand-500/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <div className="text-center">
                        <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                            Why Choose Me?
                        </h3>
                        <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                            I bring a unique combination of technical depth and business understanding. Whether you need a complete
                            system overhaul, a new SaaS platform, or integration with existing infrastructure, I deliver solutions
                            that not only work flawlessly but also drive real business value. My clients trust me with their most
                            critical projects because I treat their success as my own.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
