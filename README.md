# Modou Lamin Thorp — Personal Technology & Software Engineering Portfolio

This is the official personal technology and software engineering portfolio of **Modou Lamin Thorp**, Software Developer from The Gambia, West Africa.

---

## 🌟 Overview & Highlights

- **Full-Stack Software Engineering**: React 19, TypeScript, Node.js, Express, PostgreSQL, Prisma ORM, Zod, and JWT.
- **African Technology Innovation**: Real-world solutions including Farm Management, Pharmacy Management, PASSO transport fare system, and ChiaLink (Africa Elevate DRC Innovation Bootcamp 2026 Top 8 Finalist).
- **AI & Emerging Technology Lab**: Interactive in-browser simulations for Autonomous Drone Kinematics and Sahelian Agricultural Decision Support.
- **Complete Profile & Credentials**: National Diploma in Computer Science (Civil Service University, The Gambia), leadership in ITSA, and specialized professional certifications.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide React, Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Production Build & Vercel Deployment

```bash
npm run build
```

**Note on Vercel Deployment:**
The project includes a `.npmrc` file configured with `legacy-peer-deps=true` and an optimized dependency tree that resolves peer dependencies cleanly without `ERESOLVE` errors. When deploying to Vercel, simply connect your GitHub repository; the default Vite framework preset works out of the box with `npm run build`.

---

## 📁 Project Structure

```text
├── public/
│   ├── MLT.png           # Profile photo
│   ├── images/
│   │   └── profile/      # Profile avatar assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── documents/        # Place Modou_Lamin_Thorp_CV.pdf here
├── src/
│   ├── assets/           # Generated visual assets
│   ├── components/       # Reusable UI & interactive simulators
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── SimulationRunner.tsx    # Interactive drone flight simulator
│   │   └── AgriDecisionEngine.tsx  # Interactive agricultural decision engine
│   ├── data/             # Centralized structured data
│   │   ├── profile.ts    # Contact, bio, location, availability
│   │   ├── projects.ts   # All 8 verified software systems
│   │   ├── lab.ts        # AI, simulation & drone experiments
│   │   ├── skills.ts     # Categorized skills matrix
│   │   ├── education.ts  # Degree & certifications
│   │   └── achievements.ts # Hackathon & honors
│   ├── pages/            # Page views (Home, About, Projects, Lab, Skills, Education, CV, Contact)
│   ├── types/            # TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
```

---

## ✏️ How to Update Information

1. **Profile & Contact Details**: Edit `/src/data/profile.ts` to update your email, phone, location, bio, or availability status.
2. **Add or Modify Projects**: Edit `/src/data/projects.ts` to add new projects, update GitHub links, or modify descriptions.
3. **Lab Experiments**: Edit `/src/data/lab.ts` to add new simulation studies or robotics research.
4. **Skills**: Edit `/src/data/skills.ts` to adjust your skill levels or add new tools.
5. **CV Document**: Place your final static PDF in `/public/documents/Modou_Lamin_Thorp_CV.pdf`.
