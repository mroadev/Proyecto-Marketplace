import { ShoppingCart, UserPlus, LogIn } from "lucide-react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Título */}
        <a className="navbar-brand" href="#">Mi Marketplace</a>

        {/* Botón para colapsar en móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#">Publicar</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Mis Publicaciones</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Mis Compras</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Mis Favoritos</a></li>
          </ul>

          {/* Botones a la derecha */}
          <div className="d-flex gap-2">
            <button className="btn btn-light">
              <UserPlus className="me-1" /> Crear Cuenta
            </button>
            <button className="btn btn-light">
              <LogIn className="me-1" /> Ingresar
            </button>
            <button className="btn btn-light">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
