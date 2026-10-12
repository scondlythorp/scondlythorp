import React from 'react';
import { Mail, MapPin, Github, ArrowRight, ExternalLink, GraduationCap, Users, Lightbulb, Compass, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { educationData, leadershipData } from '../data/education';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const edu = educationData[0];

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header Intro */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Biography & Professional Journey</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Modou Lamin Thorp
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          {profileData.primaryTitle}
        </p>

        {/* Contact Strip */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{profileData.email}</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{profileData.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onNavigate('projects')}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              Explore My Projects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Contact Me
            </button>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              View My GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Main Story Narrative */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-8 space-y-6 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Who I Am & What Drives My Work
          </h2>

          <p>
            I am Modou Lamin Thorp, a software developer from The Gambia with a completed National Diploma in Computer Science from Civil Service University.
          </p>

          <p>
            My journey in technology is driven by a passion for understanding how software and intelligent systems work and how they can solve real-world problems. I work across full-stack web development, backend engineering, databases, Python-based applications, and AI-oriented technology projects.
          </p>

          <p>
            My software development work includes database-driven applications, REST APIs, authentication systems, business management platforms, agricultural technology, and solutions designed around practical needs in The Gambia and the wider African context.
          </p>

          <p>
            Beyond conventional web development, I am interested in artificial intelligence, machine learning, Python simulations, drone programming, robotics, automation, and emerging technologies. These interests allow me to explore how software can interact with data, physical systems, intelligent decision-making, and the world around us.
          </p>

          <p>
            I enjoy experimenting with new ideas, solving technical problems, developing practical projects, and learning by building. I also value collaboration, technical discussions, and opportunities to work with people who are creating meaningful technology.
          </p>

          <p className="text-slate-200 font-medium">
            My long-term goal is to continue growing as a versatile engineer, contribute to impactful technology products, and develop solutions that create opportunities across Africa and beyond.
          </p>

          {/* Development Philosophy */}
          <div className="pt-6 space-y-4 border-t border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              Engineering Philosophy & Principles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-semibold text-white">Pragmatic African Innovation</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Focus on software that addresses actual bottlenecks—such as agricultural supply chain opacity, pharmacy inventory shrinkage, and transit stage fares.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-semibold text-white">Relational Integrity First</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Carefully normalize database schemas, enforce database constraints, and validate inputs before business logic executes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-semibold text-white">Truthful Technical Transparency</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Always clearly distinguish what is built, what is prototyped, and what is being actively explored or simulated.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-semibold text-white">Continuous Building & Learning</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  The deepest understanding comes from engineering full systems from database migrations to responsive frontends.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Quick Profile Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-2xl font-mono shadow-md">
              MLT
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{profileData.fullName}</h3>
              <p className="text-xs text-slate-400">{profileData.primaryTitle}</p>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Location:</span>
                <span className="text-slate-200">{profileData.location}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Education:</span>
                <span className="text-slate-200">ND in Computer Science</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Institution:</span>
                <span className="text-slate-200">Civil Service University</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Availability:</span>
                <span className="text-cyan-400">Open for Work</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                github.com/scondlythorp
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Experience Categorization */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technical Experience Levels
            </h4>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-emerald-400 font-semibold block">Production & Implemented:</span>
                <span className="text-slate-300">React, TypeScript, Node.js, Express, PostgreSQL, Prisma, Java OOP, REST APIs, Zod, JWT.</span>
              </div>
              <div>
                <span className="text-sky-400 font-semibold block">Working Experience & Projects:</span>
                <span className="text-slate-300">Python, Streamlit, Spring Boot, Android MVVM, MySQL, MongoDB, Agronomic Decision Systems.</span>
              </div>
              <div>
                <span className="text-amber-400 font-semibold block">Active Exploration & Research:</span>
                <span className="text-slate-300">Drone flight simulation, robotics telemetry, computer vision pipelines, sensor filtering.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Community Involvement */}
      <section className="space-y-6 pt-6 border-t border-slate-800">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Community & Collaboration
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Leadership & Peer Collaboration
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">
                {leadershipData.organization}
              </h3>
              <p className="text-xs text-cyan-400">
                {leadershipData.role} · {leadershipData.institution}
              </p>
              <p className="text-xs text-slate-300 pt-2 leading-relaxed max-w-3xl">
                {leadershipData.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
            {leadershipData.pillars.map((pillar, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
