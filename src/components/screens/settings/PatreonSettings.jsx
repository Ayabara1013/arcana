import React, { useState } from 'react';
import '../../../App.scss';

// components
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StNavListItem } from './SettingsComponents';
import { PatreonButton } from '../../utils/MiscComponents';



function PatreonSettings(props) {
  // const { accountDetails: { username } } = props;

  return (
    <StCategoryContainer title='Patreon'>
      <SettingsCard name='Patreon Info'>
        <div className="d-flex row mb-4 gy-4">
          <div className="col">
            <PaAccountInfo />
          </div>
        </div>

        <div className="d-flex row mb-4 gy-4">
          <div className="col">
            <PaTier />
          </div>
        </div>

        <div className="d-flex row gy-4">
          <div className="col">
            <PaCallout />
          </div>
          <div className="col">
            <PaSupportLink />
          </div>
          <div className="col">
            <PaUnlink />
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
      <div className="m-auto">
        <p className='phe'>Patreon Account Name: {props.accName || '<PROPS MISSING ACCOUNT NAME>'}</p>
        <p className='phe'>Patreon Account ID: {props.accId || '<PROPS MISSING ACCOUNT ID>'}</p>
        <p className='phe'>Patreon Account Email: {props.AccEmail || '<PROPS MISSING ACCOUNT EMAIL>'}</p>
      </div>
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
    benefits.map((benefit, index) => <li key={index} className=''>{benefit}</li>) : [];

  const benefitsElement = <ul className='patreon-benefits phe'>{benefitsList}</ul>
  const errorElement = <p>ERROR: THERE ARE NO BENEFITS PROVIDED</p>;


  return (
    <Card>
      <h5 className='text-center'>Patron Tier</h5>
      {/* <p>You are a; {tier || '[MISSING_TIER]'}-level Patron!</p> */}
      <div className="text-center phe">
        <p className='mb-0'>You are a;</p>
        <p className='mb-0 phe'>{tier || '[MISSING_TIER]'}</p>
        <p className=''>-level Patron!</p>
      </div>

      <p className='mb-0 text-center'>You have the following benefits: </p>
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
    <Card className='p-2'>
      <h5 className='text-center mb'>Support us on Patreon</h5>

      {/* <PatreonButton text='Support us!'>
        hello!
      </PatreonButton> */}

      <PatreonButton text='Support us!' />
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
    <Card className='p-2'>
      <h5 className='text-center'>Unlink Patreon</h5>

      <Button
        className='pa-button -dark'
        variant="info"
        onClick={() => console.log("clicked button to unlink patreon")}
      >
        Unlink Patreon
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
    <Card className='p-2'>
      <h5 className='text-center'>Check out our Patreon!</h5>
      
      {/* <Button
        // className='m-2'
        variant="info"
        onClick={() => console.log("clicked the check us out button")}
      >
        Check us out!
      </Button> */}

      <PatreonButton />
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