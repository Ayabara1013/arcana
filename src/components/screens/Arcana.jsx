import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

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
    constructor(armour, weapons, cName, month) {
      this.armour = armour;
      this.weapons = weapons;
      this.cName = cName; // class name
      this.
      this.month = month;
    }
  }
  class ClassBtn {
    constructor(name, armour, weapons) {
      this.name = name;
      this.armour = armour;
      this.weapons = weapons;
    }
  }

  const [cr, setCr] = useState({ // class rewards
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
  });

  const classesByMonth = {
    September: ['paladin', 'priest', 'rogue'],
    October: ['deathKnight', 'demonHunter', 'druid'],
    November: ['warlock', 'monk', 'warrior'],
    December: ['evoker', 'hunter', 'mage', 'shaman'],
  };

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

  const [btnState, setBtnState] = useState({
    paladin: new ClassBtn('Paladin', false, false),
    priest: new ClassBtn('Priest', false, false),
    rogue: new ClassBtn('Rogue', false, false),
    deathKnight: new ClassBtn('Death Knight', false, false),
    demonHunter: new ClassBtn('Demon Hunter', false, false),
    druid: new ClassBtn('Druid', false, false),
    warlock: new ClassBtn('Warlock', false, false),
    monk: new ClassBtn('Monk', false, false),
    warrior: new ClassBtn('Warrior', false, false),
    evoker: new ClassBtn('Evoker', false, false),
    hunter: new ClassBtn('Hunter', false, false),
    mage: new ClassBtn('Mage', false, false),
    shaman: new ClassBtn('Shaman', false, false),
  });

  useEffect(() => {
    // console.log('1 reloaded');
    // console.log(cr.paladin)
  }, []);
  const colClass = 'flex-grow-0 p-0';

  // console.log(classesByMonth);

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
          <Button 
            variant="primary"
            className='m-1'
            onClick={() => {
              console.log(cr.paladin)
            }}>
            view Paladin
          </Button>

          <Button 
            variant="primary"
            className='m-1'
            onClick={() => {
              console.log(cr.paladin)
              console.log(btnState.paladin)
            }}>
            check states
          </Button>
        </Col> */}

        <Col md='auto' className='border'>
          <Row>
            <Col>
            {/* const { cl, name, cr, setCr, costs, setCosts, btnState, setBtnState, tc} = props; */}
              <ClassCard cl={cr.paladin} name='paladin' cr={cr} setCr={setCr} costs={costs} setCosts={setCosts} btnState={btnState} setBtnState={setBtnState} />
              <ClassCard cl={cr.priest} name='priest' cr={cr} setCr={setCr} costs={costs} setCosts={setCosts} btnState={btnState} setBtnState={setBtnState} />
              <ClassCard cl={cr.rogue} name={cr.rogue.cName} cr={cr} setCr={setCr} costs={costs} setCosts={setCosts} btnState={btnState} setBtnState={setBtnState} />
            </Col>

            <Col>
            
            </Col>

            <Col>
            
            </Col>

            <Col>
            
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );
}
/**
 * Update the rewards and button states for a specific player class and reward type.
 * @param {function} setCr - The state setter for class rewards.
 * @param {function} setBtnState - The state setter for button states.
 * @param {string} pClass - The name of the player class to update.
 * @param {string} type - The type of reward to update (e.g., 'armour', 'weapons').
 */
function updateStates(cr, setCr, btnState, setBtnState, pClass, type) {
  // console.log(`2 playerClass: ${pClass} | rewardType: ${type}`);
  // console.log(`3 armour: ${cr[pClass][type]}`);

  // Update the class rewards state
  setCr((prevCr) => ({
    ...prevCr,
    [pClass]: { ...prevCr[pClass], [type]: !prevCr[pClass][type] }
  }));

  // Update the button states
  setBtnState((prevBtnState) => ({  
    ...prevBtnState,  
    [pClass]: { ...prevBtnState[pClass], [type]: !prevBtnState[pClass][type] }  
  }));  
  
  // console.log(`4 armour: ${cr[pClass][type]}`);
}

/**
 * Update costs based on class changes.
 * @param {object} cl - Class information object.
 * @param {string} type - Type of reward to update (e.g., 'armour', 'weapons').
 * @param {object} costs - Current costs state.
 * @param {function} setCosts - State setter for costs.
 */
function updateCosts(cl, type, costs, setCosts) {  
  /**
   * default value of cl[type] is false, so when pressed, it should be set to TRUE before this,
   * THUS it SHOULD add 1 on the first click?
   * for some reason, the above console.log is returning false, even though it should be true
   */
  // console.log(`5 cl.${type}: ${cl[type]} | costs.${type}: ${costs[type]} ... adding cost`);

  const armourCost = 450;
  const weaponsCost = 500;
  let awc = type === 'armour' ? armourCost : weaponsCost;

  // console.log(`6 type: ${type} | cost: ${awc}`);

  setCosts((prevCosts) => ({
    ...prevCosts,
    [type]: cl[type] ? prevCosts[type] - awc : prevCosts[type] + awc,
    [cl.month.toLowerCase()]: cl[type] ?
      prevCosts[cl.month.toLowerCase()] - awc : prevCosts[cl.month.toLowerCase()] + awc
  }));
}


<ClassCard cl={cr.paladin} setCr={setCr} setBtnState={setBtnState} />

/**
 * 
 * @param {*} props 
 * @returns 
 */
function ClassCard(props) {
  // const { cl, name, cr, setCr, costs, setCosts, btnState, setBtnState, tc} = props;
  const { cl } = props;
  const { setCr, setBtnState, setCosts } = props;

  // convert the class name to a class string
  const pClass = Object.keys(cl)[0]; // player class & object key name as string
  let strName = cl.cName.toLowerCase().replace(' ', '-');

  console.log('test');
  console.log(props);

  return (
    <Card className={`class-card box -${n}`}>
      <h3 className='text-center fw-bold'>{name || `class`}</h3>
      <ButtonGroup className='m-1'>
        <Button
          variant={btnState[cn].armour ? 'success' : 'secondary'}
          onClick={() => {
            updateStates(cl, setCr, btnState, setBtnState, pClass, 'armour');
            //--------------------------------
            updateCosts(cr[cn], 'armour', costs, setCosts);

        }}>
          armour
        </Button>

        <Button
          variant={btnState[cn].weapons ? 'success' : 'secondary'}
          onClick={() => {
            updateStates(cr, setCr, btnState, setBtnState, pClass, 'weapons');
            //--------------------------------
            updateCosts(cr[cn], 'weapons', costs, setCosts);
          }}>
          weapons
        </Button>
      </ButtonGroup>
    </Card>
  )
}

export default Arcana;