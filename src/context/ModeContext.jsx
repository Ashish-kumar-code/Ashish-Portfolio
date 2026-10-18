/* eslint-disable react/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'

const ModeContext = createContext(null)

export function ModeProvider({ children }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [resumeType, setResumeType] = useState('fullstack')
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme')
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('portfolio_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const openResumeModal = (type = 'fullstack') => {
    setResumeType(type)
    setIsResumeOpen(true)
  }

  const closeResumeModal = () => {
    setIsResumeOpen(false)
  }

  const mode = 'all'
  const isDev = false
  const isData = false
  const isAll = true
  const accent = 'var(--accent)'
  const accentDim = 'rgba(79, 140, 255, 0.15)'

  return (
    <ModeContext.Provider 
      value={{ 
        mode, isDev, isData, isAll, accent, accentDim,
        isResumeOpen, resumeType, openResumeModal, closeResumeModal,
        theme, toggleTheme
      }}
    >
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const ctx = useContext(ModeContext)
  if (!ctx) throw new Error('useMode must be used within a ModeProvider')
  return ctx
}
