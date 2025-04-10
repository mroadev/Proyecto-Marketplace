// Lista de productos
export const products = [
  // Electrónica
  {
    id: 1,
    image: "https://picsum.photos/600/400?random=1",
    images: [
      "https://picsum.photos/100/100?random=11",
      "https://picsum.photos/100/100?random=12",
      "https://picsum.photos/100/100?random=13",
      "https://picsum.photos/100/100?random=14"
    ],
    title: "Smartphone XYZ",
    description: "Un potente smartphone con pantalla AMOLED y cámara de 64MP.",
    price: 250000,
    category: "Electrónica",
    stock: 15,
    seller: "TechWorld",
    date: "2025-03-28",
    envio: 0
  },
  // Ropa
  {
    id: 2,
    image: "https://picsum.photos/600/400?random=2",
    images: [
      "https://picsum.photos/100/100?random=21",
      "https://picsum.photos/100/100?random=22",
      "https://picsum.photos/100/100?random=23",
      "https://picsum.photos/100/100?random=24"
    ],
    title: "Chaqueta de Cuero",
    description: "Chaqueta de cuero genuino con forro térmico, ideal para invierno.",
    price: 120000,
    category: "Ropa",
    stock: 8,
    seller: "Moda Estilo",
    date: "2025-03-27",
    envio: 5000
  },
  // Hogar
  {
    id: 3,
    image: "https://picsum.photos/600/400?random=3",
    images: [
      "https://picsum.photos/100/100?random=31",
      "https://picsum.photos/100/100?random=32",
      "https://picsum.photos/100/100?random=33",
      "https://picsum.photos/100/100?random=34"
    ],
    title: "Set de Ollas Antiadherentes",
    description: "Juego de 5 ollas de aluminio con revestimiento antiadherente.",
    price: 80000,
    category: "Hogar",
    stock: 20,
    seller: "Casa & Hogar",
    date: "2025-03-26",
    envio: 8000
  },
  // Deportes
  {
    id: 4,
    image: "https://picsum.photos/600/400?random=4",
    images: [
      "https://picsum.photos/100/100?random=41",
      "https://picsum.photos/100/100?random=42",
      "https://picsum.photos/100/100?random=43",
      "https://picsum.photos/100/100?random=44"
    ],
    title: "Bicicleta Montañera",
    description: "Bicicleta todo terreno con suspensión delantera y 21 velocidades.",
    price: 400000,
    category: "Deportes",
    stock: 5,
    seller: "BikeShop",
    date: "2025-03-25",
    envio: 0
  },
  // Juguetes
  {
    id: 5,
    image: "https://picsum.photos/600/400?random=5",
    images: [
      "https://picsum.photos/100/100?random=51",
      "https://picsum.photos/100/100?random=52",
      "https://picsum.photos/100/100?random=53",
      "https://picsum.photos/100/100?random=54"
    ],
    title: "Set de Bloques de Construcción",
    description: "Juego de construcción con 500 piezas para estimular la creatividad.",
    price: 50000,
    category: "Juguetes",
    stock: 12,
    seller: "Juguetería Mágica",
    date: "2025-03-24",
    envio: 4000
  },
  // Automóviles
  {
    id: 6,
    image: "https://picsum.photos/600/400?random=6",
    images: [
      "https://picsum.photos/100/100?random=61",
      "https://picsum.photos/100/100?random=62",
      "https://picsum.photos/100/100?random=63",
      "https://picsum.photos/100/100?random=64"
    ],
    title: "Llantas Deportivas 17''",
    description: "Juego de 4 llantas de aleación para mejorar el rendimiento del vehículo.",
    price: 300000,
    category: "Automóviles",
    stock: 6,
    seller: "AutoShop",
    date: "2025-03-18",
    envio: 10000
  },
  // Muebles
  {
    id: 7,
    image: "https://picsum.photos/600/400?random=7",
    images: [
      "https://picsum.photos/100/100?random=71",
      "https://picsum.photos/100/100?random=72",
      "https://picsum.photos/100/100?random=73",
      "https://picsum.photos/100/100?random=74"
    ],
    title: "Sofá de Cuero",
    description: "Sofá de tres plazas con cuero premium y estructura reforzada.",
    price: 700000,
    category: "Muebles",
    stock: 3,
    seller: "DecoHogar",
    date: "2025-03-22",
    envio: 7000
  },
  // Libros
  {
    id: 8,
    image: "https://picsum.photos/600/400?random=8",
    images: [
      "https://picsum.photos/100/100?random=81",
      "https://picsum.photos/100/100?random=82",
      "https://picsum.photos/100/100?random=83",
      "https://picsum.photos/100/100?random=84"
    ],
    title: "El Arte de la Programación",
    description: "Un libro esencial para dominar las estructuras de datos y algoritmos.",
    price: 35000,
    category: "Libros",
    stock: 25,
    seller: "Librería Tech",
    date: "2025-03-20",
    envio: 0
  },
  // Alimentos
  {
    id: 9,
    image: "https://picsum.photos/600/400?random=9",
    images: [
      "https://picsum.photos/100/100?random=91",
      "https://picsum.photos/100/100?random=92",
      "https://picsum.photos/100/100?random=93",
      "https://picsum.photos/100/100?random=94"
    ],
    title: "Caja de Frutas Orgánicas",
    description: "Selección de frutas frescas de producción orgánica.",
    price: 20000,
    category: "Alimentos",
    stock: 30,
    seller: "EcoFrutas",
    date: "2025-03-19",
    envio: 6000
  },
  // Salud
  {
    id: 10,
    image: "https://picsum.photos/600/400?random=10",
    images: [
      "https://picsum.photos/100/100?random=101",
      "https://picsum.photos/100/100?random=102",
      "https://picsum.photos/100/100?random=103",
      "https://picsum.photos/100/100?random=104"
    ],
    title: "Suplemento Multivitamínico",
    description: "Complejo vitamínico para reforzar el sistema inmunológico.",
    price: 45000,
    category: "Salud",
    stock: 40,
    seller: "Vida Sana",
    date: "2025-03-18",
    envio: 5000
  }
];
