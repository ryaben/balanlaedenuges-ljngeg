$(function() {
    class Handler {
        initialize() {
            this.eventsListening();
            this.checkFavorites();
            this.setCurrentPage();
            this.setSearchDefaults('lang');
            this.setSearchDefaults('limit');
            this.displayDictionary(dictionary, this.loadParam('limit'));
            $('.listing-view-option:eq(1)').click();
            $('.letter-listing:eq(0)').click();
            $('.tab-btn:eq(0)').click();
            $('#word-count').html('<b>Palabras registradas</b>: ' + totalWords);
        }

        eventsListening() {
            $('#title-div').on('click', function() {
                window.location = '/'
            });

            $('#search-button').on('click', function() {
                let language;
                let limit;

                if ($('.language:eq(0)').is(':checked')) { language = 'bal' }
                else if ($('.language:eq(1)').is(':checked')) { language = 'esp' }

                if ($('#perfect-match').is(':checked')) { limit = 1 }
                else { limit = 0 }

                handler.searchWord($('#word-search').val(), language, limit);
            });

            $('#search-button').on('keypress', function(event) {
                if (event.which == '13') {
                    let language;
                    let limit;

                    if ($('.language:eq(0)').is(':checked')) { language = 'bal' }
                    else if ($('.language:eq(1)').is(':checked')) { language = 'esp' }

                    if ($('#perfect-match').is(':checked')) { limit = 1 }
                    else { limit = 0 }

                    handler.searchWord($('#word-search').val(), language, limit);
                }
            });
            
            $('.special-character').on('click', function() {
                $('#word-search').val($('#word-search').val() + $(this).text());
            });

            $('.nav-link').on('click', function() {
                window.location = `/${$(this).attr('id').slice(4)}`
            });

            $('#search-result').on('click', '.favorite-icon', function() {
                handler.toggleFavorite($(this).closest('.searched-word').attr('id').slice(5));
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

        //Busca el query string lang para seleccionar el idioma correspondiente.
        loadParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            const currentParam = urlParams.get(param);
            return currentParam;
        }

        setSearchDefaults(param) {
            switch (this.loadParam(param)) {
                case 'bal':
                    $(`#language-bal`).prop("checked", true);
                    break;
                case 'esp':
                    $(`#language-esp`).prop("checked", true);
                    break;
                case '1':
                    $('#perfect-match').prop('checked', true);
                    break;
                case '0':
                    $('#perfect-match').prop('checked', false);
                    break;
                default:
                    $(`#language-bal`).prop("checked", true);
                    $('#perfect-match').prop('checked', false);
                    break;
            }

            $('#word-search').val(window.location.pathname.split('/')[2]);
        }

        //Redirecciona según string de búsqueda.
        searchWord(searchString, language, limit) {
            window.location = `/diccionario/${searchString}?lang=${language}&limit=${limit}`;
        }

        //Busca el storage de favoritos y crea uno vacío si no lo encuentra.
        checkFavorites() {
            if (localStorage.getItem('favoritesStorage') == null) {
                localStorage.setItem('favoritesStorage', '[]');
            }
        }

        //Invierte el estado de favorito de una palabra.
        toggleFavorite(wordID) {
            let currentStatus = this.getFavoriteStatus(wordID);
            let favoritesStorage = JSON.parse(localStorage.getItem('favoritesStorage'));

            switch (currentStatus) {
                case false:
                    favoritesStorage.push(wordID);
                    $(`#word-${wordID}`).find('.favorite-icon').fadeOut(100, function() {
                        $(this).attr('src', '/client/img/favorite.png');
                        $(this).fadeIn(100);
                    });
                    break;
                case true:
                    let wordIndex = favoritesStorage.indexOf(wordID)
                    favoritesStorage.splice(wordIndex, 1);
                    $(`#word-${wordID}`).find('.favorite-icon').fadeOut(100, function() {
                        $(this).attr('src', '/client/img/non-favorite.png');
                        $(this).fadeIn(100);
                    });
                    break;
                default:
                    break;
            }

            localStorage.setItem('favoritesStorage', JSON.stringify(favoritesStorage));
        }

        //Busca en los favoritos del storage la presencia de una palabra según ID.
        getFavoriteStatus(wordID) {
            let status = false;
            let favoritesStorage = JSON.parse(localStorage.getItem('favoritesStorage'));

            favoritesStorage.forEach(function(favorite) {
                if (favorite == wordID) {
                    status = true;
                    return;
                }
            });

            return status;
        }

        //Renderiza los resultados de la query.
        displayDictionary(dictionary, limit) {
            let displayDelay = 50;
            let fadeDuration = 200;
            let dictionaryLimit = limit;

            if (limit == 0) {
                dictionaryLimit = dictionary.length;
                dictionary.sort((a, b) => (a.word_name > b.word_name) ? 1 : -1);
            }

            for (let i = 0; i < dictionaryLimit; i++) {
                const word = dictionary[i];
                
                let concatType = '';
                let concatSubtype = '(';
                let concatMeaning = '';
                let favoriteStatus;

                for (let i = 1; i <= 5; i++) {
                    const currentType = word[`word_type${i}`];
                    const currentSubtype = word[`word_subtype${i}`];
                    const currentDefinition = word[`word_definition${i}`];
                    const currentExample = word[`word_example${i}`];

                    if (currentType != "") {
                        if (i > 1 ) {
                            concatType += ',&nbsp;';
                        }
                        concatType += currentType;
                    }
                    if (currentSubtype != "") {
                        if (i > 1 ) {
                            concatSubtype += ',&nbsp;';
                        }
                        concatSubtype += currentSubtype;
                    }
                    if (currentDefinition != "") {
                        concatMeaning += `<li class='word-meaning'>${currentDefinition}</li>`;
                    }
                    if (currentExample != "") {
                        concatMeaning += `<ul style='padding: 0;'><li class='word-example'>${currentExample}</li></ul>`;
                    }
                }

                concatSubtype += ')';

                switch (handler.getFavoriteStatus(word.id)) {
                    case true:
                        favoriteStatus = 'favorite';
                        break;
                    case false:
                        favoriteStatus = 'non-favorite';
                        break;
                    default:
                        favoriteStatus = 'non-favorite';
                        break;
                }

                setTimeout(function() {
                    $(`
                        <div id="word-${word.id}" class='searched-word' style='display: none;'>
                            <div class='result-title'>
                                <h2 class='word-name'>${word.word_name}</h2>
                                <img class='favorite-icon' src='/client/img/${favoriteStatus}.png' alt='Favorite'>
                            </div>
                            <p class='word-root'>(en raíz&nbsp;<i>${word.word_root}</i>)</p>
                            <p class='word-type'>${concatType}&nbsp;${concatSubtype}</p>
                            <p class='word-description'>${word.word_description}</p>
                            <hr style='border-top: 1px solid black;'>
                            <p style='font-weight: bold;'>Acepciones:</p>
                            <ol class='word-meanings'>${concatMeaning}</ol>
                        </div>
                    `).appendTo('#search-result').fadeIn(fadeDuration);
                }, displayDelay);
                displayDelay += fadeDuration;
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
            dictionary.forEach(function(word) {
                let firstLetter = word.palabra.slice(0, 1).normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                //Si la primera letra de la palabra coincide con la letra por parámetro, se agrega.
                if (firstLetter === letter) {
                    matchedWords.push({
                        palabra: word.palabra,
                        raiz: word.raiz,
                        tipo: word.word_type,
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
                    word.word_type.forEach(function(tipo) {
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
                    if (word.word_type.includes('Adverbio') || word.word_type.includes('Interjección') || word.word_type.includes('Adposición') || word.word_type.includes('Pronombre') || word.word_type.includes('Artículo') || word.word_type.includes('Conjunción') || word.word_type.includes('Contracción') || word.subtipo.includes('común') || word.subtipo.includes('exceptuado') || word.subtipo.includes('extranjerismo')) {
                        createRootTree();

                        $(`#root-${word.raiz} .compositions`).before(`
                            <ul class='root-word' id='word-${word.palabra}' word-type='${word.word_type}' word-name='${word.palabra}'>
                                <li class='root-word-title'><label onclick='handler.searchWord("${word.palabra}", "BAL", 1); handler.switchScreen("diccionario")'>${word.palabra}</label></li>
                            </ul>
                        `);
                        $(`#root-${word.raiz}`).find('.root-amount').text(function(i, val) { 
                            return parseInt(val) + 1;
                        });

                    //Sustantivos modificados y verbos ampliados
                    } else if ((word.word_type.includes('Sustantivo') || word.word_type.includes('Verbo') || word.word_type.includes('Adjetivo')) && (!word.subtipo.includes('común') && !word.subtipo.includes('compuesto'))) {
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
                    if (word.word_type.includes(value[0])) {
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

        setCurrentPage() {
            // let currentPage = window.location.pathname.slice(1);
            let currentPage = window.location.pathname.split('/')[1];
            $(`#nav-${currentPage}`).addClass('nav-selected');
        }
    }

    handler = new Handler();
    handler.initialize();
});
