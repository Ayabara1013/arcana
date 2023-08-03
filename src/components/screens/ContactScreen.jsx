import { Col, Container, Row } from 'react-bootstrap';
import { ScreenContainer } from '../utils/MiscComponents';



function ContactScreen(props) {

  return (
    <Container className='box'>
      <Row className='box' >
        <Col>
          <h1 className='text-center fw-bold'>Contact Us</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactScreen;