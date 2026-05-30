# Badal Maurya — Portfolio

Premium AI-powered frontend developer portfolio built with React.js, Tailwind CSS, and Claude AI.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up your API key
```bash
cp .env.example .env
```
Open `.env` and add your Anthropic API key:
```
REACT_APP_ANTHROPIC_API_KEY=sk-ant-your-key-here
```
Get your API key from: https://console.anthropic.com

### 3. Start the dev server
```bash
npm start
```
Opens at http://localhost:3000

---

## 📁 Folder Structure

```
badal-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Navigation + scroll progress bar
│   │   ├── Hero.jsx         ← Landing section with stats
│   │   ├── Skills.jsx       ← Technical skills grid
│   │   ├── Projects.jsx     ← Project cards
│   │   ├── AIChat.jsx       ← AI-powered chat widget
│   │   ├── Education.jsx    ← Education timeline
│   │   ├── Contact.jsx      ← Contact links
│   │   └── Footer.jsx       ← Footer
│   ├── hooks/
│   │   └── useChat.js       ← AI chat logic (Anthropic API)
│   ├── data/
│   │   └── resume.js        ← ✏️ Edit this to update content
│   ├── styles/
│   │   └── index.css        ← Global CSS variables & animations
│   ├── App.jsx
│   └── index.js
├── .env.example             ← Copy to .env and add your API key
├── package.json
└── tailwind.config.js
```

---

## ✏️ How to Update Content

All portfolio content lives in **`src/data/resume.js`**.
Edit that single file to update your name, skills, projects, education, etc.
The AI assistant also reads from this file automatically.

---

## 🌐 Deploy to Vercel (Free)

1. Push code to GitHub
2. Go to https://vercel.com → Import project
3. Add environment variable: `REACT_APP_ANTHROPIC_API_KEY`
4. Deploy!

---

## 🔒 Production Security Note

For production, move API calls to a backend server so your API key stays private:
- Create an Express.js `/api/chat` route
- Call that route from `useChat.js` instead of calling Anthropic directly
- Keep `ANTHROPIC_API_KEY` only on the server

---

## 🛠 Tech Stack

- **React.js** — UI components
- **Tailwind CSS** — Utility styling
- **Claude AI (claude-sonnet-4)** — AI chat assistant
- **Syne + DM Mono** — Typography
- **CSS Variables** — Theming system
