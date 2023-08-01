


/** ------------------------------
 * 
 * @param {*} props children
 * @returns StCategoryContainer component
 */

export function StCategoryContainer(props) {
  return (
    <Container>
      <Row>
        <Col className=''>
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
    <h3 className='text-center fw-bold'>
      {props.name}
    </h3>
  );
}



/** ------------------------------
 * 
 * @params { text, placeholder } props 
 * @returns object
 */

export function StInputSingle(props) {

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