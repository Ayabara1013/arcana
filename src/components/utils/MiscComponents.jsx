import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Image } from 'react-bootstrap';
import { faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faB } from '@fortawesome/free-solid-svg-icons';


export function PatreonButton(props) {
  const { noIcon, noText, text, link } = props;
  // const btnText = text || 'Patreon';
  return (
    <Button className='pa-button' variant="info" onClick={() => console.log("clicked the patreon button")}>
      <div className="inline">
        {props.noIcon ? null : <FontAwesomeIcon icon={faPatreon} className='me-1'/>}
        {props.noText ? null : props.children || props.text || 'Patreon'}
      </div>
    </Button>
  );
}

// || <span>[ x ] | </span>

/**
 * I may not use this, I cant seem to get classes working?
 * @param {*} props 
 * @returns 
 */
export function ScreenContainer(props) {
  return (
    <Container className='mt-2'>
      {props.children}
    </Container>
  );
}