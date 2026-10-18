import { profile, testimonials, emailComposeUrl } from '../data/content'
import { Mail, MessageSquare } from 'lucide-react'
import { IconGitHub, IconLinkedIn } from './ui/Icons'
import Badge from './ui/Badge'
import BlurFadeIn from './ui/BlurFadeIn'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-[var(--section-alt)] pt-20 pb-28 sm:pb-32 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Part A — Contact Section */}
        <BlurFadeIn>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Badge variant="filled">Contact</Badge>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Get in Touch
            </h2>
            <p className="text-sm text-[var(--muted)] max-w-lg mx-auto mb-8">
              Interested in discussing an SDE / ASE opportunity, full stack engineering, or AI workflow collaboration? Feel free to connect.
            </p>
            
            <a 
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium shadow-sm transition-transform hover:scale-105 active:scale-95 bg-[var(--accent)] cursor-pointer"
            >
              <Mail size={16} className="mr-2" />
              Send an Email
            </a>

            {/* Testimonials */}
            {testimonials && testimonials.length > 0 && (
              <div className="mt-16 grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-[var(--card)] border border-[var(--border)] p-6 rounded-2xl text-left shadow-sm">
                    <MessageSquare size={20} className="text-[var(--accent)] mb-3 opacity-50" />
                    <p className="italic text-sm text-[var(--muted)] mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-sm text-[var(--foreground)]">{testimonial.author}</div>
                      <div className="text-xs text-[var(--muted)]">{testimonial.title}, {testimonial.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </BlurFadeIn>

        {/* Part B — Footer */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col items-center">
          <div className="text-[13px] font-medium text-[var(--foreground)] mb-4">
            Built by {profile.name}
          </div>
          
          <div className="flex gap-4 mb-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              <IconGitHub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              <IconLinkedIn size={18} />
            </a>
            <a 
              href={emailComposeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="text-xs text-[var(--muted)] font-mono">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  )
}
