# Jinesh Prajapati — Portfolio

A modern, responsive personal portfolio website built for the **CodeOrbit Tech Web Development Internship (Batch 07)** — Task 1: Personal Portfolio Website.

## About

This is a real, production-style frontend project showcasing my work as a Web Development student and intern. It's built entirely with HTML5, CSS3, and vanilla JavaScript — no frameworks — with a dark, developer-themed UI centered around a code-editor visual identity.

## Features

- Fully responsive layout (320px mobile → 1440px+ desktop)
- Sticky navbar with scroll blur and active-section highlighting
- Mobile hamburger navigation with smooth open/close
- Dark / light theme toggle with `localStorage` persistence and system-preference detection
- Animated "typed code" hero visual (respects `prefers-reduced-motion`)
- Scroll-reveal animations via `IntersectionObserver`
- Filterable project grid (All / Frontend / JavaScript / Web Apps)
- Client-side contact form validation (required fields, email format, minimum message length)
- Back-to-top button
- Semantic HTML, keyboard-accessible navigation, visible focus states, and SEO meta tags

## Technologies

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

No CSS or JS frameworks/libraries are used.

## Project Structure

```
portfolio/
│
├── index.html
│
├── css/
│   ├── style.css          # Design tokens, base styles, all components/sections
│   └── responsive.css     # Media queries for tablet/mobile breakpoints
│
├── js/
│   ├── main.js             # Hero typing effect + scroll reveal
│   ├── navigation.js        # Navbar scroll state, mobile menu, active links, back-to-top
│   ├── projects.js          # Project filter logic
│   ├── theme.js              # Dark/light theme toggle + persistence
│   └── validation.js         # Contact form validation
│
├── assets/
│   ├── images/
│   │   ├── profile/         # Profile photo (add your own)
│   │   ├── projects/         # Project screenshots
│   │   └── icons/             # Favicon, etc.
│   │
│   └── resume/
│       └── resume.pdf        # Placeholder — replace with your real resume
│
├── README.md
└── .gitignore
```

## How to Run Locally

No build tools or installation required.

1. Download or clone this folder.
2. Open `index.html` directly in a browser, or serve it locally for the best experience:
   ```bash
   # Using Python
   python3 -m http.server 5500

   # Then visit
   http://localhost:5500
   ```
3. That's it — no dependencies to install.

## Deploying

Ready to deploy as-is on **GitHub Pages** or **Netlify** (drag-and-drop or Git-connected deploy). No build step is needed since it's plain HTML/CSS/JS.

## Projects Featured

1. **E-Commerce Website** — a responsive e-commerce frontend project.
2. **Task Management App** — a task management / to-do web app.
   Live: https://taskkk-management.netlify.app/ but Live demo is currently not working because free service is unavailable.
3. Additional projects will be added as they're completed.

## Author

**Jinesh Prajapati**
Web Development Intern, CodeOrbit Tech (Batch 07)
GitHub: `https://github.com/jinesh-prajapati05` · LinkedIn: `https://www.linkedin.com/in/prajapati-jinesh-737316371?utm_source=share_via&utm_contect=profile&utm_mrdium=member_android`

---
© 2026 Jinesh Prajapati. All rights reserved.
