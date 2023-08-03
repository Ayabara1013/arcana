import { Col, Container, Row } from "react-bootstrap";



function Home(props) {
    return (
        <div className="home-screen h-100 border border-1 border-warning">
            <h1>
                welcome to lexicon!
            </h1>

            <Container className="d-flex flex-column m-auto p-2 gap-2 w-100 h-100 bg-dark">
                <Row className="m-auto p-2 h-25 bg-light">
                    <Col className="m-auto p-2 bg-primary">bootstrap</Col>
                </Row>

                <Row className="d-flex flex-row w-100 m-auto p-2 gap-2 h-75 bg-light">
                    <Col className="col-1 m-auto p-2 bg-primary">bootstrap</Col>
                    <Col className="col-1 m-auto p-2 bg-primary">bootstrap</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;