var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  port: '3306',
  user: 'b0dd19ff59d876',
  password: '48dd8f8ab07676e',
  database: 'heroku_bf7cb810553a372',
  multipleStatements: true
});

module.exports = connection;