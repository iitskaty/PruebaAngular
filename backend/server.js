const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Rutas
const bibliotecaRoutes = require('./routes/bibliotecadigital');
app.use('/', bibliotecaRoutes);

app.listen(port, () => {
  console.log("Servidor Express corriendo en http://localhost:${port}");
});