import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { GalleryPage } from './pages/GalleryPage'
import { LoginPage } from './pages/LoginPage'
import { AdminPage } from './pages/AdminPage'

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<LandingPage/>} />
         <Route path='/projects' element={<ProjectsPage/>} />
         <Route path='/gallery' element={<GalleryPage/>} />
         <Route path='/login' element={<LoginPage/>} />
         <Route path='/admin' element={<AdminPage/>} />
      </Routes>
    </>
  )
}

export default App
