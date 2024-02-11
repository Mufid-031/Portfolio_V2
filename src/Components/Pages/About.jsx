import Container from "../Layout/Container"
import AuntLayout from "../Layout/AuntLayout"
import AboutMe from "../Fragments/AboutMe/AboutMe"
import LinkFriend from "../Fragments/LinkToBeFriend/LinkFriend"

const About = (Props) => {
    const { isDarkMode } = Props

    return (
        <Container id="Tentang saya">
            <AuntLayout>

                <AboutMe>
                    <AboutMe.Title />
                    <AboutMe.Description />
                </AboutMe>

                <LinkFriend isDarkMode={isDarkMode}>
                    <LinkFriend.Title />
                    <LinkFriend.Description />
                    <LinkFriend.Container>
                        <LinkFriend.Container.LinkInstagram />
                        <LinkFriend.Container.LinkTwitter />
                        <LinkFriend.Container.LinkTikTok />
                        <LinkFriend.Container.LinkDiscord />
                        <LinkFriend.Container.LinkGithub />
                    </LinkFriend.Container>
                </LinkFriend>
                
            </AuntLayout>
        </Container >
    )
}

export default About