import { useState, useEffect, createContext } from "react"
import LayoutNavbar from "./Components/Layout/NavbarLayout"
import About from "./Components/Pages/About"
import Home from "./Components/Pages/Home"
import Portfolio from "./Components/Pages/Portfolio"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "./Components/Pages/Contact"
import Footer from "./Components/Pages/Footer"


export const AppContext = createContext()

function App() {

  const [link, setLink] = useState('')
  const [isDarkMode, setIsDarkMode] = useState('')

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <AppContext.Provider value={{ link, setLink }}>
        <LayoutNavbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Home id="Beranda" isDarkMode={isDarkMode} />
        <About id="Tentang saya" isDarkMode={isDarkMode} />
        <Portfolio id="Portfolio" isDarkMode={isDarkMode} />
        <Contact id="Kontak" />
        <Footer />
      </AppContext.Provider>
    </>
  )
}

export default App
