# Personal Name Card Website

A modern, responsive personal portfolio website built with React, featuring a dark green minimal theme with smooth animations and dark/light mode toggle.

## 🌟 Features

- **Modern React + Vite** - Fast development and optimized builds
- **Dark/Light Theme Toggle** - Seamless theme switching with local storage persistence
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Framer Motion powered animations throughout
- **Scroll Progress Indicator** - Visual feedback as users navigate
- **Contact Form** - Integrated with Formspree for easy message handling
- **Social Media Links** - Quick access to all your social profiles
- **Timeline Layouts** - Beautiful education and experience sections

## 🎨 Color Scheme

- **Primary Green**: Emerald (600-900 shades)
- **Dark Mode**: Slate backgrounds with green accents
- **Light Mode**: Clean white/slate backgrounds

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd name-card
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change the name and tagline
   - Update the description text

2. **Social Links** (`src/components/SocialLinks.jsx`)
   - Update URLs with your social media profiles
   - Modify email address

3. **Education** (`src/components/Education.jsx`)
   - Add your educational background
   - Update degrees, institutions, and achievements

4. **Experience** (`src/components/Experience.jsx`)
   - Add your work experience
   - Update positions, companies, and responsibilities

5. **Contact Form** (`src/components/Contact.jsx`)
   - Replace `YOUR_FORM_ID` with your Formspree form ID
   - Get your free form ID at [formspree.io](https://formspree.io)

### Theme Colors

Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

## 🏗️ Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🌐 Deployment

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Formspree** - Form handling

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

Made with ❤️ by Supanat Wanroj