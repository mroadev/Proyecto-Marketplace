import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserPlus, LogIn, LogOut } from "lucide-react";
import { CarritoContext } from "../context/CarritoContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const { usuario, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container justify-content-between ">
        {/* Título y botón de colapsar */}
        <div className="d-flex justify-content-between align-items-center">
          <Link className="navbar-brand fw-bold me-3" to="/">Mi Marketplace</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Menú de navegación (se oculta en móviles) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/publicar">Publicar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/mis-publicaciones">Mis Publicaciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/mis-compras">Mis Compras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/mis-favoritos">Mis Favoritos</Link>
            </li>
          </ul>
        </div>

        {/* Botones a la derecha */}
        <div className="d-flex gap-2">
        {usuario ? (
            <>
              {/* Mostrar el nombre del usuario */}
              <span className="text-white align-self-center">Hola, {usuario.nombre}!</span>

              <Link to="/perfil" className="btn btn-light btnNavbar">
                <UserPlus className="me-1 iconNavbar"  /> Perfil
              </Link>
              <button className="btn btn-light btnNavbar" onClick={logout}>
                <LogOut className="me-1 iconNavbar"  /> Salir
              </button>
            </>
          ) : (
            <>
              <Link to="/crear-cuenta" className="btn btn-light btnNavbar">
                <UserPlus className="me-1 iconNavbar"  /> Crear Cuenta
              </Link>
              <Link to="/login" className="btn btn-light btnNavbar">
                <LogIn className="me-1 iconNavbar"  /> Ingresar
              </Link>
            </>
          )}
          <Link to="/cart" className="btn btn-light position-relative btnNavbar">
            <ShoppingCart className="iconNavbar" />
            {cantidadTotal > 0 && (
              <span className="badge bg-danger ms-1 position-absolute top-0 start-100 translate-middle">
                {cantidadTotal}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
