import React, { useState } from "react";
import { Carousel, Col, Container, Form, Image, Row } from 'react-bootstrap';
import '../../../styles/toggles.scss';

import classSetsSeptember from '../../../assets/images/trading post/class sets/armour/class-sets-armour-september.png';
import classSetsOctober from '../../../assets/images/trading post/class sets/armour/class-sets-armour-october.png';
import classSetsNovember from '../../../assets/images/trading post/class sets/armour/class-sets-armour-november.png';
import classSetsDecember from '../../../assets/images/trading post/class sets/armour/class-sets-armour-december.png';

import paladinWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-paladin.png';
import priestWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-priest.png';
import rogueWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-rogue.png';
import deathKnightWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-death-knight.png';
import demonHunterWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-demon-hunter.png';
import druidWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-druid.png';
import monkWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-monk.png';
import warlockWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-warlock.png';
import warriorWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-warrior.png';
import evokerWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-evoker.png';
import hunterWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-hunter.png';
import mageWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-mage.png';
import shamanWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-shaman.png';

// used this to convert the avif images to png - https://pixelied.com/convert/avif-converter/avif-to-png/



function ClassSetItemImageViewer(props) {
  const [showContent, setShowContent] = useState(false);
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='class-set-viewer'>
      <HeaderRow showContent={showContent} setShowContent={setShowContent} />

      <Carousel activeIndex={index} onSelect={handleSelect} className={`${showContent ? '' : 'd-none'} w-100 p-0`}>
        {/* <CarouselItemElement src={classSetsSeptember} />
        <CarouselItemElement src={classSetsOctober} />
        <CarouselItemElement src={classSetsNovember} />
        <CarouselItemElement src={classSetsDecember} /> */}
        <Carousel.Item>
          <img
            className="set-image d-block w-100"
            src={classSetsSeptember}
            alt=''
          />
        </Carousel.Item>
      
        <Carousel.Item>
          <img
            className="set-image d-block w-100"
            src={classSetsOctober}
            alt=''
          />
        </Carousel.Item>
      
        <Carousel.Item>
          <img
            className="set-image d-block w-100"
            src={classSetsNovember}
            alt=''
          />
        </Carousel.Item>
      
        <Carousel.Item>
          <img
            className="set-image d-block w-100"
            src={classSetsDecember}
            alt=''
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

const HeaderRow = (props) => {
  const { showContent, setShowContent } = props;
  return (
    <div className='header-row d-flex flex-row p-0'>
      <h1>view sets</h1>
      {/* <Form.Check type="switch" id="toggle-switch-id" className='tgl tgl-flip' checked={showContent} onChange={() => setShowContent(!showContent)} /> */}

      {/* <div className="tg-list-item">
        <input className="tgl tgl-flip" id="cb5" type="checkbox" checked={showContent} onChange={() => setShowContent(!showContent)} />
        <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" for="cb5"></label>
      </div> */}
    </div>
  )
}


/**
 * for some reason, the index ceases to exist when I import them like this, or some other issue,which then causes the images to not load and buttons to stop working
 */
// function CarouselItemElement(props) {
//   return (
//     <Carousel.Item>
//       <img
//         className="set-image d-block w-100"
//         src={props.src}
//         alt=''
//       />
//     </Carousel.Item>
//   )
// }

export default ClassSetItemImageViewer;