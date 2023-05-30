import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import NavigationBar from './components/screens/utils/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';


function App() {

  return (
    <div className='App vh-100 border border-2 border-danger'>
      <Router>
        {/* <NavigationBar /> */}

        <div className='app-wrapper w-100 h-100'>
          <Routes>
            <Route path="/" element={<TranslateScreen />} />
            {/* <Route path="/character" element={<Character />} />
            <Route path="/games" element={<Games />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>

      </Router>
    </div>
  );
}

function Home(props) {
  return (
    <Container className='home-screen d-flex flex-column p-2 gap-2 h-100 layer-1 border border-1 border-danger'>
      <Row className='layer-2 m-auto p-2 h-25 rounded'>
        <Col className='p-2 h-100 layer-3'>new phrase input box</Col>
      </Row>

      <Row className='layer-2 m-auto p-2 h-75 rounded'>
        <Col className='layer -3 p-2 h-100'>recent words list</Col>
        <Col className='layer-3 p-2 h-100'>word edit tools</Col>
      </Row>
    </Container>
  )
}

function TranslateScreen(props) {
  return (
    <Container>
      <Row>
        <Col>
         <TranslateBar />
        </Col>
      </Row>

      <Row>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
    </Container>
  )
}

function TranslateBar(props) {
  return (
    <div id='translate-bar' className='translate-bar'>
    </div>
  )
}



export default App;


