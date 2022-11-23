-- Criterios: todo en minúscula, todos los subtipos para un mismo tipo en el mismo string.

CREATE TABLE IF NOT EXISTS heroku_bf7cb810553a372.`subtype` (
id INT PRIMARY KEY AUTO_INCREMENT, 
word_subtype1 VARCHAR(45),
word_subtype2 VARCHAR(45),
word_subtype3 VARCHAR(45),
word_subtype4 VARCHAR(45),
word_subtype5 VARCHAR(45),
FOREIGN KEY (`id`) REFERENCES heroku_bf7cb810553a372.`word` (`id`)
);

TRUNCATE TABLE heroku_bf7cb810553a372.`subtype`;

INSERT INTO heroku_bf7cb810553a372.`subtype` (`word_subtype1`, `word_subtype2`, `word_subtype3`, `word_subtype4`, `word_subtype5`) 
VALUES
("exceptuado","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("compuesto","","","",""),
("diminutivizado","","","",""),
("colectivizado","","","",""),
("relacional","","","",""),
("diminutivizado","","","",""),
("común","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("adversativa, exceptuada","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("aumentativizado","","","",""),
("relacional","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("condicional","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("aumentativizado","","","",""),
("relacional","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("invertido","","","",""),
("relacional","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("invertido","","","",""),
("relacional","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("aumentativizado","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("diminutivizado","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("común","","","",""),
("indefinido","","","",""),
("indefinido","cantidad","","",""),
("indefinido","cantidad","","",""),
("común","","","",""),
("relacional","","","",""),
("colectivizado","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("invertido, aumentativizado","","","",""),
("calificativo","","","",""),
("invertido, diminutivizado","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("aumentativizado","","","",""),
("relacional","","","",""),
("compuesto, aumentativizado","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("compuesto, invertido","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("propio, exceptuado","","","",""),
("propio, relacional","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("extranjerismo, exceptuado","","","",""),
("relacional, exceptuado","","","",""),
("extranjerismo, exceptuado","","","",""),
("relacional, exceptuado","","","",""),
("extranjerismo","","","",""),
("relacional","","","",""),
("ampliado","extranjerismo","","",""),
("compuesto, extranjerismo","","","",""),
("extranjerismo, exceptuado","","","",""),
("afirmación","","","",""),
("afirmación","","","",""),
("negación","","","",""),
("negación","","","",""),
("cantidad, modo","","","",""),
("cantidad, modo","","","",""),
("cantidad, modo","","","",""),
("cantidad, modo","","","",""),
("modo","","","",""),
("exceptuado","","","",""),
("comparativo","","","",""),
("comparativo","","","",""),
("comparativo","","","",""),
("común","","","",""),
("común","","","",""),
("comparativo","","","",""),
("común","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("relacional","","","",""),
("preposición","","","",""),
("modo","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("lugar","","","",""),
("lugar","","","",""),
("compuesto","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("calificativo","","","",""),
("tiempo","","","",""),
("tiempo","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("tiempo","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("dubitativo","","","",""),
("tiempo","","","",""),
("tiempo","copulativa","","",""),
("múltiple","interrogativo","impropia","",""),
("múltiple","interrogativo","","",""),
("relativo, interrogativo","","","",""),
("múltiple","interrogativo","","",""),
("múltiple","relativo, interrogativo","","",""),
("relativo, interrogativo","","","",""),
("relativo, interrogativo, exclamativo","","","",""),
("relativo, interrogativo","","","",""),
("exceptuado","","","",""),
("relacional","","","",""),
("exceptuado","","","",""),
("relacional","","","",""),
("copulativa","","","",""),
("copulativa","","","",""),
("exceptuado","","","",""),
("relacional","","","",""),
("compuesto, esdrujulización","","","",""),
("compuesto","","","",""),
("compuesto, esdrujulización","","","",""),
("compuesto, esdrujulización","","","",""),
("relacional, esdrujulización","","","",""),
("compuesto, esdrujulización","","","",""),
("relacional, esdrujulización","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("diminutivizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, diminutivizado","","","",""),
("relacional","","","",""),
("compuesto, diminutivizado","","","",""),
("relacional","","","",""),
("compuesto, diminutivizado","","","",""),
("relacional","","","",""),
("compuesto, diminutivizado","","","",""),
("relacional","","","",""),
("tiempo","","","",""),
("tiempo","","","",""),
("tiempo","","","",""),
("exceptuado","","","",""),
("calificativo","","","",""),
("exceptuado","","","",""),
("calificativo","","","",""),
("tiempo","","","",""),
("tiempo","","","",""),
("tiempo","","","",""),
("tiempo","","","",""),
("exceptuado","","","",""),
("calificativo","","","",""),
("lugar","","","",""),
("lugar","","","",""),
("común","","","",""),
("común","","","",""),
("lugar","","","",""),
("lugar","","","",""),
("común","","","",""),
("común","","","",""),
("lugar","","","",""),
("lugar","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("lugar","","","",""),
("lugar","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto, diminutivizado","","","",""),
("compuesto, diminutivizado, colectivizado","","","",""),
("compuesto, aumentativizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("colectivizado","","","",""),
("relacional","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("diminutivizado","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("aumentativizado","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("lugar, tiempo","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("lugar, tiempo","","","",""),
("común","","","",""),
("calificativo","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("relacional","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("aumentativizado","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("invertido, aumentativizado","","","",""),
("ampliado","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("colectivizado","","","",""),
("relacional","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("aumentativizado","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("aumentativizado","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("relacional","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("ampliado","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("ampliado","","","",""),
("aumentativizado","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("ampliado","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("compuesto","","","",""),
("tiempo","","","",""),
("tiempo","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto, invertido","","","",""),
("compuesto, ampliado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto, invertido","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("diminutivizado, colectivizado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, diminutivizado","","","",""),
("común","","","",""),
("común","","","",""),
("colectivizado","","","",""),
("diminutivizado","","","",""),
("ampliado","","","",""),
("diminutivizado, colectivizado","","","",""),
("compuesto","","","",""),
("aumentativizado","","","",""),
("compuesto","","","",""),
("ampliado","","","",""),
("aumentativizado, colectivizado","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("ampliado","","","",""),
("aumentativizado","","","",""),
("aumentativizado, colectivizado","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("compuesto","","","",""),
("compuesto, diminutivizado, colectivizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, diminutivizado","","","",""),
("compuesto, colectivizado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("invertido","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("extranjerismo","","","",""),
("extranjerismo, exceptuado","","","",""),
("común, propio","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("colectivizado","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("aumentativizado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("invertido","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("aumentativizado","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("invertido, aumentativizado","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("diminutivizado","","","",""),
("aumentativizado","","","",""),
("colectivizado","","","",""),
("colectivizado, aumentativizado","","","",""),
("compuesto","","","",""),
("compuesto, diminutivizado","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("colectivizado","","","",""),
("colectivizado, invertido","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("modo","","","",""),
("común","","","",""),
("común","","","",""),
("modo","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("invertido","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("colectivizado","","","",""),
("común","","","",""),
("invertido","","","",""),
("invertido, aumentativizado","","","",""),
("aumentativizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("aumentativizado","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("modo","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("modo","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("aumentativizado","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado, esdrujulización","","","",""),
("aumentativizado, esdrujulización","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, diminutivizado","","","",""),
("compuesto, aumentativizado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("común","","","",""),
("exceptuado","","","",""),
("colectivizado","","","",""),
("aumentativizado","","","",""),
("aumentativizado, colectivizado","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, aumentativizado","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("aumentativizado","","","",""),
("común","","","",""),
("común","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto, colectivizado","","","",""),
("compuesto","","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("indefinido","","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("exceptuado","cantidad","","",""),
("preposición","","","",""),
("común","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("común","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("común","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("común","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("preposición","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","","","",""),
("personal","determinado","","",""),
("indefinido","indeterminado","","",""),
("demostrativo","","","",""),
("común","indefinido","","",""),
("común","indefinido","","",""),
("común","indefinido","","",""),
("común","indefinido","","",""),
("demostrativo","cercano","","",""),
("demostrativo","lejano","","",""),
("común","impropia","","",""),
("impropia","","","",""),
("propia","","","",""),
("común","","","",""),
("relacional","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("ampliado","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("diminutivizado","","","",""),
("ampliado","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("invertido, diminutivizado","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("común","","","",""),
("común","","","",""),
("personal","","","",""),
("personal","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("común","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("común","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("aumentativizado","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("invertido, diminutivizado","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("colectivizado, aumentativizado","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("diminutivizado","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("común","","","",""),
("ampliado","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("ordinal","","","",""),
("ordinal","","","",""),
("relacional, exceptuado","","","",""),
("común","","","",""),
("común","","","",""),
("invertido","","","",""),
("ampliado","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("compuesto","","","",""),
("invertido","","","",""),
("relacional","","","",""),
("ordinal","","","",""),
("común","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("común","","","",""),
("ampliado","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("relacional, exceptuado","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("relacional, calificativo","","","",""),
("relacional","","","",""),
("invertido","","","",""),
("relacional","","","",""),
("común","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("común","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("modo","","","",""),
("compuesto, propio","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("aumentativizado","","","",""),
("ampliado","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("compuesto, propio","","","",""),
("común","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("propio, compuesto","","","",""),
("común","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("propio, compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("relacional","","","",""),
("diminutivizado","","","",""),
("diminutivizado","","","",""),
("compuesto","","","",""),
("común","","","",""),
("común","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("invertido","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("posesivo","","","",""),
("posesivo","","","",""),
("posesivo","","","",""),
("posesivo","","","",""),
("posesivo","","","",""),
("posesivo","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("común","tiempo","","",""),
("relacional","","","",""),
("relacional","","","",""),
("calificativo, exceptuado","","","",""),
("posesivo","","","",""),
("posesivo","","","",""),
("posesivo","","","",""),
("posesivo","","","",""),
("relacional","","","",""),
("compuesto","","","",""),
("compuesto","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("calificativo","","","",""),
("relacional","","","",""),
("calificativo","","","",""),
("compuesto","","","",""),
("colectivizado","","","",""),
("relacional","","","",""),
("relacional","","","",""),
("común","","","",""),
("común","","","",""),
("calificativo","","","",""),
("invertido","","","",""),
("calificativo","","","",""),
("común","","","","");

SELECT * FROM heroku_bf7cb810553a372.`subtype`;