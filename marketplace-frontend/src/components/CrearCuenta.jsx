import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import ConfirmarRegistroModal from "./ConfirmarRegistroModal";

const CrearCuenta = () => {
  const { registrarUsuario } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    contrasena: '',
    repetirContrasena: '',
  });

  // Manejador para los cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contrasena !== formData.repetirContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Aquí se agrega la lógica de registro:
    const usuarioData = {
      nombre: formData.nombre,
      email: formData.email,
      contrasena: formData.contrasena,
      telefono: formData.telefono || null,
      direccion: formData.direccion || null,
      rol: "Cliente",
      fecha_registro: new Date().toISOString(),
    };

    registrarUsuario(usuarioData);

    setShowModal(true); // Muestra el modal al registrarse
  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">

          {/* Título de Bienvenida */}
          <h3 className="text-center mb-4">
            <span>Regístrate en tu</span><br />
            <span>Marketplace</span>
          </h3>

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
            {/* Campo para Nombre */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            {/* Campo para Teléfono */}
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            {/* Campo para Correo Electrónico */}
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Campo para Dirección */}
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>

            {/* Campo para Contraseña */}
            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="contrasena"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                required
              />
            </div>

            {/* Campo para Repetir Contraseña */}
            <div className="mb-3">
              <label htmlFor="repetirContrasena" className="form-label">
                Repetir Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="repetirContrasena"
                name="repetirContrasena"
                value={formData.repetirContrasena}
                onChange={handleChange}
                required
              />
            </div>

            {/* Botón Continuar */}
            <div className="d-grid gap-2 mb-3">
            <button type="submit" className="btn btn-primary">Continuar</button>
              {/* <Link to="/confirmacion-registro" className="btn btn-primary">
                Continuar
              </Link> */}
            </div>

          </form>
          {/* Botón Volver */}
          <div className="d-grid gap-2 justify-content-center">
            <Link to="/" className="btn btn-outline-secondary px-4" >
                Volver
            </Link>
          </div>

            {/* Modal de Confirmación */}
            <ConfirmarRegistroModal show={showModal} onClose={() => setShowModal(false)} />
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
