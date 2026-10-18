/**
 * Badge — Rounded pill badge for skills, tech stack, and status labels.
 * Supports variants: default (outlined), filled, accent.
 */
export default function Badge({ children, variant = 'default', className = '' }) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200'
  
  const variants = {
    default: 'border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--card-hover)]',
    filled: 'bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)]/20',
    accent: 'bg-[var(--accent)] text-white',
    muted: 'bg-[var(--section-alt)] text-[var(--muted)] border border-[var(--border)]',
  }

  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  )
}
