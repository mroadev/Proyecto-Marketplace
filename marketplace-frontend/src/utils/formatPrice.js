export const formatPrice = (price) => {
    return price
      .toFixed(2) // Asegura que el precio tenga 2 decimales
      .replace('.', ',') // Reemplaza el punto decimal por una coma
      .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Reemplaza las comas por puntos para separar miles
  };