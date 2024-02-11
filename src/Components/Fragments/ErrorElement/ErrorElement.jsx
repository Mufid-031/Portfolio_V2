import { Link } from "react-router-dom"


const ErrorContainer = (Props) => {
    const { children } = Props

    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            {children}
        </main>
    )
}

const ErrorElement = (Props) => {
    const { children } = Props

    return (
        <div className="text-center pt-28">
            {children}
        </div>
    )
}

const ErrorTitle = () => {
    return (
        <>
            <p className="text-5xl font-semibold text-mainColor">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        </>
    )
}

const ErrorButton = () => {
    return (
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
                to={"/"}
                className="rounded-md bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
            </a>
        </div>
    )
}

ErrorContainer.ErrorElement = ErrorElement
ErrorContainer.ErrorTitle = ErrorTitle
ErrorContainer.ErrorButton = ErrorButton


export default ErrorContainer