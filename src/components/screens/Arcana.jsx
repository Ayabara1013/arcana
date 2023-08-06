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
  
  // console.log(Object.values(cr));

  const armourCost = 450;
  const weaponsCost = 500;

  const updateCosts = (cl, item, status) => {
    console.log(`you pressed updateCosts, this button is not being used right now`)
  };

  
  const handleInputChange = (event) => {
    setTendies(event.target.value);
  };
  
  React.useEffect(() => {
    console.log(costs);
  }, [cr]);
  
  const colClass = 'flex-grow-0 p-0';

  return (
    <Container className='card-1 border'>
      <div className='d-flex justify-content-between'>
        <h1>Trading Post Calculator</h1>
        <h1>{tendies} tendies!</h1>
        <Button variant="primary" onClick={updateCosts}>
          update costs
        </Button>
        <Button variant="primary" onClick={() => console.log(costs)}>
          print costs
        </Button>
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
              <Form.Control type="number" placeholder="input tendies!" onChange={handleInputChange}/>
            </Form.Group>
          </Form>

          <h4 className='fw-bold'>you need:</h4>

          <h5>september: {costs.september}</h5>
          <h5>october: {costs.september}</h5>
          <h5>november: {costs.september}</h5>
          <h5>december: {costs.september}</h5>
          <h5>all armour: {costs.september}</h5>
          <h5>all weapons: {costs.september}</h5>
          
          
        </Col>

        <Col md='auto' className='border'>
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
        </Col>
      </Row>
    </Container>
  );
}


function ClassCard(props) {
  const { cl, name, tc, setCosts } = props; // class object, class name, text class

  const armourCost = 450;
  const weaponsCost = 500;

  const [armour, setArmour] = useState(false);
  const [weapons, setWeapons] = useState(false);

  let n = name.toLowerCase().replace(' ', '-'); // convert the class name to a class string

  const handleClick = (item, type) => {
    console.log('---------------------------------')
    // if (item !== null && item !== undefined && item !== '') {
    //   console.log(`${cl.className}: ${cl.className}`);
    //   console.log(`${cl.className} armour:  ${cl.armour}`);
    //   console.log(`${cl.className} weapons: ${cl.weapons}`);
    //   console.log('>>>')
    // } else {
    //   console.log(`No item available.`);
    // }


    if (type === 'armour') {
      if (cl.armour === false) {
        setArmourTrue();
        // setArmour(true);
        
        // setCosts((prevCosts) => ({
        //   ...prevCosts,
        //   [cl.month.toLowerCase()]: prevCosts[cl.month.toLowerCase()] + armourCost,
        //   armour: prevCosts.armour + armourCost,
        // }));
      }
      else if (cl.armour === true) {
        setArmourFalse();
        // setArmour(false);
        // setCosts((prevCosts) => ({
        //   ...prevCosts,
        //   [cl.month.toLowerCase()]: prevCosts[cl.month.toLowerCase()] - armourCost,
        //   armour: prevCosts.armour - armourCost,
        // }));
      }
    }
    else if (type === 'weapons') {
      if (cl.weapons === false) {
        setWeaponsTrue();
      }
      else if (cl.weapons === true) {
        setWeaponsFalse();
      }
    }


  };

  //#region set armour weapons true false
  const setArmourTrue = () => {
    // console.log(`you pressed armour for ${cl.className}`);
    // console.log(`${cl.className}.armour is ${cl.armour}`);
    console.log(`setting ${cl.className}.armour to true`);

    setArmour(true);
    cl.armour = !cl.armour;

    console.log(`${cl.className}.armour is now ${cl.armour}`);
  }

  const setArmourFalse = () => {
    // console.log(`you pressed armour for ${cl.className}`);
    // console.log(`${cl.className}.armour is ${cl.armour}`);
    console.log(`setting ${cl.className}.armour to false`);

    setArmour(false);
    cl.armour = !cl.armour;

    console.log(`${cl.className}.armour is now ${cl.armour}`);
  }

  const setWeaponsTrue = () => {
    // console.log(`you pressed armour for ${cl.className}`);
    // console.log(`${cl.className}.armour is ${cl.armour}`);
    console.log(`setting ${cl.className}.weapons to true`);

    setWeapons(true);
    cl.weapons = !cl.weapons;

    console.log(`${cl.className}.weapons is now ${cl.weapons}`);
  }

  const setWeaponsFalse = () => {
    // console.log(`you pressed armour for ${cl.className}`);
    // console.log(`${cl.className}.armour is ${cl.armour}`);
    console.log(`setting ${cl.className}.weapons to true`);
    setWeapons(false);
    cl.weapons = !cl.weapons;
    console.log(`${cl.className}.weapons is now ${cl.weapons}`);
  }
  //#endregion


  
  return (
    <div className={`class-card box -${n.toLowerCase()}`}>
      <span className={`${tc} class-title text-center mb-0`}>{name}</span>

      <ButtonGroup>
        <Button
          variant={`primary`}
          className={`item-btn`}
          onClick={() => console.log(cl)}>
          print
        </Button>

        <Button
          variant={cl.armour ? 'primary' : 'outline-secondary'}
          className={`item-btn ${armour ? '-on' : '-off'} `}
          onClick={() => {handleClick(cl.armour, 'armour')}}>
          Armour
        </Button>

        <Button
          variant={cl.weapons ? 'primary' : 'outline-secondary'}
          className={`item-btn ${weapons ? '-on' : '-off'} `}
          onClick={() => {handleClick(cl.weapons, 'weapons')}}>
          Weapons
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Arcana;