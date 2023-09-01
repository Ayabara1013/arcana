import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';

import tradingPostData from '../../../assets/data/tradingPostScraperResults.json';

import '../../../styles/App.scss';
import '../../../styles/TradingPostTracker.scss';


// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse } from '@fortawesome/free-solid-svg-icons';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.js';

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
          <div className='layer-5 d-flex p-1 rounded mb-2 justify-content-between'>
            <div>
              <span className='fw-900'>Click</span> to select,
              hold&nbsp;<span className='fw-900'>SHIFT</span> to mark as tracked,&nbsp;
              <span className='fw-900'>CRTL</span> to mark as collected!
            </div>
            <div style={{fontSize: '50%'}}>(or just click the icons)</div>
          </div>

          {/* <div className={`gallery gap-2`}>
          </div> */}

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
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  let gallery = [];

  for (const year in tradingPostData) {
    gallery.push(
      <div className='w-100 border-bottom border-2 border-primary' {...getToggleProps()}>
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


function GalleryItem(props) {
  const { currentItem, year, month, item, setActiveReward } = props;
  const [isTracked, setIsTracked] = useState(false);
  const [isCollected, setIsCollected] = useState(false);

  const handleClick = (event) => {
    if (event.shiftKey) setIsTracked(!isTracked);
    if (event.ctrlKey) setIsCollected(!isCollected);

    setActiveReward(currentItem);
  }
  
  return (
    <div key={`${year}-${month}-${item}`} className='gallery-item' >
      <a onClick={(event) => handleClick(event)}
        className='position-relative'>
        <img src={currentItem.image} alt="" />
      </a>

      <FontAwesomeIcon
        icon={`fa-solid fa-circle-check`}
        className={`reward-icon-button collected-icon ${isCollected ? 'collected' : 'not-collected'}`}
        onClick={() => setIsCollected(!isCollected)}
      />

      <FontAwesomeIcon
        icon={`fa-solid fa-eye`}
        className={`reward-icon-button tracked-icon ${isTracked ? 'tracked' : 'not-tracked'}`}
        onClick={() => setIsTracked(!isTracked)}
      />

      <div className='gallery-item__price'>{`${currentItem.price ?? '--- '}`}</div>
    </div>
  )
}

function SortingBar(props) {
  const { viewDetails, setViewDetails } = props;
  return (
    <div className='sorting-bar d-flex justify-content-between'>
      <div>sorting things</div>

      <div className='details__controls'>
        <Form.Check inline type="switch" label="view item details" id="view-item-details-switch" onClick={() => setViewDetails(!viewDetails)}/>
      </div>
    </div>
  )
}


function DetailsPanel(props) {
  const { activeReward } = props;
  return (
    <div className={`details__panel`}>
      <img src={activeReward.image} alt="" className='details__image mb-2' />
      
      <div className='details__data flex-grow-1'>
        <div className='data-text -name d-flex justify-content-between'>
          <div>{activeReward.name}</div>
          <div className='-price'>{activeReward.price}</div>
        </div>

        <div className='data-text -tags'>
          <span className="fw-800">Tags:</span> {activeReward.tags}
        </div>
        {/* <div className='data-text -price'>
          <span className="fw-800">Price:</span> {activeReward.price} tenders
        </div> */}
        {/* <div className='data__name'>{activeReward.price}</div> */}
        <div>last available: **FEATURE INCOMING!**</div>
      </div>
    </div>
  )
}