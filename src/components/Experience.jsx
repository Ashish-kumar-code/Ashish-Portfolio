import { experience } from '../data/content'
import BlurFadeIn from './ui/BlurFadeIn'
import AccordionCard from './ui/AccordionCard'
import { Globe } from 'lucide-react'
import { IconGitHub } from './ui/Icons'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 mb-12">
      <BlurFadeIn>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Work Experience</h2>
      </BlurFadeIn>
      <div className="flex flex-col gap-4">
        {experience.map((exp, idx) => (
          <BlurFadeIn key={idx} delay={0.1 * idx}>
            <AccordionCard
              title={exp.org}
              subtitle={exp.role}
              period={exp.date}
              bullets={exp.bullets}
              avatarText={exp.org.charAt(0)}
              links={[
                ...(exp.github ? [{ label: 'GitHub', url: exp.github, icon: <IconGitHub className="w-3 h-3" /> }] : []),
                ...(exp.work ? [{ label: 'Demo', url: exp.work, icon: <Globe className="w-3 h-3" /> }] : [])
              ]}
            />
          </BlurFadeIn>
        ))}
      </div>
    </section>
  )
}
