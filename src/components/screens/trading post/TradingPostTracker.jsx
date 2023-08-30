import { useState } from 'react';
import { Container, Row, Col, Accordion, Form} from 'react-bootstrap';
import tradingPostData from '../../../assets/data/tradingPostScraperResults.json';
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
        <h3>child row</h3>
      </div>

      <div className='tool-row flex-contain flex-row gap-2'>
        <div className='gallery w-50 gap-2'>
          {/* <TestGallery /> */}
          <RewardsGallery tradingPostData={tradingPostData} setActiveReward={setActiveReward} />
        </div>

        <div className='details w-50 d-flex flex-column align-items-stretch'>
          <div className='details__controls d-flex flex-row-reverse'>
            <Form.Check inline type="switch" label="view item details" id="view-item-details-switch" onClick={() => setViewDetails(!viewDetails)}/>
          </div>

          <div className={`details__panel ${viewDetails ? '' : 'd-none'}`}>
            <img src={activeReward.image} alt="" className='details__image mb-2' />
            
            <div className='details__data flex-grow-1'>
              <div className='data-text -name'>
                {activeReward.name}
              </div>
              <div className='data-text -tags'>
                <span className="fw-800">Tags:</span> {activeReward.tags}
              </div>
              <div className='data-text -price'>
                <span className="fw-800">Price:</span> {activeReward.price} tenders
              </div>
              {/* <div className='data__name'>{activeReward.price}</div> */}
              <div>last available: **FEATURE INCOMING!**</div>
            </div>
          </div>
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
        {year}
      </div>
    )

    for (const month in tradingPostData[year]) {
      gallery.push(
        <div className='w-100'>
          <div className='w-50 border-bottom border-2 border-primary'>
            {month}
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
    <>
      {gallery}
    </>
  )
}


function GalleryItem(props) {
  const { currentItem, year, month, item, setActiveReward } = props;
  const [isTracked, setIsTracked] = useState(false);
  const [isCollected, setIsCollected] = useState(false);

  const checkItemSatus = () => {
    if (currentItem.status === 'collected') {
      return 'fa-circle-check';
    }
    else if (currentItem.status === 'tracked' || isTracked == true) {
      return 'fa-eye';
    }
    else return 'fa-code-commit';
  }

  const handleClick = () => {
    setActiveReward(currentItem);
    setIsTracked(!isTracked);
  }
  
  return (
    <div key={`${year}-${month}-${item}`} className='gallery-item' >
      <a onClick={() => setIsCollected(!isCollected)} className='position-relative'>
        <img src={currentItem.image} alt="" />
      </a>

      <FontAwesomeIcon
        icon={`fa-solid fa-circle-check`}
        className={`reward-icon-button collected-icon ${isCollected ? 'collected' : 'not-collected'}`}
      />
      <FontAwesomeIcon
        icon={`fa-solid fa-circle-check`}
        className={`reward-icon-button tracked-icon ${isTracked ? 'tracked' : 'not-tracked'}`}
      />
    </div>
  )
}


// asd