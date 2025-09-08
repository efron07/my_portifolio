'use client'

import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Contact() {
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

        const element = document.getElementById('contact')
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'efrondamasco@gmail.com',
            link: 'mailto:efrondamasco@gmail.com',
            color: 'text-brand-400'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            value: '+255 741 428 141',
            link: 'tel:+255741428141',
            color: 'text-green-400'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'Dodoma, Tanzania',
            link: '#',
            color: 'text-accent-400'
        }
    ]

    const socialLinks = [
        {
            icon: FaLinkedin,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/efron-damasco/',
            color: 'hover:text-blue-400'
        },
        {
            icon: FaTwitter,
            name: 'Twitter',
            url: 'https://x.com/EfronNyambo',
            color: 'hover:text-blue-400'
        },
        {
            icon: FaGithub,
            name: 'GitHub',
            url: 'https://github.com/efron07',
            color: 'hover:text-gray-400'
        }
    ]

    return (
        <section id="contact" className="py-20 bg-neutral-900/50">
            <div className="section-padding container-max">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Ready to start your next project? Let's discuss how I can help bring your ideas to life.
                        I'm always excited to work on new challenges and deliver exceptional results.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                        <div>
                            <h3 className="text-2xl font-display font-semibold mb-6 text-white">
                                Let's Connect
                            </h3>
                            <p className="text-neutral-400 leading-relaxed mb-8">
                                I'm currently open to contract work and exploring full-time opportunities.
                                Whether you have an interesting project or a challenging role that aligns with my skills,
                                I'd love to hear from you!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {contactInfo.map((contact, index) => {
                                const IconComponent = contact.icon
                                return (
                                    <a
                                        key={index}
                                        href={contact.link}
                                        className={`flex items-center space-x-4 p-4 bg-neutral-800/30 rounded-xl border border-neutral-700/30 hover:border-brand-500/50 transition-all duration-300 hover:scale-105 group ${isVisible ? 'animate-fade-in' : 'opacity-0'
                                            }`}
                                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                    >
                                        <div className={`text-2xl ${contact.color} group-hover:scale-110 transition-transform`}>
                                            <IconComponent />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-semibold text-white group-hover:text-brand-400 transition-colors">
                                                {contact.title}
                                            </h4>
                                            <p className="text-neutral-400 group-hover:text-white transition-colors">
                                                {contact.value}
                                            </p>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-display font-semibold mb-4 text-white">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-neutral-400 ${social.color} transition-colors duration-200 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30 hover:border-brand-500/50 hover:scale-110 transition-all`}
                                            aria-label={social.name}
                                        >
                                            <IconComponent className="w-6 h-6" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className={`flex flex-col justify-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                        <div className="bg-gradient-to-br from-brand-500/10 to-accent-500/10 rounded-2xl p-8 border border-brand-500/20 h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-display font-semibold mb-6 text-white">
                                Ready to Start Your Project?
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-400 rounded-full"></div>
                                    <p className="text-neutral-300">Free consultation and project planning</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-400 rounded-full"></div>
                                    <p className="text-neutral-300">Transparent pricing and timelines</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-400 rounded-full"></div>
                                    <p className="text-neutral-300">Ongoing support and maintenance</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-400 rounded-full"></div>
                                    <p className="text-neutral-300">Modern, scalable solutions</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="mailto:efrondamasco@gmail.com?subject=Project Inquiry&body=Hi Efron, I'd like to discuss a project with you."
                                    className="btn-primary w-full text-center inline-flex items-center justify-center group"
                                >
                                    <FaEnvelope className="mr-2 w-4 h-4" />
                                    Send Email
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
                                    href="tel:+255741428141"
                                    className="btn-secondary w-full text-center inline-flex items-center justify-center group"
                                >
                                    <FaPhone className="mr-2 w-4 h-4" />
                                    Call Now
                                    <svg
                                        className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>
                            </div>

                            <p className="text-sm text-neutral-400 mt-6 text-center">
                                I typically respond within 24 hours. Looking forward to hearing from you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
