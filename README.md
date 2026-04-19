# 🚀 Dev Portfolio — Full Stack Developer Portfolio

A modern, fully animated personal portfolio website built with React (Vite), Tailwind CSS, Framer Motion, and React Three Fiber.

---

## ✨ Features

- **3D animated hero** — Distorted sphere with Three.js / React Three Fiber
- **Custom cursor** — Smooth trailing cursor animation
- **Loader animation** — Branded intro screen
- **Typing effect** — Dynamic role cycler in hero
- **Scroll progress bar** — Top-of-page progress indicator
- **Dark / Light mode toggle** — Persistent theme switch
- **Framer Motion animations** — Scroll-triggered fade, slide, and scale effects
- **Parallax + floating particles** — Subtle depth effects
- **Sticky navbar** — Active section highlight
- **Skills section** — Animated skill cards with progress bars
- **Projects section** — Card grid with hover effects and live/GitHub links
- **Contact form** — EmailJS integration with validation and toast notifications
- **Fully responsive** — Mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Frontend framework |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| React Three Fiber + Drei | 3D canvas / Three.js |
| EmailJS | Contact form email sending |
| React Icons | Icon library |
| React Intersection Observer | Scroll-triggered animations |

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:5173
```

### 4. Build for production
```bash
npm run build
```

---

## 🔧 Customization Guide

### Personal Information
Search for these comments in the code and replace:

| File | What to Replace |
|---|---|
| `src/components/sections/Hero.jsx` | Your name, description, stats |
| `src/components/sections/About.jsx` | Bio text, initials (YN), name, skills |
| `src/components/sections/Projects.jsx` | Project data array |
| `src/components/sections/Contact.jsx` | Email, location, social links |
| `src/components/sections/Footer.jsx` | Name, email, social links |

### Adding Your Projects
Edit the `projects` array in `src/components/sections/Projects.jsx`:
```js
{
  id: 1,
  title: 'My Project',
  description: 'A brief description of what you built.',
  image: '/project1.png', // Put images in /public folder
  tags: ['React', 'Node.js', 'MongoDB'],
  liveUrl: 'https://yourproject.com',
  githubUrl: 'https://github.com/you/repo',
  featured: true,
  color: '#00FFB2', // Card accent color
}
```

### Adding Your Photo
In `src/components/sections/About.jsx`, replace the initials `<div>` with:
```jsx
<img
  src="/your-photo.jpg"
  alt="Your Name"
  className="w-16 h-16 rounded-full object-cover"
/>
```
Put your photo in the `/public` folder.

---

## 📧 EmailJS Setup (Contact Form)

1. **Sign up** at [https://www.emailjs.com](https://www.emailjs.com) — free tier is available

2. **Create a Service** — Connect your Gmail or other email provider

3. **Create an Email Template** with these variables:
   ```
   From: {{from_name}} ({{from_email}})
   Message: {{message}}
   ```

4. **Copy your credentials** from the EmailJS dashboard

5. **Update** `src/components/sections/Contact.jsx`:
   ```js
   const EMAILJS_CONFIG = {
     SERVICE_ID: 'service_xxxxxxx',    // Your Service ID
     TEMPLATE_ID: 'template_xxxxxxx',  // Your Template ID
     PUBLIC_KEY: 'xxxxxxxxxxxxxxxxxxxx', // Your Public Key
   }
   ```

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your resume here
│
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroCanvas.jsx       ← Three.js 3D sphere
│   │   ├── sections/
│   │   │   ├── Hero.jsx             ← Hero section
│   │   │   ├── About.jsx            ← About section
│   │   │   ├── Skills.jsx           ← Skills section
│   │   │   ├── Projects.jsx         ← Projects section
│   │   │   ├── Contact.jsx          ← Contact form
│   │   │   └── Footer.jsx           ← Footer
│   │   └── ui/
│   │       ├── AnimatedSection.jsx  ← Reusable animation wrappers
│   │       ├── CustomCursor.jsx     ← Custom cursor
│   │       ├── Loader.jsx           ← Intro loader
│   │       ├── Navbar.jsx           ← Sticky navbar
│   │       ├── ScrollProgress.jsx   ← Scroll bar
│   │       └── ThemeToggle.jsx      ← Dark/light toggle
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🎨 Color Scheme

| Color | Hex | Usage |
|---|---|---|
| Primary (Green) | `#00FFB2` | Accents, highlights |
| Accent (Purple) | `#7C3AED` | Gradients, secondary |
| Background | `#050505` | Main background |
| Surface | `#0D0D0D` | Cards, panels |

To change the accent colors, update `tailwind.config.js` and `src/index.css`.

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Deploy — Vercel auto-detects Vite settings

### Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

---

## 📝 License

MIT — Feel free to use this as a template for your own portfolio!
