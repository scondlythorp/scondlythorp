import React from 'react';
import { ArrowRight, Github, Mail, Layers, Cpu, Database, Compass, Award, ExternalLink, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { achievementsData } from '../data/achievements';
import { Project } from '../types';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProject }) => {
  const featuredProjects = projectsData.filter(p => p.featured);
  const hackathonAchievement = achievementsData[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. Hero Section: Split-Screen Hero with 1440px desktop baseline */}
      <section className="pt-8 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={profileData.avatarImage || "/MLT.png"}
                alt="Modou Lamin Thorp"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-cyan-400/50 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
                  <span>{profileData.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400">Civil Service University</span>
                </div>
                <div className="text-xs text-slate-300 font-semibold">{profileData.fullName}</div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Building Resilient Software, Practical AI & Emerging Systems.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I am <strong className="text-white font-semibold">{profileData.fullName}</strong>, a software developer from The Gambia. I build database-driven applications, multi-tenant platforms, REST APIs, Python simulations, and technology solutions tailored to real African contexts.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('cv')}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors cursor-pointer"
              >
                View Full CV
              </button>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Core Stack:</span>
              <span>React 19</span>
              <span aria-hidden="true">·</span>
              <span>Node.js & Express</span>
              <span aria-hidden="true">·</span>
              <span>PostgreSQL & Prisma</span>
              <span aria-hidden="true">·</span>
              <span>Python</span>
              <span aria-hidden="true">·</span>
              <span>Java</span>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-2xl">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/src/assets/images/farm_management_dashboard_1791766906707.jpg"
                  alt="Farm Management Platform Showcase"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="text-cyan-400 font-medium">Featured Case Study</span>
                  <span>Completed MVP</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Farm Management System
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Multi-tenant poultry farm platform organizing flock lifecycle, mortality tracking, feed warehouse inventory, and tenant-scoped financials.
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">React 19 · Node.js · PostgreSQL · Prisma</span>
                  <button
                    onClick={() => onOpenProject(projectsData[0])}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Capability Strip below hero split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-xs text-slate-400">Academic Background</div>
            <div className="text-sm font-semibold text-slate-100 mt-1">National Diploma</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Civil Service University</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-xs text-slate-400">Continental Hackathon</div>
            <div className="text-sm font-semibold text-cyan-400 mt-1">Top 8 Finalist</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Africa Elevate DRC 2026</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-xs text-slate-400">Software Projects</div>
            <div className="text-sm font-semibold text-slate-100 mt-1">8 Verified Systems</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Full-Stack, APIs & Python</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-xs text-slate-400">Technology Focus</div>
            <div className="text-sm font-semibold text-slate-100 mt-1">AI & Simulations</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Kinematics & Agritech</div>
          </div>
        </div>
      </section>

      {/* 2. Core Areas of Work */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Technical Domains
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Core Areas of Engineering & Exploration
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            My work combines practical production web systems with applied data science, Python simulations, and emerging hardware-software interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Full-Stack */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Full-Stack Development</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing complete web applications using React 19, TypeScript, Vite, and Node.js. Structuring clean state management, modular components, and responsive viewports.
            </p>
            <div className="text-[11px] text-slate-400 font-mono pt-2">
              React · Next.js · Node.js · Express · REST
            </div>
          </div>

          {/* Card 2: Backend & APIs */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-sky-950/60 text-sky-400 border border-sky-800/40">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Backend Systems & APIs</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Architecting secure REST APIs with Node.js Express, Java Spring Boot, and PostgreSQL. Enforcing JWT authentication, bcrypt hashing, Zod validation, and error boundaries.
            </p>
            <div className="text-[11px] text-slate-400 font-mono pt-2">
              Express · Spring Boot · JWT · Zod · RBAC
            </div>
          </div>

          {/* Card 3: Databases */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-800/40">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Databases & Data Engineering</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Relational data modeling, 3NF schema normalization, Prisma ORM migrations, transactional consistency, and query optimization across PostgreSQL and MySQL.
            </p>
            <div className="text-[11px] text-slate-400 font-mono pt-2">
              PostgreSQL · Prisma ORM · MySQL · MongoDB
            </div>
          </div>

          {/* Card 4: AI & ML */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">AI & Machine Learning</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Building practical decision-support tools using Python and Streamlit. Formulating crop suitability algorithms, data preprocessing pipelines, and analytical interfaces.
            </p>
            <div className="text-[11px] text-slate-400 font-mono pt-2">
              Python · Streamlit · Pandas · Decision Logic
            </div>
          </div>

          {/* Card 5: Drone & Simulation */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-amber-950/60 text-amber-400 border border-amber-800/40">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Drone & Kinematic Simulation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simulating flight paths, waypoint heading vectors, and LiPo battery degradation curves in software. Investigating sensor telemetry, IMU filtering, and robotics concepts.
            </p>
            <div className="text-[11px] text-slate-400 font-mono pt-2">
              Flight Kinematics · Telemetry · Sensors
            </div>
          </div>

          {/* Card 6: African Tech Innovation */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-teal-950/60 text-teal-400 border border-teal-800/40">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">African Tech Innovation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Developing technology centered on genuine local realities: agricultural market linkages (ChiaLink), dispensary inventory, local mobile money modeling (Wave/Afrimoney), and transport fares.
            </p>
            <div className="text-[11px] text-slate-400 font-mono pt-2">
              Agritech · Public Transit · Local Payments
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Showcase */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Selected Works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Featured Software Projects
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Production-ready platforms, full-stack architectures, and continental competition MVPs.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            Browse All 8 Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col group hover:border-slate-700 transition-colors"
            >
              {/* Project Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] text-slate-300 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-cyan-400 mb-1">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{project.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < Math.min(3, project.technologies.length - 1) && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <button
                      onClick={() => onOpenProject(project)}
                      className="text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      Case Study Details
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Innovation Highlight: Africa Elevate DRC 2026 */}
      <section className="rounded-2xl border border-cyan-900/50 bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 p-6 sm:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Award className="w-4 h-4" />
              Pan-African Innovation Achievement
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {hackathonAchievement.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span>{hackathonAchievement.context}</span>
              <span aria-hidden="true">·</span>
              <span className="text-cyan-300 font-semibold">{hackathonAchievement.placement}</span>
              <span aria-hidden="true">·</span>
              <span>{hackathonAchievement.teamDetails}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {hackathonAchievement.description} {hackathonAchievement.impact}
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenProject(projectsData[2])}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
              >
                Read ChiaLink Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('education')}
                className="text-xs text-slate-300 hover:text-white font-medium cursor-pointer"
              >
                View All Achievements
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs rounded-xl overflow-hidden border border-cyan-800/40 bg-slate-950/60 p-4 space-y-3">
              <div className="text-xs text-slate-400 uppercase tracking-wide">Competition Outcome</div>
              <div className="text-3xl font-extrabold text-cyan-400 font-mono">TOP 8</div>
              <div className="text-xs text-slate-300">
                Selected among 20 competitive startup teams across the African continent.
              </div>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                Category: Agritech Value Chain & Market Visibility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI, Simulation & Drone Lab Spotlight */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Experimental Frontiers
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              AI, Simulation & Emerging Technology Lab
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Interactive flight kinematics simulations, agronomic decision-support engines, and computer vision research.
            </p>
          </div>

          <button
            onClick={() => onNavigate('lab')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            Launch Lab Environment
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs text-cyan-400 font-mono">Interactive In-Browser Simulations</div>
            <h3 className="text-lg font-bold text-white">
              Autonomous Drone Kinematics & Agricultural Decision Engine
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Explore mathematical models of multi-point drone waypoint navigation, heading vectors, and battery discharge curves, or test crop suitability predictions across Gambian soil profiles.
            </p>
          </div>
          <button
            onClick={() => onNavigate('lab')}
            className="px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
          >
            Open Interactive Lab
          </button>
        </div>
      </section>

      {/* 6. Contact Call to Action */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12 text-center space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Professional Inquiries
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white max-w-xl mx-auto">
          Interested in Collaborating or Discussing Opportunities?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          {profileData.availability}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Send a Direct Message
          </button>
          <a
            href={`mailto:${profileData.email}`}
            className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
          >
            {profileData.email}
          </a>
        </div>
      </section>
    </div>
  );
};
