import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice"; // Importamos la función de formateo

const Card = ({ id, image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold text-success">Precio: $ {formatPrice(price)}</p>
        {/* Botón para abrir el modal en lugar de redirigir */}
        {/* <button onClick={onDetail} className="btn btn-primary w-100">
          Ver Detalle
        </button> */}
        {/* Link a la página de detalle del producto */}
        <Link to={`/producto/${id}`} className="btn btn-primary w-100">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // onDetail: PropTypes.func.isRequired, // Nueva prop para abrir el modal
};

export default Card;
