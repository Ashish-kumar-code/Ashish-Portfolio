import { ModeProvider } from './context/ModeContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Hireability from './components/Hireability'
import Experience from './components/Experience'
import Education from './components/Education'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GithubActivity from './components/GithubActivity'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

function App() {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-transparent text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white antialiased transition-colors duration-300">
        <Nav />
        <ResumeModal />
        <main className="relative z-10 mx-auto max-w-3xl px-6 py-12 sm:py-20 space-y-20">
          <Hero />
          <About />
          <Hireability />
          <Experience />
          <Education />
          <Timeline />
          <Certifications />
          <Skills />
          <Projects />
          <GithubActivity />
        </main>
        <Footer />
      </div>
    </ModeProvider>
  )
}

export default App
