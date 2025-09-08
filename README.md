# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and the latest web technologies. Features a beautiful design with your brand color (#3396D3) and complementary color palette.

## 🚀 Features

- **Modern Next.js 14** with App Router
- **Tailwind CSS** for styling with custom brand colors
- **Responsive Design** that works on all devices
- **Interactive Animations** and smooth transitions
- **Project Showcase** with images and links
- **Technology Stack** display
- **Timeline** of your journey
- **Contact Section** with accomplishments
- **Background Animation** with particles
- **SEO Optimized** with proper meta tags

## 🎨 Brand Colors

The website uses your brand color **#3396D3** with a carefully crafted complementary palette:

- **Primary Brand**: #3396D3 (Blue)
- **Accent Colors**: Warm yellows and oranges
- **Neutral Grays**: For text and backgrounds
- **Gradient Effects**: Beautiful color transitions

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **TypeScript** - Type safety (optional)
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout component
│   └── page.js              # Main page component
├── components/
│   ├── Header.js            # Navigation header
│   ├── Hero.js              # Hero section with profile
│   ├── Projects.js          # Projects showcase
│   ├── Technologies.js      # Technology stack
│   ├── Timeline.js          # Career timeline
│   ├── Accomplishments.js   # Stats and contact
│   ├── Footer.js            # Footer with links
│   └── BackgroundAnimation.js # Particle animation
└── constants/
    └── constants.js         # Project data and timeline
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### 1. Personal Information

Update the following files with your information:

**Hero Component** (`src/components/Hero.js`):
- Change "Your Name" to your actual name
- Update the description
- Add your social media links
- Replace the profile image path

**Constants** (`src/constants/constants.js`):
- Update project information
- Add your actual project links
- Modify timeline data
- Update accomplishment numbers

### 2. Projects

To add or modify projects, edit `src/constants/constants.js`:

```javascript
export const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: '/images/your-project.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    source: 'https://github.com/yourusername/project',
    visit: 'https://your-project-demo.com',
    id: 0,
  },
  // Add more projects...
];
```

### 3. Images

Place your project images in the `public/images/` directory:
- `profile.jpeg` - Your profile picture
- `1.png`, `2.png`, etc. - Project screenshots

### 4. Colors

The brand colors are defined in `tailwind.config.js`. You can modify the color palette:

```javascript
colors: {
  brand: {
    500: '#3396D3', // Your brand color
    // ... other shades
  },
  // ... other colors
}
```

## 🎯 Key Features Explained

### Project Showcase
- **Images**: Each project displays a screenshot
- **Links**: Both source code and live demo links
- **Tech Stack**: Tags showing technologies used
- **Responsive**: Cards adapt to different screen sizes

### Interactive Elements
- **Smooth Scrolling**: Navigation between sections
- **Hover Effects**: Cards and buttons have animations
- **Background Animation**: Particle system in hero section
- **Mobile Menu**: Responsive navigation

### Modern Design
- **Glass Morphism**: Semi-transparent elements
- **Gradients**: Beautiful color transitions
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent layout system

## 📱 Responsive Design

The website is fully responsive and works on:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is configured for static export:

```bash
npm run build
```

This creates an `out` directory with static files ready for deployment.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using Next.js and Tailwind CSS**# my_portifolio
