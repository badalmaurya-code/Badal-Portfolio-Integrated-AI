// ─── Resume Data ────────────────────────────────────────────
// Edit this file to update your portfolio content

export const personal = {
  name: "Badal Maurya",
  role: "Frontend Developer",
  tagline: "B.Tech CSE student crafting fast, beautiful, and responsive web apps with React, Tailwind, and the MERN stack.",
  location: "Gorakhpur, Uttar Pradesh, India",
  phone: "+91 6307370257",
  email: "badalmaurya101@gmail.com",
  github: "https://github.com/badalmaurya-code",
  linkedin: "https://linkedin.com/in/badal-maurya-14948a256",
  available: true,
};

export const stats = [
  { num: "5+", label: "Projects Shipped" },
  { num: "MERN", label: "Full Stack" },
  { num: "74.5%", label: "Diploma Score" },
];

export const skills = [
  {
    icon: "⚡",
    color: "rgba(124,106,255,0.15)",
    name: "Languages",
    tags: ["JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    icon: "⚛️",
    color: "rgba(56,189,248,0.15)",
    name: "Frameworks & Libs",
    tags: ["React.js", "Node.js", "Express.js"],
  },
  {
    icon: "🎨",
    color: "rgba(52,211,153,0.15)",
    name: "UI & Design",
    tags: ["Tailwind CSS", "Responsive Design", "Cross-browser"],
  },
  {
    icon: "🗄️",
    color: "rgba(251,146,60,0.15)",
    name: "Databases & Tools",
    tags: ["MongoDB", "Git", "GitHub"],
  },
  {
    icon: "🔌",
    color: "rgba(244,63,94,0.15)",
    name: "APIs & Data",
    tags: ["RESTful APIs", "JSON", "Async JS"],
  },
  {
    icon: "🧠",
    color: "rgba(167,139,250,0.15)",
    name: "Currently Growing",
    tags: ["MERN Stack", "Full-Stack", "Performance"],
  },
];

export const projects = [
  {
    emoji: "🛒",
    gradient: "linear-gradient(135deg,#1a1a2e,#2d1b69)",
    badge: "React.js",
    title: "Groceries E-Commerce",
    description:
      "Fully responsive e-commerce app with dynamic product catalog, persistent cart module, and optimized UI rendering across all screen sizes.",
    stack: ["React.js", "Tailwind CSS", "State Mgmt"],
    github: "https://github.com/badalmaurya-code",
  },
  {
    emoji: "🌤️",
    gradient: "linear-gradient(135deg,#0c1445,#1e3a5f)",
    badge: "API Integration",
    title: "Weather Web App",
    description:
      "Real-time weather portal with async city-based lookup, live JSON data parsing, and seamless UI refresh without page reloads.",
    stack: ["JavaScript", "REST API", "Async/Await"],
    github: "https://github.com/badalmaurya-code",
  },
  {
    emoji: "🛠️",
    gradient: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    badge: "Mini Projects",
    title: "Engineering Mini Projects",
    description:
      "Suite of small-scale web projects targeting real-world problems, built with clean code standards and iterative Git workflows.",
    stack: ["HTML5", "Tailwind", "JS", "React"],
    github: "https://github.com/badalmaurya-code",
  },
];

export const education = [
  {
    icon: "🎓",
    title: "B.Tech — Computer Science Engineering",
    school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    year: "2025 — Present · 3rd Year (Class of 2026)",
  },
  {
    icon: "📜",
    title: "Diploma — Computer Science Engineering",
    school: "Board of Technical Education, Uttar Pradesh (BTEUP)",
    year: "Graduated 2025 · 74.5% — First Division",
  },
  {
    icon: "💻",
    title: "Self-Learning & Project Development",
    school: "Frontend & MERN Stack Developer — Independent Practice",
    year: "2024 — Present",
  },
];

// AI context sent to Claude API
export const AI_CONTEXT = `
You are Badal Maurya's personal AI portfolio assistant. Be friendly, concise, and professional.
Answer ONLY based on his resume. Keep replies to 2–4 sentences. Use minimal emoji.

Name: Badal Maurya
Role: Frontend Developer (B.Tech CSE Student, 3rd Year, Class of 2026)
Location: Gorakhpur, Uttar Pradesh, India
Phone: +91 6307370257
Email: badalmaurya101@gmail.com
GitHub: github.com/badalmaurya-code
LinkedIn: linkedin.com/in/badal-maurya-14948a256

Skills:
- Languages: JavaScript (ES6+), HTML5, CSS3
- Frameworks: React.js, Node.js, Express.js
- UI/Design: Tailwind CSS, Responsive Web Design
- Databases & Tools: MongoDB, Git, GitHub
- API work: RESTful APIs, async JS, JSON manipulation
- Productivity & AI Tools: ChatGPT, Claude AI, Codex AI, Canva

Projects:
1. Groceries E-Commerce (React.js) — responsive, persistent cart, Tailwind CSS
2. Weather Web App (JS + API) — real-time weather, async lookup, JSON parsing
3. Engineering Mini Projects (HTML5, Tailwind, JS, React) — real-world problem solving

Education:
- B.Tech CSE at AKTU, 3rd Year
- Diploma CSE at BTEUP, Graduated 2025, 74.5% First Division
- Self-study: MERN stack, 2024–2025

Availability: Open to frontend roles, internships, and freelance projects.
`;
