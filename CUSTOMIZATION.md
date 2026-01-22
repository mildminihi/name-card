# Customization Guide

This guide will help you personalize Supanat Wanroj card website with your own information.

## 📋 Quick Checklist

- [ ] Update personal name and tagline in Hero component
- [ ] Add your social media links
- [ ] Fill in education history
- [ ] Add work experience
- [ ] Configure contact form with Formspree
- [ ] Update email addresses
- [ ] Customize colors (optional)
- [ ] Add your photo (optional)

## 1. Hero Section (Homepage)

**File:** `src/components/Hero.jsx`

### Update Supanat Wanroj
```javascript
const fullName = 'Supanat Wanroj'; // Change this to your full name
```

### Update Tagline/Title
```javascript
const tagline = 'Software engineer | iOS | Board Gamer'; // Your professional title
```

### Update Description
```javascript
<motion.p>
  Passionate about creating beautiful, functional, and user-friendly digital experiences.
  I turn ideas into reality through clean code and elegant design.
  {/* Replace with your own description */}
</motion.p>
```

## 2. Social Media Links

**File:** `src/components/SocialLinks.jsx`

Update the `socialLinks` array with your profiles:

```javascript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername', // Replace with your GitHub
    icon: FaGithub,
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn
    icon: FaLinkedin,
    color: 'hover:text-blue-600',
  },
  // Add more social links or remove unwanted ones
];
```

### Available Icons

You can use any icon from `react-icons/fa`:
- `FaGithub` - GitHub
- `FaLinkedin` - LinkedIn
- `FaTwitter` - Twitter/X
- `FaInstagram` - Instagram
- `FaFacebook` - Facebook
- `FaDribbble` - Dribbble
- `FaBehance` - Behance
- `FaYoutube` - YouTube
- `FaMedium` - Medium

## 3. Education Section

**File:** `src/components/Education.jsx`

Replace the `education` array with your academic history:

```javascript
const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    location: 'City, Country',
    period: '2018 - 2022',
    description: 'Brief description of your studies',
    achievements: [
      'GPA: 3.8/4.0',
      'Dean\'s List all semesters',
      'Senior Project Award',
    ],
  },
  // Add more education entries as needed
];
```

## 4. Work Experience

**File:** `src/components/Experience.jsx`

Update the `experiences` array with your work history:

```javascript
const experiences = [
  {
    position: 'Senior Software engineer',
    company: 'Tech Company Inc.',
    location: 'Remote',
    period: 'Jan 2023 - Present',
    description: 'Brief description of your role',
    responsibilities: [
      'Key responsibility 1',
      'Key responsibility 2',
      'Key achievement 1',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  // Add more experiences
];
```

## 5. Contact Form Setup

**File:** `src/components/Contact.jsx`

### Step 1: Create a Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID

### Step 2: Update the Form Endpoint
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // Replace YOUR_FORM_ID with your actual Formspree form ID
```

### Step 3: Update Email Address
```javascript
<a
  href="mailto:supanat.wanroj@gmail.com" // Replace with your email
  className="text-xl font-semibold text-primary-600 dark:text-primary-400 hover:underline"
>
  supanat.wanroj@gmail.com // Replace with your email
</a>
```

## 6. Header & Footer

### Update Brand Name

**File:** `src/components/Header.jsx`
```javascript
<motion.div className="text-xl font-bold text-primary-600 dark:text-primary-400">
  Mild // Change to Supanat Wanroj or brand
</motion.div>
```

**File:** `src/components/Footer.jsx`
```javascript
Made with ❤️ by Supanat Wanroj // Replace with Supanat Wanroj
```

## 7. Page Title & Meta

**File:** `index.html`
```html
<title>Name Card</title> <!-- Change to Supanat Wanroj -->
```

## 8. Theme Colors (Optional)

**File:** `tailwind.config.js`

To change the primary color theme:

```javascript
colors: {
  primary: {
    50: '#ecfdf5',   // Lightest
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#047857',  // Main color
    700: '#065f46',
    800: '#064e3b',
    900: '#022c22',  // Darkest
  },
}
```

Use [Tailwind Color Palette Generator](https://uicolors.app/create) to create custom colors.

## 9. Adding Your Photo (Optional)

### Step 1: Add Image
Place your photo in `public/assets/profile.jpg`

### Step 2: Update Hero Component
```javascript
<div className="mb-8">
  <img 
    src="/assets/profile.jpg" 
    alt="Supanat Wanroj"
    className="w-32 h-32 rounded-full mx-auto border-4 border-primary-600"
  />
</div>
```

## 10. Deployment

### Quick Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. `npm run build`
2. Drag `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

## 🎨 Additional Customizations

### Change Font
Update `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

:root {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

### Add More Sections
Create new components in `src/components/` and add them to `src/App.jsx`:
```javascript
import NewSection from './components/NewSection';

// In App component
<NewSection />
```

## 📚 Need Help?

- Check the main [README.md](README.md) for setup instructions
- React documentation: [react.dev](https://react.dev)
- Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)
- Framer Motion docs: [framer.com/motion](https://framer.com/motion)

---

Happy customizing! 🚀
