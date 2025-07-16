const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
});

connection.connect(err => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Conectado!');
    connection.end();
});