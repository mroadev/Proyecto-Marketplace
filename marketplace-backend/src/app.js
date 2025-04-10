// src/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas (ejemplo)
const testRoutes = require('./routes/test.routes');
app.use('/api', testRoutes);

// Exportar el objeto app para usarlo en las pruebas
module.exports = app; // <-- ¡Importante!

// Inicializar el servidor solo si el archivo se ejecuta directamente
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}