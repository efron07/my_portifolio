import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
})

export const metadata = {
    title: 'Portfolio - Modern Next.js Developer',
    description: 'A modern portfolio website built with Next.js 14 and Tailwind CSS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}
