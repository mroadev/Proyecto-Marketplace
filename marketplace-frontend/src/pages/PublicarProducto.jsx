import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories"; // Importamos las categorías

const PublicarProducto = () => {
  const [imagenes, setImagenes] = useState([]);
  const [imagenPrincipal, setImagenPrincipal] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const categorias = categories.filter((cat) => cat !== "Todos los productos");

  const handleAgregarImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagenes([...imagenes, imageUrl]);
      if (!imagenPrincipal) {
        setImagenPrincipal(imageUrl);
      }
    }
  };

  const handlePublicar = () => {
    console.log({
      titulo,
      precio,
      stock,
      categoria,
      descripcion,
      imagenes,
      imagenPrincipal,
    });
  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="card w-75 shadow-lg p-3">
        
        {/* Encabezado */}
        <div className="bg-light p-3 mb-3 border rounded shadow-sm d-flex align-items-center">
            <Link to="/" className="text-primary text-decoration-none me-2">Volver</Link>
            <span className="text-muted fw-bold">| Publicar {'>'} Producto</span>
        </div>

        {/* Contenido */}
        <div className="card-body d-flex">
          {/* Sub Card Izquierda (Imágenes) */}
          <div className="card flex-grow-1 p-3 me-3">
            <div className="row">
                {/* Imágenes pequeñas */}
                <div className="col-3 d-flex flex-column justify-content-between">
                    <div className="border rounded d-flex align-items-center justify-content-center" style={{ height: "70px", width: "70px", background: "#f8f9fa" }}>
                        <span className="text-muted">+1</span>
                    </div>   
                    <div className="border rounded d-flex align-items-center justify-content-center" style={{ height: "70px", width: "70px", background: "#f8f9fa" }}>
                        <span className="text-muted">+2</span>
                    </div>
                    <div className="border rounded d-flex align-items-center justify-content-center" style={{ height: "70px", width: "70px", background: "#f8f9fa" }}>
                        <span className="text-muted">+3</span>
                    </div>
                    <div className="border rounded d-flex align-items-center justify-content-center" style={{ height: "70px", width: "70px", background: "#f8f9fa" }}>
                        <span className="text-muted">+4</span>
                    </div>
                </div>
                {/* Imagen Principal */}
                <div className="col-9">
                    <div className="border rounded d-flex align-items-center justify-content-center" style={{ height: "300px", background: "#f8f9fa" }}>
                        <span className="text-muted">Sin imagen</span>
                    </div>
                </div>
            </div>
            {/* Botón Agregar Imagen */}
            <button className="btn btn-outline-primary mt-3 w-100">
                Agregar Imagen
            </button>
          </div>

          {/* Sub Card Derecha (Formulario) */}
          <div className="card flex-grow-1 p-3 position-relative">
            {/* Formulario */}
            <form onSubmit={handlePublicar}>
                <label className="fw-bold mt-2">Título</label>
                <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                <label className="fw-bold mt-2">Precio</label>
                <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />

                <label className="fw-bold mt-2">Stock</label>
                <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} />

                <label className="fw-bold mt-2">Categoría</label>
                <select className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Seleccionar...</option>
                {categorias.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
                </select>

                <label className="fw-bold mt-2">Descripción</label>
                <textarea className="form-control" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                
                {/* Botón Publicar */}
                <button className="btn btn-success w-100 mt-3">Publicar</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PublicarProducto;
