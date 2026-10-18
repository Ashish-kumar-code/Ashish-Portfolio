import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, LayoutTemplate, ArrowRight } from 'lucide-react';
import { IconGitHub } from './ui/Icons';
import { projects } from '../data/content';
import BlurFadeIn from './ui/BlurFadeIn';
import Badge from './ui/Badge';
import { TechIcon } from './ui/TechIcons';

function ProjectCard({ project }) {
  const [showArch, setShowArch] = useState(false);

  return (
    <div className="border border-[var(--border)] bg-[var(--card)] rounded-xl overflow-hidden hover:shadow-md transition flex flex-col h-full">
      <div className="w-full h-56 bg-[var(--section-alt)] overflow-hidden border-b border-[var(--border)]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">{project.title}</h3>
          <p className="text-sm text-[var(--muted)] mb-3">{project.subtitle}</p>
          <Badge variant="filled">{project.role}</Badge>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-[var(--section-alt)] p-3 rounded-lg text-center">
            <span className="block text-xs text-[var(--muted)] mb-1">Scale</span>
            <span className="font-semibold text-[var(--foreground)] text-sm">{project.metrics.left}</span>
          </div>
          <div className="flex-1 bg-[var(--section-alt)] p-3 rounded-lg text-center">
            <span className="block text-xs text-[var(--muted)] mb-1">Tech</span>
            <span className="font-semibold text-[var(--foreground)] text-sm">{project.metrics.right}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span 
                key={tech} 
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--section-alt)] text-[var(--foreground)] border border-[var(--border)]"
              >
                <TechIcon name={tech} size={13} className="shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-[var(--border)] flex flex-wrap gap-3 justify-between items-center">
          <div className="flex gap-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <IconGitHub className="w-4 h-4" /> Code
            </a>
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live
            </a>
          </div>
          
          {project.architecture && (
            <button 
              onClick={() => setShowArch(!showArch)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--foreground)] transition-colors"
            >
              <LayoutTemplate className="w-4 h-4" /> 
              {showArch ? 'Hide Architecture' : 'View Architecture'}
            </button>
          )}
        </div>

        <AnimatePresence>
          {showArch && project.architecture && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-[var(--section-alt)] rounded-lg">
                <p className="text-xs font-semibold text-[var(--muted)] mb-4 uppercase tracking-wider">
                  Architecture Flow ({project.architecture.type})
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                  {project.architecture.nodes.map((node, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                      <div className="bg-[var(--card)] p-3 rounded border border-[var(--border)] text-center w-full md:w-32 flex-shrink-0 shadow-sm">
                        <div className="text-xs font-bold text-[var(--foreground)] mb-1">{node.label}</div>
                        <div className="text-[10px] text-[var(--muted)] leading-tight">{node.desc}</div>
                      </div>
                      {idx < project.architecture.nodes.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[var(--muted)] my-2 md:my-0 md:mx-2 rotate-90 md:rotate-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFadeIn className="text-center mb-16">
          <Badge variant="filled" className="mb-4">My Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Check out my latest work
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A selection of my recent projects focusing on full-stack development, AI integration, and scalable architecture.
          </p>
        </BlurFadeIn>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <BlurFadeIn key={project.id} delay={0.1 * index}>
              <ProjectCard project={project} />
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
