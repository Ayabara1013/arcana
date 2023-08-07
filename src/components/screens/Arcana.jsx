import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import '../../styles/arcana.scss';
import { update } from 'lodash';
import { object } from 'prop-types';


function Arcana(props) {
  let [tendies, setTendies] = useState(0);
  const [toggle, setToggle] = useState({
    b1: false,
    b2: false
  });

  const reward = 500;

  const handleClick = (id) => {
    console.log(id);

    if (toggle[id]) {
      setTendies(tendies - reward);
      setToggle({ ...toggle, [id]: false });
    }
    else if (!toggle[id]) {
      setTendies(tendies + reward);
      setToggle({ ...toggle, [id]: true });
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>{tendies}</h1>
          <Button id='i' variant="primary" onClick={() => handleClick('b1')}>
            {toggle.b1 ? 'true' : 'false'}
          </Button>

          <Button id='j' variant="primary" onClick={() => handleClick('b2')}>
            {toggle.b2 ? 'true' : 'false'}
          </Button>
        </Col>
      </Row>

      <TradingPost />
    </Container>
  );
}

function TradingPost(props) {
  class ClassSet {
    constructor(armour, weapons, className, month) {
      this.armour = armour;
      this.weapons = weapons;
      this.className = className;
      this.month = month;
    }
  }

  const cr = { // class rewards
    paladin:      new ClassSet(false, false, 'Paladin',       'September'),
    priest:       new ClassSet(false, false, 'Priest',        'September'),
    rogue:        new ClassSet(false, false, 'Rogue',         'September'),

    deathKnight:  new ClassSet(false, false, 'Death Knight',  'October'),
    demonHunter:  new ClassSet(false, false, 'Demon Hunter',  'October'),
    druid:        new ClassSet(false, false, 'Druid',         'October'),

    warlock:      new ClassSet(false, false, 'Warlock',       'November'),
    monk:         new ClassSet(false, false, 'Monk',          'November'),
    warrior:      new ClassSet(false, false, 'Warrior',       'November'),

    evoker:       new ClassSet(false, false, 'Evoker',        'December'),
    hunter:       new ClassSet(false, false, 'Hunter',        'December'),
    mage:         new ClassSet(false, false, 'Mage',          'December'),
    shaman:       new ClassSet(false, false, 'Shaman',        'December'),
  }

  const [tendies, setTendies] = useState(0);
  const [costs, setCosts] = useState({
    september: 0,
    october: 0,
    november: 0,
    december: 0,
    armour: 0,
    weapons: 0
  });
  const [septCost, setSeptCost] = useState(0);
  const [octCost, setOctCost] = useState(0);
  const [novCost, setNovCost] = useState(0);
  const [decCost, setDecCost] = useState(0);
  const [armourCost, setArmourCost] = useState(0);
  const [weaponsCost, setWeaponsCost] = useState(0);

  return (
    <Container className='card-1 border'>
      <div className='d-flex justify-content-between'>
        <h1>Trading Post Calculator</h1>
        <h1>{tendies} tendies!</h1>
        <Button variant="primary">
          update costs
        </Button>
        <Button variant="primary" onClick={() => console.log(costs)}>
          print costs
        </Button>
      </div>

      <Row className='m-auto'>
        <Col md='auto' className='border'>
          <Form>
            <Form.Group controlId="form-group-id">
              <Form.Label>how many tendies do you have?</Form.Label>
              <Form.Control type="number" placeholder="input tendies!"/>
            </Form.Group>
          </Form>

          <h4 className='fw-bold'>you need:</h4>

          <h5>september: {costs.september}</h5>
          <h5>october: {costs.october}</h5>
          <h5>november: {costs.november}</h5>
          <h5>december: {costs.december}</h5>
          <h5>armour: {costs.armour}</h5>
          <h5>weapons: {costs.weapons}</h5>
          
        </Col>

        {/* <Col md='auto' className='border'>
          <Row className='m-auto justify-content-end lign-items-start gap-2'>
            <Col className={colClass}>
              <h4 className='text-center fw-bold'>{cr.paladin.month}</h4>
              <ClassCard cl={cr.paladin}  name={cr.paladin.className} setCosts={setCosts} />
              <ClassCard cl={cr.priest}   name={cr.priest.className}  setCosts={setCosts} />
              <ClassCard cl={cr.rogue}    name={cr.rogue.className}   setCosts={setCosts} />
            </Col>

            <Col className={colClass}>
              <h4 className='text-center fw-bold'>{cr.deathKnight.month}</h4>
              <ClassCard cl={cr.deathKnight}  name={cr.deathKnight.className} setCosts={setCosts} tc='-smaller-title' />
              <ClassCard cl={cr.demonHunter}  name={cr.demonHunter.className} setCosts={setCosts} tc='-smaller-title' />
              <ClassCard cl={cr.druid}        name={cr.druid.className}       setCosts={setCosts} />
            </Col>

            <Col className={colClass}>
              <h4 className='text-center fw-bold'>{cr.warlock.month}</h4>
              <ClassCard cl={cr.warlock}  name={cr.warlock.className} setCosts={setCosts} />
              <ClassCard cl={cr.monk}     name={cr.monk.className}    setCosts={setCosts} />
              <ClassCard cl={cr.warrior}  name={cr.warrior.className} setCosts={setCosts} />
            </Col>

            <Col className={colClass}>
              <h4 className='text-center fw-bold'>{cr.evoker.month}</h4>
              <ClassCard cl={cr.evoker} name={cr.evoker.className}  setCosts={setCosts} />
              <ClassCard cl={cr.hunter} name={cr.hunter.className}  setCosts={setCosts} />
              <ClassCard cl={cr.mage}   name={cr.mage.className}    setCosts={setCosts} />
              <ClassCard cl={cr.shaman} name={cr.shaman.className}  setCosts={setCosts} />
            </Col>
          </Row>
        </Col> */}

        <Col className='border'>
          {/* <Button
            variant={cr.paladin.armour ? 'success' : 'danger'}
            onClick={() => {
              console.log(`cr.paladin.armour`);
              console.log(cr.paladin.armour);
            }}>
            paladin armour
          </Button>

          <Button
            variant={cr.paladin.weapons ? 'success' : 'danger'}
            onClick={() => {
              console.log(`cr.paladin.weapons`);
              // console.log(cr.paladin.weapons);
              testWeaponFunction(cr.paladin.weapons, true)
              // console.log(cr.paladin.weapons);
            }}>
            paladin weapons
          </Button> */}
          <Button variant="primary" onClick={() => testButtonFunction(cr.paladin, setSeptCost)}>
            toggle paladin armour
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

const testButtonFunction = (c, setCosts) => {
  console.log('-------------------');
  console.log(c.armour);
  c.armour = !c.armour;
  console.log(c.armour);
  
  console.log(c.month)

  setCosts((prev) => ({
    ...prev,
    september: c.armour ? prev.september + 1 : prev.september - 1,
  }));
}

const testWeaponFunction = (c, bool) => {
  console.log(c);
  c = bool;
  console.log(c);
}



function ClassCard(props) {
  
}

export default Arcana;