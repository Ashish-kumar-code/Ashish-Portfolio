import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'
import { IconGitHub, IconLinkedIn } from './ui/Icons'
import BlurFadeIn from './ui/BlurFadeIn'
import { profile, emailComposeUrl } from '../data/content'
import { useMode } from '../context/ModeContext'

const ROLES = [
  "Java Full Stack Developer",
  "Software Development Engineer (SDE)",
  "Associate Software Engineer (ASE)",
  "AI Tools Integrator"
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const { openResumeModal } = useMode()

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12 md:py-16 max-w-4xl mx-auto">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <BlurFadeIn delay={0.05}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for SDE / ASE Roles
          </div>
        </BlurFadeIn>

        <BlurFadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-3">
            {profile.name}
          </h1>
        </BlurFadeIn>

        <BlurFadeIn delay={0.18} className="h-8 mb-4 relative overflow-hidden flex items-center justify-center md:justify-start w-full">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={roleIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-lg md:text-2xl font-semibold text-[var(--accent)] absolute"
            >
              {ROLES[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </BlurFadeIn>

        <BlurFadeIn delay={0.25}>
          <p className="text-base text-[var(--muted)] max-w-xl mb-7 leading-relaxed">
            {profile.subTitle}
          </p>
        </BlurFadeIn>

        <BlurFadeIn delay={0.32} className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => openResumeModal('fullstack')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90 shadow-sm transition active:scale-95 cursor-pointer"
          >
            <FileText size={15} />
            <span>Request Resume</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 hover:bg-[var(--card-hover)] transition-all"
              aria-label="GitHub Profile"
            >
              <IconGitHub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 hover:bg-[var(--card-hover)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <IconLinkedIn size={18} />
            </a>
            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 hover:bg-[var(--card-hover)] transition-all cursor-pointer"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </BlurFadeIn>
      </div>

      <BlurFadeIn delay={0.15} className="flex-shrink-0">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-[var(--border)] shadow-md p-1 bg-[var(--card)]">
          <img
            src="/avatar.jpg"
            alt={profile.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </BlurFadeIn>
    </section>
  )
}
