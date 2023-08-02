import { Button, Image } from 'react-bootstrap';


export function GoToPatreonButton(props) {
  return (
    <Button
      // className='m-2'
      variant="info"
      onClick={() => console.log("clicked the patreon button")}
    >
      {props.icon ? <FontAwesomeIcon icon="fa-brands fa-patreon" /> : <span>[ x ] | </span>}
      {props.text || 'Patreon'}
    </Button>
  );
}