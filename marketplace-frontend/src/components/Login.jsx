import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirigir si el usuario ya está autenticado
  useEffect(() => {
    if (usuario) {
      navigate("/"); // Redirige al home solo cuando usuario cambia
    }
  }, [usuario, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de autenticación (esto se reemplazará con una API en el futuro)
    const usuarioAutenticado = login(email, password);

    if (!usuarioAutenticado) {
      alert("Credenciales incorrectas. Intente de nuevo.");
    }

  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <div className="card-body">
            
          {/* Título de Bienvenida */}
          <h3 className="text-center mb-4">
            <span>Bienvenido a tu</span><br />
            <span>Marketplace</span>
          </h3>

          {/* Input de correo electrónico */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Ingresa tu correo electrónico</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Input de contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Ingresa tu contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Botón Ingresar */}
          <button className="btn btn-primary w-100 mb-3" onClick={handleSubmit}>
            Ingresar
          </button>

          {/* Link de recuperar contraseña */}
          <div className="text-center mb-3">
            <a href="/recuperar-contraseña">Recuperar Contraseña</a>
          </div>

          {/* Línea horizontal */}
          <hr />

          {/* Texto de no tienes cuenta */}
          <div className="text-center mb-3">
            <p>¿No tienes una Cuenta?</p>
          </div>

          {/* Botón para registrarse */}
          <div className="d-grid gap-2 mb-3">
            <Link className="btn btn-outline-secondary w-100" to="/crear-cuenta">
              Registrarte aquí
            </Link>
          </div>

          {/* Botón Volver */}
          <div className="d-grid gap-2 justify-content-center">
            <Link to="/"  className="btn btn-outline-secondary px-4">
              Volver
            </Link>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Login;
