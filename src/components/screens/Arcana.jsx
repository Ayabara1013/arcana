import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import '../../styles/arcana.scss';

function Arcana(props) {
  // let [tendies, setTendies] = useState(0);
  // const [toggle, setToggle] = useState({
  //   b1: false,
  //   b2: false
  // });

  // const reward = 500;

  // const handleClick = (id) => {
  //   console.log(id);

  //   if (toggle[id]) {
  //     setTendies(tendies - reward);
  //     setToggle({ ...toggle, [id]: false });
  //   }
  //   else if (!toggle[id]) {
  //     setTendies(tendies + reward);
  //     setToggle({ ...toggle, [id]: true });
  //   }
  // };

  return (
    <Container>
      {/* <Row>
        <Col>
          <h1>{tendies}</h1>
          <Button id='i' variant="primary" onClick={() => handleClick('b1')}>
            {toggle.b1 ? 'true' : 'false'}
          </Button>

          <Button id='j' variant="primary" onClick={() => handleClick('b2')}>
            {toggle.b2 ? 'true' : 'false'}
          </Button>
        </Col>
      </Row> */}

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
    setTendies(value);
  }

  const colClass = 'flex-grow-0 p-0';

  const classCardProps = {
    setCr: setCr,
    btnState: btnState,
    setBtnState: setBtnState,
    setCosts: setCosts
  }

  return (
    <Container className='card-1'>
      <div className='d-flex justify-content-between'>
        <h1>Trading Post Calculator</h1>
        <h1>{tendies} tendies!</h1>
        {/* <Button variant="primary">
          update costs
        </Button>
        <Button variant="primary" onClick={() => console.log(costs)}>
          print costs
        </Button> */}
      </div>

      <Row className='m-auto'>
        <Col md='auto' className=''>
          {/* <Form>
            <Form.Group controlId="form-group-id">
              <Form.Label>how many tendies do you have?</Form.Label>
              <Form.Control type="number" placeholder="input tendies!" onSubmit={(e) => setTendies(e.target.value)} />
              <Button variant="primary" type='submit'>
                submit
              </Button>
            </Form.Group>
          </Form> */}

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <Form.Control placeholder="input tendies!" aria-label="tendies" aria-describedby="basic-addon1" onChange={(e) => updateTendies(e.target.value)} />
            <Button variant="primary" id="button-addon2" onClick={() => console.log(tendies)}>confirm</Button>
          </InputGroup>

          <h4 className='fw-bold'>you need:</h4>

          <h5>september: {costs.september}</h5>
          <h5>october: {costs.october}</h5>
          <h5>november: {costs.november}</h5>
          <h5>december: {costs.december}</h5>
          <h5>armour: {costs.armour}</h5>
          <h5>weapons: {costs.weapons}</h5>
          <h4>{`you will need ${(costs.armour + costs.weapons) - tendies} tendies!`}</h4>
          
        </Col>

        <Col md='auto' className=''>
          <Row>
            <Col>
              <h4 className='text-center fw-bold'>September</h4>
              <ClassCard cl={cr.paladin} name='paladin' {...classCardProps} />
              <ClassCard cl={cr.priest} name='priest' {...classCardProps} />
              <ClassCard cl={cr.rogue} name='rogue' {...classCardProps} />
              {/* <ClassCard cl={cr.paladin} name='paladin' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.priest} name='priest' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.rogue} name='rogue' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} /> */}

            </Col>

            <Col>
              <h4 className='text-center fw-bold'>October</h4>
              <ClassCard cl={cr.deathKnight} name='deathKnight' {...classCardProps} tc='-smaller-title' />
              <ClassCard cl={cr.demonHunter} name='demonHunter' {...classCardProps} tc='-smaller-title' />
              <ClassCard cl={cr.druid} name='druid' {...classCardProps} />
              {/* <ClassCard cl={cr.deathKnight} name='deathKnight' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.demonHunter} name='demonHunter' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.druid} name='druid' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} /> */}
            </Col>

            <Col>
              <h4 className='text-center fw-bold'>November</h4>
              <ClassCard cl={cr.warlock} name='warlock' {...classCardProps} />
              <ClassCard cl={cr.monk} name='monk' {...classCardProps} />
              <ClassCard cl={cr.warrior} name='warrior' {...classCardProps} />
              {/* <ClassCard cl={cr.warlock} name='warlock' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.monk} name='monk' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.warrior} name='warrior' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} /> */}
            </Col>

            <Col>
              <h4 className='text-center fw-bold'>December</h4>
              <ClassCard cl={cr.evoker} name='evoker' {...classCardProps} />
              <ClassCard cl={cr.hunter} name='hunter' {...classCardProps} />
              <ClassCard cl={cr.mage} name='mage' {...classCardProps} />
              <ClassCard cl={cr.shaman} name='shaman' {...classCardProps} />
              {/* <ClassCard cl={cr.evoker} name='evoker' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.hunter} name='hunter' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.mage} name='mage' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} />
              <ClassCard cl={cr.shaman} name='shaman' setCr={setCr} btnState={btnState} setBtnState={setBtnState} setCosts={setCosts} /> */}
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

export default Arcana;

