var connection= require('./mysql');

function loadDictionary(req, res) {
    var query = `
    SELECT 
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
    INNER JOIN dictionary.meaning ON word.id = meaning.word_id;
    `

    connection.query(query, function(error, result) {
        if (error) {
            return alert("Hubo un error al cargar el diccionario: " + error.message);
        } else {
            console.log(result);
            res.send(JSON.stringify(result));
        }
    });
}

module.exports = {
    loadDictionary: loadDictionary,
};