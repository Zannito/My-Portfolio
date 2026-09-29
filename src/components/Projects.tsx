import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ExternalLink, Github, Presentation, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Machine Learning', 'Computer Vision', 'NLP', 'Game Dev'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider mb-2">
              <span>Featured Works</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Engineering Portfolio</span>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Featured research projects and production-grade applications.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 border border-slate-200 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col overflow-hidden shadow-xs hover:shadow-xl hover:shadow-slate-200/60"
            >
              {/* Image Preview Container */}
              <div 
                className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

                {/* Top overlay unboxed metadata */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-slate-200 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Bottom overlay metric badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-300 bg-slate-950/85 px-2.5 py-1 rounded-md border border-white/10">
                    {project.metrics}
                  </span>
                  <span className="text-xs text-white bg-blue-600 hover:bg-blue-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1 transition-colors">
                    <span>Details</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  
                  {/* Zero-Pill Unboxed Role */}
                  <div className="text-xs font-semibold text-blue-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Role: {project.role}</span>
                  </div>

                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Technology unboxed line */}
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-mono text-slate-500 truncate">
                    {project.tags.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors font-semibold"
                  >
                    <span>Live App Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
                  >
                    <span>Architecture Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="flex items-center gap-4 text-slate-600">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 flex items-center gap-1 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>

                  <a
                    href={project.pitchDeckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 flex items-center gap-1 transition-colors"
                    title="Canva Pitch Deck"
                  >
                    <Presentation className="w-4 h-4 text-amber-500" />
                    <span className="hidden sm:inline">Pitch Deck</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
