
import React, { useState } from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { tradingPostItems } from '../../tradingPostItems';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import '../../../styles/TradingPostItemViewer.scss'
import { getItem } from 'localforage';
import { get } from 'lodash';

library.add(fas, faChevronDown)

const aug2023Items = tradingPostItems[2023]['august'];

export default function TradingPostItemViewer(props) {
  const [imgSrc, setImgSrc] = useState('https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/DWXD8E1O4TOM1690561751882.png');

  const [open, setOpen] = useState(true);
  const openClose = open ? 'open' : 'closed';

  // function galleryClickHandler(item) {
  //   console.log(item);
  //   setImgSrc(item.image)
  //   console.log(imgSrc);
  // }

  // function getGalleryButtons(items) {
  //   return Object.keys(items).map((itemName) => {
  //     const item = items[itemName];
  //     return (
  //       <button className='btn btn-primary p-0 rounded' onClick={galleryClickHandler(item)}>
  //         {/* {item.name} */}
  //         <img src={items[itemName].image} alt="" className='w-100 h-100 rounded' />
  //       </button>
  //     )
  //   });
  // }

  const itemButtons = Object.keys(aug2023Items).map((itemName) => {
    const item = aug2023Items[itemName];
    return (
      <button className='btn btn-primary p-0 rounded' onClick={() => {
        console.log(item);
        setImgSrc(item.image)
        console.log(imgSrc);
      }}>
        {/* {item.name} */}
        <img src={aug2023Items[itemName].image} alt="" className='w-100 h-100 rounded' />
      </button>
    )
  })

  return (
    <Container className={`${openClose} trading-post-item-viewer m-auto mb-4 rounded`}>
      <div className={`${openClose} viewer-title ps-2`}>
        image viewer!
      </div>

      <Button className={`open-close-btn ${openClose}`} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon id='open-close-icon' icon="fa-solid fa-chevron-down" />
        {/* {open ? 'Close' : 'Open'} */}
      </Button>
      
      <Row className={`viewer-row ${openClose} m-auto h-100`}>
        <Col className={`${openClose} selector-bar gap-1 p-0 rounded`}>
            {itemButtons}
        </Col>
  
        <Col md={'auto'} className={`${openClose} item-image-container d-flex align-items-center justify-content-center p-0`}>
          <img src={imgSrc} alt=""  className='max-w-100 h-100 rounded' />
        </Col>
      </Row>
    </Container>
  )
}


function parseImgSrc(year, month, name) {
  const imgSrc = tradingPostItems[year][month][name].image;
}