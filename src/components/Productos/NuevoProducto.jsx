import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./NuevoProducto.css";
import { useNavigate } from "react-router";
function InfoModal(props) {
  const [open, setOpen] = useState(true);
  const cerrarHandler = () => {
    setOpen(false);
  };
  return open ? (
    <>
      <h2>{props.titulo}</h2>
      <p>{props.mensaje}</p>
      <button onClick={cerrarHandler}>Cerrar</button>
    </>
  ) : null;
}

export default function NuevoProducto(props) {
  useEffect(() => {
    nombreRef.current.focus();
  });
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [fecha, setFecha] = useState("");
  const [nombreValid, setNombreValid] = useState(false);

  const nombreRef = useRef();

  const navega = useNavigate();

  const nombreHandler = (event) => {
    setNombre(event.target.value);
    setNombreValid(true);
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
    setTimeout(() => {
      navega("/products");
    }, 500);
  };

  const nombreBlurHandler = () => {
    nombre.length === 0 ? setNombreValid(false) : "";
  };

  const contenidoModal = ReactDOM.createPortal(
    <InfoModal
      titulo="Confirma la validez"
      mensaje="El campo está vacío"
    ></InfoModal>,
    document.getElementById("overlay")
  );
  return (
    <>
      <div>
        {/* {!nombreValid && contenidoModal} */}
        <Form onSubmit={submitHandler}>
          <Container>
            <Row>
              <Col>
                <Form.Label className={`${nombreValid ? "" : "invalid"}`}>
                  Nombre:{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={nombreHandler}
                  value={nombre}
                  ref={nombreRef}
                  onBlur={nombreBlurHandler}
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
