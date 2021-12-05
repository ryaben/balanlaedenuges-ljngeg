$(function() {
    class Handler {
        constructor() {
            this.pageView = window.location.pathname.split('/')[1]
            this.limitParam = this.loadParam('limit');
            this.listingParam = this.loadParam('listing');
        }

        initialize() {
            this.eventsListening();
            this.checkFavorites();
            this.setCurrentPage(this.pageView);

            switch (this.pageView) {
                case "diccionario":
                    this.setSearchDefaults('lang');
                    this.setSearchDefaults('limit');
                    this.displayDictionary(dictionary, this.limitParam);
                    this.displaySearchStats(dictionary);
                    break;
                case "listado":
                    this.listWords(dictionary, this.listingParam);
                    this.changeListingView(this.listingParam);
                    this.setCurrentListing(this.listingParam);
                    this.setCurrentLetter(window.location.pathname.split('/')[2]);
                    this.setCurrentTab(0);
                    break;
                case "favoritos":
                    this.setCurrentPage('listado');
                    this.setCurrentTab(1);
                    this.displayFavorites();
                    $('#listing-view').hide();
                default:
                    break;
            }
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
                let view = $(this).attr('id').slice(4);

                if (view === "listado") {
                    window.location = `/listado/a?listing=tree`
                } else {
                    window.location = `/${view}`
                }
            });

            $('#search-result').on('click', '.favorite-icon', function() {
                handler.toggleFavorite($(this).closest('.searched-word').attr('id').slice(5), $(this).siblings('.word-name').text(), 'word');
            });

            $('#favorites-listing').on('click', '.favorite-icon', function() {
                handler.toggleFavorite($(this).closest('.favorite-entry').attr('id').slice(9), $(this).siblings('.favorite-title').text(), 'favorite');
            });

            $('.letter-listing').on('click', function() {
                let letter = $(this).attr("id").slice(7);
                window.location = `/listado/${letter}?listing=${handler.loadParam("listing")}`;
            });

            $('.listing-view').on('change', function() {
                var searchParams = new URLSearchParams(window.location.search);
                searchParams.set("listing", $(this).val());
                window.location.search = searchParams.toString();
            });

            $('.tab-btn').on('click', function() {
                switch ($(this).index()) {
                    case 0:
                        window.location = `/listado/a?listing=tree`;
                        break;
                    case 1:
                        window.location = `/favoritos`;
                        break;
                    case 2:
                        window.location = `/estadisticas`;
                        break;
                    default:
                        break;
                }
            });

            $('#word-listing').on('click', '.root-tree-title', function() {
                $(this).closest('.root-tree').find('.root-word-title').toggle(200, 'linear');
                $(this).closest('.root-tree').find('.child-word').toggle(200, 'linear');
                $(this).closest('.root-tree').find('.composed-word').toggle(200, 'linear');
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

        countSearchStats(dictionary) {
            let foundWords = dictionary.length;

            return {
                foundWords: foundWords
            }
        }

        displaySearchStats(dictionary) {
            let searchStats = this.countSearchStats(dictionary);
            let foundWordsText = $('#found-words').text();

            $('#found-words').text(foundWordsText + searchStats.foundWords);
        }

        //Busca el storage de favoritos y crea uno vacío si no lo encuentra.
        checkFavorites() {
            if (localStorage.getItem('favoritesStorage') == null) {
                localStorage.setItem('favoritesStorage', '[]');
            }
        }

        //Invierte el estado de favorito de una palabra.
        toggleFavorite(wordID, wordName, parent) {
            let currentStatus = this.getFavoriteStatus(wordID);
            let favoritesStorage = JSON.parse(localStorage.getItem('favoritesStorage'));

            switch (currentStatus) {
                case false:
                    favoritesStorage.push({
                        id: wordID,
                        name: wordName
                    });

                    $(`#${parent}-${wordID}`).find('.favorite-icon').fadeOut(100, function() {
                        $(this).attr('src', '/client/img/favorite.png');
                        $(this).fadeIn(100);
                    });
                    break;
                case true:
                    let wordIndexFilter = favoritesStorage.filter(fav => {
                        return fav.id !== wordID;
                    });

                    favoritesStorage = wordIndexFilter;
                    $(`#${parent}-${wordID}`).find('.favorite-icon').fadeOut(100, function() {
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
                if (favorite.id == wordID) {
                    status = true;
                    return;
                }
            });

            return status;
        }

        //Renderiza visualmente los favoritos del localStorage.
        displayFavorites() {
            let favoritesStorage = JSON.parse(localStorage.getItem('favoritesStorage'));

            favoritesStorage.forEach(function(fav) {
                $('#favorites-listing').append(`
                    <div id="favorite-${fav.id}" class="favorite-entry">
                        <img class="favorite-icon" src="/client/img/favorite.png" alt="fav">
                        <label class="favorite-title" onclick="handler.searchWord('${fav.name}', 'bal', 1); handler.switchScreen('diccionario')">${fav.name}</label>
                    </div>
                `);
            });
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

        //Lista todas las palabras del diccionario.
        listWords(dictionary, listing) {
            dictionary.sort((a, b) => (a.word_name > b.word_name) ? 1 : -1);

            switch (listing) {
                case "list":
                    dictionary.forEach(function(word) {
                        $('#word-listing').append(`
                            <label onclick='handler.searchWord("${word.word_name}", "bal", 1); handler.switchScreen("diccionario")' class='listed-word'>${word.word_name}</label>
                        `);
                    });
                    break;
                case "tree":
                    dictionary.forEach(function(word) {
                        function createRootTree() {
                            //Busca la entrada de la raíz y agrega la palabra.
                            if ($(`#root-${word.word_root}`).length === 0) {
                                $('#word-listing').append(`
                                    <ul class='root-tree' id='root-${word.word_root}' root-name='${word.word_root}'>
                                        <li class='root-tree-title'><label class='root-tree-title-label' onclick='handler.searchWord("${word.word_root}", "bal", 0); handler.switchScreen("diccionario")'>${word.word_root}</label>
                                            <div class='root-extra'>
                                                <div class='root-amount-group'>
                                                    <label class='root-amount'>0</label>
                                                    <label> palabra(s)</label>
                                                </div>
                                            </div>
                                        </li>
                                        <ul class='compositions'>
    
                                        </ul>
                                    </ul>
                                `);
                            }
                        }

                        let criterion = {
                            criteria1: [
                                "Adverbio", "Interjeción", "Adposición", "Pronombre",
                                "Artículo", "Conjunción", "Contracción", "común",
                                "exceptuado", "extranjerismo"
                            ],
                            criteria2: {
                                criteria2_1: [
                                    "Sustantivo", "Verbo", "Adjetivo"
                                ],
                                criteria2_2: [
                                    "común", "compuesto"
                                ]
                            }
                        }

                        for (let i = 1; i <= 5; i++) {
                            let currentType = word[`word_type${i}`];
                            let currentSubtype = word[`word_subtype${i}`];

                            //Sustantivos y verbos comunes, exceptuados y extranjeros, más cualquier otro tipo principal de palabra
                            if (currentType.includes('Adverbio') || currentType.includes('Interjección') || currentType.includes('Adposición') || currentType.includes('Pronombre') || currentType.includes('Artículo') || currentType.includes('Conjunción') || currentType.includes('Contracción') || currentSubtype.includes('común') || currentSubtype.includes('exceptuado') || currentSubtype.includes('extranjerismo')) {
                                createRootTree();

                                $(`#root-${word.word_root} .compositions`).before(`
                                    <ul class='root-word' id='word-${word.word_name}' word-type='${'word.word_type' + i}' word-name='${word.word_name}'>
                                        <li class='root-word-title'><label onclick='handler.searchWord("${word.word_name}", "bal", 1); handler.switchScreen("diccionario")'>${word.word_name}</label></li>
                                    </ul>
                                `);
                                $(`#root-${word.word_root}`).find('.root-amount').text(function(i, val) {
                                    return parseInt(val) + 1;
                                });

                            //Sustantivos modificados y verbos ampliados
                            } else if ((currentType.includes('Sustantivo') || currentType.includes('Verbo') || currentType.includes('Adjetivo')) && (!currentSubtype.includes('común') && !currentSubtype.includes('compuesto'))) {
                                $(`#word-${word.word_root}`).append(`
                                    <li style='color: rgb(212, 16, 16);' class='child-word'><label onclick='handler.searchWord("${word.word_name}", "bal", 1); handler.switchScreen("diccionario")'>${word.word_name}</label></li>
                                `);
                                $(`#word-${word.word_root}`).closest('.root-tree').find('.root-amount').text(function(i, val) {
                                    return parseInt(val) + 1;
                                });

                            //Palabras compuestas
                            } else if (currentSubtype.includes('compuesto')) {
                                createRootTree();

                                $(`#root-${word.word_root}`).find('.compositions').append(`
                                    <li onclick='handler.searchWord("${word.word_name}", "bal", 1); handler.switchScreen("diccionario")' class='composed-word'><label>${word.word_name}</label></li>
                                `);
                                $(`#root-${word.word_root}`).find('.root-amount').text(function(i, val) {
                                    return parseInt(val) + 1;
                                });
                            }  
                        }
                    });
                    break;
                default:
                    break;
            }
        }

        setCurrentPage(page) {
            $(`#nav-${page}`).addClass('nav-selected');
        }

        setCurrentLetter(letter) {
            $(`#letter-${letter}`).addClass('letter-selected');
        }

        setCurrentListing(view) {
            $(`#listing-${view}`).prop("checked", true);
        }

        setCurrentTab(tab) {
            $(`.tab-btn:eq(${tab})`).addClass('tab-selected');
        }
    }

    handler = new Handler();
    handler.initialize();
});
