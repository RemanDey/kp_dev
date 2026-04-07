import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Team } from './pages/Team'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Admin } from './pages/Admin'
import './App.css'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg text-slate-900 dark:text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App

