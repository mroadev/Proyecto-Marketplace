import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash, Plus, Minus } from "lucide-react";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CarritoContext); // Obtener carrito global
  //console.log(cart);

  const [fechaActual, setFechaActual] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/comprar");
  };

  // Cargar productos desde `carrito.js`
  useEffect(() => {
    // Obtener la fecha actual
    const fecha = new Date();
    const formatoFecha = fecha.toLocaleDateString("es-ES", {
    //   weekday: "long", // Nombre del día (ej. lunes)
      day: "2-digit",
      month: "long", // Nombre del mes (ej. marzo)
      year: "numeric",
    });

    setFechaActual(formatoFecha);    
  }, []);

  // Función para aumentar cantidad
  const aumentarCantidad = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // Función para reducir cantidad
  const reducirCantidad = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  // Función para eliminar producto
  const eliminarProducto = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calcular total (productos + envío)
  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const totalEnvio = cart.reduce((acc, item) => acc + item.envio, 0);
  const total = subtotal + totalEnvio;

  return (
    <div className="container my-4">
      {/* Encabezado */}
      <div className="bg-light p-3 mb-3 border rounded shadow-sm d-flex align-items-center">
        <Link to="/" className="text-primary text-decoration-none me-2">Volver</Link>
        <span className="text-muted fw-bold">| Carrito de Compra</span>
      </div>

      <div className="row">
            {/* Tabla de productos */}
            <div className="col-lg-8">
                <div className="card shadow-sm p-3 mb-3">
                    <table className="table align-middle">
                    <thead>
                        <tr>
                        <th>Producto</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-end">Precio</th>
                        <th className="text-end">Monto</th>
                        <th className="text-end">Envío</th>
                        <th className="text-end">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td className="text-center">
                                <button
                                    className="btn btn-outline-secondary btn-sm me-2"
                                    onClick={() => reducirCantidad(item.id)}
                                >
                                    <Minus size={16} />
                                </button>
                                {item.cantidad}
                                <button
                                    className="btn btn-outline-secondary btn-sm ms-2"
                                    onClick={() => aumentarCantidad(item.id)}
                                >
                                    <Plus size={16} />
                                </button>
                            </td>
                            <td className="text-end">
                                ${item.precio ? item.precio.toLocaleString() : "0"}
                            </td>
                            <td className="text-end">
                              ${item.precio ? (item.precio * item.cantidad).toLocaleString() : "0"}
                            </td>
                            <td className="text-end text-danger">
                                ${item.envio ? item.envio.toLocaleString() : "0"}
                            </td>
                            <td className="text-end">
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => eliminarProducto(item.id)}
                                >
                                    <Trash size={16} />
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>

            {/* Resumen de Compra */}
            <div className="col-lg-4">
                <div className="card shadow-sm p-3">
                    <table className="table">
                    <thead>
                        <tr colSpan={2}>
                            <td>
                                <h5 className="mb-3">Resumen de Compra</h5>
                                <span className="text-muted small">{fechaActual}</span> {/* Fecha actual */}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td className="text-end">${subtotal.toLocaleString()}</td>
                        </tr>
                        <tr>
                        <td>Envío</td>
                            <td className="text-end">${totalEnvio.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td className="text-end fw-bold">${total.toLocaleString()}</td>
                        </tr>
                    </tbody>
                    </table>
                    {/* <Link to="/comprar" className="btn btn-primary w-100" disabled={cart.length === 0}>Comprar</Link> */}
                    <button className="btn btn-primary w-100" disabled={cart.length === 0} onClick={handleSubmit}>
                      Comprar
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Carrito;
