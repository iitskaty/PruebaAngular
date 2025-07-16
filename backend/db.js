const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'biblioteca'
});

connection.connect((err) =>{
    if (err) {
        console.error('Error conectado a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

module.exports = connection;