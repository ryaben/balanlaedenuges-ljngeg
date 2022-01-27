var mysql = require('mysql');
const db_config = require('./mysql');
var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 3000);
    }
  });

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

function loadFullDictionary(req, res) {
    let view = req.url.split('/')[1];
    let query = 
    `SELECT 
    word.id,
    word.word_name,
    type.word_type1,
    type.word_type2,
    type.word_type3,
    type.word_type4,
    type.word_type5,
    subtype.word_subtype1,
    subtype.word_subtype2,
    subtype.word_subtype3,
    subtype.word_subtype4,
    subtype.word_subtype5,
    word.word_root
    FROM
	heroku_bf7cb810553a372.word
    INNER JOIN heroku_bf7cb810553a372.type ON word.id = type.id
    INNER JOIN heroku_bf7cb810553a372.subtype ON word.id = subtype.id;`;

    connection.query(query, function(error, result) {
        if (error) {
            return console.log("Hubo un error al cargar el diccionario: " + error.message);
        } else {
            res.render(view, {
                title: `Balanlàedenuges ljngeg - ${view.charAt(0).toUpperCase() + view.slice(1)}`,
                retrievedResults: JSON.stringify(result)
            });
        }
    });
}

function loadFilteredDictionary(req, res) {
    let whereSearch;
    let likeSearch;
    let view = req.url.split('/')[1];
    let query = 
    `SELECT 
    word.id,
    word.word_name,
    type.word_type1,
    type.word_type2,
    type.word_type3,
    type.word_type4,
    type.word_type5,
    subtype.word_subtype1,
    subtype.word_subtype2,
    subtype.word_subtype3,
    subtype.word_subtype4,
    subtype.word_subtype5,
    word.word_description,
    definition.word_definition1,
    definition.word_definition2,
    definition.word_definition3,
    definition.word_definition4,
    definition.word_definition5,
    example.word_example1,
    example.word_example2,
    example.word_example3,
    example.word_example4,
    example.word_example5,
    word.word_root
    FROM
	heroku_bf7cb810553a372.word
    INNER JOIN heroku_bf7cb810553a372.type ON word.id = type.id
    INNER JOIN heroku_bf7cb810553a372.subtype ON word.id = subtype.id
    INNER JOIN heroku_bf7cb810553a372.definition ON word.id = definition.id
    INNER JOIN heroku_bf7cb810553a372.example ON word.id = example.id`;

    switch (view) {
        case 'diccionario':
            likeSearch = `%${req.params.search}%`;
            break;
        case 'listado':
            likeSearch = `${req.params.search}%`;
            break;
        default:
            likeSearch = `%${req.params.search}%`;
            break;
    }

    if (req.query.limit == 1) {
        likeSearch = `${req.params.search}`;
    }

    switch (req.query.lang) {
        case 'bal':
            whereSearch = `word.word_name LIKE '${likeSearch}'`;
            break;
        case 'esp':
            whereSearch = `
            definition.word_definition1 LIKE '${likeSearch}'
            OR definition.word_definition2 LIKE '${likeSearch}'
            OR definition.word_definition3 LIKE '${likeSearch}'
            OR definition.word_definition4 LIKE '${likeSearch}'
            OR definition.word_definition5 LIKE '${likeSearch}'`;
            break;
        default:
            whereSearch = `word.word_name LIKE '${likeSearch}'`;
            break;
    }

    let queryFiltered = query + ` WHERE ${whereSearch} LIMIT 10000;`;

    connection.query(queryFiltered, function(error, result) {
        if (error) {
            return console.log("Hubo un error al cargar el diccionario: " + error.message);
        } else {
            res.render(view, {
                title: `Balanlàedenuges ljngeg - ${view.charAt(0).toUpperCase() + view.slice(1)}`,
                retrievedResults: JSON.stringify(result)
            });
        }
    });
}

module.exports = {
    loadFullDictionary: loadFullDictionary,
    loadFilteredDictionary: loadFilteredDictionary,
};