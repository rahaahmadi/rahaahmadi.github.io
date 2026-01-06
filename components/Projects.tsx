import React from 'react';
import { PROJECTS } from '../constants';
import { Project, ProjectType } from '../types';
import { ExternalLink, Github, FileText } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">

      {/* Project type header */}
{/* Project type (compact) */}
<div className="px-6 pt-4 pb-2 bg-white">
  <span
    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold
      ${
        project.type === ProjectType.PUBLICATION
          ? 'bg-purple-100 text-purple-700'
          : project.type === ProjectType.RESEARCH
          ? 'bg-blue-100 text-blue-700'
          : 'bg-green-100 text-green-700'
      }
    `}
  >
    {project.type}
  </span>
</div>

{/* Image */}
<div className="aspect-[16/9] overflow-hidden bg-slate-100 group">
  <img
    src={project.imageUrl}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>


      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="text-base font-medium text-slate-500 italic mb-4">
              {project.subtitle}
            </p>
          )}

          <p className="text-slate-600 text-base leading-relaxed mb-5">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-5">
          <div className="flex flex-wrap gap-2.5 mb-5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1.5 bg-slate-50 text-slate-600 text-sm rounded border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {link.type === 'code' ? (
                    <Github size={18} className="mr-2" />
                  ) : link.type === 'paper' ? (
                    <FileText size={18} className="mr-2" />
                  ) : (
                    <ExternalLink size={18} className="mr-2" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A collection of publications, research initiatives, and engineering projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
