import React from 'react'
import BlurFadeIn from './ui/BlurFadeIn'
import Badge from './ui/Badge'
import { aboutMe } from '../data/content'
import { Target, Layers, MapPin, Zap, UserCheck } from 'lucide-react'

export default function About() {
  const pillars = aboutMe.recruiterPillars || [
    { label: "Target Roles", value: "SDE-1 • Java Full Stack • ASE" },
    { label: "Core Stack", value: "Java, Spring Boot, React, MySQL, REST APIs" },
    { label: "Location & Status", value: "Bengaluru, India • Immediate / 2026 Grad" },
    { label: "Proven Impact", value: "70% Effort Automation • 80% UI Performance Gain" }
  ]

  const pillarIcons = [
    <Target key="target" size={16} className="text-[var(--accent)] shrink-0" />,
    <Layers key="layers" size={16} className="text-emerald-500 shrink-0" />,
    <MapPin key="map" size={16} className="text-amber-500 shrink-0" />,
    <Zap key="zap" size={16} className="text-violet-500 shrink-0" />
  ]

  return (
    <section id="about" className="scroll-mt-24 py-8 max-w-3xl mx-auto">
      <BlurFadeIn delay={0.05}>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="filled" className="gap-1.5 py-0.5">
            <UserCheck size={13} />
            Candidate Profile
          </Badge>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-3">
          About Me
        </h2>
      </BlurFadeIn>

      {/* Narrative Paragraphs */}
      <div className="space-y-4 text-[var(--muted)] text-base sm:text-lg leading-relaxed mb-8">
        {aboutMe.paragraphs.map((paragraph, index) => (
          <BlurFadeIn key={index} delay={0.12 + index * 0.08}>
            <p className="text-pretty">{paragraph}</p>
          </BlurFadeIn>
        ))}
      </div>

      {/* Recruiter Snapshot 2x2 Grid */}
      <BlurFadeIn delay={0.35}>
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xs">
          <h3 className="text-xs font-mono font-semibold tracking-wider text-[var(--muted)] uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
            Recruiter Quick Snapshot
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillars.map((item, idx) => (
              <div 
                key={item.label}
                className="flex items-start gap-3 p-3 rounded-xl bg-[var(--section-alt)]/60 border border-[var(--border)]/60"
              >
                <div className="mt-0.5 p-1 rounded-md bg-[var(--card)] shadow-2xs">
                  {pillarIcons[idx % pillarIcons.length]}
                </div>
                <div>
                  <span className="block text-[11px] font-medium text-[var(--muted)]">
                    {item.label}
                  </span>
                  <span className="block text-xs font-semibold text-[var(--foreground)] mt-0.5">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFadeIn>
    </section>
  )
}
