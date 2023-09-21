import React, { useState } from 'react';

import '../../../styles/App.scss'
import '../../../styles/CharacterGenerator.scss';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';


const originLocations = [
  'Lanathel',
  'Strovania',
  'Sento', 'Talen',
  'Iilsyndrae',
  'Terreniel',
  'Fjarnskellig',
  'Boralas',
  'Arkenos',
  'Mothers Embrace',
  'Tukaar',
  'Nalcia',
  'Xian',
  "X'huul",
  'The Dreaming Hills',
  'Varos',
  "drea"
]

const theDreamingLocations = ['The Dreaming', 'The Dreaming City', 'The Dreaming Woods', 'The Dreaming Forest', 'The Dreaming Jungle', 'The Dreaming Sea', 'The Dreaming Mountains', 'The Dreaming Peaks', 'The Dreaming Plains', 'The Dreaming Desert', 'The Dreaming Wastes', 'The Dreaming Tundra', 'The Dreaming Tangle', 'The Dreaming Marsh', 'The Dreaming Swamp', 'The Dreaming Ocean', 'The Dreaming River', 'The Dreaming Lake', 'The Dreaming Valley', 'The Dreaming Hills', 'The Dreaming Plateau', 'The Dreaming Glacier', 'The Dreaming Volcano', 'The Dreaming Island', 'The Dreaming Archipelago', 'The Dreaming Peninsula', 'The Dreaming Continent', 'The Dreaming World', 'The Dreaming Universe', 'The Dreaming Cosmos', 'The Dreaming Multiverse', 'The Dreaming Omniverse', 'The Dreaming Megaverse', 'The Dreaming Metaverse', 'The Dreaming Xenoverse', 'The Dreaming Hyperverse', 'The Dreaming Hypoverse', 'The Dreaming Archverse', 'The Dreaming Brane', 'The Dreaming Omnibrane']


export default function CharacterGenerator(props) {
  const [firstInitial, setFirstInitial] = useState('N');
  const [lastInitial, setLastInitial] = useState('A');
  const [origin, setOrigin] = useState('MISSING');
  const [firstName, setFirstName] = useState('NOT');
  const [lastName, setLastName] = useState('APPLICABLE');
  const [currentHome, setCurrentHome] = useState('MISSING');

  const generateInitials = () => {
    const firstInitial = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const lastInitial = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    setFirstInitial(firstInitial);
    setLastInitial(lastInitial);
  }

  const CreatorPromptsProps = {
    firstInitial: firstInitial,
    lastInitial: lastInitial,
    origin: origin,
  };

  return (
    <Container className='character-generator h-100 box -grey'>
      <Row className='h-100 box -grey'>
        <Col md={'auto'} className='generator-tools-container p-2 h-100 bg-light'>
          <InitialsGenerator firstInitial={firstInitial} lastInitial={lastInitial} generateInitials={generateInitials} />

          <OriginGenerator />
        </Col>
        
        <Col>
          <CreatorPrompts {...CreatorPromptsProps} />
        </Col>

        <Col className='generator-results'>
          <p>
            <span>first name: </span>
            {firstName}
          </p>
          
          <p>
            <span>last name: </span>
            {lastName}
          </p>
          
          <p>
            <span>origin: </span>
            {origin}
          </p>

          <p>
            <span>current home: </span>
            {currentHome}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

function InitialsGenerator(props) {
  const { firstInitial, lastInitial, generateInitials } = props;
  return (
    <div className='generator generator__initials d-flex flex-column text-center'>
      <div className='fw-bold '>
        Initials
      </div>

      <div className="generator__initials__display d-flex flex-row">
        <div className='generator__initials__display__first'>{firstInitial}</div>
        <div className='generator__initials__display__last'>{lastInitial}</div>
      </div>

      <Button className='generator__initials__button btn' onClick={generateInitials}>
        Generate
      </Button>
    </div>
  )
}

function OriginGenerator(props) {
  return (
    <div className='generator__origin'>
      <div className='fw-bold'>Origin</div>
    </div>
  )
}

function CreatorPrompts(props) {
  const { firstInitial, lastInitial, origin } = props;
  return (
    <div className='creator-prompts'>
      <Form>
        <Form.Group controlId="1">
          {/* Form.Label, Form.Control, Form.Text, Form.Check, InputGroup, etc */}
          
          <Form.Label>What is their name?</Form.Label>
          <InputGroup>
            <InputGroup.Text>{firstInitial}</InputGroup.Text>
            <Form.Control type="text" placeholder='...first name' />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>{lastInitial}</InputGroup.Text>
            <Form.Control type="text" placeholder='...last name' />
          </InputGroup>

        </Form.Group>
      </Form>
    </div>
  )
}