import EffectTop from "../Elements/BgEffect/BgEffectTop"
import EffectBottom from "../Elements/BgEffect/BgEffectBottom"
import { Link } from "react-router-dom"

const Layout = (Props) => {
    const { children } = Props

    return (
        <div className="relative isolate">
            <EffectTop />
            {children}
            <EffectBottom />
        </div>
    )
}

const Main = (Props) => {
    const { children } = Props

    return (
        <div className="mx-auto max-w-2xl mt-32 sm:mt-40">
            {children}
        </div>
    )
}

const ReadMore = () => {
    return (
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-mainColor">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    )
}

const Title = (Props) => {
    const { children } = Props

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome To My Portfolio Website
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Saya membuat Portfolio ini dengan menggunakan React Js dan Tailwind Css, Portofolio ini saya buat untuk belajar mengenai React Js dan Tailwind Css
            </p>
            {children}
        </div>
    )
}

const Button = () => {
    return (
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
                to={"/app"}
                className="rounded-md bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mainColor"
            >
                Get started
            </Link>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
            </a>
        </div>
    )
}


Layout.Main = Main
Layout.ReadMore = ReadMore
Layout.Title = Title
Layout.Button = Button

export default Layout