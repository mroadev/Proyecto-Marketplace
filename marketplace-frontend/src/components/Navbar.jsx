import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserPlus, LogIn, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Título */}
        <Link className="navbar-brand fw-bold" to="/">Mi Marketplace</Link>

        {/* Botón para colapsar en móviles */}
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

        <div className="collapse navbar-collapse" id="navbarNav">

            {/* Menú de navegación */}
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/publicar">
                        <span className="fw-bold">Publicar</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mis-publicaciones">
                        <span className="fw-bold">Mis Publicaciones</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mis-compras">
                        <span className="fw-bold">Mis Compras</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mis-favoritos">
                        <span className="fw-bold">Mis Favoritos</span>
                    </Link>
                </li>
            </ul>

            {/* Botones a la derecha */}
            <div className="d-flex gap-2">
                <button className="btn btn-light">
                    <Link className="nav-link" to="/crear-cuenta">
                        <UserPlus className="me-1" /> Crear Cuenta
                    </Link>
                </button>
                <button className="btn btn-light">
                    <Link className="nav-link" to="/login">
                        <LogIn className="me-1" /> Ingresar
                    </Link>
                </button>
                <button className="btn btn-light">
                    <Link className="nav-link" to="/login">
                        <LogOut className="me-1" /> Salir
                    </Link>
                </button>
                <button className="btn btn-light">
                    <Link className="nav-link" to="/perfil">
                        <UserPlus className="me-1" /> Perfil
                    </Link>
                </button>
                <button className="btn btn-light">
                    <Link className="nav-link" to="/cart">
                        <ShoppingCart />
                    </Link>
                </button>
            </div>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
