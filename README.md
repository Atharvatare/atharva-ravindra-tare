# ⚡ Atharva Ravindra Tare | Personal Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

> A futuristic, animated, and highly interactive personal portfolio website showcasing my journey as an Electrical Engineering student, Full-Stack Developer, and IoT Innovator.

🌐 **Live Demo:** [https://atharva-ravindra-tare.vercel.app/](https://atharva-ravindra-tare.vercel.app/)

---

## ✨ Key Features

- **Premium UI/UX:** Built with a modern glassmorphism design system, featuring frosted glass cards (`backdrop-blur`), electric glow hover effects, and smooth gradient scrollbars.
- **Dynamic Animations:** Powered by `framer-motion` for buttery-smooth scroll reveals, staggering list items, layout animations, and an animated custom splash screen.
- **Interactive Background:** A custom-built HTML5 Canvas particle network that connects nodes and subtly reacts to mouse movements.
- **Data-Driven Architecture:** The entire website's content is fed from a single source of truth (`src/data/resume.json`), making updates seamless without touching the React components.
- **Advanced Project Filtering:** Projects are categorized and filterable by `Software`, `Hardware`, and `IoT`, complete with complexity badges and expandable tech stacks.
- **Custom Data Visualizations:** Features an animated CSS-based bar chart to map out academic CGPA progression.
- **Responsive Design:** 100% mobile-friendly with a custom sliding navigation drawer and adaptive grid layouts.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Motion (Framer Motion) |
| **Icons** | Lucide React |
| **Deployment** | Vercel (Continuous Deployment) |
| **Code Quality** | ESLint, Prettier |

---

## 🚀 Getting Started (Local Development)

If you'd like to run this portfolio locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Atharvatare/atharva-ravindra-tare.git
   cd atharva-ravindra-tare
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to `http://localhost:5173/`

### Building for Production
To create a production-ready build:
```bash
npm run build
```
The optimized files will be generated in the `dist` folder.

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable React components
│   ├── Achievements.tsx # Animated stat counters & milestones
│   ├── AnimatedBackground.tsx # Canvas particle network
│   ├── Education.tsx    # Timeline and CGPA Bar Chart
│   ├── Experience.tsx   # Professional timeline with expandables
│   ├── Footer.tsx       # Contact info & social links
│   ├── Hero.tsx         # Typing effect & intro
│   ├── Navbar.tsx       # Sticky glassmorphism header
│   ├── Projects.tsx     # Filterable project grid
│   ├── Skills.tsx       # Categorized skill badges
│   └── SplashScreen.tsx # Initial loading animation
├── data/
│   └── resume.json      # SINGLE SOURCE OF TRUTH for all site data
├── App.tsx              # Main assembly component
├── main.tsx             # Entry point
└── index.css            # Tailwind base & custom animation keyframes
```

---

## 👨‍💻 Author

**Atharva Ravindra Tare**
*Final Year B.Tech EE @ SBJ Institute of Technology, Nagpur*

- **LinkedIn:** [Atharva Tare](https://www.linkedin.com/in/atharva-tare-68331028b)
- **GitHub:** [@Atharvatare](https://github.com/Atharvatare)
- **Email:** atharvatare3005@gmail.com

---
*Designed & Developed with ⚡ and 💙 by Atharva Tare.*
