'use client'

import { useState, useEffect } from 'react'
import { TimeLineData } from '@/constants/constants'

export default function Timeline() {
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

        const element = document.getElementById('timeline')
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
        <section id="timeline" className="py-20 bg-neutral-900/50">
            <div className="section-padding container-max">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        My <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        A timeline of my professional development and key milestones in my career.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-500 to-accent-500 rounded-full"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {TimeLineData.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    } ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-500 rounded-full border-4 border-neutral-900 z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50 hover:border-brand-500/50 transition-all duration-300 hover:scale-105">
                                        <div className="text-2xl font-display font-bold text-brand-400 mb-2">
                                            {item.year}
                                        </div>
                                        <p className="text-neutral-300 text-lg leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Goals */}
                <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                    <div className="bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-2xl p-8 border border-brand-500/20">
                        <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                            What's Next?
                        </h3>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            I'm continuously working on new projects and expanding my skill set.
                            My goal is to contribute to innovative solutions that make a positive impact on people's lives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
