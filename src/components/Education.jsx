import { education } from '../data/content'
import BlurFadeIn from './ui/BlurFadeIn'

export default function Education() {
  const eduItems = [
    {
      degree: education.degree,
      school: education.school,
      meta: education.meta
    },
    {
      degree: education.schoolingDegree,
      school: education.schoolingSchool,
      meta: education.schoolingMeta
    }
  ]

  return (
    <section className="mb-12">
      <BlurFadeIn>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Education</h2>
      </BlurFadeIn>
      <div className="flex flex-col gap-4">
        {eduItems.map((item, idx) => (
          <BlurFadeIn key={idx} delay={0.1 * idx}>
            <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--section-alt)] text-sm font-semibold text-[var(--foreground)]">
                {item.school.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-[var(--foreground)] truncate">{item.school}</h3>
                <p className="text-xs text-[var(--muted)] mt-0.5">{item.degree}</p>
              </div>
              {item.meta && (
                <div className="shrink-0 text-xs text-right text-[var(--muted)]">
                  {item.meta}
                </div>
              )}
            </div>
          </BlurFadeIn>
        ))}
      </div>
    </section>
  )
}
