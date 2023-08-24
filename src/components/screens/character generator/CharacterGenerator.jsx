import React, { useState } from 'react';

import '../../../styles/App.scss';
import './CharacterGenerator.scss';
import { Button, Col, Container, Row } from 'react-bootstrap';



export default function CharacterGenerator(props) {
  const [firstInitial, setFirstInitial] = useState('N');
  const [lastInitial, setLastInitial] = useState('A');

  const generateInitials = () => {
    const firstInitial = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const lastInitial = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    setFirstInitial(firstInitial);
    setLastInitial(lastInitial);
  }

  return (
    <Container className='character-generator border border-danger'>

      <Row className='border'>
        <Col className="tool-container m-0 p-0 border">

          <div className='character-generator__initials border fw-900'>
            <div className="character-generator__initials__display">
              <div className='character-generator__initials__first'>{firstInitial}</div>
              <div className='character-generator__initials__last'>{lastInitial}</div>
            </div>

            {/* <Button className='character-generator__button btn btn-primary' onClick={generateInitials}>
              Generate
            </Button> */}
          </div>
          
          {/* <InitialsGenerator firstInitial={firstInitial} lastInitial={lastInitial} generateInitials={generateInitials} /> */}
        
        </Col>
      </Row>

      
    </Container>
  )
}

function InitialsGenerator(props) {
  const { firstInitial, lastInitial, generateInitials } = props;
  return (
    <div className='character-generator__initials'>
      <div className="character-generator__initials__display">
        <h1 className='character-generator__initials__first'>{firstInitial}</h1>
        <h1 className='character-generator__initials__last'>{lastInitial}</h1>
      </div>

      <Button className='character-generator__button btn btn-primary' onClick={generateInitials}>
        Generate
      </Button>
    </div>
  )
}