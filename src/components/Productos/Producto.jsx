import "./producto.css";
import FechaProducto from "./FechaProducto";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Producto(props) {
  const [nombre, setNombre] = useState(props.producto.nombre);

  const fecha = props.producto.fecha;
  const precio = props.producto.precio;
  const cambiaNombre = () => {
    setNombre("Nuevo nombre");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const borrar = () => {
    props.borrarProducto(props.producto.id);
  };
  return (
    <div className="producto">
      <FechaProducto fecha={fecha} />
      <div className="producto__descripcion">
        <h2>Nombre: {nombre}</h2>
        <div className="producto__precio">{precio}</div>
        <Button variant="warning" onClick={handleShow} centered>
          Ver detalles
        </Button>
        <Button onClick={cambiaNombre}>Cambiar nombre</Button>
        <Button variant="danger" onClick={borrar}>
          Borrar
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles del producto: {nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Precio : {precio}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
export default Producto;
