'use client'

import { useState, useEffect } from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
    {
        quote: "Working with Efron was like hiring three developers in one—he handled frontend, backend, and DevOps with speed and quality. Our SACCOs management system was delivered ahead of schedule and exceeded all expectations.",
        author: "Sarah Mwangi",
        role: "Finance Director, PCCB SACCOs",
        rating: 5
    },
    {
        quote: "Efron's expertise in Laravel and React helped us build a robust logistics platform. His attention to security and scalability made all the difference. Highly recommended for complex business applications.",
        author: "James Kiprop",
        role: "CTO, BuyDeliver",
        rating: 5
    },
    {
        quote: "The Brain Trader Journal platform Efron developed has transformed how our traders analyze their performance. The AI integration and user experience are exceptional. He truly understands both technology and business needs.",
        author: "Dr. Maria Santos",
        role: "Trading Psychology Consultant",
        rating: 5
    }
]

export default function Testimonials() {
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

        const element = document.getElementById('testimonials')
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
        <section id="testimonials" className="py-20 bg-neutral-900/50">
            <div className="section-padding container-max">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        What <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Don't just take my word for it. Here's what clients say about working with me.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-neutral-800/30 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/30 hover:border-brand-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/20 ${isVisible ? 'animate-slide-up' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="space-y-6">
                                {/* Quote Icon */}
                                <div className="text-brand-400 text-3xl">
                                    <FaQuoteLeft />
                                </div>

                                {/* Rating */}
                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-accent-400 w-4 h-4" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-neutral-300 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="border-t border-neutral-700/50 pt-4">
                                    <h4 className="font-display font-semibold text-white">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-brand-400 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                    <div className="bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-2xl p-8 border border-brand-500/20">
                        <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                            Ready to Join These Happy Clients?
                        </h3>
                        <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                            Let's discuss your project and see how I can help you achieve your goals with the same level of quality and professionalism.
                        </p>
                        <a
                            href="mailto:efron@example.com"
                            className="btn-primary inline-flex items-center group"
                        >
                            Start Your Project
                            <svg
                                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
