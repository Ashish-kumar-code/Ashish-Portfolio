import React from 'react';
import { hireabilityCards } from '../data/content';
import BlurFadeIn from './ui/BlurFadeIn';
import { TechIcon } from './ui/TechIcons';
import { Briefcase } from 'lucide-react';

export default function Hireability() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <BlurFadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
              <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
              Candidate Profile
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
            What I Bring as an SDE / ASE
          </h2>
          <p className="text-sm text-[var(--muted)] mb-8 max-w-2xl">
            Key areas of technical capability I bring to software engineering teams.
          </p>
        </BlurFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {hireabilityCards.map((card, index) => (
            <BlurFadeIn key={card.title} delay={index * 0.08}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:shadow-md hover:border-[var(--accent)]/30 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-[var(--foreground)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[var(--muted)] text-xs leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)] mt-auto">
                  {card.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--section-alt)] text-[var(--foreground)] border border-[var(--border)]"
                    >
                      <TechIcon name={skill} size={13} className="shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
