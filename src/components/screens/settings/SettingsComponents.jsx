import React, { useState } from 'react';
import '../../../App.scss';

// components
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { GoToPatreonButton } from '../../utils/MiscComponents';

/** ------------------------------
 * 
 * @param {*} props name, onClick
 * @returns StNavListItem component
 */

export function StNavListItem(props) {
  const { name, onClick } = props;

  return (
    <a class="list-group-item list-group-item-action"
      data-toggle="list"
      href={`#${name.toLowerCase()}`}
      role="tab"
      onClick={onClick}
    >
      {name}
    </a>
  );
}


/** ------------------------------
 * 
 * @param {*} props children
 * @returns StCategoryContainer component
 */

export function StCategoryContainer(props) {
  const { title } = props;

  return (
    <Container>
      <Row>
        <Col className=''>
          {
            title ?
              <SettingsCard>
                <StCategoryTitle name={title} />
              </SettingsCard>
            : null
          }

          {props.children}
        </Col>
      </Row>
    </Container>
  );
}



/** ------------------------------
 * 
 * @param {*} props name, children
 * @returns SettingsCard component
 */

export function SettingsCard(props) {
  const { name } = props;

  return (
    <div className='settings-card'>
      {name ? <h3>{name}</h3> : null}
      {props.children}
    </div>

  );
}



/** ------------------------------
 * 
 * @param {*} props name
 * @returns StCategoryTitle component
 */

export function StCategoryTitle(props) {
  return (
    <h1 className='text-center fw-bold'>
      {props.name}
    </h1>
  );
}



/** ------------------------------
 * 
 * @params { text, placeholder } props 
 * @returns component
 */

export function StInputSingle(props) {

  let el = <></>;

  if (props.noButton) {
    el = <input className='st-input -nbutton' placeholder={props.placeholder} />;
  }
  else {
    el = <>
      <input className='st-input -button' placeholder={props.placeholder} />
      <Button className='btn-def'>submit</Button>
    </>
  }

  return (
    <div className={props.className}>
      <p className='mt-2 mb-0'>
        {props.text || 'ERROR'}
      </p>

      <div className='d-flex flex-row gap-2 justify-content-start'>
        {/* <input className='st-input' placeholder={props.placeholder} />
        {props.noButton ? null : <Button className='btn-def'>submit</Button>} */}
        {el}
      </div>

    </div>
  );
}



/** ------------------------------
 * 
 * @params { title, buttonText } props 
 * @returns component
 */

export function StModal(props) {
  const { title, buttonText} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={true}
        keyboard={true}
        className='st-modal'
      >
        {props.children}
      </Modal>
    </>
  );
}

{/* <ModalB>
  <Modal.Header>*things*</Modal.Header>
  <Modal.Body>*things*</Modal.Body>
  <Modal.Footer>*things*</Modal.Footer>
</ModalB> */}