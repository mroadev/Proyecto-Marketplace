import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Publicaciones from "./pages/Publicaciones";
import DetalleProducto from "./pages/DetalleProducto";
import Publicar from "./pages/PublicarProducto";
import MisPublicaciones from "./pages/MisPublicaciones";
import MisCompras from "./pages/MisCompras";
import DetalleCompra from "./pages/DetalleCompra";
import MisFavoritos from "./pages/MisFavoritos";

import Login from "./components/Login";
import CrearCuenta from "./components/CrearCuenta";
import Perfil from "./pages/Perfil";
import ConfirmarRegistroModal from "./components/ConfirmarRegistroModal";

import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div>
        {/* Barra de navegación */}
        <Navbar />

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Publicaciones />} />
          <Route path="/publicar" element={<Publicar />} />
          <Route path="/mis-publicaciones" element={<MisPublicaciones />} />
          <Route path="/mis-compras" element={<MisCompras />} />
          <Route path="/mis-favoritos" element={<MisFavoritos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          {/* <Route path="/producto/:id" element={<DetalleProductoModal />} /> */}
          <Route path="/detalle-compra/:id" element={<DetalleCompra />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route path="/confirmacion-registro" element={<ConfirmarRegistroModal />} /> {/* Ruta para Confirmación de Registro */}
          <Route path="/perfil" element={<Perfil />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );

}

export default App;

