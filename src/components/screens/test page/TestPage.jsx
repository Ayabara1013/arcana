import { Button, Col, Container, Row, ButtonGroup } from 'react-bootstrap';

import usersTest from '../../../assets/data/usersTest.json';
import { retrieveUsers, updateUser } from '../../../assets/functions/modifyUsers';

import '../../../styles/TestPage.scss';
import { useState } from 'react';
import { useEffect } from 'react';

import { firestore } from '../../../firebase';

import { defaultUser } from '../../../assets/data/createUserData.js';
import { GalleryItem } from '../trading post/components/tracker';
import tradingPostData from '../../../assets/data/tradingPostScraperResults.json';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse);

// Get a reference to the Firestore collection
const usersRef = firestore.collection('users');

export default function TestPage(props) {
  const { app, user, setUser, updateTendies, trackedItems, toggleTrackedItem, toggleCollectedItem } = props;

  useEffect(() => {
    if (user.tendies === 0) {
      console.log(`tendies are ${user.tendies}...setting...`);
      updateTendies(5);
    }
    else {
      console.log(`tendies are ${user.tendies}...setting...`);
      updateTendies(0);
    }
  }, [])

  const [showDialog, setShowDialog] = useState(false);
  const users = usersTest;

  // console.log(defaultUser);

  async function printUsers() {
    // Get all documents in the collection
    usersRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
      });
  }

  async function addUser() {
    // console.log(defaultUser);
    usersRef.add(defaultUser)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  }

  const handleEditClick = () => {
    setShowDialog(true);
  }

  const handleDialogClose = () => {
    setShowDialog(false);
  }

  function ShowUser(props) {
    const { userData } = props;
    const [user, setUser] = useState(userData.rewards.tracked);
    
    let trackedItems = [];
    let allItems = [];
  
    for (const item in user) {
      const itemCardProps = { item, user, setUser };

      if (user[item]) {
        trackedItems.push(
          <ItemCard key={item} {...itemCardProps} />
        )
      }

      allItems.push(
        <ItemCard key={item} {...itemCardProps} />
      )
    }
  
    return (
      <div className='user-card'>
        <div>{user.username}</div>
  
        <div className='d-flex flex-column tracked border border-2 border-dark'>
          <div>tracked</div>
          <div className='d-flex flex-wrap gap-2'>
            {trackedItems}
          </div>
        </div>
  
        <div className='d-flex flex-column all border border-2 border-dark'>
          <div>all</div>
          <div className='d-flex flex-wrap gap-2'>
            {allItems}
          </div>
        </div>
      </div>
    );
  }


// Assuming you have imported your JSON data as TradingPostData
  const month1 = tradingPostData["2023"]["august"];
  const item1 = Object.values(month1)[0]; // Accessing the first property within "august"
  const itemKey1 = 'Alabaster Stormtalon'// Object.keys(month1)[0];
  const image1 = item1.image;

  // console.log(itemKey1);

  // console.log(user.trackedItems.sampleItem)



  // unit test 2

  const month2 = tradingPostData['2023']['august'];
  const item2 = month2['Alabaster Stormtalon'];
  const item2name = item2.name;
  // console.log(month2)
  console.log(item2['image']);
  // console.log(item2.name);
  // console.log(item2name);


  function ItemDisplay(props) {
    const { item, src } = props;
    return (
      <div className='image-container'>
        <img src={src} alt="" className='test-image' />
        
        <div className='image-container__buttons d-flex'>
          <Button
            variant={user.rewards[item.name].tracked ? 'primary' : 'danger'}
            className={`w-50 ${user.rewards[item.name].tracked ? '' : ''}`}
            onClick={() => {
              console.log("toggling tracked");
              console.log(item.name);
              console.log(item);
              console.log(user.rewards[item.name].tracked)

              setUser((prevUser) => {
                const newValue = !prevUser.rewards[item.name].tracked;
                return {
                  ...prevUser, 
                  rewards: {
                    ...prevUser.rewards,
                    [item.name]: {
                      ...prevUser.rewards[item.name],
                      tracked: newValue,
                    }
                  }
                }
              })
            }}
          >
            {user.rewards[item.name].tracked ? 'tracked' : 'not tracked'}
          </Button>

          <Button
            variant={user.rewards[item.name].collected ? 'primary' : 'danger'}
            className={`w-50 ${user.rewards[item.name].collected ? '' : ''}`}
            onClick={() => {
              console.log("toggling collected");
              console.log(item.name);
              console.log(item);
              console.log(user.rewards[item.name].collected)

              setUser((prevUser) => {
                const newValue = !prevUser.rewards[item.name].collected;
                return {
                  ...prevUser, 
                  rewards: {
                    ...prevUser.rewards,
                    [item.name]: {
                      ...prevUser.rewards[item.name],
                      collected: newValue,
                    }
                  }
                }
              })
            }}
          >
            {user.rewards[item.name].collected ? 'collected' : 'not collected'}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Container className='p-2 border'>
      <Row>
        <Col className='d-flex gap-2'>
          <Button variant="primary" onClick={() => printUsers()}>
            print users
          </Button>

          <Button variant="primary" onClick={() => addUser()}>
            add default user
          </Button>
        </Col>
      </Row>

      <Row className='m-auto p-2 border'>
        <Col className='p-2 border'>
          <ShowUser userData={Object.values(users)[0]} />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="d-flex m-2 gap-2">
            <div className={`${user.trackedItems.sampleItem ? 'bg-info' : 'bg-danger'} p-2 rounded`}>item 1</div>
            <div className={`${user.trackedItems.sampleItem ? 'bg-info' : 'bg-danger'} p-2 rounded`}>item 1</div>
          </div>

          {/* <div className="d-flex m-auto gap-2">
            <Button variant="primary" onClick={() => console.log(user)}>
              display user
            </Button>
            
            <Button variant="primary" onClick={() => toggleTrackedItem('sampleItem')}>
              toggle item 1
            </Button>
          </div>

          <div className='image-container d-flex flex-column'>
            <div key={``} className='gallery-item' >
              <img src={image1} alt="" />
            </div>
            <ButtonGroup>
              <Button variant="primary" onClick={() => {
                // console.log(item1)
                if (!item1) {
                  console.log(`item1 not found`)
                }
                else {
                  // console.log(`found key for ${item1.name}`)
                  // console.log(`toggling tracked for ${item1.name}`)
                  // console.log(user.trackedItems[itemKey1])
                  toggleTrackedItem(itemKey1);
                  // console.log(user.trackedItems[itemKey1])
                }
              }}>
                track
              </Button>

              <Button variant="primary" onClick={() => {
                toggleCollectedItem(itemKey1);
              }}>
                collect
              </Button>
            </ButtonGroup>

            <div>
              <div className={`${user.trackedItems[itemKey1] === true ? 'bg-success text-white' : "bg-warning"}`} >
                {user.trackedItems[itemKey1] === true ? 'tracked' : "not tracked"}
              </div>
              <div className={`${user.collectedItems[itemKey1] === true ? 'bg-success text-white' : "bg-warning"}`} >
                {user.collectedItems[itemKey1] === true ? 'collected' : "not collected"}
              </div>
            </div>

          </div>  */}
        </Col>
      </Row>

      <Row>
        <Col>
          <ItemDisplay item={tradingPostData['2023']['august']['Alabaster Stormtalon']} src={item2.image} />
        </Col>
      </Row>
    </Container>
  )
}


function ItemCard(props) {
  const { item, user, setUser } = props;

  // useEffect(() => {
  //   console.log(`${item} is now ${user[item]}`);
  // }, [item]);

  function toggleItem() {
    setUser(prevUser => ({
      ...prevUser, [item]: !prevUser[item]
    }));
  }

  return (
    <button className={`btn ${user[item] ? 'btn-info' : 'btn-primary'}`}
      onClick={() => {toggleItem()}}>
      {item}
    </button>
  )
}