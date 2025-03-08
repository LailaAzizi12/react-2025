import "./App.css";
import Productos from "./components/Productos/Productos";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import NuevoProducto from "./components/Productos/NuevoProducto";
import { useState } from "react";
import AutContext from "./store/AutContext";
import ProductosContext from "./store/ProductosContext";
function App() {
  const [login, setLogin] = useState(false);
  const [language, setLanguage] = useState("es-ES");
  const [productos, setProductos] = useState([
    {
      id: Math.random().toString(),
      nombre: "Pantalla táctil",
      precio: 45.6,
      fecha: new Date(2025, 2, 2),
      stock: 4,
    },
    {
      id: Math.random().toString(),
      nombre: "Ratón inalámbrico",
      precio: 34.8,
      fecha: new Date(2026, 2, 2),
      stock: 2,
    },
    {
      id: Math.random().toString(),
      nombre: "Teclado",
      precio: 22.6,
      fecha: new Date(2026, 2, 2),
      stock: 0,
    },
    {
      id: Math.random().toString(),
      nombre: "Ratón inalámbrico",
      precio: 34.8,
      fecha: new Date(2025, 2, 2),
      stock: 2,
    },
  ]);

  const anadirProducto = (producto) => {
    setProductos((prevProductos) => {
      return [producto, ...prevProductos];
    });
  };

  const borrarProducto = (id) => {
    setProductos((prevProductos) => {
      return prevProductos.filter((elemento) => {
        return elemento.id != id;
      });
    });
  };

  return (
    <>
      <AutContext.Provider value={{ login: login, language: language }}>
        <Header />
        <NuevoProducto anadirProducto={anadirProducto} />
        <ProductosContext.Provider value={{ borrar: borrarProducto }}>
          <Productos productos={productos} borrarProducto={borrarProducto} />
        </ProductosContext.Provider>
        <Footer />
      </AutContext.Provider>
    </>
  );
}

export default App;
