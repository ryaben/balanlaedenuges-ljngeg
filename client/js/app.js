$(function() {
    class Handler {
        initialize() {
            this.eventsListening();
            $('.listing-view-option:eq(1)').click();
            $('.letter-listing:eq(0)').click();
            $('.tab-btn:eq(0)').click();
            $('#word-count').html('<b>Palabras registradas</b>: ' + this.countGeneralStats().totalWords);
        }

        eventsListening() {
            $('#search-button').on('click', function() {
                let language;
                if ($('.language:eq(0)').is(':checked')) { language = 'BAL' }
                else if ($('.language:eq(1)').is(':checked')) { language = 'ESP' }

                handler.searchWord($('#word-search').val(), language);
            });
            
            $('.special-character').on('click', function() {
                $('#word-search').val($('#word-search').val() + $(this).text());
            });

            $('.nav-link').on('click', function() {
                handler.switchScreen($(this).attr('id').slice(4));
            });

            $('.letter-listing').on('click', function() {
                $('.letter-listing').removeClass('letter-selected');
                $(this).addClass('letter-selected');
                handler.listWords($(this).text(), $('.listing-view:checked').val());
            });

            $('.listing-view').on('change', function() {
                handler.changeListingView($(this).val());
                handler.listWords($('.letter-selected').text(), $(this).val());
            });

            $('.tab-btn').on('click', function() {
                $('.tab-btn').removeClass('tab-selected');
                $(this).addClass('tab-selected');

                if ($(this).index('.tab-btn') == 0) { $('.listing-view-option').prop('disabled', false); }
                else if ($(this).index('.tab-btn') == 1) { $('.listing-view-option').prop('disabled', true); }

                $('.info-listing').hide();
                $(`.info-listing:eq(${$(this).index('.tab-btn')})`).fadeIn(100);
            });

            $('#word-listing').on('click', '.root-tree-title', function() {
                $(this).closest('.root-tree').find('.root-word-title').toggle(200, 'linear');
                $(this).closest('.root-tree').find('.child-word').toggle(200, 'linear');
                $(this).closest('.root-tree').find('.composed-word').toggle(200, 'linear');

                let unfoldBtn = $(this).find('.unfold-button');
                if (unfoldBtn.text() == '▼') { unfoldBtn.text('◀') } else { unfoldBtn.text('▼') }
            });
        }

        //Adapta los aspectos visuales de la vista.
        changeListingView(view) {
            if (view === 'list') {
                $('#word-listing').css({
                    display: 'grid',
                    'justify-items': 'center',
                    'grid-template-columns': '1fr 1fr 1fr 1fr',
                    'grid-template-rows': 'repeat(13, 1fr)'
                });
            } else if (view === 'tree') {
                $('#word-listing').css({
                    display: 'flex',
                    'flex-direction': 'column'
                });
            }
        }

        countGeneralStats() {
            let totalWords = 0;
            let totalRoots = [];
            let totalTypes = {};

            //Busca las palabras que empiezan con esa letra.
            wordDatabase.palabras.forEach(function(word) {
                //Cuenta cada palabra.
                totalWords++;

                //Agrega cada raíz diferente para luego contarlas.
                if (totalRoots.find(root => word.raiz === root) === undefined) { totalRoots.push(word.raiz); }

                //Cuenta cada tipo de palabra.
                word.tipo.forEach(function(tipo) {
                    let upperCased = tipo.charAt(0).toUpperCase() + tipo.slice(1);

                    if (upperCased in totalTypes) {
                        totalTypes[upperCased]++;
                    } else {
                        totalTypes[upperCased] = 1;
                    }
                });
            });

            return {
                totalWords: totalWords,
                totalRoots: totalRoots,
                totalTypes: totalTypes
            }
        }

        listWords(letter, listing) {
            //Vacía la lista de palabras.
            $('#word-listing').html("");

            let matchedWords = [];
            
            //Calcula las estadísticas generales.
            let totalWords = this.countGeneralStats().totalWords;
            let totalRoots = this.countGeneralStats().totalRoots;
            let totalTypes = this.countGeneralStats().totalTypes;

            //Busca las palabras que empiezan con esa letra.
            wordDatabase.palabras.forEach(function(word) {
                let firstLetter = word.palabra.slice(0, 1).normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                //Si la primera letra de la palabra coincide con la letra por parámetro, se agrega.
                if (firstLetter === letter) {
                    matchedWords.push({
                        palabra: word.palabra,
                        raiz: word.raiz,
                        tipo: word.tipo,
                        subtipo: word.subtipo,
                    });
                }
            });

            //Ordena los tipos obtenidos.
            let valueTypes = Object.entries(totalTypes).sort((a,b) => b[1]-a[1]);

            //Ordena alfabéticamente.
            matchedWords.sort((a, b) => (a.palabra > b.palabra) ? 1 : -1);

            //Agrega visualmente cada palabra válida.
            if (listing == 'list') {
                matchedWords.forEach(function(word) {
                    $('#word-listing').append(`
                        <label onclick='handler.searchWord("${word.palabra}", "BAL", 1); handler.switchScreen("diccionario")' class='listed-word'>${word.palabra}</label>
                    `);
                });

            } else if (listing == 'tree') {
                matchedWords.forEach(function(word) {
                    word.tipo.forEach(function(tipo) {
                        tipo.charAt(0).toUpperCase();
                    });

                    function createRootTree() {
                        //Busca la entrada de la raíz y agrega la palabra.
                        if ($(`#root-${word.raiz}`).length === 0) {
                            $('#word-listing').append(`
                                <ul class='root-tree' id='root-${word.raiz}' root-name='${word.raiz}'>
                                    <li class='root-tree-title'><label class='root-tree-title-label' onclick='handler.searchWord("${word.raiz}", "BAL", 0); handler.switchScreen("diccionario")'>${word.raiz}</label>
                                    <div class='root-extra'>
                                        <div class='root-amount-group'>
                                            <label class='root-amount'>0</label>
                                            <label> palabra(s)</label>
                                        </div>
                                        <label class='unfold-button' style='font-style: normal;'>◀</label></li>
                                    </div>
                                    <ul class='compositions'>

                                    </ul>
                                </ul>
                            `);
                        }
                    }

                    //Sustantivos y verbos comunes, exceptuados y extranjeros, más cualquier otro tipo principal de palabra
                    if (word.tipo.includes('Adverbio') || word.tipo.includes('Interjección') || word.tipo.includes('Adposición') || word.tipo.includes('Pronombre') || word.tipo.includes('Artículo') || word.tipo.includes('Conjunción') || word.tipo.includes('Contracción') || word.subtipo.includes('común') || word.subtipo.includes('exceptuado') || word.subtipo.includes('extranjerismo')) {
                        createRootTree();

                        $(`#root-${word.raiz} .compositions`).before(`
                            <ul class='root-word' id='word-${word.palabra}' word-type='${word.tipo}' word-name='${word.palabra}'>
                                <li class='root-word-title'><label onclick='handler.searchWord("${word.palabra}", "BAL", 1); handler.switchScreen("diccionario")'>${word.palabra}</label></li>
                            </ul>
                        `);
                        $(`#root-${word.raiz}`).find('.root-amount').text(function(i, val) { 
                            return parseInt(val) + 1;
                        });

                    //Sustantivos modificados y verbos ampliados
                    } else if ((word.tipo.includes('Sustantivo') || word.tipo.includes('Verbo') || word.tipo.includes('Adjetivo')) && (!word.subtipo.includes('común') && !word.subtipo.includes('compuesto'))) {
                        $(`#word-${word.raiz}`).append(`
                            <li style='color: rgb(212, 16, 16);' class='child-word'><label onclick='handler.searchWord("${word.palabra}", "BAL", 1); handler.switchScreen("diccionario")'>${word.palabra}</label></li>
                        `);
                        $(`#word-${word.raiz}`).closest('.root-tree').find('.root-amount').text(function(i, val) {
                            return parseInt(val) + 1;
                        });

                    //Palabras compuestas
                    } else if (word.subtipo.includes('compuesto')) {
                        createRootTree();
                        
                        $(`#root-${word.raiz}`).find('.compositions').append(`
                            <li onclick='handler.searchWord("${word.palabra}", "BAL", 1); handler.switchScreen("diccionario")' class='composed-word'><label>${word.palabra}</label></li>
                        `);
                        $(`#root-${word.raiz}`).find('.root-amount').text(function(i, val) { 
                            return parseInt(val) + 1;
                        });
                    }
                });
            }

            //Aplica estadísticas visuales.
            $('#listing-stats').html('');
            $('#listing-stats').append(`
                <label class='listing-header'>Aspecto/Valores</label>
                <label class='listing-header'>Totales</label>
                <label class='listing-header'></label>
                <label class='listing-aspect' style='font-weight: bold;'>Raíces</label>
                <label class='stat-to-fill'></label>
                <label class='stat-to-fill'></label>
                <label class='listing-aspect' style='border-bottom: 2px solid indianred;font-weight: bold;'>Palabras</label>
                <label class='stat-to-fill' style='border-bottom: 2px solid indianred;'></label>
                <label class='stat-to-fill' style='border-bottom: 2px solid indianred;'></label>
            `);

            $('.listing-header:eq(2)').html(`Inician con <b>${letter}</b>`);
            $('.stat-to-fill:eq(0)').text(totalRoots.length);
            $('.stat-to-fill:eq(1)').text($('.root-tree').length);
            $('.stat-to-fill:eq(2)').text(totalWords);
            $('.stat-to-fill:eq(3)').text(matchedWords.length);

            valueTypes.forEach(function(value) {
                let typeCount = 0;

                matchedWords.forEach(function(word) {
                    if (word.tipo.includes(value[0])) {
                        typeCount++;
                    }
                });

                $('#listing-stats').append(`
                    <label class='listing-aspect'>${value[0]}</label>
                    <label class='stat-to-fill'>${value[1]}</label>
                    <label class='stat-to-fill'>${typeCount}</label>
                `);
            });
        }

        switchScreen(screenName) {
            //Elimina la clase de selección de todas las opciones de navegación.
            // $('.nav-link').removeClass('nav-selected');
            //Selecciona la opción de navegación indicada.
            // $(`#nav-${screenName}`).addClass('nav-selected');

            //Oculta todas las secciones.
            // $('section').hide();
            //Revela la sección indicada.
            // $(`#${screenName}-screen`).fadeIn(200);

            // window.history.pushState(screenName, 'Title', `/${screenName}`);

            window.location.pathname = screenName;
        }

        searchWord(queriedName, language, limit) {
            //Borra el contenido actual perteneciente a la búsqueda anterior.
            $('#search-result').html("");

            let wordMatch = [];

            if (language == 'BAL') {
                wordDatabase.palabras.forEach(function(word) {
                    if ((limit == 0 || limit == undefined || limit > 1) && word.palabra.toLowerCase().includes(queriedName.toLowerCase())) {
                        return wordMatch.push(word);
                    } else if (limit == 1 && word.palabra.toLowerCase() == queriedName.toLowerCase()) {
                        return wordMatch.push(word);
                    }
                });

            } else if (language == 'ESP') {
                let validMatches = [
                    ' ' + queriedName.toLowerCase() + ' ', 
                    ' ' + queriedName.toLowerCase() + '.', 
                    ' ' + queriedName.toLowerCase() + ',',
                    '(' + queriedName.toLowerCase() + ',',
                    '(' + queriedName.toLowerCase() + ' ',
                    '(' + queriedName.toLowerCase() + ')',
                    ' ' + queriedName.toLowerCase() + ')',
                ]

                wordDatabase.palabras.forEach(function(word) {
                    word.acepciones.forEach(function(acepcion) {
                        if (acepcion.substring(0, queriedName.length).toLowerCase() == queriedName.toLowerCase()) {
                            validMatches.push(queriedName.toLowerCase() + ' ');
                            validMatches.push(queriedName.toLowerCase() + '.');
                            validMatches.push(queriedName.toLowerCase() + ',');
                        }
                        
                        for (let index = 0; index < validMatches.length; index++) {
                            if (acepcion.toLowerCase().includes(validMatches[index]) && (limit == 0 || limit == undefined || limit > 1) && wordMatch.indexOf(word) == -1) {
                                return wordMatch.push(word);
                            } else if (limit == 1 && acepcion.toLowerCase() == queriedName.toLowerCase()) {
                                return wordMatch.push(word);
                            }
                        }
                    });
                });
            }

            //Ordena alfabéticamente las coincidencias.
            wordMatch.sort((a, b) => (a.palabra > b.palabra) ? 1 : -1);
            //Recorta las coincidencias en base al límite.
            if (limit != undefined && limit > 0) {
                wordMatch.splice(limit);
            }

            if (wordMatch.length > 0) {
                wordMatch.forEach(function(match) {
                    $(`
                        <div class='searched-word' style='display: none;'>
                            <h2 class='word-name'></h2>
                            <p class='word-type'></p>
                            <p class='word-description'></p>
                            <hr style='border-top: 1px solid black;'>
                            <p style='font-weight: bold;'>Acepciones:</p>
                            <ol class='word-meanings'></ol>
                        </div>
                    `).appendTo('#search-result').fadeIn(400);

                    let currentMatches = $('.searched-word').length - 1;
                    let currentWordType = $(`.word-type:eq(${currentMatches})`);

                    //Añade los valores de la coincidencia actual.
                    $(`.word-name:eq(${currentMatches})`).text(match.palabra);
                        
                    match.tipo.forEach(function(tipo, index) {
                        currentWordType.text(currentWordType.text() + tipo);
    
                        if (index < match.tipo.length - 1) {
                            currentWordType.text(currentWordType.text() + ", ");
                        }
    
                        if (index === match.tipo.length - 1) {
                            currentWordType.text(currentWordType.text() + " (");
                        }
                    });

                    match.subtipo.forEach(function(subtipo, index) {
                        currentWordType.text(currentWordType.text() + subtipo);
    
                        if (index < match.subtipo.length - 1) {
                            currentWordType.text(currentWordType.text() + ", ");
                        }
    
                        if (index === match.subtipo.length - 1) {
                            currentWordType.text(currentWordType.text() + ")");
                        }
                    });
    
                    $(`.word-description:eq(${currentMatches})`).html(match.descripcion);
    
                    match.acepciones.forEach(function(acepcion, index) {
                        $(`.word-meanings:eq(${currentMatches})`).append(`<li class='word-meaning'>${acepcion}</li>`);

                        try {
                            $(`.word-meanings:eq(${currentMatches})`).append(`<ul style='padding: 0;'><li class='word-example'>${match.ejemplos[index]}</li></ul>`);
                        } catch {
                            $(`.word-meanings:eq(${currentMatches})`).append(`<ul style='padding: 0;'><li class='word-example'>Ejemplo no encontrado.</li></ul>`);
                        }
                    });
                });

            } else {
                $(`
                <div class='empty-search' style='display: none;'>
                    La búsqueda no arrojó resultados.
                </div>
                `).appendTo('#search-result').fadeIn(400);
            }
        }
    }

    handler = new Handler();
    handler.initialize();
});
