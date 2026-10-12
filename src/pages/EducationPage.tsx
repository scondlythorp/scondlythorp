import React from 'react';
import { GraduationCap, Award, BookOpen, Users, CheckCircle, Trophy, ShieldCheck } from 'lucide-react';
import { educationData, certificationsData, leadershipData } from '../data/education';
import { achievementsData } from '../data/achievements';

export const EducationPage: React.FC = () => {
  const edu = educationData[0];
  const hackathon = achievementsData[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Academic Foundations & Honors</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education, Training & Achievements
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Formal academic training in computer science, specialized professional certifications, and recognition in continental innovation competitions.
        </p>
      </section>

      {/* 1. Formal Degree Section */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-cyan-400 font-semibold">{edu.location}</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {edu.institution}
              </h2>
              <div className="text-sm text-slate-200 font-medium mt-1">
                {edu.degree}
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-800/50 text-xs font-medium shrink-0 self-start">
            <CheckCircle className="w-3.5 h-3.5" />
            {edu.status}
          </div>
        </div>

        {/* Coursework Matrix */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Core Curriculum & Technical Coursework
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {edu.coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="pt-2 border-t border-slate-800/80 space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Academic Highlights & Focus
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {edu.keyHighlights.map((hl, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">›</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Innovation Achievement: Africa Elevate DRC 2026 */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Hackathons & Competitions
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Continental Innovation Recognition
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/30 border border-cyan-800/40 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-800 text-cyan-300 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-cyan-400 font-semibold">{hackathon.context}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {hackathon.title}
                </h3>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  {hackathon.teamDetails}
                </div>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-700 text-cyan-300 font-mono text-xs font-bold shrink-0 self-start">
              {hackathon.placement}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
            {hackathon.description}
          </p>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
            <strong className="text-cyan-300 block mb-1">Impact & Deliverable:</strong>
            {hackathon.impact}
          </div>
        </div>
      </section>

      {/* 3. Training & Certifications */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Professional Development
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Specialized Training & Professional Learning
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Continuous skill acquisition across defensive security, database engineering, data science, and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="text-cyan-400 font-medium">{cert.category}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <h3 className="text-sm font-bold text-white">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  {cert.focus}
                </p>
              </div>

              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                Completed Professional Module
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership & Student Body Involvement */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-cyan-400 font-semibold">{leadershipData.institution}</div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {leadershipData.organization}
            </h3>
            <div className="text-xs text-slate-400 mt-0.5">{leadershipData.role}</div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
          {leadershipData.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
          {leadershipData.pillars.map((p, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
              {p}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
