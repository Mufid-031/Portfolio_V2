import Container from "../Layout/Container"
import AuntLayout from "../Layout/AuntLayout"
import Main from "../Fragments/Main/Main"
import HeroMain from "../Fragments/HeroMain/HeroMain"
import { useEffect } from "react"

const Home = (Props) => {
    const { isDarkMode } = Props

    useEffect(() => {
        if (isDarkMode === '') {
            document.querySelector('body').classList.remove('lg:bg-slate-800')
            document.querySelector('body').classList.remove('text-slate-50')
            document.querySelector('body').classList.add('text-slate-800')
        } else if (isDarkMode === 'dark') {
            document.querySelector('body').classList.add('lg:bg-slate-800')
            document.querySelector('body').classList.add('text-slate-50')
            document.querySelector('body').classList.remove('text-slate-800')
        } else if (isDarkMode === 'light') {
            document.querySelector('body').classList.remove('lg:bg-slate-800')
            document.querySelector('body').classList.remove('text-slate-50')
            document.querySelector('body').classList.add('text-slate-800')
        }
    }, [isDarkMode])

    return (
        <Container isDarkMode={isDarkMode} id="Beranda">
            <AuntLayout>
                <Main isDarkMode={isDarkMode}>
                    <Main.Hello />
                    <Main.NameHero />
                    <Main.HeroJob />
                    <Main.Description />
                    <Main.LinkButton />
                </Main>

                <HeroMain>
                    <HeroMain.HeroContainer />
                    <HeroMain.BlobContainer />
                </HeroMain>
            </AuntLayout>
        </Container>
    )
}

export default Home