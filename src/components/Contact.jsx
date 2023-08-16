
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/contact.scss';


export default function Contact(props) {
  return (
    <Container fluid className='contact'>
      <h4 className='header'>Contact me</h4>
      <p>I swear I will this in soon haha</p>
      
      <Row>
        <Col>
          <div className='d-flex'>
            <p><span className='fw-medium'>email:</span> arcana.toolkit@gmail.com</p>
          </div>
        </Col>

        <Col>
          koffee
          patreon
          paypal
        </Col>
      </Row>
    </Container>
  );
}