import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import ConfirmarPagoModal from "../components/ConfirmarPagoModal";
import AdvertenciaPagoModal from "../components/AdvertenciaPagoModal";

const Comprar = () => {
  const navigate = useNavigate();

  // Obtiene el subtotal, el monto de envio y el total desde el contexto
  const { subtotal, envio, total, vaciarCarrito } = useContext(CarritoContext);

  // Obtiene el usuario autenticado, desde el Contexto
  const { usuario } = useContext(AuthContext); 

  // Estados para selección de envío y pago
  const [envioSeleccionado, setEnvioSeleccionado] = useState(null);
  const [pagoSeleccionado, setPagoSeleccionado] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalAdvertencia, setShowModalAdvertencia] = useState(false);

  // Datos de ejemplo
  const compra = {
    fecha: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    producto: "Productos del carrito",
    precio: subtotal,
    envio: envio,
    total: total,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario) {
      setShowModalAdvertencia(true); 
      return;
    }
    setShowModal(true); 
  };

  const handleConfirmar = () => {
    setShowModal(false);
    vaciarCarrito();
  };

  const handleAdvertencia = () => {
    setShowModalAdvertencia(false);
  };

  // Habilita el botón solo si se elige envío y medio de pago
  const botonHabilitado = envioSeleccionado && pagoSeleccionado;

  return (
    <div className="container mt-5 mb-5">
      {/* Encabezado */}
      <div className="bg-light p-3 mb-3 border rounded shadow-sm d-flex align-items-center">
        <Link to="/cart" className="text-primary text-decoration-none me-2">Volver</Link>
        <span className="text-muted fw-bold">| Comprar</span>
      </div>

      {/* Contenedor de la compra */}
      <div className="card shadow-lg border p-4">
        <div className="row">
          {/* Opciones de Envío y Pago */}
          <div className="col-md-8">
            {/* Opción de Envío */}
            <div className="border rounded p-3 mb-3">
              <h6 className="fw-bold">Envío a domicilio</h6>
              <p className="text-muted">Dirección de envío: {usuario?.direccion || "No especificada"}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span>Envío</span>
                <span className="fw-bold">${compra.envio.toLocaleString()}</span>
              </div>
              <input
                type="radio"
                name="envio"
                className="form-check-input mt-2"
                onChange={() => setEnvioSeleccionado(true)}
              />
            </div>

            {/* Opción de Pago */}
            <div className="border rounded p-3">
              <h6 className="fw-bold">Medio de Pago</h6>
              <p className="text-muted">Tarjeta Bancaria</p>
              <input
                type="radio"
                name="pago"
                className="form-check-input mt-2"
                onChange={() => setPagoSeleccionado(true)}
              />
            </div>
          </div>

          {/* Resumen de compra */}
          <div className="col-md-4">
            <div className="bg-light p-3 rounded border">
              <h6 className="fw-bold text-muted">Resumen de la compra</h6>
              <p className="text-muted">{new Date(compra.fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })}</p>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
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
              <button className="btn btn-primary w-100 mt-3" disabled={!botonHabilitado} onClick={handleSubmit}>
                Pagar
              </button>

              {/* Modal de confirmación de pago */}
              <ConfirmarPagoModal show={showModal} onClose={handleConfirmar} />

              {/* Modal de advertencia de pago */}
              <AdvertenciaPagoModal show={showModalAdvertencia} onClose={handleAdvertencia} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Comprar;
