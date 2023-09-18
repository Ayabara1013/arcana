import { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Form, Alert } from 'react-bootstrap';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.js';
// import { DetailsPanel, GalleryAlert, GalleryControlsHint, GalleryItem, SortingBar } from './components/tracker';

import { DetailsPanel, GalleryAlert, GalleryControlsHint, GalleryItem, SortingBar } from './components/tracker';

import tradingPostData from '../../../assets/data/tradingPostScraperResults.json';

import '../../../styles/App.scss';
import '../../../styles/TradingPostTracker.scss';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse);


export default function TradingPostTracker(props) {
  const { user, setUser, toggleTrackedItem } = props; 

  const [activeReward, setActiveReward] = useState(tradingPostData[2023]['august']['Spirit of Competition'])
  const [viewDetails, setViewDetails] = useState(true);
  const [viewTrackedCollected, setViewTrackedCollected] = useState(false);

  // useEffect(() => {
  //   console.log(viewDetails);
  // }, [viewDetails]);

  return (    
    <div className='trading-post-tracker flex-contain p-2'>

      <div className='sorting-row'>
        <SortingBar
          viewDetails={viewDetails}
          setViewDetails={setViewDetails}
          viewTrackedCollected={viewTrackedCollected}
          setViewTrackedCollected={setViewTrackedCollected}
        />
      </div>

      <div className='tool-row flex-contain flex-row gap-2'>
        <div className={`flex-contain ${viewDetails ? 'w-50' : 'w-75'}`}>
          <GalleryControlsHint />
          <RewardsGallery
            tradingPostData={tradingPostData}
            setActiveReward={setActiveReward}
            user={user}
            setUser={setUser}
            viewDetails={viewDetails}
            viewTrackedCollected={viewTrackedCollected}
          />
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
  const { tradingPostData, setActiveReward, className, user, setUser, toggleTrackedItem, viewDetails, viewTrackedCollected } = props;

  let gallery = [];
  let filterGallery = [];

  function generateGallery(filter) {
    // const gallery = [];

    // iterate through the years
    for (const year in tradingPostData) {
      // push the year divider
      gallery.push(
        <div className='w-100 border-bottom border-2 border-primary'>
          <h2 className='fw-bold'>{year}</h2>
        </div>
      )

      // iterate through the months
      for (const month in tradingPostData[year]) {
        // push the month divider
        gallery.push(
          <div className='w-100'>
            <div className='w-50 border-bottom border-2 border-primary'>
              <h4 className='fw-bold'>{capitalizeFirstLetter(month)}</h4>
            </div>
          </div>
        )

        // iterate through the items
        for (const item in tradingPostData[year][month]) {
          // console.log(item);
          const currentItem = tradingPostData[year][month][item];
          // console.log(currentItem);
          // if filter exists, && if current item.{filter} === true // this is for tracking // this could be evolved later to work with broader filtering

          // if (filter && localStorage.getItem('trackedItems') && JSON.parse(localStorage.getItem('trackedItems'))[item] === true) {
          //   filterGallery.push(
          //     <GalleryItem
          //       className={`filter-gallery`}
          //       currentItem={currentItem}
          //       year={year} month={month} item={item}
          //       setActiveReward={setActiveReward}
          //       user={user}
          //       setUser={setUser}
          //       toggleTrackedItem={toggleTrackedItem}

          //       /**
          //        * I may want to change current item to item and item to itemName, but thats for later
          //        * I could make it item={currentItem}, itemName={item} or something like that?
          //        * year=* month=* itemKey=* could also work
          //        */
          //     />
          //   )
          // }


          // removed the collected filtering for now : && user.collectedItems[item] === false
          if (filter && user.trackedItems[item] === true && user.collectedItems[item] === viewTrackedCollected) {

            // check to see if the item is not in the filter gallery already
            // if (filterGallery.includes(currentItem.item)) {
            //   console.log(`Item ${currentItem.item} is already in the filter gallery`);
            // }

            const existingItem = filterGallery.find((item) => item.props.item === currentItem.name);

            if (existingItem) {
              console.log(`${existingItem.props.itemName} already exists in the filtered gallery`);
            }
            else {
              filterGallery.push(
                <GalleryItem
                  className={`filter-gallery`}
                  currentItem={currentItem}
                  itemName={currentItem.name}
                  year={year} month={month} item={item}
                  itemKey={`${year}-${month}-${item}`}
                  setActiveReward={setActiveReward}
                  user={user}
                  setUser={setUser}
                  toggleTrackedItem={toggleTrackedItem}
                  viewDetails={viewDetails}
  
                  /**
                   * I may want to change current item to item and item to itemName, but thats for later
                   * I could make it item={currentItem}, itemName={item} or something like that?
                   * year=* month=* itemKey=* could also work
                   */
                />
              )
            }
          }

          // now push the item to the main gallery
          gallery.push(
            <GalleryItem
              currentItem={currentItem}
              itemName={currentItem.name}
              year={year} month={month} item={item}
              itemKey={`${year}-${month}-${item}`}
              setActiveReward={setActiveReward}
              user={user}
              setUser={setUser}
              toggleTrackedItem={toggleTrackedItem}
              viewDetails={viewDetails}
            />
          )
        }
      }
    }

    return (filter ? filterGallery : gallery);
  }

  // add something here to also put any tracked items in a separate div?
  gallery = generateGallery();
  filterGallery = generateGallery('tracked');

  const FilterElement = () => {
    const Heading = () => {
      return (
        <div className='w-100 border-bottom border-2 border-primary'>
          <h2 className='fw-bold'>Tracked</h2>
        </div>
      )
    }
    
    return (
      <>
        <Heading />

        {filterGallery.length > 0 ?
          filterGallery :
          <GalleryAlert>
            Track your first item to see it here!
          </GalleryAlert>
        }
      </>
    )
  }

  return (
    <div className='gallery gap-2' data-toggle='collapse' >
      {/* {filterGallery.length > 0 ? <FilterElement /> : ""} */}

      <FilterElement />

      {gallery}
    </div>
  )
}

