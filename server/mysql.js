var db_config = {
  host: 'us-cdbr-east-05.cleardb.net',
  port: '3306',
  user: process.env.CLEARDB_DATABASE_USER,
  password: process.env.CLEARDB_DATABASE_PASSWORD,
  database: 'heroku_bf7cb810553a372',
  multipleStatements: true
};

module.exports = db_config;