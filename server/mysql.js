var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'FretsOnFire100',
  database: 'dictionary',
  multipleStatements: true
});

module.exports = connection;