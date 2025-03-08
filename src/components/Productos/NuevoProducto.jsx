import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function NuevoProducto(props) {
  useEffect(() => {
    nombreRef.current.focus();
  });
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [fecha, setFecha] = useState("");

  const nombreRef = useRef();

  const nombreHandler = (event) => {
    setNombre(event.target.value);
  };
  const precioHandler = (event) => {
    setPrecio(event.target.value);
  };
  const fechaHandler = (event) => {
    setFecha(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const producto = {
      id: Math.random.toString(),
      nombre: nombre,
      precio: precio,
      fecha: new Date(fecha),
    };
    props.anadirProducto(producto);
    setNombre("");
    setPrecio("");
    setFecha("");
    nombreRef.current.focus();
  };

  return (
    <>
      <div>
        <Form onSubmit={submitHandler}>
          <Container>
            <Row>
              <Col>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={nombreHandler}
                  value={nombre}
                  ref={nombreRef}
                />
              </Col>
              <Col>
                <Form.Label>Precio: </Form.Label>
                <Form.Control
                  type="number"
                  onChange={precioHandler}
                  value={precio}
                />
              </Col>
              <Col>
                <Form.Label>Fecha: </Form.Label>
                <Form.Control
                  type="date"
                  onChange={fechaHandler}
                  value={fecha}
                />
              </Col>
              <Col>
                {" "}
                <Button variant="success" type="submit">
                  Nuevo Producto
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </>
  );
}
