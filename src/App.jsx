import React, { useState } from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import './styles/App.scss';
import './styles/classes.scss';

// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// components
import NavigationBar from './components/utils/NavigationBar';
import SettingsScreen from './components/screens/settings/SettingsScreen';
import ContactScreen from './components/screens/ContactScreen';
import Arcana from './components/screens/Arcana';
import Home from './components/screens/Home';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Footer from './components/Contact';
import Contact from './components/Contact';
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


// // Import the Account class and the accountsDB array
// const { Account, accountsDB } = require('./tools');


function App() {

  return (
    <div className='App'>
      <Router>
        <NavigationBar />

        <div className='app-wrapper'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trading-post" element={<Arcana />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <Contact />

      </Router>
    </div>
  );
}

// function DisplayAccount(props) {
//   const data = accountsDB[0]; 
//   let string = JSON.stringify(accountsDB[0], null, '  ');

//   const update = (newName) => {
//     data.user.accountName = newName;
//     // Since account1 is directly referencing the object in accountsDB,
//     // modifying it will update the original object in accountsDB
//   };

//   return (
//     <Container className='box'>
//       <Row className='box mb-2 gap-2'>

//         <Col className='box'>
//           <Row className="gap-2">
//             <Col>
//               <h4>things</h4>
//               <Button variant="primary"
//                 onClick={() => { console.log(string) }}>
//                 print as string
//               </Button>
//             </Col>

//             <Col className='box'>
//               <h4>account 1</h4>
//               <Button variant="primary"
//                 onClick={() => {
//                   console.log("display account 1");
//                 }}>
//                 display account 1
//               </Button>
              
//               <Button onClick={() => {
//                 update('John Smith');
//                 console.log(data.user);
//               }}>
//                 john smith
//               </Button>

//               <Button onClick={() => {
//                 update('Jane Smith');
//                 console.log(data.user);
//               }}>
//                 jane smith
//               </Button>
//             </Col>

//             <Col>
//               <h4>account 2</h4>
//               <Button variant="primary"
//                 onClick={() => {
//                   console.log("display account 2");
//                 }}>
//                 display account 2
//               </Button>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// function NotFound(props) {

// }



export default App;
