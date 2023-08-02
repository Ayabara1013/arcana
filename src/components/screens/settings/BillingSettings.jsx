import React, { useState } from 'react';
import '../../../App.scss';

// components
import { Button, Col, Container, Row } from 'react-bootstrap';
import { SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StNavListItem } from './SettingsComponents';
import { GoToPatreonButton } from '../../utils/MiscComponents';



function BillingSettings(props) {
  // const { accountDetails: { username } } = props;

  return (
    <StCategoryContainer title='Billing'>
      <SettingsCard>
        <GoToPatreonButton></GoToPatreonButton>
      </SettingsCard>
    </StCategoryContainer>

  );
}


export default BillingSettings;