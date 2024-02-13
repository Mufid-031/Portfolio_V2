import { useState } from "react"
import LayoutNavbar from "./Components/Layout/NavbarLayout"
import About from "./Components/Pages/About"
import Home from "./Components/Pages/Home"
import Portfolio from "./Components/Pages/Portfolio"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {

  const [isDarkMode, setIsDarkMode] = useState('')

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <LayoutNavbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Portfolio isDarkMode={isDarkMode} />
    </>
  )
}

export default App
