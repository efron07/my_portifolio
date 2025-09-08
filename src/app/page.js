import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Timeline from '@/components/Timeline'
import Testimonials from '@/components/Testimonials'
import Accomplishments from '@/components/Accomplishments'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackgroundAnimation from '@/components/BackgroundAnimation'

export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section with Background Animation */}
                <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <BackgroundAnimation />
                    <div className="relative z-10 w-full">
                        <Hero />
                    </div>
                </section>

                {/* About Section */}
                <About />

                {/* Projects Section */}
                <Projects />

                {/* Technologies Section */}
                <Technologies />

                {/* Timeline Section */}
                <Timeline />

                {/* Testimonials Section */}
                <Testimonials />

                {/* Accomplishments Section */}
                <Accomplishments />

                {/* Contact Section */}
                <Contact />
            </main>
            <Footer />
        </>
    )
}
