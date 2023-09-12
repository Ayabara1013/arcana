import { Button, Col, Container, Row, ButtonGroup } from 'react-bootstrap';

import usersTest from '../../../assets/data/usersTest.json';
import { retrieveUsers, updateUser } from '../../../assets/functions/modifyUsers';

import '../../../styles/TestPage.scss';
import { useState } from 'react';
import { useEffect } from 'react';

import { firestore } from '../../../firebase';

import { defaultUser } from '../../../assets/data/createUserData.js';
import { GalleryItem } from '../trading post/components/tracker/TradingPostTrackerComponents';
import tradingPostData from '../../../assets/data/tradingPostScraperResults.json';

// Get a reference to the Firestore collection
const usersRef = firestore.collection('users');

export default function TestPage(props) {
  const { app, user, setUser, updateTendies, trackedItems, toggleTrackedItem } = props;

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
// Assuming you have imported your JSON data as TradingPostData
  const augustData = tradingPostData["2023"]["august"];
  const item1 = Object.values(augustData)[0]; // Accessing the first property within "august"
  const itemKey1 = Object.keys(augustData)[0];
  const image1 = item1.image;
  

  console.log(itemKey1);



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

          <div className="d-flex m-auto gap-2">
            <Button variant="primary" onClick={() => console.log(user)}>
              display user
            </Button>
            
            <Button variant="primary" onClick={() => toggleTrackedItem('sampleItem')}>
              toggle item 1
            </Button>
          </div>

          <div className='image-container d-flex flex-column'>
            <img src={image1} alt="" className='test-image' />
            <ButtonGroup>
              <Button variant="primary" onClick={() => {
                if (!trackedItems[itemKey1]) {
                  console.log(`${itemKey1}`)
                }
                else {
                  console.log(trackedItems)
                }
              }}>
                track
              </Button>
              <Button variant="primary" onClick={() => {

              }}>
                collect
              </Button>
            </ButtonGroup>
          </div> 
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