'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            href: 'https://github.com/efron07',
            color: 'hover:text-gray-400'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/efron-damasco/',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Twitter',
            icon: FaTwitter,
            href: 'https://x.com/EfronNyambo',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            href: 'mailto:efrondamasco@gmail.com',
            color: 'hover:text-brand-400'
        },
    ]

    return (
        <footer className="bg-neutral-900 border-t border-neutral-800">
            <div className="section-padding container-max">
                <div className="py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-display font-bold">
                                <span className="gradient-text">Portfolio</span>
                            </h3>
                            <p className="text-neutral-400 leading-relaxed">
                                A modern portfolio showcasing my skills, projects, and passion for creating
                                exceptional digital experiences.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-display font-semibold text-white">Quick Links</h4>
                            <div className="flex flex-col space-y-2">
                                <a href="#about" className="text-neutral-400 hover:text-brand-400 transition-colors duration-200">
                                    About
                                </a>
                                <a href="#projects" className="text-neutral-400 hover:text-brand-400 transition-colors duration-200">
                                    Projects
                                </a>
                                <a href="#technologies" className="text-neutral-400 hover:text-brand-400 transition-colors duration-200">
                                    Technologies
                                </a>
                                <a href="#timeline" className="text-neutral-400 hover:text-brand-400 transition-colors duration-200">
                                    Timeline
                                </a>
                                <a href="#contact" className="text-neutral-400 hover:text-brand-400 transition-colors duration-200">
                                    Contact
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-display font-semibold text-white">Connect With Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => {
                                    const IconComponent = social.icon
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-neutral-400 ${social.color} transition-colors duration-200`}
                                            aria-label={social.name}
                                        >
                                            <IconComponent className="w-6 h-6" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-neutral-400 text-sm">
                            © {currentYear} Efron Damasco. All rights reserved.
                        </p>
                        <p className="text-neutral-400 text-sm flex items-center mt-4 md:mt-0">
                            Made with <FaHeart className="mx-1 text-red-500" /> using Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
