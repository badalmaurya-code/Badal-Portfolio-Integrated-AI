// ─── Resume Data ────────────────────────────────────────────
// Edit this file to update your portfolio content

export const personal = {
  name: "Badal Maurya",
  role: "DevOps / Cloud Engineer",
  tagline:
    "Entry-level DevOps/Cloud Engineer deploying full-stack apps on AWS EC2 with Docker, Docker Compose & Nginx — backed by a full-stack MERN foundation.",
  location: "Gorakhpur, Uttar Pradesh, India",
  phone: "+91 6307370257",
  email: "badalmaurya35@gmail.com",
  github: "https://github.com/badalmaurya-code",
  linkedin: "https://linkedin.com/in/badal-maurya-16b0a0201",
  available: true,
};

export const stats = [
  { num: "AWS", label: "EC2 Deployment" },
  { num: "Docker", label: "& Containerization" },
  { num: "MERN", label: "Full Stack Base" },
];

export const skills = [
  {
    icon: "☁️",
    color: "rgba(56,189,248,0.15)",
    name: "Cloud & Compute",
    tags: ["AWS EC2", "CLI Provisioning", "Linux/Unix"],
  },
  {
    icon: "🐳",
    color: "rgba(124,106,255,0.15)",
    name: "Containerization",
    tags: ["Docker", "Docker Compose", "Container Debugging"],
  },
  {
    icon: "⚙️",
    color: "rgba(52,211,153,0.15)",
    name: "CI/CD & Automation",
    tags: ["Jenkins", "Bash Scripting", "AWS CLI"],
  },
  {
    icon: "🌐",
    color: "rgba(251,146,60,0.15)",
    name: "Networking & Web Server",
    tags: ["Nginx (Reverse Proxy)", "REST APIs", "CORS/JWT"],
  },
  {
    icon: "🔧",
    color: "rgba(244,63,94,0.15)",
    name: "Version Control",
    tags: ["Git", "GitHub", "GitHub Actions"],
  },
  {
    icon: "🧱",
    color: "rgba(167,139,250,0.15)",
    name: "Full-Stack Foundation",
    tags: ["React.js", "Node.js/Express", "MongoDB", "MySQL"],
  },
];

export const projects = [
  {
    emoji: "🚕",
    gradient: "linear-gradient(135deg,#1a1a2e,#2d1b69)",
    badge: "AWS EC2 Deployment",
    title: "RideNow — Full-Stack Ride Booking App",
    description:
      "Containerized and deployed a full-stack ride-booking app on AWS EC2 using Docker & Docker Compose, with Nginx routing REST API and Socket.IO traffic. Configured JWT auth, CORS, and MongoDB connectivity; debugged production issues via Docker logs.",
    stack: ["AWS EC2", "Docker", "Nginx", "React.js", "Node.js", "MongoDB"],
    github: "https://github.com/badalmaurya-code",
  },
  {
    emoji: "🐳",
    gradient: "linear-gradient(135deg,#0c1445,#1e3a5f)",
    badge: "Docker + Jenkins",
    title: "Django Notes App — Containerized Multi-Service Stack",
    description:
      "Orchestrated a multi-container stack (Django + Nginx + MySQL) locally with Docker Compose, wrote a production Dockerfile with Gunicorn, added container healthchecks, and authored a Jenkinsfile defining build, image-push, and deploy stages.",
    stack: ["Docker Compose", "Nginx", "MySQL", "Jenkins", "Django"],
    github: "https://github.com/badalmaurya-code",
  },
  {
    emoji: "🛒",
    gradient: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    badge: "React.js",
    title: "E-commerce Web Application",
    description:
      "Responsive e-commerce app with product listing, cart, and checkout, built with React.js, Node/Express, and Tailwind CSS. Integrated the Razorpay payment gateway and managed the codebase across separate frontend/backend repos with Git.",
    stack: ["React.js", "Node.js", "Tailwind CSS", "Razorpay API"],
    github: "https://github.com/badalmaurya-code",
  },
];

export const education = [
  {
    icon: "🎓",
    title: "B.Tech — Computer Science Engineering (Lateral Entry)",
    school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    year: "Expected 2028",
  },
  {
    icon: "📜",
    title: "Diploma — Computer Science Engineering",
    school: "Board of Technical Education, Uttar Pradesh (BTEUP)",
    year: "Completed · 74.5% — First Division",
  },
  {
    icon: "💻",
    title: "Self-Learning — Cloud & DevOps Practice",
    school: "AWS EC2, Docker, Nginx, Jenkins — Independent Practice",
    year: "2024 — Present",
  },
];

// AI context sent to the model
export const AI_CONTEXT = `
You are Badal Maurya's personal AI portfolio assistant. Be friendly, concise, and professional.
Answer ONLY based on his resume. Keep replies to 2–4 sentences. Use minimal emoji.

Name: Badal Maurya
Role: Entry-level DevOps/Cloud Engineer with a full-stack (MERN) development background.
Internship/Job Preference: Always respond that he is primarily interested in "Junior DevOps, Cloud Support, or Cloud Engineering roles" unless explicitly stated otherwise. He can also take Full Stack (MERN) roles given his development background.
Location: Gorakhpur, Uttar Pradesh, India
Phone: +91 6307370257
Email: badalmaurya35@gmail.com
GitHub: github.com/badalmaurya-code
LinkedIn: linkedin.com/in/badal-maurya-16b0a0201

PERSONALITY & BEHAVIOR: Badal Maurya is disciplined, well-mannered, curious, and growth-oriented.
He is a practical problem solver who prefers hands-on infrastructure and deployment work over pure theory.
He is self-motivated, consistent, and eager to learn new cloud/DevOps technologies (Kubernetes, Terraform, GitHub Actions).
He adapts quickly to new challenges and has a strong interest in becoming a skilled DevOps/Cloud Engineer.

SOFT SKILLS: Communication, teamwork, consistency, problem-solving, fast learning ability, and adaptability.

RESPONSE RULES:
- Keep answers short (2–4 sentences)
- Be professional but friendly
- Do not invent fake experiences
- Only use information provided in context
- If asked about projects, explain clearly and simply, emphasizing the DevOps/deployment angle

Skills:
- Cloud & Compute: AWS EC2 (deployment & CLI-based provisioning), Linux/Unix
- Containerization: Docker, Docker Compose
- CI/CD & Automation: Jenkins (pipeline basics), Bash Scripting, AWS CLI
- Networking & Web Server: Nginx (reverse proxy), REST APIs, JWT, CORS
- Version Control: Git, GitHub
- Full-Stack Foundation: React.js, Node.js, Express.js, MongoDB, MySQL, Django (basic)

Projects:
1. RideNow (AWS EC2 Deployment) — Containerized a full-stack ride-booking app with Docker & Docker Compose on AWS EC2, Nginx reverse proxy for API/Socket.IO, JWT auth, resolved CORS/WebSocket/container-networking issues via Docker logs.
2. Django Notes App (Docker + Jenkins) — Multi-container stack (Django, Nginx, MySQL) with Docker Compose, production Dockerfile with Gunicorn, container healthchecks, and a Jenkinsfile for build/image-push/deploy stages.
3. E-commerce Web Application (React.js) — Responsive app with product listing, cart, checkout, Razorpay payment integration.

Education:
- B.Tech CSE (Lateral Entry) at AKTU — Expected 2028
- Diploma CSE at BTEUP — Completed, 74.5% First Division
- Self-study: Cloud & DevOps (AWS EC2, Docker, Nginx, Jenkins), 2024–Present

Availability: Open to junior DevOps, cloud support/engineering roles, and internships.

LANGUAGE RULE:
- Reply in Hinglish (Hindi + English mix) OR English based on user input
- Agar user Hindi me bole to Hinglish me answer do
- Agar user English me bole to English me answer do
- Default style: simple Hinglish (natural conversation style)
`;
