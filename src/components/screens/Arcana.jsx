import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import '../../styles/arcana.scss';

function Arcana(props) {

  return (
    <div className='p-0'>
      <TradingPost />
    </div>
  );
}

function TradingPost(props) {
  class ClassSet {
    constructor(armour, weapons, cName, month) {
      this.armour = armour;
      this.weapons = weapons;
      this.cName = cName; // class name
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
    weapons: 0,
  });
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

  function updateTendies(value) {
    setTendies(parseFloat(value));
  }

  const colClass = 'flex-grow-0 p-0';

  const classCardProps = {
    setCr: setCr,
    btnState: btnState,
    setBtnState: setBtnState,
    setCosts: setCosts
  }

  function calcTendiesCost(costs, tendies, category) {
    let total = 0;
    
    let sdEarnings = [1000, 1000, 1000, 1000];
    let sept = sdEarnings[0];
    let oct = sdEarnings[1];
    let nov = sdEarnings[2];
    let dec = sdEarnings[3];
    let sdTotal = 0;

    let result;

    for (let n of sdEarnings) {
      sdTotal += n;
    }

    const allTendies = sdTotal + tendies;

    switch (category) {
      case 'september': 
        total += costs.september; 
        break;
      case 'october':
        total += costs.october;
        break;
      case 'november':
        total += costs.november;
        break;
      case 'december':
        total += costs.december;
        break;
      case 'armour':
        total += costs.armour;
        break;
      case 'weapons':
        total += costs.weapons;
        break;
      default:
        total = costs.armour + costs.weapons;
        break;
    }

    if (total <= tendies) { // if you have enough tendies
      result = `you have enough tendies!`
    }
    else if (total <= allTendies) { // if you have enough tendies after the monthly earnings
      result = `you will have enough if you get all of the monthly tendies!`
    }
    else if (total > allTendies) { // if you wont have enough tendies period
      result = `the total is more than the tendies you will be able to get :(` 
    }
    
    let ree = '';
    if (total > sdEarnings[0] + tendies) {
      ree = `${sdEarnings[0]} + ${tendies} = ${sdEarnings[0] + tendies} :: you will not have enough tendies to get all of the monthly tendies`;
    }

    const aggEarnings = {
      sep: sdEarnings[0] - costs.september,
      oct: sdEarnings[0] + sdEarnings[1] - costs.september - costs.october,
      // oct: this.sept - costs.october,
      nov: sdEarnings[0] + sdEarnings[1] + sdEarnings[2] - costs.september - costs.october - costs.november,
      dec: sdEarnings[0] + sdEarnings[1] + sdEarnings[2] + sdEarnings[3] - costs.september - costs.october - costs.november - costs.december
    };

    return (
      <>
        <div>your tendies: {tendies}</div>
        <div>(total) monthly tendies: {sdTotal}</div>

        {/* <div className='border border-primary'>
          <div>{aggEarnings.sep}</div>
          <div>{aggEarnings.oct}</div>
          <div>{aggEarnings.nov}</div>
          <div>{aggEarnings.dec}</div>
        </div>

        <div className='border border-primary'>
          <div>october cost: {costs.october}</div>
        </div>
        
        <div className='border border-primary'>
          <div>november cost: {costs.november}</div>
        </div>

        <div className='border border-primary'>
          <div>december cost: {costs.december}</div>
          <div>october = (october tendies + your tendies) - leftover tendies</div>
        </div> */}

        <div>total cost: {total}</div>
        <div>{result}</div>
      </>
    )
  }

  return (
    <Container className='m-auto max-w-100 p-0'>
      <div className='d-flex justify-content-between'>
        <h1>Trading Post Calculator</h1>
        <h1>{tendies} tendies!</h1>
      </div>

      <Row className='m-auto'>
        <Col md='5' className=''>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <Form.Control placeholder="input tendies!" aria-label="tendies" aria-describedby="basic-addon1" onChange={(e) => updateTendies(e.target.value)} />
            <Button variant="primary" id="button-addon2" onClick={() => console.log(tendies)}>confirm</Button>
          </InputGroup>

          <h4 className='fw-bold'>you need:</h4>
          <div className="d-flex flex-wrap gap-2">
            <Card className='cost-total-card'>september: {costs.september}</Card>
            <Card className='cost-total-card'>october: {costs.october}</Card>
            <Card className='cost-total-card'>november: {costs.november}</Card>
            <Card className='cost-total-card'>december: {costs.december}</Card>
            <Card className='cost-total-card'>armour: {costs.armour}</Card>
            <Card className='cost-total-card'>weapons: {costs.weapons}</Card>
          </div>
          
          <div className='m-2'>{calcTendiesCost(costs, tendies, 'total')}</div>          
        </Col>

        <Col md='' className=''>
          <Row>
            <Col>
              <h4 className='text-center fw-bold'>September</h4>
              <ClassCard cl={cr.paladin} name='paladin' {...classCardProps} />
              <ClassCard cl={cr.priest} name='priest' {...classCardProps} />
              <ClassCard cl={cr.rogue} name='rogue' {...classCardProps} />
            </Col>

            <Col>
              <h4 className='text-center fw-bold'>October</h4>
              <ClassCard cl={cr.deathKnight} name='deathKnight' {...classCardProps} tc='-smaller-title' />
              <ClassCard cl={cr.demonHunter} name='demonHunter' {...classCardProps} tc='-smaller-title' />
              <ClassCard cl={cr.druid} name='druid' {...classCardProps} />
            </Col>

            <Col>
              <h4 className='text-center fw-bold'>November</h4>
              <ClassCard cl={cr.warlock} name='warlock' {...classCardProps} />
              <ClassCard cl={cr.monk} name='monk' {...classCardProps} />
              <ClassCard cl={cr.warrior} name='warrior' {...classCardProps} />
            </Col>

            <Col>
              <h4 className='text-center fw-bold'>December</h4>
              <ClassCard cl={cr.evoker} name='evoker' {...classCardProps} />
              <ClassCard cl={cr.hunter} name='hunter' {...classCardProps} />
              <ClassCard cl={cr.mage} name='mage' {...classCardProps} />
              <ClassCard cl={cr.shaman} name='shaman' {...classCardProps} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <CostsCard category='September' text={calcTendiesCost(costs, tendies, 'september')} />
          <CostsCard category='Total' text={calcTendiesCost(costs, tendies, 'total')} />
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
function updateStates(setCr, setBtnState, pClass, type) {
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
}

/**
 * Update costs based on class changes.
 * @param {object} cl - Class information object.
 * @param {string} type - Type of reward to update (e.g., 'armour', 'weapons').
 * @param {object} costs - Current costs state.
 * @param {function} setCosts - State setter for costs.
 */
function updateCosts(cl, type, setCosts) {  
  /**
   * default value of cl[type] is false, so when pressed, it should be set to TRUE before this,
   * THUS it SHOULD add 1 on the first click?
   * for some reason, the above console.log is returning false, even though it should be true
   */
  const armourCost = 450;
  const weaponsCost = 500;
  let awc = type === 'armour' ? armourCost : weaponsCost;

  setCosts((prevCosts) => ({
    ...prevCosts,
    [type]: cl[type] ? prevCosts[type] - awc : prevCosts[type] + awc,
    [cl.month.toLowerCase()]: cl[type] ?
      prevCosts[cl.month.toLowerCase()] - awc : prevCosts[cl.month.toLowerCase()] + awc
  }));
}

/**
 * 
 * @param {object} cl
 * @param {function} setCr 
 * @param {object} btnState 
 * @param {function} setBtnState 
 * @param {function} setCosts 
 * @returns ClassCard component
 */
function ClassCard(props) {
  const { cl, name, btnState, setCr, setBtnState, setCosts, tc } = props;
  
  // button variants ( for future-proofing and to remove hard-coded strings )
  const activeVariant = 'info';
  const inactiveVariant = 'secondary';

  // reward types ( for future-proofing and to remove hard-coded strings )
  const armour = 'armour'; 
  const weapons = 'weapons';
  // convert the class name to a class string
  const pClass = name;
  let strName = cl.cName.toLowerCase().replace(' ', '-');

  return (
    <Card className={` class-card box -${strName}`}>
      <div className="d-flex -title">
        <h3 className={` text-center m-auto fw-bold class-title ${tc}`}>{cl.cName || `class`}</h3>
      </div>
      
      <div className="-buttons">
        <ButtonGroup className='item-btn-group d-flex flex-grow-1 rounded-0'>
            <Button
              className={`item-btn -armour ${btnState[pClass].armour ? '-on' : '-off'} `}
              // variant={btnState[pClass].armour ? activeVariant : inactiveVariant}
              onClick={() => {
                updateStates(setCr, setBtnState, pClass, armour);
                //--------------------------------
                updateCosts(cl, armour, setCosts);
            }}>
              <span className="">armour</span>
            </Button>
        
            <Button
              className={`item-btn -weapons ${btnState[pClass].weapons ? '-on' : '-off'} `}
              // variant={btnState[pClass].weapons ? activeVariant : inactiveVariant}
              onClick={() => {
                updateStates(setCr, setBtnState, pClass, weapons);
                //--------------------------------
                updateCosts(cl, weapons, setCosts);
              }}>
              weapons
            </Button>
          </ButtonGroup>
      </div>

      {/* <div className="-buttons border"></div> */}
    </Card>
  )
}

function CostsCard(props) {
  const { category, text } = props;

  return (
    <Card className='costs-card w-auto mb-2'>
      <h3>{category}</h3>
      <div>{text}</div>
    </Card>      
  );
}

export default Arcana;

