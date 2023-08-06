import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import '../../styles/arcana.scss';
import { update } from 'lodash';


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

  const updateCosts = () => {
    costs.september = 0;
    costs.october = 0; 
    costs.november = 0;
    costs.december = 0;
    costs.armour = 0;
    costs.weapons = 0;

    // Calculate the costs for each month
    Object.values(cr).forEach(classSet => {
      if (classSet.month === 'September') {
        if (classSet.armour) costs.september += armourCost;
        if (classSet.weapons) costs.september += weaponsCost;
      } else if (classSet.month === 'October') {
        if (classSet.armour) costs.october += armourCost;
        if (classSet.weapons) costs.october += weaponsCost;
      } else if (classSet.month === 'November') {
        if (classSet.armour) costs.november += armourCost;
        if (classSet.weapons) costs.november += weaponsCost;
      } else if (classSet.month === 'December') {
        if (classSet.armour) costs.december += armourCost;
        if (classSet.weapons) costs.december += weaponsCost;
      }
    });
  
    // Calculate the total armour and weapons cost
    // const totalArmour = Object.values(cr).filter(classSet => classSet.armour).length * armourCost;
    // const totalWeapons = Object.values(cr).filter(classSet => classSet.weapons).length * weaponsCost;

    costs.armour = Object.values(cr).filter(cr => cr.armour).length * armourCost;
    costs.weapons = Object.values(cr).filter(cr => cr.weapons).length * weaponsCost; 

    console.log(`september : ${costs.september}`);
    console.log(`october : ${costs.october}`);
    console.log(`november : ${costs.november}`);
    console.log(`december : ${costs.december}`);
    console.log(`total armour cost: ${costs.armour}`);
    console.log(`total weapons cost: ${costs.weapons}`);
  };

  
  const handleInputChange = (event) => {
    setTendies(event.target.value);
  };
  
  React.useEffect(() => {
    updateCosts();
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
              <ClassCard cl={cr.paladin}      name={cr.paladin.className}     setCosts={setCosts} />
              <ClassCard cl={cr.priest}       name={cr.priest.className}      setCosts={setCosts} />
              <ClassCard cl={cr.rogue}        name={cr.rogue.className}       setCosts={setCosts} />
            </Col>

            <Col className={colClass}>
              <h4 className='text-center fw-bold'>{cr.deathKnight.month}</h4>
              <ClassCard cl={cr.deathKnight}  name={cr.deathKnight.className} setCosts={setCosts} tc='-smaller-title' />
              <ClassCard cl={cr.demonHunter}  name={cr.demonHunter.className} setCosts={setCosts} tc='-smaller-title' />
              <ClassCard cl={cr.druid}        name={cr.druid.className}       setCosts={setCosts}  />
            </Col>

            <Col className={colClass}>
              <h4 className='text-center fw-bold'>{cr.warlock.month}</h4>
              <ClassCard cl={cr.warlock}      name={cr.warlock.className}     setCosts={setCosts} />
              <ClassCard cl={cr.monk}         name={cr.monk.className}        setCosts={setCosts} />
              <ClassCard cl={cr.warrior}      name={cr.warrior.className}     setCosts={setCosts} />
            </Col>

            <Col className={colClass}>
              <h4 className='text-center fw-bold'>{cr.evoker.month}</h4>
              <ClassCard cl={cr.evoker}       name={cr.evoker.className}      setCosts={setCosts} />
              <ClassCard cl={cr.hunter}       name={cr.hunter.className}      setCosts={setCosts} />
              <ClassCard cl={cr.mage}         name={cr.mage.className}        setCosts={setCosts} />
              <ClassCard cl={cr.shaman}       name={cr.shaman.className}      setCosts={setCosts} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function ClassCard(props) {
  const { cl, name, tc } = props; // class object, class name, text class

  const [armour, setArmour] = useState(false);
  const [weapons, setWeapons] = useState(false);

  // convert the class name to a class string
  let n = name.toLowerCase().replace(' ', '-');

  const handleWeaponsClick = () => {
    setWeapons(!weapons);
    cl.weapons = !cl.weapons;
    console.log(`toggling ${name} armour to: ${cl.weapons}`);
  }

  const handleArmourClick = () => {
    setArmour(!armour);
    cl.armour = !cl.armour;
    console.log(`toggling ${name} armour to: ${cl.armour}`);
  }

  return (
    <div className={`class-card box -${n.toLowerCase()}`}>
      <span className={`${tc} class-title text-center mb-0`}>{name}</span>

      <ButtonGroup>
        <Button
          variant={cl.armour ? 'primary' : 'outline-secondary'}
          className={`item-btn ${armour ? '-on' : '-off'} `}
          onClick={handleArmourClick}>
          Armour
        </Button>

        <Button
          variant={cl.weapons ? 'primary' : 'outline-secondary'}
          className={`item-btn ${weapons ? '-on' : '-off'} `}
          onClick={handleWeaponsClick}>
          Weapons
        </Button>
      </ButtonGroup>
    </div>
  )
}

/**
 * 
 * @param {object} cr class rewards object
 * @param {string} cl class name
 * @param {string} item weapon / armour selected
 * @param {boolean} operation on / off selection
 * @param {setState} setCosts setCosts function
 */
const updateCosts = (cr, pClass, item, operation, setCosts) => {

  // if (item === 'weapons') {

  // }

  // if (item === 'armour') {
  //   object.values.forEach
  // }

  Object.values(cr).forEach(classSet => {
    // are we subtracting or adding?
    if { cr.pClass.item === false } { // the item is not turned on, so we need to set it to active and add the cost to the value
      // should we check if the total value is correct in some way?
      cr.pClass.item = true:
    }


    /**
     * confirm which cost value is being modified
     * 1. check the month
     * 2. check if it is already active
     * 3. if active, toggle off and subtract cost,
     * 4. if inactive, toggle on and add cost,
     */
    switch (classSet.month) {
      case 'September':
        
        break;
    
      default:
        break;
    }

  })

  // costs.september = 0;
  // costs.october = 0; 
  // costs.november = 0;
  // costs.december = 0;
  // costs.armour = 0;
  // costs.weapons = 0;

  // // Calculate the costs for each month
  // Object.values(cr).forEach(classSet => {
  //   if (classSet.month === 'September') {
  //     if (classSet.armour) costs.september += armourCost;
  //     if (classSet.weapons) costs.september += weaponsCost;
  //   } else if (classSet.month === 'October') {
  //     if (classSet.armour) costs.october += armourCost;
  //     if (classSet.weapons) costs.october += weaponsCost;
  //   } else if (classSet.month === 'November') {
  //     if (classSet.armour) costs.november += armourCost;
  //     if (classSet.weapons) costs.november += weaponsCost;
  //   } else if (classSet.month === 'December') {
  //     if (classSet.armour) costs.december += armourCost;
  //     if (classSet.weapons) costs.december += weaponsCost;
  //   }
  // });

  // // Calculate the total armour and weapons cost
  // // const totalArmour = Object.values(cr).filter(classSet => classSet.armour).length * armourCost;
  // // const totalWeapons = Object.values(cr).filter(classSet => classSet.weapons).length * weaponsCost;

  // costs.armour = Object.values(cr).filter(cr => cr.armour).length * armourCost;
  // costs.weapons = Object.values(cr).filter(cr => cr.weapons).length * weaponsCost; 

  // console.log(`september : ${costs.september}`);asdasd
  // console.log(`october : ${costs.october}`);
  // console.log(`november : ${costs.november}`);
  // console.log(`december : ${costs.december}`);
  // console.log(`total armour cost: ${costs.armour}`);
  // console.log(`total weapons cost: ${costs.weapons}`);
};

function ClassCard(props) {
  const { cl, name, tc } = props; // class object, class name, text class

  const [armour, setArmour] = useState(false);
  const [weapons, setWeapons] = useState(false);

  // convert the class name to a class string
  let n = name.toLowerCase().replace(' ', '-');

  const handleWeaponsClick = () => {
    setWeapons(!weapons);
    cl.weapons = !cl.weapons;
    console.log(`toggling ${name} armour to: ${cl.weapons}`);
  }

  const handleArmourClick = () => {
    setArmour(!armour);
    cl.armour = !cl.armour;
    console.log(`toggling ${name} armour to: ${cl.armour}`);
  }

  return (
    <div className={`class-card box -${n.toLowerCase()}`}>
      <span className={`${tc} class-title text-center mb-0`}>{name}</span>

      <ButtonGroup>
        <Button
          variant={cl.armour ? 'primary' : 'outline-secondary'}
          className={`item-btn ${armour ? '-on' : '-off'} `}
          onClick={handleArmourClick}>
          Armour
        </Button>

        <Button
          variant={cl.weapons ? 'primary' : 'outline-secondary'}
          className={`item-btn ${weapons ? '-on' : '-off'} `}
          onClick={handleWeaponsClick}>
          Weapons
        </Button>
      </ButtonGroup>
    </div>
  )
}




export default Arcana;