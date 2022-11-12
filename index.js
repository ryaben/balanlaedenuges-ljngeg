//Declaraciones
const express = require('express');
// const controller = require('./server/controller');
const expressLayouts = require('express-ejs-layouts');
const http = require('http');
const app = express();
const port = 5000;

//Controller, cargar el diccionario indistintamente de la ruta
var mysql = require('mysql');
const db_config = require('./server/mysql');
var connection = mysql.createConnection(db_config);
var dictionary;
const query = 
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

//Intenta obtener el diccionario si ya fue cargado en la sesión, sino llama a la DB.
try {
    dictionary = sessionStorage.getItem("dictionary");
} catch {
    connection.connect(function (err) {
        if (err) {
            console.log('Error when connecting to DB:', err);
        } else {
            connection.query(query, function(error, result) {
                if (error) {
                    return console.log("Error while loading dictionary: " + error.message);
                } else {
                    return dictionary = JSON.stringify(result);
                }
            });
        }
    });

    //Cuando el servidor desconecte a la app, destruye la conexión (el diccionario ya está guardado en la sesión local)
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            connection.destroy();
        } else {
            throw err;
        }
    });
}

//Heroku stuff
app.use(express.static(__dirname));
app.use(expressLayouts);

//Server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
});

//Sets del express-ejs-layouts
app.set('layout', './layouts/normal');
app.set('view engine', 'ejs');

//Rutas
app.get('/', (req, res) => {
    res.render('home', {
        title: `Balanlàedenuges ljngeg - Inicio`,
        retrievedResults: dictionary
    });
});
app.get('/diccionario/:search', (req, res) => {
    res.render('diccionario', {
        title: `Balanlàedenuges ljngeg - Diccionario`,
        retrievedResults: dictionary
    });
});
app.get('/listado/:search', (req, res) => {
    res.render('listado', {
        title: `Balanlàedenuges ljngeg - Listado`,
        retrievedResults: dictionary
    });
});
app.get('/:name', (req, res) => {
    let capitalizedName = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);
    res.render(req.params.name, {
        title: `Balanlàedenuges ljngeg - ${capitalizedName}`,
        retrievedResults: dictionary
    });
});

//Agregado de process.env.PORT para Heroku
app.listen(process.env.PORT || port, () => {
    console.log(`Now listening on port ${port}`);
});