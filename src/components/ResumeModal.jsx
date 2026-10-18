import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMode } from '../context/ModeContext'
import { X, Mail, CheckCircle, FileText, Send, User, Building } from 'lucide-react'

export default function ResumeModal() {
  const { isResumeOpen, closeResumeModal } = useMode()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setErrorMsg('')

    try {
      const response = await fetch('/api/request-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name || 'Recruiter / Hiring Manager',
          email: email,
          company_name: company || 'Company / University',
          resume_type: 'fullstack'
        })
      })

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`)
      }

      setLoading(false)
      setSubmitted(true)

      // Reset state after success view
      setTimeout(() => {
        setSubmitted(false)
        setName('')
        setEmail('')
        setCompany('')
        closeResumeModal()
      }, 4500)

    } catch (err) {
      console.error('Failed to log resume request:', err)
      setErrorMsg('Failed to submit request. Please try again.')
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={closeResumeModal}
        >
          <motion.div
            initial={{ scale: 0.95, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative text-[var(--foreground)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--section-alt)]">
              <div className="flex items-center gap-2">
                <FileText size={15} className="text-[var(--accent)]" />
                <span className="font-mono text-xs font-semibold text-[var(--foreground)]">
                  Ashish_Kumar_SDE_Resume.pdf
                </span>
              </div>
              <button
                onClick={closeResumeModal}
                className="text-[var(--muted)] hover:text-[var(--foreground)] p-1 rounded-lg hover:bg-[var(--card-hover)] transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {submitted ? (
                // Success State View
                <motion.div 
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 text-center space-y-3.5"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--foreground)] text-base">
                      Request Sent for Approval
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed max-w-[300px] mx-auto">
                      Your request has been delivered to Ashish. As soon as approved, the verified PDF will be sent directly to your email address.
                    </p>
                  </div>
                </motion.div>
              ) : (
                // Form Entry View
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-bold text-[var(--foreground)] text-base">
                      Request SDE / Full Stack Resume
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                      Please enter your work or personal email to receive verified access to Ashish's Software Engineering & Java Full Stack resume.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    {/* Name input */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-medium text-[var(--muted)]">Your Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl pl-9 pr-3 py-2 text-xs text-[var(--foreground)] placeholder-[var(--muted)]/50 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition"
                        />
                        <User size={13} className="absolute left-3 top-2.5 text-[var(--muted)]" />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-medium text-[var(--muted)]">Email Address *</label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="recruiter@company.com"
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl pl-9 pr-3 py-2 text-xs text-[var(--foreground)] placeholder-[var(--muted)]/50 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition"
                        />
                        <Mail size={13} className="absolute left-3 top-2.5 text-[var(--muted)]" />
                      </div>
                    </div>

                    {/* Company input */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-medium text-[var(--muted)]">Company / Organization</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Google, Infosys, Startup"
                          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl pl-9 pr-3 py-2 text-xs text-[var(--foreground)] placeholder-[var(--muted)]/50 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition"
                        />
                        <Building size={13} className="absolute left-3 top-2.5 text-[var(--muted)]" />
                      </div>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="text-[11px] text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 text-center">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90 transition shadow-xs active:scale-[0.98] cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-t-transparent border-white animate-spin" />
                    ) : (
                      <>
                        <Send size={13} />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
