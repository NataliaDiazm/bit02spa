import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Navegacion } from "./components/Navegacion";
import { PaginaInicio } from "./components/PaginaInicio";
import { PaginaProductos } from "./components/PaginaProductos";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      
        <Navegacion />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/productos" element={<PaginaProductos />} />
          <Route path="/*" element={<Outlet />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

