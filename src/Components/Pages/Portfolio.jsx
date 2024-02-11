import Container from "../Layout/Container"
import AuntLayout from "../Layout/AuntLayout"
import Layout from "../Fragments/PortfolioContent/PortfolioContent"

const Portfolio = () => {

    return (
        <Container>
            <AuntLayout>
                <Layout>
                    <Layout.Title />
                    <Layout.CardContainer>
                        <Layout.Card />
                    </Layout.CardContainer>
                </Layout>
            </AuntLayout>
        </Container>
    )
}

export default Portfolio