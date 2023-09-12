
// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse, faEye, faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { current } from '@reduxjs/toolkit';
import { Alert } from 'react-bootstrap';
import React, { PureComponent } from "react";


library.add(faCoffee, faHome, faUser, faPaperPlane, faAnglesDown, faHouse, faEye, faCircleCheck, faCircleExclamation);

export default function TrackerFeatureAlert(props) {
  const [showAlert, setShowAlert] = React.useState(false);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShowAlert = () => setShowAlert(true);

  return (
    // <div class="alert__new-feature alert alert-info alert-dismissible fade show" role="alert">
    //   {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    //   <span className="fw-bold">{`<<fa-exclamation mark here>>`}</span>{props.children}
    //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    // </div>

    
    // <div class="alert__new-feature alert alert-info" role="alert">
    //   <span className="fw-bold">{`<<fa-exclamation mark here>>`}&nbsp;</span>{props.children}
    // </div>


    // <div class="alert__new-feature alert alert-info" role="alert">
    //   <span className="fw-bold">
    //     <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" />
    //     &nbsp;</span>{props.children}
    // </div>
    
    
  
    <Alert className={`alert__new-feature w-auto`} variant="info" dismissible onClose={handleCloseAlert}>
      <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" />&nbsp;
      {props.children}
    </Alert>
  )
}