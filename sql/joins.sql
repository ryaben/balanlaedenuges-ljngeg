SELECT 
    word.id,
    word.word_name,
    `type`.word_type,
    `type`.word_subtype,
    word.word_description,
    meaning.word_definition,
    meaning.word_example,
    word.word_root
FROM
	dictionary.word
INNER JOIN dictionary.`type` ON word.id = `type`.word_id
INNER JOIN dictionary.meaning ON word.id = meaning.word_id;