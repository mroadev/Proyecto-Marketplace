import { useParams, Link } from "react-router-dom";

const DetalleCompra = () => {
  const { id } = useParams(); // Obtiene el ID de la URL

  // Datos de ejemplo
  const compras = [
    { id: 1, fecha: "2025-03-20", vendedor: "Lenovo", producto: "Tablet M11", cantidad: 1, precio: 999999, envio: 999 },
    { id: 2, fecha: "2025-01-31", vendedor: "Samsung", producto: "Galaxy S24", cantidad: 1, precio: 749000, envio: 12000 },
    { id: 3, fecha: "2024-10-10", vendedor: "Apple", producto: "iPhone 15", cantidad: 1, precio: 1299000, envio: 15000 },
    { id: 4, fecha: "2025-04-05", vendedor: "Sony", producto: "PS5", cantidad: 1, precio: 899000, envio: 10000 },
  ];

  // Encuentra la compra según el ID
  const compra = compras.find((c) => c.id === parseInt(id));

  if (!compra) {
    return <div className="container mt-4"><h4>Compra no encontrada</h4></div>;
  }

  return (
    <div className="container mt-5 mb-5">
      {/* 🔹 Encabezado */}
      <div className="bg-light p-3 mb-3 border rounded shadow-sm d-flex align-items-center">
        <Link to="/mis-compras" className="text-primary text-decoration-none me-2">Volver</Link>
        <span className="text-muted fw-bold">| Mis Compras {'>'} Detalle compra</span>
      </div>

      {/* 📦 Contenedor de la compra */}
      <div className="card shadow-lg border p-4">
        <div className="row">
          {/* 📄 Detalles del producto */}
          <div className="col-md-8">
            <h5 className="fw-bold">{compra.vendedor}</h5>
            <table className="table align-middle">
              <thead>
                <tr className="text-muted">
                  <th className="w-50">Producto</th>
                  <th className="text-center">Cantidad</th>
                  <th className="text-end">Precio</th>
                  <th className="text-end">Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{compra.producto}</td>
                  <td className="text-center">{compra.cantidad}</td>
                  <td className="text-end">${compra.precio.toLocaleString()}</td>
                  <td className="text-end">${(compra.cantidad * compra.precio).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 📝 Resumen de compra */}
          <div className="col-md-4">
            <div className="bg-light p-3 rounded border">
              <h6 className="fw-bold text-muted">Detalle de la compra</h6>
              <p className="text-muted">{new Date(compra.fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })}</p>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Producto</span>
                <span className="fw-bold">${compra.precio.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Envío</span>
                <span className="fw-bold">${compra.envio.toLocaleString()}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span className="fw-bold">Total</span>
                <span className="fw-bold fs-5">${(compra.precio + compra.envio).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleCompra;
