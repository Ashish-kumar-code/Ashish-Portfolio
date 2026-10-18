import { timeline } from '../data/content'
import BlurFadeIn from './ui/BlurFadeIn'
import Badge from './ui/Badge'

export default function Timeline() {
  return (
    <section className="mb-12">
      <BlurFadeIn>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">My Journey</h2>
      </BlurFadeIn>
      <div className="relative border-l-2 border-[var(--border)] ml-3 pl-6 space-y-8">
        {timeline.map((item, idx) => (
          <BlurFadeIn key={idx} delay={0.1 * idx} className="relative">
            <div className="absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full bg-[var(--accent)]" />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center">
                <Badge variant="filled" className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider">
                  {item.year}
                </Badge>
              </div>
              <h3 className="text-base font-semibold text-[var(--foreground)]">{item.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
            </div>
          </BlurFadeIn>
        ))}
      </div>
    </section>
  )
}
