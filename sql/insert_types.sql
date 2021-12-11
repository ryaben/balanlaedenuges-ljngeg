-- Criterios: primer tipo con mayúscula, el resto no.

CREATE TABLE IF NOT EXISTS `dictionary`.`type` (
id INT PRIMARY KEY AUTO_INCREMENT, 
word_type1 VARCHAR(45),
word_type2 VARCHAR(45),
word_type3 VARCHAR(45),
word_type4 VARCHAR(45),
word_type5 VARCHAR(45),
FOREIGN KEY (`id`) REFERENCES `dictionary`.`word` (`id`)
);

TRUNCATE TABLE `dictionary`.`type`;

INSERT INTO `dictionary`.`type` (`word_type1`, `word_type2`, `word_type3`, `word_type4`, `word_type5`) 
VALUES
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Conjunción","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Conjunción","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Pronombre","","","",""),
("Pronombre","adverbio","","",""),
("Pronombre","adverbio","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adposición","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Adjetivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","conjunción","","",""),
("Conjunción","pronombre","interjección","",""),
("Adverbio","","","",""),
("Pronombre","","","",""),
("Conjunción","adverbio","","",""),
("Conjunción","adverbio","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Conjunción","","","",""),
("Conjunción","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adverbio","","","",""),
("Adverbio","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Adverbio","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Pronombre","","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Sustantivo","adverbio","","",""),
("Adposición","","","",""),
("Contracción","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Contracción","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Contracción","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Contracción","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Adposición","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Pronombre","artículo","","",""),
("Pronombre","artículo","","",""),
("Pronombre","","","",""),
("Contracción","pronombre","","",""),
("Contracción","pronombre","","",""),
("Contracción","pronombre","","",""),
("Contracción","pronombre","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Contracción","interjección","","",""),
("Interjección","","","",""),
("Interjección","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Verbo","","","",""),
("Pronombre","","","",""),
("Pronombre","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Verbo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","",""),
("Adjetivo","","","",""),
("Adjetivo","","","",""),
("Sustantivo","","","","");

SELECT * FROM `dictionary`.`type`;