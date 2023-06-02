import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navegacion } from "./components/Navegacion";
import { PaginaInicio } from "./components/PaginaInicio";
import { PaginaProductos } from "./components/PaginaProductos";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/bit02spa" element={<PaginaInicio />} />
        <Route path="/bit02spa/productos" element={<PaginaProductos />} />
        {/* <Route path="/*" element={<Outlet />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
