
const FooterList = (Props) => {

    const { children } = Props

    return (
        <footer className="w-full h-[70vh] flex-wrap flex bg-sky-500 pt-10 lg:justify-around">
            {children}
            <div>
                <h3>Copyright © 2024 by Mufid</h3>
            </div>
        </footer>
    )
}

const FooterListProject = () => {

    const ListProject = ['Panda Store', 'Belajar React', 'Scrips Movie', 'Laptop Store']

    return (
        <div className="w-2/4 lg:w-1/3 lg:flex lg:flex-col lg:items-center">
            <h1 className="text-2xl text-mainColor font-bold mb-5">My Project</h1>
            <ul className="flex flex-col gap-2">
                {
                    ListProject.map((item, index) => {
                        return (
                            <li key={index}><a href="">{item}</a></li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

const FooterListSosmed = () => {

    const ListSosmed = ['Instagram', 'Twitter', 'Tik Tok', 'Github']

    return (
        <div className="w-2/4 lg:w-1/3 lg:flex lg:flex-col lg:items-center">
            <h1 className="text-2xl text-mainColor font-bold mb-5">Social Media</h1>
            <ul className="flex flex-col gap-2">
                {
                    ListSosmed.map((item, index) => {
                        return (
                            <li key={index}><a href="">{item}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const FooterListSkills = () => {

    const ListSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'NEXT JS']

    return (
        <div className="w-2/4 lg:w-1/3 lg:flex lg:flex-col lg:items-center">
            <h1 className="text-2xl text-mainColor font-bold mb-5">My SKills</h1>
            <ul className="flex flex-col gap-2">
                {
                    ListSkills.map((item, index) => {
                        return (
                            <li key={index}><a href="">{item}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

FooterList.FooterListProject = FooterListProject
FooterList.FooterListSosmed = FooterListSosmed
FooterList.FooterListSkills = FooterListSkills


export default FooterList