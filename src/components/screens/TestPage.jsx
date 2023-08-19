import { Col, Container, Row } from 'react-bootstrap';



export default function TestPage(props) {
  return (
    <Container className='p-2 border'>
      <Row className='p-2 border'>
        <Col className='p-2 border'>
          test
        </Col>
      </Row>
    </Container>
  )
}