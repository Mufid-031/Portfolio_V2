import { useState, useEffect } from "react"
import Navbar from "../Fragments/Navbar/Navbar"

const LayoutNavbar = (Props) => {
    const { isDarkMode, setIsDarkMode } = Props
    const [active, setActive] = useState('no-active')
    const [scroll, setScroll] = useState(false)

    const scrollActive = () => {
        document.addEventListener('scroll', () => {
            if (window.outerWidth > 1024) {
                if (window.scrollY > 0) {
                    setScroll(true)
                    const nav = document.querySelector('#navbar')
                    const navMenu = document.querySelector('.nav-ul')
                    const darkModeToggle = document.querySelector('#dark-mode-toggle')
                    nav.classList.remove('relative')
                    nav.classList.add('fixed')
                    nav.classList.add('bg-transparent')
                    nav.classList.add('backdrop-blur-lg')
                    nav.classList.add('top-0')
                    nav.classList.add('z-50')
                    nav.classList.add('border-b-2')
                    navMenu.classList.remove('lg:bg-white')
                    navMenu.classList.remove('lg:bg-slate-800')
                    darkModeToggle.classList.remove('lg:bg-white')
                    darkModeToggle.classList.add('lg:bg-transparent')
                } else {
                    setScroll(false)
                    const nav = document.querySelector('#navbar')
                    nav.classList.remove('fixed')
                    nav.classList.remove('bg-transparent')
                    nav.classList.remove('backdrop-blur-lg')
                    nav.classList.add('relative')
                    nav.classList.remove('border-b-2')
                }
            } else {
                if (window.scrollY > 0) {
                    setScroll(true)
                    const nav = document.querySelector('#navbar')
                    const navMenu = document.querySelector('.nav-ul')
                    const darkModeToggle = document.querySelector('#dark-mode-toggle')
                    nav.classList.remove('relative')
                    nav.classList.add('fixed')
                    nav.classList.add('bg-transparent')
                    nav.classList.add('backdrop-blur-lg')
                    nav.classList.add('top-0')
                    nav.classList.add('z-50')
                    nav.classList.add('border-b-2')
                    navMenu.classList.add('bg-white')
                    darkModeToggle.classList.remove('lg:bg-white')
                    darkModeToggle.classList.add('lg:bg-transparent')
                } else {
                    setScroll(false)
                    const nav = document.querySelector('#navbar')
                    nav.classList.remove('fixed')
                    nav.classList.remove('bg-transparent')
                    nav.classList.remove('backdrop-blur-lg')
                    nav.classList.add('relative')
                    nav.classList.remove('border-b-2')
                }
            }
        })
    }

    useEffect(() => {
        scrollActive()
    }, [scroll])

    useEffect(() => {
        if (isDarkMode === '') {
            document.querySelector('#navbar').classList.remove('bg-slate-800')
        } else if (isDarkMode === 'dark') {
            document.querySelector('#navbar').classList.add('bg-slate-800')
        } else if (isDarkMode === 'light') {
            document.querySelector('#navbar').classList.remove('bg-slate-800')
        }
    }, [isDarkMode])

    return (
        <nav className="w-full h-16 p-1 flex justify-between items-center relative lg:justify-around" id="navbar">
            <Navbar active={active}>
                <Navbar.NavbarTitle />
                <Navbar.NavbarHamburger active={active} setActive={setActive} />
                <Navbar.NavbarMenu isDarkMode={isDarkMode} />
                <Navbar.DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </Navbar>
        </nav>
    )
}

export default LayoutNavbar