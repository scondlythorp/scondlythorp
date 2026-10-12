import React, { useState } from 'react';
import { Download, Printer, Mail, Phone, MapPin, Github, ExternalLink, CheckCircle2, FileText, AlertCircle, Copy, Check } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { educationData, certificationsData, leadershipData } from '../data/education';
import { achievementsData } from '../data/achievements';

export const CVPage: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [copiedPlaintext, setCopiedPlaintext] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadModalOpen(true);
  };

  const handleCopyPlaintext = () => {
    const plainTextCV = `MODOU LAMIN THORP
Software Developer | Full-Stack Engineering, AI & Emerging Technologies
Location: The Gambia, West Africa
Email: modoulaminthorp4@gmail.com
Phone: +220 874168300
GitHub: https://github.com/scondlythorp

PROFESSIONAL SUMMARY
Software Developer based in The Gambia with formal computer science education and practical full-stack engineering experience. Specializes in relational databases, robust REST APIs, authentication security, and multi-tenant applications using Node.js, Express, React, PostgreSQL, and Java. Top 8 Finalist in the Africa Elevate DRC Innovation Bootcamp 2026.

EDUCATION
Civil Service University, The Gambia
National Diploma in Computer Science (Completed, Certificate Pending Issuance)
Coursework: OOP (Java), Relational Databases & SQL, Web Development, Software Engineering, Computer Networking.

CORE TECHNICAL SKILLS
- Languages: JavaScript (ES6+), TypeScript, Java, Python, SQL, HTML5, CSS3
- Web & Frameworks: React 19, Next.js, Node.js, Express.js, REST APIs, Tailwind CSS, Vite
- Databases: PostgreSQL, Prisma ORM, MySQL, MongoDB, Database Normalization
- Security & Validation: JWT, bcrypt, Role-Based Access Control (RBAC), Zod Schema Validation
- AI & Data: Python, Streamlit, Pandas, NumPy, Decision Support Systems

FEATURED PROJECTS
1. Farm Management System (React 19, Node.js, Express 5, Prisma, PostgreSQL, Zod, JWT)
   Multi-tenant poultry platform tracking flock batches, mortality rates, feed warehouse inventory, and tenant-scoped financials.
2. Pharmacy Management System (Node.js, Express, PostgreSQL, Prisma, JWT, bcrypt, Zod, React)
   Dispensary inventory, batch expiry surveillance, and local payment modeling (Cash, Wave, Afrimoney).
3. ChiaLink (React, TypeScript, Node.js, Express, REST APIs)
   Pan-African agritech platform connecting smallholder farmers, cooperatives, and commodity buyers. Top 8 out of 20 at Africa Elevate DRC 2026.
4. AI Agriculture Decision Support Platform (Python, Streamlit, Pandas)
   Crop suitability scoring and weather risk advisories for Gambian smallholder farming.

HONORS & LEADERSHIP
- Top 8 Finalist — Africa Elevate DRC Innovation Bootcamp 2026 (Technical Lead, Team 3 ChiaLink)
- Information Technology Students Association (ITSA) — Active Member & Peer Mentor at Civil Service University`;

    navigator.clipboard.writeText(plainTextCV);
    setCopiedPlaintext(true);
    setTimeout(() => setCopiedPlaintext(false), 2500);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 print:hidden">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            Curriculum Vitae (CV)
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Comprehensive general-purpose engineering profile · Verified credentials and project architecture
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleCopyPlaintext}
            className="px-3.5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copiedPlaintext ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            {copiedPlaintext ? 'Copied to Clipboard' : 'Copy Plaintext CV'}
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            Print / Save PDF
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Printable / Viewable CV Paper Sheet */}
      <div className="w-full max-w-4xl mx-auto bg-slate-900 print:bg-white text-slate-100 print:text-slate-900 border border-slate-800 print:border-none rounded-2xl print:rounded-none p-6 sm:p-12 shadow-2xl print:shadow-none space-y-8">
        {/* CV Header */}
        <div className="border-b border-slate-800 print:border-slate-300 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-950 tracking-tight">
                {profileData.fullName}
              </h1>
              <p className="text-sm font-medium text-cyan-400 print:text-cyan-700 mt-1">
                {profileData.primaryTitle}
              </p>
            </div>
            <div className="text-xs text-slate-400 print:text-slate-600 sm:text-right font-mono">
              The Gambia, West Africa
            </div>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-slate-300 print:text-slate-700">
            <a href={`mailto:${profileData.email}`} className="flex items-center gap-1.5 hover:underline">
              <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-cyan-700" />
              <span>{profileData.email}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-cyan-700" />
              <span>{profileData.phone}</span>
            </span>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
              <Github className="w-3.5 h-3.5 text-cyan-400 print:text-cyan-700" />
              <span>github.com/scondlythorp</span>
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 print:border-slate-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
            Software Developer based in The Gambia with formal computer science education and practical full-stack engineering experience. Specializes in designing relational database schemas, robust REST APIs, authentication security, and multi-tenant applications using Node.js, Express, React, PostgreSQL, and Java. Actively engaged in applied AI, Python agronomic simulations, and continental innovation initiatives, including achieving Top 8 in the Africa Elevate DRC Innovation Bootcamp 2026.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 print:border-slate-300 pb-1">
            Education
          </h2>
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-white print:text-slate-900">
                Civil Service University, The Gambia
              </span>
              <span className="text-slate-400 print:text-slate-600 font-mono text-xs">
                Completed (Certificate Pending Issuance)
              </span>
            </div>
            <div className="text-xs text-cyan-300 print:text-cyan-800 font-medium">
              National Diploma in Computer Science
            </div>
            <p className="text-xs text-slate-400 print:text-slate-700 pt-1 leading-relaxed">
              Coursework: Object-Oriented Programming, Relational Databases & SQL, Web Application Development, Software Engineering, Computer Networking, Systems Analysis.
            </p>
          </div>
        </div>

        {/* Key Engineering Projects */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 print:border-slate-300 pb-1">
            Selected Software Projects
          </h2>

          <div className="space-y-4 text-xs">
            {projectsData.slice(0, 5).map((project) => (
              <div key={project.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-white print:text-slate-900 text-sm">
                    {project.title}
                  </div>
                  <div className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                    {project.status} · {project.role}
                  </div>
                </div>
                <div className="text-[11px] text-cyan-300 print:text-cyan-800 font-mono">
                  {project.technologies.join(' · ')}
                </div>
                <p className="text-slate-300 print:text-slate-800 leading-relaxed pt-0.5">
                  {project.description}
                </p>
                <ul className="list-disc list-inside text-slate-400 print:text-slate-700 space-y-0.5 pt-0.5">
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 print:border-slate-300 pb-1">
            Technical Competencies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="font-semibold text-white print:text-slate-900 block">Languages:</span>
              <span className="text-slate-300 print:text-slate-700">JavaScript (ES6+), TypeScript, Java, Python, SQL, HTML5, CSS3</span>
            </div>
            <div>
              <span className="font-semibold text-white print:text-slate-900 block">Web & Frameworks:</span>
              <span className="text-slate-300 print:text-slate-700">React 19, Next.js, Node.js, Express.js, REST APIs, Tailwind CSS, Vite</span>
            </div>
            <div>
              <span className="font-semibold text-white print:text-slate-900 block">Databases & Tools:</span>
              <span className="text-slate-300 print:text-slate-700">PostgreSQL, Prisma ORM, MySQL, MongoDB, Database Normalization</span>
            </div>
            <div>
              <span className="font-semibold text-white print:text-slate-900 block">Security & Validation:</span>
              <span className="text-slate-300 print:text-slate-700">JWT, bcrypt, Role-Based Access Control (RBAC), Zod Schema Validation</span>
            </div>
            <div>
              <span className="font-semibold text-white print:text-slate-900 block">AI & Data Engineering:</span>
              <span className="text-slate-300 print:text-slate-700">Python Applications, Streamlit, Pandas, NumPy, Decision Support Systems</span>
            </div>
            <div>
              <span className="font-semibold text-white print:text-slate-900 block">Research & Emerging Fields:</span>
              <span className="text-slate-300 print:text-slate-700">Flight Kinematics Simulation, Computer Vision Concepts, Telemetry & Sensor Models</span>
            </div>
          </div>
        </div>

        {/* Continental Honors & Leadership */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 border-b border-slate-800 print:border-slate-300 pb-1">
            Honors, Training & Leadership
          </h2>

          <div className="space-y-2 text-xs text-slate-300 print:text-slate-800">
            <div>
              <span className="font-bold text-white print:text-slate-900">
                Top 8 Finalist — Africa Elevate DRC Innovation Bootcamp 2026:
              </span>{' '}
              Technical Lead for Team 3 (ChiaLink MVP), competing among 20 startup teams across Africa.
            </div>

            <div>
              <span className="font-bold text-white print:text-slate-900">
                Information Technology Students Association (ITSA):
              </span>{' '}
              Active peer mentor and collaborative developer at Civil Service University.
            </div>

            <div>
              <span className="font-bold text-white print:text-slate-900">
                Specialized Training Modules:
              </span>{' '}
              Cybersecurity Fundamentals, Database Management Systems (DBMS), Data Science & Analytics, Effective Leadership, Professional Networking.
            </div>
          </div>
        </div>
      </div>

      {/* PDF Download Helper Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
              <Download className="w-5 h-5" />
              Download & Export Options
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              You can instantly save this formatted CV directly as a pristine PDF document using your browser&apos;s Print dialogue:
            </p>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-white">How to export:</div>
              <div>1. Click <strong>&quot;Print / Save PDF&quot;</strong> below.</div>
              <div>2. Set your printer destination to <strong>&quot;Save as PDF&quot;</strong>.</div>
              <div>3. Click Save.</div>
            </div>

            <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
              <strong className="text-slate-300">File replacement notice:</strong> To link a pre-rendered static PDF file, place <code className="text-cyan-400">Modou_Lamin_Thorp_CV.pdf</code> into <code className="text-cyan-400">public/documents/</code>.
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => { setDownloadModalOpen(false); handlePrint(); }}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Open Print & Save PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
