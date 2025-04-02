import { useState } from "react";
import { products } from "../data/products"; // Importamos los productos
import { categories } from "../data/categories"; // Importamos las categorías
import Card from "../components/Card";
// import DetalleProductoModal from "../components/DetalleProductoModal/DetalleProductoModal"; // Importamos el modal

const Publicaciones = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos los productos"); // Estado para la categoría seleccionada
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  // Función para filtrar productos por categoría, título, descripción y categoría
  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === "Todos los productos" || product.category === selectedCategory;
    
    // Comprobar si el término de búsqueda está en el título, descripción o categoría
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()); // Filtra también por categoría

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mt-5">
      {/* 🔹 Encabezado */}
      <div className="bg-light p-2 mb-3 border rounded shadow-sm d-flex align-items-center justify-content-between">
        <span className="text-muted fw-bold">Tienda {'>'} Publicaciones</span>
        <div className="d-flex" style={{ width: "50%" }}> {/* Ajustar ancho del contenedor */}
          <input
            type="text"
            className="form-control me-2 shadow-sm border-1 rounded"
            placeholder="Buscar productos..."
            value={searchTerm} // Vinculamos el valor al estado de búsqueda
            onChange={(e) => setSearchTerm(e.target.value)} // Actualizamos el término de búsqueda
          />
          <button className="btn btn-primary">Buscar</button>
        </div>
      </div>

      <div className="row">
        {/* Categorías */}
        <div className="col-md-3">
          <h6>Categorías</h6>
          <ul className="list-group">
            {categories.map((category) => (
              <li
                key={category}
                className={`list-group-item ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Lista de productos */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 mt-4">
                <Card
                  id={product.id} // Se pasa el id del producto
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  // onDetail={() => handleOpenModal(product)} // Abre el modal
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publicaciones;