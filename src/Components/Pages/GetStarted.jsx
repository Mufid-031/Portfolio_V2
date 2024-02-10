import Container from "../Fragments/Started/Started"
import Layout from "../Layout/StartedLayout"

const GetStarted = () => {

    return (
        <Container>
            <Layout>
                <Layout.Main>
                    <Layout.Main.ReadMore />
                    <Layout.Main.Title>
                        <Layout.Main.Title.Button />
                    </Layout.Main.Title>
                </Layout.Main>
            </Layout>
        </Container>
    )
}

export default GetStarted