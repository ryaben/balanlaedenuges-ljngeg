const dictionaryQuery = 
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

module.exports = dictionaryQuery;