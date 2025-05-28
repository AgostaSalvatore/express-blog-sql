//importo mysql2
const mysql = require('mysql2');

//creo la variabile per la connessione al database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'ciaociao',
    database: 'db_blog'
});

//utilizzo la variabile per instaurare una connessione
connection.connect(() => {
    console.log('Connected to MySQL!')
})

module.exports = connection;
