import React from 'react';
import { skillsData } from '../data/skills';
import { CheckCircle2, Search, BookOpen, Compass } from 'lucide-react';

export const SkillsPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Technical Competencies & Stack</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering Skills & Disciplines
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Categorized technical skills organized by practical application. Reflects production and project capabilities, with an explicit separation between established implementation experience and active exploration domains.
        </p>

        {/* Legend */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span><strong className="text-white">Core Practical:</strong> Applied in completed projects & full-stack systems</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
            <span><strong className="text-white">Working Experience:</strong> Used in academic builds, prototypes & data scripts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span><strong className="text-white">Active Exploration:</strong> Algorithmic simulations, R&D & emerging studies</span>
          </div>
        </div>
      </section>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-bold text-white">
                {category.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="space-y-3 pt-4">
                {category.skills.map((skill) => {
                  let badgeDot = "bg-emerald-400";
                  let levelColor = "text-emerald-400";
                  if (skill.level === "Working Experience") {
                    badgeDot = "bg-sky-400";
                    levelColor = "text-sky-400";
                  } else if (skill.level === "Active Exploration") {
                    badgeDot = "bg-amber-400";
                    levelColor = "text-amber-400";
                  }

                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-100">{skill.name}</span>
                        <span className={`text-[11px] font-mono flex items-center gap-1.5 ${levelColor}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${badgeDot}`}></span>
                          {skill.level}
                        </span>
                      </div>
                      {skill.highlight && (
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
