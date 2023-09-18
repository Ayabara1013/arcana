import { Alert, Col, Container, Row } from 'react-bootstrap';
import { ScreenContainer } from '../../utils/MiscComponents';
import NewFeatureFormEmbed from '../../embeds/google forms/NewFeatureFormEmbed';
import SurveyFormEmbed from '../../embeds/google forms/SurveyFormEmbed';
import { useState } from 'react';




function ContactPage(props) {

  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <Container className='d-flex flex-column m-auto p-0 h-100'>
      <Row className='m-0'>
        <Col>
          <h1 className='text-center fw-bold'>Contact Us</h1>
          <Alert variant="info" dismissible onClose={handleCloseAlert}>
            there will be more coming here but for now I wanted there to be some way for you to communicate with me if you have any questions, suggestions, or opinions!
          </Alert>
        </Col>
      </Row>

      <Row className='flex-grow-1 m-0'>
        <Col className='p-0 h-100'>
          <NewFeatureFormEmbed />
        </Col>

        <Col className='p-0 h-100'>
          <SurveyFormEmbed />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;