'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="section-padding container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                {/* Left Column - Content */}
                <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                            Hi, I'm{' '}
                            <span className="gradient-text">Efron Damasco</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-neutral-300">
                            Fullstack Developer & Freelancer
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
                        I build modern, scalable, and secure web applications using <strong className="text-brand-400">Laravel, React, Next.js, Node.js, and Tailwind</strong>.
                        From startups to enterprises, I help businesses turn ideas into powerful digital products.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="#projects"
                            className="btn-primary inline-flex items-center justify-center group"
                        >
                            View My Work
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
                            href="/resume.pdf"
                            className="btn-secondary inline-flex items-center justify-center group"
                            download
                        >
                            <FaDownload className="mr-2 w-4 h-4" />
                            Download Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6 pt-8">
                        <a
                            href="https://github.com/efron07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-brand-400 transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/efron-damasco/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-brand-400 transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://x.com/EfronNyambo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-brand-400 transition-colors duration-200"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Right Column - Profile Image */}
                <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <div className="relative">
                        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-brand-500/20 shadow-2xl">
                            <img
                                src="/images/profile.png"
                                alt="Efron Damasco - Fullstack Developer"
                                className="w-full h-full object-cover"
                                style={{ objectPosition: 'center 10%' }}
                                loading="eager"
                                width="1000"
                                height="1000"
                            />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-500 rounded-full animate-float"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
