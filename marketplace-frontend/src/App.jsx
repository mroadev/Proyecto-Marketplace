import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";

import Navbar from "./components/Navbar";
import Publicaciones from "./pages/Publicaciones";
import DetalleProducto from "./pages/DetalleProducto";
import Publicar from "./pages/PublicarProducto";
import MisPublicaciones from "./pages/MisPublicaciones";
import MisCompras from "./pages/MisCompras";
import DetalleCompra from "./pages/DetalleCompra";
import MisFavoritos from "./pages/MisFavoritos";
import Carrito from "./pages/Carrito";
import Comprar from "./pages/Comprar";

import Login from "./components/Login";
import CrearCuenta from "./components/CrearCuenta";
import Perfil from "./pages/Perfil";
import ConfirmarRegistroModal from "./components/ConfirmarRegistroModal";

import Footer from "./components/Footer";
import { CarritoProvider } from "./context/CarritoContext";
import { AuthProvider, AuthContext } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <Router>
          <AppContent />
        </Router>
      </CarritoProvider>
    </AuthProvider>
  );
}

  function AppContent() {
    const { usuario } = useContext(AuthContext);

    return (
      <div>
        {/* Barra de navegación */}
        <Navbar />
  
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Publicaciones />} />
          <Route path="/publicar" element={usuario ? <Publicar /> : <Login />} />
          <Route path="/mis-publicaciones" element={usuario ? <MisPublicaciones /> : <Login />} />
          <Route path="/mis-compras" element={usuario ? <MisCompras /> : <Login />} />
          <Route path="/mis-favoritos" element={usuario ? <MisFavoritos /> : <Login />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/detalle-compra/:id" element={usuario ? <DetalleCompra /> : <Login />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route path="/confirmacion-registro" element={<ConfirmarRegistroModal />} /> 
          <Route path="/perfil" element={usuario ? <Perfil /> : <Login />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/comprar" element={<Comprar />} />
        </Routes>
  
        {/* Footer */}
        <Footer />
      </div>
    );
}

export default App;

