import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            SELECTED PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-3">
                <h3 
                  onClick={() => setActiveModalProject(project)}
                  className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Action Links Bar */}
              <div className="px-6 sm:px-7 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
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
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="flex items-center gap-4 text-slate-600">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 flex items-center gap-1.5 transition-colors font-semibold"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
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
