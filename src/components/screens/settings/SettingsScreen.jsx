import React, { useState } from 'react';
import '../../../styles/App.scss';

// components
import { Button, Col, Container, Row } from 'react-bootstrap';
import { SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StNavListItem } from './SettingsComponents';

import AccountSettings from './AccountSettings';
import PasswordSettings from './PasswordSettings';
import SecuritySettings from './SecuritySettings';
import PatreonSettings from './PatreonSettings';
import BillingSettings from './BillingSettings';

const { Account, accountsDB } = require('../../../tools');



function SettingsScreen(props) {
  const [activeTab, setActiveTab] = useState(<AccountSettings />);

  return (
    <Container className='mt-2'>
      <Row>
        <Col className='col-4'>
          <div className="settings-nav box-shadow list-group list-group-flush" role="tablist">

            <StNavListItem
              name='Account'
              onClick={() => setActiveTab(<AccountSettings />)}
            />

            {/* <StNavListItem
              name='Password'
              onClick={() => setActiveTab(<PasswordSettings />)}
            /> */}

            <StNavListItem
              name='Security'
              onClick={() => setActiveTab(<SecuritySettings />)}
            />

            <StNavListItem
              name='Patreon'
              onClick={() => setActiveTab(<PatreonSettings />)}
            />

            <StNavListItem
              name='Billing'
              onClick={() => setActiveTab(<BillingSettings />)}
            />

          </div>
        </Col>

        <Col>
          {activeTab}
        </Col>
      </Row>
    </Container>
  );
}





/**
 * 1. account settings
 *  - username
 *  - display name
 *  - profile picture
 * 2. security
 *    change password
 * 3. billing
 *    connect/ remove patreon
 *    change membership level
 *    connect/ change/ remove credit card, etc.
 

* 4. language settings
 *  - (maybe in a separate menu? but it could be listed in this same nav group?)
 *    --  actually, if I put the language settings inside this package, I could even
 *        export it and use it directly in the other pages as well, just render the same
 *        elements wherever I need them! if thats the case, it might be better to put
 *        ALL settings here just as a baseline!
 *    --  I will add a button for "deeper settings & tools" to direct back to the page
 *        for things like linking languages, etc
*/



// -- Specific Settings Pages

// function AccountSettings(props) {
//   // const { accountDetails: { username } } = props;

//   return (
//     <StCategoryContainer>
//       <SettingsCard>
//         <StCategoryTitle name='Account' />
//       </SettingsCard>

//       <SettingsCard name='account stuffs'>
//         <StInputSingle
//           text='Change Username'
//           placeholder={props.username || 'missing placeholder content: username'}
//         />
//       </SettingsCard>

//       <div className='box'>

//       </div>
//     </StCategoryContainer>

//   );
// }

// function PasswordSettings(props) {
//   return (
//     <StCategoryContainer>
//       <StCategoryTitle name='Password' />

//       <StInputSingle text='change password' />

//     </StCategoryContainer>
//   );
// }

export default SettingsScreen;