import { useState } from "react";
import FiltroProductos from "./FiltroProductos";
import Producto from "./Producto";
import { Alert } from "react-bootstrap";
function Productos(props) {
  const [ano, setAno] = useState("");
  const updateAno = (ano) => {
    setAno(ano);
  };
  const productosFiltrados = props.productos.filter((producto) => {
    return ano ? producto.fecha.getFullYear().toString() === ano : true;
  });

  const contenido =
    productosFiltrados.length > 0 ? (
      <div>
        {productosFiltrados.map((producto) => {
          return (
            <Producto
              key={producto.id}
              producto={producto}
              borrarProducto={props.borrarProducto}
            />
          );
        })}
      </div>
    ) : (
      <Alert>No hay productos de este año</Alert>
    );
  return (
    <>
      <FiltroProductos updateAno={updateAno} />
      {contenido}
    </>
  );
}
export default Productos;
