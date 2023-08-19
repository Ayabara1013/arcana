
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/contact.scss';
import KoFiWidget from './KofiWidget';


export default function Contact(props) {
  return (
    <div fluid="true" className='contact border border-2 border-info'>
      <h4 className='header'>Contact me</h4>
      <p>I swear I will fill this in soon haha if there is a feature you want to see in the tendies calculator or another tool all together, just let me know!</p>
      
      <div>
        <div>
          <div className='d-flex'>
            <p><span className='fw-medium'>email:</span> arcana.toolkit@gmail.com</p>
          </div>
        </div>

        {/* <Col>
          kofi?
          patreon?
          paypal?
        </Col> */}

        <div className='support'>
          {/* <KoFiWidget thin red /> */}
        </div>
      </div>
    </div>
  );
}