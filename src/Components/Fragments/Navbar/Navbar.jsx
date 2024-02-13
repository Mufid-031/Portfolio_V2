import { useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { IoMoon } from "react-icons/io5"
import { FiSun } from "react-icons/fi"
import { variantSlideRight } from "../../../Framer-Motion/SlideAnimation"
import { variantScaleUp } from "../../../Framer-Motion/ScaleAnimation"

const Navbar = (Props) => {
    const { active, children } = Props

    useEffect(() => {
        if (active === 'active') {
            document.querySelector('.hamburger').classList.add('active')
            document.querySelector('.nav-ul').classList.remove('hidden')
        } else {
            document.querySelector('.hamburger').classList.remove('active')
            document.querySelector('.nav-ul').classList.add('hidden')
        }
    }, [active])

    return (
        <>
            {children}
        </>
    )
}

const NavbarTitle = () => {

    return (
        <motion.h1 initial="hidden" animate="visible" variants={variantScaleUp} className="text-2xl font-semibold text-mainColor">Ahmad Mufid Risqi</motion.h1>
    )
}

const NavbarHamburger = (Props) => {
    const { active, setActive } = Props

    const hamburgerActive = () => {

        if (active === 'no-active') {
            setActive('active')
        } else if (active === 'active') {
            setActive('no-active')
        }
    }


    return (
        <motion.button initial="hidden" animate="visible" variants={variantScaleUp} className="block w-8 h-10 lg:hidden hamburger" onClick={() => hamburgerActive()}>
            <motion.span className="block w-8 h-1 bg-mainColor transition-transform duration-500 origin-left" />
            <motion.span className="block w-8 h-1 bg-mainColor mt-[7px] transition-transform duration-500" />
            <motion.span className="block w-8 h-1 bg-mainColor mt-[7px] transition-transform duration-500 origin-left" />
        </motion.button>
    )
}

const NavbarMenu = (Props) => {
    const { isDarkMode } = Props
    const NavbarMenu = ['Beranda', 'Tentang Saya', 'Portfolio', 'Kontak']

    useEffect(() => {
        if (isDarkMode === '') {
            document.querySelector('.nav-ul').classList.remove('lg:bg-slate-800')
            document.querySelector('.nav-ul').classList.remove('text-slate-50')
            document.querySelector('.nav-ul').classList.add('text-slate-800')
        } else if (isDarkMode === 'dark') {
            document.querySelector('.nav-ul').classList.add('lg:bg-slate-800')
            document.querySelector('.nav-ul').classList.add('text-slate-50')
            document.querySelector('.nav-ul').classList.remove('text-slate-800')
        } else if (isDarkMode === 'light') {
            document.querySelector('.nav-ul').classList.remove('lg:bg-slate-800')
            document.querySelector('.nav-ul').classList.remove('text-slate-50')
            document.querySelector('.nav-ul').classList.add('text-slate-800')
        }
    }, [isDarkMode])


    return (
        <motion.ul initial="hidden" animate="visible" variants={variantSlideRight} className="border-2 shadow-xl absolute right-0 -bottom-44 lg:flex lg:w-1/2 lg:static lg:shadow-none lg:border-none justify-evenly hidden nav-ul">
            {NavbarMenu.map((item, index) => {
                return (
                    <motion.li variants={variantSlideRight} key={index} className="text-lg hover:text-mainColor py-2 px-5"><Link to={`#${item}`}>{item}</Link></motion.li>
                )
            })}
        </motion.ul>
    )
}

const DarkModeToggle = (Props) => {
    const { isDarkMode, setIsDarkMode } = Props

    useEffect(() => {
        if (isDarkMode === '') {
            document.querySelector('#dark-mode-toggle').classList.add('lg:bg-white')
        } else if (isDarkMode === 'dark') {
            document.querySelector('#dark-mode-toggle').classList.remove('lg:bg-white')
        } else if (isDarkMode === 'light') {
            document.querySelector('#dark-mode-toggle').classList.add('lg:bg-white')
        }
    }, [isDarkMode])

    return (
        <motion.div id="dark-mode-toggle" initial="hidden" animate="visible" variants={variantScaleUp} className="absolute right-0 -bottom-44 lg:flex lg:w-[100px] lg:static lg:shadow-none lg:bg-white lg:border-none justify-evenly items-center hidden cursor-pointer">
            <IsDarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </motion.div>
    )
}

const IsDarkMode = (Props) => {
    const { isDarkMode, setIsDarkMode } = Props

    if (isDarkMode === '') {
        return (
            <IoMoon className="text-3xl text-mainColor" onClick={() => setIsDarkMode('dark')} />
        )
    } else if (isDarkMode === 'dark') {
        return (
            <FiSun className="text-3xl text-mainColor" onClick={() => setIsDarkMode('light')} />
        )
    } else if (isDarkMode === 'light') {
        return (
            <IoMoon className="text-3xl text-mainColor" onClick={() => setIsDarkMode('dark')} />
        )
    }
}



Navbar.NavbarTitle = NavbarTitle
Navbar.NavbarHamburger = NavbarHamburger
Navbar.NavbarMenu = NavbarMenu
Navbar.DarkModeToggle = DarkModeToggle


export default Navbar