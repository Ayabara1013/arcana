import React, { useState } from 'react';
import '../../../App.scss';

// components
import { Button, Col, Container, Row } from 'react-bootstrap';
import { SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StNavListItem } from './SettingsComponents';


function PasswordSettings(props) {
  return (
    <StCategoryContainer>
      <StCategoryTitle name='Password' />

      <StInputSingle text='change password' />

    </StCategoryContainer>
  );
}

export default PasswordSettings;