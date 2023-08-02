import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './styles/classes.scss';

// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// components
import NavigationBar from './components/utils/NavigationBar';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';

import SettingsScreen from './components/screens/settings/SettingsScreen';


function App() {

  return (
    <div className='App'>
      <Router>
        <NavigationBar />

        <div className='app-wrapper'>
        <Routes>
            <Route path="/" element={<SettingsScreen />} />
            <Route path="/character" element={<SettingsScreen />} />
            <Route path="/games" element={<SettingsScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="/about" element={<SettingsScreen />} />
            <Route path="/contact" element={<SettingsScreen />} />
            <Route path="*" element={<SettingsScreen />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <span>home screen</span>
    </div>
  )
}

function NotFound(props) {

}



export default App;


