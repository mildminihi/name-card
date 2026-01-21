# 🚀 Quick Start Guide

Get Supanat Wanroj card website up and running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Your site will be running at `http://localhost:5173`

## Step 3: Customize Your Content

### Essential Customizations (5 minutes):

1. **Supanat Wanroj** - Open `src/components/Hero.jsx`
   - Line 7: Change `'Supanat Wanroj'` to your actual name

2. **Social Links** - Open `src/components/SocialLinks.jsx`
   - Lines 8-32: Update URLs with your profiles

3. **Email** - Open `src/components/Contact.jsx`
   - Line 94 & 100: Replace `supanat.wanroj@gmail.com`

### Important Customizations (15 minutes):

4. **Education** - Open `src/components/Education.jsx`
   - Lines 5-26: Add your education history

5. **Experience** - Open `src/components/Experience.jsx`
   - Lines 5-65: Add your work experience

6. **Contact Form** - Open `src/components/Contact.jsx`
   - Line 24: Replace `YOUR_FORM_ID` with your Formspree ID
   - Get free ID at: https://formspree.io

## Step 4: Build for Production

```bash
npm run build
```

Files will be in the `dist` folder.

## Step 5: Deploy (Choose One)

### Option A: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option B: Netlify
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder

### Option C: GitHub Pages
```bash
npm install -D gh-pages
```
Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```
Run:
```bash
npm run deploy
```

## 📚 More Help?

- Full customization guide: See [CUSTOMIZATION.md](CUSTOMIZATION.md)
- Project documentation: See [README.md](README.md)

---

That's it! Your website is ready! 🎉
