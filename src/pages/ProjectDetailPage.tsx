import React from 'react';
import { ArrowLeft, ExternalLink, Github, Database, ShieldAlert, Cpu, Layers, CheckCircle2, ChevronRight, Server, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data/projects';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack, onSelectProject }) => {
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
          Back to Projects Gallery
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <span>Case Study</span>
          <span aria-hidden="true">/</span>
          <span className="text-cyan-400">{project.slug}</span>
        </div>
      </div>

      {/* Hero Showcase Banner */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">{project.status}</span>
                {project.teamSize && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{project.teamSize}</span>
                  </>
                )}
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live System
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Meta Bar */}
        <div className="p-6 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            <span className="text-slate-500 mr-2">Lead Role:</span>
            <strong className="text-white">{project.role}</strong>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 mr-1">Stack:</span>
            {project.technologies.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-[11px]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Architecture & Deep Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Deep Technical Narrative */}
        <div className="lg:col-span-8 space-y-8 text-slate-300 text-sm leading-relaxed">
          {/* Executive Overview */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              Problem Definition & Architectural Scope
            </h2>
            <p className="text-slate-300">
              {project.fullOverview}
            </p>
          </section>

          {/* Interactive Architecture & Data Flow Diagram */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-sky-400" />
              System Architecture & Transaction Pipeline
            </h2>
            
            <div className="p-4 sm:p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="text-xs text-slate-400 uppercase tracking-wide font-mono">
                Component Ingestion & Persistence Pipeline
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="text-cyan-400 font-bold font-mono">01. Ingestion Layer</div>
                  <p className="text-slate-400 text-[11px]">
                    REST Controller endpoints enforce Zod request schemas and JWT bearer authorization.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="text-sky-400 font-bold font-mono">02. Domain Services</div>
                  <p className="text-slate-400 text-[11px]">
                    Transactional business rules, unit conversions, multi-tenant isolation, and audit logging.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="text-emerald-400 font-bold font-mono">03. Persistence Layer</div>
                  <p className="text-slate-400 text-[11px]">
                    Relational PostgreSQL tables managed via Prisma ORM with foreign key cascades and indexes.
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-2 text-xs pt-2">
              {project.architecturePoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">›</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Key Implemented Capabilities */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Verified Feature Deliverables
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Value & Context */}
          <section className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-slate-900 border border-cyan-900/50 space-y-2 text-xs">
            <h3 className="text-sm font-bold text-cyan-300">
              Impact on Local Economic & Operational Realities
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.businessValue}
            </p>
          </section>
        </div>

        {/* Right Sidebar (4 cols): Data Model & Challenge Solved */}
        <div className="lg:col-span-4 space-y-6">
          {project.dataModelNotes && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Database className="w-4 h-4 text-cyan-400" />
                Data Model Invariants
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.dataModelNotes}
              </p>
            </div>
          )}

          {project.challengeSolved && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                Engineering Hurdle Overcome
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.challengeSolved}
              </p>
            </div>
          )}

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
            <h3 className="font-semibold text-white">Project Information</h3>
            <div className="space-y-2 text-slate-400">
              <div className="flex justify-between">
                <span>Category:</span>
                <span className="text-white font-medium">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-emerald-400 font-medium">{project.status}</span>
              </div>
              <div className="flex justify-between">
                <span>Visual Asset:</span>
                <span className="text-slate-300">{project.isConceptualVisual ? 'Illustrative UI Mockup' : 'Verified Production'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Project Switcher */}
      <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevProject ? (
          <button
            onClick={() => { onSelectProject(prevProject); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors text-left space-y-1 cursor-pointer"
          >
            <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Previous Case Study
            </div>
            <div className="text-sm font-bold text-white">{prevProject.title}</div>
          </button>
        ) : <div />}

        {nextProject && (
          <button
            onClick={() => { onSelectProject(nextProject); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors text-right space-y-1 cursor-pointer sm:ml-auto w-full"
          >
            <div className="text-[11px] text-slate-500 font-mono flex items-center justify-end gap-1">
              Next Case Study <ArrowRight className="w-3 h-3" />
            </div>
            <div className="text-sm font-bold text-white">{nextProject.title}</div>
          </button>
        )}
      </div>
    </div>
  );
};
