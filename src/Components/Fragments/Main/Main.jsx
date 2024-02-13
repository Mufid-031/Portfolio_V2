import { useEffect } from "react"
import { motion } from "framer-motion"
import { variantScaleUp } from "../../../Framer-Motion/ScaleAnimation"

const Main = (Props) => {

    const { children } = Props

    return (
        <div className="w-full lg:w-1/2 lg:self-center">
            {children}
        </div>
    )
}

const Hello = () => {

    const variantAnimation = {
        hidden: {
            opacity: 0,
            x: "-100vw"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                type: 'spring',
                stiffness: 50,
                damping: 10
            }
        }

    }

    return (
        <motion.h4 initial="hidden" animate="visible" variants={variantAnimation} className="text-lg font-bold text-mainColor lg:text-2xl">Halo kawan semuanya 👋, saya</motion.h4>
    )
}

const NameHero = (Props) => {
    const { isDarkMode } = Props

    useEffect(() => {
        if (isDarkMode === '') {
            document.querySelector('#name').classList.add('text-slate-800')
        } else if (isDarkMode === 'dark') {
            document.querySelector('#name').classList.remove('text-slate-800')
        } else if (isDarkMode === 'light') {
            document.querySelector('#name').classList.add('text-slate-800')
        }
    }, [isDarkMode])

    const variantAnimation = {
        hidden: {
            opacity: 0,
            x: "-100vw"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.5,
                type: 'spring',
                stiffness: 50,
                damping: 10
            }
        }
    }

    return (
        <motion.h1 id="name" initial="hidden" animate="visible" variants={variantAnimation} className="text-5xl font-bold block lg:text-6xl">Ahmad Mufid Risqi</motion.h1>
    )
}

const HeroJob = (Props) => {
    const { isDarkMode } = Props

    useEffect(() => {
        if (isDarkMode === '') {
            document.querySelector('#job').classList.add('text-slate-800')
        } else if (isDarkMode === 'dark') {
            document.querySelector('#job').classList.remove('text-slate-800')
        } else if (isDarkMode === 'light') {
            document.querySelector('#job').classList.add('text-slate-800')
        }
    }, [isDarkMode])


    const variantAnimation = {
        hidden: {
            opacity: 0,
            x: "-100vw"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                type: 'spring',
                stiffness: 50,
                damping: 10
            }
        }

    }

    return (
        <motion.h2 id="job" initial="hidden" animate="visible" variants={variantAnimation} className="text-xl font-semibold mt-3 lg:text-2xl">Frontend Developer | Backend Developer</motion.h2>
    )
}


const Description = () => {

    const variantAnimation = {
        hidden: {
            opacity: 0,
            x: "-100vw"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.5,
                type: 'spring',
                stiffness: 50,
                damping: 10
            }
        }
    }

    return (
        <motion.p initial="hidden" animate="visible" variants={variantAnimation} className="text-dark mt-2 lg:text-lg">Ayo kawan, belajar frontend dan backend dari sini</motion.p>
    )
}

const LinkButton = () => {

    return (
        <a href="#">
            <motion.button initial="hidden" animate="visible" variants={variantScaleUp} className="bg-mainColor text-white px-4 py-2 rounded-xl mt-3 hover:bg-cyan-600 active:bg-cyan-700 lg:px-6 lg:py-3">Hubungi</motion.button>
        </a>
    )
}

Main.Hello = Hello
Main.NameHero = NameHero
Main.HeroJob = HeroJob
Main.Description = Description
Main.LinkButton = LinkButton

export default Main