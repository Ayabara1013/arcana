import { useState } from 'react';
import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.js';
import { DetailsPanel, GalleryControlsHint, GalleryItem, SortingBar } from './components/tracker/TradingPostTrackerComponents';

import tradingPostData from '../../../assets/data/tradingPostScraperResults.json';

import '../../../styles/App.scss';
import '../../../styles/TradingPostTracker.scss';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse);


export default function TradingPostTracker(props) {
  const [activeReward, setActiveReward] = useState(tradingPostData[2023]['august']['Spirit of Competition'])
  const [viewDetails, setViewDetails] = useState(true);

  return (    
    <div className='trading-post-tracker flex-contain p-2'>

      <div className='sorting-row'>
        <SortingBar viewDetails={viewDetails} setViewDetails={setViewDetails} />
      </div>

      <div className='tool-row flex-contain flex-row gap-2'>
        <div className={`flex-contain ${viewDetails ? 'w-50' : 'w-75'}`}>
          <GalleryControlsHint />
          <RewardsGallery tradingPostData={tradingPostData} setActiveReward={setActiveReward} />
        </div>

        <div className={`details d-flex flex-column align-items-stretch ${viewDetails ? 'w-50' : 'w-25'}`}>
          {/* <div className='details__controls d-flex flex-row-reverse'>
            <Form.Check inline type="switch" label="view item details" id="view-item-details-switch" onClick={() => setViewDetails(!viewDetails)}/>
          </div> */}
          <DetailsPanel activeReward={activeReward} />
        </div>
      </div>
      
    </div>
  );
}

function TestGallery(props) {
  let elements = [];

  for (let i = 0; i < 100; i++) {
    elements.push(
      <div key={i}>test text {i}</div>
    );
  }

  return (
    <>
      {elements}
    </>
  )
}


function RewardsGallery(props) {
  const { tradingPostData, setActiveReward } = props;

  let gallery = [];

  for (const year in tradingPostData) {
    gallery.push(
      <div className='w-100 border-bottom border-2 border-primary'>
        <h2 className='fw-bold'>{year}</h2>
      </div>
    )

    for (const month in tradingPostData[year]) {
      gallery.push(
        <div className='w-100'>
          <div className='w-50 border-bottom border-2 border-primary'>
            <h4 className='fw-bold'>{capitalizeFirstLetter(month)}</h4>
          </div>
        </div>
      )

      for (const item in tradingPostData[year][month]) {
        const currentItem = tradingPostData[year][month][item];
        gallery.push(
          <GalleryItem currentItem={currentItem} year={year} month={month} item={item} setActiveReward={setActiveReward} />
        )
      }
    }
  }

  return (
    <div className='gallery gap-2' data-toggle='collapse' >
      {gallery}
    </div>
  )
}

