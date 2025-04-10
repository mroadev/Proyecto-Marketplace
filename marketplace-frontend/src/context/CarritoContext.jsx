import React, { createContext, useState, useEffect } from "react";

// Crear contexto
export const CarritoContext = createContext();

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde localStorage (si existe)
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {

    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === producto.id);

      if (existe) {
        return prevCart.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [
            ...prevCart, 
            { 
              id: producto.id, 
              nombre: producto.title, 
              precio: producto.price, 
              cantidad: 1,
              envio: producto.envio 
            }
        ];
      }
    });
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  // Obtener cantidad total de productos
  const cantidadTotal = cart.reduce((total, item) => total + item.cantidad, 0);

  // Agrega estos cálculos para el resumen:
  const subtotal = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  // Si tienes distintos valores de envío, puedes sumar todos, o dejarlo fijo
  const envio = cart.length > 0 ? Math.max(...cart.map((item) => item.envio || 0)) : 0;

  const total = subtotal + envio;

  return (
    <CarritoContext.Provider value={{ cart, setCart, agregarAlCarrito, vaciarCarrito, cantidadTotal, subtotal, envio, total }}>
      {children}
    </CarritoContext.Provider>
  );
};
