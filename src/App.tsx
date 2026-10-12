import React, { useState, useEffect } from 'react';
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
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { Project } from './types';
import { projectsData } from './data/projects';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);
  const [detailedProjectPage, setDetailedProjectPage] = useState<Project | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Synchronize hash on load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash.startsWith('project/')) {
        const slug = hash.replace('project/', '');
        const found = projectsData.find(p => p.slug === slug || p.id === slug);
        if (found) {
          setDetailedProjectPage(found);
          setActiveTab('projects');
          return;
        }
      }

      if (hash) {
        setDetailedProjectPage(null);
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    if (detailedProjectPage) {
      document.title = `${detailedProjectPage.title} — Modou Lamin Thorp Case Study`;
    } else {
      const tabNames: Record<string, string> = {
        home: 'Software Developer & Emerging Technologies',
        about: 'Biography & Engineering Story',
        projects: 'Software Projects Portfolio',
        lab: 'AI, Simulation & Drone Lab',
        skills: 'Technical Skills & Architecture',
        education: 'Education & Continental Achievements',
        cv: 'Curriculum Vitae',
        contact: 'Connect & Inquire'
      };
      const label = tabNames[activeTab] || 'Portfolio';
      document.title = `Modou Lamin Thorp — ${label}`;
    }
  }, [activeTab, detailedProjectPage]);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (tab: string) => {
    setDetailedProjectPage(null);
    setActiveTab(tab);
    window.location.hash = `#/${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProjectModal(project);
  };

  const handleOpenDedicatedPage = (project: Project) => {
    setDetailedProjectPage(project);
    window.location.hash = `#/project/${project.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjectsList = () => {
    setDetailedProjectPage(null);
    window.location.hash = '#/projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    if (detailedProjectPage) {
      return (
        <ProjectDetailPage
          project={detailedProjectPage}
          onBack={handleBackToProjectsList}
          onSelectProject={handleOpenDedicatedPage}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenProject={handleOpenDedicatedPage} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage onOpenProject={handleOpenDedicatedPage} />;
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
        return <HomePage onNavigate={handleNavigate} onOpenProject={handleOpenDedicatedPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar activeTab={detailedProjectPage ? 'projects' : activeTab} setActiveTab={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {renderActivePage()}
      </main>

      {/* Quick Preview Modal if triggered */}
      <ProjectModal project={selectedProjectModal} onClose={() => setSelectedProjectModal(null)} />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-700 hover:border-cyan-500 shadow-xl backdrop-blur transition-all hover:scale-105 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
