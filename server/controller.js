const connection = require('./mysql');

function loadDictionary(req, res) {
    let whereSearch;
    let likeSearch;
    let view = req.url.split('/')[1];

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

    switch (req.query.lang) {
        case 'bal':
            whereSearch = 'word.word_name';
            break;
        case 'esp':
            whereSearch = 'meaning.word_definition';
            break;
        default:
            whereSearch = 'word.word_name';
            break;
    }

    let query = 
    `SELECT
    word.id,
    word.word_name,
    type.word_type,
    type.word_subtype,
    word.word_description,
    meaning.word_definition,
    meaning.word_example,
    word.word_root
    FROM
    dictionary.word
    INNER JOIN dictionary.type ON word.id = type.word_id
    INNER JOIN dictionary.meaning ON word.id = meaning.word_id
    WHERE ${whereSearch} LIKE '${likeSearch}'
    LIMIT 100000;`

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

module.exports = {
    loadDictionary: loadDictionary,
};