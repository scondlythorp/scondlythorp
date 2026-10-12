import React, { useState, useMemo } from 'react';
import { Search, Filter, Github, ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';

interface ProjectsPageProps {
  onOpenProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const categories: (string | ProjectCategory)[] = [
    'All',
    'Full-Stack',
    'Backend & APIs',
    'African Innovation',
    'AI & Data',
    'Mobile & Java'
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      // Category filter
      if (selectedCategory !== 'All' && project.category !== selectedCategory) {
        return false;
      }
      // Status filter
      if (selectedStatus !== 'All' && project.status !== selectedStatus) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTagline = project.tagline.toLowerCase().includes(query);
        const matchesTech = project.technologies.some(t => t.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesTagline || matchesTech;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Software Engineering Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Verified Software Projects
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Explore complete full-stack web applications, REST APIs, enterprise Java architectures, and agricultural technology systems engineered with modern standards.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by technology, name, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="text-xs text-slate-400 font-mono">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </div>
        </div>

        {/* Category Segmented Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
          <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Domain:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Gallery Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col group hover:border-slate-700 transition-colors shadow-lg"
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
                
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] text-cyan-300 bg-slate-950/80 border border-slate-800 px-2.5 py-0.5 rounded font-medium">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[11px] text-slate-300 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack: Clean unboxed text with typographic separators */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono mb-4 pt-2">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300">{tech}</span>
                        {i < Math.min(4, project.technologies.length - 1) && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <button
                      onClick={() => onOpenProject(project)}
                      className="text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      Case Study
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-1"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-1"
                          aria-label={`Open ${project.title} Live Preview`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <Layers className="w-8 h-8 text-slate-500 mx-auto" />
          <h3 className="text-base font-semibold text-white">No projects found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query or selecting a different category filter above.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="px-4 py-2 text-xs font-medium text-cyan-400 hover:underline"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
