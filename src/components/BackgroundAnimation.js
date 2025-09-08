'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundAnimation() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationId

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.vx = (Math.random() - 0.5) * 0.5
                this.vy = (Math.random() - 0.5) * 0.5
                this.radius = Math.random() * 2 + 1
                this.opacity = Math.random() * 0.5 + 0.2
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width
                if (this.x > canvas.width) this.x = 0
                if (this.y < 0) this.y = canvas.height
                if (this.y > canvas.height) this.y = 0
            }

            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(51, 150, 211, ${this.opacity})`
                ctx.fill()
            }
        }

        // Create particles
        const particles = []
        const particleCount = 50

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x
                    const dy = particle.y - otherParticle.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.beginPath()
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(otherParticle.x, otherParticle.y)
                        ctx.strokeStyle = `rgba(51, 150, 211, ${0.1 * (1 - distance / 100)})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                })
            })

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
        />
    )
}
