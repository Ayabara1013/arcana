import React, { useState } from 'react';
import '../../../styles/App.scss';

// components
import { Button, Col, Container, Row } from 'react-bootstrap';
import { SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StNavListItem } from './SettingsComponents';
import { PatreonButton } from '../../utils/MiscComponents';



function BillingSettings(props) {
  // const { accountDetails: { username } } = props;

  return (
    <StCategoryContainer title='Billing'>
      <SettingsCard>
        <PatreonButton></PatreonButton>
      </SettingsCard>
    </StCategoryContainer>

  );
}


export default BillingSettings;