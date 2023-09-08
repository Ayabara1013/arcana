import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse);


export function GalleryItem(props) {
  const { currentItem, year, month, item, setActiveReward } = props;
  const [isTracked, setIsTracked] = useState(() => {
    // Retrieve the current state of tracked items from localStorage
    const trackedItems = JSON.parse(localStorage.getItem('trackedItems')) || {};

    // Return the value of the "item" property, or false if it doesn't exist
    return trackedItems[item] || false;
  });

  const [isCollected, setIsCollected] = useState(false);

  const handleClick = (event) => {
    if (event.shiftKey) {
      console.log(`you just toggled tracking on ${item}`)
      setIsTracked(!isTracked)
      // Retrieve the current state of tracked items from localStorage
      const trackedItems = JSON.parse(localStorage.getItem('trackedItems')) || {};

      trackedItems[item] = !trackedItems[item]

      // Save the updated state back to localStorage
      localStorage.setItem('trackedItems', JSON.stringify(trackedItems));
    }

    if (event.ctrlKey) {
      setIsCollected(!isCollected)
    }

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
        onClick={() => {
          setIsTracked(!isTracked)
          // Retrieve the current state of tracked items from localStorage
          const trackedItems = JSON.parse(localStorage.getItem('trackedItems')) || {};

          trackedItems[item] = !trackedItems[item]

          // Save the updated state back to localStorage
          localStorage.setItem('trackedItems', JSON.stringify(trackedItems));
        }}
      />

      <div className='gallery-item__price'>{`${currentItem.price ?? '--- '}`}</div>
    </div>
  )
}

export function SortingBar(props) {
  const { viewDetails, setViewDetails } = props;
  return (
    <div className='sorting-bar d-flex justify-content-between'>
      <div>sorting things</div>

      <div className='details__controls'>
        <Form.Check inline type="switch"
          // label="view item details"
          label="smaller detail panel"
          id="view-item-details-switch"
          onClick={() => setViewDetails(!viewDetails)} />
      </div>
    </div>
  )
}

export function DetailsPanel(props) {
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

export const GalleryControlsHint = (props) => {
  return(
    <div className='layer-5 d-flex flex-column p-1 rounded mb-2'>
      <div className='d-flex flex-row justify-content-between'>
        <div>
          <span className='fw-900'>Click</span> to select,
          hold&nbsp;<span className='fw-900'>SHIFT</span> to mark as tracked,&nbsp;
          <span className='fw-900'>CRTL</span> to mark as collected!
        </div>
        <div style={{ fontSize: '50%' }}>(or just click the icons)</div>
      </div>
      
      <div className='tracking-alert-text'>if there are issues with the tracked items not showing correctly, please just reload the page, im working on a fix!</div>
    </div>
  )
}