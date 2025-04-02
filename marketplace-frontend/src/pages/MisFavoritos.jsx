import { Link } from "react-router-dom";
import React from "react";

const productos = [
  {
    id: 1,
    nombre: "Lenovo",
    descripcion: "Tablet M11 11.0” 8GB 128GB WiFi Octa Core Android Luna Grey + Folio Case + lápiz",
    precio: 999999,
    imagen: "https://picsum.photos/150?random=1", // Imagen temporal
  },
  {
    id: 2,
    nombre: "Lenovo",
    descripcion: "Tablet M11 11.0” 8GB 128GB WiFi Octa Core Android Luna Grey + Folio Case + lápiz",
    precio: 999999,
    imagen: "https://picsum.photos/150?random=2",
  },
  {
    id: 3,
    nombre: "Lenovo",
    descripcion: "Tablet M11 11.0” 8GB 128GB WiFi Octa Core Android Luna Grey + Folio Case + lápiz",
    precio: 999999,
    imagen: "https://picsum.photos/150?random=3",
  },
];

const MisFavoritos = () => {
  return (
    <div className="container mt-5">
      {/* 🔹 Encabezado */}
      <div className="bg-light p-3 mb-3 border rounded shadow-sm d-flex align-items-center">
        <Link to="/" className="text-primary text-decoration-none me-2">Volver</Link>
        <span className="text-muted fw-bold">| Mis Favoritos</span>
      </div>

      {/* 📋 Lista de favoritos */}
      {productos.length > 0 ? (
        productos.map((producto) => (
        <div key={producto.id} className="card mb-3 shadow-sm">
          <div className="row g-0">
            {/* Imagen */}
            <div className="col-md-2 d-flex align-items-center">
              <img src={producto.imagen} alt={producto.nombre} className="img-fluid rounded"  />
            </div>
            
            {/* Información */}
            <div className="col-md-7 p-3">
              <h5 className="card-title fw-bold">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
            </div>

            {/* Precio y botones */}
            <div className="col-md-3 d-flex flex-column align-items-end justify-content-center pe-3">
              <h4 className="text-primary fw-bold">${producto.precio.toLocaleString()}</h4>
              <div>
                <button className="btn btn-success me-2">Agregar al carrito</button>
                <button className="btn btn-danger">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
        ))
      ) : (
        <p className="text-center text-muted">No tienes publicaciones.</p>
      )}
      
      
    </div>
  );
};

export default MisFavoritos;
