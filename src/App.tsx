import { useState, useEffect } from 'react'
import { NavBar } from './components/nav-bar/NavBar'
import { Footer } from './components/footer/Footer'
import { HomePage } from './pages/home/Home'
import { AboutPage } from './pages/about/About'
import { ProjectsPage } from './pages/projects/Projects'
import { ContactPage } from './pages/contact/Contact'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check if user has a preference stored
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else if (prefersDark) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="min-h-screen">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </main>

      <Footer />
    </div>
  )
}

export default App
