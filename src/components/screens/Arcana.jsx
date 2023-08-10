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

  const classCardProps = {
    setCr: setCr,
    btnState: btnState,
    setBtnState: setBtnState,
    setCosts: setCosts
  }

  const sdEarnings = [1000, 1000, 1000, 1000];

  const colClass = 'flex-grow-0 p-0';
  const cstyle = 'cost-total-card flex-grow-1 flex-shrink-1 flex-basis-0 text-center';

  return (
    <Container className='m-auto max-w-100 p-0'>
      <Card className='d-flex flex-row justify-content-between m-2 mb-4 p-2 box-shadow-light'>
        <h1>Trading Post Calculator</h1>
        <h1>{tendies} tendies!</h1>
      </Card>

      <Row className='m-auto'>
        <Col md='5' className=''>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <Form.Control placeholder="input tendies!" aria-label="tendies" aria-describedby="basic-addon1" onChange={(e) => updateTendies(e.target.value)} />
            <Button variant="primary" id="button-addon2" onClick={() => console.log(tendies)}>confirm</Button>
          </InputGroup>

          <h4 className='fw-bold'>you need:</h4>
          <div className="d-flex flex-wrap gap-2">
            <Card className={cstyle}>september: {costs.september}</Card>
            <Card className={cstyle}>october: {costs.october}</Card>
            <Card className={cstyle}>november: {costs.november}</Card>
            <Card className={cstyle}>december: {costs.december}</Card>
            <Card className={cstyle}>armour: {costs.armour}</Card>
            <Card className={cstyle}>weapons: {costs.weapons}</Card>
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

      <div className='d-flex flex-wrap p-2 gap-2'>
        {/* <SeptemberCostsCard costs={costs} tendies={tendies} month='September' earnings={sdEarnings} />
        <OctoberCostsCard costs={costs} tendies={tendies} month='October' earnings={sdEarnings} />
        <NovemberCostsCard costs={costs} tendies={tendies} month='November' earnings={sdEarnings} />
        <DecemberCostsCard costs={costs} tendies={tendies} month='December' earnings={sdEarnings} /> */}
        <CostsCard costs={costs} tendies={tendies} month='September' earnings={sdEarnings} />
        <CostsCard costs={costs} tendies={tendies} month='October' earnings={sdEarnings} />
        <CostsCard costs={costs} tendies={tendies} month='November' earnings={sdEarnings} />
        <CostsCard costs={costs} tendies={tendies} month='December' earnings={sdEarnings} />
      </div>
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

// function SeptemberCostsCard(props) {
//   const { costs, tendies, month, earnings } = props;
//   const tSepStart = tendies;
//   const tSepPotential = tSepStart + earnings[0];
//   const tSepCost = costs.september;
//   const tSepRemaining = tSepPotential - tSepCost;
  
//   const tSepResult = () => {
//     if (tSepRemaining > 0) {
//       return <span className="fw-thicc">will</span>;
//     }
//     else {
//       return (
//         <span>
//           will <span className="fw-thicc">not</span>
//         </span>
//       );
//     }
//   }

//   return (
//     <Card className='costs-card d-flex flex-grow-2'>
//       <h3 className='fw-bold'>{month}</h3>

//       <h4>{tSepStart} + {earnings[0]} = {tSepPotential} - {tSepCost} = {tSepRemaining} :: {tSepResult()}</h4>

//       <div className='border border-secondary border-2'>
//         <div className='card-fw'>
//           you will have a total of <span className="fw-thicc">{tSepStart}</span> tendies at the start of september
//         </div>

//         <div className='card-fw'>
//           you have a max potential of <span className="fw-thicc">{tSepPotential}</span> tendies by the end of the month
//         </div>

//         <div className='card-fw'>
//           you will need a total of <span className="fw-thicc">{tSepCost}</span> tendies to buy everything you want in september
//         </div>

//         <div className='card-fw'>
//           you will have a total of <span className="fw-thicc">{tSepRemaining}</span> tendies left over at the end of the month
//         </div>

//         <div className='card-fw'>
//           you {tSepResult()} be able to buy everything you want in september;
//         </div>
//       </div>
//     </Card>      
//   );
// }

// function OctoberCostsCard(props) {
//   const { costs, tendies, month, earnings } = props;
//   const tOctStart = tendies - costs.september + earnings[0];
//   const tOctPotential =  tOctStart + earnings[1];
//   const tOctCost = costs.october;
//   const tOctRemaining = tOctStart + earnings[1] - tOctCost;

//   const tOctResult = () => {
//     if (tOctRemaining > 0) {
//       return <span className="fw-thicc">will</span>;
//     }
//     else { 
//       return (
//         <span>
//           will <span className="fw-thicc">not</span>
//         </span>
//       );
//     }
//   }

//   return (
//     <Card className='costs-card d-flex flex-grow-2'>
//       <h3 className='fw-bold'>{month}</h3>

//       <h4>{tOctStart} + {earnings[1]} = {tOctPotential} - {tOctCost} = {tOctRemaining} :: {tOctResult()}</h4>

//       <div className='border border-secondary border-2'>
//         <div className='card-fw'>
//           you will have a total of <span className="fw-thicc">{tOctStart}</span> tendies at the start of {month}
//         </div>

//         <div className='card-fw'>
//           you have a max potential of <span className="fw-thicc">{tOctPotential}</span> tendies by the end of the month
//         </div>

//         <div className='card-fw'>
//           you will need a total of <span className="fw-thicc">{tOctCost}</span> tendies to buy everything you want in {month}
//         </div>

//         <div className='card-fw'>
//           you will have a total of <span className="fw-thicc">{tOctRemaining}</span> tendies left over at the end of the month
//         </div>

//         <div className='card-fw'>
//           you {tOctResult()} be able to buy everything you want in {month};
//         </div>
//       </div>
//     </Card>      
//   );
// }

// function NovemberCostsCard(props) {
//   const { costs, tendies, month, earnings } = props;
//   const tNovStart = tendies - costs.september - costs.october + earnings[0] + earnings[1];
//   const tNovPotential = tNovStart + earnings[2];
//   const tNovCost = costs.november;
//   const tNovRemaining = tNovStart + earnings[2] - tNovCost;

//   const tNovResult = () => {
//     if (tNovRemaining > 0) {
//       return <span className="fw-thicc">will</span>;
//     }
//     else {
//       return (
//         <span>
//           will <span className="fw-thicc">not</span>
//         </span>
//       );
//     }
//   }

//   return (
//     <Card className='costs-card d-flex flex-grow-2'>
//       <h3 className='fw-bold'>{month}</h3>

//       <h4>{tNovStart} + {earnings[2]} = {tNovPotential} - {tNovCost} = {tNovRemaining} :: {tNovResult()}</h4>

//       <div className='border border-secondary border-2'>
//         <div className='card-fw'>
//           you will have a total of <span className="fw-thicc">{tNovStart}</span> tendies at the start of {month}
//         </div>

//         <div className='card-fw'>
//           you have a max potential of <span className="fw-thicc">{tNovPotential}</span> tendies by the end of the month
//         </div>

//         <div className='card-fw'>
//           you will need a total of <span className="fw-thicc">{tNovCost}</span> tendies to buy everything you want in {month}
//         </div>

//         <div className='card-fw'>
//           you will have a total of <span className="fw-thicc">{tNovRemaining}</span> tendies left over at the end of the month
//         </div>

//         <div className='card-fw'>
//           you {tNovResult()} be able to buy everything you want in {month};
//         </div>
//       </div>
//     </Card>
//   );
// }

// function DecemberCostsCard(props) {
//   const { costs, tendies, month, earnings } = props;
//   const tDecStart = tendies - costs.september - costs.october - costs.november + earnings[0] + earnings[1] + earnings[2];
//   const tDecPotential = tDecStart + earnings[3];
//   const tDecCost = costs.december;
//   const tDecRemaining = tDecStart + earnings[3] - tDecCost;

//   const tDecResult = () => {
//     if (tDecRemaining > 0) {
//       return <span className="fw-thicc">will</span>;
//     }
//     else {
//       return (
//         <span>
//           will <span className="fw-thicc">not</span>
//         </span>
//       );
//     }
//   }

//   return (
//     <Card className='costs-card d-flex flex-grow-2'>
//       <h3 className='fw-bold'>{month}</h3>

//       <h4>{tDecStart} + {earnings[3]} = {tDecPotential} - {tDecCost} = {tDecRemaining} :: {tDecResult()}</h4>

//       <div className='border border-secondary border-2'>
//         <div className='card-fw'>
//           you will have a total of <span className="fw-thicc">{tDecStart}</span> tendies at the start of {month}
//         </div>

//         <div className='card-fw'>
//           you have a max potential of <span className="fw-thicc">{tDecPotential}</span> tendies by the end of the month
//         </div>

//         <div className='card-fw'>
//           you will need a total of <span className="fw-thicc">{tDecCost}</span> tendies to buy everything you want in {month}
//         </div>

//         <div className='card-fw'>
//           you will have a total of <span className="fw-thicc">{tDecRemaining}</span> tendies left over at the end of the month
//         </div>

//         <div className='card-fw'>
//           you {tDecResult()} be able to buy everything you want in {month};
//         </div>
//       </div>
//     </Card>
//   );
// }

function CostsCard(props) {
  const { costs, tendies, month, earnings } = props;
  
  const tStart = (month) => {
    if (month === 'September') {
      return tendies;
    }
    else if (month === 'October') {
      return tendies - costs.september + earnings[0];
    }
    else if (month === 'November') {
      return tendies - costs.september - costs.october + earnings[0] + earnings[1];
    }
    else if (month === 'December') {
      return tendies - costs.september - costs.october - costs.november + earnings[0] + earnings[1] + earnings[2];
    }
  }

  const tPotential = (month) => {
    if (month === 'September') {
      return tStart(month) + earnings[0];
    }
    else if (month === 'October') {
      return tStart(month) + earnings[1];
    }
    else if (month === 'November') {
      return tStart(month) + earnings[2];
    }
    else if (month === 'December') {
      return tStart(month) + earnings[3];
    }
  }

  const tCost = costs[month.toLowerCase()];
  const tRemaining = tPotential(month) - tCost;

  // const tCost = (month) => {
  //   if (month === 'September') {
  //     return costs.september;
  //   }
  //   else if (month === 'October') {
  //     return costs.october;
  //   }
  //   else if (month === 'November') {
  //     return costs.november;
  //   }
  //   else if (month === 'December') {
  //     return costs[month.toLowerCase()];
  //   }
  // }

  // const tRemaining = (month) => {
  //   if (month === 'September') {
  //     return tPotential(month) - tCost(month);
  //   }
  //   else if (month === 'October') {
  //     return tPotential(month) - tCost(month);
  //   }
  //   else if (month === 'November') {
  //     return tPotential(month) - tCost(month);

  //   }
  //   else if (month === 'December') {
  //     return tPotential(month) - tCost(month);
  //   }
  // }

  const tResult = (month) => {
    if (tRemaining > 0) {
      return `will`;
    }
    else {
      return `will not`
    }
  }

  // if (month === 'September') console.log('-------------------------');
  // // console.log("tPotential(month):", tPotential(month));
  // console.log("tCost[month.toLowerCase()]:",month , tCost);
  // // console.log("tRemaining:", tRemaining);

  return (
    <Card className='costs-card d-flex flex-item'>
      <h3 className='fw-bold'>{month}</h3>

      {/* <div className='math-block rounded'>{tStart(month)} + {earnings[0]} = {tPotential(month)} - {tCost} = {tRemaining} :: {tRemaining > 0 ? 'success' : 'failure'}</div> */}

      <div className='math-block d-flex justify-content-center flex-wrap gap-1 rounded text-center'>
        <div>{ `(${tStart(month)} + ${earnings[0]}) - ${tCost}` }</div>
        <div>{ ` = ${tRemaining} :: ${tRemaining > 0 ? 'success' : 'failure'}` }</div>
      </div>

      {/* {`(${tStart(month)} + ${earnings[0]}) - ${tRemaining > 0 ? 'success' : 'failure'}`} */}

      {/* <div className='border border-secondary border-2'>
        <div className='card-fw'>you will have a total of <span className="fw-thicc">{tStart(month)}</span> tendies at the start of {month}
        </div>

        <div className='card-fw'>
          you have a max potential of <span className="fw-thicc">{tPotential(month)}</span> tendies by the end of the month
        </div>

        <div className='card-fw'>
          you will need a total of <span className="fw-thicc">{tCost}</span> tendies to buy everything you want in {month}
        </div>

        <div className='card-fw'>
          you will have a total of <span className="fw-thicc">{tRemaining}</span> tendies left over at the end of the month
        </div>

        <div className='card-fw'>
          you {tResult(month)} be able to buy everything you want in {month};
        </div>
      </div> */}

      {/* <div className='border border-secondary border-2'>
        start with <span className="fw-thicc">{tStart(month)}</span> tendies
        earn up to <span className="fw-thicc">{tPotential(month)}</span> tendies
        spend <span className="fw-thicc">{tCost}</span> tendies
        have <span className="fw-thicc">{tRemaining}</span> tendies left over
        you {tResult(month)} be able to buy everything you want
      </div> */}

      <ul className=''>
        <li>Start with: <span className="fw-thicc">{tStart(month)}</span> tendies</li>
        <li>after earnings: <span className="fw-thicc">{tPotential(month)}</span> tendies</li>
        <li>Spend: <span className="fw-thicc">{tCost}</span> tendies</li>
        <li>Have:  <span className="fw-thicc">{tRemaining}</span> tendies left over</li>
        <li>You <span className="fw-thicc">{tResult(month)}</span> be able to buy everything you want</li>
      </ul>
    </Card>
  );
}

export default Arcana;

