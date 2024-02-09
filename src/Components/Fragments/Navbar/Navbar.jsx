import { useEffect } from "react"
import Button from "../../Elements/Button/Button"
import Span from "../../Elements/HamburgerSpan/Span"
import { Link } from "react-router-dom"

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
        <h1 className="text-2xl font-semibold text-mainColor">Ahmad Mufid Risqi</h1>
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
        <Button className="block w-8 h-10 lg:hidden hamburger" onClick={() => hamburgerActive()}>
            <Span className="block w-8 h-1 bg-mainColor transition-transform duration-500 origin-left" />
            <Span className="block w-8 h-1 bg-mainColor mt-[7px] transition-transform duration-500" />
            <Span className="block w-8 h-1 bg-mainColor mt-[7px] transition-transform duration-500 origin-left" />
        </Button>
    )
}

const NavbarMenu = () => {
    const NavbarMenu = ['Beranda', 'Tentang Saya', 'Portfolio', 'Kontak']

    return (
        <ul className="border-2 shadow-xl absolute right-0 -bottom-44 lg:flex lg:w-1/2 lg:static lg:shadow-none lg:border-none lg:bg-white justify-evenly transition duration-1000 hidden nav-ul">
                {NavbarMenu.map((item, index) => {
                    return <li key={index} className="text-lg hover:text-mainColor py-2 px-5"><Link to={`#${item}`}>{item}</Link></li>
                })}
            </ul>
    )
}

Navbar.NavbarTitle = NavbarTitle
Navbar.NavbarHamburger = NavbarHamburger
Navbar.NavbarMenu = NavbarMenu


export default Navbar