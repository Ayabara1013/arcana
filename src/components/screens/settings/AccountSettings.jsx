import React, { useState } from 'react';
import '../../../App.scss';

// components
import { Button, Col, Container, Modal, ModalHeader, Popover, Row } from 'react-bootstrap';
import { SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StNavListItem } from './SettingsComponents';



function AccountSettings(props) {
  // const { accountDetails: { username } } = props;
  const dialog = document.getElementById('dialog');


  return (
    <StCategoryContainer>

      <SettingsCard>
        <StCategoryTitle name='Account' />
      </SettingsCard>

      <SettingsCard name='Account Details'>
        <StInputSingle
          text='Change Username'
          placeholder={props.username || 'missing-prop: username'}
        />

        <StInputSingle
          text='change Email'
          placeholder={props.email || 'missing-prop: email'}
        />
      </SettingsCard>

      <SettingsCard name='Sessions'>
        <Button className=''>Manage All Sessions</Button>
        {/**this can pop up a modal or whatever with all the active sessions for the user to choose from or close */}
      </SettingsCard>

      <SettingsCard name='Text Dialog'>
        {/* <Button>open dialog</Button> */}
        <StModal buttonText='test modal'>
          <Modal.Header closeButton>
            <h3>Change Password</h3>
          </Modal.Header>

          <Modal.Body>
            <StInputSingle noButton
              className='w-100 box'
              text='enter old password'
              placeholder='old password'
            />
            
            <StInputSingle noButton
              text='enter new password'
              placeholder='new password'
            />

            <StInputSingle noButton
              text='re-enter new password'
              placeholder='new password'
            />
          </Modal.Body>

          <Modal.Footer>

          </Modal.Footer>
        </StModal>

        {/* <ModalB title="Modal Title" openButtonText="Open Modal">
          <Modal.Header>
            <h1>Header</h1>
          </Modal.Header>
          
          <Modal.Body>
            <p>Body</p>
          </Modal.Body>

          <Modal.Footer>
            <button>Footer Button</button>
          </Modal.Footer>
        </ModalB> */}


      </SettingsCard>

    </StCategoryContainer>

  );
}


function StModal(props) {
  const { title, buttonText} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={true}
        keyboard={true}
        className='st-modal'
      >
        {props.children}
      </Modal>
    </>
  );
}

{/* <ModalB>
  <Modal.Header>*things*</Modal.Header>
  <Modal.Body>*things*</Modal.Body>
  <Modal.Footer>*things*</Modal.Footer>
</ModalB> */}

function ModalB(props) {
  const { title, ButtonText} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {ButtonText}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={true}
        keyboard={true}
      >
        <Modal.Header closeButton>
          {/* {React.cloneElement(props.Header, {})} */}
        </Modal.Header>

        <Modal.Body>
          {/* {React.cloneElement(props.Body, {})} */}
        </Modal.Body>

        <Modal.Footer>
          {/* {React.cloneElement(props.Footer, {})} */}
        </Modal.Footer>
      </Modal>
    </>
  );
}







export default AccountSettings;