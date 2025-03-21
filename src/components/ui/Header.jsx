import { useContext } from "react";
import "./header.css";
import AutContext from "../../store/AutContext";
import { Nav } from "react-bootstrap";
import { Link } from "react-router";
function Header() {
  const loginContext = useContext(AutContext).login;
  return (
    <>
      <div className="header">
        <h2>LIST OR PRODUCTS</h2>
        <p>With description, date and price</p>
        {loginContext && <p>Hola USUARIO</p>}
        <Nav className="justify-content-end">
          <Nav.Item>
            <Link to="/">Inicio</Link> |
          </Nav.Item>
          <Nav.Item>
            <Link to="/about-us">Sobre Nosotros</Link> |
          </Nav.Item>
          <Nav.Item>
            <Link to="/products">Productos</Link> |
          </Nav.Item>
          <Nav.Item>
            <Link to="/product-new">Nuevo Producto</Link> |
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">Conctacto</Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}
export default Header;
