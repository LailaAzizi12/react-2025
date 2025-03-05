import "./App.css";
import Productos from "./components/Productos/Productos";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import NuevoProducto from "./components/Productos/NuevoProducto";
import { useState } from "react";
function App() {
  const [productos, setProductos] = useState([
    {
      id: Math.random().toString(),
      nombre: "Pantalla táctil",
      precio: 45.6,
      fecha: new Date(),
      stock: 4,
    },
    {
      id: Math.random().toString(),
      nombre: "Ratón inalámbrico",
      precio: 34.8,
      fecha: new Date(),
      stock: 2,
    },
    {
      id: Math.random().toString(),
      nombre: "Teclado",
      precio: 22.6,
      fecha: new Date(),
      stock: 0,
    },
    {
      id: Math.random().toString(),
      nombre: "Ratón inalámbrico",
      precio: 34.8,
      fecha: new Date(),
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
      <Header />
      <NuevoProducto anadirProducto={anadirProducto} />
      <Productos productos={productos} borrarProducto={borrarProducto} />
      <Footer />
    </>
  );
}

export default App;
