import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { LabPage } from './pages/LabPage';
import { SkillsPage } from './pages/SkillsPage';
import { EducationPage } from './pages/EducationPage';
import { CVPage } from './pages/CVPage';
import { ContactPage } from './pages/ContactPage';
import { Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} onOpenProject={handleOpenProject} />;
      case 'about':
        return <AboutPage onNavigate={setActiveTab} />;
      case 'projects':
        return <ProjectsPage onOpenProject={handleOpenProject} />;
      case 'lab':
        return <LabPage />;
      case 'skills':
        return <SkillsPage />;
      case 'education':
        return <EducationPage />;
      case 'cv':
        return <CVPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setActiveTab} onOpenProject={handleOpenProject} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {renderActivePage()}
      </main>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseProject} />

      {/* Footer */}
      <Footer onNavigate={setActiveTab} />
    </div>
  );
}
