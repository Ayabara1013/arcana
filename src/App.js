import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import './styles/App.scss';
import './styles/classes.scss';

import tradingPostData from './assets/data/tradingPostScraperResults.json';


// react router
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// components
import NavigationBar from './components/utils/NavigationBar';
import TradingPost from './components/screens/TradingPost';
import Home from './components/screens/Home';
import Contact from './components/Contact';
import CharacterGenerator from './components/screens/character generator/CharacterGenerator';
import Testes from './components/screens/testes/Testes.jsx';
import TestPage from './components/screens/test page/TestPage.jsx'
import TradingPostTracker from './components/screens/trading post/TradingPostTracker';

// ----------------- FIREBASE ----------------- //
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { defaultUser } from './assets/data/createUserData';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa07YaK378Y7UiIdlS9w-AZl18fiJ0FKQ",
  authDomain: "arcana-app.firebaseapp.com",
  projectId: "arcana-app",
  storageBucket: "arcana-app.appspot.com",
  messagingSenderId: "778639434190",
  appId: "1:778639434190:web:f4522ee3b1410ed8b28b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

// ----------------- FIREBASE ----------------- //





function App() {
  // create user states
  class ClassSet {
    constructor(armour, weapons, cName, month) {
      this.armour = armour;
      this.weapons = weapons;
      this.cName = cName; // class name
      this.month = month;
    }
  }

  function printUser() {
    alert(JSON.stringify(user));
  }
  window.printUser = printUser;

  function getTradingPostItems() {
    let itemNames = [];

    for (const year in tradingPostData) {
      for (const month in tradingPostData[year]) {
        for (const item in tradingPostData[year][month]) {
          itemNames.push(item);
        }
      }
    }

    return itemNames;
  }

  const itemNames = getTradingPostItems();

  // console.log(itemNames)

  const trackedItems = {
    sampleItem: true,
    ...itemNames.reduce((obj, name) => {
      obj[name] = false;
      return obj;
    }, {})
  }

  // const trackedItems = localStorage.

  const rewardItems = {
    sampleItem: {
      tracked: true,
      collected: true,
    },
    ...itemNames.reduce((obj, name) => {
      obj[name] = {
        tracked: false,
        collected: false,
      }
      return obj;
    }, {})
  }

  // const [user, setUser] = useState({
  //   trackedItems: trackedItems,
  //   collectedItems: trackedItems,
  //   rewards: rewardItems,
  //   tendies: 0,

  //   classSets: {
  //     paladin:      new ClassSet(false, false, 'Paladin',       'September'),
  //     priest:       new ClassSet(false, false, 'Priest',        'September'),
  //     rogue:        new ClassSet(false, false, 'Rogue',         'September'),

  //     deathKnight:  new ClassSet(false, false, 'Death Knight',  'October'),
  //     demonHunter:  new ClassSet(false, false, 'Demon Hunter',  'October'),
  //     druid:        new ClassSet(false, false, 'Druid',         'October'),

  //     warlock:      new ClassSet(false, false, 'Warlock',       'November'),
  //     monk:         new ClassSet(false, false, 'Monk',          'November'),
  //     warrior:      new ClassSet(false, false, 'Warrior',       'November'),

  //     evoker:       new ClassSet(false, false, 'Evoker',        'December'),
  //     hunter:       new ClassSet(false, false, 'Hunter',        'December'),
  //     mage:         new ClassSet(false, false, 'Mage',          'December'),
  //     shaman:       new ClassSet(false, false, 'Shaman',        'December'),
  //   },

  //   updateTendies: function (num) {
  //     setUser((prevUser) => ({
  //       ...prevUser,
  //       tendies: num,
  //     }));
  //   },

  //   toggleTrackedItem: function (item) {
  //     setUser((prevUser) => {
  //       const newValue = !prevUser.trackedItems[item];
  //       return {
  //         ...prevUser,
  //         trackedItems: {
  //           ...prevUser.trackedItems,
  //           [item]: newValue,
  //         }
  //       }
  //     })

  //     localStorage.setItem('trackedItems', JSON.stringify(trackedItems));
  //   },

  //   addTrackedItem: function (item, value) {
  //     setUser((prevUser) => ({
  //       ...prevUser,
  //       trackedItems: {
  //         ...prevUser.trackedItems,
  //         [item]: value,
  //       }
  //     }))
  //   },

  //   toggleCollectedItem: function (item) {
  //     setUser((prevUser) => {
  //       const newValue = !prevUser.collectedItems[item];
  //       return {
  //         ...prevUser,
  //         collectedItems: {
  //           ...prevUser.collectedItems,
  //           [item]: newValue,
  //         }
  //       }
  //     })
  //   },

  //   // toggleReward: function (item, property) {
  //   //   console.log(property);
  //   //   setUser((prevUser) => {
  //   //     const newValue = !prevUser.rewards[item.name];
  //   //     return {
  //   //       ...prevUser, 
  //   //       rewards: {
  //   //         ...prevUser.rewards,
  //   //         [item.name]: {
  //   //           ...prevUser.rewards[item.name],
  //   //           [property]: !prevUser.rewards[item.name][property]
  //   //         }
  //   //       }
  //   //     }
  //   //   })
  //   // },
    
  //   toggleReward: function (item, property) {
  //     const itemName = item;
  //     const propertyName = property;

  //     console.log(itemName);
  //     console.log(property);

  //     const updatedUser = {
  //       ...user,
  //       rewards: {
  //         ...user.rewards,
  //         [itemName]: {
  //           ...user.rewards[itemName],
  //           [propertyName]: !user.rewards[itemName][propertyName],
  //         },
  //       },
  //     };
  //     setUser(updatedUser);
  //   }
  // });

  const [user, setUser] = useState(() => {
    const storedTrackedItems = JSON.parse(localStorage.getItem('trackedItems'));
    const storedCollectedItems = JSON.parse(localStorage.getItem('collectedItems'));
    const storedClassSets = JSON.parse(localStorage.getItem('classSets'));
  
    const trackedItems = storedTrackedItems ?? {
      sampleItem: true,
      ...itemNames.reduce((obj, name) => {
        obj[name] = false;
        return obj;
      }, {})
    }
    
    const collectedItems = storedCollectedItems ?? {
      sampleItem: true,
      ...itemNames.reduce((obj, name) => {
        obj[name] = false;
        return obj;
      }, {})
    }

    // function checkForSetItem(pClass, item) {
    //   const stored = JSON.parse(localStorage.getItem('classSets'));
    //   if (stored === null) {
    //     return false;
    //   }
    //   return stored[pClass][item] ?? false;
    // }
    
    // console.log(checkForSetItem('paladin', 'armour'));

    const classSets = storedClassSets ?? {
      paladin:      new ClassSet(false, false, 'Paladin',       'September'),
      priest:       new ClassSet(false, false, 'Priest',        'September'),
      rogue:        new ClassSet(false, false, 'Rogue',         'September'),

      deathKnight:  new ClassSet(false, false, 'Death Knight',  'October'),
      demonHunter:  new ClassSet(false, false, 'Demon Hunter',  'October'),
      druid:        new ClassSet(false, false, 'Druid',         'October'),

      warlock:      new ClassSet(false, false, 'Warlock',       'November'),
      monk:         new ClassSet(false, false, 'Monk',          'November'),
      warrior:      new ClassSet(false, false, 'Warrior',       'November'),

      evoker:       new ClassSet(false, false, 'Evoker',        'December'),
      hunter:       new ClassSet(false, false, 'Hunter',        'December'),
      mage:         new ClassSet(false, false, 'Mage',          'December'),
      shaman:       new ClassSet(false, false, 'Shaman',        'December'),
    }

    return {
      trackedItems: trackedItems,
      collectedItems: trackedItems,
      classSets: classSets,
      rewards: rewardItems,
      tendies: 0,
  
      // update how many tendies the user has
      updateTendies: function (num) {
        setUser((prevUser) => ({
          ...prevUser,
          tendies: num,
        }));
      },
  
      // function to toggle a tracked item
      toggleTrackedItem: function (item) {
        setUser((prevUser) => {
          const newValue = !prevUser.trackedItems[item];
          return {
            ...prevUser,
            trackedItems: {
              ...prevUser.trackedItems,
              [item]: newValue,
            }
          }
        })
        localStorage.setItem('trackedItems', JSON.stringify(trackedItems));
      },
  
      // function to toggle a collected item
      toggleCollectedItem: function (item) {
        setUser((prevUser) => {
          const newValue = !prevUser.collectedItems[item];
          return {
            ...prevUser,
            collectedItems: {
              ...prevUser.collectedItems,
              [item]: newValue,
            }
          }
        })
        localStorage.setItem('collectedItems', JSON.stringify(collectedItems));
      },
  
      // toggleReward: function (item, property) {
      //   const itemName = item;
      //   const propertyName = property;
  
      //   console.log(itemName);
      //   console.log(property);
  
      //   const updatedUser = {
      //     ...user,
      //     rewards: {
      //       ...user.rewards,
      //       [itemName]: {
      //         ...user.rewards[itemName],
      //         [propertyName]: !user.rewards[itemName][propertyName],
      //       },
      //     },
      //   };
      //   setUser(updatedUser);
      // }

      toggleClassSet: function (pClass, item) {
        setUser((prevUser) => {
          return {
            ...prevUser,
            classSets: {
              ...prevUser.classSets,
              [pClass]: {
                ...prevUser.classSets[pClass],
                [item]: !prevUser.classSets[pClass][item],
              }
            }
          }
        })
      },

      checkForClassSet: function (pClass, item) {
        const stored = JSON.parse(localStorage.getItem('classSets'));
        if (stored === null) {
          return false;
        }
        return stored[pClass][item] ?? false;
      }
        
        
    };
  })

  useEffect(() => {
    const storedTrackedItems = JSON.parse(localStorage.getItem('trackedItems'));
    const storedCollectedItems = JSON.parse(localStorage.getItem('collectedItems'));

    if (storedTrackedItems) {
      setUser((prevUser) => ({
        ...prevUser,
        trackedItems: storedTrackedItems,
      }));
      console.log(`retrieved stored tracked items from local storage`)
    }
    else console.log(`there were no tracked items stored in local storage`);

    if (storedCollectedItems) {
      setUser((prevUser) => ({
        ...prevUser,
        collectedItems: storedCollectedItems,
      }));
      console.log(`retrieved stored collected items from local storage`)
    }
    else console.log(`there were no collected items stored in local storage`);
  }, [])

  // useEffect(() => {
  //   console.log(user)
  // }, [user]);

  useEffect(() => {
    localStorage.setItem('trackedItems', JSON.stringify(user.trackedItems));
  }, [user.trackedItems]);

  useEffect(() => {
    localStorage.setItem('collectedItems', JSON.stringify(user.collectedItems));
  }, [user.collectedItems]);

  useEffect(() => {
    console.log(user.classSets);
    localStorage.setItem('classSets', JSON.stringify(user.classSets));
  }, [user.classSets]);



  const defaultProps = {
    firebase: {
      app: app,
      analytics: analytics,
      logEvent: logEvent,
    },
    userObject: {
      user: user,
      setUser: setUser,
      updateTendies: user.updateTendies,
      toggleTrackedItem: user.toggleTrackedItem,
    }
  }

  const defaultFirebaseProps = {
    app: app,
    analytics: analytics,
    logEvent: logEvent,
  };

  const defaultUserProps = {
    user: user,
    setUser: setUser,
    updateTendies: user.updateTendies,
    trackedItems: user.trackedItems,
    toggleTrackedItem: user.toggleTrackedItem,
    toggleCollectedItem: user.toggleCollectedItem,
  }

  // console.log(defaultProps.firebase)

  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        
        <div className="app-wrapper">
          <Routes>
            <Route
              path="/"
              element={<Home {...defaultFirebaseProps} {...defaultUserProps} />}
            />

            <Route
              path="/trading-post/class-sets"
              element={<TradingPost {...defaultFirebaseProps} {...defaultUserProps} />}
            />

            <Route
              path="/trading-post/rewards-tracker"
              element={<TradingPostTracker {...defaultFirebaseProps} {...defaultUserProps} />}
            />

            <Route
              path="/character-generator"
            />

            <Route
              path="/test"
              element={<TestPage {...defaultFirebaseProps} {...defaultUserProps} />}
            />

            <Route
              path="*"
              element={<Home {...defaultFirebaseProps} {...defaultUserProps} />}
            />
          </Routes>
        </div>
        
        {/* <Contact /> */}

      </BrowserRouter>
    </div>
  );
}


{/* <Route path="/" element={<Home />} />
            <Route path="/trading-post" element={<TradingPost />} />
            <Route path="*" element={<Home />} /> */}


export default App;
