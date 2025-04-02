import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Datos de ejemplo (simulación de API)
const publicacionesEjemplo = [
    {
      id: 1,
      titulo: "Laptop Gamer",
      descripcion: "Potente laptop con procesador i7 y RTX 3060.",
      precio: "$1.500.000",
      imagen: "https://picsum.photos/150?random=1",
      fecha: "2024-03-25",
    },
    {
      id: 2,
      titulo: "iPhone 14 Pro",
      descripcion: "Celular nuevo, en caja con garantía de 1 año.",
      precio: "$950.000",
      imagen: "https://picsum.photos/150?random=2",
      fecha: "2024-03-28",
    },
    {
      id: 3,
      titulo: "Bicicleta MTB",
      descripcion: "Bicicleta de montaña con frenos hidráulicos y suspensión.",
      precio: "$400.000",
      imagen: "https://picsum.photos/150?random=3",
      fecha: "2024-03-30",
    },
  ];

const MisPublicaciones = () => {
  // Estado para las publicaciones (se puede conectar a una API)
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    // Simulación de obtener publicaciones ordenadas por fecha descendente
    const publicacionesOrdenadas = [...publicacionesEjemplo].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    setPublicaciones(publicacionesOrdenadas);
  }, []);

  return (
    <div className="container mt-5">
      {/* 🔹 Encabezado */}
      <div className="bg-light p-3 mb-3 border rounded shadow-sm d-flex align-items-center">
        <Link to="/" className="text-primary text-decoration-none me-2">Volver</Link>
        <span className="text-muted fw-bold">| Mis Publicaciones</span>
      </div>

      {/* 📋 Listado de Publicaciones */}
      {publicaciones.length > 0 ? (
        publicaciones.map((pub) => (
          <div key={pub.id} className="card mb-3 shadow-sm">
            <div className="row g-0">
              {/* 📸 Imagen Principal */}
              <div className="col-md-2 d-flex align-items-center">
                <img src={pub.imagen} alt={pub.titulo} className="img-fluid rounded" />
              </div>
              
              {/* 📝 Título y Descripción */}
              <div className="col-md-7 p-3">
                <h5 className="card-title">{pub.titulo}</h5>
                <p className="card-text text-muted">{pub.descripcion}</p>
              </div>
              
              {/* 💰 Precio y Fecha */}
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-end p-3">
                <h4 className="text-primary fw-bold">{pub.precio}</h4>
                <span className="text-muted">{new Date(pub.fecha).toLocaleDateString()}</span>
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

export default MisPublicaciones;
