/*Raya: —

Leyenda:
ling. Lingüística
despect. Despectivo
obs. Obsoleto
relig. Religioso
coloq. Coloquialismo
tec. Técnicismo
neo. Neologismo
*/

var wordDatabase = {
    "palabras": [
        {
            "palabra": "Äw",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Haber."
            ],
            "ejemplos": [
                "Froj gölj<u>àw</u> tö kefjegen."
            ],
            "raiz": "Äw"
        },
        {
            "palabra": "Fejfeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Palabra, vocablo, modismo.",
                "coloq. Testimonio."
            ],
            "ejemplos": [
                "Klaej <u>fejfeg</u>en göljkàj üke knöjsjònuges.",
                "Kjaes <u>fejfeg</u> göljtàjklar öl."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Fejfeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a palabra'",
            "acepciones": [
                "Verbal (perteneciente a la comunicación con palabras)."
            ],
            "ejemplos": [//TODO: mensaje
                "Fülwuj waej kefjegen tröljlàewün kjaes <u>fejfeges</u> mensaje."
            ],
            "raiz": "Fejfeg"
        },
        {
            "palabra": "Fejfar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Escribir, redactar."
            ],
            "ejemplos": [],
            "raiz": "Fejf"
        },
        {
            "palabra": "Fejflĵneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fejfeg' y 'Ljneg', lit. 'Línea de palabras'",
            "acepciones": [
                "Renglón, línea (de texto)."
            ],
            "ejemplos": [
                "Klaej ljneg göljtàg tjö <u>fejflĵnegen</u>."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Fejfeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Palabra pequeña'",
            "acepciones": [
                "Letra, carácter, grafema."
            ],
            "ejemplos": [
                "Waej <u>fejfeget</u> 'c' jkë göljkàj wjlaej balanlàedenuges ljngeg."
            ],
            "raiz": "Fejfeg"
        },
        {
            "palabra": "Fejfegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de palabras'",
            "acepciones": [
                "Oración, frase (escrita o hablada).",
                "Locución, enunciado."
            ],
            "ejemplos": [
                "Traej <u>fejfegon</u> göljkàj frejegafes faer fejfar."
            ],
            "raiz": "Fejfeg"
        },
        {
            "palabra": "Fejfegures",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a colectivo de palabras'",
            "acepciones": [
                "Oracional, locutivo, enunciativo."
            ],
            "ejemplos": [
                "Kon kläsj'al-fejfar knaejteg <u>fejfegures</u>."
            ],
            "raiz": "Fejfeg"
        },
        {
            "palabra": "Fejfuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Texto pequeño'",
            "acepciones": [
                "Párrafo.",
                "Recorte o pasaje de un texto."
            ],
            "ejemplos": [],
            "raiz": "Fejfug"
        },
        {
            "palabra": "Fejfug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Texto, escrito, obra literaria."
            ],
            "ejemplos": [
                "Öl gägulfèjfar öles <u>fejfug</u>."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Fejfaurkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fejfug', 'Aurag' y 'Kjgeg', lit. 'Lugar de reunión de textos'",
            "acepciones": [
                "Biblioteca."
            ],
            "ejemplos": [
                "Ölugen göljklàsj-kaj kulkeges wjlaej <u>fejfaurkĵgeg</u>."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Fejfaurkĵgeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Fejfug', 'Aurag' y 'Kjgeg', lit. 'Relativo a lugar de reunión de textos'",
            "acepciones": [
                "Bibliotecario (perteneciente a la biblioteca)."
            ],
            "ejemplos": [
                "Öl göljglàs waej <u>fejfaurkĵgeges</u> ärgugen."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Fejfkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fejfug' y 'Kjgeg', lit. 'Lugar de textos'",
            "acepciones": [
                "Librería, tienda de libros."
            ],
            "ejemplos": [
                "Wjlaej <u>fejfkĵgeg</u> öl tröljlùjkar kones fejfug."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Fejfànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "De 'Fejfar' y 'Anördnug', lit. 'Máquina para escribir'",
            "acepciones": [
                "Máquina de escribir."
            ],
            "ejemplos": [
                "Klaej <u>fejfànördnug</u> göljkàj tjl 1930."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Rjgëlar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dibujar, retratar.",
                "Graficar, esquematizar."
            ],
            "ejemplos": [],
            "raiz": "Rjgël"
        },
        {
            "palabra": "Rjgëlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dibujo, retrato, obra artística.",
                "Gráfico, esquema."
            ],
            "ejemplos": [],
            "raiz": "Rjgël"
        },
        {
            "palabra": "Rjgëlkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Rjgëlug' y 'Kefjeg', lit. 'Persona que dibuja'",
            "acepciones": [
                "Dibujante, ilustrador."
            ],
            "ejemplos": [
                "Kjae göljkàj knaej <u>rjgëlkèfjeg</u>."
            ],
            "raiz": "Rjgël"
        },
        {
            "palabra": "Lajtrĵgëlar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lajteg' y 'Rjgëlar', lit. 'Dibujar con luz'",
            "acepciones": [
                "Fotografiar, capturar (con cámara fotográfica)."
            ],
            "ejemplos": [
                "Öl jkë göljglàs-kaj-<u>lajtrĵgëlar</u>es."
            ],
            "raiz": "Lajt"
        },
        {
            "palabra": "Lajtrĵgëlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lajteg' y 'Rjgëlug', lit. 'Dibujo de luz'",
            "acepciones": [
                "tec. Fotografía, foto, daguerrotipo (imagen obtenida por luz)."
            ],
            "ejemplos": [
                "Kon göljsfàej-alar ölegen wän <u>lajtrĵgëlug</u>?"
            ],
            "raiz": "Lajt"
        },
        {
            "palabra": "Lajtrĵgëluges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Lajteg' y 'Rjgëlug', lit. 'Relativo a dibujo de luz'",
            "acepciones": [
                "Fotográfico (emparentado con la fotografía)."
            ],
            "ejemplos": [//TODO: archivo, registro
                "Kjae göljtàg knaej gërflegones <u>lajtrĵgëluges</u> archivo."
            ],
            "raiz": "Lajt"
        },
        {
            "palabra": "Lajtrjgëlànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lajteg', 'Rjgëlug' y 'Anördnug', lit. 'Máquina de dibujos de luz'",
            "acepciones": [
                "Cámara fotográfica, cámara de fotos (digital o analógica)."
            ],
            "ejemplos": [
                "Öl göljwùjk-dësljar wän <u>lajtrjgëlànördnug</u>."
            ],
            "raiz": "Lajt"
        },
        {
            "palabra": "Lajtrjgëlkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lajteg', 'Rjgëlug' y 'Kefjeg', lit. 'Persona de dibujos de luz'",
            "acepciones": [
                "Fotógrafo o fotógrafa (profesional de la fotografía)."
            ],
            "ejemplos": [
                "Kon göljkàj <u>lajtrjgëlkèfjeg</u>?"
            ],
            "raiz": "Lajt"
        },
        {
            "palabra": "Lajtrjgëlfèjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lajteg', 'Rjgëlug' y 'Fejregur', lit. 'Colectivo de conocimientos de dibujos de luz'",
            "acepciones": [
                "tec. Fotografía (estudio de dicha técnica de captura)."
            ],
            "ejemplos": [
                "Öl jkë följknàler <u>lajtrjgëlfèjregur</u>."
            ],
            "raiz": "Lajt"
        },
        {
            "palabra": "Ljngar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hablar o poner en práctica un idioma."
            ],
            "ejemplos": [
                "Kjaegen gägu<u>lĵngar</u> føjljonlàedenuges."
            ],
            "raiz": "Ljng"
        },
        {
            "palabra": "Ljngeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Idioma, lengua o lenguaje."
            ],
            "ejemplos": [
                "Öl jkë göljfèjr-söjw klaej <u>ljngeg</u>."
            ],
            "raiz": "Ljng"
        },
        {
            "palabra": "Ljngeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a idioma'",
            "acepciones": [
                "Idiomático, lingüístico."
            ],
            "ejemplos": [
                "Öl göljtàg fjke <u>ljngeges</u> fëjregen."
            ],
            "raiz": "Ljngeg"
        },
        {
            "palabra": "Blaekaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tinta (sustancia para dibujo o escritura)."
            ],
            "ejemplos": [
                "Öl tröljàlar klaej rjgëlug tör <u>blaekaj</u>."
            ],
            "raiz": "Blaek"
        },
        {
            "palabra": "Blaekar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Entintar, manchar o ensuciar (con tinta)."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Blaek"
        },
        {
            "palabra": "Blaekrjgëlfùtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Blaekaj', 'Rjgël' y 'Futaj', lit. 'Herramienta para dibujar con tinta'",
            "acepciones": [
                "Marcador, plumón.",
                "Resaltador, rotulador."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Blaek"
        },
        {
            "palabra": "Blaekfejfùtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Blaekaj', 'Fejfar' y 'Futaj', lit. 'Herramienta para escribir con tinta'",
            "acepciones": [
                "Lapicera, birome, bolígrafo, pluma."
            ],
            "ejemplos": [
                "Öl tröljfèjfar öles fejfug tör <u>blaekfejfùtaj</u>."
            ],
            "raiz": "Blaek"
        },
        {
            "palabra": "Golunaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sabor, gusto, paladar."
            ],
            "ejemplos": [
                "Waej jagaj jkë göljtàg <u>golunaj</u>."
            ],
            "raiz": "Golun"
        },
        {
            "palabra": "Golunajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sabor'",
            "acepciones": [
                "Sabroso, gustoso, delicioso."
            ],
            "ejemplos": [
                "Kon tröljlàeker pizza? Klaej göljkàj knaej <u>golunajes</u> laekug."
            ],
            "raiz": "Golunaj"
        },
        {
            "palabra": "Golunar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Saborear, degustar, probar, catar."
            ],
            "ejemplos": [
                "Öl jkë följ<u>gòlunar</u> traej!"
            ],
            "raiz": "Golun"
        },
        {
            "palabra": "Golunwĵkolaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Golunar' y 'Wjkolaj', lit. 'Acción de la boca para saborear'",
            "acepciones": [
                "coloq. Saboreo, degustación, cata."
            ],
            "ejemplos": [
                "Udaj, öl följègael ä waej laekĵgeg tör Mjkèl faer knaej <u>golunwĵkolaj</u>."
            ],
            "raiz": "Golun"
        },
        {
            "palabra": "Süjkgòlunaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Süjkaj' y 'Golunaj', lit. 'Sabor de azúcar'",
            "acepciones": [
                "Dulzura, dulzor.",
                "coloq. Suavidad, placidez o ternura en la forma de actuar."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Süjk"
        },
        {
            "palabra": "Süjkgòlunajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "calificativo"
            ],
            "descripcion": "De 'Süjkaj' y 'Golunaj', lit. 'Relativo a sabor de azúcar'",
            "acepciones": [
                "Dulce, dulzón.",
                "coloq. Tierno, amable."
            ],
            "ejemplos": [
                "Klaej kokolàt jkë göljkàj üke <u>süjkgòlunajes</u>, fälòj klaej göljkàj enäj.",
                "Krjstjan göljkàj knaej <u>süjkgòlunajes</u> kefjeg."
            ],
            "raiz": "Süjk"
        },
        {
            "palabra": "Swejaer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tener o practicar sexo, fornicar.",
                "Copular (en animales)."
            ],
            "ejemplos": [
                "Öl göljwùjkugoner-<u>swejaer</u> tör kon...",
                "Üke wülejtugen gölj<u>swèjaer</u> trësjaw waej sjonkòjweg."
            ],
            "raiz": "Sweja"
        },
        {
            "palabra": "Swejaeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sexo (condición orgánica biológica que diferencia a muchos animales).",
                "Genitales, caracter u órgano sexual externo."
            ],
            "ejemplos": [
                "Öl jkë göljfèjr waej <u>swejaeg</u> tjl kjaes wajuget.",
                "Konegen jkë wast'al öles <u>swejaeg</u>!"
            ],
            "raiz": "Sweja"
        },
        {
            "palabra": "Swejaeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a sexo'",
            "acepciones": [
                "Sexual, genital (alusión a los carácteres sexuales)."
            ],
            "ejemplos": [
                "Waej <u>swejaeges</u> urnugen jkë göljkàj jagneges, jä?"
            ],
            "raiz": "Swejaeg"
        },
        {
            "palabra": "Swejaug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sexo (acto o relación sexual), fornicación.",
                "Coito o cópula (de animales)."
            ],
            "ejemplos": [
                "Ölegenes <u>swejaeg</u> göljkàj bljuneges.",
                "Ölajn göljsfàej-laewün waej wülejtugen alar <u>swejaug</u>. Jäk!"
            ],
            "raiz": "Sweja"
        },
        {
            "palabra": "Swejauges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a sexo'",
            "acepciones": [
                "Sexual (relativo al acto sexual)."
            ],
            "ejemplos": [
                "Öl tröljtàg <u>swejauges</u> awalbèrätegen kjøne kon..."
            ],
            "raiz": "Swejaug"
        },
        {
            "palabra": "Wjwjtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sal (sustancia de sodio)."
            ],
            "ejemplos": [
                "Kon jkë laeker'al üke <u>wjwjtaj</u>."
            ],
            "raiz": "Wjwjt"
        },
        {
            "palabra": "Wjwjtar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Salar (aplicar sal a algo), sazonar."
            ],
            "ejemplos": [
                "Öl göljglàs-<u>wjwjtar</u> öles laekug."
            ],
            "raiz": "Wjwjt"
        },
        {
            "palabra": "Wjwjtgòlunaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wjwjtaj' y 'Gölunaj', lit. 'Sabor de sal'",
            "acepciones": [
                "Sabor a sal."
            ],
            "ejemplos": [
                "Öl göljglàs waej <u>wjwjtgòlunaj</u> tjl klaej laekug."
            ],
            "raiz": "Wjwjt"
        },
        {
            "palabra": "Wjwjtgòlunajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "calificativo"
            ],
            "descripcion": "De 'Wjwjtaj' y 'Gölunaj', lit. 'Relativo a sabor de sal'",
            "acepciones": [
                "Salado, salino, salobre."
            ],
            "ejemplos": [
                "Waej jagajuren göljtàg <u>wjwjtgòlunajes</u> jagaj."
            ],
            "raiz": "Wjwjt"
        },
        {
            "palabra": "Süjkaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Azúcar."
            ],
            "ejemplos": [
                "Öles laekug jkë göljwùlasj ësjl <u>süjkaj</u>."
            ],
            "raiz": "Süjk"
        },
        {
            "palabra": "Süjkajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a azúcar'",
            "acepciones": [
                "Azucarado, acaramelado."
            ],
            "ejemplos": [
                "Klaej göljkàj knaej <u>süjkajes</u> laekug."
            ],
            "raiz": "Süjkaj"
        },
        {
            "palabra": "Süjkar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Azucarar, endulzar, dulcificar."
            ],
            "ejemplos": [
                "Öl göljwùjk-<u>süjkar</u> öles fjalaj."
            ],
            "raiz": "Süjk"
        },
        {
            "palabra": "Süjkaenjàgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Süjkaj', 'Kaeneg' y 'Jagaj', lit. 'Agua enfriada con azúcar'",
            "acepciones": [
                "Helado, mantecado, granizado (postre frío y dulce)."
            ],
            "ejemplos": [
                "Klaej <u>süjkaenjàgaj</u> göljkàj üke golunajes!"
            ],
            "raiz": "Süjk"
        },
        {
            "palabra": "Ärger",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Oler, olfatear, oliscar.",
                "Presencia de un olor en algo o algún lugar.",
                "coloq. Primera impresión o sospecha de algo."
            ],
            "ejemplos": [
                "Kon göljsfàej-<u>ärger</u> klaej bljunwùljgaj?",
                "Öles awalaurkĵgeg gölj<u>àrger</u> ä grüfug laswäld udaj öl tröljfjàlar klaej froj.",
                "Klaej gölj<u>àrger</u> ä daljajaf..."
            ],
            "raiz": "Ärg"
        },
        {
            "palabra": "Ärgug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Olor (emanación apreciable con el olfato)."
            ],
            "ejemplos": [
                "—Wäld göljkàj traej <u>ärgug</u>?<br>—Göljklàsj-kaj öles laekug."
            ],
            "raiz": "Ärg"
        },
        {
            "palabra": "Ärguges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a olor'",
            "acepciones": [
                "Oloroso (que carga olor)."
            ],
            "ejemplos": [
                "Kones öndwùlejtug göljkàj üke <u>ärguges</u>!"
            ],
            "raiz": "Ärgug"
        },
        {
            "palabra": "Enäjàrgug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Enäjeg' y 'Ärgug', lit. 'Olor con buena condición'",
            "acepciones": [
                "Aroma, perfume, fragancia."
            ],
            "ejemplos": [
                "Öl göljglàsugon waej <u>enäjàrgug</u> tjl kones rjntèfjajon."
            ],
            "raiz": "Enäj"
        },
        {
            "palabra": "Enäjàrguges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "calificativo"
            ],
            "descripcion": "De 'Enäjeg' y 'Ärgug', lit. 'Relativo a olor con buena condición'",
            "acepciones": [
                "Aromático, perfumado, fragante, odorífero."
            ],
            "ejemplos": [
                "Kjae frät göljwùjk <u>enäjàrguges</u> bljunwùljgajen."
            ],
            "raiz": "Enäj"
        },
        {
            "palabra": "Färalàrgug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Färaleg' y 'Ärgug', lit. 'Olor con mala condición'",
            "acepciones": [
                "Hedor o hediondez, fetidez, peste o pestilencia."
            ],
            "ejemplos": [
                "Knaej wülejtugen göljtàg üke <u>färalàrgug</u>."
            ],
            "raiz": "Färal"
        },
        {
            "palabra": "Färalàrguges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "calificativo"
            ],
            "descripcion": "De 'Färaleg' y 'Ärgug', lit. 'Relativo a olor con mala condición'",
            "acepciones": [
                "Hediondo, fétido, pestilente."
            ],
            "ejemplos": [
                "Waej bjseleg göljkàj <u>färalàrguges</u> wjl klaej awalaurkĵgeg."
            ],
            "raiz": "Färal"
        },
        {
            "palabra": "Üwlaed",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Decir, comunicar, expresar."
            ],
            "ejemplos": [
                "Kon trölj<u>ùwlaed</u> öl wäld öl trudajàlar traej..."
            ],
            "raiz": "Üwlaed"
        },
        {
            "palabra": "Üwlaedug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Manifestación, declaración, expresión."
            ],
            "ejemplos": [
                "Öl jkë tröljlàewün kjaes <u>üwlaedug</u>."
            ],
            "raiz": "Üwlaed"
        },
        {
            "palabra": "Ënskj",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Usar, utilizar, emplear, disponer.",
                "coloq. Manipular a alguien con una finalidad latente."
            ],
            "ejemplos": [
                "Kon jkë följ<u>ènskj</u> traej lujkaj?",
                "Kjae trölj<u>ènskj</u> Karmen faer wän awalkòjweg."
            ],
            "raiz": "Ënskj"
        },
        {
            "palabra": "Ënskjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Uso, utilización, empleo, disposición.",
                "coloq. Manipulación (de alguien)."
            ],
            "ejemplos": [
                "Klaejes <u>ënskjeg</u> göljkàj frejegafes tjl fenser.",
                "Waej <u>ënskjeg</u> tjl kefjegen göljkàj färaleges knaejteg."
            ],
            "raiz": "Ënskj"
        },
        {
            "palabra": "Ënskjeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a utilización'",
            "acepciones": [
                "Utilizable, empleable, disponible (que se puede usar)."
            ],
            "ejemplos": [
                "Klaej blaekfejfùtaj göljkàj <u>ënskjeges</u>."
            ],
            "raiz": "Ënskjeg"
        },
        {
            "palabra": "Tekler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Agarrar, sujetar, asir."
            ],
            "ejemplos": [
                "Kon <u>tekler</u>'al öles rjnlug j kon glaewĵkolar'al öl."
            ],
            "raiz": "Tekl"
        },
        {
            "palabra": "Teklug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Agarre, sujeción."
            ],
            "ejemplos": [
                "Waej <u>teklug</u> tjlaej futaj göljklàsj-kaj üke gräjuges."
            ],
            "raiz": "Tekl"
        },
        {
            "palabra": "Söjw",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hablar, dialogar, conversar, charlar.",
                "coloq. Palabrear."
            ],
            "ejemplos": [
                "Katerĵna j öl trölj<u>sòjw</u> ätej waej knöjsjònug.",
                "Kjae trölj<u>sòjw</u> öl tör üke sjonugon."
            ],
            "raiz": "Söjw"
        },
        {
            "palabra": "Söjwaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Diálogo, conversación, charla."
            ],
            "ejemplos": [
                "Kjaejn jkë fjügulsfàej-täg knaej <u>söjwaj</u>."
            ],
            "raiz": "Söjw"
        },
        {
            "palabra": "Söjwajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a diálogo'",
            "acepciones": [
                "Dialogal, dialogístico."
            ],
            "ejemplos": [
                "Kjaegen tröljòwader knaej <u>söjwajes</u> rëndeg."
            ],
            "raiz": "Söjw"
        },
        {
            "palabra": "Söjwajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin diálogo'",
            "acepciones": [
                "Callamiento, mutismo o reserva que genera que una persona no hable."
            ],
            "ejemplos": [
                "—Kon göljkàj enäj? Kon göljkàj <u>söjwajaf</u>es.<br>—Öl jkë göljwùlasj-söjw faer kaj enäj."
            ],
            "raiz": "Söjwaj"
        },
        {
            "palabra": "Söjwajafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin diálogo'",
            "acepciones": [
                "Callar, enmudecer, silenciar."
            ],
            "ejemplos": [
                "Kon jkë söjwajafer'al öl!"
            ],
            "raiz": "Söjwaj"
        },
        {
            "palabra": "Tänstar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Trabajar, obrar, laborar.",
                "coloq. Ocuparse de algo para solucionarlo o mejorarlo."
            ],
            "ejemplos": [
                "Öl göljklàsj-<u>tänstar</u> fülwuj waej dajen faer wäld ölegen udajsfàej-laeker.",
                "Kon göljsfàej-<u>tänstar</u> wjl öles ökjlugafes konpjùter?"
            ],
            "raiz": "Tänst"
        },
        {
            "palabra": "Tänsteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Trabajo, labor, tarea.",
                "Puesto o posición laboral, ocupación."
            ],
            "ejemplos": [
                "Elkjer knaej kefjeget göljwùlasj üke <u>tänsteg</u>.",
                "Wjl öles <u>tänsteg</u> öl göljèwlän fjke lujkaj."
            ],
            "raiz": "Tänst"
        },
        {
            "palabra": "Tänsteges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a trabajo'",
            "acepciones": [
                "Trabajoso, laborioso (que conlleva trabajo o tiene dedicación para trabajar)."
            ],
            "ejemplos": [
                "Djana göljkàj knaej <u>tänsteges</u> awalkèfjeg, kjae göljtànstar fülwuj waej daj."
            ],
            "raiz": "Tänsteg"
        },
        {
            "palabra": "Tänstegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin trabajo'",
            "acepciones": [
                "Desocupación, desempleo."
            ],
            "ejemplos": [
                "Göljàw üke kefjegen tör <u>tänstegaf</u> wjlaej swolug."
            ],
            "raiz": "Tänsteg"
        },
        {
            "palabra": "Tänslùjkaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Tänsteg' y 'Lujkaj', lit. 'Dinero de trabajo'",
            "acepciones": [
                "Sueldo, salario, jornal.",
                "Honorario o remuneración por un servicio."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Tänst"
        },
        {
            "palabra": "Tänskèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Tänstar' y 'Kefjeg', lit. 'Persona que trabaja'",
            "acepciones": [
                "Trabajador, empleado.",
                "Peón, obrero."
            ],
            "ejemplos": [
                "Öl göljkàj <u>tänskèfjeg</u> tjl Pepsico.",
                "Wjlaej laedejug ölegen göljtàg tjöwän <u>tänskèfjeg</u>en."
            ],
            "raiz": "Tänst"
        },
        {
            "palabra": "Tänswenkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Tänstar', 'Wenkeg' y 'Kefjeg', lit. 'Persona con igualdad que trabaja'",
            "acepciones": [
                "Colega, compañero de trabajo con similar rango."
            ],
            "ejemplos": [
                "Tatjàna j öl göljkàj <u>tänswenkèfjeg</u>en, laswäld tökan gägultànstar wjl klaej fejfkĵgeg."
            ],
            "raiz": "Tänst"
        },
        {
            "palabra": "Wjkolaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Boca.",
                "Hocico, pico, trompa o cualquier órgano animal de ingestión.",
                "Acción o mueca indefinida con la boca.",
                "coloq. Entrada o acceso de algo."
            ],
            "ejemplos": [
                "Kones <u>wjkolaj</u> göljkàj üke bljuneges.",
                "Knaej wülejtugen göljtàg waej gräjuges <u>wjkolaj</u>.",
                "Kon jkë alar'al öl traej <u>wjkolaj</u>!",
                "Waej daweglàedejug göljkàj knaej <u>wjkolaj</u> äej kojwlàedejug."
            ],
            "raiz": "Wjkol"
        },
        {
            "palabra": "Wjkolajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a boca'",
            "acepciones": [
                "Bucal, oral (alusivo a cualquier parte de la boca)."
            ],
            "ejemplos": [
                "Jonatan göljtàg knaej <u>wjkolajes</u> wöjlegaf."
            ],
            "raiz": "Wjkolaj"
        },
        {
            "palabra": "Wjkolar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional, lit. 'Accionar la boca'",
            "acepciones": [
                "Accionar o usar la boca de forma indefinida en pos de algo.",
                "coloq. Tener un espasmo o temblor en la boca."
            ],
            "ejemplos": [],
            "raiz": "Wjkol"
        },
        {
            "palabra": "Bjselwĵkolaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Bjseler' y 'Wjkolaj', lit. 'Acción de la boca para airear'",
            "acepciones": [
                "Aliento, hálito (aire que expulsa la boca)."
            ],
            "ejemplos": [
                "Öl göljglàs kones <u>bjselwĵkolaj</u>."
            ],
            "raiz": "Bjsel"
        },
        {
            "palabra": "Jagwĵkolar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Jagar' y 'Wjkolar', lit. 'Accionar la boca para mojar'",
            "acepciones": [
                "Escupir, esputar, expectorar.",
                "Salivar, ensalivar, babear."
            ],
            "ejemplos": [],
            "raiz": "Jag"
        },
        {
            "palabra": "Laekwĵkolar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laeker' y 'Wjkolar', lit. 'Accionar la boca para comer'",
            "acepciones": [
                "Masticar, mascar."
            ],
            "ejemplos": [],
            "raiz": "Laek"
        },
        {
            "palabra": "Traewĵkolaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Traewer' y 'Wjkolar', lit. 'Acción de la boca para atacar'",
            "acepciones": [
                "Mordisco, mordedura.",
                "Mordida, bocado."
            ],
            "ejemplos": [],
            "raiz": "Traew"
        },
        {
            "palabra": "Traewĵkolar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Traewer' y 'Wjkolar', lit. 'Accionar la boca para atacar'",
            "acepciones": [
                "Morder, mordisquear, atarazar.",
                "coloq. Dar un bocado."
            ],
            "ejemplos": [],
            "raiz": "Traew"
        },
        {
            "palabra": "Glaewĵkolar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Glaer' y 'Wjkolar', lit. 'Accionar la boca para amar'",
            "acepciones": [
                "Besar.",
                "Besuquear, mimar cariñosamente."
            ],
            "ejemplos": [
                "Ölegen tröljglaewĵkolar bulöw waej awalaj...",
                "Kjae fjügulglaewĵkolar öles rjnlug."
            ],
            "raiz": "Glae"
        },
        {
            "palabra": "Glaewĵkolaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Glaer' y 'Wjkolar', lit. 'Acción de la boca para amar'",
            "acepciones": [
                "Beso, mimo cariñoso que se entrega con la boca."
            ],
            "ejemplos": [
                "Öl göljsfàej-ewjd kon knaej glaewĵkolaj?"
            ],
            "raiz": "Glae"
        },
        {
            "palabra": "Laejrwĵkolar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laejreg' y 'Wjkolar', lit. 'Accionar la boca para musicalizar'",
            "acepciones": [
                "Silbar, pitar, chiflar."
            ],
            "ejemplos": [],
            "raiz": "Laejr"
        },
        {
            "palabra": "Laejrwĵkolaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laejreg' y 'Wjkolaj', lit. 'Acción de la boca para musicalizar'",
            "acepciones": [
                "Silbido, pitido, chiflido."
            ],
            "ejemplos": [],
            "raiz": "Laejr"
        },
        {
            "palabra": "Roglug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Obsequio, regalo, presente, dádiva.",
                "Agasajo, mimo (material)."
            ],
            "ejemplos": [
                "Öl göljtàg wän roglug faer kon!"
            ],
            "raiz": "Rogl"
        },
        {
            "palabra": "Rogler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Obsequiar, regalar, agasajar."
            ],
            "ejemplos": [
                "Öl jkë göljfèjr wäld rogler kjae..."
            ],
            "raiz": "Rogl"
        },
        {
            "palabra": "Frët",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Intentar, probar, procurar."
            ],
            "ejemplos": [
                "Kon följfrèt-kaj wëroj?"
            ],
            "raiz": "Frët"
        },
        {
            "palabra": "Frëteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Intento, prueba."
            ],
            "ejemplos": [
                "Öl alëred tröljfrèteg, fälòj öl jkë göljsfàej."
            ],
            "raiz": "Frët"
        },
        {
            "palabra": "Fälòj",
            "tipo": [
                "Conjunción"
            ],
            "subtipo": [
                "adversativa", "exceptuada"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pero, empero, mas (contraponer concepto con otro)."
            ],
            "ejemplos": [
                "Öl alëred tröljfrèteg, fälòj öl jkë göljsfàej."
            ],
            "raiz": "Fälòj"
        },
        {
            "palabra": "Täkenar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Preguntar, interrogar."
            ],
            "ejemplos": [
                "Kon följ<u>tàkenar</u> knaejteg ësjl?"
            ],
            "raiz": "Täken"
        },
        {
            "palabra": "Täkenaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pregunta, interrogación."
            ],
            "ejemplos": [
                "Kon alar'al öl knaej täkenaj!"
            ],
            "raiz": "Täken"
        },
        {
            "palabra": "Täkenajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a pregunta'",
            "acepciones": [
                "Interrogante (que interroga)."
            ],
            "ejemplos": [
                "Kjaes <u>täkenajes</u> wastùrnugen tröljsòjw ütan fejfegen."
            ],
            "raiz": "Täkenaj"
        },
        {
            "palabra": "Wälejer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Amistar, amigar, apegar."
            ],
            "ejemplos": [
                "Kjaeugen trölj<u>wàlejer</u> följ tjlaej grägajafet."
            ],
            "raiz": "Wälej"
        },
        {
            "palabra": "Wälejeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Amistad, compañerismo, camaradería."
            ],
            "ejemplos": [
                "Klaus göljkàj knaej <u>wälejeg</u>es sjonkèfjeg."
            ],
            "raiz": "Wälej"
        },
        {
            "palabra": "Wälejeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a amistad'",
            "acepciones": [
                "Amistoso, amigable, afable."
            ],
            "ejemplos": [
                "Kon göljfèjr kjae? Göljkàj üke <u>wälejeges</u>."
            ],
            "raiz": "Wälejeg"
        },
        {
            "palabra": "Wälejegon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentantivizado"
            ],
            "descripcion": "Lit. 'Amistad grande'",
            "acepciones": [
                "Fraternidad, hermandad (sentimiento muy fuerte de amistad)."
            ],
            "ejemplos": [
                "Jkë göljàw daljajafen wjlaej <u>wälejegon</u>."
            ],
            "raiz": "Wälejeg"
        },
        {
            "palabra": "Wälejegones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a amistad grande'",
            "acepciones": [
                "Fraternal, fraterno."
            ],
            "ejemplos": [
                "Kjaejn glaeg fjügulkàj <u>wälejegones</u>."
            ],
            "raiz": "Wälejeg"
        },
        {
            "palabra": "Wälejegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin amistad'",
            "acepciones": [
                "Enemistad, rivalidad, antagonismo."
            ],
            "ejemplos": [
                "Waej <u>wälejegaf</u> göljkàj daentajafes faer fräjg kefjeg."
            ],
            "raiz": "Wälej"
        },
        {
            "palabra": "Wälejegafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin amistad'",
            "acepciones": [
                "Enemistar, rivalizar."
            ],
            "ejemplos": [
                "Kjaejn trölj<u>wàlejegafer</u> för lujkaj, bäjgun wöjlegafes!"
            ],
            "raiz": "Wälej"
        },
        {
            "palabra": "Wälejkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wälejeg' y 'Kefjeg', lit. 'Persona con amistad'",
            "acepciones": [
                "Amigo, compañero o camarada cercano (relación de amistad y confianza)."
            ],
            "ejemplos": [
                "Öl jkë göljtàg üke <u>wälejkèfjegen</u>, fälòj fülwuj göljkàj <u>enäjeg</u>es."
            ],
            "raiz": "Wälej"
        },
        {
            "palabra": "Üsker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ocurrir, suceder, pasar, acontecer."
            ],
            "ejemplos": [
                "Traej jkë göljsfàej-<u>üsker</u>."
            ],
            "raiz": "Üsk"
        },
        {
            "palabra": "Üskug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Suceso, acontecimiento, evento.",
                "Vez, ocasión, turno, lance (momento repetido en tiempos diferentes).",
            ],
            "ejemplos": [
                "Göljkàj knaej ljwkegafes <u>üskug</u> faer fülwuj waej kefjegen.",
                "Klaej <u>üskug</u>, kjae tröljùwlaed öl knaejteged."
            ],
            "raiz": "Üsk"
        },
        {
            "palabra": "Kjn",
            "tipo": [
                "Conjunción"
            ],
            "subtipo": [
                "condicional"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Si (apertura de una situación condicional)."
            ],
            "ejemplos": [
                "<u>Kjn</u> kon göljòkjlugafer öles sjfjànördnug, öl jkë följfèjr waej sjfjeg."
            ],
            "raiz": "Kjn"
        },
        {
            "palabra": "Knajkar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pedir, solicitar, requerir."
            ],
            "ejemplos": [
                "Öl gölj<u>knàjkar</u> kones änslaj, tjsälk wlaejaj."
            ],
            "raiz": "Knajk"
        },
        {
            "palabra": "Knajkeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pedido, petición, solicitud."
            ],
            "ejemplos": [
                "Öl göljtàg knaej <u>knajkeg</u> faer kon."
            ],
            "raiz": "Knajk"
        },
        {
            "palabra": "Knajkeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a pedido'",
            "acepciones": [
                "Petitorio (alusivo a o que contiene pedido)."
            ],
            "ejemplos": [
                "Kon jkë frogael'al tör kones <u>knajkeges</u> fejfegen."
            ],
            "raiz": "Knajkeg"
        },
        {
            "palabra": "Knajkegon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Pedido grande'",
            "acepciones": [
                "Súplica, ruego, imploración."
            ],
            "ejemplos": [
                "Konajn jkë üwlaed'al <u>knajkegon</u>en, öl jkë följknàler traej köloreg!"
            ],
            "raiz": "Knajkeg"
        },
        {
            "palabra": "Knajkegones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a pedido grande'",
            "acepciones": [
                "Suplicante, rogatorio, implorante."
            ],
            "ejemplos": [
                "Öles <u>knajkegones</u> wasteg tröljsènsar wäld öl fjügulwùjk."
            ],
            "raiz": "Knajkeg"
        },
        {
            "palabra": "Knajkegonar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer pedido grande'",
            "acepciones": [
                "Suplicar, rogar, implorar."
            ],
            "ejemplos": [
                "Kjae gägul<u>knàjkegonar</u> öl wäld öl udajègael ä kjaes öndkĵgeget."
            ],
            "raiz": "Knajkeg"
        },
        {
            "palabra": "Änslar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Disculpar, perdonar, excusar, exculpar."
            ],
            "ejemplos": [
                "Kon göljsfàej-<u>änslar</u> öl?"
            ],
            "raiz": "Änsl"
        },
        {
            "palabra": "Änslaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Disculpa, perdón, exculpación."
            ],
            "ejemplos": [
                "Öl göljknàjar kones <u>änslaj</u>, tjsälk wlaejaj."
            ],
            "raiz": "Änsl"
        },
        {
            "palabra": "Änslajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a disculpa'",
            "acepciones": [
                "Que carga relación con la disculpa."
            ],
            "ejemplos": [
                "Kjae tröljwàst öl tör knaej <u>änslajes</u> sälk."
            ],
            "raiz": "Änslaj"
        },
        {
            "palabra": "Änslajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin disculpa'",
            "acepciones": [
                "Acusación, inculpación."
            ],
            "ejemplos": [
                "Kon gägulùwlaed <u>änslajaf</u>en fülwuj waej daj."
            ],
            "raiz": "Änslaj"
        },
        {
            "palabra": "Änslajafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a sin disculpa'",
            "acepciones": [
                "Acusatorio (que implica acusación)."
            ],
            "ejemplos": [
                "Wäld göljkàj klaej <u>änslajafes</u> fejfug?!"
            ],
            "raiz": "Änslaj"
        },
        {
            "palabra": "Änslajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin disculpa'",
            "acepciones": [
                "Echar la culpa, inculpar, acusar, achacar."
            ],
            "ejemplos": [
                "Kjae trölj<u>ànslajafar</u> öl för kjaes rëndegaf."
            ],
            "raiz": "Änslaj"
        },
        {
            "palabra": "Alentar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aceptar, aprobar, acceder.",
                "Permitir, asentir, consentir, autorizar."
            ],
            "ejemplos": [
                "Waej laedenug göljklàsj-<u>alentar</u> klaej trölj wäld kon udajsfàej-alar klaej.",
                "Kon gölj<u>àlentar</u> öl glaewĵkolar kon?"
            ],
            "raiz": "Alent"
        },
        {
            "palabra": "Alentaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aceptación, aprobación.",
                "Permiso, asentimiento, consentimiento, autorización."
            ],
            "ejemplos": [
                "Wänes, öl göljwùlasj <u>alentaj</u> tjl öles fjsljkèfjegur.",
                "Kon jkë göljtàg <u>alentaj</u> faer alar traej."
            ],
            "raiz": "Alent"
        },
        {
            "palabra": "Alentajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a aceptación'",
            "acepciones": [
                "Aprobatorio (que implica aprobación).",
                "Permisivo, condescendiente (permite o consiente sin resistencia)."
            ],
            "ejemplos": [
                "Waej alegen jkë göljkàj <u>alentajes</u>.",
                "Kjae göljkàj üke <u>alentajes</u>, kjae jkë göljèlkjer."
            ],
            "raiz": "Alentaj"
        },
        {
            "palabra": "Alentajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin aceptación'",
            "acepciones": [
                "Desaprobación, reprobación, rechazo.",
                "Prohibición, denegación."
            ],
            "ejemplos": [
                "Kjaejnes <u>alentajaf</u> tröljàlar öl ljwkegafes.",
                "Kon göljtàg waej <u>alentajaf</u> tjl ëgael ä kjaes öndkĵgeg."
            ],
            "raiz": "Alentaj"
        },
        {
            "palabra": "Alentajafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a sin aceptación'",
            "acepciones": [
                "Reprobatorio (que implica reprobación).",
                "Prohibitivo, denegatorio."
            ],
            "ejemplos": [
                "Kjae tröljùwlaed öl, wjl <u>alentajafes</u> sälk: 'Kon jkë alar'al klaej'.",
                "Klaej laedenug göljtàg ükon <u>alentajafes</u> krjtonen."
            ],
            "raiz": "Alentaj"
        },
        {
            "palabra": "Alentajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin aceptación'",
            "acepciones": [
                "Desaprobar, reprobar, rechazar.",
                "Prohibir, denegar."
            ],
            "ejemplos": [
                "Ölugen trölj<u>àlentajafar</u> öles roglug.",
                "Kon kläsj'al-<u>alentajafar</u> kjaes fejfegen!"
            ],
            "raiz": "Alentaj"
        },
        {
            "palabra": "Kulkar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Silenciar, callar, enmudecer.",
                "Tranquilizar, calmar, sosegar, serenar."
            ],
            "ejemplos": [
                "Kon jkë kulkar'al öl, öl göljwùjk-söjw!",
                "Göljkàj sonteg faer kulkar ölegen."
            ],
            "raiz": "Kulk"
        },
        {
            "palabra": "Kulkeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Silencio (ausencia de sonido).",
                "Tranquilidad, calma, sosiego, serenidad."
            ],
            "ejemplos": [
                "För wlaejaj, kon göljàlar <u>kulkeg</u>...",
                "Ölegen fjüguljàgnar tör <u>kulkeg</u>."
            ],
            "raiz": "Kulk"
        },
        {
            "palabra": "Kulkeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a silencio'",
            "acepciones": [
                "Silencioso, callado (principalmente seres vivos).",
                "Tranquilo, calmo, sereno, sosegado."
            ],
            "ejemplos": [
                "Josef göljkàj knaej <u>kulkeges</u> kefjegon.",
                "Udaj, ölegen göljtàg knaej <u>kulkeges</u> awalkòjweg."
            ],
            "raiz": "Kulkeg"
        },
        {
            "palabra": "Kulkegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin silencio'",
            "acepciones": [
                "Ruido, bullicio, griterío.",
                "Intranquilidad, inquietud, desasosiego."
            ],
            "ejemplos": [
                "Göljàw üke <u>kulkegaf</u>, öl jkë göljsfàej-laewün!",
                "Öl göljkàj <u>kulkegaf</u>es, wändaj följbèndjlar knaejuj tänsteg."
            ],
            "raiz": "Kulkeg"
        },
        {
            "palabra": "Kulkegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin silencio'",
            "acepciones": [
                "Ruidoso, fragoroso, bullicioso.",
                "Intranquilo, inquieto, desasosegado."
            ],
            "ejemplos": [
                "Kon göljkàj üke <u>kulkegafes</u> wjlaej swejaug.",
                "Öl göljkàj <u>kulkegafes</u> laswäld öl stjlaw jkë göljtàg öles lujkaj."
            ],
            "raiz": "Kulkeg"
        },
        {
            "palabra": "Kulkegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "lit. 'Hacer sin silencio'",
            "acepciones": [
                "Hacer ruido, alborotar.",
                "Intranquilizar, inquietar, estremecer, alterar."
            ],
            "ejemplos": [
                "Guljàn träsjl gölj<u>kùlkegafar</u> trësjaw waej awalkòjweg.",
                "Kon jkë üwlaed'al kjae traej, kjae följ<u>kùlkegafar</u>!"
            ],
            "raiz": "Kulkeg"
        },
        {
            "palabra": "Gërfleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tamaño, volumen, dimensión, grandor."
            ],
            "ejemplos": [
                "Waej <u>gërfleg</u> tjlaej kolweg göljkàj fändjlegafes."
            ],
            "raiz": "Gërfl"
        },
        {
            "palabra": "Gërfleges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a tamaño'",
            "acepciones": [
                "Voluminoso, grande."
            ],
            "ejemplos": [
                "Kon göljtàg knaej <u>gërfleges</u> öndkĵgeg!"
            ],
            "raiz": "Gërfleg"
        },
        {
            "palabra": "Gërflegon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Tamaño grande'",
            "acepciones": [
                "Grandeza (propiedad o cualidad de algo de mucho tamaño).",
                "Grandiosidad, magnificencia."
            ],
            "ejemplos": [
                "Kon wast'al waej <u>gërflegon</u> tjl traej daweglàedejug!",
                "Traej göljkàj waej <u>gërflegon</u> tjl ölegenes Gërtaj."
            ],
            "raiz": "Gërfleg"
        },
        {
            "palabra": "Gërflegones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a tamaño grande'",
            "acepciones": [
                "Enorme, gigante, inmenso, descomunal.",
                "Grandioso, magnífico, magnificente."
            ],
            "ejemplos": [
                "Klaej jagajon göljkàj <u>gërflegones</u>, ölugen jkë göljsfàej-ljoner klaej fülwuj!",
                "Balanlàedenug göljkàj knaej <u>gërflegones</u> kjgeg faer jagnar."
            ],
            "raiz": "Gërfleg"
        },
        {
            "palabra": "Gërflegoner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer tamaño grande'",
            "acepciones": [
                "Agrandar, engrandecer, agigantar, ampliar."
            ],
            "ejemplos": [
                "Tör sjfjeg, öles rjnlug trölj<u>gèrflegoner</u>."
            ],
            "raiz": "Gërfleg"
        },
        {
            "palabra": "Gërfleget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Tamaño pequeño'",
            "acepciones": [
                "Pequeñez (propiedad o cualidad de algo de poco tamaño).",
                "coloq. Insignificancia, futilidad."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Gërfleg"
        },
        {
            "palabra": "Gërflegetes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a tamaño pequeño'",
            "acepciones": [
                "Pequeño, chico, diminuto, ínfimo.",
                "despect. Insignificante, minúsculo, fútil."
            ],
            "ejemplos": [
                "Klaej wülejtug göljkàj <u>gërflegetes</u>.",
                "Öl göljwùjk-tag <u>gërflegetes</u> rëndegafen!"
            ],
            "raiz": "Gërfleg"
        },
        {
            "palabra": "Gërflegeter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer tamaño pequeño'",
            "acepciones": [
                "Achicar, encoger, reducir, contraer."
            ],
            "ejemplos": [
                "Öl göljwùjk-<u>gërflegeter</u> klaej kefjdĵlugetur."
            ],
            "raiz": "Gërfleg"
        },
        {
            "palabra": "Gërfler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dimensionar, medir o mensurar el tamaño de algo."
            ],
            "ejemplos": [
                "Waej <u>gërfleg</u> tjlaej kolweg göljkàj fändjlegafes."
            ],
            "raiz": "Gërfl"
        },
        {
            "palabra": "Awendeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Suavidad, tersura, lisura.",
                "coloq. Delicadeza y cariño, principalmente en el trato."
            ],
            "ejemplos": [
                "Kones rjntèfjajon göljkàj üke awendeges.",
                "Kon göljkàj loke awendeges dëjwel kon göljùwlaed traej futegen!"
            ],
            "raiz": "Awend"
        },
        {
            "palabra": "Awendeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a suavidad'",
            "acepciones": [
                "Suave, terso, liso, fino.",
                "coloq. Delicado, cariñoso (en el trato personal)."
            ],
            "ejemplos": [
                "Göljàw knaejteged loke <u>awendeges</u> tjsälk kones rjnlug.",
                "Kjae fjügulkàj knaej <u>awendeges</u> sjonkèfjeg."
            ],
            "raiz": "Awendeg"
        },
        {
            "palabra": "Awendegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin suavidad'",
            "acepciones": [
                "Aspereza, rugosidad.",
                "coloq. Rudeza y severidad, principalmente en el trato."
            ],
            "ejemplos": [//TODO: roca
                "Klaej roca göljtàg üke <u>awendegaf</u>.",
                "Waej kefjeg träsjl fjügulsòjw tör <u>awendegaf</u>."
            ],
            "raiz": "Awendeg"
        },
        {
            "palabra": "Awendegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin suavidad'",
            "acepciones": [
                "Áspero, rugoso, rasposo.",
                "coloq. Rudo, severo, hosco (en el trato personal)."
            ],
            "ejemplos": [
                "Froj waej laedejug göljkàj <u>awendegafes</u>.",
                "Laswäld kon göljkàj <u>awendegafes</u> tör öl?"
            ],
            "raiz": "Awendeg"
        },
        {
            "palabra": "Awendar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Suavizar, lenificar, alisar (hacer que algo sea más suave)."
            ],
            "ejemplos": [
                "Öl kanskëklàsj-awendar klaej djlugetur."
            ],
            "raiz": "Awend"
        },
        {
            "palabra": "Daentaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Blandura, flacidez, molicie.",
                "coloq. Lenidad, flexibilidad, tolerancia."
            ],
            "ejemplos": [
                "Klaej djlugetur göljkàj daentajes.",
                "Kon göljkàj üke daentajes tör kones wajugen."
            ],
            "raiz": "Daent"
        },
        {
            "palabra": "Daentajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a la blandura'",
            "acepciones": [
                "Blando, flácido, tierno, mullido.",
                "coloq. Flexible, tolerante, indulgente."
            ],
            "ejemplos": [
                "Sästan towlajug göljkàj waej ësjl <u>daentajes</u>?",
                "Kjae fjügulkàj knaej <u>daentajes</u> kefjeg, knaej dogönuged fjügulsènsar rëndegaf."
            ],
            "raiz": "Daentaj"
        },
        {
            "palabra": "Daentajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin blandura'",
            "acepciones": [
                "Dureza, solidez, rigidez.",
                "coloq. Severidad, rigurosidad."
            ],
            "ejemplos": [
                "Waej towlajugen göljkàj daentajafes.",
                "Klaej laedenug göljkàj üke daentajafes töraej laedenlujklàsjug."
            ],
            "raiz": "Daentaj"
        },
        {
            "palabra": "Daentajafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin blandura'",
            "acepciones": [
                "Duro, sólido, rígido, tieso.",
                "coloq. Severo, riguroso."
            ],
            "ejemplos": [
                "Klaej wuljgajon älered göljkàj <u>daentajafes</u>.",
                "Öles fjsljkèfjeg göljkàj üke <u>daentajafes</u> tör öl."
            ],
            "raiz": "Daentaj"
        },
        {
            "palabra": "Daentajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin blandura'",
            "acepciones": [
                "Endurecer, indurar, robustecer."
            ],
            "ejemplos": [
                "Kon jkë daentajafar'al waej laekug, ö ölegen jkë följsfàej-laeker klaej!"
            ],
            "raiz": "Daentaj"
        },
        {
            "palabra": "Daentar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ablandar, emblandecer, aflojar."
            ],
            "ejemplos": [
                "Öl göljwùlasj-daentar klaej laekug."
            ],
            "raiz": "Daent"
        },
        {
            "palabra": "Fräjg",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "indefinido"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cualquier, cualquiera o cualesquiera."
            ],
            "ejemplos": [
                "Öl göljwùlasj knaej <u>fräjg</u> fejfug."
            ],
            "raiz": "Fräjg"
        },
        {
            "palabra": "Fülw",
            "tipo": [
                "Pronombre", "adverbio"
            ],
            "subtipo": [
                "indefinido", "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cada (apunta a una serie de partes individuales de un total).",
                "Cada uno."
            ],
            "ejemplos": [
                "<u>Fülw</u> kefjeg följklàsj-lujkar öl.",
                "Bäjgun öl göljklàsj-lujkar för <u>fülw</u>?"
            ],
            "raiz": "Fülw"
        },
        {
            "palabra": "Fülwuj",
            "tipo": [
                "Pronombre", "adverbio"
            ],
            "subtipo": [
                "indefinido", "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Todo, todos, toda o todas."
            ],
            "ejemplos": [
                "<u>Fülwuj</u> waej kefjegen göljkàj wenkegafes."
            ],
            "raiz": "Fülw"
        },
        {
            "palabra": "Fülweg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Parte, elemento, ingrediente.",
                "Pedazo, porción, fracción, trozo."
            ],
            "ejemplos": [
                "Waej oksjgen göljkàj frät knaej <u>fülweg</u> tjlaej jagaj.",
                "Öl göljwùjk knaej <u>fülweg</u> tjl traej laekug, tjsälk wlaejaj."
            ],
            "raiz": "Fülw"
        },
        {
            "palabra": "Fülweges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a parte'",
            "acepciones": [
                "Parcial, fraccionario, elemental (que implica parte de un todo)."
            ],
            "ejemplos": [
                "Traej göljkàj frät knaej <u>fülweges</u> rëndeg."
            ],
            "raiz": "Fülweg"
        },
        {
            "palabra": "Fülwegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de partes'",
            "acepciones": [
                "Totalidad, completitud, integridad.",
                "Conjunto, grupo entero."
            ],
            "ejemplos": [
                "Traej göljkàj waej <u>fülwegur</u> tjl lujkaj wäld ölugen göljtàg?",
                "Waej <u>fülwegur</u> tjl kefjegeten tröljfjàlar jagaj."
            ],
            "raiz": "Fülweg"
        },
        {
            "palabra": "Fülwegures",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a colectivo de partes'",
            "acepciones": [
                "Total, completo, íntegro, absoluto."
            ],
            "ejemplos": [
                "Ölegen göljklàsj-alar knaej <u>fülwegures</u> traewug grej waej swolug."
            ],
            "raiz": "Fülweg"
        },
        {
            "palabra": "Fülwer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Partir, dividir, fraccionar."
            ],
            "ejemplos": [
                "Kjaejn <u>fülwer</u>'al öles tägegen."
            ],
            "raiz": "Fülw"
        },
        {
            "palabra": "Grägaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Paz (específicamente en términos bélicos)."
            ],
            "ejemplos": [
                "Balanlàedenug j Wajsjonlàedenug göljkàj bulöw <u>grägaj</u>."
            ],
            "raiz": "Gräg"
        },
        {
            "palabra": "Grägajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a paz'",
            "acepciones": [
                "Pacífico, sereno (que no hace la guerra)."
            ],
            "ejemplos": [
                "Knaej laedenugen göljkàj ükon <u>grägajes</u>, jkë tjsälk Balanlàedenug."
            ],
            "raiz": "Grägaj"
        },
        {
            "palabra": "Grägar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pacificar, reconciliar, hacer las paces."
            ],
            "ejemplos": [
                "Öl göljkàj troj faer <u>grägar</u> konugen."
            ],
            "raiz": "Gräg"
        },
        {
            "palabra": "Grägajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin paz'",
            "acepciones": [
                "Batalla, combate, contienda."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Grägaj"
        },
        {
            "palabra": "Grägajafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin paz'",
            "acepciones": [
                "Batallador, combativo, belicoso."
            ],
            "ejemplos": [
                "Kon göljkàj ükon <u>grägajafes</u>, kon träsjl göljrènder fülwuj tör knaej grägajafet."
            ],
            "raiz": "Grägaj"
        },
        {
            "palabra": "Grägajafon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido", "aumentativizado"
            ],
            "descripcion": "Lit. 'Sin paz grande'",
            "acepciones": [
                "Guerra, conflicto armado de gran escala."
            ],
            "ejemplos": [
                "Klaej tö laedenugen göljkàj wjl <u>grägajafon</u>."
            ],
            "raiz": "Grägaj"
        },
        {
            "palabra": "Grägajafones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin paz grande'",
            "acepciones": [
                "Bélico, marcial, guerrero (perteneciente a la guerra)."
            ],
            "ejemplos": [
                "Ölugen jkë göljwùjk-knäler knaej <u>grägajafones</u> rëndeg."
            ],
            "raiz": "Grägaj"
        },
        {
            "palabra": "Grägajafet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido", "diminutivizado"
            ],
            "descripcion": "Lit. 'Sin paz pequeña'",
            "acepciones": [
                "Pelea, lucha, escaramuza."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Grägaj"
        },
        {
            "palabra": "Grägajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin paz'",
            "acepciones": [
                "Guerrear, combatir o luchar en armas.",
                "Invadir, conquistar, asaltar."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Grägaj"
        },
        {
            "palabra": "Grägkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Grägaj' y 'Kefjeg', lit. 'Persona de paz'",
            "acepciones": [
                "obs. Emisario que enviaba mensaje de tregua.",
                "Diplomático."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Gräg"
        },
        {
            "palabra": "Grägajafkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Grägajaf' y 'Kefjeg', lit. 'Persona de batalla'",
            "acepciones": [
                "Guerrero.",
                "neo. Soldado, militar."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Gräg"
        },
        {
            "palabra": "Tëfjaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Capa, estrato.",
                "coloq. Rebanada, tajada."
            ],
            "ejemplos": [
                "Knöjan waej jagaj göljàw knaej <u>tëfjaj</u> tör jagbĵseleg.",
                "Kon göljèwjd knaej <u>tëfjaj</u> tör traej?"
            ],
            "raiz": "Tëfj"
        },
        {
            "palabra": "Tëfjajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a capa'",
            "acepciones": [
                "Que se compone de capas, estratos o niveles."
            ],
            "ejemplos": [
                "Laedejug göljtàg knaej <u>tëfjajes</u> sëgteg, tör tëfjajen üke wenkegafes bjtbjn klaej."
            ],
            "raiz": "Tëfjaj"
        },
        {
            "palabra": "Tëfjar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Laminar, rebanar (cortar una capa)."
            ],
            "ejemplos": [
                "Öl jkë göljkàj-<u>tëfjar</u> klaej towlajug!"
            ],
            "raiz": "Tëfj"
        },
        {
            "palabra": "Tëfjajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Capa pequeña'",
            "acepciones": [
                "Hoja, lámina fina, película."
            ],
            "ejemplos": [//TODO: papel
                "Kon göljsfàej-ewjd öl knaej <u>tëfjajet</u> tör papel?"
            ],
            "raiz": "Tëfjaj"
        },
        {
            "palabra": "Tëfjajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Capa grande'",
            "acepciones": [
                "Revestimiento, cobertura o cubierta, envoltura."
            ],
            "ejemplos": [
                "Öles öndkĵgeg jkë göljtàg <u>tëfjajon</u> faer waej kojwjàgaj."
            ],
            "raiz": "Tëfjaj"
        },
        {
            "palabra": "Tëfjajones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a capa grande'",
            "acepciones": [
                "Envolvente, que cubre o reviste."
            ],
            "ejemplos": [
                "Klaej göljkàj knaej <u>tëfjajones</u> djlugetur faer elkjer waej autonòwajl."
            ],
            "raiz": "Tëfjaj"
        },
        {
            "palabra": "Rjntèfjajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Rjnlug' y 'Tëfjajon', lit. 'Capa grande de cuerpo'",
            "acepciones": [
                "Piel, cutis, epidermis.",
                "Cáscara, corteza, caparazón, cápsula."
            ],
            "ejemplos": [//TODO: huevo
                "Kones <u>rjntèfjajon</u> göljkàj üke awendeges.",
                "Waej huevo göljtàg knaej daentajafes <u>rjntèfjajon</u>."
            ],
            "raiz": "Rjnl"
        },
        {
            "palabra": "Rjntèfjajones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Rjnlug' y 'Tëfjajon', lit. 'Relativo a capa grande de cuerpo'",
            "acepciones": [
                "Cutáneo, dérmico, epidérmico."
            ],
            "ejemplos": [
                "Kon göljwùlasj knaejteg faer kones <u>rjntèfjajones</u> dönjlegaf?"
            ],
            "raiz": "Rjnl"
        },
        {
            "palabra": "Käjktèfjajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Käjker' y 'Tëfjajet', lit. 'Capa pequeña para cortar'",
            "acepciones": [
                "Cuchilla, hoja afilada."
            ],
            "ejemplos": [//TODO: papel
                
            ],
            "raiz": "Käjk"
        },
        {
            "palabra": "Traewug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ataque, agresión, arremetida."
            ],
            "ejemplos": [
                "Kjae tröljàgnar knaej <u>traewug</u> tjl traej sjonkèfjeg."
            ],
            "raiz": "Traew"
        },
        {
            "palabra": "Traewuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a ataque'",
            "acepciones": [
                "Agresivo, atacante."
            ],
            "ejemplos": [
                "Klaej göljkàj knaej <u>traewuges</u> wülejtug."
            ],
            "raiz": "Traewug"
        },
        {
            "palabra": "Traewer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Atacar, agredir, arremeter."
            ],
            "ejemplos": [],
            "raiz": "Traew"
        },
        {
            "palabra": "Elkjug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Defensa, protección, cuidado.",
                "Custodia, amparo, salvaguarda."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Elkj"
        },
        {
            "palabra": "Elkjuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a defensa'",
            "acepciones": [
                "Defensivo, defensor, protector."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Elkjug"
        },
        {
            "palabra": "Elkjugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin protección'",
            "acepciones": [
                "Desprotección, desamparo, abandono."
            ],
            "ejemplos": [
                "Waej <u>elkjugaf</u> tröljsènsar öl knaej dönjlajaf."
            ],
            "raiz": "Elkjug"
        },
        {
            "palabra": "Elkjugafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Sin protección'",
            "acepciones": [
                "Desproteger, desamparar, abandonar."
            ],
            "ejemplos": [
                "Kon ündjl <u>elkjugafer</u>'al kones fjsljkèfjegur!"
            ],
            "raiz": "Elkjug"
        },
        {
            "palabra": "Elkjer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Defender, proteger, cuidar.",
                "Custodiar, amparar, salvaguardar."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Elkj"
        },
        {
            "palabra": "Dawegaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra de patrimonio nacional",
            "acepciones": [
                "Alteza (tratativo formal y obligatorio para la Gran Duquesa)."
            ],
            "ejemplos": [
                "Kones <u>Dawegaj</u> Walèrja I, Gërtaj tjl Balanlàedenug."
            ],
            "raiz": "Daweg"
        },
        {
            "palabra": "Dawegeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Altura, altitud, elevación.",
                "Estatura, talla (en personas o seres)."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Daweg"
        },
        {
            "palabra": "Dawegeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a altura'",
            "acepciones": [
                "Alto, elevado, prominente."
            ],
            "ejemplos": [
                "Sjntja göljkàj knaej <u>dawegeges</u> awalkèfjeg, kjae göljgèrfler ësjl wäld 1.70 mjtern."
            ],
            "raiz": "Dawegeg"
        },
        {
            "palabra": "Daweger",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Elevar, alzar, levantar."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Daweg"
        },
        {
            "palabra": "Dawegegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin altura'",
            "acepciones": [
                "Bajura, falta de elevación."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Dawegeg"
        },
        {
            "palabra": "Dawegegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin altura'",
            "acepciones": [
                "Bajo, chico, petiso (corta altura o estatura)."
            ],
            "ejemplos": [
                "Kon göljfèlder wäld öl göljkàj knaej <u>dawegegafes</u> kefjeg?"
            ],
            "raiz": "Dawegeg"
        },
        {
            "palabra": "Dawegegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin altura'",
            "acepciones": [
                "Hundir, deprimir (causar que algo tenga altura negativa)."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Dawegeg"
        },
        {
            "palabra": "Ljneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Línea (geométrica), trazo, raya.",
                "coloq. Divisor de dos cosas."
            ],
            "ejemplos": [
                "Knaej trjlĵneg göljtàg trj ljnegen.",
                "Waej ljneg bjtbjn glaeg j glaegaf göljkàj üke gräjugafes."
            ],
            "raiz": "Ljn"
        },
        {
            "palabra": "Ljneges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a línea'",
            "acepciones": [
                "Lineal, recto (con forma o comportamiento de la línea)."
            ],
            "ejemplos": [
                "Klaej göljkàj knaej <u>ljneges</u> fejfug, sjng bëndjleg ätej fändjleg."
            ],
            "raiz": "Ljneg"
        },
        {
            "palabra": "Sontar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Puntear, dibujar o escribir puntos."
            ],
            "ejemplos": [
                "Knaej trjlĵneg göljtàg trj ljnegen."
            ],
            "raiz": "Sont"
        },
        {
            "palabra": "Sonteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Punto (geométrico).",
                "coloq. Marca, hito.",
                "coloq. Momento, instante."
            ],
            "ejemplos": [
                "För wlaejaj, kon rjgelär'al trj sontegen froj."
            ],
            "raiz": "Sont"
        },
        {
            "palabra": "Felder",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pensar, imaginar (representar en la mente).",
                "Razonar, reflexionar, meditar."
            ],
            "ejemplos": [
                "Öl gägul<u>fèlder</u> wäld klaej kanskë jkë göljkàj waej tösal.",
                "Kon üke <u>felder</u>'al kones fejfegen."
            ],
            "raiz": "Feld"
        },
        {
            "palabra": "Feldug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pensamiento, imaginación (representación en la mente).",
                "Razonamiento, reflexión, meditación."
            ],
            "ejemplos": [
                "Kon göljàgnar wjl öles <u>feldug</u>en.",
                "Kon göljwùlasj ësjl <u>feldug</u> trölj tjl kon udajsfàej-knäler knaejteg."
            ],
            "raiz": "Feld"
        },
        {
            "palabra": "Felduges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a pensamiento'",
            "acepciones": [
                "Pensado, imaginario, ficticio."
            ],
            "ejemplos": [
                "Klaej göljkàj knaejuj tjl kones <u>felduges</u> berätegen?"
            ],
            "raiz": "Feldug"
        },
        {
            "palabra": "Rëndfèldug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Rëndeg' y 'Feldug', lit. 'Pensamiento de solución'",
            "acepciones": [
                "Idea, pensamiento o reflexión ingeniosos."
            ],
            "ejemplos": [
                "Öl göljtàg wän <u>rëndfèldug</u> faer klaej rëndegaf!"
            ],
            "raiz": "Rënd"
        },
        {
            "palabra": "Rëndfèlder",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Rëndeg' y 'Felder', lit. 'Pensar (una) solución'",
            "acepciones": [
                "Idear, ingeniar, planear."
            ],
            "ejemplos": [
                "Öl gölwùlasj-<u>rëndfèlder</u> knaejteg faer öles awalaurkĵgeg."
            ],
            "raiz": "Rënd"
        },
        {
            "palabra": "Ljnrĵnlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Ljneg' y 'Rjnlug', lit. 'Cuerpo de líneas'",
            "acepciones": [
                "Polígono, figura o cuerpo geométrico y plano."
            ],
            "ejemplos": [
                "Waej trjlĵneg göljkàj knaej ljnrĵnlug."
            ],
            "raiz": "Ljn"
        },
        {
            "palabra": "Wänlĵneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wän' y 'Ljneg', lit. 'Una línea'",
            "acepciones": [
                "Círculo, circunferencia, redondel."
            ],
            "ejemplos": [
                "Knaej <u>wänlĵneg</u> göljtàg wän ljneg."
            ],
            "raiz": "Wän"
        },
        {
            "palabra": "Trjlĵneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Trj' y 'Ljneg', lit. 'Tres líneas'",
            "acepciones": [
                "Triángulo."
            ],
            "ejemplos": [
                "Knaej <u>trjlĵneg</u> göljtàg trj ljnegen."
            ],
            "raiz": "Trj"
        },
        {
            "palabra": "Fjrlĵneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fjr' y 'Ljneg', lit. 'Cuatro líneas'",
            "acepciones": [
                "Cuadrado.",
                "Rectángulo."
            ],
            "ejemplos": [
                "Knaej fjrlĵneg göljtàg fjr ljnegen."
            ],
            "raiz": "Fjr"
        },
        {
            "palabra": "Fajwlĵneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fajw' y 'Ljneg', lit. 'Cinco líneas'",
            "acepciones": [
                "Pentágono."
            ],
            "ejemplos": [
                "Knaej fajwlĵneg göljtàg fajw ljnegen."
            ],
            "raiz": "Fajw"
        },
        {
            "palabra": "Sekslĵneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Seks' y 'Ljneg', lit. 'Seis líneas'",
            "acepciones": [
                "Hexágono."
            ],
            "ejemplos": [
                "Knaej sekslĵneg göljtàg seks ljnegen."
            ],
            "raiz": "Seks"
        },
        {
            "palabra": "Wjljnar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Liberar, emancipar, independizar.",
                "Otorgar voluntad o libre albedrío."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Wjljn"
        },
        {
            "palabra": "Wjljnaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Libertad, emancipación, independencia.",
                "Voluntad, albedrío."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Wjljn"
        },
        {
            "palabra": "Wjljnajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a libertad'",
            "acepciones": [
                "Libre, independiente."
            ],
            "ejemplos": [
               "Ölajn göljkàj <u>wjljnajes</u> kefjegen, jkë göljdogönàlentar kon." 
            ],
            "raiz": "Wjljnaj"
        },
        {
            "palabra": "Wjljnajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin libertad'",
            "acepciones": [
                "Esclavitud, dependencia, sometimiento.",
                "Servidumbre, sujeción."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Wjljnaj"
        },
        {
            "palabra": "Wjljnajafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin libertad'",
            "acepciones": [
                "Dependiente, esclavo, servidor, sujeto."
            ],
            "ejemplos": [
                "Fülwuj waej kefjegen göljkàj <u>wjljnajafes</u> tjl knaej krjtonur."
            ],
            "raiz": "Wjljnaj"
        },
        {
            "palabra": "Wjljnajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin libertad'",
            "acepciones": [
                "Esclavizar, someter, subyugar."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Wjljnaj"
        },
        {
            "palabra": "Wjljnajafkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wjljnajaf' y 'Kefjeg', lit. 'Persona sin libertad'",
            "acepciones": [
                "Esclavo (persona carente de libertad y derechos propios).",
                "Siervo, súbdito, servidor."
            ],
            "ejemplos": [
                "Wjlaej fjügul, waej <u>wjljnajafkèfjeg</u>en fjügultàg üke wöjlegaf.",
                "Fülwuj göljkàj <u>wjljnajafkèfjeg</u>en tjl Kones Dawegaj."
            ],
            "raiz": "Wjljn"
        },
        {
            "palabra": "Gräjug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Fuerza, vigor, fortaleza."
            ],
            "ejemplos": [
                "Waej glaeg göljtàg üke <u>gräjug</u>."
            ],
            "raiz": "Gräj"
        },
        {
            "palabra": "Gräjuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a fuerza'",
            "acepciones": [
                "Fuerte, vigoroso, enérgico.",
                "Robusto, fornido, forzudo, hercúleo."
            ],
            "ejemplos": [//TODO: desobedecer
                "Kjae göljsènsar <u>gräjuges</u> glaegaf för künk göljdesobedecer traej krjton.",
                "Martjn göljkàj knaej <u>gräjuges</u> sjonkèfjeg."
            ],
            "raiz": "Gräjug"
        },
        {
            "palabra": "Gräjer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Fortalecer, reforzar, robustecer."
            ],
            "ejemplos": [
                "Kon göljklàsj-gräjer waej elkjug tjl klaej laedenug."
            ],
            "raiz": "Gräj"
        },
        {
            "palabra": "Gräjugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin fuerza'",
            "acepciones": [
                "Debilidad, fragilidad."
            ],
            "ejemplos": [
                "Waej glaegaf göljkàj jkë gräjugafes."
            ],
            "raiz": "Gräjug"
        },
        {
            "palabra": "Gräjugafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin fuerza'",
            "acepciones": [
                "Débil, frágil, endeble, vulnerable.",
                "despect. Debilucho, enclenque, alfeñique."
            ],
            "ejemplos": [//TODO: golpe
                "Waej towlajug jkë göljkàj <u>gräjugafes</u>.",
                "Kjae göljkàj loke <u>gräjugafes</u> wäld tör wän golpe kjae kanskëknàwar!"
            ],
            "raiz": "Gräjug"
        },
        {
            "palabra": "Gräjugafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin fuerza'",
            "acepciones": [
                "Debilitar, enflaquecer."
            ],
            "ejemplos": [
                "Waej kojwjàgaj gägulgràjugafer waej laedenaj."
            ],
            "raiz": "Gräjug"
        },
        {
            "palabra": "Göwelar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Recordar, rememorar, evocar.",
                "Acordarse de algo reciente y desatendido."
            ],
            "ejemplos": [
                "Öl jkë göljsfàej-<u>göwelar</u> kjaes talwug...",
                "Öl trölj<u>gòwelar</u> wäld öl göljklàsj-lujkar ä Mjgàel för waej ljoneg wjl kjaes autonòwajl."
            ],
            "raiz": "Göwel"
        },
        {
            "palabra": "Göwelaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Recuerdo, memoria, remembranza (imagen puntual de la mente)."
            ],
            "ejemplos": [//TODO: niñez
                "Öl göljtàg üke <u>göwelaj</u>n tjl öles wajugonjàgneg."
            ],
            "raiz": "Göwel"
        },
        {
            "palabra": "Göwelsfàejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Göwelar' y 'Sfaejug', lit. 'Capacidad de recordar'",
            "acepciones": [
                "Memoria, retentiva (capacidad para evocar recuerdos)."
            ],
            "ejemplos": [
                "Tör kones <u>göwelsfàejug</u>, kon göljòwadegafer knaej aleged."
            ],
            "raiz": "Göwel"
        },
        {
            "palabra": "Göwelsfàejuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "calificativo"
            ],
            "descripcion": "De 'Göwelar' y 'Sfaejug', lit. 'Relativo a capacidad de recordar'",
            "acepciones": [
                "Memorioso, memorión, retentivo."
            ],
            "ejemplos": [
                "Faer kaj fejfkèfjeg, kon göljklàsj-kaj <u>göwelsfàejuges</u>."
            ],
            "raiz": "Göwel"
        },
        {
            "palabra": "Göwelsfàejugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Göwelar' y 'Sfaejugaf', lit. 'Sin capacidad de recordar'",
            "acepciones": [
                "Desmemoria (falta de memoria).",
                "med. Amnesia."
            ],
            "ejemplos": [//TODO: a veces, knaejkug
                "Knaejkugen, göljkàj tösal tag <u>göwelsfàejugaf</u>...",
                "Rikàrd göljkàj knaej kefjegon j kjae göljtàg <u>göwelsfàejugaf</u>."
            ],
            "raiz": "Göwel"
        },
        {
            "palabra": "Göwelsfàejugafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "calificativo"
            ],
            "descripcion": "De 'Göwelar' y 'Sfaejugaf', lit. 'Relativo a sin capacidad de recordar'",
            "acepciones": [
                "Desmemoriado, olvidadizo, descuidado."
            ],
            "ejemplos": [
                "—Öl frät tröljknàjkar kon wän futeg!<br>—Fälòj öl göljkàj ükon <u>göwelsfàejugafes</u>, änslaj."
            ],
            "raiz": "Göwel"
        },
        {
            "palabra": "Göwelajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin recuerdo'",
            "acepciones": [
                "Olvido (pérdida o cese de un recuerdo)."
            ],
            "ejemplos": [
                "Waej ölegenes stjlaw jkë göljkàj wjlaej <u>göwelajaf</u>."
            ],
            "raiz": "Göwelaj"
        },
        {
            "palabra": "Göwelajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin recuerdo'",
            "acepciones": [
                "Olvidar, descuidar."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Göwelaj"
        },
        {
            "palabra": "Talwug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nombre (completo para una persona).",
                "Denominación, designación."
            ],
            "ejemplos": [
                "Öl jkë göljsfàej-göwelar kjaes talwug..."
            ],
            "raiz": "Talw"
        },
        {
            "palabra": "Talwuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a nombre'",
            "acepciones": [
                "Nominal (relacionado al nombre)."
            ],
            "ejemplos": [
                "Kon jkë göljòwader kjae? Kanskë göljkàj knaej <u>talwuges</u> rëndegaf."
            ],
            "raiz": "Talwug"
        },
        {
            "palabra": "Talwer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nombrar, bautizar.",
                "Denominar, designar.",
                "coloq. Llamar, convocar, mencionar, citar."
            ],
            "ejemplos": [
                "Ölegen göljklàsj-talwer ölegenes wajug..."
            ],
            "raiz": "Talw"
        },
        {
            "palabra": "Frejeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Facilidad, sencillez, simplicidad."
            ],
            "ejemplos": [
                "Klaej jkë göljtàg <u>frejeg</u>!"
            ],
            "raiz": "Frej"
        },
        {
            "palabra": "Frejeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a facilidad'",
            "acepciones": [
                "Fácil, sencillo, simple."
            ],
            "ejemplos": [
                "Följkàj <u>frejeges</u> rawolar kon."
            ],
            "raiz": "Frejeg"
        },
        {
            "palabra": "Frejegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin facilidad'",
            "acepciones": [
                "Dificultad, complicación."
            ],
            "ejemplos": [
                "Traej göljkàj üke frejegafes."
            ],
            "raiz": "Frejeg"
        },
        {
            "palabra": "Frejegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin facilidad'",
            "acepciones": [
                "Difícil, complicado, intrincado."
            ],
            "ejemplos": [
                "Konugen göljblĵst wäld göljkàj <u>frejegafes</u> alar traej?"
            ],
            "raiz": "Frejeg"
        },
        {
            "palabra": "Wlaejaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Favor, ayuda, asistencia."
            ],
            "ejemplos": [
                "Kon göljkàj öl knaej wlaejaj?"
            ],
            "raiz": "Wlaej"
        },
        {
            "palabra": "Wlaejar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hacer un favor, ayudar, asistir.",
                "coloq. Acompañar."
            ],
            "ejemplos": [
                "Kon göljkàj-wlaejar öl?",
                "Kon wlaejar'al öl wjl klaej."
            ],
            "raiz": "Wlaej"
        },
        {
            "palabra": "Walèrja",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "exceptuado"
            ],
            "descripcion": "Palabra de patrimonio nacional",
            "acepciones": [
                "Valeria, nombre de la Gran Duquesa."
            ],
            "ejemplos": [
                "Kones Dawegaj <u>Walèrja</u> I, Gërtaj tjl Balanlàedenug."
            ],
            "raiz": "Walèrja"
        },
        {
            "palabra": "Walèrjaes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "propio",
                "relacional"
            ],
            "descripcion": "Palabra de patrimonio nacional, lit. 'Relativo a Valeria'",
            "acepciones": [
                "Valeriano (alusivo a la Gran Duquesa Valeria I)."
            ],
            "ejemplos": [
                "Fülwuj ölegen göljklàsj-fenser waej <u>Walèrjaes</u> krjtonen."
            ],
            "raiz": "Walèrja"
        },
        {
            "palabra": "Gërtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra de patrimonio nacional",
            "acepciones": [
                "Gran Duquesa (título nobiliario de la soberana de Libraterra)."
            ],
            "ejemplos": [
                "Kones Dawegaj Walèrja I, <u>Gërtaj</u> tjl Balanlàedenug."
            ],
            "raiz": "Gërt"
        },
        {
            "palabra": "Gërtajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Palabra de patrimonio nacional, lit. 'Relativo a la Gran Duquesa'",
            "acepciones": [
                "Ducal (de la Gran Duquesa o relacionado con ella)."
            ],
            "ejemplos": [
                "Traej göljkàj waej <u>gërtajes</u> öndkĵgegon, jlaek göljàgnar Walèrja I."
            ],
            "raiz": "Gërtaj"
        },
        {
            "palabra": "Gërteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra de patrimonio nacional",
            "acepciones": [
                "Gran Ducado."
            ],
            "ejemplos": [
                "<u>Gërteg</u> tjl Balanlàedenug."
            ],
            "raiz": "Gërt"
        },
        {
            "palabra": "Gërtar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Investir, proclamar o ungir a alguien como duque o duquesa."
            ],
            "ejemplos": [
                "Ölegen göljwùjk-<u>gërtar</u> kefjeged! Walèrja I göljkàj ölegenes Gërtaj!"
            ],
            "raiz": "Gërt"
        },
        {
            "palabra": "Autonòwajl",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "extranjerismo",
                "exceptuado"
            ],
            "descripcion": "Palabra adoptada artificialmente del inglés <i>'Automobile'</i>",
            "acepciones": [
                "Automóvil, auto, coche."
            ],
            "ejemplos": [
                "Öl tröljègael ä Stokòlm tröuw öles <u>autonòwajl</u>."
            ],
            "raiz": "Autonòwajl"
        },
        {
            "palabra": "Autonòwajles",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a automóvil'",
            "acepciones": [
                "Automovilístico (afín a dicho medio de transporte)."
            ],
            "ejemplos": [
                "Öl kanskëwùjk-tag knaej <u>autonòwajles</u> tänsteg!"
            ],
            "raiz": "Autonòwajl"
        },
        {
            "palabra": "Konpjùter",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "extranjerismo",
                "exceptuado"
            ],
            "descripcion": "Palabra adoptada artificialmente del inglés <i>'Computer'</i>",
            "acepciones": [
                "neo. Computadora, ordenador."
            ],
            "ejemplos": [
                "Öl göljtàg tö <u>konpjùter</u>n."
            ],
            "raiz": "Konpjùter"
        },
        {
            "palabra": "Konpjùteres",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a computadora'",
            "acepciones": [
                "neo. Computacional (de la tecnología informática o relacionado)."
            ],
            "ejemplos": [
                "Öl fjügultàg üke <u>konpjùteres</u> fëjregen, fälòj öl tröljgòwelajafar fülwuj."
            ],
            "raiz": "Konpjùter"
        },
        {
            "palabra": "Telefön",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "extranjerismo"
            ],
            "descripcion": "Palabra adoptada artificialmente del inglés <i>'Telephone'</i>",
            "acepciones": [
                "Teléfono (aparato de comunicación a distancia)."
            ],
            "ejemplos": [
                "Kon göljwùjk-söjw tör öl wjlaej <u>telefön</u>?"
            ],
            "raiz": "Telefön"
        },
        {
            "palabra": "Telefönes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a teléfono'",
            "acepciones": [
                "Telefónico (relacionado con ese dispositivo)."
            ],
            "ejemplos": [
                "Sästan göljkàj kones <u>telefönes</u> knuwereg?"
            ],
            "raiz": "Telefön"
        },
        {
            "palabra": "Telefönar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer (uso de) teléfono'",
            "acepciones": [
                "Llamar (por teléfono), telefonear."
            ],
            "ejemplos": [
                "Öl göljsfàej-<u>telefönar</u> kon fölwe?"
            ],
            "raiz": "Telefön"
        },
        {
            "palabra": "Kälatèlefön",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "extranjerismo"
            ],
            "descripcion": "De 'Kälaeg' y 'Telefön', lit. 'Teléfono con movimiento'",
            "acepciones": [
                "neo. Teléfono móvil, teléfono celular."
            ],
            "ejemplos": [
                "Waej <u>kälatèlefön</u> göljkàj waej wülasjeg tjlaej anküĵgjaeg 21."
            ],
            "raiz": "Käla"
        },
        {
            "palabra": "Kokolàt",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "extranjerismo",
                "exceptuado"
            ],
            "descripcion": "Palabra adoptada artificialmente del español <i>'Chocolate'</i>",
            "acepciones": [
                "Chocolate (pasta sólida a base de cacao)."
            ],
            "ejemplos": [
                "Öl gägulglàegeter knaej kokolàt!"
            ],
            "raiz": "Kokolàt"
        },
        {
            "palabra": "Jä",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "afirmación"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sí (expresión de afirmación)."
            ],
            "ejemplos": [],
            "raiz": "Jä"
        },
        {
            "palabra": "Tejgün",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "afirmación"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "También (incluye un sintagma a una afirmación)."
            ],
            "ejemplos": [
                "Öl tröljknàler süjkaenjàgaj tjl kokolàt, j Rikàrd <u>tejgün</u>."
            ],
            "raiz": "Tejgün"
        },
        {
            "palabra": "Jkë",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "negación"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "No (expresión de negación)."
            ],
            "ejemplos": [],
            "raiz": "Jkë"
        },
        {
            "palabra": "Tojsün",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "negación"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tampoco (incluye un sintagma a una negación)."
            ],
            "ejemplos": [
                "—Öl ündjl trölègael wëroj<br>—Öl <u>tojsün</u>."
            ],
            "raiz": "Tojsün"
        },
        {
            "palabra": "Üke",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "cantidad",
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Muy.",
                "Mucho, muchos, mucha o muchas."
            ],
            "ejemplos": [],
            "raiz": "Üke"
        },
        {
            "palabra": "Ükon",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "cantidad",
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Demasiado, demasiados, demasiada o demasiadas."
            ],
            "ejemplos": [
                "Klaej laedenug göljtàg <u>ükon</u> alentajafes krjtonen."
            ],
            "raiz": "Üke"
        },
        {
            "palabra": "Fjke",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "cantidad",
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Poco, pocos, poca o pocas."
            ],
            "ejemplos": [],
            "raiz": "Fjke"
        },
        {
            "palabra": "Loke",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "cantidad",
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tan.",
                "Tanto, tantos, tanta o tantas."
            ],
            "ejemplos": [],
            "raiz": "Loke"
        },
        {
            "palabra": "Frät",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Solo, apenas."
            ],
            "ejemplos": [
                "Kon tröljèwjd öl frät trj futegen!"
            ],
            "raiz": "Frät"
        },
        {
            "palabra": "Sälk",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Modo, manera, forma."
            ],
            "ejemplos": [
                "Kjae följsòjw öl tör waej glaegafes <u>sälk</u>."
            ],
            "raiz": "Sälk"
        },
        {
            "palabra": "Ësjl",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "comparativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Más (mayor cantidad o superioridad)."
            ],
            "ejemplos": [
                "Öles laekug jkë göljwùlasj <u>ësjl</u> süjkaj."
            ],
            "raiz": "Ësjl"
        },
        {
            "palabra": "Rädow",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "comparativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Menos (menor cantidad o inferioridad)."
            ],
            "ejemplos": [
                "Öles laedenug göljkàj <u>rädow</u> kaenegafes wäld kones."
            ],
            "raiz": "Rädow"
        },
        {
            "palabra": "Tösal",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "comparativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mejor (superior a algo)."
            ],
            "ejemplos": [
                "Öles laekug göljkàj <u>tösal</u> wäld kones."
            ],
            "raiz": "Tösal"
        },
        {
            "palabra": "Tösaler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mejorar, progresar, prosperar."
            ],
            "ejemplos": [
                "Tör klaej tänsteg, öles kängul följ<u>tòsaler</u>."
            ],
            "raiz": "Tösal"
        },
        {
            "palabra": "Tösaleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mejoría, mejora, adelanto."
            ],
            "ejemplos": [
                "Ölegenes lujkajur följtàg knaej <u>tösaleg</u> tänksakon ä klaej lödewug."
            ],
            "raiz": "Tösal"
        },
        {
            "palabra": "Wünsal",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "comparativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Peor (inferior a algo)."
            ],
            "ejemplos": [
                "Awalar tör kaenegaf göljkàj waej <u>wünsal</u>!"
            ],
            "raiz": "Wünsal"
        },
        {
            "palabra": "Wünsaler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Empeorar, desmejorar, deteriorar."
            ],
            "ejemplos": [
                "Tör fülw sonteg, klaej gölj<u>wùnsaler</u> ësjl j ësjl..."
            ],
            "raiz": "Wünsal"
        },
        {
            "palabra": "Wünsaleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Empeoramiento, deterioro, desmejora."
            ],
            "ejemplos": [
                "Waej <u>wünsaleg</u> tjl kjaes dönjleg tröljsènsar kjae knawar."
            ],
            "raiz": "Wünsal"
        },
        {
            "palabra": "Lödew",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Decidir, determinar, deliberar."
            ],
            "ejemplos": [
                "Ölajn göljklàsj-<u>lödew</u> wäld alar tör klaej kefjeget."
            ],
            "raiz": "Lödew"
        },
        {
            "palabra": "Lödewug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Decisión, determinación, deliberación."
            ],
            "ejemplos": [
                "Öl tröljàlar knaej <u>lödewug</u>: öl följùnklar öles öndkĵgeg."
            ],
            "raiz": "Lödew"
        },
        {
            "palabra": "Kläsj",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Deber, tener que (hacer algo).",
                "Adeudar o estar bajo obligación de cumplir algo."
            ],
            "ejemplos": [
                "Kon gölj<u>klàsj</u>-ökjler öles öndànördnug.",
                "Kjaegen gölj<u>klàsj</u> öl knaej grüfug!"
            ],
            "raiz": "Kläsj"
        },
        {
            "palabra": "Kläsjug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Deber, obligación, responsabilidad."
            ],
            "ejemplos": [
                "Öl göljglàegafar-täg knaej <u>kläsjug</u> tör waej läjrkĵgeg!"
            ],
            "raiz": "Kläsj"
        },
        {
            "palabra": "Kläsjuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a deber'",
            "acepciones": [
                "Obligatorio, forzoso, debido."
            ],
            "ejemplos": [
                "Göljkàj <u>kläsjuges</u> üwlaed öles talwug?"
            ],
            "raiz": "Kläsjug"
        },
        {
            "palabra": "Lujklàsjug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lujkaj' y 'Kläsjug', lit. 'Obligación de dinero'",
            "acepciones": [
                "Deuda, adeudo (dinero en deber de pagar a otra persona)."
            ],
            "ejemplos": [
                "Öl jkë göljtàg <u>lujklàsjug</u>en tör kon."
            ],
            "raiz": "Lujk"
        },
        {
            "palabra": "Laedenlujklàsjug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Ladenug', 'Lujkaj' y 'Kläsjug', lit. 'Obligación de dinero de país'",
            "acepciones": [
                "Impuesto, tributo, arancel o gravamen estatales o públicos."
            ],
            "ejemplos": [
                "Balanlàedenug göljtàg ukë <u>laedenlujklàsjug</u>en, j öl göljlùjkar klaej."
            ],
            "raiz": "Laeden"
        },
        {
            "palabra": "Laedenlujklàsjuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Ladenug', 'Lujkaj' y 'Kläsjug', lit. 'Relativo a obligación de dinero de país'",
            "acepciones": [
                "Impositivo, tributario, arancelario."
            ],
            "ejemplos": [
                "Traej laedenug följkrĵtar ësjl <u>laedenlujklàsjuges</u> krjtonen."
            ],
            "raiz": "Laeden"
        },
        {
            "palabra": "Wülasj",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Necesitar, precisar, requerir."
            ],
            "ejemplos": [
                "Kon gölj<u>wùlasj</u> wlaejaj tör traej?"
            ],
            "raiz": "Wülasj"
        },
        {
            "palabra": "Wülasjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Necesidad, precisión, requisito."
            ],
            "ejemplos": [
                "Ljwkeg göljkàj öles sëjnteges <u>wülasjeg</u>."
            ],
            "raiz": "Wülasj"
        },
        {
            "palabra": "Wülasjeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a necesidad'",
            "acepciones": [
                "Necesario, preciso, imprescindible."
            ],
            "ejemplos": [
                "Ölajn jkë göljfèlder wäld udajkàj <u>wülasjeges</u> ökjler klaej awalaurkĵgeg."
            ],
            "raiz": "Wülasjeg"
        },
        {
            "palabra": "Sëjntug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Unidad, tipo, muestra, modelo.",
                "tec. Ejemplar, espécimen."
            ],
            "ejemplos": [
                "Kon göljtàg knaej <u>sëjntug</u> tjl klaej köloreg?",
                "Öl göljwùlasj knaej tondräj <u>sëjntug</u>en tjl klaej wülejtug."
            ],
            "raiz": "Sëjnt"
        },
        {
            "palabra": "Sëjnteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Unicidad, exclusividad."
            ],
            "ejemplos": [
                "Ljwkeg göljkàj öles <u>sëjnteges</u> wülasjeg."
            ],
            "raiz": "Sëjnt"
        },
        {
            "palabra": "Sëjnteges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a unicidad'",
            "acepciones": [
                "Único, exclusivo, singular."
            ],
            "ejemplos": [
                "Klaej anördnug göljkàj <u>sëjnteges</u> tjlaej türajug."
            ],
            "raiz": "Sëjnteg"
        },
        {
            "palabra": "Sëjnter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Unificar, uniformar, aunar (logrando un todo nuevo)."
            ],
            "ejemplos": [
                "Kon göljklàsj-<u>sëjnter</u> kones glasugen."
            ],
            "raiz": "Sëjnt"
        },
        {
            "palabra": "Sëjntegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin unicidad'",
            "acepciones": [
                "Multiplicidad, pluralidad."
            ],
            "ejemplos": [
                "Öl göljglàs waej <u>sëjntegaf</u> tjl laekugen wjlaej balanlàedenuges laekfèjregur."
            ],
            "raiz": "Sëjnteg"
        },
        {
            "palabra": "Sëjntegafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin unicidad'",
            "acepciones": [
                "Reproducir, repetir, copiar, multiplicar."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Sëjnteg"
        },
        {
            "palabra": "Ewjd",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dar, entregar, otorgar.",
                "Proporcionar, suministrar, conceder."
            ],
            "ejemplos": [
                "Kon trölj<u>èwjd</u> öl frät trj futegen!"
            ],
            "raiz": "Ewjd"
        },
        {
            "palabra": "Ewjdeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Entrega, otorgamiento, concesión."
            ],
            "ejemplos": [

            ],
            "raiz": "Ewjd"
        },
        {
            "palabra": "Ewlän",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Recibir, tomar (aceptar algo que se da).",
                "Admitir, acoger.",
                "Dar la bienvenida."
            ],
            "ejemplos": [
                "Öl jkë följ<u>èwlän</u> traej.",
                "Öl trölj<u>èwlän</u> kjae wjl ölugenes öndkĵgeget.",
                "Ölugen gölj<u>èwlän</u> konugen ä waej fjndaj tjlaej läjrkĵgeg!"
            ],
            "raiz": "Ewlän"
        },
        {
            "palabra": "Ewläneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Recepción, recibo.",
                "Admisión, acogida.",
                "Bienvenida (acción de recibir a alguien)."
            ],
            "ejemplos": [
                "Öles <u>ewläneg</u> tröljkàj ljwkeges.",
                "Trölj tjl kones <u>ewläneg</u>, öl göljwùlasj wäld kon udajlùjkar, tjsälk wlaejaj.",
                "Öl tröljtàg knaej enäjeges <u>ewläneg</u> wjl klaej laedenug!"
            ],
            "raiz": "Ewlän"
        },
        {
            "palabra": "Ewläneges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a recepción'",
            "acepciones": [
                "Acogedor, hospitalario, receptivo."
            ],
            "ejemplos": [
                "Waej awalkèfjeg tröljèwjd ölegen wän awalaurkĵgeg, kjae fjügulkàj üke <u>ewläneges</u>."
            ],
            "raiz": "Ewläneg"
        },
        {
            "palabra": "Knäler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Elegir, escoger, seleccionar, optar."
            ],
            "ejemplos": [
                "Kon <u>knäler</u>'al waej ësjl bljuneges."
            ],
            "raiz": "Knäl"
        },
        {
            "palabra": "Knälug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Elección, selección, opción."
            ],
            "ejemplos": [
                "Öl göljtàg <u>knälug</u>ed... öl göljklàsj-ëgael."
            ],
            "raiz": "Knäl"
        },
        {
            "palabra": "Knäluges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a elección'",
            "acepciones": [
                "Electivo, selectivo, optativo u opcional."
            ],
            "ejemplos": [
                "Jkë göljkàj wülasjeges alar traej, göljkàj <u>knäluges</u>."
            ],
            "raiz": "Knälug"
        },
        {
            "palabra": "Rënder",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Resolver, solucionar, solventar (generalmente algo inmaterial)."
            ],
            "ejemplos": [
                "Öl göljklàsj-<u>rënder</u> fülwuj kjaes rëndegafen."
            ],
            "raiz": "Rënd"
        },
        {
            "palabra": "Rëndeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Resolución, solución, solventación (generalmente algo inmaterial)."
            ],
            "ejemplos": [
                "Klaej kefjeg göljtàg <u>rëndeg</u>ed..."
            ],
            "raiz": "Rënd"
        },
        {
            "palabra": "Rëndeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a resolución'",
            "acepciones": [
                "Resolutorio, concluyente, decisivo (que provee solución definitiva)."
            ],
            "ejemplos": [
                "Öl göljtàg knaej <u>rëndeges</u> rëndfèldug!"
            ],
            "raiz": "Rëndeg"
        },
        {
            "palabra": "Rëndegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin solución'",
            "acepciones": [
                "Problema, cuestión, inconveniente."
            ],
            "ejemplos": [
                "Öles jagneg jkë göljtàg üke <u>rëndegaf</u>en."
            ],
            "raiz": "Rëndeg"
        },
        {
            "palabra": "Rëndegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a sin solución'",
            "acepciones": [
                "Problemático (que causa o supone un problema)."
            ],
            "ejemplos": [
                "Sandor göljkàj knaej <u>rëndegafes</u> sjonkèfjeg, kjae träsjl göljkàj wjl knaejteg färaleges."
            ],
            "raiz": "Rëndeg"
        },
        {
            "palabra": "Güwlan",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Junto a (algo en compañía o cercanía con otra cosa)."
            ],
            "ejemplos": [
                "Öl följkàj <u>güwlan</u> öles öndkĵgeg."
            ],
            "raiz": "Güwl"
        },
        {
            "palabra": "Güwluj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "ling. Expresión adjetiva sirviente de adverbio y equivalente a juntos o juntas."
            ],
            "ejemplos": [
                "Samànta j öl följljòner <u>güwluj</u> traej swoleg."
            ],
            "raiz": "Güwl"
        },
        {
            "palabra": "Güwler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Juntar, combinar, mezclar, fusionar."
            ],
            "ejemplos": [
                "Kon göljklàsj-<u>güwler</u> waej fülwugen faer rjwdar traej laekug."
            ],
            "raiz": "Güwl"
        },
        {
            "palabra": "Güwlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mezcla, fusión, combinación."
            ],
            "ejemplos": [
                "Waej <u>güwlug</u> tjl ulerug tör dönjlaj göljsfàej-sënsar knaweg."
            ],
            "raiz": "Güwl"
        },
        {
            "palabra": "Sënsar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Causar, provocar, ocasionar, desencadenar."
            ],
            "ejemplos": [
                "Waej güwlug tjl ulerug tör dönjlaj göljsfàej-<u>sënsar</u> knaweg."
            ],
            "raiz": "Sëns"
        },
        {
            "palabra": "Sënseg",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Causa, motivo (razón por la que sucede algo)."
            ],
            "ejemplos": [
                "Kon göljkàj waej <u>sënseg</u> tjl öles rëndegafen."
            ],
            "raiz": "Sëns"
        },
        {
            "palabra": "Sënseges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a causa'",
            "acepciones": [
                "Causante, motivante, responsable."
            ],
            "ejemplos": [
                "Sästan göljkàj waej <u>sënseges</u> dönjlegaf tjl klaej wöjlegaf?"
            ],
            "raiz": "Sënseg"
        },
        {
            "palabra": "Froj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aquí, acá."
            ],
            "ejemplos": [],
            "raiz": "Froj"
        },
        {
            "palabra": "Wëroj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Allí, allá, ahí."
            ],
            "ejemplos": [
                "Faer rjwdar <u>wëroj</u>, kon göljklàsj-ëgael ä waej frjweg."
            ],
            "raiz": "Wëroj"
        },
        {
            "palabra": "Wërojkàlaer",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wëroj' y 'Kalaer', lit. 'Mover allí'",
            "acepciones": [
                "Llevar, portar, cargar."
            ],
            "ejemplos": [
                "Kon följwùlasj-<u>wërojkàlaer</u> laekug, ö kon följtàg laekugaf."
            ],
            "raiz": "Wëroj"
        },
        {
            "palabra": "Føjleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Norte, septentrión (punto cardinal)."
            ],
            "ejemplos": [],
            "raiz": "Føjl"
        },
        {
            "palabra": "Føjleges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo al norte'",
            "acepciones": [
                "Norteño, septentrional, boreal."
            ],
            "ejemplos": [
                "Swjarlàedenug göljkàj knaej <u>føjleges</u> laedenug, fjsljeges ä waej ölegenes."
            ],
            "raiz": "Føjleg"
        },
        {
            "palabra": "Føjlar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "coloq. Encontrar el norte, orientarse, ubicarse."
            ],
            "ejemplos": [],
            "raiz": "Føjl"
        },
        {
            "palabra": "Frjweg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sur, sud, meridión (punto cardinal)."
            ],
            "ejemplos": [
                "Faer rjwdar wëroj, kon göljklàsj-ëgael ä waej <u>frjweg</u>."
            ],
            "raiz": "Frjw"
        },
        {
            "palabra": "Frjweges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sur'",
            "acepciones": [
                "Sureño, meridional, austral."
            ],
            "ejemplos": [
                "Antàrtjka göljkàj waej ësjl <u>frjweges</u> laedenugur."
            ],
            "raiz": "Frjweg"
        },
        {
            "palabra": "Ruwlejneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Oeste, poniente, occidente (punto cardinal)."
            ],
            "ejemplos": [],
            "raiz": "Ruwlejn"
        },
        {
            "palabra": "Ruwlejneges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a occidente'",
            "acepciones": [
                "Occidental (situado al oeste)."
            ],
            "ejemplos": [//TODO: cultura
                "Ölegen göljtàg waej <u>ruwlejneges</u> cultura."
            ],
            "raiz": "Ruwlejneg"
        },
        {
            "palabra": "Ruwtaeneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Este, naciente, oriente (punto cardinal)."
            ],
            "ejemplos": [],
            "raiz": "Ruwtaen"
        },
        {
            "palabra": "Ruwtaeneges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a oriente'",
            "acepciones": [
                "Oriental (situado al este)."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Ruwtaeneg"
        },
        {
            "palabra": "Stjlaw",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aún, todavía (persistencia de algo hasta este momento)."
            ],
            "ejemplos": [
                "Waej jönug tjl klaej beräteg <u>stjlaw</u> jkë tröljkàj-fejferes."
            ],
            "raiz": "Stjlaw"
        },
        {
            "palabra": "Sëlg",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tarde (tardíamente, con retraso)."
            ],
            "ejemplos": [
                "Trudaj kon tröljfrògael <u>sëlg</u>."
            ],
            "raiz": "Sëlg"
        },
        {
            "palabra": "Sëlgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tardanza, demora, retraso."
            ],
            "ejemplos": [
                "Kjae göljkàj <u>sëlgeg</u>es, tröljklàsj-rjwdar ä waej 10:00."
            ],
            "raiz": "Sëlg"
        },
        {
            "palabra": "Sëlgeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a tardanza'",
            "acepciones": [
                "Tardío, retardado."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Sëlgeg"
        },
        {
            "palabra": "Sëlger",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Retardar, demorar, retrasar."
            ],
            "ejemplos": [
                "Tjsälk wlaejaj, kon <u>sëlger</u>'al waej laektàjkleg knaej fjke."
            ],
            "raiz": "Sëlg"
        },
        {
            "palabra": "Gënw",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Temprano, pronto (tempranamente, con antelación)."
            ],
            "ejemplos": [
                "Trudaj kon tröljfrògael <u>gënw</u>."
            ],
            "raiz": "Gënw"
        },
        {
            "palabra": "Gënwaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tempranez, antelación, anticipación."
            ],
            "ejemplos": [
                "Kjae tröljfrògael ä waej aurug tör <u>gënwaj</u>."
            ],
            "raiz": "Gënw"
        },
        {
            "palabra": "Gënwajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a tempranez'",
            "acepciones": [
                "Anticipado, adelantado, prematuro, precoz."
            ],
            "ejemplos": [
                "Ölegen tröljtàg knaej <u>gënwajes</u> knöjsjònug, fjslj tjlaej 6:00."
            ],
            "raiz": "Gënwaj"
        },
        {
            "palabra": "Gënwar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Anticipar, adelantar, darle más tempranez a algo."
            ],
            "ejemplos": [
                "Ölegen göljsfàej-<u>gënwar</u> waej aurug?"
            ],
            "raiz": "Gënw"
        },
        {
            "palabra": "Kanskë",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "dubitativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Quizás, tal vez, posiblemente."
            ],
            "ejemplos": [],
            "raiz": "Kanskë"
        },
        {
            "palabra": "Alëred",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ya (sucedido antes), previamente."
            ],
            "ejemplos": [],
            "raiz": "Alëred"
        },
        {
            "palabra": "Raewenj",
            "tipo": [
                "Adverbio", 
                "conjunción"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mientras (simultaneidad de acciones)."
            ],
            "ejemplos": [
                "Kjae tröljdàljajafar öl raewenj öl fjügulwàst kjaes wastúrnugen."
            ],
            "raiz": "Raewenj"
        },
        {
            "palabra": "Wäld",
            "tipo": [
                "Conjunción", "pronombre", "interjección"
            ],
            "subtipo": [
                "múltiple", "interrogativo", "impropia"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Que.",
                "Qué (en tono interrogatorio)."
            ],
            "ejemplos": [
                "Öles laedenug göljkàj rädow kaenegafes wäld waej kones.",
                "Wäld ölegen följlàeker?"
            ],
            "raiz": "Wäld"
        },
        {
            "palabra": "Tjsälk",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "múltiple", "interrogativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Como, igual que.",
                "Cómo (en tono interrogatorio)."
            ],
            "ejemplos": [
                "Juljàna göljtàg tjsälk fajw tökèfjegen.",
                "Tjsälk kon göljkàj udaj?"
            ],
            "raiz": "Tjsälk"
        },
        {
            "palabra": "Künk",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "relativo", "interrogativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Quien, quienes.",
                "Quién, quiénes (en tono interrogatorio)."
            ],
            "ejemplos": [
                "Traej göljkàj Markus, künk tröljràwolar öl.",
                "Künk tröljfjàlaj öles grüfug?"
            ],
            "raiz": "Künk"
        },
        {
            "palabra": "Laswäld",
            "tipo": [
                "Conjunción", "adverbio"
            ],
            "subtipo": [
                "múltiple", "interrogativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Porque.",
                "Por qué (en tono interrogatorio)."
            ],
            "ejemplos": [
                "Öl tröljègael ä kjaes öndkĵgeg, laswäld kjae fjügulwùlasj wlaejaj.",
                "Laswäld kon tröljàlar traej ä öl?"
            ],
            "raiz": "Laswäld"
        },
        {
            "palabra": "Dëjwel",
            "tipo": [
                "Conjunción", "adverbio"
            ],
            "subtipo": [
                "relativo", "interrogativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cuando.",
                "Cuándo (en tono interrogatorio)."
            ],
            "ejemplos": [
                "Kon söjw'al öl <u>dëjwel</u> kon udajkàj wëroj.",
                "<u>Dëjwel</u> göljkàj waej Krjstòf'es wàjdaj?"
            ],
            "raiz": "Dëjwel"
        },
        {
            "palabra": "Jlaek",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "relativo", "interrogativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Donde.",
                "Dónde (en tono interrogatorio)."
            ],
            "ejemplos": [
                "Öl följègael ä jlaek göljàw kulkeg.",
                "—Jlaek göljkàj öles laekug?<br>—Wëroj, döjk."
            ],
            "raiz": "Jlaek"
        },
        {
            "palabra": "Bäjgun",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "relativo", 
                "interrogativo",
                "exclamativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cuanto, cuantos, cuanta o cuantas.",
                "Cuánto, cuántos, cuánta o cuántas (en tono interrogatorio).",
                "Cuán (énfasis sobre adjetivo o adverbio)."
            ],
            "ejemplos": [
                "Öl följàwalar <u>bäjgun</u> awalkòjwegen öl udajwùjk!",
                "<u>Bäjgun</u> fjsljkèfjegen kon göljtàg?",
                "<u>Bäjgun</u> ljwkeges öl göljkàj!"
            ],
            "raiz": "Bäjgun"
        },
        {
            "palabra": "Sästan",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "relativo", "interrogativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cual, cuales.",
                "Cuál, cuáles (en tono interrogatorio)."
            ],
            "ejemplos": [
                "Öles fjsljkèfjegur, <u>sästan</u> göljkàj üke gërflegones, göljàgnar wëroj.",
                "<u>Sästan</u> göljkàj kones dëwoneges wülejtugen?"
            ],
            "raiz": "Sästan"
        },
        {
            "palabra": "Arwjl",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Izquierda (dirección).",
                "Corriente política de izquierda."
            ],
            "ejemplos": [],
            "raiz": "Arwjl"
        },
        {
            "palabra": "Arwjles",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a izquierda'",
            "acepciones": [
                "Izquierdo, zurdo, siniestro (del lado de la izquierda o relacionado con tal)."
            ],
            "ejemplos": [
                "Kones <u>arwjles</u> wastùrnug göljkàj-dönjlajafares."
            ],
            "raiz": "Arwjl"
        },
        {
            "palabra": "Ökerjl",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Derecha (dirección).",
                "Corriente política de derecha."
            ],
            "ejemplos": [],
            "raiz": "Ökerjl"
        },
        {
            "palabra": "Ökerjles",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a derecha'",
            "acepciones": [
                "Derecho, diestro (del lado de la derecha o relacionado con tal)."
            ],
            "ejemplos": [
                "Öl göljkàj <u>ökerjles</u>, tjsälk üke kefjegen."
            ],
            "raiz": "Ökerjl"
        },
        {
            "palabra": "J",
            "tipo": [
                "Conjunción"
            ],
            "subtipo": [
                "copulativa"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Y (unión o enumeración de dos cosas)."
            ],
            "ejemplos": [
                "Öl göljwùjk laekug j fjalaj, tjsälk wlaejaj."
            ],
            "raiz": "J"
        },
        {
            "palabra": "Ö",
            "tipo": [
                "Conjunción"
            ],
            "subtipo": [
                "copulativa"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "O (alternativa entre una cosa y otra)."
            ],
            "ejemplos": [
                "Kon göljwùjk blutbeg ö rödeg?"
            ],
            "raiz": "Ö"
        },
        {
            "palabra": "Daj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Día, jornada, fecha."
            ],
            "ejemplos": [],
            "raiz": "Daj"
        },
        {
            "palabra": "Dajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a día'",
            "acepciones": [
                "Diario, periódico, cotidiano (de cada día)."
            ],
            "ejemplos": [
                "Laeker göljkàj knaej <u>dajes</u> üskug."
            ],
            "raiz": "Daj"
        },
        {
            "palabra": "Wàjdaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "esdrujulización"
            ],
            "descripcion": "De 'Wajug' y 'Daj', lit. 'Día de nacimiento'",
            "acepciones": [
                "Fecha de nacimiento.",
                "Cumpleaños, aniversario de nacimiento."
            ],
            "ejemplos": [
                "Tjsälk wlaejaj, kon üwlaed'al öl kones <u>wàjdaj</u>.",
                "Ljwkeges <u>wàjdaj</u> faer kon!"
            ],
            "raiz": "Waj"
        },
        {
            "palabra": "Wajdajkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wajug', 'Daj' y 'Kefjeg', lit. 'Persona con día de nacimiento'",
            "acepciones": [
                "Cumpleañero (persona que celebra cumpleaños)."
            ],
            "ejemplos": [
                "Udaj öl gölj waej <u>wajdajkèfjeg</u>, göljàlar wäld öl göljùwlaed!"
            ],
            "raiz": "Waj"
        },
        {
            "palabra": "Wĵljndaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto", "esdrujulización"
            ],
            "descripcion": "De 'Wjljnaj' y 'Daj', lit. 'Día con libertad'",
            "acepciones": [
                "Día de fin de semana.",
                "Día feriado o no laborable."
            ],
            "ejemplos": [
                "Öl göljkàj ljwkeges, udaj göljkàj wĵljndaj!"
            ],
            "raiz": "Wjljn"
        },
        {
            "palabra": "Sĵwedaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "esdrujulización"
            ],
            "descripcion": "De 'Sjwe' y 'Daj', lit. 'Siete días'",
            "acepciones": [
                "Semana."
            ],
            "ejemplos": [],
            "raiz": "Sjwe"
        },
        {
            "palabra": "Sĵwedajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "esdrujulización",
                "relacional"
            ],
            "descripcion": "De 'Sjwe' y 'Daj', lit. 'Relativo a siete días'",
            "acepciones": [
                "Semanal, hebdomadario (de cada semana)."
            ],
            "ejemplos": [
                "Klaej göljkàj öles <u>sĵwedajes</u> lujkaj."
            ],
            "raiz": "Sjwe"
        },
        {
            "palabra": "Trĵtjödaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "esdrujulización"
            ],
            "descripcion": "De 'Trj', 'Tjö' y 'Daj', lit. 'Tres decenas de días'",
            "acepciones": [
                "Mes."
            ],
            "ejemplos": [
                "Wjl wäld <u>trĵtjödaj</u> ölegen göljkàj?"
            ],
            "raiz": "Trj"
        },
        {
            "palabra": "Trĵtjödajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "esdrujulización",
                "relacional"
            ],
            "descripcion": "De 'Trj', 'Tjö' y 'Daj', lit. 'Relativo a tres decenas de días'",
            "acepciones": [
                "Mensual (de cada mes)."
            ],
            "ejemplos": [
                "Kon göljklàsj-alar wän <u>trĵtjödajes</u> visita ä waej dönjlkèfjeg."
            ],
            "raiz": "Trj"
        },
        {
            "palabra": "Dëwoneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Favoritismo, preferencia, predilección."
            ],
            "ejemplos": [
                "Sästan göljkàj kones <u>dëwoneg</u>es wülejtugen?"
            ],
            "raiz": "Dëwon"
        },
        {
            "palabra": "Dëwoneges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a favoritismo'",
            "acepciones": [
                "Favorito, preferido, predilecto."
            ],
            "ejemplos": [
                "Traej göljkàj öles <u>dëwoneges</u> laejreget!"
            ],
            "raiz": "Dëwoneg"
        },
        {
            "palabra": "Dëwonar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Preferir, tener predilección por algo."
            ],
            "ejemplos": [
                "Öl gölj<u>dèwonar</u>-laeker klaej wäld traej."
            ],
            "raiz": "Dëwon"
        },
        {
            "palabra": "Jgjaeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Año, temporada."
            ],
            "ejemplos": [],
            "raiz": "Jgja"
        },
        {
            "palabra": "Jgjaeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a año'",
            "acepciones": [
                "Anual, añal (de cada año)."
            ],
            "ejemplos": [
                "Öl göljèwlän wän <u>jgjaeges</u> roglug tjl öles fjsljkèfjegur."
            ],
            "raiz": "Jgjaeg"
        },
        {
            "palabra": "Jgjaeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Año pequeño'",
            "acepciones": [
                "Estación (período del año entre un equinoccio y un solsticio, o viceversa)."
            ],
            "ejemplos": [],
            "raiz": "Jgjaeg"
        },
        {
            "palabra": "Fajwĵgjaeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fajw' e 'Jgjaeg', lit. 'Cinco años'",
            "acepciones": [
                "Lustro, quinquenio (período de cinco años)."
            ],
            "ejemplos": [
                "Kon följklàsj-fènser trësjaw ësjl wäld wän <u>fajwĵgjaeg</u> faer kaj dönjlkèfjeg."
            ],
            "raiz": "Fajw"
        },
        {
            "palabra": "Tjöĵgjaeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Tjö' e 'Jgjaeg', lit. 'Diez años'",
            "acepciones": [
                "Década, decenio (período de diez años)."
            ],
            "ejemplos": [
                "Waej laejreg tjl klaej <u>tjöĵgjaeg</u> göljkàj färaleges!"
            ],
            "raiz": "Tjö"
        },
        {
            "palabra": "Anküĵgjaeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Anküj' e 'Jgjaeg', lit. 'Cien años'",
            "acepciones": [
                "Siglo, centuria."
            ],
            "ejemplos": [
                "Waej kälatèlefön göljkàj waej wülasjeg tjlaej <u>anküĵgjaeg</u> 21."
            ],
            "raiz": "Anküj"
        },
        {
            "palabra": "Kaenĵgjaeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kaenaj' y 'Jgjaeget', lit. 'Año pequeño con nieve'",
            "acepciones": [
                "Invierno."
            ],
            "ejemplos": [
                "Öl göljglàs waej <u>kaenĵgjaeget</u> laswäld klaej göljtàg kaenaj!"
            ],
            "raiz": "Kaen"
        },
        {
            "palabra": "Kaenĵgjaegetes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Kaenaj' y 'Jgjaeget', lit. 'Relativo a año pequeño con nieve'",
            "acepciones": [
                "Invernal, hibernal."
            ],
            "ejemplos": [
                "Öl göljwùlasj üke <u>kaenĵgjaegetes</u> kefjdĵlugetur."
            ],
            "raiz": "Kaen"
        },
        {
            "palabra": "Sjonĵgjaeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjonug' y 'Jgjaeget', lit. 'Año pequeño con sol'",
            "acepciones": [
                "Verano."
            ],
            "ejemplos": [
                "Wjlaej <u>sjonĵgjaeget</u> göljàw üke kaenegaf."
            ],
            "raiz": "Sjon"
        },
        {
            "palabra": "Sjonĵgjaegetes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Sjonug' y 'Jgjaeget', lit. 'Relativo a año pequeño con sol'",
            "acepciones": [
                "Veraniego, estival."
            ],
            "ejemplos": [
                "Waej wjndleg tröljkàlaer waej <u>sjonĵgjaegetes</u> enäjàrgugen för fülwuj waej öndkĵgeg."
            ],
            "raiz": "Sjon"
        },
        {
            "palabra": "Wuljgĵgjaeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wuljgaj' y 'Jgjaeget', lit. 'Año pequeño con plantas'",
            "acepciones": [
                "Primavera."
            ],
            "ejemplos": [],
            "raiz": "Wuljg"
        },
        {
            "palabra": "Wuljgĵgjaegetes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Wuljgaj' y 'Jgjaeget', lit. 'Relativo a año pequeño con plantas'",
            "acepciones": [
                "Primaveral, vernal."
            ],
            "ejemplos": [
                "Klaej göljkàj knaej <u>wuljgĵgjaegetes</u> bljunwùljgaj."
            ],
            "raiz": "Wuljg"
        },
        {
            "palabra": "Döjkĵgjaeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Döjkug' y 'Jgjaeget', lit. 'Año pequeño con caída'",
            "acepciones": [
                "Otoño."
            ],
            "ejemplos": [],
            "raiz": "Döjk"
        },
        {
            "palabra": "Döjkĵgjaegetes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Döjkug' y 'Jgjaeget', lit. 'Relativo a año pequeño con caída'",
            "acepciones": [
                "Otoñal, autumnal."
            ],
            "ejemplos": [
                "Waej laedejwùljgaj fjügultàg <u>döjkĵgjaegetes</u> wuljgtèfjajeten."
            ],
            "raiz": "Döjk"
        },
        {
            "palabra": "Fölwe",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ya (de inmediato), enseguida, a continuación."
            ],
            "ejemplos": [
                "—Dëjwel kon göljwùjk klaej?<br>—<u>Fölwe</u>."
            ],
            "raiz": "Fölwe"
        },
        {
            "palabra": "Gölj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ahora, actualmente (en este momento)."
            ],
            "ejemplos": [
                "—Dëjwel kon följègael ä waej lujkĵgeg?<br>—<u>Gölj</u>!"
            ],
            "raiz": "Gölj"
        },
        {
            "palabra": "Udaj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hoy, este día."
            ],
            "ejemplos": [
                "Udaj göljkàj knaej bljuneges daj!"
            ],
            "raiz": "Udaj"
        },
        {
            "palabra": "Gägul",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Presente, actualidad, modernidad."
            ],
            "ejemplos": [],
            "raiz": "Gägul"
        },
        {
            "palabra": "Gägules",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a presente'",
            "acepciones": [
                "Actual, presente, moderno."
            ],
            "ejemplos": [
                "Künk göljkàj kjaes <u>gägules</u> glaekèfjeg?"
            ],
            "raiz": "Gägul"
        },
        {
            "palabra": "Fjügul",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pasado, pretérito (momento temporal)."
            ],
            "ejemplos": [],
            "raiz": "Fjügul"
        },
        {
            "palabra": "Fjügules",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a pasado'",
            "acepciones": [
                "Pasado, pretérito (perteneciente a ese momento)."
            ],
            "ejemplos": [
                "Frjwslawjlàedenug jkë göljàgnar ësjl, göljkàj knaej <u>fjügules</u> laedenug."
            ],
            "raiz": "Fjügul"
        },
        {
            "palabra": "Trölj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Antes, hace un rato."
            ],
            "ejemplos": [],
            "raiz": "Trölj"
        },
        {
            "palabra": "Trudaj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ayer, el día anterior."
            ],
            "ejemplos": [],
            "raiz": "Trudaj"
        },
        {
            "palabra": "Följ",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Después, luego, pronto."
            ],
            "ejemplos": [],
            "raiz": "Följ"
        },
        {
            "palabra": "Wändaj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "De 'Wän' y 'Daj'",
            "acepciones": [
                "Mañana, día siguiente, día después."
            ],
            "ejemplos": [],
            "raiz": "Wändaj"
        },
        {
            "palabra": "Kängul",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Futuro, porvenir, posteridad."
            ],
            "ejemplos": [
                "Göljùwlaed wäld kjae göljsfàej-wast waej <u>kängul</u>."
            ],
            "raiz": "Kängul"
        },
        {
            "palabra": "Kängules",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a futuro'",
            "acepciones": [
                "Futuro, venidero, posterior."
            ],
            "ejemplos": [//TODO: falta
                "Waej <u>kängules</u> kefjeguren följklàsj-rënder waej falta tjl jagaj."
            ],
            "raiz": "Kängul"
        },
        {
            "palabra": "Knöj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Arriba, en lo alto (dirección)."
            ],
            "ejemplos": [
                "Kon was'al <u>knöj</u>, wäld knaej bljuneges gaelwùlejtug!"
            ],
            "raiz": "Knöj"
        },
        {
            "palabra": "Knöjan",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Encima, sobre (en la parte superior de algo)."
            ],
            "ejemplos": [
                "Waej grüfug göljkàj <u>knöjan</u> waej laektajklànördnug."
            ],
            "raiz": "Knöj"
        },
        {
            "palabra": "Knöjar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Subir, ascender.",
                "coloq. Mejorar, desarrollar."
            ],
            "ejemplos": [],
            "raiz": "Knöj"
        },
        {
            "palabra": "Knöjaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Subida, ascenso."
            ],
            "ejemplos": [
                "Waej <u>knöjaj</u> tjlaej kronug tröljàlar fülwuj waej kefjegen ljwkeges."
            ],
            "raiz": "Knöj"
        },
        {
            "palabra": "Döjk",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Abajo, en lo bajo (dirección)."
            ],
            "ejemplos": [
                "—Jlaek göljkàj öles laekug?<br>—Wëroj, döjk."
            ],
            "raiz": "Döjk"
        },
        {
            "palabra": "Döjkan",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Debajo (en la parte inferior de algo)."
            ],
            "ejemplos": [
                "Kones lujkaj kanskëklàsj-kaj <u>döjkan</u> waej öles fejfug." 
            ],
            "raiz": "Döjk"
        },
        {
            "palabra": "Döjker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Bajar, descender, caer."
            ],
            "ejemplos": [],
            "raiz": "Döjk"
        },
        {
            "palabra": "Döjkug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Bajada, descenso, caída."
            ],
            "ejemplos": [],
            "raiz": "Döjk"
        },
        {
            "palabra": "Sëgt",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dentro, en el interior."
            ],
            "ejemplos": [
                "—Jlaek göljkàj öles kefjdĵlugetur?<br>—<u>Sëgt</u> tjlaej awalaurkĵgeg."
            ],
            "raiz": "Sëgt"
        },
        {
            "palabra": "Sëgtan",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Adentro (hacia el interior)."
            ],
            "ejemplos": [
                "—Ölajn ëgael'al <u>sëgtan</u>.<br>—Kon göljkàj kördajafes!"
            ],
            "raiz": "Sëgt"
        },
        {
            "palabra": "Sëgtar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Entrar, ingresar, acceder."
            ],
            "ejemplos": [
                "Öl göljsfàej-<u>sëgtar</u> ä kones öndkĵgeg?"
            ],
            "raiz": "Sëgt"
        },
        {
            "palabra": "Sëgtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Entrada, ingreso, acceso."
            ],
            "ejemplos": [
                "Kjaes <u>sëgtaj</u> tröljtàjklar fülwuj waej rjnlugen tjlaej aurkĵgeg."
            ],
            "raiz": "Sëgt"
        },
        {
            "palabra": "Sëgtajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a entrada'",
            "acepciones": [
                "Entrante, ingresante."
            ],
            "ejemplos": [
                "Waej <u>sëgtajes</u> sjonug tröljlàjter öles rjntèfjajon."
            ],
            "raiz": "Sëgtaj"
        },
        {
            "palabra": "Sëgteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Interior (sector por dentro de algo).",
                "Intimidad (aspecto profundo de una persona)."
            ],
            "ejemplos": [
                "—Jlaek göljkàj öles lajtrjgëlànördnug?<br>—Wjlaej <u>sëgteg</u> tjl kones autonòwajl.",
                "Tjsälk wlaejaj, kon klën'al öles <u>sëgteg</u>."
            ],
            "raiz": "Sëgt"
        },
        {
            "palabra": "Sëgteges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a interior'",
            "acepciones": [
                "Interior, interno (situado en el interior).",
                "Íntimo, personal, recóndito."
            ],
            "ejemplos": [
                "Waej bjselùrnugen göljkàj <u>sëgteges</u> ürnugen.",
                "Öl jkë göljwùjk-beräter kon, göljkàj knaej <u>sëgteges</u> rëndegaf."
            ],
            "raiz": "Sëgteg"
        },
        {
            "palabra": "Fjndar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Abrir, descubrir, destapar (despejar cualquier abertura o comunicación hacia el exterior).",
                "coloq. Iniciar, inaugurar, estrenar."
            ],
            "ejemplos": [
                "Kon följ<u>fĵndar</u> kones roglug?",
                "Udaj ölajn följ<u>fĵndar</u> knaej dësljkĵgeg!"
            ],
            "raiz": "Fjnd"
        },
        {
            "palabra": "Fjndaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Abertura, apertura (acción de abrir algo).",
                "coloq. Inauguración, estreno."
            ],
            "ejemplos": [
                "Wjlaej <u>fjndaj</u> tjl kones wastùrnugen, öl tröljòwader waej ljwkeg.",
                "Ölugen göljèwlän konugen ä waej <u>fjndaj</u> tjlaej läjrkĵgeg!"
            ],
            "raiz": "Fjnd"
        },
        {
            "palabra": "Fjndajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Abierto (comunicado con el exterior).",
                "coloq. Inaugural, preliminar.",
                "coloq. Comprensivo y respetuoso."
            ],
            "ejemplos": [//TODO: buscar TODO: fiesta
                "Kjaes <u>fjndajes</u> wastùrnugen tröljbuscar waej lajteg tjlaej wärteges awalkòjweg.",
                "Göljkàj waej <u>fjndajes</u> fiesta, kon göljklàsj-ëgael!",
                "Kones fjsljkèfjegur göljkàj ükon <u>fjndajes</u>."
            ],
            "raiz": "Fjndaj"
        },
        {
            "palabra": "Tensgar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cerrar, tapar, sellar (bloquear cualquier abertura o comunicación hacia el exterior).",
                "coloq. Clausurar, finalizar."
            ],
            "ejemplos": [
                "Kon göljsfàej-<u>tensgar</u> waej kjgsègtaj?",
                "Klaej kefjegur gägul<u>tènsgar</u>."
            ],
            "raiz": "Tensg"
        },
        {
            "palabra": "Tensgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cierre, cerramiento (acción de cerrar algo).",
                "coloq. Clausura, finalización."
            ],
            "ejemplos": [
                "Waej <u>tensgaj</u> tjlaej kjgsègtaj göljklàsj-kaj kulkeges.",
                "Udaj göljkàj waej <u>tensgaj</u> tjl öles jagneg."
            ],
            "raiz": "Tensg"
        },
        {
            "palabra": "Tensgajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a cierre'",
            "acepciones": [
                "Cerrado (incomunicado con el exterior).",
                "coloq. Que denota clausura o finalización.",
                "coloq. Cabezadura e intransigente."
            ],
            "ejemplos": [//TODO: mano
                "Öles <u>tensgajes</u> j kaeneges manos göljwùlasj wjljnaj.",
                "Klaej göljkàj waej <u>tensgajes</u> ceremonia tjlaej jgjaeg.",
                "Kon jkë üwlaed'al kjae kjøne kones tänsteg, kjae göljkàj üke <u>tensgajes</u>."
            ],
            "raiz": "Tensgaj"
        },
        {
            "palabra": "Kjgsègtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kjgeg' y 'Sëgtaj', lit. 'Entrada de lugar'",
            "acepciones": [
                "Puerta (abertura de un edificio).",
                "coloq. Punta de partida hacia algo."
            ],
            "ejemplos": [
                "Kon göljsfàej-tensgar waej <u>kjgsègtaj</u>?",
                "Waej ulerug göljsfàej-kaj waej <u>kjgsègtaj</u> ä üke rëndegafen."
            ],
            "raiz": "Kjg"
        },
        {
            "palabra": "Kjglàedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kjgeg' y 'Laedejug', lit. 'Suelo de lugar'",
            "acepciones": [
                "Piso, pavimento, solado (superficie de material sobre el suelo)."
            ],
            "ejemplos": [
                "Öl göljglàs klaej <u>kjglàedejug</u>, klaej göljkàj daentajes."
            ],
            "raiz": "Kjg"
        },
        {
            "palabra": "Kjgtèfjajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kjgeg' y 'Tëfjajon', lit. 'Capa grande de lugar'",
            "acepciones": [
                "Techo, techado, cielorraso (material que recubre un edificio)."
            ],
            "ejemplos": [
                "Waej <u>kjgtèfjajon</u> göljèlkjer ölegen tjlaej sjonug j waej kojwjàgaj."
            ],
            "raiz": "Kjg"
        },
        {
            "palabra": "Këngt",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Fuera, en el exterior."
            ],
            "ejemplos": [
                "<u>Këngt</u> tjl öles öndkĵgeg!"
            ],
            "raiz": "Këngt"
        },
        {
            "palabra": "Këngtan",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Afuera (hacia el exterior)."
            ],
            "ejemplos": [
                "Ölegen ëgael'al <u>këngtan</u>, öl göljkàj kaenegafes."
            ],
            "raiz": "Këngt"
        },
        {
            "palabra": "Këngter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Salir, partir, abandonar."
            ],
            "ejemplos": [
                "Öl jkë göljsfàej-<u>këngter</u> tjl froj!"
            ],
            "raiz": "Këngt"
        },
        {
            "palabra": "Këngtug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Salida, partida, abandono."
            ],
            "ejemplos": [
                "Waej <u>këngtug</u> tjl klaej laedenug tröljkàj frejegafes."
            ],
            "raiz": "Këngt"
        },
        {
            "palabra": "Këngtuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a salida'",
            "acepciones": [
                "Saliente (que sale de algo).",
                "coloq. Destacado, sobresaliente, resaltante."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Këngtug"
        },
        {
            "palabra": "Këngteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Exterior (sector por fuera de algo).",
                "coloq. Territorio extranjero o por fuera del país en cuestión."
            ],
            "ejemplos": [//TODO: próximo, siguiente
                "Konugen, kefjegeten, ëgael'al ä waej <u>këngteg</u> tjlaej öndkĵgeg.",
                "Waej próximo jgjaeg, öl följljòner ä waej <u>këngteg</u>."
            ],
            "raiz": "Këngt"
        },
        {
            "palabra": "Këngteges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a exterior'",
            "acepciones": [
                "Exterior, externo (situado en el exterior)."
            ],
            "ejemplos": [
                "Ölegen jkë göljtàg knaej <u>këngteges</u> aurkĵgeg wjl ölegenes öndkĵgeget."
            ],
            "raiz": "Këngteg"
        },
        {
            "palabra": "Önder",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Residir, morar, vivir.",
                "Habitar, poblar, asentarse."
            ],
            "ejemplos": [],
            "raiz": "Önd"
        },
        {
            "palabra": "Öndug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hogar, vivienda, morada, domicilio.",
                "Inmueble, propiedad."
            ],
            "ejemplos": [],
            "raiz": "Önd"
        },
        {
            "palabra": "Önduges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a hogar'",
            "acepciones": [
                "Hogareño, doméstico, casero."
            ],
            "ejemplos": [//TODO: cena
                "Klaej awalkòjweg, öles lündawalkèfjeg j öl följtàg knaej <u>önduges</u> awalàekug."
            ],
            "raiz": "Öndug"
        },
        {
            "palabra": "Öndkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Öndug' y 'Kjgeg', lit. 'Lugar de vivienda'",
            "acepciones": [
                "Casa, residencia."
            ],
            "ejemplos": [],
            "raiz": "Önd"
        },
        {
            "palabra": "Öndkĵgeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "diminutivizado"
            ],
            "descripcion": "De 'Öndug' y 'Kjgeg', lit. 'Lugar de vivienda pequeño'",
            "acepciones": [
                "neo. Apartamento, departamento, piso."
            ],
            "ejemplos": [],
            "raiz": "Önd"
        },
        {
            "palabra": "Öndkĵgegetur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "colectivizado"
            ],
            "descripcion": "De 'Öndug' y 'Kjgeg', lit. 'Colectivo de lugares de vivienda pequeños'",
            "acepciones": [
                "neo. Edificio residencial, complejo habitacional, monobloque de departamentos."
            ],
            "ejemplos": [],
            "raiz": "Önd"
        },
        {
            "palabra": "Öndkĵgegon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "aumentativizado"
            ],
            "descripcion": "De 'Öndug' y 'Kjgeg', lit. 'Lugar de vivienda grande'",
            "acepciones": [
                "Mansión, caserón, palacete."
            ],
            "ejemplos": [],
            "raiz": "Önd"
        },
        {
            "palabra": "Öndkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Önder' y 'Kefjeg', lit. 'Persona que habita'",
            "acepciones": [
                "Morador, ocupante, residente (de una vivienda).",
                "Habitante, poblador, lugareño (de un área geográfica)."
            ],
            "ejemplos": [
                "Klaej öndkĵgeg göljtàg <u>öndkèfjeg</u>ed.",
                "Öl göljkàj <u>öndkèfjeg</u> wjl Balanlàedenug, fälòj jkë laedenkèfjeg."
            ],
            "raiz": "Önd"
        },
        {
            "palabra": "Sjfjöndkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjfjeg', 'Önder' y 'Kefjeg', lit. 'Persona que habita con tiempo'",
            "acepciones": [
                "Inquilino, arrendatario (persona que alquila una vivienda temporalmente).",
                "Huésped, hospedado, pensionista (persona invitada o que paga una vivienda)."
            ],
            "ejemplos": [
                "Märsèla kängulkàj <u>sjfjöndkèfjeg</u> tjl klaej öndkĵgeget ätej 2024.",
                "Udaj, öl tröljèwlän trj <u>sjfjöndkèfjeg</u>en."
            ],
            "raiz": "Sjfj"
        },
        {
            "palabra": "Öndugur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de hogares'",
            "acepciones": [
                "Barrio, vecindario, distrito."
            ],
            "ejemplos": [],
            "raiz": "Öndug"
        },
        {
            "palabra": "Öndugures",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a colectivo de hogares'",
            "acepciones": [
                "Barrial (afín a un barrio)."
            ],
            "ejemplos": [],
            "raiz": "Öndug"
        },
        {
            "palabra": "Anördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dispositivo, artilugio.",
                "neo. Máquina, aparato.",
                "coloq. Objeto que soluciona algo muy complicado."
            ],
            "ejemplos": [],
            "raiz": "Anördn"
        },
        {
            "palabra": "Öndànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Öndug' y 'Anördnug', lit. 'Aparato del hogar'",
            "acepciones": [
                "neo. Electrodoméstico, aparato hogareño."
            ],
            "ejemplos": [],
            "raiz": "Önd"
        },
        {
            "palabra": "Laekaenànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laekug', 'Kaenar' y 'Anördnug', lit. 'Aparato para enfriar comida'",
            "acepciones": [
                "Heladera, refrigerador, nevera."
            ],
            "ejemplos": [],
            "raiz": "Laek"
        },
        {
            "palabra": "Laektajklànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laekug', 'Tajklar' y 'Anördnug', lit. 'Aparato para quemar comida'",
            "acepciones": [
                "Horno, cocina (aparato)."
            ],
            "ejemplos": [],
            "raiz": "Laek"
        },
        {
            "palabra": "Sjfjànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjfjeg' y 'Anördnug', lit. 'Dispositivo del tiempo'",
            "acepciones": [
                "Reloj, cronómetro."
            ],
            "ejemplos": [],
            "raiz": "Sjfj"
        },
        {
            "palabra": "Wünelànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wünelaj' y 'Anördnug', lit. 'Dispositivo de respiración'",
            "acepciones": [
                "Respirador artificial (máquina para proveer respiración a un paciente)."
            ],
            "ejemplos": [],
            "raiz": "Wünel"
        },
        {
            "palabra": "Kefjànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kefjeg' y 'Anördnug', lit. 'Máquina de persona'",
            "acepciones": [
                "neo. Robot, autómata (máquina que realiza labores humanas).",
                "neo. Androide (robot con fisionomía símil a la humana)."
            ],
            "ejemplos": [],
            "raiz": "Kefj"
        },
        {
            "palabra": "Wjndlànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wjndleg' y 'Anördnug', lit. 'Dispositivo de viento'",
            "acepciones": [
                "Ventilador, turbo o cualquier máquina cuya función sea generar viento."
            ],
            "ejemplos": [],
            "raiz": "Wjndl"
        },
        {
            "palabra": "Wjndfùtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wjndleg' y 'Futaj', lit. 'Herramienta de viento'",
            "acepciones": [
                "Abanico, pericón, ventalle.",
                "Soplillo, aventador."
            ],
            "ejemplos": [],
            "raiz": "Wjndl"
        },
        {
            "palabra": "Laejreg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Música, melodía (arte de combinar sonidos)."
            ],
            "ejemplos": [],
            "raiz": "Laejr"
        },
        {
            "palabra": "Laejreges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a música'",
            "acepciones": [
                "Musical, melódico, melodioso."
            ],
            "ejemplos": [//TODO: sonido
                "Wäld göljkàj traej laejreges sonido?"
            ],
            "raiz": "Laejreg"
        },
        {
            "palabra": "Laejrar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Musicar, musicalizar.",
                "coloq. Dotar a algo de una dinámica atrapante y profunda."
            ],
            "ejemplos": [],
            "raiz": "Laejr"
        },
        {
            "palabra": "Laejreget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Música pequeña'",
            "acepciones": [
                "Canción, tema, pieza musical."
            ],
            "ejemplos": [],
            "raiz": "Laejreg"
        },
        {
            "palabra": "Laejrfùtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laejreg' y 'Futaj', lit. 'Herramienta de música'",
            "acepciones": [
                "Instrumento musical."
            ],
            "ejemplos": [],
            "raiz": "Laejr"
        },
        {
            "palabra": "Laejrfutkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laejreg', 'Futaj' y 'Kefjeg', lit. 'Persona con herramienta de música'",
            "acepciones": [
                "Músico o música (persona que ejecuta o interpreta música a través de un instrumento)."
            ],
            "ejemplos": [],
            "raiz": "Laejr"
        },
        {
            "palabra": "Laejrfejfkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laejreg', 'Fejfar' y 'Kefjeg', lit. 'Persona que escribe música'",
            "acepciones": [
                "Compositor, autor, musicólogo."
            ],
            "ejemplos": [],
            "raiz": "Laejr"
        },
        {
            "palabra": "Laedenlàejreg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laedenug' y 'Laejreg', lit. 'Música de país'",
            "acepciones": [
                "Himno nacional."
            ],
            "ejemplos": [
                "Waej Balanlàedenuges laedenlàejreg göljkàj-talweres 'Knöjan Waej Kaenaj'."
            ],
            "raiz": "Laeden"
        },
        {
            "palabra": "Glaer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Amar, querer profundamente a alguien."
            ],
            "ejemplos": [
                "Öl gölj<u>glàer</u> kon."
            ],
            "raiz": "Glae"
        },
        {
            "palabra": "Glaeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Amor (profundo sentimiento de estima hacia alguien).",
                "Pasión, deseo romántico."
            ],
            "ejemplos": [
                "Öl tröljwàst kjae j öl tröljfèjr wäld waej <u>glaeg</u> göljkàj.",
                "Kjaegenes awalkòjwegen fjügultàg üke <u>glaeg</u>."
            ],
            "raiz": "Glae"
        },
        {
            "palabra": "Glaeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a amor'",
            "acepciones": [
                "Apasionado, ardiente, amoroso.",
                "Enamorado (que experimenta amor hacia alguien)."
            ],
            "ejemplos": [
                "Öl göljwùjk wän <u>glaeges</u> awalkòjweg tör kon...",
                "Öl göljkàj <u>glaeges</u> <b>för</b> kon."
            ],
            "raiz": "Glaeg"
        },
        {
            "palabra": "Glaegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin amor'",
            "acepciones": [
                "Odio, rencor.",
                "coloq. Maldad, vileza."
            ],
            "ejemplos": [

            ],
            "raiz": "Glaeg"
        },
        {
            "palabra": "Glaegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin amor'",
            "acepciones": [
                "Rencoroso, resentido, con odio."
            ],
            "ejemplos": [
                "Kjaes <u>glaegafes</u> blödùrnug tröljàlar wärteges."
            ],
            "raiz": "Glaeg"
        },
        {
            "palabra": "Glaegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin amor'",
            "acepciones": [
                "Odiar, detestar.",
                "coloq. Despreciar, menospreciar."
            ],
            "ejemplos": [],
            "raiz": "Glaeg"
        },
        {
            "palabra": "Glaeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Amor pequeño'",
            "acepciones": [
                "Cariño, afecto.",
                "coloq. Antojo, capricho."
            ],
            "ejemplos": [],
            "raiz": "Glaeg"
        },
        {
            "palabra": "Glaegetes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a amor pequeño'",
            "acepciones": [
                "Cariñoso, afectuoso, tierno."
            ],
            "ejemplos": [
                "Tänksakon för waej roglug, kon göljkàj üke <u>glaegetes</u>!"
            ],
            "raiz": "Glaeg"
        },
        {
            "palabra": "Glaegeter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer amor pequeño'",
            "acepciones": [
                "Querer (sentir afecto), estimar a alguien.",
                "coloq. Antojar."
            ],
            "ejemplos": [
                "Öl frät gölj<u>glàegeter</u> kjae.",
                "Öl gägul<u>glàegeter</u> knaej kokolàt!"
            ],
            "raiz": "Glaeg"
        },
        {
            "palabra": "Glaegon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Amor grande'",
            "acepciones": [
                "cult. Amor conyugal que se tiene bajo promesa en un matrimonio libraterrense."
            ],
            "ejemplos": [],
            "raiz": "Glaeg"
        },
        {
            "palabra": "Glaekèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Glaeg' y 'Kefjeg', lit. 'Persona con amor'",
            "acepciones": [
                "Novio o novia (persona con vínculo amoroso con otra).",
                "Prometido o prometida, pretendiente."
            ],
            "ejemplos": [
                "Marjèla göljkàj öles <u>glaekéfjeg</u>.",
                "Öl tröljrògler kjae kjaes roglug tjl <u>glaekèfjeg</u>."
            ],
            "raiz": "Glae"
        },
        {
            "palabra": "Glaekèfjegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto", "colectivizado"
            ],
            "descripcion": "De 'Glaeg' y 'Kefjeg', lit. 'Colectivo de personas con amor'",
            "acepciones": [
                "Noviazgo, relación amorosa o afectiva."
            ],
            "ejemplos": [
                "Öl göljkàj wjl knaej <u>glaekèfjegur</u>ed."
            ],
            "raiz": "Glae"
        },
        {
            "palabra": "Fjsljkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fjsljeg' y 'Kefjeg', lit. 'Persona con cercanía'",
            "acepciones": [
                "Familiar, pariente, ser querido."
            ],
            "ejemplos": [
                "Kon göljtàg üke <u>fjsljkèfjeg</u>en!"
            ],
            "raiz": "Fjslj"
        },
        {
            "palabra": "Fjsljkèfjegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto", "colectivizado"
            ],
            "descripcion": "De 'Fjsljeg' y 'Kefjeg', lit. 'Colectivo de personas con cercanía'",
            "acepciones": [
                "Familia, parentela (grupo de personas emparentadas)."
            ],
            "ejemplos": [
                "Wjl öles <u>fjsljkèfjegur</u>, knaejfjeged göljtàg knaej autonòwajl."
            ],
            "raiz": "Fjslj"
        },
        {
            "palabra": "Lünder",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Prometer, jurar."
            ],
            "ejemplos": [
                "Öl gölj<u>lùnder</u>-alar traej."
            ],
            "raiz": "Lünd"
        },
        {
            "palabra": "Lündug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Promesa, juramento, voto."
            ],
            "ejemplos": [
                "Kon göljtàg knaej <u>lündug</u> tör öl."
            ],
            "raiz": "Lünd"
        },
        {
            "palabra": "Lündkèfjer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lündug' y 'Kefjer', lit. 'Crear (una) promesa'",
            "acepciones": [
                "Casar, matrimoniar, desposar."
            ],
            "ejemplos": [
                "Kon kanskë<u>lündkèfjer</u> öl?"
            ],
            "raiz": "Lünd"
        },
        {
            "palabra": "Lündkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lündug' y 'Kefjeg', lit. 'Persona con promesa'",
            "acepciones": [
                "Esposo o esposa, cónyuge, consorte."
            ],
            "ejemplos": [
                "Sofĵa göljkàj kones <u>lündkèfjeg</u>?"
            ],
            "raiz": "Lünd"
        },
        {
            "palabra": "Lündsjonkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lündug', 'Sjonug' y 'Kefjeg', lit. 'Persona del sol con promesa'",
            "acepciones": [
                "Esposo, marido."
            ],
            "ejemplos": [
                "—Dëjwel kon följlündkèfjer knaejfjeg?<br>—Öl jkë göljwùjk knaej <u>lündsjonkèfjeg</u>..."
            ],
            "raiz": "Lünd"
        },
        {
            "palabra": "Lündawalkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lündug', 'Awalaj' y 'Kefjeg', lit. 'Persona de la luna con promesa'",
            "acepciones": [
                "Esposa, mujer (bajo matrimonio)."
            ],
            "ejemplos": [
                "Kjae göljkàj waej <u>lündawalkèfjeg</u> tjl öles awalbèrätegen."
            ],
            "raiz": "Lünd"
        },
        {
            "palabra": "Lündkèfjegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto", "colectivizado"
            ],
            "descripcion": "De 'Lündug' y 'Kefjeg', lit. 'Colectivo de personas con promesa'",
            "acepciones": [
                "Matrimonio, unión conyugal."
            ],
            "ejemplos": [
                "Ölegen göljklàsj-ökjler ölegenes <u>lündkèfjegur</u>, Marĵa."
            ],
            "raiz": "Lünd"
        },
        {
            "palabra": "Ljwkeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Felicidad, alegría, dicha."
            ],
            "ejemplos": [
                "Waej <u>ljwkeg</u> tjl rawolar göljkàj sëjnteges."
            ],
            "raiz": "Ljwk"
        },
        {
            "palabra": "Ljwkeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a felicidad'",
            "acepciones": [
                "Feliz, alegre, contento, dichoso."
            ],
            "ejemplos": [
                "<u>Ljwkeges</u> wàjdaj faer kon!"
            ],
            "raiz": "Ljwkeg"
        },
        {
            "palabra": "Ljwkar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Alegrar, contentar, animar."
            ],
            "ejemplos": [
                "Wän grüfug göljsfàej-ljwkar öl üke."
            ],
            "raiz": "Ljwk"
        },
        {
            "palabra": "Ljwkegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin felicidad'",
            "acepciones": [
                "Tristeza, congoja, angustia.",
                "Aflicción, zozobra, consternación."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Ljwkeg"
        },
        {
            "palabra": "Ljwkegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin felicidad'",
            "acepciones": [
                "Triste, acongojado, angustiado.",
                "Afligido, consternado, afectado."
            ],
            "ejemplos": [
                "Traej tröljkàj knaej <u>ljwkegafes</u> üskug faer fülwuj ölegen.",
                "Öl göljkàj <u>ljwkegafes</u> för wäld tröljàlar ä Darjus."
            ],
            "raiz": "Ljwkeg"
        },
        {
            "palabra": "Ljwkegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin felicidad'",
            "acepciones": [
                "Entristecer, angustiar, acongojar."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Ljwkeg"
        },
        {
            "palabra": "Fjslj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar", "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cerca (evento o lugar inminentes)."
            ],
            "ejemplos": [
                "Kjaes öndkĵgeg göljkàj üke <u>fjslj</u>."
            ],
            "raiz": "Fjslj"
        },
        {
            "palabra": "Fjsljar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Acercar, aproximar, arrimar."
            ],
            "ejemplos": [
                "Kon fjsljar'al ä öl..."
            ],
            "raiz": "Fjslj"
        },
        {
            "palabra": "Fjsljeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cercanía, proximidad, inmediación (espacial o temporal).",
                "coloq. Relación o trato social con una persona."
            ],
            "ejemplos": [
                "Waej wünsal göljkàj <u>fjsljeg</u>es.",
                "Öl göljglàs klaej <u>fjsljeg</u> tör kjae."
            ],
            "raiz": "Fjslj"
        },
        {
            "palabra": "Fjsljeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a cercanía'",
            "acepciones": [
                "Cercano, próximo, inmediato (espacial, temporal o relacional)."
            ],
            "ejemplos": [
                "Kon knäler'al waej ësjl <u>fjsljeges</u>."
            ],
            "raiz": "Fjsljeg"
        },
        {
            "palabra": "Ösjwat",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "lugar", "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Lejos (evento o lugar distantes)."
            ],
            "ejemplos": [
                "Ölugen göljkàj <u>ösjwat</u> tjl öles öndkĵgeg."
            ],
            "raiz": "Ösjwat"
        },
        {
            "palabra": "Ösjwateg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Lejanía, distancia, alejamiento (de espacio o temporal)."
            ],
            "ejemplos": [
                "Traej ljwkegafes aleg göljkàj <u>ösjwateg</u>es."
            ],
            "raiz": "Ösjwat"
        },
        {
            "palabra": "Ösjwateges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a lejanía'",
            "acepciones": [
                "Lejano, alejado, distante, remoto."
            ],
            "ejemplos": [
                "Öl göljfèjr knaejteged tjl <u>ösjwateges</u> kjgegen."
            ],
            "raiz": "Ösjwateg"
        },
        {
            "palabra": "Ösjwater",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Alejar, distanciar, apartar.",
                "coloq. Perder un vínculo personal."
            ],
            "ejemplos": [
                "Kon <u>ösjwater</u>'al klaej laekug tjl öl, klaejes ärgug göljkàj bljunegafes!"
            ],
            "raiz": "Ösjwat"
        },
        {
            "palabra": "Täg",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tener, poseer.",
                "Conservar, mantener."
            ],
            "ejemplos": [
                "Öl följ<u>tàg</u> knaej wajug!"
            ],
            "raiz": "Täg"
        },
        {
            "palabra": "Tägeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Posesión, pertenencia, propiedad."
            ],
            "ejemplos": [
                "Kon jkë lujkwèjkrjner'al öles <u>tägeg</u>en!"
            ],
            "raiz": "Täg"
        },
        {
            "palabra": "Bljst",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Creer, suponer.",
                "tec. Conjeturar, inferir, presumir."
            ],
            "ejemplos": [],
            "raiz": "Bljst"
        },
        {
            "palabra": "Bljsteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Creencia, suposición.",
                "tec. Conjetura, presunción, hipótesis."
            ],
            "ejemplos": [],
            "raiz": "Bljst"
        },
        {
            "palabra": "Bljsteges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a creencia'",
            "acepciones": [
                "Supuesto, presunto, hipotético."
            ],
            "ejemplos": [],
            "raiz": "Bljsteg"
        },
        {
            "palabra": "Klën",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Entender, comprender, asimilar."
            ],
            "ejemplos": [
                "Öl jkë göljsfàej-<u>klën</u> klaej fëjregur!"
            ],
            "raiz": "Klën"
        },
        {
            "palabra": "Klënug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Entendimiento, comprensión, asimilación."
            ],
            "ejemplos": [
                "Klaej rëndegaf göljwùlasj ësjl <u>klënug</u> tjl kon."
            ],
            "raiz": "Klën"
        },
        {
            "palabra": "Dasker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Envalentonar, infundir valentía o ánimo."
            ],
            "ejemplos": [
                "Öl göljklàsj-<u>dasker</u> faer sfaej-alar klaej."
            ],
            "raiz": "Dask"
        },
        {
            "palabra": "Daskeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Valentía, valor, coraje.",
                "coloq. Agallas, redaños."
            ],
            "ejemplos": [
                "Kjae fjügulkàj knaej grägajafkèfjeg üke <u>daskeg</u>es.",
                "—Öl jkë göljsfàej-alar klaej.<br>—<u>Daskeg</u>, awalkèfjeg!"
            ],
            "raiz": "Dask"
        },
        {
            "palabra": "Daskeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a valentía'",
            "acepciones": [
                "Valiente, valeroso, corajudo."
            ],
            "ejemplos": [
                "Fërnànd göljkàj frät knaej kefjeget, fälòj kjae göljkàj <u>daskeges</u>."
            ],
            "raiz": "Daskeg"
        },
        {
            "palabra": "Daskegon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Valentía grande'",
            "acepciones": [
                "Intrepidez, audacia, arrojo."
            ],
            "ejemplos": [
                "Göljkàj <u>daskegon</u> faer alar knaejteg loke wöjlegafes."
            ],
            "raiz": "Daskeg"
        },
        {
            "palabra": "Daskegones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a valentía grande'",
            "acepciones": [
                "Intrépido, audaz, resuelto."
            ],
            "ejemplos": [//TODO: adelante
                "Waej enljeges j <u>daskegones</u> kefjegen tröljònar adelante."
            ],
            "raiz": "Daskeg"
        },
        {
            "palabra": "Daskegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin valentía'",
            "acepciones": [
                "Cobardía, miedo (como identidad).",
                "Temor, susto (como efecto coyuntural)."
            ],
            "ejemplos": [
                "Kjae göljkàj knaej sjonkèfjeg üke <u>daskegaf</u>es.",
                "Göljàw lajtegaf, öl göljkàj <u>daskegaf</u>!"
            ],
            "raiz": "Daskeg"
        },
        {
            "palabra": "Daskegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin valentía'",
            "acepciones": [
                "Cobarde, miedoso, pusilánime, temeroso (como identidad).",
                "Asustado (como efecto coyuntural)."
            ],
            "ejemplos": [
                "Kon göljkàj knaej <u>daskegafes</u> sjonkèfjeg, kon ëgael'al ä wast kjae!",
                "Waej <u>daskegafes</u> wülejtugen jkë tröljkèngter tjl waej wuljgajon."
            ],
            "raiz": "Daskeg"
        },
        {
            "palabra": "Daskegafon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido",
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Sin valentía grande'",
            "acepciones": [
                "Pánico, espanto, pavor, terror."
            ],
            "ejemplos": [
                "Waej <u>daskegafon</u> tröljkaenjàgar kjaes rjnlug."
            ],
            "raiz": "Daskeg"
        },
        {
            "palabra": "Daskegafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin valentía'",
            "acepciones": [
                "Asustar, atemorizar, aterrorizar, espantar."
            ],
            "ejemplos": [
                "Öl trölj<u>dàskegafer</u> dëjwel öl tröljwàst waej blödug."
            ],
            "raiz": "Daskeg"
        },
        {
            "palabra": "Fëjr",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Saber, conocer.",
            ],
            "ejemplos": [],
            "raiz": "Fëjr"
        },
        {
            "palabra": "Fëjreg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Conocimiento (saber adquirido).",
            ],
            "ejemplos": [
                "Öl göljtàg <u>fëjreg</u>en kjøne dönjlfèjregur."
            ],
            "raiz": "Fëjr"
        },
        {
            "palabra": "Fëjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de conocimientos'",
            "acepciones": [
                "tec. Ciencia (rama del saber obtenido metodológicamente).",
                "Disciplina, asignatura, estudio."
            ],
            "ejemplos": [],
            "raiz": "Fëjreg"
        },
        {
            "palabra": "Fëjregures",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a colectivo de conocimientos'",
            "acepciones": [
                "tec. Científico (que se relaciona con la ciencia)."
            ],
            "ejemplos": [
                "Udaj ölegen tröljfènser <u>Fëjregures</u> Feldug tör knaejuj läjrkèfjeg."
            ],
            "raiz": "Fëjreg"
        },
        {
            "palabra": "Fëjregaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin conocimiento'",
            "acepciones": [
                "Ignorancia, desconocimiento."
            ],
            "ejemplos": [],
            "raiz": "Fëjreg"
        },
        {
            "palabra": "Fëjregafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin conocimiento'",
            "acepciones": [
                "Desconocido, ignoto, incógnito."
            ],
            "ejemplos": [],
            "raiz": "Fëjreg"
        },
        {
            "palabra": "Fëjregafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin conocimiento'",
            "acepciones": [
                "Ignorar, desconocer."
            ],
            "ejemplos": [],
            "raiz": "Fëjreg"
        },
        {
            "palabra": "Fëjrsfàejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fëjreg' y 'Sfaejug', lit. 'Capacidad de saber'",
            "acepciones": [
                "Sabiduría, inteligencia, erudición, conocimiento.",
            ],
            "ejemplos": [
                "Kon lajter'al öl tör kones <u>fëjrsfàejug</u>."
            ],
            "raiz": "Fëjr"
        },
        {
            "palabra": "Fëjrsfàejuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "calificativo"
            ],
            "descripcion": "De 'Fëjreg' y 'Sfaejug', lit. 'Relativo a capacidad de saber'",
            "acepciones": [
                "Inteligente, sabio, erudito.",
            ],
            "ejemplos": [
                "Kon följkàj üke <u>fëjrsfàejuges</u> kjn kon göljwènslar fülwuj traej fejfugen."
            ],
            "raiz": "Fëjr"
        },
        {
            "palabra": "Glas",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Gustar, agradar, atraer."
            ],
            "ejemplos": [
                "Kon gölj<u>glàs</u> öles laedenug?"
            ],
            "raiz": "Glas"
        },
        {
            "palabra": "Glasug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Gusto, agrado, atracción, inclinación."
            ],
            "ejemplos": [
                "Öl göljtàg <u>glasug</u> för klaej awalkèfjeg."
            ],
            "raiz": "Glas"
        },
        {
            "palabra": "Glasuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a gusto'",
            "acepciones": [
                "Gustoso, agradable, grato."
            ],
            "ejemplos": [
                "Sjntja göljkàj knaej <u>glasuges</u> awalkèfjeg, kjae träsjl göljwùjk-enäjer."
            ],
            "raiz": "Glasug"
        },
        {
            "palabra": "Glasugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin gusto'",
            "acepciones": [
                "Disgusto, desagrado, rechazo."
            ],
            "ejemplos": [
                "Öl göljtàg <u>glasugaf</u> för klaej laekug."
            ],
            "raiz": "Glasug"
        },
        {
            "palabra": "Glasugafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin gusto'",
            "acepciones": [
                "Desagradable, molesto, que causa disgusto."
            ],
            "ejemplos": [
                "Josef göljkàj knaej <u>glasugafes</u> kefjegon, kjae träsjl gägulsòjw färal!"
            ],
            "raiz": "Glasug"
        },
        {
            "palabra": "Glasugafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin gusto'",
            "acepciones": [
                "Disgustar, desagradar."
            ],
            "ejemplos": [
                "Kon gölj<u>glàsugafer</u> waej kokolàt? Kon göljkàj kördajafes?"
            ],
            "raiz": "Glasug"
        },
        {
            "palabra": "Glasugon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Gusto grande'",
            "acepciones": [
                "Fascinación, deslumbramiento, embeleso."
            ],
            "ejemplos": [
                "Waej kojweg göljsènsar öl üke <u>glasugon</u>."
            ],
            "raiz": "Glasug"
        },
        {
            "palabra": "Glasugones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a gusto grande'",
            "acepciones": [
                "Fascinante, deslumbrante, embelesante."
            ],
            "ejemplos": [
                "Klaej öndkĵgegon göljkàj <u>glasugones</u>!"
            ],
            "raiz": "Glasug"
        },
        {
            "palabra": "Glasugoner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer gusto grande'",
            "acepciones": [
                "Fascinar, deslumbrar, embelesar, maravillar."
            ],
            "ejemplos": [
                "Kones wastúrnugen göljglàsugoner öl..."
            ],
            "raiz": "Glasug"
        },
        {
            "palabra": "Ertjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Paciencia, perseverancia, tolerancia.",
                "Conformidad, resignación.",
                "coloq. Calma, tranquilidad."
            ],
            "ejemplos": [
                "Faer rjwdar ä waej rawolaj, göljklàsj-tag <u>ertjeg</u>.",
                "Kon täg'al <u>ertjeg</u>, waej futegen göljkàj färaleges.",
                "Waej wàjdaj följkàj klaej awalkòjweg, kon täg'al <u>ertjeg</u>!"
            ],
            "raiz": "Ertj"
        },
        {
            "palabra": "Ertjeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a paciencia'",
            "acepciones": [
                "Paciente, perseverante, tolerante.",
                "Conformista, acomodadizo, que tiene resignación."
            ],
            "ejemplos": [
                "Kjae göljkàj knaej <u>ertjeges</u> kefjeg, fälòj klaej üskug kjae tröljkòrdajafar.",
                "Kon jkë kaj'al <u>ertjeges</u>, kon jkë alentar'al traej!"
            ],
            "raiz": "Ertjeg"
        },
        {
            "palabra": "Ertjegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin paciencia'",
            "acepciones": [
                "Impaciencia, nerviosismo, intranquilidad."
            ],
            "ejemplos": [
                "Öl göljklèn wäld kon göljùwlaed, fälòj öl göljtàg üke <u>ertjegaf</u>."
            ],
            "raiz": "Ertjeg"
        },
        {
            "palabra": "Ertjegafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin paciencia'",
            "acepciones": [
                "Impaciente, nervioso, intranquilo."
            ],
            "ejemplos": [
                "Kon göljkàj <u>ertjegafes</u>, kjae följfrògael fölwe."
            ],
            "raiz": "Ertjeg"
        },
        {
            "palabra": "Wüjk",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Querer, desear."
            ],
            "ejemplos": [
                "Öl gölj<u>wùjk</u> traej fjalaj!"
            ],
            "raiz": "Wüjk"
        },
        {
            "palabra": "Wüjkug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Deseo, aspiración."
            ],
            "ejemplos": [
                "Kones <u>wüjkug</u> för rawolar göljkàj gërflegones!"
            ],
            "raiz": "Wüjk"
        },
        {
            "palabra": "Wüjkuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a deseo'",
            "acepciones": [
                "Deseoso, ganoso."
            ],
            "ejemplos": [
                "Klaej <u>wüjkuges</u> kefjegeten frät göljwùjk-këngter tjlaej läjraurkĵgeg."
            ],
            "raiz": "Wüjkug"
        },
        {
            "palabra": "Wüjkugon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Deseo grande'",
            "acepciones": [
                "Anhelo, afán o avidez entusiasmados."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Wüjkug"
        },
        {
            "palabra": "Wüjkugones",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a deseo grande'",
            "acepciones": [
                "Anheloso, anhelante, afanoso, ávido."
            ],
            "ejemplos": [
                "Öles <u>wüjkugones</u> blödùrnug göljbuscar kones glaeg."
            ],
            "raiz": "Wüjkug"
        },
        {
            "palabra": "Wüjkugoner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer deseo grande'",
            "acepciones": [
                "Anhelar o ansiar con gran entusiasmo."
            ],
            "ejemplos": [
                "Öl göljwùjkugoner-kaj knotkèfjeg!"
            ],
            "raiz": "Wüjkug"
        },
        {
            "palabra": "Kolörar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Colorear, teñir, entintar."
            ],
            "ejemplos": [],
            "raiz": "Kolör"
        },
        {
            "palabra": "Kolöreg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Color, tinte, tono."
            ],
            "ejemplos": [],
            "raiz": "Kolör"
        },
        {
            "palabra": "Kolöreges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a color'",
            "acepciones": [
                "Colorido (dotado de colores brillantes, vivos o variados)."
            ],
            "ejemplos": [
                "Klaej bljunwùljgaj göljkàj üke <u>kolöreges</u>!"
            ],
            "raiz": "Kolöreg"
        },
        {
            "palabra": "Kolöregaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin color'",
            "acepciones": [
                "Ausencia de coloración o pigmentación (asociado al negro por falta de luz)."
            ],
            "ejemplos": [
                "Wjlaej këngteges kojweg göljkàj knaej fülwegures <u>kolöregaf</u>."
            ],
            "raiz": "Kolöreg"
        },
        {
            "palabra": "Kolöregafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "relacional"
            ],
            "descripcion": "Lit. 'Relativo a sin color'",
            "acepciones": [
                "Incoloro, acrómico."
            ],
            "ejemplos": [
                "Waej jagaj göljkàj <u>kolöregafes</u>."
            ],
            "raiz": "Kolöreg"
        },
        {
            "palabra": "Wärteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Negro."
            ],
            "ejemplos": [],
            "raiz": "Wärt"
        },
        {
            "palabra": "Wärtkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wärteg' y 'Kefjeg', lit. 'Persona con negro'",
            "acepciones": [
                "Persona de etnia negra o africana."
            ],
            "ejemplos": [
                "Romelu göljkàj knaej wärtkèfjeg."
            ],
            "raiz": "Wärt"
        },
        {
            "palabra": "Wärter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ennegrecer, oscurecer."
            ],
            "ejemplos": [],
            "raiz": "Wärt"
        },
        {
            "palabra": "Wjteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Blanco."
            ],
            "ejemplos": [],
            "raiz": "Wjt"
        },
        {
            "palabra": "Wjter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Blanquear, aclarar."
            ],
            "ejemplos": [],
            "raiz": "Wjt"
        },
        {
            "palabra": "Wjtkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wjteg' y 'Kefjeg', lit. 'Persona con blanco'",
            "acepciones": [
                "Persona de etnia blanca o caucásica."
            ],
            "ejemplos": [
                "Andrej göljkàj knaej wjtkèfjeg."
            ],
            "raiz": "Wjt"
        },
        {
            "palabra": "Grjneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Verde."
            ],
            "ejemplos": [],
            "raiz": "Grjn"
        },
        {
            "palabra": "Rödeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Rojo."
            ],
            "ejemplos": [],
            "raiz": "Röd"
        },
        {
            "palabra": "Jeloweg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Amarillo."
            ],
            "ejemplos": [],
            "raiz": "Jelow"
        },
        {
            "palabra": "Blutbeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Azul."
            ],
            "ejemplos": [],
            "raiz": "Blutb"
        },
        {
            "palabra": "Öraeneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Naranja (color)."
            ],
            "ejemplos": [],
            "raiz": "Öraen"
        },
        {
            "palabra": "Sølweg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Plateado (color)."
            ],
            "ejemplos": [],
            "raiz": "Sølw"
        },
        {
            "palabra": "Gjldeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dorado (color)."
            ],
            "ejemplos": [],
            "raiz": "Gjld"
        },
        {
            "palabra": "Fjaler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Beber, tomar, sorber."
            ],
            "ejemplos": [],
            "raiz": "Fjal"
        },
        {
            "palabra": "Fjalaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Bebida, refresco, líquido bebible."
            ],
            "ejemplos": [],
            "raiz": "Fjal"
        },
        {
            "palabra": "Tjröl",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Obtener, conseguir, lograr."
            ],
            "ejemplos": [
                "Kon trölj<u>tĵröl</u> wäld kon fjügulwùjk."
            ],
            "raiz": "Tjröl"
        },
        {
            "palabra": "Tjrölug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Obtención, logro, consecución."
            ],
            "ejemplos": [
                "Waej <u>tjrölug</u> tjl klaej rawolaj göljàlar ölajn üke ljwkeges!"
            ],
            "raiz": "Tjröl"
        },
        {
            "palabra": "Sfaej",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Poder (hacer o lograr algo), tener capacidad o facultad."
            ],
            "ejemplos": [
                "Öl jkë göljsfàej-lujkar traej!"
            ],
            "raiz": "Sfaej"
        },
        {
            "palabra": "Sfaejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Capacidad, aptitud, idoneidad."
            ],
            "ejemplos": [
                "Jkë göljkàj wüjkug, göljkàj <u>sfaejug</u>."
            ],
            "raiz": "Sfaej"
        },
        {
            "palabra": "Sfaejuges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a capacidad'",
            "acepciones": [
                "Capaz, apto, idóneo."
            ],
            "ejemplos": [
                "Kjae göljkàj knaej <u>sfaejuges</u> sjonkèfjeg faer klaej tänsteg."
            ],
            "raiz": "Sfaejug"
        },
        {
            "palabra": "Sfaejugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin capacidad'",
            "acepciones": [
                "Incapacidad, ineptitud, incompetencia.",
                "despect. Torpeza."
            ],
            "ejemplos": [
                "Öl göljtàg <u>sfaejugaf</u> faer laektàjklar.",
                "Kon jkë göljsfàej-kaj traej? Kon göljkàj <u>sfaejugaf</u>es."
            ],
            "raiz": "Sfaejug"
        },
        {
            "palabra": "Sfaejugafes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "calificativo"
            ],
            "descripcion": "Lit. 'Relativo a sin capacidad'",
            "acepciones": [
                "Incapaz, inepto, incompetente."
            ],
            "ejemplos": [
                "Öles rjnlug göljkàj <u>sfaejugafes</u> tjl tjröl traej löwjeg."
            ],
            "raiz": "Sfaejug"
        },
        {
            "palabra": "Sfaejugafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin capacidad'",
            "acepciones": [
                "Incapacitar, inhabilitar, invalidar."
            ],
            "ejemplos": [//TODO: golpe
                "Traej golpe trölj<u>sfàejugafer</u> öl."
            ],
            "raiz": "Sfaejug"
        },
        {
            "palabra": "Wast",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ver, mirar, observar."
            ],
            "ejemplos": [
                "Kon göljsfàej-wast waej kojwgrjnlàjteg?"
            ],
            "raiz": "Wast"
        },
        {
            "palabra": "Wasteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mirada, vista (hacer uso del sentido de la vista)."
            ],
            "ejemplos": [
                "Tröljàw knaej wasteg bjtbjn kjaegen."
            ],
            "raiz": "Wast"
        },
        {
            "palabra": "Wasteget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Mirada pequeña'",
            "acepciones": [
                "Ojeada, vistazo rápido.",
                "Mirada de reojo."
            ],
            "ejemplos": [
                "Göljkàj frejeges, frät kon göljkàj knaej wasteget."
            ],
            "raiz": "Wasteg"
        },
        {
            "palabra": "Wastegetar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer mirada pequeña'",
            "acepciones": [
                "Ojear, echar un vistazo.",
                "coloq. Ver con cautela y disimulo a alguien para apreciar su belleza."
            ],
            "ejemplos": [
                "Kon wastegetar'al waej laekug, för wlaejaj.",
                "Kjae tröljfrèt-wastegetar waej awalkèfjeg."
            ],
            "raiz": "Wasteg"
        },
        {
            "palabra": "Wastsfàejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wasteg' y 'Sfaejug', lit. 'Capacidad de vista'",
            "acepciones": [
                "Visión (capacidad de percepción de la realidad con la vista).",
                "coloq. Interpretación personal de algo."
            ],
            "ejemplos": [
                "."
            ],
            "raiz": "Wast"
        },
        {
            "palabra": "Dalënar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Caminar, andar, marchar.",
                "Pasear, deambular."
            ],
            "ejemplos": [
                "Kon göljklàsj-<u>dalënar</u> ätej kon udajsòjw waej lajteg.",
                "Öl göljglàs-<u>dalënar</u> trësjaw waej awalkòjweg."
            ],
            "raiz": "Dalën"
        },
        {
            "palabra": "Dalënaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Caminata, paseo, marcha."
            ],
            "ejemplos": [],
            "raiz": "Dalën"
        },
        {
            "palabra": "Dalënajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Caminata pequeña'",
            "acepciones": [
                "Pisada, paso, zancada."
            ],
            "ejemplos": [],
            "raiz": "Dalënaj"
        },
        {
            "palabra": "Dalënajetar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer caminata pequeña'",
            "acepciones": [
                "form. Dar un paso."
            ],
            "ejemplos": [],
            "raiz": "Dalënaj"
        },
        {
            "palabra": "Dalënajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Caminata grande'",
            "acepciones": [
                "Procesión o desfile (no necesariamente religiosos)."
            ],
            "ejemplos": [],
            "raiz": "Dalënaj"
        },
        {
            "palabra": "Knoter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cantar, entonar.",
                "Recitar melódicamente o con estilo musical.",
                "Corear."
            ],
            "ejemplos": [],
            "raiz": "Knot"
        },
        {
            "palabra": "Knotug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Canto, entonación.",
                "Coro."
            ],
            "ejemplos": [],
            "raiz": "Knot"
        },
        {
            "palabra": "Knotuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Canturreo, tarareo."
            ],
            "ejemplos": [],
            "raiz": "Knotug"
        },
        {
            "palabra": "Knotugeter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Canturrear, tararear."
            ],
            "ejemplos": [],
            "raiz": "Knotug"
        },
        {
            "palabra": "Kaj",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ser, estar."
            ],
            "ejemplos": [],
            "raiz": "Kaj"
        },
        {
            "palabra": "Kajeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Existencia, presencia.",
                "tec. Conciencia del ser."
            ],
            "ejemplos": [],
            "raiz": "Kaj"
        },
        {
            "palabra": "Kajfùteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kaj' y 'Futeg', lit. 'Cosa que vive'",
            "acepciones": [
                "Ser (vivo), criatura.",
                "despect. Alimaña, bicho.",
                "tec. Ente orgánico."
            ],
            "ejemplos": [],
            "raiz": "Kaj"
        },
        {
            "palabra": "Futeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cosa, objeto, entidad."
            ],
            "ejemplos": [
                "Wäld göljkàj klaej futeg?"
            ],
            "raiz": "Fut"
        },
        {
            "palabra": "Futaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Herramienta, instrumento, utensilio."
            ],
            "ejemplos": [],
            "raiz": "Fut"
        },
        {
            "palabra": "Knjfajeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Naturaleza."
            ],
            "ejemplos": [],
            "raiz": "Knjfaj"
        },
        {
            "palabra": "Towlajug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Metal.",
                "Material duro y resistente."
            ],
            "ejemplos": [],
            "raiz": "Towlaj"
        },
        {
            "palabra": "Sølwtòwlajug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sølweg' y 'Towlajug', lit. 'Metal plateado'",
            "acepciones": [
                "Plata (metal noble)."
            ],
            "ejemplos": [],
            "raiz": "Sølw"
        },
        {
            "palabra": "Gjldtòwlajug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Gjldeg' y 'Towlajug', lit. 'Metal dorado'",
            "acepciones": [
                "Oro (metal noble)."
            ],
            "ejemplos": [],
            "raiz": "Gjld"
        },
        {
            "palabra": "Alar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hacer, realizar, efectuar, obrar."
            ],
            "ejemplos": [],
            "raiz": "Al"
        },
        {
            "palabra": "Aleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hecho, acción, obra, actividad."
            ],
            "ejemplos": [],
            "raiz": "Al"
        },
        {
            "palabra": "Tänksaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Agradecimiento, gratitud, reconocimiento."
            ],
            "ejemplos": [
                "Kon jkë göljklàsj-üwlaed öl fejfegen tjl <u>tänksaj</u>!"
            ],
            "raiz": "Tänks"
        },
        {
            "palabra": "Tänksajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin agradecimiento'",
            "acepciones": [
                "Desagradecimiento, ingratitud."
            ],
            "ejemplos": [
                "Öl tröljèwjd kon waej lujkaj wäld kon fjügulwùlasj, jkë kaj'al <u>tänksajaf</u>es!"
            ],
            "raiz": "Tänksaj"
        },
        {
            "palabra": "Tänksajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin agradecimiento'",
            "acepciones": [
                "Desagradecer, desconocer o no corresponder un favor o beneficio recibido."
            ],
            "ejemplos": [
                "Kjae trölj<u>tànksajafar</u> öles roglug faer kjae."
            ],
            "raiz": "Tänksaj"
        },
        {
            "palabra": "Tänksar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Agradecer, gratificar, reconocer."
            ],
            "ejemplos": [
                "Karlj, tänksar'al waej kefjegon för kjaes reglug."
            ],
            "raiz": "Tänks"
        },
        {
            "palabra": "Kojwkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg' y 'Kefjeg', lit. 'Persona del cielo'",
            "acepciones": [
                "Dios, diosa.",
                "Persona celestial o sobrenatural."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Kojw"
        },
        {
            "palabra": "Kojwkèfjegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "colectivizado"
            ],
            "descripcion": "De 'Kojweg' y 'Kefjeg', lit. 'Colectivo de personas del cielo'",
            "acepciones": [
                "Panteón de dioses y diosas."
            ],
            "ejemplos": [],
            "raiz": "Kojw"
        },
        {
            "palabra": "Fejfkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fejfar' y 'Kefjeg', lit. 'Persona que escribe'",
            "acepciones": [
                "Escritor, escritora.",
                "Guionista, argumentista.",
                "coloq. Persona que fabula e inventa cosas."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Knotkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knoter' y 'Kefjeg', lit. 'Persona que canta'",
            "acepciones": [
                "Cantante, cantor, cantora.",
                "Corista."
            ],
            "ejemplos": [],
            "raiz": "Knot"
        },
        {
            "palabra": "Tökèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Tö' y 'Kefjeg', lit. 'Dos personas'",
            "acepciones": [
                "Dúo, pareja o tándem de personas.",
                "coloq. Pareja o relación (amorosa)."
            ],
            "ejemplos": [
                "Kon j öl kanskësfàej-kaj knaej tökèfjeg tjl ping-pong!",
                "Marjus j öl göljkàj knaej tökèfjeg."
            ],
            "raiz": "Tö"
        },
        {
            "palabra": "Trjkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Trj' y 'Kefjeg', lit. 'Tres personas'",
            "acepciones": [
                "Trío, terna de personas.",
                "tec. Triunvirato (forma de gobierno con tres gobernantes)."
            ],
            "ejemplos": [
                "Klaej kefjegetes <u>trjkèfjeg</u> tröljòkjlugafer öles autonòwajl!",
                "Knaej laedenuged tjl Laedejug göljtàg knaej <u>trjkèfjeg</u>."
            ],
            "raiz": "Trj"
        },
        {
            "palabra": "Jagnar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Vivir, existir.",
            ],
            "ejemplos": [],
            "raiz": "Jagn"
        },
        {
            "palabra": "Jagneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Vida (transcurso de tal).",
                "coloq. Ciclo o proceso."
            ],
            "ejemplos": [],
            "raiz": "Jagn"
        },
        {
            "palabra": "Üstal",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sentir, experimentar.",
            ],
            "ejemplos": [
                "Kon göljkàj frät knaej kefjeget, kon jkë göljsfàej-<u>üstal</u> traej."
            ],
            "raiz": "Üstal"
        },
        {
            "palabra": "Üstaleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sentimiento, emoción (estado de ánimo o disposición emocional).",
            ],
            "ejemplos": [
                "Öl ündjl tröljtàg traej <u>üstaleg</u>."
            ],
            "raiz": "Üstal"
        },
        {
            "palabra": "Üstalsfàejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Üstal' y 'Sfaejug', lit. 'Capacidad de sentir'",
            "acepciones": [
                "Sensibilidad, emotividad.",
            ],
            "ejemplos": [
                "Waej <u>üstalsfàejug</u> göljkàj enäjeges faer waej kefjegen."
            ],
            "raiz": "Üstal"
        },
        {
            "palabra": "Ündjl",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nunca, jamás (en ninguna ocasión).",
            ],
            "ejemplos": [
                "Öl <u>ündjl</u> följàlar traej."
            ],
            "raiz": "Ündjl"
        },
        {
            "palabra": "Träsjl",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "tiempo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Siempre, continuamente (en cualquier momento del tiempo y sin interrupción, o en todas las ocasiones posibles).",
            ],
            "ejemplos": [
                "Kon <u>träsjl</u> göljkàj ljwkeges!"
            ],
            "raiz": "Träsjl"
        },
        {
            "palabra": "Rjwdar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Llegar, arribar, alcanzar un destino."
            ],
            "ejemplos": [
                "Ölegen gägulrĵwdar ä ölegenes laedenug."
            ],
            "raiz": "Rjwd"
        },
        {
            "palabra": "Rjwdeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Llegada, arribo, aparición.",
                "Meta, destino, culminación."
            ],
            "ejemplos": [
                "Knaej "
            ],
            "raiz": "Rjwd"
        },
        {
            "palabra": "Rjnlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cuerpo, figura, físico.",
                "Masa, materia."
            ],
            "ejemplos": [
                "Kjaes rjnlug fjügulàjter tjsälk waej awalaj...",
                "Waej rjnlug tjlaej towlajug göljkàj kaeneges."
            ],
            "raiz": "Rjnl"
        },
        {
            "palabra": "Rjnljàgar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Rjnlug' y 'Jagar', lit. 'Mojar (un) cuerpo'",
            "acepciones": [
                "Transpirar, sudar, exudar."
            ],
            "ejemplos": [
                "Göljàw loke kaenegaf wäld ölugen gägul<u>rjnljàgar</u>!"
            ],
            "raiz": "Rjnl"
        },
        {
            "palabra": "Rjnljàgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Rjnlug' y 'Jagaj', lit. 'Agua de cuerpo'",
            "acepciones": [
                "Transpiración, sudor, exudación."
            ],
            "ejemplos": [
                "Traej fjügulkàj awalkòjwegen tjl üke <u>rjnljàgaj</u>..."
            ],
            "raiz": "Rjnl"
        },
        {
            "palabra": "Rjnler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Formar (generalmente algo material), conformar, moldear."
            ],
            "ejemplos": [],
            "raiz": "Rjnl"
        },
        {
            "palabra": "Knawar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Morir, fallecer, perecer."
            ],
            "ejemplos": [],
            "raiz": "Knaw"
        },
        {
            "palabra": "Knaweg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Muerte, fallecimiento, deceso.",
                "coloq. Fin trágico o doloroso de algo."
            ],
            "ejemplos": [],
            "raiz": "Knaw"
        },
        {
            "palabra": "Knawsfàejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knawar' y 'Sfaejug', lit. 'Capacidad de morir'",
            "acepciones": [
                "Mortalidad."
            ],
            "ejemplos": [
                "Waej kefjegen göljkàj knawsfàejuges kajfútaegen."
            ],
            "raiz": "Knaw"
        },
        {
            "palabra": "Knawsfàejugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "invertido"
            ],
            "descripcion": "De 'Knawar' y 'Sfaejug', lit. 'Sin capacidad de morir'",
            "acepciones": [
                "Inmortalidad, eternidad."
            ],
            "ejemplos": [
                "Frät waej kojwkèfjegen göljkàj knawsfàejugafes."
            ],
            "raiz": "Knaw"
        },
        {
            "palabra": "Knawsfàejugafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto",
                "ampliado"
            ],
            "descripcion": "De 'Knawar' y 'Sfaejugaf', lit. 'Hacer sin capacidad de morir'",
            "acepciones": [
                "Inmortalizar, perpetuar, eternizar."
            ],
            "ejemplos": [],
            "raiz": "Knaw"
        },
        {
            "palabra": "Knawkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knaweg' y 'Kefjeg', lit. 'Persona con muerte'",
            "acepciones": [
                "Cadáver, muerto, difunto."
            ],
            "ejemplos": [],
            "raiz": "Knaw"
        },
        {
            "palabra": "Knawegafkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knawegaf' y 'Kefjeg', lit. 'Persona sin muerte'",
            "acepciones": [
                "neo. Zombi."
            ],
            "ejemplos": [],
            "raiz": "Knaw"
        },
        {
            "palabra": "Jneger",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Captar mentalmente una imagen."
            ],
            "ejemplos": [
                "Öl gägulĵneger klaej sjfjeg faer öles göwelaj."
            ],
            "raiz": "Jneg"
        },
        {
            "palabra": "Jnegeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Imagen (representación captada a través de los rayos de luz)."
            ],
            "ejemplos": [
                "Kon göljglàs klaej jnegeg tjl öles rjnlug?"
            ],
            "raiz": "Jneg"
        },
        {
            "palabra": "Fönler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Simbolizar, representar, encarnar."
            ],
            "ejemplos": [
                "Waej wjteg göljfònler waej grägaj."
            ],
            "raiz": "Fönl"
        },
        {
            "palabra": "Fönleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Símbolo, representación (elemento representativo de algo)."
            ],
            "ejemplos": [
                "Waej wjteg göljkàj knaej fönleg tjlaej grägaj."
            ],
            "raiz": "Fönl"
        },
        {
            "palabra": "Laedenfònleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laedenug' y 'Fönleg', lit. 'Símbolo de país'",
            "acepciones": [
                "Bandera (enseña de nación o institución)."
            ],
            "ejemplos": [
                "Waej Balanlàedenug'es laedenfònleg göljtàg wärteg, rödeg j wjteg."
            ],
            "raiz": "Laeden"
        },
        {
            "palabra": "Daljar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sincerar, confesar."
            ],
            "ejemplos": [
                "Öl följdàljar kon öles beräteg."
            ],
            "raiz": "Dalj"
        },
        {
            "palabra": "Daljaj",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Verdad, veracidad, certeza.",
                "Sinceridad, honestidad, franqueza."
            ],
            "ejemplos": [
                "Traej göljkàj waej daljaj!",
                "Öl följsòjw kon tör daljaj."
            ],
            "raiz": "Dalj"
        },
        {
            "palabra": "Daljajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin verdad'",
            "acepciones": [
                "Falsedad, contenido falto de verdad.",
                "Mentira, engaño, falacia."
            ],
            "ejemplos": [
                "Göljkàj daljajafes wäld kjae tröljègael ä traej laedenug.",
                "Kon jkë üwlaed'al öl ësjl daljajafen!"
            ],
            "raiz": "Daljaj"
        },
        {
            "palabra": "Daljajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin verdad'",
            "acepciones": [
                "Mentir, engañar, faltar a la verdad."
            ],
            "ejemplos": [
                "Kjae tröljdàljajafar öl raewenj öl fjügulwàst kjaes wastúrnugen."
            ],
            "raiz": "Daljaj"
        },
        {
            "palabra": "Laewün",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Escuchar, oír, atender."
            ],
            "ejemplos": [
                "Kon tröljlàewün traej?"
            ],
            "raiz": "Laewün"
        },
        {
            "palabra": "Laewüneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Escucha (evento en que algo fue escuchado)."
            ],
            "ejemplos": [
                "Wjl traej laewüneg, kon tröljèwjd öl üke tajkleg."
            ],
            "raiz": "Laewün"
        },
        {
            "palabra": "Laewünsfàejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laewüneg' y 'Sfaejug', lit. 'Capacidad de escucha'",
            "acepciones": [
                "Audición."
            ],
            "ejemplos": [
                "Waej kefjegones laewünsfàejug göljkàj löwjegafes."
            ],
            "raiz": "Laewün"
        },
        {
            "palabra": "Laewünsfàejugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "invertido"
            ],
            "descripcion": "De 'Laewüneg' y 'Sfaejug', lit. 'Sin capacidad de escucha'",
            "acepciones": [
                "med. Sordera, hipoacusia."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Laewün"
        },
        {
            "palabra": "Laewünkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laewün' y 'Kefjeg', lit. 'Persona que escucha'",
            "acepciones": [
                "Oyente de radio u otro medio de comunicación que involucra sonido."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Laewün"
        },
        {
            "palabra": "Laewünkèfjegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laewün' y 'Kefjegur', lit. 'Colectivo de personas que escuchan'",
            "acepciones": [
                "Audiencia (espectadores de un medio comunicativo que incluye sonido)."
            ],
            "ejemplos": [//TODO: saludo
                "Wän saludo faer fülwuj waej <u>laewünkèfjegur</u>!"
            ],
            "raiz": "Laewün"
        },
        {
            "palabra": "Wejkrjner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Delinquir, perpetrar.",
                "Infringir o incurrir en una infracción grave."
            ],
            "ejemplos": [],
            "raiz": "Wejkrjn"
        },
        {
            "palabra": "Wejkrjneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Delito, crimen.",
                "Falta o infracción de gravedad."
            ],
            "ejemplos": [],
            "raiz": "Wejkrjn"
        },
        {
            "palabra": "Knawèjkrjner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knaweg' y 'Wejkrjner', lit. 'Delinquir en muerte'",
            "acepciones": [
                "Matar, asesinar, ejecutar."
            ],
            "ejemplos": [],
            "raiz": "Knaw"
        },
        {
            "palabra": "Knawèjkrjneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knaweg' y 'Wejkrjneg', lit. 'Delito de muerte'",
            "acepciones": [
                "Asesinato, homicidio, ejecución."
            ],
            "ejemplos": [],
            "raiz": "Knaw"
        },
        {
            "palabra": "Lujkwèjkrjner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lujkaj' y 'Wejkrjner', lit. 'Delinquir en dinero'",
            "acepciones": [
                "Robar, afanar, desvalijar, hurtar.",
                "Malversar, desfalcar, defraudar."
            ],
            "ejemplos": [],
            "raiz": "Lujk"
        },
        {
            "palabra": "Lujkwèjkrjneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lujkaj' y 'Wejkrjneg', lit. 'Delito de dinero'",
            "acepciones": [
                "Robo, hurto, estafa.",
                "Malversación, desfalco, defraudación."
            ],
            "ejemplos": [],
            "raiz": "Lujk"
        },
        {
            "palabra": "Traewèjkrjneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Traewug' y 'Wejkrjneg', lit. 'Delito de ataque'",
            "acepciones": [
                "Delito de agresión, delito de lesiones."
            ],
            "ejemplos": [],
            "raiz": "Traew"
        },
        {
            "palabra": "Traewèjkrjner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Traewug' y 'Wejkrjner', lit. 'Delinquir en ataque'",
            "acepciones": [
                "Cometer delito de agresión o de lesiones."
            ],
            "ejemplos": [],
            "raiz": "Traew"
        },
        {
            "palabra": "Wöjlegafwèjkrjneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wöjlegaf' y 'Wejkrjneg', lit. 'Delito de sufrimiento'",
            "acepciones": [
                "Tortura, suplicio, tormento."
            ],
            "ejemplos": [],
            "raiz": "Wöjl"
        },
        {
            "palabra": "Wöjlegafwèjkrjner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wöjlegaf' y 'Wejkrjner', lit. 'Hacer delito de sufrimiento'",
            "acepciones": [
                "Torturar, martirizar."
            ],
            "ejemplos": [],
            "raiz": "Wöjl"
        },
        {
            "palabra": "Wejkrjnkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wejkrjner' y 'Kefjeg', lit. 'Persona que delinque'",
            "acepciones": [
                "Delincuente, maleante.",
                "Malviviente, malhechor."
            ],
            "ejemplos": [],
            "raiz": "Wejkrjn"
        },
        {
            "palabra": "Djlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Fibra, filamento de materia prima textil."
            ],
            "ejemplos": [],
            "raiz": "Djl"
        },
        {
            "palabra": "Djluget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Filamento pequeño'",
            "acepciones": [
                "Hilo, hebra."
            ],
            "ejemplos": [],
            "raiz": "Djlug"
        },
        {
            "palabra": "Djlugetur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado", "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de filamentos pequeños'",
            "acepciones": [
                "Tela, tejido."
            ],
            "ejemplos": [],
            "raiz": "Djlug"
        },
        {
            "palabra": "Kefjdĵlugetur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kefjeg' y 'Djlugetur', lit. 'Colectivo de filamentos pequeños para persona'",
            "acepciones": [
                "Ropa, vestido (pieza genérica de vestir).",
                "Vestimenta, indumentaria, traje, ropaje (ropa general)."
            ],
            "ejemplos": [],
            "raiz": "Kefj"
        },
        {
            "palabra": "Blöder",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sangrar, desangrar, padecer una hemorragia."
            ],
            "ejemplos": [],
            "raiz": "Blöd"
        },
        {
            "palabra": "Blödug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sangre.",
                "Savia de las plantas."
            ],
            "ejemplos": [],
            "raiz": "Blöd"
        },
        {
            "palabra": "Blödfjalkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Blödug', 'Fjaler' y 'Kefjeg', lit. 'Persona que bebe sangre'",
            "acepciones": [
                "Vampiro.",
                "coloq. despec. Explotador, usurero."
            ],
            "ejemplos": [
                "Drakula göljkàj knaej blödfjalkèfjeg."
            ],
            "raiz": "Blöd"
        },
        {
            "palabra": "Blödùrnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Blödug' y 'Ürnug', lit. 'Órgano de sangre'",
            "acepciones": [
                "Corazón.",
                "coloq. Sensibilidad, empatía."
            ],
            "ejemplos": [],
            "raiz": "Blöd"
        },
        {
            "palabra": "Blödlĵneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Blödug' y 'Ljneg', lit. 'Línea de sangre'",
            "acepciones": [
                "tec. Vena o arteria."
            ],
            "ejemplos": [
                "Traej göljkàj waej Aorta blödlĵneg."
            ],
            "raiz": "Blöd"
        },
        {
            "palabra": "Blödlĵneget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto", "diminutivizado"
            ],
            "descripcion": "De 'Blödug' y 'Ljneg', lit. 'Línea de sangre pequeña'",
            "acepciones": [
                "tec. Vasos, capilares y conductos sanguíneos menores."
            ],
            "ejemplos": [
                "Waej kefjegen göljtàg üke blödlĵneget wjl ölegenes rjnlugen."
            ],
            "raiz": "Blöd"
        },
        {
            "palabra": "Kefjer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Concebir, procrear (una persona).",
                "coloq. Crear algo lindo o positivo (generalmente relacionado a la humanidad).",
                "coloq. Proyectar, planificar."
            ],
            "ejemplos": [
                "Kamĵla j kon kängul<u>kèfjer</u> konegenes wänes wajug?",
                "Öl göljwùjk-<u>kefjer</u> knaej laekĵgeg.",
                "Öl gägul<u>kèfjer</u> waej futeg."
            ],
            "raiz": "Kefj"
        },
        {
            "palabra": "Kefjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional, lit. 'Persona/Concepción'",
            "acepciones": [
                "Persona, humano.",
                "coloq. Creación noble o bondadosa.",
                "coloq. Proyecto, idea a futuro."
            ],
            "ejemplos": [
                "Öl göljkàj knaej lujkajones kefjeg.",
                "Öl fejfug göljkàj knaej kefjeg.",
                "Klaej kefjeg jkë följlàedejar."
            ],
            "raiz": "Kefj"
        },
        {
            "palabra": "Kefjegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de personas'",
            "acepciones": [
                "Sociedad, comunidad, colectividad.",
                "Grupo o asociación de individuos unidos para determinado fin."
            ],
            "ejemplos": [
                "Ölegenes kefjegur göljkàj üke gräjuges.",
                "Wjl klaej kefjegur tjl knotug, knaej kefjegen jkë göljfèjr-knoter."
            ],
            "raiz": "Kefjeg"
        },
        {
            "palabra": "Kefjeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Persona pequeña'",
            "acepciones": [
                "Niño o niña, crío o cría.",
                "Persona en edad prejuvenil."
            ],
            "ejemplos": [],
            "raiz": "Kefjeg"
        },
        {
            "palabra": "Kefjegeter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer persona pequeña'",
            "acepciones": [
                "Bromear o jugar de forma aniñada.",
                "coloq. Comportarse de manera tonta y desubicada."
            ],
            "ejemplos": [],
            "raiz": "Kefjeg"
        },
        {
            "palabra": "Kefjegetur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado", "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de personas pequeñas'",
            "acepciones": [
                "Grupo de niños y niñas.",
                "Clase escolar.",
                "despect. Pandilla o caterva juvenil."
            ],
            "ejemplos": [],
            "raiz": "Kefjeget"
        },
        {
            "palabra": "Kefjegetkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kefjeget' y 'Kjgeg', lit. 'Lugar de personas pequeñas'",
            "acepciones": [
                "Guardería, kinder, jardín de infantes."
            ],
            "ejemplos": [],
            "raiz": "Kefj"
        },
        {
            "palabra": "Kefjegon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Persona grande'",
            "acepciones": [
                "Persona anciana, en etapa de vejez.",
                "coloq. Persona sabia, experimentada."
            ],
            "ejemplos": [],
            "raiz": "Kefjeg"
        },
        {
            "palabra": "Kefjegonkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kefjegon' y 'Kjgeg', lit. 'Lugar de personas grandes'",
            "acepciones": [
                "neo. Geriátrico, asilo de ancianos."
            ],
            "ejemplos": [],
            "raiz": "Kefj"
        },
        {
            "palabra": "Kefjegoner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer(se) persona grande'",
            "acepciones": [
                "Envejecer o avejentar (una persona).",
                "coloq. Deteriorar, estropear."
            ],
            "ejemplos": [],
            "raiz": "Kefjeg"
        },
        {
            "palabra": "Kefjegonur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado",
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de personas grandes'",
            "acepciones": [
                "obs. Cónclave de los sabios de la aldea."
            ],
            "ejemplos": [],
            "raiz": "Kefjeg"
        },
        {
            "palabra": "Enljar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Rejuvenecer, remozar, renovar."
            ],
            "ejemplos": [
                "Klaej ulerfjàlaj gägul<u>ènljar</u> öles rjnlug!"
            ],
            "raiz": "Enlj"
        },
        {
            "palabra": "Enljeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Juventud, lozanía, mocedad."
            ],
            "ejemplos": [
                "Kon jkë kaj'al ljwkegafes, kon göljkàj <u>enljeges</u>."
            ],
            "raiz": "Enlj"
        },
        {
            "palabra": "Enljegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin juventud'",
            "acepciones": [
                "Vejez, longevidad, ancianidad, senilidad."
            ],
            "ejemplos": [
                "Öl jkë göljwùjk-kaj enljegafes!"
            ],
            "raiz": "Enljeg"
        },
        {
            "palabra": "Enljegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin juventud'",
            "acepciones": [
                "Envejecer, avejentar, ajar."
            ],
            "ejemplos": [
                "Enljegafar gölkàj waej wöjlegafwèjkrjneg tjlaej sjfjeg."
            ],
            "raiz": "Enljeg"
        },
        {
            "palabra": "Bljunar",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Embellecer, hermosear (generalmente una persona a sí misma).",
                "Encantar o fascinar a alguien con la belleza física o la personalidad."
            ],
            "ejemplos": [],
            "raiz": "Bljun"
        },
        {
            "palabra": "Bljuneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hermosura, lindura, preciosidad.",
                "Atractivo o encanto seductores."
            ],
            "ejemplos": [],
            "raiz": "Bljun"
        },
        {
            "palabra": "Bljunegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin belleza'",
            "acepciones": [
                "Fealdad, horribilidad."
            ],
            "ejemplos": [],
            "raiz": "Bljuneg"
        },
        {
            "palabra": "Bljunegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin belleza'",
            "acepciones": [
                "Afear (hacer feo o más feo algo o alguien)."
            ],
            "ejemplos": [
                "Waej blutbeges blaekaj trölj<u>bljùnegafar</u> kones rjgëlug!"
            ],
            "raiz": "Bljuneg"
        },
        {
            "palabra": "Bljunegafèjfeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Bljunegaf' y 'Fejfeg', lit. 'Palabra fea'",
            "acepciones": [
                "coloq. Grosería, mala palabra, palabrota."
            ],
            "ejemplos": [
                "Kjae gägulùwlaed üke <u>bljunegafèjfeg</u>en, wäld färal!"
            ],
            "raiz": "Bljun"
        },
        {
            "palabra": "Läjrar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Educar, enseñar, instruir.",
                "cult. Preparar o formar con los valores de la sociedad libraterrense."
            ],
            "ejemplos": [
                "Öl göljwùlasj wäld kon udaj<u>làjrar</u> öl knuwerfèjregur, för wlaejaj.",
                "Ölajn kängu<u>làjrar</u> kjae trësjaw knaej ësjl jgjaegen."
            ],
            "raiz": "Läjr"
        },
        {
            "palabra": "Läjraj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Lección, clase (sesión o exposición de enseñanza)."
            ],
            "ejemplos": [
                "Klaej tröljkàj waej ësjl frejegafes <u>läjraj</u> tjl waej fülwuj jgjaeg!"
            ],
            "raiz": "Läjr"
        },
        {
            "palabra": "Läjreg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Educación, enseñanza, instrucción.",
                "Cortesía, cordialidad."
            ],
            "ejemplos": [],
            "raiz": "Läjr"
        },
        {
            "palabra": "Läjrkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Läjreg' y 'Kjgeg', lit. 'Lugar de educación'",
            "acepciones": [
                "Escuela, colegio y cualquier institución educativa."
            ],
            "ejemplos": [],
            "raiz": "Läjr"
        },
        {
            "palabra": "Läjraurkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Läjreg', 'Aurag' y 'Kjgeg', lit. 'Lugar de reunión de educación'",
            "acepciones": [
                "Aula, cátedra, clase."
            ],
            "ejemplos": [],
            "raiz": "Läjr"
        },
        {
            "palabra": "Läjrkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Läjrar' y 'Kefjeg', lit. 'Persona que educa'",
            "acepciones": [
                "Docente, profesor o profesora, educador o educadora, maestro o maestra."
            ],
            "ejemplos": [],
            "raiz": "Läjr"
        },
        {
            "palabra": "Fenser",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aprender, estudiar.",
                "Memorizar."
            ],
            "ejemplos": [
                "Öl göljglàsugon-<u>fenser</u> berätfèjregur wjlaej läjrkĵgeg!",
                "Öl alëred trölj<u>fènser</u> waej laejreget."
            ],
            "raiz": "Fens"
        },
        {
            "palabra": "Fenseg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aprendizaje (proceso de adquisición de conocimientos)."
            ],
            "ejemplos": [
                "Ölegen göljwùjk wäld konegenes <u>fenseg</u> wjlaej läjrkĵgeg udajkàj waej tösal."
            ],
            "raiz": "Fens"
        },
        {
            "palabra": "Fenskèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fenser' y 'Kefjeg', lit. 'Persona que aprende'",
            "acepciones": [
                "Estudiante, alumno o alumna.",
                "Aprendiz, discípulo."
            ],
            "ejemplos": [
                "Bäjgun <u>fenskèfjeg</u>en göljtàg kones kefjegetur?",
                "Öl göljkàj <u>fenskèfjeg</u> tjl lajtrjgëlfèjregur."
            ],
            "raiz": "Fens"
        },
        {
            "palabra": "Rawolar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ganar, triunfar, vencer."
            ],
            "ejemplos": [
                "Jä! Öl tröljràwolar!"
            ],
            "raiz": "Rawol"
        },
        {
            "palabra": "Rawolaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Triunfo, victoria, éxito."
            ],
            "ejemplos": [
                "Göljkàj knaej rawolaj tjl Balanlàedenug!"
            ],
            "raiz": "Rawol"
        },
        {
            "palabra": "Rawolajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin victoria'",
            "acepciones": [
                "Derrota, fracaso, vencimiento."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Rawolaj"
        },
        {
            "palabra": "Rawolajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin victoria'",
            "acepciones": [
                "Perder, fracasar, verse derrotado."
            ],
            "ejemplos": [],
            "raiz": "Rawolaj"
        },
        {
            "palabra": "Sjonkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjonug' y 'Kefjeg', lit. 'Persona del sol'",
            "acepciones": [
                "Hombre (varón).",
                "Muchacho joven, chico."
            ],
            "ejemplos": [],
            "raiz": "Sjon"
        },
        {
            "palabra": "Sjonkèfjeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjonug' y 'Kefjeget', lit. 'Persona pequeña del sol'",
            "acepciones": [
                "Niño (varón), nene, chico."
            ],
            "ejemplos": [],
            "raiz": "Sjon"
        },
        {
            "palabra": "Awalkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalaj' y 'Kefjeg', lit. 'Persona de la luna'",
            "acepciones": [
                "Mujer.",
                "coloq. Muchacha joven, chica."
            ],
            "ejemplos": [],
            "raiz": "Awal"
        },
        {
            "palabra": "Awalkèfjeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalaj' y 'Kefjeget', lit. 'Persona pequeña de la luna'",
            "acepciones": [
                "Niña, nena, chica."
            ],
            "ejemplos": [],
            "raiz": "Awal"
        },
        {
            "palabra": "Fatjgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Destino, hado (fuerza predeterminada que rige el mundo).",
                "coloq. Suerte, fortuna."
            ],
            "ejemplos": [
                "Öl följkàj kojwljonkèfjeg, traej göljkàj-fejfares wjl öles fatjgeg.",
                "Kon tröljtrèwjd üke lujkaj, wäld knaej <u>fatjgeg</u>!"
            ],
            "raiz": "Fatjg"
        },
        {
            "palabra": "Fatjger",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "coloq. cult. Seguir o ejecutar el destino, tal como éste rige en el universo según la idiosincrasia libraterrense."
            ],
            "ejemplos": [
                "Kon ljoner'al ä Köpenàgen, kon kläsj'al-fatjger."
            ],
            "raiz": "Fatjg"
        },
        {
            "palabra": "Wülejtug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Animal.",
                "Bestia, fiera."
            ],
            "ejemplos": [],
            "raiz": "Wülejt"
        },
        {
            "palabra": "Kjltwùlejtug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kjltaj' y 'Wülejtug', lit. 'Animal con leche'",
            "acepciones": [
                "Mamífero (familia de animales que maman)."
            ],
            "ejemplos": [],
            "raiz": "Kjlt"
        },
        {
            "palabra": "Gaelwùlejtug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Gaelwar' y 'Wülejtug', lit. 'Animal que vuela'",
            "acepciones": [
                "Pájaro, ave."
            ],
            "ejemplos": [],
            "raiz": "Gaelw"
        },
        {
            "palabra": "Gaelwar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Volar, planear, surcar."
            ],
            "ejemplos": [
                "Öl göljawalbèräter wäld öl göljsfàej-gaelwar."
            ],
            "raiz": "Gaelw"
        },
        {
            "palabra": "Gaelwaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Vuelo, planeo (desplazamiento por el aire)."
            ],
            "ejemplos": [
                "Kjaes gaelwaj göljkàj üke bljuneges."
            ],
            "raiz": "Gaelw"
        },
        {
            "palabra": "Öndwùlejtug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Öndug' y 'Wülejtug', lit. 'Animal de hogar'",
            "acepciones": [
                "Mascota (animal domesticado que habita con los humanos)."
            ],
            "ejemplos": [
                "Bäjgun öndwùlejtugen kon göljwùjk-täg?"
            ],
            "raiz": "Önd"
        },
        {
            "palabra": "Wülejwàjug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wülejtug' y 'Wajug', lit. 'Bebé de animal'",
            "acepciones": [
                "Cachorro, cría."
            ],
            "ejemplos": [
                "Öles öndwùlejtug följtàg wülejwàjugen!"
            ],
            "raiz": "Wülejt"
        },
        {
            "palabra": "Wuljgar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Plantar, trasplantar."
            ],
            "ejemplos": [],
            "raiz": "Wuljg"
        },
        {
            "palabra": "Wuljgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Planta o vegetal genéricos."
            ],
            "ejemplos": [],
            "raiz": "Wuljg"
        },
        {
            "palabra": "Wuljgajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Planta pequeña'",
            "acepciones": [
                "Semilla, simiente, germen.",
                "Pimpollo, tallo o tronco vegetal de muy poco desarrollo."
            ],
            "ejemplos": [],
            "raiz": "Wuljgaj"
        },
        {
            "palabra": "Wuljgajetar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer planta pequeña'",
            "acepciones": [
                "Sembrar, esparcir o diseminar semillas."
            ],
            "ejemplos": [],
            "raiz": "Wuljgaj"
        },
        {
            "palabra": "Wuljgajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Planta grande'",
            "acepciones": [
                "Árbol, arbusto de gran tamaño."
            ],
            "ejemplos": [],
            "raiz": "Wuljgaj"
        },
        {
            "palabra": "Wuljgajonur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado",
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de plantas grandes'",
            "acepciones": [
                "Bosque, arboleda.",
                "Selva, jungla."
            ],
            "ejemplos": [],
            "raiz": "Wuljgaj"
        },
        {
            "palabra": "Bljunwùljgajar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "De 'Bljuneg' y 'Wuljgar', lit. 'Hacer una planta hermosa'",
            "acepciones": [
                "Florecer, brotar (una flor)."
            ],
            "ejemplos": [],
            "raiz": "Bljun"
        },
        {
            "palabra": "Bljunwùljgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Bljuneg' y 'Wuljgaj', lit. 'Planta hermosa'",
            "acepciones": [
                "Flor (parte de la planta con los órganos reproductores).",
                "coloq. Elogio o halago hacia alguien."
            ],
            "ejemplos": [],
            "raiz": "Bljun"
        },
        {
            "palabra": "Wjtbljunwùljgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "Palabra de patrimonio nacional, de 'Wjteg', 'Bljuneg' y 'Wuljgaj', lit. 'Planta hermosa blanca'",
            "acepciones": [
                "Cala, lirio de agua, flor de jarro."
            ],
            "ejemplos": [],
            "raiz": "Wjt"
        },
        {
            "palabra": "Jagwùljgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Jagaj' y 'Wuljgaj', lit. 'Planta del agua'",
            "acepciones": [
                "Alga, sargazo.",
                "Camalote, jacinto de agua."
            ],
            "ejemplos": [],
            "raiz": "Jag"
        },
        {
            "palabra": "Laedejwùljgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laedejug' y 'Wuljgaj', lit. 'Planta de la tierra'",
            "acepciones": [
                "Césped, pasto.",
                "Hierba silvestre ordinaria."
            ],
            "ejemplos": [],
            "raiz": "Laedej"
        },
        {
            "palabra": "Laedejwùljgajur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "colectivizado"
            ],
            "descripcion": "De 'Laedejug' y 'Wuljgaj', lit. 'Colectivo de plantas de la tierra'",
            "acepciones": [
                "Matorral, pastizal.",
                "Pradera, prado, estepa."
            ],
            "ejemplos": [],
            "raiz": "Laedej"
        },
        {
            "palabra": "Wuljgtèfjajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wuljgaj' y 'Tëfjajet', lit. 'Capa pequeña de planta'",
            "acepciones": [
                "Hoja, fronda (órgano verde y plano de las plantas).",
                "Pétalo, bráctea (hoja afín a las flores)."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Wuljg"
        },
        {
            "palabra": "Wuljgtèfjajetur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto", "compuesto"
            ],
            "descripcion": "De 'Wuljgaj' y 'Tëfjajet', lit. 'Conjunto de capas pequeñas de planta'",
            "acepciones": [
                "Corola (grupo de pétalos que protegen los órganos reproductivos de la flor)."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Wuljg"
        },
        {
            "palabra": "Daweglàedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Dawegeg' y 'Laedejug', lit. 'Tierra con altura'",
            "acepciones": [
                "Montaña, monte, sierra."
            ],
            "ejemplos": [],
            "raiz": "Daweg"
        },
        {
            "palabra": "Tajkdaweglàedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Tajkleg', 'Dawegeg' y 'Laedejug', lit. 'Tierra con altura con fuego'",
            "acepciones": [
                "Volcán."
            ],
            "ejemplos": [],
            "raiz": "Tajkl"
        },
        {
            "palabra": "Daweglàedejuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "diminutivizado"
            ],
            "descripcion": "De 'Dawegeg' y 'Laedejug', lit. 'Tierra con altura pequeña'",
            "acepciones": [
                "Meseta, altiplano."
            ],
            "ejemplos": [],
            "raiz": "Daweg"
        },
        {
            "palabra": "Daweglàedejugur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "colectivizado"
            ],
            "descripcion": "De 'Dawegeg' y 'Laedejug', lit. 'Colectivo de tierras con altura'",
            "acepciones": [
                "Cordillera, cadena de montañas."
            ],
            "ejemplos": [],
            "raiz": "Daweg"
        },
        {
            "palabra": "Kaenlàedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kaenaj' y 'Laedejug', lit. 'Tierra de nieve'",
            "acepciones": [
                "Tundra o estepa."
            ],
            "ejemplos": [],
            "raiz": "Kaen"
        },
        {
            "palabra": "Wöjler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Disfrutar, gozar, deleitar."
            ],
            "ejemplos": [],
            "raiz": "Wöjl"
        },
        {
            "palabra": "Wöjleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Placer, satisfacción, deleite, disfrute."
            ],
            "ejemplos": [],
            "raiz": "Wöjl"
        },
        {
            "palabra": "Wöjlegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin placer'",
            "acepciones": [
                "Dolor, sufrimiento, padecimiento, aflicción."
            ],
            "ejemplos": [],
            "raiz": "Wöjleg"
        },
        {
            "palabra": "Wöjlegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin placer'",
            "acepciones": [
                "Doler, sufrir, padecer, lamentar."
            ],
            "ejemplos": [],
            "raiz": "Wöjleg"
        },
        {
            "palabra": "Dönjlaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cura, remedio, sanación.",
                "Medicamento, medicina, fármaco."
            ],
            "ejemplos": [
                "Knaej wuljgajn göljkàj <u>dönjlaj</u>es."
            ],
            "raiz": "Dönjl"
        },
        {
            "palabra": "Dönjlar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sanar, curar, tratar, aliviar."
            ],
            "ejemplos": [
                "Öl göljwùlasj-dönjlar klaej dönjlajaf."
            ],
            "raiz": "Dönjl"
        },
        {
            "palabra": "Dönjlajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin cura'",
            "acepciones": [
                "Herida, lesión, lastimadura."
            ],
            "ejemplos": [
                "Öl göljwùlasj-dönjlar klaej dönjlajaf."
            ],
            "raiz": "Dönjlaj"
        },
        {
            "palabra": "Dönjlajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin cura'",
            "acepciones": [
                "Herir, dañar, lastimar, lesionar."
            ],
            "ejemplos": [
                "Kon tröljdònjlajafar öl tör traej fejfegon."
            ],
            "raiz": "Dönjlaj"
        },
        {
            "palabra": "Dönjleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Salud, sanidad, salubridad.",
                "coloq. Vitalidad, vigor."
            ],
            "ejemplos": [
                "Waej kefjegon, föraej fetjgeg, göljkàj dönjleges.",
                "Kjae göljkàj knaej sjonkèfjeg gräjuges j dönjleges."
            ],
            "raiz": "Dönjl"
        },
        {
            "palabra": "Dönjlegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Enfermedad, afección, dolencia."
            ],
            "ejemplos": [
                "Waej jagneg tröljèwjd öl klaej <u>dönjlegaf</u>..."
            ],
            "raiz": "Dönjleg"
        },
        {
            "palabra": "Dönjlfèjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Dönjlaj' y 'Fejregur', lit. 'Colectivo de conocimientos de curas'",
            "acepciones": [
                "tec. Medicina (ciencia de las enfermedades)."
            ],
            "ejemplos": [
                "Öl göljtàg fëjregen kjøne <u>dönjlfèjregur</u>."
            ],
            "raiz": "Dönjl"
        },
        {
            "palabra": "Dönjlkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Dönjlar' y 'Kefjeg', lit. 'Persona que cura'",
            "acepciones": [
                "Médico o médica, galeno, doctor."
            ],
            "ejemplos": [
                "Öl göljwùjk-kaj knaej <u>dönjlkèfjeg</u>!"
            ],
            "raiz": "Dönjl"
        },
        {
            "palabra": "Wjrus",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "extranjerismo"
            ],
            "descripcion": "Palabra adoptada artificialmente del inglés <i>'Virus'</i>",
            "acepciones": [
                "med. Virus (agente infeccioso microscópico)."
            ],
            "ejemplos": [
                "Öles dönjlkèfjeg göljùwlaed wäld öl göljtàg knaej <u>wjrus</u>."
            ],
            "raiz": "Wjrus"
        },
        {
            "palabra": "Denokrätĵa",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "extranjerismo"
            ],
            "descripcion": "Palabra adoptada artificialmente del griego <i>'Dēmokratía'</i>",
            "acepciones": [
                "tec. Democracia (representación política de la sociedad por medio del voto)."
            ],
            "ejemplos": [
                "Waej <u>denokrätĵa</u> jkë göljkàj waej balanug tjlaej kefjegur."
            ],
            "raiz": "Denokrätĵa"
        },
        {
            "palabra": "Laedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común", "propio"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tierra, suelo.",
                "tec. Tierra (planeta del Sistema Solar).",
                "coloq. Basamento o fundamento de algo."
            ],
            "ejemplos": [],
            "raiz": "Laedej"
        },
        {
            "palabra": "Laedejar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hacer trabajos de agricultura sobre la tierra.",
                "coloq. Encargarse de un trabajo difícil."
            ],
            "ejemplos": [],
            "raiz": "Laedej"
        },
        {
            "palabra": "Jaglàedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Jagaj' y 'Laedejug', lit. 'Tierra con agua'",
            "acepciones": [
                "Barro, lodo, fango.",
                "Arcilla, caolín, plastilina."
            ],
            "ejemplos": [],
            "raiz": "Jag"
        },
        {
            "palabra": "Jagbĵseleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Jagaj' y 'Bjseleg', lit. 'Aire con agua'",
            "acepciones": [
                "Niebla, neblina, bruma."
            ],
            "ejemplos": [
                "Waej kolweg göljtàg üke jagbĵseleg."
            ],
            "raiz": "Jag"
        },
        {
            "palabra": "Laedenar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Fundar un pueblo (nación), hacer soberana una tierra.",
                "coloq. Sentar las bases o fundamentos de un gran proyecto."
            ],
            "ejemplos": [],
            "raiz": "Laeden"
        },
        {
            "palabra": "Laedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "País, Estado.",
                "Tierra, parcela, terreno o lote que le pertenece a alguien."
            ],
            "ejemplos": [
                "Wjl klaej laedenug, ölegen göljtàg wäld ölegen fjügulwùjk.",
                "Klaej göljkàj waej laedenug tjl Jonatan j Marĵa."
            ],
            "raiz": "Laeden"
        },
        {
            "palabra": "Laedenuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'País pequeño'",
            "acepciones": [
                "Provincia, departamento, estado o cualquier jurisdicción subnacional (generalmente gozante de autonomía o identidad propias).",
                "Porción de un terreno o propiedad privados."
            ],
            "ejemplos": [
                "Balanlàedenug göljtàg knjw <u>laedenuget</u>en.",
                "Wjl klaej <u>laedenuget</u> öl göljtàg öles öndkĵgeg."
            ],
            "raiz": "Laedenug"
        },
        {
            "palabra": "Laedenugur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de países'",
            "acepciones": [
                "Continente.",
                "Región importante o grande."
            ],
            "ejemplos": [],
            "raiz": "Laedenug"
        },
        {
            "palabra": "Laedenkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laedenug' y 'Kefjeg', lit. 'Persona de país'",
            "acepciones": [
                "Ciudadano (persona gozante de derechos políticos).",
                "Patriota, persona con orgullo nacionalista."
            ],
            "ejemplos": [],
            "raiz": "Laeden"
        },
        {
            "palabra": "Laedenkèfjegur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laedenug' y 'Kefjegur', lit. 'Colectivo de personas de país'",
            "acepciones": [
                "Nación, patria o matria (sociedad unida bajo la misma identidad cultural e histórica)."
            ],
            "ejemplos": [
                "Wjl öles <u>laedenkèfjegur</u>, waej kefjegen göljfjàlar ukë ulerug."
            ],
            "raiz": "Laeden"
        },
        {
            "palabra": "Laedenugafkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laedenugaf' y 'Kefjeg', lit. 'Persona sin país'",
            "acepciones": [
                "Apátrida (persona carente de nacionalidad)."
            ],
            "ejemplos": [
                "Göljàw üke fjke <u>laedenugafkèfjeg</u>en."
            ],
            "raiz": "Laeden"
        },
        {
            "palabra": "Laedenwenkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laedenug', 'Wenkeg' y 'Kefjeg', lit. 'Persona con igualdad de país'",
            "acepciones": [
                "Compatriota, conciudadano, coterráneo, paisano."
            ],
            "ejemplos": [
                "Lionel Messi göljkàj knaej öles laedenwenkèfjeg."
            ],
            "raiz": "Laeden"
        },
        {
            "palabra": "Swolug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ciudad, urbe, metrópolis.",
                "coloq. Centro o eje de una actividad o característica."
            ],
            "ejemplos": [
                "Fërdjnand j öl följàgnar güwluj wjl traej <u>swolug</u>.",
                "Kones laekaurkĵgeg göljkàj waej <u>swolug</u> tjlaej laekug."
            ],
            "raiz": "Swol"
        },
        {
            "palabra": "Swoluget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Ciudad pequeña'",
            "acepciones": [
                "Pueblo, poblado, villa, aldea o cualquier localidad urbana de reducida población."
            ],
            "ejemplos": [
                "Öl göljwùjk-jagnar wjl knaej <u>swoluget</u> wäld klaej udajkàj kaeneges ö udajtàg knaej jaglĵneg."
            ],
            "raiz": "Swolug"
        },
        {
            "palabra": "Swolugon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Ciudad grande'",
            "acepciones": [
                "Capital (ciudad de residencia del gobierno estatal).",
                "tec. Megalópolis, conurbación (aglomerado urbano)."
            ],
            "ejemplos": [
                "Öl jkë göljfèjr waej <u>swolugon</u> tjl Swjarlàedenug.",
                "Öl göljglàsugafer waej <u>swolugonen</u>, göljtàg üke kulkegaf!"
            ],
            "raiz": "Swolug"
        },
        {
            "palabra": "Swolkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Swolug' y 'Kefjeg', lit. 'Persona de ciudad'",
            "acepciones": [
                "Urbanita, citadino (persona que vive o creció en la ciudad)."
            ],
            "ejemplos": [
                "Öl följkàj knaej <u>swolkèfjeg</u> fülwuj öles jagneg."
            ],
            "raiz": "Swol"
        },
        {
            "palabra": "Wenkar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Igualar, nivelar, equiparar."
            ],
            "ejemplos": [],
            "raiz": "Wenk"
        },
        {
            "palabra": "Wenkeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Igualdad, paridad, equivalencia."
            ],
            "ejemplos": [],
            "raiz": "Wenk"
        },
        {
            "palabra": "Wenkeget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Igualdad pequeña'",
            "acepciones": [
                "Semejanza, parecido, similitud."
            ],
            "ejemplos": [],
            "raiz": "Wenkeg"
        },
        {
            "palabra": "Wenkegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin igualdad'",
            "acepciones": [
                "Diferencia, desigualdad, disparidad."
            ],
            "ejemplos": [],
            "raiz": "Wenkeg"
        },
        {
            "palabra": "Wenkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wenkeg' y 'Kefjeg', lit. 'Persona con igualdad'",
            "acepciones": [
                "Par, semejante (persona con condición igual a otra).",
                "relig. Prójimo."
            ],
            "ejemplos": [//TODO: respeto.
                "Kjae göljkàj kones <u>wenkèfjeg</u>, kon göljklàsj-kaj respetuoso.",
                "Konegen glaer'al waej <u>wenkèfjeg</u>."
            ],
            "raiz": "Wenk"
        },
        {
            "palabra": "Wenkfèjfeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wenkeg' y 'Fejfeg', lit. 'Palabra con igualdad'",
            "acepciones": [
                "Sinónimo (palabra con mismo significado que otra)."
            ],
            "ejemplos": [
                "'Enljkèfjeg' göljkàj <u>wenkfèjfeg</u>es tjl 'kefjegon'."
            ],
            "raiz": "Wenk"
        },
        {
            "palabra": "Kjgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Lugar, sitio, emplazamiento.",
                "Edificio, edificación, establecimiento o construcción artificial genérico."
            ],
            "ejemplos": [
                "Öl jkë göljglàs klaej <u>kjgeg</u>...",
                "Ölugen sëgtar'al ä traej <u>kjgeg</u>!"
            ],
            "raiz": "Kjg"
        },
        {
            "palabra": "Kjgar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ubicar, situar, localizar."
            ],
            "ejemplos": [],
            "raiz": "Kjg"
        },
        {
            "palabra": "Kördar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Obtener o recuperar la cordura o sanidad mental.",
                "Mesurar, moderar el juicio."
            ],
            "ejemplos": [
                "Klaej dönjlaj gölj<u>kòrdar</u> öl.",
                "Kon <u>kördar</u>'al dëjwel kon göljsòjw!"
            ],
            "raiz": "Körd"
        },
        {
            "palabra": "Kördaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "med. Cordura (sanidad mental).",
                "Sensatez, prudencia, juicio."
            ],
            "ejemplos": [
                "Klaej göljkàj knaej <u>kördaj</u>es kefjegon.",
                "Kon göljklàsj-knäler tör <u>kördaj</u>."
            ],
            "raiz": "Körd"
        },
        {
            "palabra": "Kördajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin cordura'",
            "acepciones": [
                "med. Locura, demencia, insania.",
                "Insensatez, imprudencia, indiscreción."
            ],
            "ejemplos": [
                "—Ölajn ëgael'al sëgtan.<br>—Konajn göljtàg <u>kördajaf</u>!",
                "Göljkàj <u>kördajaf</u>es üwlaed traej."
            ],
            "raiz": "Kördaj"
        },
        {
            "palabra": "Kördajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin cordura'",
            "acepciones": [
                "Enloquecer, delirar, desvariar.",
                "Descuidar la prudencia o sensatez."
            ],
            "ejemplos": [
                "Kjae gägul<u>kòrdajafar</u> sjng kjaes wajug tröljknàwar.",
                "Kon trölj<u>kòrdajafar</u> dëjwel kon tröljàlar traej."
            ],
            "raiz": "Kördaj"
        },
        {
            "palabra": "Sjfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tiempo (dimensión temporal).",
                "coloq. Presente o momento actual."
            ],
            "ejemplos": [
                "Enljegafar gölkàj waej wöjlegafwèjkrjneg tjlaej <u>sjfjeg</u>.",
                "Wjl klaej <u>sjfjeg</u>, jkë göljkàj wöjlegaf."
            ],
            "raiz": "Sjfj"
        },
        {
            "palabra": "Wenksĵfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wenkeg' y 'Sjfjeg', lit. 'Tiempos con igualdad'",
            "acepciones": [
                "Contemporaneidad (concepto de existencia al mismo tiempo)."
            ],
            "ejemplos": [
                "Udaj, ölegen följfènser waej berätfèjregures <u>wenksĵfjeg</u> bjtbjn klaej tö alegen."
            ],
            "raiz": "Wenk"
        },
        {
            "palabra": "Wenksĵfjeges",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "relacional"
            ],
            "descripcion": "De 'Wenkeg' y 'Sjfjeg', lit. 'Relativo a tiempos con igualdad'",
            "acepciones": [
                "Contemporáneo (existente al mismo tiempo)."
            ],
            "ejemplos": [
                "Göljkàj knaej fülwegures ljwkeg kaj <u>wenksĵfjeges</u> tjl waej Gërtaj."
            ],
            "raiz": "Wenk"
        },
        {
            "palabra": "Fostar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Adelgazar, enflaquecer (perder peso)."
            ],
            "ejemplos": [
                "Konugen jkë göljwùlasj-fostar, göljkàj enäj."
            ],
            "raiz": "Fost"
        },
        {
            "palabra": "Fosteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Delgadez, flacura, esbeltez."
            ],
            "ejemplos": [
                "Öl göljlàeker üke, fälòj öl göljkàj <u>fosteg</u>es."
            ],
            "raiz": "Fost"
        },
        {
            "palabra": "Fostegon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Delgadez grande'",
            "acepciones": [
                "despect. Escualidez, demacración, cualidad de macilento.",
                "coloq. despect. Escasez o deficiencia de algo."
            ],
            "ejemplos": [
                "Waej <u>fostegon</u> göljsfàej-bëndjlar tör knaejuj rëndegaf tjl dönjleg.",
                "Kones tänslùjkaj göljkàj <u>fostegon</u>es."
            ],
            "raiz": "Fosteg"
        },
        {
            "palabra": "Fostegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin delgadez'",
            "acepciones": [
                "Gordura, adiposidad (acumulación de grasa y peso)."
            ],
            "ejemplos": [
                "Öl göljkàj <u>fostegaf</u>es, göljklàsj-kälaer ësjl."
            ],
            "raiz": "Fosteg"
        },
        {
            "palabra": "Fostegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin delgadez'",
            "acepciones": [
                "Engordar (ganar peso)."
            ],
            "ejemplos": [
                "Ölegen jkë göljwùjk-<u>fostegafar</u> ësjl!"
            ],
            "raiz": "Fosteg"
        },
        {
            "palabra": "Fostegafon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido",
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Sin delgadez grande'",
            "acepciones": [
                "med. Obesidad (patología de adiposis excesiva).",
                "coloq. despect. Exceso o demasía de algo."
            ],
            "ejemplos": [
                "Kjae träsjl tröljkàj <u>fostegafon</u>es, kjae göljtàg 140 kjlo.",
                "Waej <u>fostegafon</u> tjl kulkegafen tröljdònjlajafar kjae."
            ],
            "raiz": "Fosteg"
        },
        {
            "palabra": "Wjster",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Vengar, vindicar, desquitarse."
            ],
            "ejemplos": [
                "Ölajn följ<u>wĵster</u> för wäld kon tröljàlar!"
            ],
            "raiz": "Wjst"
        },
        {
            "palabra": "Wjsteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Venganza, represalia, desquite.",
                "Revancha (segunda oportunidad en juegos y deportes)."
            ],
            "ejemplos": [
                "Kjae tröljdònjlajafar öl, gölj kjae följèwlän öles <u>wjsteg</u>!",
                "Öl tröljràwolajafar, fälòj öl göljwùjk waej <u>wjsteg</u>!"
            ],
            "raiz": "Wjst"
        },
        {
            "palabra": "Öwader",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Encontrar, hallar, recuperar (algo o alguien perdido o sin paradero conocido).",
                "Ubicar, localizar."
            ],
            "ejemplos": [//TODO: enemigo
                "Kon trölj<u>òwader</u> öles kälatèlefön?",
                "Ölegenes laedenug trölj<u>òwader</u> waej kjgegen tjlaej enemigo."
            ],
            "raiz": "Öwad"
        },
        {
            "palabra": "Öwadeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Encuentro, hallazgo de algo o alguien perdido."
            ],
            "ejemplos": [
                "Waej <u>öwadeg</u> tjl öles sjfjànördnug tröljkàj waej tösal tjlaej jgjaeg."
            ],
            "raiz": "Öwad"
        },
        {
            "palabra": "Öwadegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin encuentro'",
            "acepciones": [
                "Extravío, pérdida, descuido."
            ],
            "ejemplos": [
                "Stjlaw göljwòjlegafar öl waej <u>öwadegaf</u> tjl öles lujkaj."
            ],
            "raiz": "Öwadeg"
        },
        {
            "palabra": "Öwadegafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin encuentro'",
            "acepciones": [
                "Extraviar, perder, descuidar."
            ],
            "ejemplos": [
                "Kon jkë <u>öwadegafer</u>'al öles fjalaj, tjsälk wlaejaj."
            ],
            "raiz": "Öwadeg"
        },
        {
            "palabra": "Laegjer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cultivar tierra sembrada.",
                "coloq. Aquirir un conocimiento.",
                "coloq. Sacar provecho de algo.",
                "coloq. Trabajar forzosamente."
            ],
            "ejemplos": [],
            "raiz": "Laegj"
        },
        {
            "palabra": "Laegjug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Granja, tierra de cultivo.",
                "despect. Puesto de trabajo no deseado."
            ],
            "ejemplos": [],
            "raiz": "Laegj"
        },
        {
            "palabra": "Jagar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mojar, empapar.",
                "Aguar (aplicar agua a un alimento)"
            ],
            "ejemplos": [],
            "raiz": "Jag"
        },
        {
            "palabra": "Jagaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Agua (sustancia natural).",
                "coloq. Elemento considerado vital o enriquecedor."
            ],
            "ejemplos": [
                "Kon göljwùjk knaej fjke tjl <u>jagaj</u>?"
            ],
            "raiz": "Jag"
        },
        {
            "palabra": "Jager",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hidratar o saciar la sed.",
                "Humedecer, humectar."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Jag"
        },
        {
            "palabra": "Jageg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hidratación o saciedad de la sed.",
                "Humedad, humectación (impregnación de agua)."
            ],
            "ejemplos": [
                "Göljkàj kaenegafes, fälòj öl göljkàj <u>jageg</u>es."
            ],
            "raiz": "Jag"
        },
        {
            "palabra": "Jagegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin hidratación'",
            "acepciones": [
                "Sed, deshidratación.",
                "Sequedad, aridez."
            ],
            "ejemplos": [],
            "raiz": "Jageg"
        },
        {
            "palabra": "Jagegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliar"
            ],
            "descripcion": "Lit. 'Hacer sin hidratación'",
            "acepciones": [
                "Deshidratar",
                "Secar, deshumedecer, desaguar."
            ],
            "ejemplos": [],
            "raiz": "Jageg"
        },
        {
            "palabra": "Jagegaflàedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Jagegaf' y 'Laedejug', lit. 'Tierra sin hidratación'",
            "acepciones": [
                "Desierto, yermo, arenal."
            ],
            "ejemplos": [],
            "raiz": "Jag"
        },
        {
            "palabra": "Jagajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Agua pequeña'",
            "acepciones": [
                "Charco, formación de agua pequeña."
            ],
            "ejemplos": [],
            "raiz": "Jagaj"
        },
        {
            "palabra": "Jagajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Agua grande'",
            "acepciones": [
                "Lago o laguna.",
                "coloq. Estado de confusión profunda."
            ],
            "ejemplos": [],
            "raiz": "Jagaj"
        },
        {
            "palabra": "Jagajur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de aguas'",
            "acepciones": [
                "Mar, ponto."
            ],
            "ejemplos": [
                "Baltjk göljkàj knaej jagajur."
            ],
            "raiz": "Jagaj"
        },
        {
            "palabra": "Jagajuron",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado",
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Colectivo de aguas grande'",
            "acepciones": [
                "Océano."
            ],
            "ejemplos": [
                "Atlàntjk göljkàj knaej jagajuron."
            ],
            "raiz": "Jagaj"
        },
        {
            "palabra": "Jaglĵneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Jagaj' y 'Ljneg', lit. 'Línea de agua'",
            "acepciones": [
                "Río, arroyo, torrente.",
                "coloq. Flujo o curso de un acontecimiento."
            ],
            "ejemplos": [
                "Klaej jaglĵneg göljkàj kaeneges.",
                "Waej aleg fjügultàg knaej jaglĵneg tajkleges."
            ],
            "raiz": "Jag"
        },
        {
            "palabra": "Jaglĵneget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "diminutivizado"
            ],
            "descripcion": "De 'Jagaj' y 'Ljneg', lit. 'Línea de agua pequeña'",
            "acepciones": [
                "Afluente, ramificación secundaria de un río."
            ],
            "ejemplos": [],
            "raiz": "Jag"
        },
        {
            "palabra": "Waelar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Extrañar, echar de menos."
            ],
            "ejemplos": [
                "Öl gölj<u>wàelar</u> kon, kon frogael'al froj tjsälk wlaejaj!"
            ],
            "raiz": "Wael"
        },
        {
            "palabra": "Waeleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sentimiento algo pesadumbroso o nostálgico por extrañar a alguien o algo."
            ],
            "ejemplos": [
                "Waej <u>waeleg</u> göljkàj knaej fönleg tjl glaeg."
            ],
            "raiz": "Wael"
        },
        {
            "palabra": "Kjltar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ordeñar (obtener leche de un animal hembra)."
            ],
            "ejemplos": [
                "Wändaj, ölajn följklàsj-<u>kjltar</u> waej wülejtugen."
            ],
            "raiz": "Kjlt"
        },
        {
            "palabra": "Kjlteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ordeño (acción de ordeñar)."
            ],
            "ejemplos": [
                "Trësjaw waej kjlteg, knaej wülejtugen göljkùlkegafar."
            ],
            "raiz": "Kjlt"
        },
        {
            "palabra": "Kjltaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Leche (sustancia nutritiva de los mamíferos)."
            ],
            "ejemplos": [
                "Öl göljfjàler üke <u>kjltaj</u> wjlaej knöjsjònug."
            ],
            "raiz": "Kjlt"
        },
        {
            "palabra": "Süjkĵltaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Süjkaj' y 'Kjltaj', lit. 'Leche de azúcar'",
            "acepciones": [
                "Dulce de leche, cajeta (dulce a base de azúcar y leche)."
            ],
            "ejemplos": [
                "Öl göljfjàler üke kjltaj wjlaej knöjsjònug."
            ],
            "raiz": "Süjk"
        },
        {
            "palabra": "Grüfer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Infusionar o preparar café para consumo."
            ],
            "ejemplos": [
                "Öl gägulgrùfer, kon göljwùjk?"
            ],
            "raiz": "Grüf"
        },
        {
            "palabra": "Grüfug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Café (infusión bebible)."
            ],
            "ejemplos": [
                "Tör knaej grüfug, öl jkë göljsfàej-awalar!"
            ],
            "raiz": "Grüf"
        },
        {
            "palabra": "Grüfwùljgajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Grüfug' y 'Wuljgajet', lit. 'Planta pequeña de café'",
            "acepciones": [
                "Grano de café."
            ],
            "ejemplos": [
                "Kon göljwùlasj wän kjlo tjl grüfwùljgajet."
            ],
            "raiz": "Grüf"
        },
        {
            "palabra": "Süjkjltgrùfug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Süjkaj', 'Kjltaj' y 'Grüfug', lit. 'Café con leche con azúcar'",
            "acepciones": [
                "cult. Típica bebida libraterrense servida en tazón y consistente de una parte de café, otra de leche y condimentada con algo de azúcar."
            ],
            "ejemplos": [
                "Waej süjkjltgrùfug göljkàj öles fjalaj wjlaej sjonkòjweg."
            ],
            "raiz": "Süjk"
        },
        {
            "palabra": "Tënkaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Miel (sustancia dulce producida por las abejas)."
            ],
            "ejemplos": [
                "Öl göljwùjk waej tënkaj tör kjltaj."
            ],
            "raiz": "Tënk"
        },
        {
            "palabra": "Ökjler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Reparar, arreglar, enmendar (generalmente algo material).",
                "Recomponer, reformar, restaurar (generalmente algo material)."
            ],
            "ejemplos": [
                "Kon tröljòkjler öles sjfjànördnug!",

            ],
            "raiz": "Ökjl"
        },
        {
            "palabra": "Ökjlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Reparación, arreglo, enmienda (generalmente algo material).",
                "Recomposición, reformación, restauración (generalmente algo material)."
            ],
            "ejemplos": [
                "Klaej konpjùter göljwùlasj knaej <u>ökjlug</u>."
            ],
            "raiz": "Ökjl"
        },
        {
            "palabra": "Ökjlugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin reparación'",
            "acepciones": [
                "Rotura, avería, estropicio."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Ökjlug"
        },
        {
            "palabra": "Ökjlugafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin reparación'",
            "acepciones": [
                "Romper, averiar, estropear, arruinar.",
                "Inutilizar, incapacitar."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Ökjlug"
        },
        {
            "palabra": "Beräter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Relatar, contar, narrar."
            ],
            "ejemplos": [
                "Alfrëd tröljbèräter ölugen knaej glaeges beräteg."
            ],
            "raiz": "Berät"
        },
        {
            "palabra": "Beräteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Historia, relato, crónica.",
                "Cuento o narración (literarios)."
            ],
            "ejemplos": [
                "Ölajn jkë göljblĵst kjaes beräteg.",
                "'Ansel j Gretel' göljkàj knaej beräteg faer kefjegeten."
            ],
            "raiz": "Berät"
        },
        {
            "palabra": "Beräteget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Historia pequeña'",
            "acepciones": [
                "Anécdota, relato breve curioso o divertido.",
                "Chiste, broma.",
                "coloq. Chisme, murmuración."
            ],
            "ejemplos": [
                "Öl göljtàg knaej beräteget kjøne öles ljoneg ä Saanjlàedenug.",
                "Kon göljwùjk-laewün knaej beräteget tjl tö rüsslàedenuges kefjegen?",
                "Konegen tröljlàewün waej beräteget kjøne Ana?"
            ],
            "raiz": "Beräteg"
        },
        {
            "palabra": "Awalbèräteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalaj' y 'Beräteg', lit. 'Historia de la luna'",
            "acepciones": [
                "Sueño (imaginación que se percibe como real mientras se duerme)."
            ],
            "ejemplos": [
                "Ölajn göljkàj wjl knaej <u>awalbèräteg</u>?"
            ],
            "raiz": "Awal"
        },
        {
            "palabra": "Färalawalbèräteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Färaleg', 'Awalaj' y 'Beräteg', lit. 'Historia de la luna de mala condición'",
            "acepciones": [
                "Pesadilla (sueño desagradable).",
                "coloq. Situación lamentada y evitable."
            ],
            "ejemplos": [
                "Öl tröljtàg knaej <u>färalawalbèräteg</u>, klaej tröljkàj üke bljunegafes.",
                "Kjaes fjsljkèfjegur tröljòwadegafer waej öndkĵgeg, klaej göljkàj knaej <u>färalawalbèräteg</u>."
            ],
            "raiz": "Färal"
        },
        {
            "palabra": "Awalbèräter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalaj' y 'Beräter', lit. 'Narrar con la luna'",
            "acepciones": [
                "Soñar."
            ],
            "ejemplos": [
                "Öl göljwùjk-awalbèräter bljuneges futegen."
            ],
            "raiz": "Awal"
        },
        {
            "palabra": "Ürnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Órgano (unidad funcional de un organismo vivo).",
                "coloq. Parte fundamental que cumple una función en una institución."
            ],
            "ejemplos": [
                "Klaej konpjùter göljwùlasj knaej ökjlug."
            ],
            "raiz": "Ürn"
        },
        {
            "palabra": "Wastùrnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wasteg' y 'Ürnug', lit. 'Órgano de vista'",
            "acepciones": [
                "Ojo."
            ],
            "ejemplos": [
                "Öl göljglàs traej kones wastùrnugen."
            ],
            "raiz": "Wast"
        },
        {
            "palabra": "Laewünùrnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laewüneg' y 'Ürnug', lit. 'Órgano de escucha'",
            "acepciones": [
                "Oído."
            ],
            "ejemplos": [
                "Öles arwjles laewünùrnug göljwòjlegafar."
            ],
            "raiz": "Laewün"
        },
        {
            "palabra": "Golunùrnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Golunar' y 'Ürnug', lit. 'Órgano para degustar'",
            "acepciones": [
                "Lengua (del interior de la boca)."
            ],
            "ejemplos": [
                "Klaej laekug tröljtàjklar öles golunùrnug."
            ],
            "raiz": "Golun"
        },
        {
            "palabra": "Öwelug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pelo, cabello (uno).",
                "coloq. Algo de poca cuantía o dimensión."
            ],
            "ejemplos": [
                "Öl göljtàg knaej kones öwelug.",
                "Ölajn jkë tröljràwolar tör wän öwelug!"
            ],
            "raiz": "Öwel"
        },
        {
            "palabra": "Öwelugur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de cabellos'",
            "acepciones": [
                "Pelo, cabellera, melena."
            ],
            "ejemplos": [
                "Kones öwelugur göljkàj wärteges j bljuneges."
            ],
            "raiz": "Öwelug"
        },
        {
            "palabra": "Öweluguraf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado", "invertido"
            ],
            "descripcion": "Lit. 'Sin colectivo de cabellos'",
            "acepciones": [
                "Pelada, calvicie, calva."
            ],
            "ejemplos": [
                
            ],
            "raiz": "Öwelug"
        },
        {
            "palabra": "Gjldòwelugur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Gjldeg' y 'Öwelugur', lit. 'Colectivo de cabellos dorados'",
            "acepciones": [
                "Cabellera rubia o bastante clara."
            ],
            "ejemplos": [
                "Öl göljglàs kjaes gjldòwelugur."
            ],
            "raiz": "Gjld"
        },
        {
            "palabra": "Wärtòwelugur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wärteg' y 'Öwelugur', lit. 'Colectivo de cabellos negros'",
            "acepciones": [
                "Cabellera negra o bastante oscura."
            ],
            "ejemplos": [
                "Öl göljglàs kjaes <u>wärtòwelugur</u>."
            ],
            "raiz": "Wärt"
        },
        {
            "palabra": "Kaenòwelug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kaenaj' y 'Öwelug', lit. 'Cabello de nieve'",
            "acepciones": [
                "Cana (cabello blanco o gris, falto de melanina)."
            ],
            "ejemplos": [
                "Frederik göljtàg tötjö jgjaegen, j kjae älered göljtàg <u>kaenòwelug</u>en."
            ],
            "raiz": "Kaen"
        },
        {
            "palabra": "Tajklar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Quemar, chamuscar, incendiar.",
                "coloq. Enfadar a alguien.",
                "coloq. Excitar, despertar apetito sexual."
            ],
            "ejemplos": [],
            "raiz": "Tajkl"
        },
        {
            "palabra": "Tajkleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Fuego, llama, flama.",
                "coloq. Enfado, ira.",
                "coloq. Pasión, lujuria."
            ],
            "ejemplos": [],
            "raiz": "Tajkl"
        },
        {
            "palabra": "Bjseleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aire (composición gaseosa prevalente en la Tierra)."
            ],
            "ejemplos": [],
            "raiz": "Bjsel"
        },
        {
            "palabra": "Bjseler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Airear, ventilar, refrescar."
            ],
            "ejemplos": [],
            "raiz": "Bjsel"
        },
        {
            "palabra": "Wünelar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Respirar (función biológica automatizada)."
            ],
            "ejemplos": [
                "Öl jkë göljsfàej-wünelar bulöw waej jagaj!"
            ],
            "raiz": "Wünel"
        },
        {
            "palabra": "Wünelaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Respiración.",
                "Jadeo, resuello."
            ],
            "ejemplos": [
                "Wjlaej wünelaj, üke kajfútaegen göljbĵseler kjaegenes bjselùrnugen."
            ],
            "raiz": "Wünel"
        },
        {
            "palabra": "Sëgwùnelar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sëgtan' y 'Wünelar', lit. 'Respirar adentro'",
            "acepciones": [
                "Inhalar, aspirar, inspirar."
            ],
            "ejemplos": [
                "Kon jkë <u>sëgwùnelar</u>'al waej wjwjtaj!"
            ],
            "raiz": "Sëgt"
        },
        {
            "palabra": "Sëgwùnelaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sëgtan' y 'Wünelaj', lit. 'Respiración adentro'",
            "acepciones": [
                "Inhalación, aspiración, inspiración."
            ],
            "ejemplos": [
                "Wjlaej <u>sëgwùnelaj</u>, waej kefjegen göljsfàej-ënskj kjaegenes wjkolaj."
            ],
            "raiz": "Sëgt"
        },
        {
            "palabra": "Bjselùrnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Bjseleg' y 'Ürnug', lit. 'Órgano de aire'",
            "acepciones": [
                "Pulmón."
            ],
            "ejemplos": [],
            "raiz": "Bjsel"
        },
        {
            "palabra": "Bejnar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Limpiar, higienizar, asear."
            ],
            "ejemplos": [
                "Öl göljwùjk-<u>bejnar</u> ölugenes kefjdĵlugeturen."
            ],
            "raiz": "Bejn"
        },
        {
            "palabra": "Bejnaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Limpieza, higiene, aseo."
            ],
            "ejemplos": [
                "Kones öndkĵgeget göljwùlasj ësjl <u>bejnaj</u>."
            ],
            "raiz": "Bejn"
        },
        {
            "palabra": "Bejnajaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Suciedad, inmundicia, desaseo."
            ],
            "ejemplos": [
                "Öl göljglàegafar-tag <u>bejnajaf</u> wjl öles rjnlug!"
            ],
            "raiz": "Bejnaj"
        },
        {
            "palabra": "Bejnajafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ensuciar, manchar, enmugrecer."
            ],
            "ejemplos": [
                "Tjsälk wlaejaj, kon jkë <u>bejnajafar</u>'al waej aurkĵgeg."
            ],
            "raiz": "Bejnaj"
        },
        {
            "palabra": "Dogöner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ordenar, mandar, decretar."
            ],
            "ejemplos": [
                "Kjae trölj<u>dògöner</u> öl wlaejar ä kjaes wajug."
            ],
            "raiz": "Dogön"
        },
        {
            "palabra": "Dogönug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Orden, mandato, mandamiento, decreto."
            ],
            "ejemplos": [
                "Kon bejnar'al kones awalaurkĵgeg. Göljkàj knaej <u>dogönug</u>."
            ],
            "raiz": "Dogön"
        },
        {
            "palabra": "Dogönàlentar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Dogönug' y 'Alentar', lit. 'Aceptar (una) orden'",
            "acepciones": [
                "Obedecer, acatar, cumplir."
            ],
            "ejemplos": [//TODO: madre, mamá
                "Öl göljkàj kones madre, kon <u>dogönàlentar</u>'al öl!"
            ],
            "raiz": "Dogön"
        },
        {
            "palabra": "Dogönàlentaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Dogönug' y 'Alentaj', lit. 'Aceptación de orden'",
            "acepciones": [
                "Obediencia, acatamiento, cumplimiento."
            ],
            "ejemplos": [//TODO: ejército
                "Waej <u>dogönàlentaj</u> göljkàj knaej kläsjug wjlaej ejército."
            ],
            "raiz": "Dogön"
        },
        {
            "palabra": "Dogönàlentajes",
            "tipo": [
                "Adjetivo"
            ],
            "subtipo": [
                "compuesto",
                "calificativo"
            ],
            "descripcion": "De 'Dogönug' y 'Alentaj', lit. 'Relativo a aceptación de orden'",
            "acepciones": [
                "Obediente, cumplidor, bienmandado."
            ],
            "ejemplos": [
                "Öles kängules öndwùlejtug följkàj üke <u>dogönàlentajes</u> tör öl."
            ],
            "raiz": "Dogön"
        },
        {
            "palabra": "Dogönalentkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Dogönug', 'Alentaj' y 'Kefjeg', lit. 'Persona con aceptación de orden'",
            "acepciones": [
                "Siervo, súbdito, servidor."
            ],
            "ejemplos": [
                "Fülwuj göljkàj <u>dogönalentfkèfjeg</u>en tjl Kones Dawegaj."
            ],
            "raiz": "Dogön"
        },
        {
            "palabra": "Bëndjleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Inicio, comienzo, principio.",
                "relig. Génesis, origen."
            ],
            "ejemplos": [
                "Traej tröljkàj frät waej <u>bëndjleg</u> tjlaej wöjleg.",
                "Waej kojwkèfjegen tröljknàler waej <u>bëndjleg</u> tjl Laedejug."
            ],
            "raiz": "Bëndjl"
        },
        {
            "palabra": "Bëndjlar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Iniciar, comenzar, empezar."
            ],
            "ejemplos": [
                "Kon göljwùjk-<u>bëndjlar</u> klaej tör öl?"
            ],
            "raiz": "Bëndjl"
        },
        {
            "palabra": "Fändjleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Fin, final, término, conclusión."
            ],
            "ejemplos": [
                "Klaej göljkàj waej <u>fändjleg</u> tjl kjaes rëndegafen."
            ],
            "raiz": "Fändjl"
        },
        {
            "palabra": "Fändjlegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin final'",
            "acepciones": [
                "Infinito (concepto de no tener fin ni límite).",
                "tec. Valor mayor que cualquier cantidad asignable, representado con '∞'."
            ],
            "ejemplos": [
                "Öles glaegon för kon göljkàj <u>fändjlegaf</u>es, öles lündkèfjeg.",
                "Wjl knuwerfèjregur, göljkàj frejegafes klën waej <u>fändjlegaf</u>."
            ],
            "raiz": "Fändjleg"
        },
        {
            "palabra": "Fändjlar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Finalizar, terminar, concluir, acabar.",
                "coloq. Alcanzar el orgasmo o clímax sexual, principalmente el hombre en la eyaculación."
            ],
            "ejemplos": [
                "Kon göljklàsj-<u>fändjlar</u> klaej fejfug trölj tjlaej awalknòjar.",
                "Öl göljsfàej-<u>fàndjlar</u> knöjan kon...?"
            ],
            "raiz": "Fändjl"
        },
        {
            "palabra": "Fejfàndjleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fejfug' y 'Fändjleg', lit. 'Fin de texto'",
            "acepciones": [
                "Epílogo (parte final de un libro o texto)."
            ],
            "ejemplos": [
                "Öl gägulfèjfar waej <u>fejfàndjleg</u> tjl öles fejfug."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Fejfbèndjleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Fejfug' y 'Bëndjleg', lit. 'Inicio de texto'",
            "acepciones": [
                "Prólogo (introducción de un libro o texto)."
            ],
            "ejemplos": [
                "Öl jkë göljwènslar waej <u>fejfbèndjleg</u>en."
            ],
            "raiz": "Fejf"
        },
        {
            "palabra": "Wenslaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Lectura, leída."
            ],
            "ejemplos": [
                "Tröljkàj knaej enäj <u>wenslaj</u>!"
            ],
            "raiz": "Wensl"
        },
        {
            "palabra": "Wenslar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Leer (ver texto para interpretarlo mentalmente)."
            ],
            "ejemplos": [
                "Öl jkë gölj<u>wènslar</u> waej fejfbèndjlegen."
            ],
            "raiz": "Wensl"
        },
        {
            "palabra": "Söjwènslar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Söjwaj' y 'Wenslar', lit. 'Leer con diálogo'",
            "acepciones": [
                "Orar, pronunciar un discurso, leer en voz alta."
            ],
            "ejemplos": [
                "Kjae trölj<u>söjwènslar</u> ä fülwuj waej fjsljkèfjegur."
            ],
            "raiz": "Söjw"
        },
        {
            "palabra": "Söjwènslaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Söjwaj' y 'Wenslaj', lit. 'Lectura con diálogo'",
            "acepciones": [
                "Discurso, oración (orar vocalmente), pronunciamiento."
            ],
            "ejemplos": [
                "Öl tröljglàs waej <u>söjwènslaj</u> tjlaej Gërtaj!"
            ],
            "raiz": "Söjw"
        },
        {
            "palabra": "Jöner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Continuar, seguir, proseguir, reanudar."
            ],
            "ejemplos": [
                "Kon <u>jöner</u>'al ölegenes söjwaj, tjsälk wlaejaj."
            ],
            "raiz": "Jön"
        },
        {
            "palabra": "Jönug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Continuación, seguimiento, reanudación."
            ],
            "ejemplos": [
                "Waej <u>jönug</u> tjl klaej beräteg stjlaw jkë tröljkàj-fejferes."
            ],
            "raiz": "Jön"
        },
        {
            "palabra": "Jönugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin continuación'",
            "acepciones": [
                "Detención, interrupción, suspensión."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Jönug"
        },
        {
            "palabra": "Jönugafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin continuación'",
            "acepciones": [
                "Detener, parar, interrumpir, suspender."
            ],
            "ejemplos": [
                "Kon jkë <u>jönugafer</u>'al..."
            ],
            "raiz": "Jönug"
        },
        {
            "palabra": "Enäj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Bien (de modo correcto según normas implícitas)."
            ],
            "ejemplos": [
                "—Tjsälk kon göljkàj udaj?<br>—<u>Enäj</u>, j kon?"
            ],
            "raiz": "Enäj"
        },
        {
            "palabra": "Enäjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Bondad, benevolencia, benignidad.",
                "coloq. Característica de buena calidad, condición o modo."
            ],
            "ejemplos": [
                "Jkë göljàw üke <u>enäjeg</u> wjl Laedejug, fälòj kon göljtàg üke.",
                "Klaej grüfug göljkàj üke <u>enäjeg</u>es!"
            ],
            "raiz": "Enäj"
        },
        {
            "palabra": "Enäjer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hacer el bien (lo correcto según normas implícitas)."
            ],
            "ejemplos": [
                "Kon jkë dönjlajafar'al kjae, kon kläsj'al-<u>enäjer</u>."
            ],
            "raiz": "Enäj"
        },
        {
            "palabra": "Färal",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mal (de modo incorrecto según normas implícitas)."
            ],
            "ejemplos": [
                "Kon jkë göljklàsj-jagwĵkolar, traej göljkàj <u>färal</u>."
            ],
            "raiz": "Färal"
        },
        {
            "palabra": "Färaleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Maldad, malicia, malignidad.",
                "coloq. Característica de mala calidad, condición o modo."
            ],
            "ejemplos": [
                "Kjae göljkàj knaej <u>färaleg</u>es sjonkèfjeg.",
                "Klaej laekug göljkàj <u>färaleg</u>es faer kones dönjleg."
            ],
            "raiz": "Färal"
        },
        {
            "palabra": "Färaler",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hacer el mal (lo incorrecto según normas implícitas)."
            ],
            "ejemplos": [
                "Waej wejkrjnkèfjegen gölj<u>fàraler</u> faer jagnar."
            ],
            "raiz": "Färal"
        },
        {
            "palabra": "Färalùjkar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Färal' y 'Lujkar', lit. 'Gastar mal'",
            "acepciones": [
                "Derrochar, despilfarrar, dilapidar."
            ],
            "ejemplos": [
                "Kon jkë <u>färalùjkar</u>'al wjl knaejteg loke wöjlegafes."
            ],
            "raiz": "Färal"
        },
        {
            "palabra": "Wjndleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Viento, correntada."
            ],
            "ejemplos": [],
            "raiz": "Wjndl"
        },
        {
            "palabra": "Wjndleget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Brisa, corriente, viento suave."
            ],
            "ejemplos": [],
            "raiz": "Wjndleg"
        },
        {
            "palabra": "Aurar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Reunir, congregar, encontrarse.",
                "Clasificar, ordenar, catalogar."
            ],
            "ejemplos": [],
            "raiz": "Aur"
        },
        {
            "palabra": "Aurug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Encuentro, reunión, congregación (de dos o más individuos).",
                "Clasificación, ordenación o agrupamiento de elementos afines."
            ],
            "ejemplos": [],
            "raiz": "Aur"
        },
        {
            "palabra": "Aurkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Aurug', y 'Kjgeg', lit. 'Lugar de reunión'",
            "acepciones": [
                "Salón, sala.",
                "Ambiente o sector de un edificio techado."
            ],
            "ejemplos": [],
            "raiz": "Aur"
        },
        {
            "palabra": "Laekaurkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laekug', 'Aurug' y 'Kjgeg', lit. 'Lugar de reunión de comida'",
            "acepciones": [
                "Comedor del hogar."
            ],
            "ejemplos": [],
            "raiz": "Laek"
        },
        {
            "palabra": "Awalaurkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalar', 'Aurug' y 'Kjgeg', lit. 'Lugar de reunión para dormir'",
            "acepciones": [
                "Dormitorio, habitación, cuarto, aposento."
            ],
            "ejemplos": [],
            "raiz": "Awal"
        },
        {
            "palabra": "Jagaurkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Jagaj', 'Aurug' y 'Kjgeg', lit. 'Lugar de reunión de agua'",
            "acepciones": [
                "Baño, tocador, toilet."
            ],
            "ejemplos": [
                "Öl göljklàsj-ëgael ä waej jagaurkĵgeg!"
            ],
            "raiz": "Jag"
        },
        {
            "palabra": "Ëgael",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ir, encaminar."
            ],
            "ejemplos": [
                "Öl göljklàsj-ëgael ä waej jagaurkĵgeg!"
            ],
            "raiz": "Ëgael"
        },
        {
            "palabra": "Frogaelaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Venida, llegada."
            ],
            "ejemplos": [
                "Kjaes frogaelaj tröljàlar öl ljwkeges."
            ],
            "raiz": "Frogael"
        },
        {
            "palabra": "Frogael",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Venir (ir adonde el interlocutor)."
            ],
            "ejemplos": [
                "Kjae tröljfrògael tör üke laekugen."
            ],
            "raiz": "Frogael"
        },
        {
            "palabra": "Ulerug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Alcohol (compuesto químico).",
                "coloq. Cosa nociva o que causa estragos."
            ],
            "ejemplos": [
                "Knaej fjalajen göljtàg ulerug.",
                "Traej awàlajet göljkàj knaej ulerug faer kon."
            ],
            "raiz": "Uler"
        },
        {
            "palabra": "Ulerfjàlaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Ulerug' y 'Fjalaj', lit. 'Bebida con alcohol'",
            "acepciones": [
                "Bebida alcohólica, bebida espirituosa."
            ],
            "ejemplos": [
                "Öl göljwùjk-fjaler ulerfjàlajen."
            ],
            "raiz": "Uler"
        },
        {
            "palabra": "Ulerer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Alcoholizar, añadir alcohol a un líquido u obtenerlo por destilación.",
                "Emborrachar, embriagar, intoxicar."
            ],
            "ejemplos": [],
            "raiz": "Uler"
        },
        {
            "palabra": "Laeker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Comer, tragar, ingerir.",
                "coloq. Hacer desaparecer algo."
            ],
            "ejemplos": [
                "Kon följlàeker traej?",
                "Waej wjndleg tröljlàeker kones fejfegen."
            ],
            "raiz": "Laek"
        },
        {
            "palabra": "Laektàjklar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laekug' y 'Tajklar'. lit. 'Quemar comida'",
            "acepciones": [
                "Cocinar, cocer, preparar comida con fuego."
            ],
            "ejemplos": [],
            "raiz": "Laek"
        },
        {
            "palabra": "Laektàjkleg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laekug' y 'Tajklar'. lit. 'Fuego con comida'",
            "acepciones": [
                "Cocción, cocedura (procedimiento para cocinar)."
            ],
            "ejemplos": [
                "Tjsälk wlaejaj, kon sëlger'al waej <u>laektàjkleg</u> knaej fjke."
            ],
            "raiz": "Laek"
        },
        {
            "palabra": "Laekug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Comida, alimento.",
                "Plato (alimento preparado para comer).",
                "coloq. Fuente de energía y positividad."
            ],
            "ejemplos": [
                "Öl följlùjkar ölajnes <u>laekug</u>.",
                "Öl göljwùjk waej tösal <u>laekug</u> tjlaej laekĵgeg, tjsälk wlaejaj.",
                "Glaeg göljkàj <u>laekug</u> faer waej blödùrnug."
            ],
            "raiz": "Laek"
        },
        {
            "palabra": "Laekuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Comida pequeña'",
            "acepciones": [
                "Tentempié, aperitivo, refrigerio."
            ],
            "ejemplos": [
                "Öl följlùjkar laekug."
            ],
            "raiz": "Laekug"
        },
        {
            "palabra": "Laekugaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin comida'",
            "acepciones": [
                "Hambre, apetito, gana (de comida)."
            ],
            "ejemplos": [],
            "raiz": "Laekug"
        },
        {
            "palabra": "Laekĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laekug' y 'Kjgeg', lit. 'Lugar de comida'",
            "acepciones": [
                "obs. Punto de la aldea donde se reunía a comer en familia.",
                "Restaurante, cantina."
            ],
            "ejemplos": [],
            "raiz": "Laek"
        },
        {
            "palabra": "Wänlàekug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wän' y 'Laekug', lit. 'Primera comida'",
            "acepciones": [
                "Desayuno (comida de la mañana temprano)."
            ],
            "ejemplos": [
                "Kon göljglàs waej wjwjtgòlunajes <u>wänlàekug</u>en?"
            ],
            "raiz": "Wän"
        },
        {
            "palabra": "Wänlàeker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wän' y 'Laeker', lit. 'Primer comer'",
            "acepciones": [
                "Desayunar (comer el desayuno)."
            ],
            "ejemplos": [
                "Öl göljsfàej-<u>wänlàeker</u> güwlan kon wändaj?"
            ],
            "raiz": "Wän"
        },
        {
            "palabra": "Sjonlàekug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjonug' y 'Laekug', lit. 'Comida del sol'",
            "acepciones": [
                "Almuerzo (comida del mediodía)."
            ],
            "ejemplos": [
                "Wäld ölugen följlàeker wjlaej <u>sjonlàekug</u>?"
            ],
            "raiz": "Sjon"
        },
        {
            "palabra": "Sjonlàeker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjonug' y 'Laeker', lit. 'Comer al sol'",
            "acepciones": [
                "Almorzar (comer el almuerzo)."
            ],
            "ejemplos": [
                "Wäld kon göljwùjk-<u>sjonlàeker</u>?"
            ],
            "raiz": "Sjon"
        },
        {
            "palabra": "Grüflàekug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Grüfug' y 'Laekug', lit. 'Comida de café'",
            "acepciones": [
                "Merienda (comida de la tarde)."
            ],
            "ejemplos": [
                "Udaj öl jkë följtàg knaej <u>grüflàekug</u>."
            ],
            "raiz": "Grüf"
        },
        {
            "palabra": "Grüflàeker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Grüfug' y 'Laeker', lit. 'Comer del café'",
            "acepciones": [
                "Merendar (comer la merienda)."
            ],
            "ejemplos": [
                "Öl följ<u>grüflàeker</u> üke süjkaj udaj."
            ],
            "raiz": "Grüf"
        },
        {
            "palabra": "Awalàekug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalaj' y 'Laekug', lit. 'Comida de la luna",
            "acepciones": [
                "Cena (comida de la noche)."
            ],
            "ejemplos": [
                "Öl följlaektàjklar waej <u>awalàekug</u>, öles glaeg."
            ],
            "raiz": "Awal"
        },
        {
            "palabra": "Awalàeker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalaj' y 'Laeker', lit. 'Comer de la luna'",
            "acepciones": [
                "Cenar (comer la cena)."
            ],
            "ejemplos": [
                "Konegen ëgael'al ä <u>awalàeker</u> ä knaej laekĵgeg, öl göljlùjkar!"
            ],
            "raiz": "Awal"
        },
        {
            "palabra": "Käjker",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cortar, tajar, seccionar (con instrumento afilado)."
            ],
            "ejemplos": [
                "Öl göljklàsj-käjker öles öwelugur."
            ],
            "raiz": "Käjk"
        },
        {
            "palabra": "Käjkug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Corte, tajo, incisión."
            ],
            "ejemplos": [
                "Kones käjkug gägulblòder üke."
            ],
            "raiz": "Käjk"
        },
        {
            "palabra": "Käjkuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Corte pequeño'",
            "acepciones": [
                "Raspón, rasguño, arañazo."
            ],
            "ejemplos": [
                "Fülwuj göljkàj enäj, göljkàj frät knaej <u>käjkuget</u>."
            ],
            "raiz": "Käjkug"
        },
        {
            "palabra": "Laekäjkfùtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laekug', 'Käjker' y 'Futaj', lit. 'Herramienta para cortar comida'",
            "acepciones": [
                "Cuchillo (cubierto de mesa)."
            ],
            "ejemplos": [
                "Öl jkë göljsfàej-laeker ütan <u>laekäjkfùtaj</u>!"
            ],
            "raiz": "Laek"
        },
        {
            "palabra": "Dësljar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Comprar, adquirir, mercar (operación comercial)."
            ],
            "ejemplos": [
                "Konugen göljwùlasj-<u>dësljar</u> knaejuj autonòwajl."
            ],
            "raiz": "Dëslj"
        },
        {
            "palabra": "Dësljaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Compra, adquisición."
            ],
            "ejemplos": [
                "Klaej <u>dësljaj</u> tröljkàj waej tösal tjlaej daj."
            ],
            "raiz": "Dëslj"
        },
        {
            "palabra": "Dësljkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Dësljar' y 'Kjgeg', lit. 'Lugar para comprar'",
            "acepciones": [
                "Tienda, comercio, negocio (sitio de venta de productos de consumo)."
            ],
            "ejemplos": [
                "Kon tröljlùjkar fülwuj ölegenes lujkaj wjlaej <u>dësljkĵgeg</u>!"
            ],
            "raiz": "Dëslj"
        },
        {
            "palabra": "Ünklar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Vender, expender (operación comercial)."
            ],
            "ejemplos": [
                "Öl göljwùjk-<u>ünklar</u> klaej kefjdĵlugetur laswäld klaej göljkàj enljegafes."
            ],
            "raiz": "Ünkl"
        },
        {
            "palabra": "Ünklaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Venta (transacción de cesión de algo por dinero)."
            ],
            "ejemplos": [
                "Öl tröljtĵröl üke lujkaj tör waej <u>ünklaj</u> tjl öles autonòwajl."
            ],
            "raiz": "Ünkl"
        },
        {
            "palabra": "Lujkar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Pagar, abonar, costear.",
                "coloq. Gastar o desembolsar dinero."
            ],
            "ejemplos": [
                "Stjlaw kjae jkë trölj<u>lùjkar</u> öl öles tänslùjkaj.",
                "Kon trölj<u>lùjkar</u> fülwuj ölegenes lujkaj wjlaej dësljkĵgeg!"
            ],
            "raiz": "Lujk"
        },
        {
            "palabra": "Lujkaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dinero, plata, efectivo.",
                "Medio de intercambio."
            ],
            "ejemplos": [],
            "raiz": "Lujk"
        },
        {
            "palabra": "Lujkajur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de dinero'",
            "acepciones": [
                "Moneda, unidad monetaria, divisa."
            ],
            "ejemplos": [],
            "raiz": "Lujkaj"
        },
        {
            "palabra": "Lujkeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Riqueza, opulencia, fortuna.",
                "coloq. Prosperidad, auge."
            ],
            "ejemplos": [],
            "raiz": "Lujk"
        },
        {
            "palabra": "Lujkegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin riqueza'",
            "acepciones": [
                "Pobreza, escasez (económica)."
            ],
            "ejemplos": [
                "Öl göljkàj knaej lujkegafes kefjeg."
            ],
            "raiz": "Lujkeg"
        },
        {
            "palabra": "Lujkegafon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido", "aumentativizado"
            ],
            "descripcion": "Lit. 'Sin riqueza grande'",
            "acepciones": [
                "Miseria, penuria, indigencia."
            ],
            "ejemplos": [
                "Göljkàj üke ljwkegafes wast loke lujkegafon."
            ],
            "raiz": "Lujkeg"
        },
        {
            "palabra": "Lujkajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Dinero grande'",
            "acepciones": [
                "Tesoro, gran capital."
            ],
            "ejemplos": [],
            "raiz": "Lujkaj"
        },
        {
            "palabra": "Lujkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lujkaj' y 'Kjgeg', lit. 'Lugar de dinero'",
            "acepciones": [
                "neo. Banco, institución financiera."
            ],
            "ejemplos": [],
            "raiz": "Lujk"
        },
        {
            "palabra": "Lujkaurkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lujkaj', 'Aurug' y 'Kjgeg', lit. 'Lugar de reunión de dinero'",
            "acepciones": [
                "neo. Bóveda bancaria donde se guarda el dinero."
            ],
            "ejemplos": [],
            "raiz": "Lujk"
        },
        {
            "palabra": "Lujkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Lujkaj' y 'Kefjeg', lit. 'Persona con dinero'",
            "acepciones": [
                "Empresario, emprendedor.",
                "Inversor, inversionista.",
                "coloq. Dueño, patrón, jefe, mandamás."
            ],
            "ejemplos": [],
            "raiz": "Lujk"
        },
        {
            "palabra": "Wajer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nacer (un ser).",
                "coloq. Originar, iniciar.",
                "coloq. Crear o dar forma a algo generalmente abstracto."
            ],
            "ejemplos": [],
            "raiz": "Waj"
        },
        {
            "palabra": "Wajeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nacimiento."
            ],
            "ejemplos": [
                ""
            ],
            "raiz": "Waj"
        },
        {
            "palabra": "Wajug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Bebé, neonato, recién nacido.",
                "coloq. Hijo, hija, descendencia.",
                "despect. coloq. Novato, inexperto."
            ],
            "ejemplos": [
                "Öl följtàg knaej wajug!",
                "Kamĵla j kon kängulkèfjer konegenes wänes wajug?",
                "Frät fajw sontegen? Kon gölkàj knaej wajug!"
            ],
            "raiz": "Waj"
        },
        {
            "palabra": "Wajuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Bebé pequeño'",
            "acepciones": [
                "Feto, embrión (en desarrollo dentro del útero)."
            ],
            "ejemplos": [],
            "raiz": "Wajug"
        },
        {
            "palabra": "Wajugon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Bebé grande'",
            "acepciones": [
                "Infante, párvulo."
            ],
            "ejemplos": [],
            "raiz": "Wajug"
        },
        {
            "palabra": "Lajteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Luz, luminosidad, brillo.",
                "coloq. Conocimiento, sapiencia.",
                "coloq. Salvador, salvadora."
            ],
            "ejemplos": [],
            "raiz": "Lajt"
        },
        {
            "palabra": "Lajtegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin luz'",
            "acepciones": [
                "Oscuridad, tiniebla (ausencia de luz para percibir las cosas)."
            ],
            "ejemplos": [],
            "raiz": "Lajteg"
        },
        {
            "palabra": "Lajtegafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin luz'",
            "acepciones": [
                "Oscurecer, ensombrecer (quitar la luz).",
                "coloq. Arrebatar la esperanza o el aliento."
            ],
            "ejemplos": [
                "Waej awalknòjar trölj<u>làjtegafer</u> waej aurkjgeg.",
                "Kjaes fejfegen trölj<u>làjtegafer</u> öles blödùrnug."
            ],
            "raiz": "Lajteg"
        },
        {
            "palabra": "Kojwgrjnlàjteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg', 'Grjneg' y 'Lajteg', lit. 'Luz verde del cielo'",
            "acepciones": [
                "Aurora boreal."
            ],
            "ejemplos": [
                "Öl göljglàs-wast waej kojwgrjnlàjteg ä waej awalkòjweg!"
            ],
            "raiz": "Kojw"
        },
        {
            "palabra": "Kojwlajtsònteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg', 'Lajteg' y 'Sonteg', lit. 'Punto de luz del cielo'",
            "acepciones": [
                "Estrella, lucero, astro."
            ],
            "ejemplos": [
                "Göljàw üke <u>kojwlajtsònteg</u> wjlaej kojweg."
            ],
            "raiz": "Kojw"
        },
        {
            "palabra": "Lajter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Iluminar, alumbrar.",
                "Encender, prender (activar algo que genera luz).",
                "coloq. Brillar, resplandecer.",
                "coloq. Enseñar, instruir."
            ],
            "ejemplos": [
                "Waej tajkleg trölj<u>làjter</u> waej awalkòjweg.",
                "Kon göljsfàej-<u>lajter</u>, tjsälk wlaejaj?",
                "Kjaes rjnlug fjügu<u>làjter</u> tjsälk waej sjonug.",
                "Kon <u>lajter</u>'al öl tör kones fëjrsfàejug."
            ],
            "raiz": "Lajt"
        },
        {
            "palabra": "Löwj",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Rápido, deprisa, aprisa."
            ],
            "ejemplos": [
                "Ölugen göljklàsj-alar klaej <u>löwj</u>!"
            ],
            "raiz": "Löwj"
        },
        {
            "palabra": "Löwjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Rapidez, celeridad.",
                "Prisa, apresuramiento, prontitud (para hacer algo)."
            ],
            "ejemplos": [],
            "raiz": "Löwj"
        },
        {
            "palabra": "Löwjer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Apurar, acelerar, apresurar."
            ],
            "ejemplos": [],
            "raiz": "Löwj"
        },
        {
            "palabra": "Löwjrènder",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Löwjeg' y 'Rënder', lit. 'Resolver con rapidez'",
            "acepciones": [
                "Expeditar, solucionar algo con diligencia y agilidad."
            ],
            "ejemplos": [],
            "raiz": "Löwj"
        },
        {
            "palabra": "Dünej",
            "tipo": [
                "Adverbio"
            ],
            "subtipo": [
                "modo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Despacio, lentamente."
            ],
            "ejemplos": [
                "Ölegen alar'al klaej <u>dünej</u>..."
            ],
            "raiz": "Dünej"
        },
        {
            "palabra": "Dünejeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Lentitud, falta de rapidez."
            ],
            "ejemplos": [
                "Kjae göljkàj üke <u>dünejeg</u>es faer laeker."
            ],
            "raiz": "Dünej"
        },
        {
            "palabra": "Dünejar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Desacelerar, ralentizar, lentificar."
            ],
            "ejemplos": [
                "Kon <u>dünejar</u>'al kones dalënaj, tjsälk wlaejaj."
            ],
            "raiz": "Dünej"
        },
        {
            "palabra": "Kälaeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Movimiento, desplazamiento, traslación."
            ],
            "ejemplos": [
                "Waej <u>kälaeg</u> tjl kjaes öwelugur tröljbljùnar öl."
            ],
            "raiz": "Käla"
        },
        {
            "palabra": "Kälaer",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mover, desplazar, trasladar."
            ],
            "ejemplos": [
                "Kon <u>kälaer</u>'al, göljkàj kaeneges!"
            ],
            "raiz": "Käla"
        },
        {
            "palabra": "Kälaegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin movimiento'",
            "acepciones": [
                "Inmovilidad, quietud, reposo."
            ],
            "ejemplos": [
                "Öl jkë göljsfàej-kaj <u>kälaegaf</u>es, öl göljwùlasj-dalënar."
            ],
            "raiz": "Kälaeg"
        },
        {
            "palabra": "Kälaegafer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin movimiento'",
            "acepciones": [
                "Inmovilizar, aquietar, reposar."
            ],
            "ejemplos": [
                "Tjsälk wlaejaj, kon <u>kälaegafer</u>'al kones öndwùlejtug."
            ],
            "raiz": "Kälaeg"
        },
        {
            "palabra": "Kälarĵgëlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kälaeg' y 'Rjgëlug', lit. 'Dibujo con movimiento'",
            "acepciones": [
                "Película, filme o cinta cinematográfica."
            ],
            "ejemplos": [
                "Kon göljwùjk-wast knaej <u>kälarĵgëlug</u> tör öl?"
            ],
            "raiz": "Käla"
        },
        {
            "palabra": "Kälarjgëlànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kälaeg', 'Rjgëlug' y 'Anördnug', lit. 'Máquina de dibujos con movimiento'",
            "acepciones": [
                "tec. Cinematógrafo, proyector (aparato que proyecta imágenes)."
            ],
            "ejemplos": [//TODO: electricidad
                "Waej <u>kälarjgëlànördnug</u> göljwùlasj electricidad."
            ],
            "raiz": "Käla"
        },
        {
            "palabra": "Kälarjgëlkĵgeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kälaeg', 'Rjgëlug' y 'Kjgeg', lit. 'Lugar de dibujos con movimiento'",
            "acepciones": [
                "Cine, cinema (establecimiento donde proyectan películas)."
            ],
            "ejemplos": [
                "Ölegen egael'al ä waej <u>kälarjgëlkĵgeg</u>! Kon göljwùjk?"
            ],
            "raiz": "Käla"
        },
        {
            "palabra": "Kälarjgëlfèjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kälaeg', 'Rjgëlug' y 'Fejregur', lit. 'Colectivo de conocimientos de dibujos con movimiento'",
            "acepciones": [
                "Cinematografía (arte y técnica de proyección de imágenes)."
            ],
            "ejemplos": [
                "Öl jkë följknàler <u>kälarjgëlfèjregur</u>."
            ],
            "raiz": "Käla"
        },
        {
            "palabra": "Frojkàlaer",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Traer (llevar algo o alguien al lugar del interlocutor).",
                "coloq. Generar, originar."
            ],
            "ejemplos": [
                "Kjn kon göljfrògael ä öles öndkĵgeget, kon göljsfàej-<u>frojkàlaer</u> knaej fjalaj?",
                "Traej aleg följ<u>frojkàlaer</u> ükon rëndegafen."
            ],
            "raiz": "Froj"
        },
        {
            "palabra": "Sjoner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Insolar (exponer algo al sol).",
                "Entibiar o darle calidez a algo.",
                "coloq. cult. Acariciar o tratar con cariño un hombre a una mujer."
            ],
            "ejemplos": [],
            "raiz": "Sjon"
        },
        {
            "palabra": "Wajsjòner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wajug' y 'Sjoner', lit. 'Solear (un) nacimiento'",
            "acepciones": [
                "Embarazar un hombre a una mujer.",
                "Preñar o fecundar un animal macho a la hembra."
            ],
            "ejemplos": [],
            "raiz": "Waj"
        },
        {
            "palabra": "Wajsjònug",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wajug' y 'Sjonug', lit. 'Nacimiento soleado'",
            "acepciones": [
                "Embarazo, gestación."
            ],
            "ejemplos": [
                "Konstànsa tröljbèräter wäld kjae göljkàj wajsjònuges!"
            ],
            "raiz": "Waj"
        },
        {
            "palabra": "Sjonug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sol.",
                "coloq. Ente masculino poderoso y magnífico.",
                "coloq. Problema significativo y crítico."
            ],
            "ejemplos": [],
            "raiz": "Sjon"
        },
        {
            "palabra": "Sjonuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Sol pequeño'",
            "acepciones": [
                "Cobardía, temor.",
                "Decepción, disgusto."
            ],
            "ejemplos": [],
            "raiz": "Sjonug"
        },
        {
            "palabra": "Sjonugon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Sol grande'",
            "acepciones": [
                "Masculinidad, hombría.",
                "Seducción, persuasión.",
                "coloq. Galán, donjuán."
            ],
            "ejemplos": [],
            "raiz": "Sjonug"
        },
        {
            "palabra": "Awalar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dormir, descansar.",
                "coloq. Embelesar o cautivar con su belleza una mujer a un hombre."
            ],
            "ejemplos": [],
            "raiz": "Awal"
        },
        {
            "palabra": "Awalaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Luna (satélite de la Tierra).",
                "coloq. Ente femenino poderoso y magnífico.",
                "coloq. Desventura o trance sinuoso e intrincado."
            ],
            "ejemplos": [
                "Waej awalaj göljkàj üke lajteges.",
                "Wjl öles awalbèrätegen, kon göljkàj waej awalaj!"
            ],
            "raiz": "Awal"
        },
        {
            "palabra": "Awàlajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado",
                "esdrujulización"
            ],
            "descripcion": "Lit. 'Luna pequeña'",
            "acepciones": [
                "cult. coloq. Tratativo informal, afectuoso y tierno que recibe una mujer."
            ],
            "ejemplos": [
                "Öles glaeg, kon göljkàj öles <u>awàlajet</u>."
            ],
            "raiz": "Awalaj"
        },
        {
            "palabra": "Awàlajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado",
                "esdrujulización"
            ],
            "descripcion": "Lit. 'Luna grande'",
            "acepciones": [
                "Feminidad.",
                "Belleza, beldad o atractivo femeninos."
            ],
            "ejemplos": [
                "Üke awalkèfjegen göljglàs kjaejnes <u>awàlajon</u>.",
                "Öl göljglàs waej awalkèfjegen <u>awàlajon</u>es."
            ],
            "raiz": "Awalaj"
        },
        {
            "palabra": "Kojweg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cielo, firmamento.",
                "neo. tec. Cosmos, universo, espacio exterior más allá de la estratósfera."
            ],
            "ejemplos": [
                "Waej <u>kojweg</u> göljkàj lajteges udaj."
            ],
            "raiz": "Kojw"
        },
        {
            "palabra": "Kojwlàedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg' y 'Laedejug', lit. 'Tierra del cielo'",
            "acepciones": [
                "relig. Cielo, paraíso, edén."
            ],
            "ejemplos": [],
            "raiz": "Kojw"
        },
        {
            "palabra": "Tajklàedejug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Tajkleg' y 'Laedejug', lit. 'Tierra de fuego'",
            "acepciones": [
                "relig. Infierno, averno."
            ],
            "ejemplos": [],
            "raiz": "Tajkl"
        },
        {
            "palabra": "Kojwjàgar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg' y 'Jagar', lit. 'Mojar del cielo'",
            "acepciones": [
                "Llover, chaparrear, precipitar."
            ],
            "ejemplos": [
                "Udaj följkojwjàgar."
            ],
            "raiz": "Kojw"
        },
        {
            "palabra": "Kojwjàgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg' y 'Jagaj', lit. 'Agua del cielo'",
            "acepciones": [
                "Lluvia, chaparrón, precipitación."
            ],
            "ejemplos": [],
            "raiz": "Kojw"
        },
        {
            "palabra": "Kojwjàgajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "diminutivizado"
            ],
            "descripcion": "De 'Kojweg' y 'Jagaj', lit. 'Agua del cielo pequeña'",
            "acepciones": [
                "Llovizna, garúa, goteo."
            ],
            "ejemplos": [],
            "raiz": "Kojw"
        },
        {
            "palabra": "Kojwjàgajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "aumentativizado"
            ],
            "descripcion": "De 'Kojweg' y 'Jagaj', lit. 'Agua del cielo grande'",
            "acepciones": [
                "Diluvio, tormenta, aguacero."
            ],
            "ejemplos": [],
            "raiz": "Kojw"
        },
        {
            "palabra": "Kojwkaenjàgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg', 'Kaenar' y 'Jagaj', lit. 'Agua enfriada del cielo'",
            "acepciones": [
                "Granizo, granizada, pedrisco."
            ],
            "ejemplos": [],
            "raiz": "Kojw"
        },
        {
            "palabra": "Kojwkaenjàgar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg', 'Kaenar' y 'Jagar', lit. 'Mojar enfriado del cielo'",
            "acepciones": [
                "Granizar, apedrear."
            ],
            "ejemplos": [],
            "raiz": "Kojw"
        },
        {
            "palabra": "Türajug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mundo (conjunto de las cosas que existen).",
                "tec. Planeta (cuerpo celeste que comprende un mundo)."
            ],
            "ejemplos": [//TODO: sistema
                "Kon göljkàj waej awalkèfjeg ësjl bljuneges tjlaej <u>türajug</u>.",
                "Waej Sistema Solär göljtàg ëjwt <u>türajug</u>en."
            ],
            "raiz": "Türaj"
        },
        {
            "palabra": "Türajuget",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Planeta pequeño'",
            "acepciones": [
                "tec. Satélite (cuerpo celeste que gira alrededor de un planeta).",
                "coloq. Persona o cosa que depende, o es dominada, totalmente de otra."
            ],
            "ejemplos": [
                "Waej awalaj göljkàj knaej <u>türajuget</u> tjl Laedejug.",
                "Rasmus göljkàj knaej <u>türajuget</u> tjl Fabjòla, göljkàj fülwuj waej daj fjslj tjl kjae."
            ],
            "raiz": "Türajug"
        },
        {
            "palabra": "Türajer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "cult. Fundar o crear, conceptual y metafóricamente, un mundo a partir de algo."
            ],
            "ejemplos": [
                "Öl följ<u>tùrajer</u> klaej glaeg faer ölegen."
            ],
            "raiz": "Türaj"
        },
        {
            "palabra": "Krjt",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "exceptuado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Regla, norma, pauta, orden."
            ],
            "ejemplos": [
                "Wjl kones öndug göljàw üke <u>krjt</u>en."
            ],
            "raiz": "Krjt"
        },
        {
            "palabra": "Krjtur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de reglas'",
            "acepciones": [
                "Reglamento, normativa, ordenanza.",
            ],
            "ejemplos": [
                "Fülw kefjegur göljtàg knaej wenkegafes <u>krjtur</u> faer waej jagneg."
            ],
            "raiz": "Krjt"
        },
        {
            "palabra": "Krjton",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Regla grande'",
            "acepciones": [
                "tec. Ley, precepto, mandato (norma dictada por una institución superior en poder)."
            ],
            "ejemplos": [
                "Balanlàedenug göljtàg gräjuges <u>krjton</u>en."
            ],
            "raiz": "Krjt"
        },
        {
            "palabra": "Krjtonur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado",
                "colectivizado"
            ],
            "descripcion": "Lit. 'Colectivo de reglas grandes'",
            "acepciones": [
                "tec. Legislación, estatuto, código."
            ],
            "ejemplos": [
                "Traej göljkàj-alentajafares bäsel ölegenes <u>krjtonur</u>." 
            ],
            "raiz": "Krjt"
        },
        {
            "palabra": "Krjtar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Reglamentar, regular, preceptuar.",
                "tec. Legalizar (implementar e imponer una ley en una sociedad o institución)."
            ],
            "ejemplos": [//TODO: pena de muerte
                "Ölegen göljklàsj-<u>krjtar</u> klaej tänsteg.",
                "Balanlaèdenug trölj<u>krĵtar</u> waej pena de muerte."
            ],
            "raiz": "Krjt"
        },
        {
            "palabra": "Ljoner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Viajar, recorrer, explorar.",
                "Emprender una travesía o un desafío."
            ],
            "ejemplos": [],
            "raiz": "Ljon"
        },
        {
            "palabra": "Ljonaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Camino, ruta, trayecto.",
                "Carretera, pista, senda."
            ],
            "ejemplos": [],
            "raiz": "Ljon"
        },
        {
            "palabra": "Ljoneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Viaje, recorrido, excursión.",
                "Travesía, expedición, periplo.",
                "coloq. Desafío o implicancia movilizante."
            ],
            "ejemplos": [],
            "raiz": "Ljon"
        },
        {
            "palabra": "Ljonkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Ljoner' y 'Kefjeg', lit. 'Persona que viaja'",
            "acepciones": [
                "Viajero, excursionista.",
                "Explorador, aventurero.",
                "coloq. Emprendedor, incursionista."
            ],
            "ejemplos": [],
            "raiz": "Ljon"
        },
        {
            "palabra": "Kojwljonkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kojweg', 'Ljoner' y 'Kefjeg', lit. 'Persona que viaja en el cielo'",
            "acepciones": [
                "neo. Astronauta, cosmonauta."
            ],
            "ejemplos": [
                "Traej kefjegeten göljwùjk-kaj kojwljonkèfjegen."
            ],
            "raiz": "Kojw"
        },
        {
            "palabra": "Sjonkòjweg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjonug' y 'Kojweg', lit. 'Cielo con sol'",
            "acepciones": [
                "Día (etapa solar de la jornada).",
                "Mañana, madrugada.",
                "coloq. Instancias iniciales de un acontecimiento."
            ],
            "ejemplos": [],
            "raiz": "Sjon"
        },
        {
            "palabra": "Sjonknòjar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Sjonug' y 'Knöjar', lit. 'Subir el sol'",
            "acepciones": [
                "Amanecer, alborear (salir el sol).",
                "coloq. Iluminar o ilustrar algo o alguien."
            ],
            "ejemplos": [
                "Wändaj följ<u>sjonknòjar</u> ä 7:00."
            ],
            "raiz": "Sjon"
        },
        {
            "palabra": "Knöjsjònug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knöj' y 'Sjonug', lit. 'Sol arriba'",
            "acepciones": [
                "Amanecer, alba, albor.",
                "coloq. Esclarecimiento y esperanza, generalmente luego de condiciones adversas."
            ],
            "ejemplos": [
                "Kon göljglàs-wast waej <u>knöjsjònug</u>?",
                "Klaej fejfeg göljkàj üke <u>knöjsjònug</u>es."
            ],
            "raiz": "Knöj"
        },
        {
            "palabra": "Awalkòjweg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalaj' y 'Kojweg', lit. 'Cielo con luna'",
            "acepciones": [
                "Noche.",
                "Madrugada sin sol.",
                "coloq. Epílogo de un acontecimiento."
            ],
            "ejemplos": [],
            "raiz": "Awal"
        },
        {
            "palabra": "Awalknòjar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Awalaj' y 'Knöjar', lit. 'Subir la luna'",
            "acepciones": [
                "Atardecer, anochecer.",
                "coloq. Corromper u ofuscar algo o alguien."
            ],
            "ejemplos": [],
            "raiz": "Awal"
        },
        {
            "palabra": "Knöjàwalaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knöj' y 'Awalaj', lit. 'Luna arriba'",
            "acepciones": [
                "Ocaso, crepúsculo.",
                "coloq. Corrompimiento, desazón o desesperación."
            ],
            "ejemplos": [],
            "raiz": "Knöj"
        },
        {
            "palabra": "Kaenar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Enfriar, refrescar.",
                "Nevar (caer nieve).",
                "coloq. Llevar algo a la heladera."
            ],
            "ejemplos": [],
            "raiz": "Kaen"
        },
        {
            "palabra": "Kaeneg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Frío, baja temperatura."
            ],
            "ejemplos": [
                "Klaej jaglĵneg göljkàj kaeneges."
            ],
            "raiz": "Kaen"
        },
        {
            "palabra": "Kaenegaf",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "invertido"
            ],
            "descripcion": "Lit. 'Sin frío'",
            "acepciones": [
                "Calor, ardor, temperatura alta."
            ],
            "ejemplos": [
                "Klaej jaglĵneg göljkàj kaeneges."
            ],
            "raiz": "Kaeneg"
        },
        {
            "palabra": "Kaenegafar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "ampliado"
            ],
            "descripcion": "Lit. 'Hacer sin frío'",
            "acepciones": [
                "Calentar, caldear, entibiar."
            ],
            "ejemplos": [
                "Öl göljwùlasj-kaenegafar öl!"
            ],
            "raiz": "Kaeneg"
        },
        {
            "palabra": "Kaenjàgaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kaenar' y 'Jagaj', lit. 'Agua enfriada'",
            "acepciones": [
                "Hielo.",
                "neo. tec. Permafrost."
            ],
            "ejemplos": [
                "Kon göljèwjd öl tö kaenjàgajn faer öles fjalaj?",
                "Waej kaenjàgaj wjlaej kaenlàedejug göljkàj üke kaeneges."
            ],
            "raiz": "Kaen"
        },
        {
            "palabra": "Kaenjàgar",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kaeneg' y 'Jagar', lit. 'Hacer agua con frío'",
            "acepciones": [
                "Congelar, helar, refrigerar."
            ],
            "ejemplos": [
                "Öl följ<u>kaenjàgar</u> waej laeker."
            ],
            "raiz": "Kaen"
        },
        {
            "palabra": "Kaenjàgajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto",
                "aumentativizado"
            ],
            "descripcion": "De 'Kaenar' y 'Jagaj', lit. 'Agua enfriada grande'",
            "acepciones": [
                "Glaciar, helero.",
                "coloq. Témpano de hielo, masa de hielo considerable."
            ],
            "ejemplos": [],
            "raiz": "Kaen"
        },
        {
            "palabra": "Kaenaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nieve.",
                "Escarcha pesada, aguanieve."
            ],
            "ejemplos": [],
            "raiz": "Kaen"
        },
        {
            "palabra": "Kaenajet",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "diminutivizado"
            ],
            "descripcion": "Lit. 'Nieve pequeña'",
            "acepciones": [
                "Copo de nieve."
            ],
            "ejemplos": [],
            "raiz": "Kaenaj"
        },
        {
            "palabra": "Kaenajon",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "aumentativizado"
            ],
            "descripcion": "Lit. 'Nieve grande'",
            "acepciones": [
                "Nevasca, tormenta de nieve."
            ],
            "ejemplos": [],
            "raiz": "Kaenaj"
        },
        {
            "palabra": "Balaner",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Equilibrar, balancear.",
                "coloq. Ordenar u organizar una situación."
            ],
            "ejemplos": [],
            "raiz": "Balan"
        },
        {
            "palabra": "Balanug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra de patrimonio nacional",
            "acepciones": [
                "Equilibrio, orden.",
                "coloq. Piedra angular, precepto sobre el que se basa el éxito sostenido de algo."
            ],
            "ejemplos": [],
            "raiz": "Balan"
        },
        {
            "palabra": "Wajsjonlàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Wajug', 'Sjonug' y 'Laedenug', lit. 'País del sol naciente'",
            "acepciones": [
                "Japón."
            ],
            "ejemplos": [],
            "raiz": "Waj"
        },
        {
            "palabra": "Frjwgorjölàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Frjweg', 'Gorjö' y 'Laedenug', lit. 'País de Goryeo del sur'",
            "acepciones": [
                "Corea del Sur."
            ],
            "ejemplos": [],
            "raiz": "Frjw"
        },
        {
            "palabra": "Føjlgorjölàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Føjleg', 'Gorjö' y 'Laedenug', lit. 'País de Goryeo del norte'",
            "acepciones": [
                "Corea del Norte."
            ],
            "ejemplos": [],
            "raiz": "Føjl"
        },
        {
            "palabra": "Sølwlàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Sølweg' y 'Laedenug', lit. 'País plateado'",
            "acepciones": [
                "Argentina."
            ],
            "ejemplos": [],
            "raiz": "Sølw"
        },
        {
            "palabra": "Dawegegaflàedenugen",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Dawegegaf' y 'Laedenugen', lit. 'Países sin altura'",
            "acepciones": [
                "Países Bajos."
            ],
            "ejemplos": [],
            "raiz": "Daweg"
        },
        {
            "palabra": "Swjarlàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Swjarön' y 'Laedenug', lit. 'País de los suiones'",
            "acepciones": [
                "Suecia."
            ],
            "ejemplos": [
                "Alek göljkàj tjl Swjarlàedenug."
            ],
            "raiz": "Swjar"
        },
        {
            "palabra": "Saanjlàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Saanj' y 'Laedenug', lit. 'País de los lapones'",
            "acepciones": [
                "Finlandia."
            ],
            "ejemplos": [
                "Mjrjam göljkàj saanjlàedenuges."
            ],
            "raiz": "Saanj"
        },
        {
            "palabra": "Føjljonlàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Føjleg', 'Ljonaj' y 'Laedenug', lit. 'País del camino al norte'",
            "acepciones": [
                "Noruega."
            ],
            "ejemplos": [
                "Føjljonlàedenug göljkàj knaej kaeneges làedenug."
            ],
            "raiz": "Føjl"
        },
        {
            "palabra": "Rüsslàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Rüss' y 'Laedenug', lit. 'País de los rus' (o rusy)'",
            "acepciones": [
                "Rusia."
            ],
            "ejemplos": [
                "Rüsslàedenug göljkàj knaej kaeneges làedenug."
            ],
            "raiz": "Rüss"
        },
        {
            "palabra": "Frjwslawjlàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "De 'Frjweg', 'Slawjö' y 'Laedenug', lit. 'País de eslavos del sur'",
            "acepciones": [
                "Yugoslavia."
            ],
            "ejemplos": [
                "<u>Frjwslawjlàedenug</u> jkë göljàgnar ësjl, göljkàj knaej fjügules laedenug."
            ],
            "raiz": "Frjw"
        },
        {
            "palabra": "Balanlàedenug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "propio",
                "compuesto"
            ],
            "descripcion": "Palabra de patrimonio nacional, de 'Balanug' y 'Laedenug', lit. 'País del equilibrio'",
            "acepciones": [
                "Libraterra."
            ],
            "ejemplos": [
                "Öl tröljwàjer wjl <u>Balanlàedenug</u>."
            ],
            "raiz": "Balan"
        },
        {
            "palabra": "Tënter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aumentar, incrementar, acrecentar."
            ],
            "ejemplos": [
                "Klaej laedenug göljklàsj-<u>tënter</u> waej knuwerer tjl öndkèfjegen."
            ],
            "raiz": "Tënt"
        },
        {
            "palabra": "Tënteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Aumento, incremento, crecimiento."
            ],
            "ejemplos": [],
            "raiz": "Tënt"
        },
        {
            "palabra": "Knuwergùwler",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knuwereg' y 'Güwler', lit. 'Combinar números'",
            "acepciones": [
                "tec. Sumar, adicionar (realizar operación aritmética)."
            ],
            "ejemplos": [
                "Udaj, ölegen följ<u>knuwertènter</u> tjö tör fjr."
            ],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Knuwergùwlug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knuwereg' y 'Güwlug', lit. 'Combinación de números'",
            "acepciones": [
                "tec. Suma, adición, total (operación aritmética)."
            ],
            "ejemplos": [
                "Klaej <u>knuwergùwlug</u> göljkàj frejeges tjl klën."
            ],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Knuwertènter",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knuwereg' y 'Tënter', lit. 'Incrementar números'",
            "acepciones": [
                "tec. Multiplicar (realizar operación aritmética)."
            ],
            "ejemplos": [
                "Tjsälk öl gölj<u>knuwertènter</u> klaej?"
            ],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Knuwertènteg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knuwereg' y 'Tënteg', lit. 'Incremento de números'",
            "acepciones": [
                "tec. Multiplicación, producto (operación aritmética)."
            ],
            "ejemplos": [
                "Waej <u>knuwertènteg</u> tjl tö för fjr göljkàj ejwt."
            ],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Knuwereg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Número, cifra, cantidad."
            ],
            "ejemplos": [
                "Waej <u>knuwereg</u>en göljkàj fändjlegafes."
            ],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Knuwerer",
            "tipo": [
                "Verbo"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Contar, computar.",
                "Enumerar, listar."
            ],
            "ejemplos": [
                "Ätej jlaek kon göljsfàej-<u>knuwerer</u>?",
                "Kjae trölj<U>knùwerer</u> öles rëndegafen wjl waej fëjregur."
            ],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Knuwerfèjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knuwereg' y 'Fëjregur', lit. 'Colectivo de conocimientos de números'",
            "acepciones": [
                "tec. Matemática."
            ],
            "ejemplos": [],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Knuwerfùtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knuwer' y 'Futaj', lit. 'Herramienta de números'",
            "acepciones": [
                "Ábaco.",
                "neo. Contador (objeto)."
            ],
            "ejemplos": [
                "Wjlaej gägul, kefjeged göljtàg knaej knuwerfùtaj."
            ],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Laekfùtaj",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laeker' y 'Futaj', lit. 'Herramienta para comer'",
            "acepciones": [
                "Cubierto (utensilio genérico para manipular la comida)."
            ],
            "ejemplos": [
                "Kon jkë göwelajafar'al-ewjd kjae öles laekfùtajn."
            ],
            "raiz": "Laek"
        },
        {
            "palabra": "Laekfèjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Laekug' y 'Fëjregur', lit. 'Colectivo de conocimientos de comida'",
            "acepciones": [
                "Gastronomía, culinaria (saberes del arte de cocinar)."
            ],
            "ejemplos": [
                "Öl göljglàs waej sëjntegaf tjl laekugen tjlaej balanlàedenuges laekfèjregur."
            ],
            "raiz": "Laek"
        },
        {
            "palabra": "Knuwerànördnug",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Knuwer' y 'Anördnug', lit. 'Máquina de números'",
            "acepciones": [
                "neo. Calculadora, sumadora (dispositivo).",
                "obs. Computadora (máquina que procesaba tarjetas perforadas)."
            ],
            "ejemplos": [],
            "raiz": "Knuwer"
        },
        {
            "palabra": "Berätfèjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Beräteg' y 'Fëjregur', lit. 'Colectivo de conocimientos de historias'",
            "acepciones": [
                "tec. Historia (disciplina)."
            ],
            "ejemplos": [],
            "raiz": "Berät"
        },
        {
            "palabra": "Ljngfèjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Ljngeg' y 'Fëjregur', lit. 'Colectivo de conocimientos de idioma'",
            "acepciones": [
                "tec. Lingüística."
            ],
            "ejemplos": [],
            "raiz": "Ljng"
        },
        {
            "palabra": "Kajfutfèjregur",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Kaj', 'Futeg' y 'Fëjregur', lit. 'Colectivo de conocimientos de cosas que viven'",
            "acepciones": [
                "tec. Biología."
            ],
            "ejemplos": [],
            "raiz": "Kaj"
        },
        {
            "palabra": "Wänkèfjeg",
            "tipo": [
                "Sustantivo"
            ],
            "subtipo": [
                "compuesto"
            ],
            "descripcion": "De 'Wän' y 'Kefjeg', lit. 'Una persona'",
            "acepciones": [
                "Individuo, ente personal (independiente)."
            ],
            "ejemplos": [
                "Ölegenes kefjegur göljkàj-alares wjl wänkèfjegen."
            ],
            "raiz": "Wän"
        },
        {
            "palabra": "Wän",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Uno (número)."
            ],
            "ejemplos": [],
            "raiz": "Wän"
        },
        {
            "palabra": "Tö",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Dos."
            ],
            "ejemplos": [
                "Froj göljàw tö kefjegen."
            ],
            "raiz": "Tö"
        },
        {
            "palabra": "Tökan",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "indefinido"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ambos (tanto el uno como el otro)."
            ],
            "ejemplos": [
                "Tatjàna j öl göljkàj tänswenkèfjegen, laswäld <u>tökan</u> gägultànstar wjl klaej fejfkĵgeg."
            ],
            "raiz": "Tö"
        },
        {
            "palabra": "Trj",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tres."
            ],
            "ejemplos": [],
            "raiz": "Trj"
        },
        {
            "palabra": "Fjr",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cuatro."
            ],
            "ejemplos": [],
            "raiz": "Fjr"
        },
        {
            "palabra": "Fajw",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cinco."
            ],
            "ejemplos": [],
            "raiz": "Fajw"
        },
        {
            "palabra": "Seks",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Seis."
            ],
            "ejemplos": [],
            "raiz": "Seks"
        },
        {
            "palabra": "Sjwe",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Siete."
            ],
            "ejemplos": [],
            "raiz": "Sjwe"
        },
        {
            "palabra": "Ëjwt",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ocho."
            ],
            "ejemplos": [],
            "raiz": "Ëjwt"
        },
        {
            "palabra": "Knjw",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nueve."
            ],
            "ejemplos": [],
            "raiz": "Knjw"
        },
        {
            "palabra": "Tjö",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Diez.",
                "Decena."
            ],
            "ejemplos": [],
            "raiz": "Tjö"
        },
        {
            "palabra": "Anküj",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Cien.",
                "Centena."
            ],
            "ejemplos": [],
            "raiz": "Anküj"
        },
        {
            "palabra": "Tondräj",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mil."
            ],
            "ejemplos": [
                "Öl göljwùlasj knaej <u>tondräj</u> sëjntugen tjl klaej wülejtug."
            ],
            "raiz": "Tondräj"
        },
        {
            "palabra": "Frasäj",
            "tipo": [
                "Sustantivo",
                "adverbio"
            ],
            "subtipo": [
                "exceptuado",
                "cantidad"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Millón."
            ],
            "ejemplos": [
                "Laedejug göljtàg üke <u>frasäj</u>en tjl jgjaegen wjl kajeg."
            ],
            "raiz": "Frasäj"
        },
        {
            "palabra": "Ä",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "A."
            ],
            "ejemplos": [
                "Öl göljklàsj-ëgael ä waej jagaurkĵgeg!"
            ],
            "raiz": "Ä"
        },
        {
            "palabra": "Äej",
            "tipo": [
                "Contracción"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "De 'Ä' y 'Waej'",
            "acepciones": [
                "vulg. A el, a los, a la o a las."
            ],
            "ejemplos": [
                "Öl följègael äej daweglàedejug."
            ],
            "raiz": "Ä"
        },
        {
            "palabra": "Ägj",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ante (frente a)."
            ],
            "ejemplos": [
                "Kjae tröljknàwar ägj öl."
            ],
            "raiz": "Ägj"
        },
        {
            "palabra": "Bulöw",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Bajo (debajo de)."
            ],
            "ejemplos": [
                "Ölegen fjügulglaewĵkolar bulöw waej kojweg."
            ],
            "raiz": "Bulöw"
        },
        {
            "palabra": "Tör",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Con (medio, modo o instrumento para hacer algo)."
            ],
            "ejemplos": [
                "Ölegen fjüguljàgnar tör kulkeg."
            ],
            "raiz": "Tör"
        },
        {
            "palabra": "Grej",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Contra (hacia o enfrente de)."
            ],
            "ejemplos": [
                "Ölugen gägulkàj-ljoner grej waej gräjuges wjndleg!"
            ],
            "raiz": "Grej"
        },
        {
            "palabra": "Tjl",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "De (múltiples usos adverbiales)."
            ],
            "ejemplos": [
                "Waej kulkeg tjl waej awalkòjweg."
            ],
            "raiz": "Tjl"
        },
        {
            "palabra": "Tjlaej",
            "tipo": [
                "Contracción"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "De 'Tjl' y 'Waej'",
            "acepciones": [
                "Del, de los, de la, de las."
            ],
            "ejemplos": [
                "Traej göljkàj waej lujkeges tjlaej öndugur."
            ],
            "raiz": "Tjl"
        },
        {
            "palabra": "Sjng",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Desde (después de, punto de origen)."
            ],
            "ejemplos": [
                "Öl göljsfàej-wast kon sjng froj."
            ],
            "raiz": "Sjng"
        },
        {
            "palabra": "Trësjaw",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Durante (simultaneidad temporal con)."
            ],
            "ejemplos": [
                "Öl göljglàs-dalënar trësjaw waej awalkòjweg."
            ],
            "raiz": "Trësjaw"
        },
        {
            "palabra": "Wjl",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "En (lugar, tiempo o modo de)."
            ],
            "ejemplos": [
                "Wjl waej fejfkĵgeg, öl tröljlùjkar kones fejfug."
            ],
            "raiz": "Wjl"
        },
        {
            "palabra": "Wjlaej",
            "tipo": [
                "Contracción"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "De 'Wjl' y 'Waej'",
            "acepciones": [
                "En el, en los, en la, en las."
            ],
            "ejemplos": [
                "Öl tröljfjàler jagaj wjlaej laekĵgeg."
            ],
            "raiz": "Wjl"
        },
        {
            "palabra": "Bjtbjn",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Entre (dentro de o en medio de)."
            ],
            "ejemplos": [
                "Waej ljneg bjtbjn glaeg j glaegaf göljkàj üke gräjugafes."
            ],
            "raiz": "Bjtbjn"
        },
        {
            "palabra": "Töwar",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hacia (orientación de algo)."
            ],
            "ejemplos": [
                "Kon jkë wast'al töwar waej tajkleg."
            ],
            "raiz": "Töwar"
        },
        {
            "palabra": "Ätej",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Hasta (límite final)."
            ],
            "ejemplos": [
                "Öl göljglàer kon ätej waej kojweg."
            ],
            "raiz": "Ätej"
        },
        {
            "palabra": "Tröuw",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Mediante (por medio de)."
            ],
            "ejemplos": [
                "Öl tröljègael ä Stokòlm tröuw öles autonòwajl."
            ],
            "raiz": "Tröuw"
        },
        {
            "palabra": "Faer",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Para (objetivo o término de)."
            ],
            "ejemplos": [
                "Kon göljèwjd öl tö kaenjàgajn faer öles fjalaj?"
            ],
            "raiz": "Faer"
        },
        {
            "palabra": "För",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Por (múltiples usos adverbiales)."
            ],
            "ejemplos": [
                "Göljkàj för froj."
            ],
            "raiz": "För"
        },
        {
            "palabra": "Föraej",
            "tipo": [
                "Contracción"
            ],
            "subtipo": [
                "común"
            ],
            "descripcion": "De 'För' y 'Waej'",
            "acepciones": [
                "Por el, por los, por la o por las."
            ],
            "ejemplos": [
                "."
            ],
            "raiz": "För"
        },
        {
            "palabra": "Bäsel",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Según (con arreglo a, en conformidad con)."
            ],
            "ejemplos": [
                "Bäsel kjaegen, udaj göljàlar kaeneg."
            ],
            "raiz": "Bäsel"
        },
        {
            "palabra": "Ütan",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sin (carencia o falta de)."
            ],
            "ejemplos": [
                "Kon jkë göljsfàej-jagnar ütan glaeg."
            ],
            "raiz": "Ütan"
        },
        {
            "palabra": "Kjøne",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Sobre, acerca de (con respecto a algo)."
            ],
            "ejemplos": [
                "Konegen tröljlàewün waej beräteget <u>kjøne</u> Ana?"
            ],
            "raiz": "Kjøne"
        },
        {
            "palabra": "Bëjand",
            "tipo": [
                "Adposición"
            ],
            "subtipo": [
                "preposición"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tras (después de, detrás de)."
            ],
            "ejemplos": [
                "Kon jkë kaj'al bëjand öl!"
            ],
            "raiz": "Bëjand"
        },
        {
            "palabra": "Öl",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Yo.",
                "Mí."
            ],
            "ejemplos": [
                "Öl göljkàj Ramĵro.",
                "Kjae göljglàer öl."
            ],
            "raiz": "Öl"
        },
        {
            "palabra": "Kon",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Tú, vos.",
                "Ti."
            ],
            "ejemplos": [
                "Kon göljglàs öl?"
            ],
            "raiz": "Kon"
        },
        {
            "palabra": "Kjae",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Él, ella."
            ],
            "ejemplos": [],
            "raiz": "Kjae"
        },
        {
            "palabra": "Ölugen",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nosotros (todos hombres)."
            ],
            "ejemplos": [],
            "raiz": "Öl"
        },
        {
            "palabra": "Ölajn",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nosotras."
            ],
            "ejemplos": [],
            "raiz": "Öl"
        },
        {
            "palabra": "Ölegen",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Nosotros (géneros mixtos)."
            ],
            "ejemplos": [],
            "raiz": "Öl"
        },
        {
            "palabra": "Konugen",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ustedes (todos hombres)."
            ],
            "ejemplos": [],
            "raiz": "Kon"
        },
        {
            "palabra": "Konajn",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ustedes (todas mujeres)."
            ],
            "ejemplos": [],
            "raiz": "Kon"
        },
        {
            "palabra": "Konegen",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ustedes (géneros mixtos)."
            ],
            "ejemplos": [],
            "raiz": "Kon"
        },
        {
            "palabra": "Kjaeugen",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ellos (todos hombres)."
            ],
            "ejemplos": [],
            "raiz": "Kjae"
        },
        {
            "palabra": "Kjaejn",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ellas."
            ],
            "ejemplos": [],
            "raiz": "Kjae"
        },
        {
            "palabra": "Kjaegen",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "personal"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ellos (géneros mixtos)."
            ],
            "ejemplos": [],
            "raiz": "Kjae"
        },
        {
            "palabra": "Waej",
            "tipo": [
                "Pronombre", "artículo"
            ],
            "subtipo": [
                "personal", "determinado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "El, los, la o las."
            ],
            "ejemplos": [],
            "raiz": "Waej"
        },
        {
            "palabra": "Knaej",
            "tipo": [
                "Pronombre", "artículo"
            ],
            "subtipo": [
                "indefinido", "indeterminado"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Un, unos, una o unas.",
                "Algún, alguno, algunos, alguna o algunas.",
                "Ningún, ninguno, ningunos, ninguna o ningunas."
            ],
            "ejemplos": [],
            "raiz": "Knaej"
        },
        {
            "palabra": "Knaejuj",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "demostrativo"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Otro, otros, otra u otras."
            ],
            "ejemplos": [
                "Öl göljwùjk knaejuj süjkaenjàgaj, tjsälk wlaejaj."
            ],
            "raiz": "Knaej"
        },
        {
            "palabra": "Knaejteg",
            "tipo": [
                "Contracción",
                "pronombre"
            ],
            "subtipo": [
                "común",
                "indefinido"
            ],
            "descripcion": "De 'Knaej' y 'Futeg'",
            "acepciones": [
                "Alguna cosa, algo (realidad indeterminada y no especificada)."
            ],
            "ejemplos": [
                "Öl göljwùjk knaejteg süjkgòlunajes."
            ],
            "raiz": "Knaej"
        },
        {
            "palabra": "Knaejteged",
            "tipo": [
                "Contracción",
                "pronombre"
            ],
            "subtipo": [
                "común",
                "indefinido"
            ],
            "descripcion": "De 'Knaej' y 'Futeged'",
            "acepciones": [
                "Ninguna cosa, nada (inexistencia de algo)."
            ],
            "ejemplos": [
                "Göljkàj knaejteged wëroj."
            ],
            "raiz": "Knaej"
        },
        {
            "palabra": "Knaejfjeg",
            "tipo": [
                "Contracción",
                "pronombre"
            ],
            "subtipo": [
                "común",
                "indefinido"
            ],
            "descripcion": "De 'Knaej' y 'Kefjeg'",
            "acepciones": [
                "Alguna persona, alguien (una o más personas indefinidas)."
            ],
            "ejemplos": [
                "<u>Knaejfjeg</u> göljtàg knaej blaekfejfùtaj?"
            ],
            "raiz": "Knaej"
        },
        {
            "palabra": "Knaejfjeged",
            "tipo": [
                "Contracción",
                "pronombre"
            ],
            "subtipo": [
                "común",
                "indefinido"
            ],
            "descripcion": "De 'Knaej' y 'Kefjeged'",
            "acepciones": [
                "Ninguna persona, nadie (inexistencia de alguien)."
            ],
            "ejemplos": [
                "Knaejfjeged göljglàs klaej laekug!"
            ],
            "raiz": "Knaej"
        },
        {
            "palabra": "Klaej",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "demostrativo",
                "cercano"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Este, esto, estos, esta o estas.",
                "ling. Se emplea para crear un sujeto simulado cuando sea conveniente semánticamente."
            ],
            "ejemplos": [
                "<u>Klaej</u> fejfeg göljkàj üke knöjsjònuges.",
                "Öl göljglàs waej kaenĵgjaeget laswäld <u>klaej</u> göljtàg kaenaj!"
            ],
            "raiz": "Klaej"
        },
        {
            "palabra": "Traej",
            "tipo": [
                "Pronombre"
            ],
            "subtipo": [
                "demostrativo",
                "lejano"
            ],
            "descripcion": "Palabra originante tradicional",
            "acepciones": [
                "Ese, eso, esos, esa o esas.",
                "Aquel, aquello, aquellos, aquella o aquellas."
            ],
            "ejemplos": [],
            "raiz": "Traej"
        },
        {
            "palabra": "Ëgwej",
            "tipo": [
                "Contracción",
                "interjección"
            ],
            "subtipo": [
                "común",
                "impropia"
            ],
            "descripcion": "De 'Ëgael' y 'Käswej'",
            "acepciones": [
                "Vamos, bien, dale (aprobación o aliento)."
            ],
            "ejemplos": [
                "—Kon göljwùjk knaej fjke tjl grüfug?<br>—<u>Ëgwej</u>!"
            ],
            "raiz": "Ëgael"
        },
        {
            "palabra": "Tänksakon",
            "tipo": [
                "Interjección"
            ],
            "subtipo": [
                "impropia"
            ],
            "descripcion": "De 'Tänkser', 'Ä' y 'Kon'",
            "acepciones": [
                "Gracias (muestra de agradecimiento)."
            ],
            "ejemplos": [
                "—Öl älered tröljòkjler kones laektajklànördnug.<br>—<u>Tänksakon</u>!"
            ],
            "raiz": "Tänks"
        },
        {
            "palabra": "Jäk",
            "tipo": [
                "Interjección"
            ],
            "subtipo": [
                "propia"
            ],
            "descripcion": "Sonido con significado verbal",
            "acepciones": [
                "ling. Denota disgusto o asco."
            ],
            "ejemplos": [
                "Ölajn göljsfàej-laewün waej wülejtugen swejaug. <u>Jäk</u>!"
            ],
            "raiz": "Jäk"
        }
    ]
}