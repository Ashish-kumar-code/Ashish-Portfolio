import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ExternalLink } from 'lucide-react'

/**
 * AccordionCard — Expandable work experience / education card.
 * Inspired by Magic UI's ResumeCard with company avatar, role, dates, and collapsible details.
 */
export default function AccordionCard({
  title,
  subtitle,
  period,
  description,
  bullets = [],
  avatarText,
  href,
  links = [],
  children,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const hasExpandableContent = description || bullets.length > 0 || children

  return (
    <div
      className={`group rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all duration-300 ${
        hasExpandableContent ? 'cursor-pointer hover:bg-[var(--card-hover)] hover:shadow-sm' : ''
      } ${isOpen ? 'shadow-sm ring-1 ring-[var(--accent)]/10' : ''}`}
      onClick={() => hasExpandableContent && setIsOpen(!isOpen)}
    >
      {/* Header Row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--section-alt)] text-sm font-semibold text-[var(--foreground)]">
          {avatarText || title.charAt(0)}
        </div>

        {/* Title + Subtitle */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-sm text-[var(--foreground)] truncate">{title}</h3>
            {hasExpandableContent && (
              <ChevronRight
                className={`h-3.5 w-3.5 shrink-0 text-[var(--muted)] transition-transform duration-200 ${
                  isOpen ? 'rotate-90' : 'group-hover:translate-x-0.5'
                }`}
              />
            )}
            {!hasExpandableContent && href && (
              <a href={href} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                <ExternalLink className="h-3.5 w-3.5 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-[var(--muted)] mt-0.5">{subtitle}</p>
          )}
        </div>

        {/* Period */}
        {period && (
          <span className="shrink-0 text-xs tabular-nums text-[var(--muted)]">{period}</span>
        )}
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && hasExpandableContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3 pl-[52px]">
              {description && (
                <p className="text-sm text-[var(--muted)] leading-relaxed">{description}</p>
              )}
              {bullets.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-[var(--muted)] leading-relaxed flex gap-2">
                      <span className="text-[var(--accent)] mt-1.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {links.length > 0 && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--section-alt)] px-3 py-1 text-xs font-medium text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
