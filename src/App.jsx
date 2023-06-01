import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route,  Outlet } from 'react-router-dom';
import { Navegacion } from './components/Navegacion';
import { PaginaInicio } from './components/PaginaInicio';
import { PaginaProductos } from './components/PaginaProductos';
import  CarritoCompras   from './components/CarritoCompras';


import Footer from './components/Footer';

function App() {
  const [carrito, setCarrito] = useState([]); // Estado del carrito de compras

  // Función para agregar un libro al carrito
  const agregarAlCarrito = (libro) => {
    setCarrito([...carrito, libro]);
  };

  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<PaginaInicio />} />
        <Route path='/productos' element={<PaginaProductos agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/carrito' element={<CarritoCompras carrito={carrito}/>} />
        <Route path='/*' element={<Outlet />} /> {/* Renderiza el contenido de las rutas secundarias */}
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;