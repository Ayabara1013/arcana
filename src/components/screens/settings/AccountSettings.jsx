import React, { useState } from 'react';
import '../../../App.scss';

// components
import { Button, ButtonGroup, Col, Container, Modal, ModalHeader, Popover, Row } from 'react-bootstrap';
import { Example, SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StModal, StNavListItem } from './SettingsComponents';



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

    </StCategoryContainer>

  );
}








export default AccountSettings;