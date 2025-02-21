import './App.css'
import Productos from './components/productos';
import Header from './components/Header';
import { Footer } from './components/Footer';
function App() {
  const productos = [{
    nombre: 'Pantalla táctil',
    precio: 45.6,
    fecha: new Date(),
    stock: 4
  },
  {
    nombre: 'Ratón inalámbrico',
    precio: 34.8,
    fecha: new Date(),
    stock: 2
  },
  {
    nombre: 'Teclado',
    precio: 22.6,
    fecha: new Date(),
    stock: 0
  }
];
  const header = 'Welcome to my page!';
  const footer = '2025 - DSM';
  return (
    <>
      <Header header={header}/>
      <p>It`s working</p>
      <Productos productos={productos}/>
      <Footer footer={footer}/>
    </>
  )
}

export default App
