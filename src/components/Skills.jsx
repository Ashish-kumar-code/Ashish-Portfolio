import React from 'react';
import { skillsGrouped } from '../data/content';
import skillsData from '../data/skills.json';
import BlurFadeIn from './ui/BlurFadeIn';
import Badge from './ui/Badge';
import { TechIcon } from './ui/TechIcons';
import { Sparkles, Compass } from 'lucide-react';

export default function Skills() {
  const { learningRoadmap } = skillsData;

  return (
    <section id="skills" className="scroll-mt-24 py-12">
      <div className="max-w-5xl mx-auto">
        <BlurFadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
            Skills & Technologies
          </h2>
          <p className="text-sm text-[var(--muted)] mb-10 max-w-2xl">
            Specialized in Java enterprise ecosystems, modern React frontends, scalable backend services, and AI-powered automation workflows.
          </p>
        </BlurFadeIn>

        {/* Grouped Skills with Official Colored Tech Logos */}
        <div className="space-y-8 mb-16">
          {skillsGrouped.map((group, index) => (
            <BlurFadeIn key={group.category} delay={index * 0.08}>
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-sm shadow-xs transition hover:border-[var(--accent)]/30">
                <h3 className="text-sm font-semibold tracking-wide text-[var(--foreground)] uppercase mb-3.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-[var(--accent)]/40 hover:bg-[var(--card-hover)] cursor-default"
                    >
                      <TechIcon name={skill} size={15} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFadeIn>
          ))}
        </div>

        {/* Learning & Engineering Roadmap */}
        <BlurFadeIn delay={0.3}>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
              <Compass className="w-3.5 h-3.5 text-[var(--accent)]" />
              Continuous Growth
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Engineering Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {learningRoadmap.map((item, index) => (
              <BlurFadeIn key={item.topic} delay={0.35 + index * 0.08}>
                <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md hover:border-[var(--accent)]/30 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <h4 className="font-semibold text-sm text-[var(--foreground)] leading-snug">
                        {item.topic}
                      </h4>
                      <Badge variant="filled" className="text-[10px] py-0.5 px-2 shrink-0">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-[var(--muted)] mb-5 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-[var(--muted)] mb-1.5">
                      <span>Competency</span>
                      <span className="font-semibold text-[var(--accent)]">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[var(--section-alt)] overflow-hidden">
                      <div 
                        className="h-full bg-[var(--accent)] rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </BlurFadeIn>
            ))}
          </div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
