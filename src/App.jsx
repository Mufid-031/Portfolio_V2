import { useState } from "react"
import LayoutNavbar from "./Components/Layout/NavbarLayout"
import About from "./Components/Pages/About"
import Home from "./Components/Pages/Home"
import Portfolio from "./Components/Pages/Portfolio"



function App() {

  const [isDarkMode, setIsDarkMode] = useState('')

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
