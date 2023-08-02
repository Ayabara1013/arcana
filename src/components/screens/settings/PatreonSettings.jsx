import React, { useState } from 'react';
import '../../../App.scss';

// components
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StNavListItem } from './SettingsComponents';



function PatreonSettings(props) {
  // const { accountDetails: { username } } = props;

  return (
    <StCategoryContainer title='Patreon'>
      <SettingsCard name='Patreon Info'>
        <div className="d-flex row row-cols-3 gy-4">
          <div className="col">
            <PaAccountInfo />
          </div>

          <div className="col">
            <PaTier />
          </div>

          <div className="col">
            <PaSupportLink />
          </div>

          <div className="col">
            <PaUnlink />
          </div>

          <div className="col">
            <PaCallout />
          </div>
        </div>

      </SettingsCard>
    </StCategoryContainer>

  );
}

/**
 * 
 * @param {*} props paId (Patreon Account Id)
 * @returns PaAccountInfo component
 */
function PaAccountInfo(props) {
  return (
    <Card>
      <h5 className='text-center'>Account Id</h5>
      <p>{props.accId || '<PROPS MISSING ACCOUNT ID>'}</p>
    </Card>
  );
}

/**
 * 
 * @param {*} props benefits (patreon tier benefits), tier (patreon tier name)
 * @returns component
 */
function PaTier(props) {
  // const { benefits, tier } = props; 
  
  const benefits = ['one', 'two', 'three'];
  const tier = props.tier || 'SUPER MEGA CHAD';
  
  const benefitsList = benefits ? 
    benefits.map((benefit, index) => <li key={index}>{benefit}</li>) : [];

  const benefitsElement = <ul>{benefitsList}</ul>
  const errorElement = <p>ERROR: THERE ARE NO BENEFITS PROVIDED</p>;


  return (
    <Card>
      <h5 className='text-center'>Patron Tier</h5>
      {/* <p>You are a; {tier || '[MISSING_TIER]'}-level Patron!</p> */}
      <div className="text-center">
        <p className='mb-0'>You are a;</p>
        <p className='mb-0'>{tier || '[MISSING_TIER]'}</p>
        <p className=''>-level Patron!</p>
      </div>

      <p className='mb-0'>You have the following benefits: </p>
      {benefitsList.length > 0 ? benefitsElement : errorElement}
    </Card>
  );
}

/**
 * 
 * @param {*} props tier (Patreon Tier)
 * @returns component
 */
function PaSupportLink(props) {
  return (
    <Card>
      <h5 className='text-center'>Link/Support us on Patreon</h5>

      <Button
        className='m-2'
        variant="info"
        onClick={() => console.log("Primary")}
      >
        Primary
      </Button>
    </Card>
  );
}

/**
 * 
 * @param {*} props 
 * @returns component
 */
function PaUnlink(props) {
  return (
    <Card>
      <h5 className='text-center'>Unlink Patreon</h5>

      <Button
        className='m-2'
        variant="info"
        onClick={() => console.log("Primary")}
      >
        Primary
      </Button>
    </Card>
  );
}

/**
 * 
 * @param {*} props 
 * @returns component
 */
function PaCallout(props) {
  return (
    <Card>
      <h5 className='text-center'>Check us out on Patreon!</h5>
      
      <Button
        className='m-2'
        variant="info"
        onClick={() => console.log("Primary")}
      >
        Primary
      </Button>
    </Card>
  );
}




function Template(props) {


  return (
    <div>

    </div>
  );
}


export default PatreonSettings;