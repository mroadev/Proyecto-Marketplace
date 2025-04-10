import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ConfirmarRegistroModal = ({ show, onClose }) => {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleVolver = () => {
    onClose();  // Cierra el modal
    navigate("/"); // Redirige a la ruta "/"
  };

  return (
    <div className={`modal fade ${show ? "show d-block" : "d-none"}`} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center p-1">
          <div className="modal-header border-1 p-2">
            <h6 className="modal-title">Confirmación de Registro</h6>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {/* Ícono de Confirmación */}
            <CheckCircle size={50} color="green" className="mb-3" />
            
            <h4>Te has registrado exitosamente</h4>
          </div>
          <div className="modal-footer border-0 d-flex justify-content-center">
            <button className="btn btn-outline-secondary w-auto" onClick={handleVolver}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarRegistroModal;
