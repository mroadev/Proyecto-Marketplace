import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Datos de ejemplo
const comprasEjemplo = [
    { id: 1, fecha: "2025-03-20", total: "$999.999", estado: "Vendido", vendedor: "Tienda A", unidades: 3 },
    { id: 2, fecha: "2025-01-31", total: "$599.999", estado: "Enviado", vendedor: "Tienda B", unidades: 2 },
    { id: 3, fecha: "2024-10-10", total: "$199.999", estado: "Pendiente", vendedor: "Tienda C", unidades: 5 },
    { id: 4, fecha: "2025-04-05", total: "$1.299.999", estado: "Vendido", vendedor: "Tienda D", unidades: 1 },
  ];

const getEstadoColor = (estado) => {
switch (estado) {
    case "Vendido":
        return "text-success"; // Verde
    case "Enviado":
        return "text-primary"; // Azul
    case "Pendiente":
        return "text-warning"; // Amarillo
    default:
        return "text-muted"; // Gris
}
};

const MisCompras = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    // Ordenar por fecha descendente
    const comprasOrdenadas = [...comprasEjemplo].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    setCompras(comprasOrdenadas);
  }, []);

  return (
    <div className="container mt-5">
      {/* 🔹 Encabezado */}
      <div className="bg-light p-3 mb-3 border rounded shadow-sm d-flex align-items-center">
        <Link to="/" className="text-primary text-decoration-none me-2">Volver</Link>
        <span className="text-muted fw-bold">| Mis Compras</span>
      </div>

      {/* 📋 Listado de Compras */}
      <div className="p-0">
        {compras.length > 0 ? (
          compras.map((compra) => (
            <div key={compra.id} className="card mb-3 shadow-sm">
              {/* 📅 Fecha de Compra */}
              <div className="card-header d-flex align-items-start mb-2 bg-light">
                <h6 className="text-muted">{new Date(compra.fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })}</h6>
              </div>
              
              {/* 📦 Información de la Compra */}
              <div className="d-flex justify-content-between align-items-center p-3">
                <div>
                  <strong className={`${getEstadoColor(compra.estado)}`}>{compra.estado}</strong>
                  <p className="mb-0 text-muted">Vendido por {compra.vendedor}</p>
                  <p className="mb-0 text-muted">{compra.unidades} Unidades Vendidas</p>
                </div>
                <div className="text-end text-success">
                  <h5 className="fw-bold">Total: {compra.total}</h5>
                  <Link to={`/detalle-compra/${compra.id}`} className="btn btn-primary btn-sm">Ver Detalle</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No tienes compras registradas.</p>
        )}
      </div>
    </div>
  );
};

export default MisCompras;
