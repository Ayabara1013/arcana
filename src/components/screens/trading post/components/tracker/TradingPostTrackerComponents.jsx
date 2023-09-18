import { useState, useEffect } from 'react';
import { Alert, Form } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { current } from '@reduxjs/toolkit';

library.add(faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse, faEye, faCircleCheck);

export function GalleryItem(props) {
  const { currentItem, year, month, item, setActiveReward, user, setUser, itemKey, viewDetails, flexBasis } = props;

  const [flexState, setFlexState] = useState(viewDetails ? '--items-3' : '--items-5');


  // console.log(viewDetails);

  const handleClick = (event) => {
    if (event.shiftKey) {
      console.log(`you just toggled tracking on ${item}`)
      user.toggleTrackedItem(item);
    }

    if (event.ctrlKey) {
      user.toggleCollectedItem(item);
    }

    setActiveReward(currentItem);
  }
  
  return (
    <div key={itemKey} className={`gallery-item ${user.collectedItems[currentItem.name] ? 'collected' : ''} ${viewDetails ? '--items-3' : '--items-5'}`} >
      <a onClick={(event) => handleClick(event)}
        className='position-relative'>
        <img src={currentItem.image} alt="" />
      </a>

      <FontAwesomeIcon
        icon={`fa-solid fa-eye`}
        className={`reward-icon-button tracked-icon ${user.trackedItems[currentItem.name] ? 'tracked' : 'not-tracked'}`}
        onClick={() => {
          console.log(`pressed tracked for ${currentItem.name}`);
          console.log('tracking...');
          user.toggleTrackedItem(currentItem.name);
        }}
      />

      <FontAwesomeIcon
        icon={`fa-solid fa-circle-check`}
        className={`reward-icon-button collected-icon ${user.collectedItems[currentItem.name] ? 'collected' : 'not-collected'}`}
        onClick={() => {
          console.log(`pressed collected for ${currentItem.name}`);
          console.log('collecting...');
          user.toggleCollectedItem(currentItem.name);
        }}
      />

      <div className='gallery-item__price'>{`${currentItem.price ?? '--- '}`}</div>
    </div>
  )
}

export function SortingBar(props) {
  const { viewDetails, setViewDetails, viewTrackedCollected, setViewTrackedCollected } = props;
  return (
    <div className='sorting-bar d-flex justify-content-between'>
      <div>sorting things (coming soon!)</div>

      <div className='details__controls'>
      <Form.Check inline type="switch"
          // label="view item details"
          label="include collected items in Tracked view"
          id="view-tracked-collected-switch"
          defaultChecked={viewTrackedCollected}
          onClick={() => setViewTrackedCollected(!viewTrackedCollected)} />

        <Form.Check inline type="switch"
          // label="view item details"
          label="smaller detail panel & larger grid"
          id="view-item-details-switch"
          defaultChecked={viewDetails}
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
    <>
      <div className='layer-5 d-flex flex-column p-1 rounded mb-2'>
        <div className='d-flex flex-row justify-content-between'>
          <div>
            <span className='fw-900'>Click</span> to select,
            hold&nbsp;<span className='fw-900'>SHIFT</span> to mark as tracked,&nbsp;
            <span className='fw-900'>CRTL</span> to mark as collected!
          </div>
          <div style={{ fontSize: '50%' }}>(or just click the icons)</div>
        </div>
      
        {/* <div className='tracking-alert-text'>if there are issues with the tracked items not showing correctly, please just reload the page, im working on a fix!</div> */}
      </div>

      {/* <div className="tracking-alert alert alert-danger" role="alert">
        <div className='tracking-alert__text bs-protect'>
          if there are issues with the tracked items not showing correctly, please just reload the page, im working on a fix!
        </div>
      </div> */}

      <GalleryAlert variant={'danger'} >
        if there are issues with the tracked items not showing correctly, please just reload the page, im working on a fix!
      </GalleryAlert>

      {/* <GalleryAlert>
        if there is any issue, please let me know!
      </GalleryAlert> */}
    </>
  )
}


export function GalleryAlert(props) {
  const { variant = 'info'} = props;

  return (
    <Alert variant={variant}className='w-100'>
    {props.children}
    </Alert>  
  )
}

export function GalleryAlertDismissable(props) {
  const { variant = 'info' } = props;
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <Alert variant={variant} dismissable onClose={handleCloseAlert} className='w-100'>
    {props.children}
  </Alert>  
  )
}
