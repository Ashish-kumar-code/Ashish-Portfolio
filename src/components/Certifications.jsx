import { certifications } from '../data/content'
import BlurFadeIn from './ui/BlurFadeIn'
import { Award, ExternalLink } from 'lucide-react'

export default function Certifications() {
  return (
    <section className="mb-12">
      <BlurFadeIn>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Certifications</h2>
      </BlurFadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => (
          <BlurFadeIn key={idx} delay={0.1 * idx}>
            <a
              href={cert.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 hover:bg-[var(--card-hover)] transition-colors group"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--section-alt)] text-[var(--foreground)]">
                <Award className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-[var(--foreground)] truncate">{cert.title}</h3>
                <p className="text-xs text-[var(--muted)] truncate">{cert.issuer}</p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </BlurFadeIn>
        ))}
      </div>
    </section>
  )
}
