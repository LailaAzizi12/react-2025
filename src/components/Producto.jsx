import './producto.css';
import FechaProducto from './FechaProducto';

function Producto(props){
    return(
      <div className="producto">
        <FechaProducto fecha={props.producto.fecha}/>
        <div className="producto__descripcion">
          <h2>Nombre: {props.producto.nombre}</h2>
          <div className="producto__precio">{props.producto.precio}</div>
          <div className="producto__precio">{props.producto.stock}</div>
        </div>
      </div>
    )
  }
  export default Producto;