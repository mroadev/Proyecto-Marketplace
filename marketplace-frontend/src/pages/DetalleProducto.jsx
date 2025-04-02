import React from "react";
import { useParams, Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { products } from "../data/products"; // Importamos los productos
import { formatPrice } from "../utils/formatPrice"; // Importamos la función de formateo

const DetalleProducto = () => {
  const { id } = useParams(); // Obtener el id desde la URL
  const producto = products.find((p) => p.id === parseInt(id)); // Buscar producto

  if (!producto) {
    return <h2 className="text-center mt-5">Producto no encontrado</h2>;
  }

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="card w-75 shadow-lg p-3">
        {/* Encabezado */}
        <div className="bg-light p-3 mb-3 border rounded shadow-sm d-flex align-items-center">
          <Link to="/" className="text-primary text-decoration-none me-2">Volver</Link>
          <span className="text-muted fw-bold">| Tienda {'>'} Publicaciones {'>'} Detalle de Producto</span>
        </div>

        {/* Contenido */}
        <div className="card-body d-flex">
          {/* Sub Card Izquierda - Imágenes */}
          <div className="card flex-grow-1 p-3 me-3">
            <div className="row">
              {/* Imágenes pequeñas */}
              <div className="col-2 d-flex flex-column justify-content-between">
                {producto.images.map((img, index) => (
                  <img key={index} src={img} alt={`Imagen ${index + 1}`} className="img-fluid mb-2 rounded" />
                ))}
              </div>
              {/* Imagen Principal */}
              <div className="col-10">
                <img src={producto.image} alt="Imagen Principal" className="img-fluid rounded" />
              </div>
            </div>
            {/* Título del Producto */}
            <h4 className="text-center mt-3">{producto.title}</h4>
          </div>

          {/* Sub Card Derecha - Detalles */}
          <div className="card flex-grow-1 p-3 position-relative">
            {/* Ícono de Corazón */}
            <Heart className="position-absolute top-0 end-0 m-3 text-danger" size={24} />

            {/* Información del producto */}
            <h2 className="mt-3">{producto.title}</h2>
            <p>{producto.description}</p>
            <p><strong>Unidades disponibles:</strong> {producto.stock}</p>

            {/* Precio */}
            <h3 className="text-center text-primary my-3">$ {formatPrice(producto.price)}</h3>

            {/* Información del usuario y fecha */}
            <p><strong>Publicado por:</strong></p>
            <p className="text-end">{producto.seller}</p>
            <p><strong>Fecha publicación:</strong></p>
            <p className="text-end">{producto.date}</p>

            {/* Botón Agregar al carrito */}
            <button className="btn btn-success w-100 mt-3">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
