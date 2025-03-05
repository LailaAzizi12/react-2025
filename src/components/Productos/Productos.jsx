import Producto from "./Producto";
function Productos(props){
    return (
        <>
        <div>
            {props.productos.map((producto) => {
                return <Producto key={producto.id} producto={producto} borrarProducto={props.borrarProducto}/>
            })}
        </div>
        </>
    )
}
export default Productos;