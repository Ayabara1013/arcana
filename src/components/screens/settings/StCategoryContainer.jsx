function StCategoryContainer(props) {
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