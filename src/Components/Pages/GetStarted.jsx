import Container from "../Fragments/Started/Started"
import Layout from "../Layout/StartedLayout"

const GetStarted = () => {

    return (
        <Container>
            <Layout>
                <Layout.Main>
                    <Layout.ReadMore />
                    <Layout.Title>
                        <Layout.Button />
                    </Layout.Title>
                </Layout.Main>
            </Layout>
        </Container>
    )
}

export default GetStarted