import React from 'react'
import { useMode } from '../context/ModeContext'
import { profile, emailComposeUrl } from '../data/content'
import { Dock, DockIcon, DockSeparator } from './magicui/Dock'
import { 
  Home, 
  Briefcase, 
  Sparkles, 
  FolderGit2, 
  FileText, 
  Mail, 
  Sun, 
  Moon 
} from 'lucide-react'
import { IconGitHub, IconLinkedIn } from './ui/Icons'

export default function Nav() {
  const { openResumeModal, theme, toggleTheme } = useMode()

  const handleScroll = (e, id) => {
    e.preventDefault()
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto mb-5 flex justify-center px-4">
      {/* Background blur gradient */}
      <div className="fixed bottom-0 inset-x-0 h-20 pointer-events-none bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent backdrop-blur-[2px]" />

      <div className="pointer-events-auto relative z-10">
        <Dock className="shadow-2xl">
          {/* 1. Home */}
          <DockIcon 
            label="Home" 
            onClick={(e) => handleScroll(e, 'top')}
            ariaLabel="Scroll to top"
          >
            <Home size={19} />
          </DockIcon>

          {/* 2. Experience */}
          <DockIcon 
            label="Experience" 
            onClick={(e) => handleScroll(e, '#experience')}
            ariaLabel="Scroll to experience"
          >
            <Briefcase size={19} />
          </DockIcon>

          {/* 3. Skills */}
          <DockIcon 
            label="Skills" 
            onClick={(e) => handleScroll(e, '#skills')}
            ariaLabel="Scroll to skills"
          >
            <Sparkles size={19} />
          </DockIcon>

          {/* 4. Projects */}
          <DockIcon 
            label="Projects" 
            onClick={(e) => handleScroll(e, '#projects')}
            ariaLabel="Scroll to projects"
          >
            <FolderGit2 size={19} />
          </DockIcon>

          {/* 5. Resume */}
          <DockIcon 
            label="Resume" 
            onClick={() => openResumeModal('fullstack')}
            ariaLabel="Request resume"
          >
            <FileText size={19} />
          </DockIcon>

          <DockSeparator />

          {/* 6. GitHub */}
          <DockIcon 
            label="GitHub" 
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="GitHub profile"
          >
            <IconGitHub size={19} />
          </DockIcon>

          {/* 7. LinkedIn */}
          <DockIcon 
            label="LinkedIn" 
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="LinkedIn profile"
          >
            <IconLinkedIn size={19} />
          </DockIcon>

          {/* 8. Email */}
          <DockIcon 
            label="Email" 
            href={emailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Compose email to Ashish"
          >
            <Mail size={19} />
          </DockIcon>

          <DockSeparator />

          {/* 9. Light / Dark Mode Toggle */}
          <DockIcon 
            label={theme === 'dark' ? 'Light Mode' : 'Dark Mode'} 
            onClick={toggleTheme}
            ariaLabel="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={19} className="text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon size={19} className="text-slate-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </DockIcon>
        </Dock>
      </div>
    </header>
  )
}
