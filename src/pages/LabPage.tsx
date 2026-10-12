import React, { useState } from 'react';
import { Compass, Sprout, Eye, Cpu, AlertCircle, Sparkles, Sliders, Terminal } from 'lucide-react';
import { labExperimentsData } from '../data/lab';
import { SimulationRunner } from '../components/SimulationRunner';
import { AgriDecisionEngine } from '../components/AgriDecisionEngine';
import { PythonCodeRunner } from '../components/PythonCodeRunner';

export const LabPage: React.FC = () => {
  const [activeInteractiveSim, setActiveInteractiveSim] = useState<'drone-sim' | 'agri-decision' | 'python-cli'>('drone-sim');

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>R&D, Algorithms & Computational Systems</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          AI, Simulation & Emerging Technology Lab
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Exploring software boundaries beyond conventional web applications: autonomous drone flight kinematics, agricultural heuristic decision models, computer vision pipelines, and embedded sensor architectures.
        </p>

        {/* Integrity Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-200">Experimental Integrity Note:</strong> The models below are developed in software and simulation environments. Physical drone avionics testing and automated hardware deployments are planned subsequent phases. Work is represented precisely as simulated or prototyped.
          </div>
        </div>
      </section>

      {/* Interactive Simulation Console */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Interactive Workbench
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Run Computational Simulators In-Browser
            </h2>
          </div>

          {/* Switcher */}
          <div className="flex flex-wrap items-center p-1 rounded-lg bg-slate-900 border border-slate-800 gap-1">
            <button
              onClick={() => setActiveInteractiveSim('drone-sim')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeInteractiveSim === 'drone-sim'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Drone Kinematics Sim
            </button>
            <button
              onClick={() => setActiveInteractiveSim('agri-decision')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeInteractiveSim === 'agri-decision'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sprout className="w-3.5 h-3.5" />
              Agri Decision Engine
            </button>
            <button
              onClick={() => setActiveInteractiveSim('python-cli')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeInteractiveSim === 'python-cli'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Python CLI & Code
            </button>
          </div>
        </div>

        {/* Selected Interactive Component */}
        {activeInteractiveSim === 'drone-sim' && <SimulationRunner />}
        {activeInteractiveSim === 'agri-decision' && <AgriDecisionEngine />}
        {activeInteractiveSim === 'python-cli' && <PythonCodeRunner />}
      </section>

      {/* Lab Experiment Portfolio Cards */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Research & Prototyping Catalogue
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Documented Experiments & Explorations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labExperimentsData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-semibold">{exp.category}</span>
                  <span className="text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {exp.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {exp.title}
                </h3>

                <div className="space-y-1.5 text-xs">
                  <div className="text-slate-400 font-medium">Technical Objective:</div>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.objective}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="text-slate-400 font-medium">Approach & Method:</div>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Key Findings */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5 text-xs">
                  <div className="text-cyan-300 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Measured Findings & Outcomes
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.findingsOrOutcomes}
                  </p>
                </div>

                {/* Lessons Learned */}
                <div className="text-xs space-y-1">
                  <span className="text-slate-400 font-medium">Lessons Learned:</span>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.lessonsLearned}
                  </p>
                </div>
              </div>

              {/* Tools & Status */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                  {exp.tools.map((tool, idx) => (
                    <React.Fragment key={tool}>
                      <span className="text-slate-300">{tool}</span>
                      {idx < exp.tools.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {exp.explorationNotice && (
                  <div className="text-[11px] text-slate-400 italic">
                    {exp.explorationNotice}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
