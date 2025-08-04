import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from '../pages/LandingPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { GalleryPage } from '../pages/GalleryPage'
import { LoginPage } from '../pages/LoginPage'
import { AdminPage } from '../pages/AdminPage'
import { Header } from '../components/header/header/Header'
import { Footer } from '../components/footer/Footer'
import { LanguageProvider } from '../context/LanguageProvider'
import { HeroSection } from '../components/hero/HeroSection'

function App() {

  return (
    <>
    <LanguageProvider>
      <Header/>
      <HeroSection/>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/projects' element={<ProjectsPage/>} />
          <Route path='/gallery' element={<GalleryPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/admin' element={<AdminPage/>} />
        </Routes>
      </main>
      <Footer/>
      </LanguageProvider>
    </>
  )
}

export default App
