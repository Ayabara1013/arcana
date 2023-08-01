import React, { useState } from 'react';
import '../../../App.scss';

// components
import { Button, Col, Container, Row } from 'react-bootstrap';

function SettingsScreen(props) {
  const [activeTab, setActiveTab] = useState(<AccountSettings />);

  return (
    <Container className='mt-2'>
      <Row>
        <Col className='col-4'>
          <div class="settings-nav list-group list-group-flush" role="tablist">

            <a class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#account"
              role="tab"
              onClick={() => setActiveTab(<AccountSettings />)}>
              Account
            </a>

            <a class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#password"
              role="tab"
              onClick={() => setActiveTab(<PasswordSettings />)}>
              Password
            </a>

            <StNavListItem
              name='Security'
              onClick={() => setActiveTab(<AccountSettings />)}
            />

          </div>
        </Col>

        <Col>
          {activeTab}
        </Col>
      </Row>
    </Container>

    // <div className='inline box'>
    //   <StCategoryContainer>
    //     <SettingsCard>
    //       <StInputSingle text='test' placeholder='placeholder text' />
    //     </SettingsCard>
    //   </StCategoryContainer>
    // </div>
  );
}

function StNavListItem(props) {
  const { name, onClick } = props;

  return (
    <a class="list-group-item list-group-item-action"
      data-toggle="list"
      href="#password"
      role="tab"
      onClick={onClick}
    >
      {name}
    </a>
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





function StCategoryTitle(props) {
  return (
    <h3 className='text-center fw-bold'>
      {props.name}
    </h3>
  );
}

/**
 * @params { text, placeholder } props 
 * @returns object
 */
function StInputSingle(props) {

  return (
    <div className=''>
      <p className='mt-2 mb-0'>
        {props.text || 'ERROR'}
      </p>
      <div className='d-flex flex-row gap-2 justify-content-start'>
        <input className='st-input' placeholder={props.placeholder} />
        <Button className=''>submit</Button>
      </div>
    </div>
  );
}


// -- Specific Settings Pages

function AccountSettings(props) {
  // const { accountDetails: { username } } = props;

  return (
    <StCategoryContainer>
      <SettingsCard>
        <StCategoryTitle name='Account' />
      </SettingsCard>

      <SettingsCard name='account stuffs'>
        <StInputSingle
          text='Change Username'
          placeholder={props.username || 'missing placeholder content: username'}
        />
      </SettingsCard>

      <div className='box'>

      </div>
    </StCategoryContainer>

  );
}

function PasswordSettings(props) {
  return (
    <StCategoryContainer>
      <StCategoryTitle name='Password' />

      <StInputSingle text='change password' />

    </StCategoryContainer>
  );
}


export default SettingsScreen;