import { useEffect } from "react"
import Button from "../../Elements/Button/Button"

const Main = (Props) => {
    const { children } = Props



    return (
        <div className="w-full lg:w-1/2 lg:self-center">
            {children}
        </div>
    )
}

const Hello = () => {
    return (
        <h4 className="text-lg font-bold text-mainColor lg:text-2xl">Halo kawan semuanya 👋, saya</h4>
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

    return (
        <h1 id="name" className="text-5xl font-bold block lg:text-6xl">Ahmad Mufid Risqi</h1>
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
    return (
        <h2 id="job" className="text-xl font-semibold mt-3 lg:text-2xl">Frontend Developer | Backend Developer</h2>
    )
}


const Description = () => {
    return (
        <p className="text-dark mt-2 lg:text-lg">Ayo kawan, belajar frontend dan backend dari sini</p>
    )
}

const LinkButton = () => {
    return (
        <a href="#">
            <Button className="bg-mainColor text-white px-4 py-2 rounded-xl mt-3 hover:bg-cyan-600 active:bg-cyan-700 lg:px-6 lg:py-3">Hubungi</Button>
        </a>
    )
}

Main.Hello = Hello
Main.NameHero = NameHero
Main.HeroJob = HeroJob
Main.Description = Description
Main.LinkButton = LinkButton

export default Main