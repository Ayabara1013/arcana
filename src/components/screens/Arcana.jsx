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
    constructor(armour, weapons, className, month) {
      this.armour = armour;
      this.weapons = weapons;
      this.className = className;
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

        <Col md='auto' className='border'>
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

          {/* paladin button group */}
          <Card className=''>
            <h3 className='text-center fw-bold'>paladin</h3>
            <ButtonGroup className='m-1'>
              <Button
                variant={btnState.paladin.armour ? 'success' : 'secondary'}
                onClick={ () => {
                  updateStates(setCr, setBtnState, 'paladin', 'armour');
                  
                  //--------------------------------

                  updateCosts(cr.paladin, 'armour', costs, setCosts)

              }}>
                armour
              </Button>

              <Button onClick={() => {
                const month = cr.paladin.month.toLowerCase();
                setCosts((prevCosts) => ({
                  ...prevCosts,
                  armour: cr.paladin.armour ? prevCosts.armour + 1 : prevCosts.armour - 1,
                  [month]: cr.paladin.armour ? prevCosts[month] + 1 : prevCosts[month] - 1
                }));
              }}>
                set Costs
              </Button>

              <Button
                variant={btnState.paladin.weapons ? 'success' : 'secondary'}
                onClick={() => {
                  setBtnState({ ...btnState, paladin: { ...btnState.paladin, weapons: !btnState.paladin.weapons } });
                  setCr({ ...cr, paladin: { ...cr.paladin, weapons: !cr.paladin.weapons } });
                  console.log(`btnState.paladin.weapons: ${btnState.paladin.weapons} | paladin cr.paladin.weapons: ${cr.paladin.weapons}`);

                  //--------------------------------
                  const operation = cr.paladin.weapons ? 'add' : 'subtract';
                  console.log(operation);
                  // updateCosts(cr.paladin, 'weapons', operation, costs, setCosts);
                }}>
                weapons
              </Button>
            </ButtonGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

/**
 * Update the rewards and button states for a specific player class and reward type.
 * @param {function} setCr - The state setter for class rewards.
 * @param {function} setBtnState - The state setter for button states.
 * @param {string} playerClass - The name of the player class to update.
 * @param {string} rewardType - The type of reward to update (e.g., 'armour', 'weapons').
 */
async function updateStates(setCr, setBtnState, playerClass, rewardType) {
  // Update the class rewards state
  setCr((classRewards) => ({
    ...classRewards,
    [playerClass]: { ...classRewards[playerClass], [rewardType]: !classRewards[playerClass][rewardType] }
  }));

  // Update the button states
  setBtnState((btnStates) => ({
    ...btnStates,
    [playerClass]: { ...btnStates[playerClass], [rewardType]: !btnStates[playerClass][rewardType] }
  }));
}

/**
 * Update costs based on class changes.
 * @param {object} cl - Class information object.
 * @param {string} type - Type of reward to update (e.g., 'armour', 'weapons').
 * @param {object} costs - Current costs state.
 * @param {function} setCosts - State setter for costs.
 */
function updateCosts(cl, type, costs, setCosts) {
  const armourCost = 450;
  const weaponsCost = 500;
  
  const month = cl.month.toLowerCase();
  console.log(`cl.${type}: ${cl[type]} | costs.${type}: ${costs[type]}`);
  
  /**
   * default value of cl[type] is false, so when pressed, it should be set to TRUE before this,
   * THUS it SHOULD add 1 on the first click?
   * for some reason, the above console.log is returning false, even though it should be true
   */
  setCosts(prevCosts => {
    const updatedTypeCost = cl[type] ? prevCosts[type] - 1 : prevCosts[type] + 1;
    const updatedMonthCost = cl[type] ? prevCosts[month] - 1 : prevCosts[month] + 1;

    return {
      ...prevCosts,
      [type]: updatedTypeCost,
      [month]: updatedMonthCost
    };
  });
}

export default Arcana;