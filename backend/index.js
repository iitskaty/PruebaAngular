const express = require('express');
const app = express();
const rutas = require('./routes/bibliotecadigital');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', rutas);

app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor backend corriendo en http://0.0.0.0:3000');
});