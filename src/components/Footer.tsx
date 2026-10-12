import React from 'react';
import { Mail, Phone, MapPin, Github, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              {profileData.fullName}
            </h3>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              {profileData.primaryTitle}
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Building database-driven applications, robust REST APIs, practical agricultural technology, and software simulations from The Gambia, West Africa.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {profileData.location}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Featured Software Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lab')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  AI, Simulation & Drone Lab
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Technical Skills & Stack
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('education')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Education & Achievements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Biography & Personal Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cv')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Curriculum Vitae (CV)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="break-all">{profileData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{profileData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>github.com/scondlythorp</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {profileData.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>National Diploma in Computer Science</span>
            <span aria-hidden="true">·</span>
            <span>Civil Service University</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
