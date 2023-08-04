import { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import '../../styles/arcana.scss';


function Arcana(props) {

  class ClassSet {
    constructor(armour, weapons, className, month) {
      this.armour = armour;
      this.weapons = weapons;
      this.className = className;
      this.month = month;
    }
  }

  const cr = {
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

  const armourCost = 450;
  const weaponsCost = 500;

  const [classRewards, setClassRewards] = useState(cr);


  
  return (
    <Container>
      <Row>
        <Col>
          <TradingPost cr={cr} />
        </Col>
      </Row>
    </Container>
  );
}

function TradingPost(props) {
  const { cr } = props;

  const [tendies, setTendies] = useState(0);

  const handleConfirmClick = () => {
    // Use the tendies state value as needed (e.g., save to backend, perform calculations, etc.)
    console.log('Tendies value:', tendies);
  };

  const handleInputChange = (event) => {
    setTendies(event.target.value);
  };

  const colClass = 'flex-grow-0 p-0';

  return (
    <Container className='card-1 border'>
      <div className='d-flex justify-content-between'>
        <h1>Trading Post Calculator</h1>
        <h1>{tendies} tendies!</h1>
      </div>

      <Row className='m-auto'>
        <Col className='border'>
          {/* <Button variant="primary" onClick={() => console.log("Primary")}>
            Primary
          </Button> */}

          <Form>
            <Form.Group controlId="form-group-id">
              {/* Form.Label, Form.Control, Form.Text, Form.Check, InputGroup, etc */}
              <Form.Label>how many tendies do you have?</Form.Label>

            </Form.Group>
          </Form>

          
        </Col>

        <Col md='auto' className='border'>
          <Row className='m-auto justify-content-end lign-items-start gap-2'>
            <Col className={colClass}>
              <ClassCard cl={cr.paladin}      name={cr.paladin.className} />
              <ClassCard cl={cr.priest}       name={cr.priest.className} />
              <ClassCard cl={cr.rogue}        name={cr.rogue.className} />
            </Col>

            <Col className={colClass}>
              <ClassCard cl={cr.deathKnight}  name={cr.deathKnight.className} tc='-smaller-title' />
              <ClassCard cl={cr.demonHunter}  name={cr.demonHunter.className} tc='-smaller-title' />
              <ClassCard cl={cr.druid}        name={cr.druid.className} />
            </Col>

            <Col className={colClass}>
              <ClassCard cl={cr.warlock}      name={cr.warlock.className} />
              <ClassCard cl={cr.monk}         name={cr.monk.className} />
              <ClassCard cl={cr.warrior}      name={cr.warrior.className} />
            </Col>

            <Col className={colClass}>
              <ClassCard cl={cr.evoker}       name={cr.evoker.className} />
              <ClassCard cl={cr.hunter}       name={cr.hunter.className} />
              <ClassCard cl={cr.mage}         name={cr.mage.className} />
              <ClassCard cl={cr.shaman}       name={cr.shaman.className} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function ClassCard(props) {
  const { cl, name, tc } = props; // class object, class name, text class

  const [armour, setArmour] = useState(cl.armour);
  const [weapons, setWeapons] = useState(cl.weapons);

  // convert the class name to a class string
  let n = name.toLowerCase().replace(' ', '-');
  // console.log(n);

  return (
    <div className={`class-card box -${n.toLowerCase()}`}>
      <span className={`${tc} class-title text-center mb-0`}>{name}</span>
      <ButtonGroup>
        <Button
          // variant="secondary"
          variant={cl.armour ? 'primary' : 'outline-secondary'}
          className={`item-btn ${armour ? '-on' : '-off'} `}
          onClick={() => {
            // console.log(`toggle ${name} armour`);
            setArmour(!armour); // I can just use the not operator instead of a ternary! ie I dont have to do an if statement or (armour ? false : true)!
            cl.armour = !cl.armour;
            // console.log(`toggling ${name} armour to: `);
            // console.log(cl.armour);
            console.log(`toggling ${name} armour to: ${cl.armour}`);
          }}>
          Armour
        </Button>

        <Button
          variant={cl.weapons ? 'primary' : 'outline-secondary'}
          className={`item-btn ${weapons ? '-on' : '-off'} `}
          onClick={() => {
            setWeapons(!weapons);
            cl.weapons = !cl.weapons;
            console.log(`toggling ${name} weapons to: ${cl.weapons}`);
          }}>
          Weapons
        </Button>
      </ButtonGroup>
    </div>
  )
}




export default Arcana;