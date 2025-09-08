'use client'

import { useState, useEffect } from 'react'
import { FaTrophy, FaCode, FaUsers, FaRocket } from 'react-icons/fa'

const accomplishments = [
    {
        icon: FaCode,
        number: '42+',
        title: 'Repositories',
        description: 'Active GitHub repositories showcasing diverse projects and skills',
        color: 'text-brand-400'
    },
    {
        icon: FaUsers,
        number: '6+',
        title: 'Years Experience',
        description: 'Deep expertise in JavaScript, Laravel, and fullstack development',
        color: 'text-accent-400'
    },
    {
        icon: FaRocket,
        number: '13+',
        title: 'Project Stars',
        description: 'Quality work recognized by the developer community',
        color: 'text-green-400'
    },
    {
        icon: FaTrophy,
        number: '100%',
        title: 'Code Quality',
        description: 'Committed to clean, maintainable, and well-documented code',
        color: 'text-purple-400'
    }
]

export default function Accomplishments() {
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

        const element = document.getElementById('accomplishments')
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
        <section id="accomplishments" className="py-20">
            <div className="section-padding container-max">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        <span className="gradient-text">Accomplishments</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Numbers that reflect my dedication and commitment to delivering quality work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {accomplishments.map((accomplishment, index) => {
                        const IconComponent = accomplishment.icon
                        return (
                            <div
                                key={index}
                                className={`group bg-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/30 hover:border-brand-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/20 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <div className={`text-5xl ${accomplishment.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent />
                                    </div>

                                    <div className="text-4xl font-display font-bold text-white group-hover:text-brand-400 transition-colors">
                                        {accomplishment.number}
                                    </div>

                                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-brand-400 transition-colors">
                                        {accomplishment.title}
                                    </h3>

                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        {accomplishment.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Call to Action */}
                <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                    <div className="bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-2xl p-8 border border-brand-500/20">
                        <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                            🚀 Let's Build Something Together
                        </h3>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Available for freelance projects, SaaS collaborations, and system architecture.
                            Let's turn your ideas into powerful digital products that drive real business value.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="btn-primary inline-flex items-center group"
                            >
                                📩 Get In Touch
                                <svg
                                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/efron-damasco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary inline-flex items-center group"
                            >
                                💼 Connect on LinkedIn
                                <svg
                                    className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
