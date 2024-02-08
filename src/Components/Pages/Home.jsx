import Container from "../Layout/Container"
import AuntLayout from "../Layout/AuntLayout"
import Main from "../Fragments/Main/Main"
import HeroMain from "../Fragments/HeroMain/HeroMain"

const Home = () => {
    return (
        <Container>
            <AuntLayout>
                <Main>
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