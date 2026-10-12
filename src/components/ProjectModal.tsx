import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Check, Layers, Database, ShieldAlert, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual Area */}
        <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
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
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white mt-1">
                {project.title}
              </h2>
            </div>

            {project.isConceptualVisual && (
              <span className="text-[11px] text-slate-400 bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded">
                Conceptual Interface Mockup
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Tagline & Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              {project.tagline}
            </p>

            <div className="flex items-center gap-3 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors whitespace-nowrap"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
              )}
            </div>
          </div>

          {/* Technology Badges (Unboxed metadata style) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-cyan-300">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Overview & Business Problem */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" /> System Overview & Purpose
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Implemented Features */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" /> Key Features & Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture & Engineering Highlights */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" /> Architecture & Implementation
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.architecturePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Model / Challenge Solved */}
          {(project.dataModelNotes || project.challengeSolved) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {project.dataModelNotes && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-semibold text-slate-200 flex items-center gap-1.5 mb-1.5">
                    <Database className="w-3.5 h-3.5 text-cyan-400" /> Data Modeling Architecture
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.dataModelNotes}
                  </p>
                </div>
              )}

              {project.challengeSolved && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-semibold text-slate-200 flex items-center gap-1.5 mb-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Engineering Challenge Solved
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.challengeSolved}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Real World Impact */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-slate-900 border border-cyan-900/40">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-1">
              Context & Practical Value
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.businessValue}
            </p>
          </div>

          {/* Footer note & CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>Role: <strong className="text-slate-200">{project.role}</strong></span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
