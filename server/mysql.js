const envVars = require("./environment-variables");

var db_config = {
  host: 'us-cdbr-east-05.cleardb.net',
  port: '3306',
  user: envVars.databaseUser,
  password: envVars.databasePassword,
  database: 'heroku_bf7cb810553a372',
  multipleStatements: true
};

module.exports = db_config;