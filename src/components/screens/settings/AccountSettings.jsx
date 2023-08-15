import React, { useState } from 'react';
import '../../../styles/App.scss';

// components
import { Button, ButtonGroup, Col, Container, Form, Modal, ModalHeader, Popover, Row } from 'react-bootstrap';
import { Example, SettingsCard, StCategoryContainer, StCategoryTitle, StInputSingle, StModal, StNavListItem } from './SettingsComponents';

const { Account, accountsDB } = require('../../../tools');


function AccountSettings(props) {
  // const { accountDetails: { username } } = props;
  const dialog = document.getElementById('dialog');
  const acc = accountsDB[0]; // I dont actually like that its acc instead of acct or act but I dont want to keep going back and forth on the name lol
  const user = accountsDB[0].user;
  const usernameText = (
    <div>
      <span className='fw-bolder me-2'>Username:</span>
      <span className='fw-normal'>{user.username}</span>
    </div>
  );

  const emailText = (
    <div>
      <h5 className='fw-bolder mb-0'>Email:</h5>
      <span className=''>{user.email}</span>
    </div>
  )

  return (
    <StCategoryContainer>

      <SettingsCard>
        <StCategoryTitle name='Account' />
      </SettingsCard>

      <SettingsCard name='Account Details'>
        <div className="mb-4">
          <StInputSingle
            // text={`Username: ${user.username}`}
            text={usernameText}
            placeholder={'new username?' || user.username || props.username || 'missing-prop: username'}
          />
          <StInputSingle text='change display name?' placeholder='hello' />
        </div>

        <EmailElement user={user} />
      </SettingsCard>

      <SettingsCard name='Sessions'>
        <Button className=''>Manage All Sessions</Button>
        {/**this can pop up a modal or whatever with all the active sessions for the user to choose from or close */}
      </SettingsCard>

    </StCategoryContainer>

  );
}

function ChangeEmailModal(props) {
  return (
    <StModal>
      <Modal.Header closeButton>
        Change Email
      </Modal.Header>

      {/* //--------------------------- */}

      <Modal.Body>
        <Form.Group>
          <Form>
            Form.Group, Row, etc
          </Form>
        </Form.Group>
      </Modal.Body>

      {/* //--------------------------- */}

      <Modal.Footer>

      </Modal.Footer>

    </StModal>
  );
}

const EmailElement = (props) => {
  const { user } = props;
  const [active, setActive] = useState(false);

  const emailHeading = (
    <div className='mb-2'>
      <h5 className='fw-bolder mb-0'>Email:</h5>
      <div className='fw-normal'>{user.email}</div>
    </div>
  )

  const closed = (
    <div className='email-element -closed'>
      {emailHeading}
      <Button variant="primary"
        onClick={() => {
        console.log("opening change email element")
        setActive(true);
      }}>
        Change Email
      </Button>
    </div>
  );

  const opened = (
    <div className='email-element -open'>
      {emailHeading}

      <Form>
        <Form.Group controlId="form-group-id" className='mb-2'>
          {/* Form.Label, Form.Control, Form.Text, Form.Check, InputGroup, etc */}
            <Form.Text className="text-muted">Enter old email:</Form.Text>
            <Form.Control type="text" placeholder="john-smith@email.com" />

            <Form.Text className="text-muted">Enter new email: </Form.Text>
            <Form.Control type="text" placeholder="other-john-smith@email.com" />

            <Form.Text className="text-muted">Re-enter new email: </Form.Text>
            <Form.Control type="text" placeholder="other-john-smith@email.com" />
        </Form.Group>

        <div className='d-flex gap-2'>
          <Button
            variant="secondary"
            type="submit"
            onClick={() => {
              setActive(false);
          }}>
            Cancel
          </Button>

          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              setActive(false);
          }}>
            Submit
          </Button>
        </div>

      </Form>
    </div>
  );

  return (
    <>
      {active == true ? opened : closed}
    </>
  );
}

export default AccountSettings;