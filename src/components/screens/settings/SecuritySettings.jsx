import React, { useState } from 'react';
import '../../../styles/App.scss';

// components
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StModal, StNavListItem } from './SettingsComponents';

// const { accountDetails: { username } } = props;

function SecuritySettings(props) {
  // const dialog = document.getElementById(dialog);

  return (
    <StCategoryContainer title='Security'>

      <SettingsCard name='Password'>
        {/* <Button>open dialog</Button> */}
        <ChangePasswordModal text='Change Password' />
      </SettingsCard>
    </StCategoryContainer>

  );
}


const ChangePasswordModal = (props) => {
  return (
    <StModal buttonText={props.text}>
      <Modal.Header closeButton>
        <h3>Change Password</h3>
      </Modal.Header>

      <Modal.Body>
        <StInputSingle noButton
          className='w-100'
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
        <Button
          variant="secondary"
          onClick={
            () => console.log("cancelling password change")}
        >
        Cancel
        </Button>
        
        <Button
          variant="danger"
          onClick={
            () => console.log("saving password changes, prompting user for confirmation")}
        >
          Save Changes **CHANGE THIS TO A DOUBLE CONFIRM!!!**
        </Button>

      </Modal.Footer>
    </StModal>
  );
}




export default SecuritySettings;