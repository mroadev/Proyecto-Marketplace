import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from "lucide-react";

const ConfirmacionRegistro = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body text-center">
            {/* Ícono de Confirmación */}
            <div className="mb-3">
                <CheckCircle size={50} color="green" />
            </div>

            {/* Texto de confirmación */}
            <h5 className="mt-4 mb-4">Te has registrado exitosamente</h5>

            {/* Botón Volver */}
            <div className="d-grid gap-2 justify-content-center">
                <Link to="/" className="btn btn-outline-secondary px-4">
                    Volver
                </Link>
            </div>  
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionRegistro;
