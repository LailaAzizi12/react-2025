import { Col, Container, Form, Row } from "react-bootstrap";

export default function FiltroProductos(props) {

  const anoHandler = (event) => {
    props.updateAno(event.target.value);
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Form.Label>Selecciona el año:</Form.Label>
            <Form.Select aria-label="Default select example" onChange={anoHandler}>
              <option value="">Ver todos</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
}
