import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Perfil = () => {
  const { usuario, setUsuario } = useContext(AuthContext); // Obtener usuario autenticado
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  // Cargar datos del usuario al iniciar
  useEffect(() => {
    if (usuario) {
      setFormData({
        nombre: usuario.nombre || "",
        telefono: usuario.telefono || "",
        email: usuario.email || "", // No se debe modificar
        direccion: usuario.direccion || "",
        contrasena: usuario.contrasena || "",
      });
    }
  }, [usuario]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Guardar cambios
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario) {
      alert("No hay usuario autenticado.");
      return;
    }

    // Obtener lista de usuarios guardados
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Actualizar datos del usuario en la lista
    const usuariosActualizados = usuariosGuardados.map((u) =>
      u.email === usuario.email ? { ...u, ...formData } : u
    );

    // Guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
    localStorage.setItem("usuario", JSON.stringify({ ...usuario, ...formData }));

    // Actualizar el estado global
    setUsuario({ ...usuario, ...formData });

    alert("Perfil actualizado correctamente.");

    // Redirigir al usuario a la página de inicio
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Perfil</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" id="correo" name="correo" value={formData.email} disabled />
            </div>

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input type="text" className="form-control" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Dirección</label>
              <input type="text" className="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="contrasena" name="contrasena" value={formData.contrasena} onChange={handleChange} required />
            </div>

            <div className="d-grid gap-2 mb-3">
              <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </div>
          </form>

          <div className="d-grid gap-2 justify-content-center">
            <Link to="/" className="btn btn-outline-secondary px-4">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
