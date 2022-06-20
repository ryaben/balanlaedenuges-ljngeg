$(function() {
    class Handler {
        constructor() {
            this.pageView = window.location.pathname.split('/')[1]
            this.limitParam = this.loadParam('limit');
            this.listingParam = this.getConfig('listing');
        }

        initialize() {
            this.eventsListening();
            this.checkLocalStorage();
            this.setCurrentPage(this.pageView);
            this.setConfig("tooltip");
            this.setConfig("listing");

            switch (this.pageView) {
                case "diccionario":
                    this.setSearchDefaults('lang');
                    this.setSearchDefaults('limit');
                    this.displayDictionary(dictionary, this.limitParam, 'search-result', 50, 200);
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
                    break;
                case "estadisticas":
                    this.setCurrentPage('listado');
                    this.setCurrentTab(2);
                    this.displaySearchStats(dictionary, "type", "Palabra", true);
                    break;
                case "guias":
                    this.drawWorldMap();
                    break;
                default:
                    break;
            }
        }

        eventsListening() {
            $('#title-div').on('click', function() {
                window.location = '/'
            });

            $('#search-button').on('click', function() {
                handler.customizeSearch();
            });

            $('body').on('keypress', function(event) {
                if (handler.pageView == 'diccionario' && event.keyCode == 13) {
                    handler.customizeSearch();
                }
            });

            $('#config-menu-title label').on('click', function() {
                let arrow = $('#config-menu-title label:eq(1)');

                arrow.text(arrow.text() === '◀' ? '▼' : '◀');
                $('#config-menu').slideToggle(200);
            });

            $('.special-character').on('click', function() {
                $('#word-search').val($('#word-search').val() + $(this).text());
            });

            $('nav').on('click', '.config-radio', function() {
                handler.saveConfig($(this).attr("name"), $(this).val());
            });

            $('nav').on('click', ".nav-section", function() {
                if (window.innerWidth < 659) {
                    handler.toggleMobileNav($(this).attr('id').slice(8));
                }
            });

            $('nav').on('click', ".nav-link", function() {
                let view = $(this).attr('id').slice(4);

                if (view === "listado") {
                    window.location = `/listado/a?listing=${handler.listingParam}`
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
                window.location = `/listado/${letter}?listing=${handler.listingParam}`;
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

            $('#word-listing').on('mouseenter', '.root-word-title label, .child-word label, .composed-word label, .listed-word', function() {
                let configStorage = JSON.parse(localStorage.getItem('config'));
                if (configStorage.tooltip == 'true') {
                    handler.loadTooltip($(this).position(), $(this).css('width'), $(this).css('height'), $(this).html());
                }
            });

            $('#word-listing').on('mouseleave', '.root-word-title label, .child-word label, .composed-word label, .listed-word', function() {
                $('#tooltipArrow').hide();
                $('#wordTooltip').hide();
            });

            $("#listing-stats").on("click", ".category-clickable", function() {
                let parent = $(this).attr("id").slice(9);
                handler.displaySearchStats(dictionary, "subtype", parent);
            });

            $("#listing-stats").on("click", ".category-back-button", function() {
                handler.displaySearchStats(dictionary, "type", "Palabra", true);
            });

            $("#listing-stats").on("mouseenter", ".category-clickable", function() {
                $(this).css({
                    "background-color": "black",
                    "color": "white"
                });
                $(this).children(".category-value").css("color", "white");
                $(this).children(".colorer").css("display", "none");
            });

            $("#listing-stats").on("mouseleave", ".category-clickable", function() {
                $(this).css({
                    "background-color": "white",
                    "color": "black"
                });
                $(this).children(".category-value").css("color", "rgb(216, 13, 13)");
                $(this).children(".colorer").css("display", "block");
            });
        }

        //Reposiciona la ventana del tooltip y carga sus datos.
        loadTooltip(position, width, height, name) {
            if (window.innerWidth >= 660) {
                $('#wordTooltip').html('');
                let retrievedWord = dictionary.find(function(word) {
                    return word.word_name === name;
                });

                this.displayDictionary([retrievedWord], 1, 'wordTooltip', 0, 0);

                let windowHeight = document.documentElement.clientHeight;
                let windowWidth = document.documentElement.clientWidth;
                let cleanWidth = width.substring(0, width.length - 2);

                if ((position.left - cleanWidth) <= (windowWidth / 2)) {
                    $('#wordTooltip').css({
                        'left': position.left,
                        'margin-left': `calc(${width} + 10px)`
                    });
                    $('#tooltipArrow').css({
                        'left': position.left,
                        'margin-left': `calc(${width} - 3px)`,
                        'border-color': 'transparent black transparent transparent'
                    });
                } else {
                    let tooltipWidth = $('#wordTooltip').width();
                    console.log('position.left', position.left);
                    console.log('tooltipWidth', tooltipWidth);
                    console.log('width', width);
                        
                    $('#wordTooltip').css({
                        'left': `calc(${position.left}px - ${tooltipWidth}px - 12px)`,
                        'margin-right': `calc(${width})`
                    });
                    $('#tooltipArrow').css({
                        'left': `calc(${position.left}px - 11px)`,
                        'margin-right': `calc(${width} - 3px)`,
                        'border-color': 'transparent transparent transparent black'
                    });
                }

                if (position.top <= (windowHeight / 2)) {
                    $('#wordTooltip').css('top', position.top);
                    $('#tooltipArrow').css('top', position.top + 5);
                } else {
                    setTimeout(() => {
                        let tooltipHeight = $('#wordTooltip').height();
                        $('#wordTooltip').css('top', `calc(${position.top}px - ${tooltipHeight}px + ${height})`);
                        $('#tooltipArrow').css('top', `calc(${position.top}px + 5px)`);
                    }, 5);
                }

                $('#tooltipArrow').fadeIn(100);
                $('#wordTooltip').fadeIn(100);
            }
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

        //Analiza variables que determinan una búsqueda en el diccionario.
        customizeSearch() {
            let language;
            let limit;

            if ($('.language:eq(0)').is(':checked')) { language = 'bal' }
            else if ($('.language:eq(1)').is(':checked')) { language = 'esp' }

            if ($('#perfect-match').is(':checked')) { limit = 1 }
            else { limit = 0 }

            this.searchWord($('#word-search').val(), language, limit);
        }

        //Redirecciona según string de búsqueda.
        searchWord(searchString, language, limit) {
            window.location = `/diccionario/${searchString}?lang=${language}&limit=${limit}`;
        }

        //Obtiene todos los valroe actuales para determinada propiedad de un diccionario.
        getSearchValues(dictionary, category, parent) {
            function makeUnique(array) {
                var seen = {};
                return array.filter(function(item) {
                    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
                });
            }

            let values = [];

            dictionary.forEach(function(word) {
                for (let i = 1; i <= 5; i++) {
                    let currentValue = word[`word_${category}${i}`];
                    let capitalizedValue = currentValue.charAt(0).toUpperCase() + currentValue.slice(1);

                    switch (category) {
                        case "type":
                            if (currentValue != "") {
                                values.push(capitalizedValue);
                            }
                            break;
                        case "subtype":
                            let currentParent = word[`word_type${i}`];
                            let capitalizedParent = currentParent.charAt(0).toUpperCase() + currentParent.slice(1);

                            if (currentValue != "" && capitalizedParent.includes(parent)) {
                                if (capitalizedValue.includes(",")) {
                                    let splittedSubtypes = capitalizedValue.split(", ");
    
                                    for (let j = 0; j < splittedSubtypes.length; j++) {
                                        values.push(splittedSubtypes[j].charAt(0).toUpperCase() + splittedSubtypes[j].slice(1));
                                    }
                                } else {
                                    values.push(capitalizedValue.charAt(0).toUpperCase() + capitalizedValue.slice(1));
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            });

            return makeUnique(values).sort((a, b) => (a > b) ? 1 : -1);
        }

        //Recorre propiedades de un diccionario y cuenta los casos que tengan determinado valor.
        countSearchStats(dictionary, category, value, parent) {
            let counter = 0;

            dictionary.forEach(function(word) {
                for (let i = 1; i <= 5; i++) {
                    let currentValue = word[`word_${category}${i}`];
                    let capitalizedValue = currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
                    let currentParent = word[`word_type${i}`];
                    let capitalizedParent = currentParent.charAt(0).toUpperCase() + currentParent.slice(1);

                    switch (category) {
                        case "type":
                            if (capitalizedValue.includes(value)) {
                                counter++;
                            }
                            break;
                        case "subtype":
                            if (capitalizedValue.includes(",")) {
                                let splittedSubtypes = capitalizedValue.split(", ");
    
                                for (let j = 0; j < splittedSubtypes.length; j++) {
                                    let capitalizedSplitted = splittedSubtypes[j].charAt(0).toUpperCase() + splittedSubtypes[j].slice(1);

                                    if (capitalizedSplitted.includes(value) && capitalizedParent.includes(parent)) {
                                        counter++;
                                    }
                                }
                            } else {
                                if (capitalizedValue.includes(value) && capitalizedParent.includes(parent)) {
                                    counter++;
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            });

           return counter;
        }

        //Agrega una entrada visual de estadísticas.
        appendEntry(style, title, value, percentage, clickable) {
            $("#listing-stats").append(`
                <div id="category-${title}" class="category-entry ${clickable == true ? 'category-clickable' : 'category-nonclickable'}">
                    <div class="colorer"></div>
                    <p class="category-${style[0]}">${title}</p>
                    <p class="category-${style[1]}">${value}</p>
                    <p class="category-${style[2]}">${percentage}</p>
                </div>
            `).fadeIn(300);
        }

        //Muestra estadísticas del diccionario, recorriendo varios otros métodos.
        displaySearchStats(dictionary, category, parent, clickable) {
            let valuesArray = this.getSearchValues(dictionary, category, parent);
            let totalWords = category == "type" ? dictionary.length : this.countSearchStats(dictionary, "type", parent);

            $("#listing-stats").hide();
            $("#listing-stats").html("");

            this.appendEntry(["header", "header", "header"], "Tipo", "Cantidad", "Porcentaje");
            this.appendEntry(["title", "value", "percentage"], parent, totalWords, "100.00%");
            $(`#category-${parent} .colorer`).css({"width": "100%", "border-bottom": "2px solid black"});

            valuesArray.forEach(function(value) {
                let countOp = this.countSearchStats(dictionary, category, value, parent);
                let percentage = ((countOp * 100) / totalWords).toFixed(2) + "%";

                this.appendEntry(["title", "value", "percentage"], value, countOp, percentage, clickable);
                $(`#category-${value} .colorer`).css("width", percentage);
            }, this);

            if (category == "subtype") {
                $("#listing-stats").append(`
                    <div class="category-back">
                        <button class="category-back-button">← Atrás</button>
                    </div>
                `).fadeIn(300);
            }
        }

        //Busca el storage de favoritos y crea uno vacío si no lo encuentra.
        checkLocalStorage() {
            if (localStorage.getItem('favoritesStorage') == null) {
                localStorage.setItem('favoritesStorage', '[]');
            }
            if (localStorage.getItem('config') == null) {
                localStorage.setItem('config', JSON.stringify({
                    tooltip: "true",
                    listing: "tree"
                }));
            }
        }

        toggleMobileNav(sectionId) {
            if ($("nav").children(`.nav-${sectionId}`).length == 0) {
                $("nav").children(".nav-mobile").remove();
                $("nav").append($(`.nav-${sectionId}`).clone().addClass("nav-mobile").css("display", "none"));

                $("#nav-links").css({
                    "border-bottom": "2px solid darkred",
                    "border-bottom-left-radius": "0px",
                    "border-bottom-right-radius": "0px",
                    "margin-bottom": "5px"
                });
                $("nav").css("padding-bottom", "5px");
                $("section").css({
                    "opacity": "0.3",
                    "pointer-events": "none"
                });

                if (sectionId == "config") {
                    this.setConfig("tooltip");
                    this.setConfig("listing");
                }

                $("nav").children(`.nav-${sectionId}`).slideDown(300);
            } else {
                $("nav").children(`.nav-${sectionId}`).slideUp(300);

                setTimeout(() => {
                    $("#nav-links").css({
                        "border-bottom": "none",
                        "border-bottom-left-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "margin-bottom": "0"
                    });
                    $("nav").css("padding-bottom", "0");
                    $("section").css({
                        "opacity": "1",
                        "pointer-events": "all"
                    });
                    
                    $("nav").children(".nav-mobile").remove();
                }, 301);
            }
        }

        //Invierte el estado de favorito de una palabra.
        toggleFavorite(wordID, wordName, parent) {
            let currentStatus = this.getFavoriteStatus(wordID);
            let favoritesStorage = JSON.parse(localStorage.getItem('favoritesStorage'));
            let favoriteIcon;

            switch (currentStatus) {
                case false:
                    favoritesStorage.push({
                        id: wordID,
                        name: wordName
                    });

                    favoriteIcon = 'favorite';
                    break;
                case true:
                    let wordIndexFilter = favoritesStorage.filter(fav => {
                        return fav.id !== wordID;
                    });

                    favoritesStorage = wordIndexFilter;
                    favoriteIcon = 'non-favorite';
                    break;
                default:
                    break;
            }

            $(`#${parent}-${wordID}`).find('.favorite-icon').fadeOut(100, function() {
                $(this).attr('src', `/client/img/${favoriteIcon}.png`);
                $(this).fadeIn(100);
            });

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

            if (favoritesStorage.length > 0) {
                favoritesStorage.forEach(function(fav) {
                    $('#favorites-listing').append(`
                        <div id="favorite-${fav.id}" class="favorite-entry">
                            <img class="favorite-icon" src="/client/img/favorite.png" alt="fav">
                            <label class="favorite-title" onclick="handler.searchWord('${fav.name}', 'bal', 1); handler.switchScreen('diccionario')">${fav.name}</label>
                        </div>
                    `);
                });
            } else {
                $('#favorites-listing').append(`
                    <h3 class="no-favorites">Aún no hay favoritos agregados.</h3>
                `);
            }
        }

        //Renderiza los resultados de la query.
        displayDictionary(dictionary, limit, container, displayDelay, fadeDuration) {
            let dictionaryLimit = limit;

            if (dictionary.length > 0) {
                if (limit == 0) {
                    dictionaryLimit = dictionary.length;
                    dictionary.sort((a, b) => (a.word_name > b.word_name) ? 1 : -1);
                }
    
                $("#found-words").text("Resultados obtenidos: " + dictionary.length);
    
                for (let i = 0; i < dictionaryLimit; i++) {
                    const word = dictionary[i];
    
                    let concatType = '';
                    let concatSubtype = '(';
                    let concatMeaning = '';
                    let favoriteStatus = this.getFavoriteStatus(word.id) ? 'favorite' : 'non-favorite';
    
                    for (let i = 1; i <= 5; i++) {
                        const currentType = word[`word_type${i}`];
                        const currentSubtype = word[`word_subtype${i}`];
                        const currentDefinition = word[`word_definition${i}`];
                        const currentExample = word[`word_example${i}`];
    
                        if (currentType != "") {
                            (i > 1) ? concatType += ',&nbsp;' : '';
                            concatType += currentType;
                        }
                        if (currentSubtype != "") {
                            (i > 1) ? concatSubtype += ',&nbsp;' : '';
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
                        `).appendTo(`#${container}`).fadeIn(fadeDuration);
                    }, displayDelay);
                    displayDelay += fadeDuration;
                }
            } else if (dictionary.length === 0) {
                $(`<div class="empty-search">La búsqueda no arrojó resultados.</div>`).appendTo(`#${container}`).fadeIn(fadeDuration);
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
                    function createRootTree(root) {
                        //Busca la entrada de la raíz y agrega la palabra.
                        if ($(`#root-${root}`).length === 0) {
                            $('#word-listing').append(`
                                <ul class='root-tree' id='root-${root}' root-name='${root}'>
                                    <li class='root-tree-title'><label class='root-tree-title-label' onclick='handler.searchWord("${root}", "bal", 0); handler.switchScreen("diccionario")'>${root}</label>
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

                    dummyWords.forEach(function(dummy) {
                        if (dummy.word_name.charAt(0) == dictionary[0].word_name.charAt(0)) {
                            dictionary.push(dummy);
                        }
                    });

                    dictionary.sort((a,b) => (a.word_name > b.word_name) ? 1 : ((b.word_name > a.word_name) ? -1 : 0));

                    dictionary.forEach(function(word) {
                        let currentType = [];
                        let currentSubtype = [];

                        for (let i = 1; i <= 5; i++) {
                            let typeI = word[`word_type${i}`];
                            let subtypeI = word[`word_subtype${i}`];

                            //El caso de undefined es por las dummy words.
                            if (typeI != "" && typeI != undefined) { currentType.push(typeI) }
                            if (subtypeI != "" && subtypeI != undefined) { currentSubtype.push(subtypeI); }
                        }

                        for (let i = 0; i < currentSubtype.length; i++) {
                            if (currentSubtype[i].includes(",")) {
                                let splittedSubtypes = currentSubtype[i].split(", ");

                                for (let j = 0; j < splittedSubtypes.length; j++) {
                                    currentSubtype.push(splittedSubtypes[j]);
                                }
                                currentSubtype.splice(i, 1);
                            }
                        }

                        //Sustantivos y verbos comunes, exceptuados y extranjeros, más cualquier otro tipo principal de palabra
                        if ((currentType.includes('Adverbio') || currentType.includes('Interjección') || currentType.includes('Adposición') || currentType.includes('Pronombre') || currentType.includes('Artículo') || currentType.includes('Conjunción') || currentType.includes('Contracción') || currentSubtype.includes('común') || currentSubtype.includes('exceptuado') || currentSubtype.includes('extranjerismo')) && !currentType.includes('Adjetivo')) {
                            createRootTree(word.word_root);

                            $(`#root-${word.word_root} .compositions`).before(`
                                <ul class='root-word' id='word-${word.word_name}' word-type='${JSON.stringify(currentType)}' word-name='${word.word_name}'>
                                    <li class='root-word-title'>
                                        <label onclick='handler.searchWord("${word.word_name}", "bal", 1); handler.switchScreen("diccionario")'>${word.word_name}</label>
                                    </li>
                                </ul>
                            `);
                            $(`#root-${word.word_root}`).find('.root-amount').text(function(i, val) {
                                return parseInt(val) + 1;
                            });

                        //Sustantivos modificados, verbos ampliados y adjetivos
                        } else if (((currentType.includes('Sustantivo') || currentType.includes('Verbo')) && (currentSubtype.includes('diminutivizado') || currentSubtype.includes('aumentativizado') || currentSubtype.includes('colectivizado') || currentSubtype.includes('ampliado') || currentSubtype.includes('invertido'))) || (currentType.includes('Adjetivo') && !currentSubtype.includes('compuesto'))) {
                            $(`#word-${word.word_root}`).append(`
                                <li class='child-word'>
                                    <label onclick='handler.searchWord("${word.word_name}", "bal", 1); handler.switchScreen("diccionario")'>${word.word_name}</label>
                                </li>
                            `);
                            $(`#word-${word.word_root}`).closest('.root-tree').find('.root-amount').text(function(i, val) {
                                return parseInt(val) + 1;
                            });

                        //TODO: adaptar la raíz de todos estos en la base de datos
                        //Sustantivos compuestos con otro subtipo
                        } else if (currentSubtype.includes('compuesto') && (currentSubtype.includes('diminutivizado') || currentSubtype.includes('aumentativizado') || currentSubtype.includes('colectivizado') || currentSubtype.includes('ampliado') || currentSubtype.includes('invertido'))) {
                            $(`#word-${word.word_root}`).append(`
                                <li style='color: rgb(212, 16, 16);' class='child-word'>
                                    <label onclick='handler.searchWord("${word.word_name}", "bal", 1); handler.switchScreen("diccionario")'>${word.word_name}</label>
                                </li>
                            `);
                            
                            $(`#word-${word.word_root}`).closest('.root-tree').find('.root-amount').text(function(i, val) {
                                return parseInt(val) + 1;
                            });

                        //Sustantivos y verbos solo compuestos
                        } else if (currentSubtype.includes('compuesto')) {
                            createRootTree(word.word_root);

                            $(`#root-${word.word_root}`).find('.compositions').append(`
                                <li onclick='handler.searchWord("${word.word_name}", "bal", 1); handler.switchScreen("diccionario")' id='word-${word.word_name}' class='composed-word'>
                                    <label>${word.word_name}</label>
                                </li>
                            `);
                            $(`#root-${word.word_root}`).find('.root-amount').text(function(i, val) {
                                return parseInt(val) + 1;
                            });

                        //"Dummies", palabras inexistentes que sostienen otras en el árbol.
                        } else if (word.word_subtype1.includes('dummy-composed')) {
                            createRootTree(word.word_root);

                            $(`#root-${word.word_root}`).find('.compositions').append(`
                                <li id='word-${word.word_name}' class='composed-word'>
                                    <label class="dummy-word">${word.word_name}</label>
                                </li>
                            `);
                        }
                    });

                    
                    break;
                default:
                    break;
            }
        }

        drawWorldMap() {
            var svgMapEuroCurrency = new svgMap({
                targetElementID: 'svgMapEuroCurrency',
                data: {
                  data: {
                    librishGrammar: {}
                  },
                  applyData: 'librishGrammar',
                  values: {
                    AT: { librishGrammar: 1, eurozone: 1 }, // Austria
                    BE: { librishGrammar: 1, eurozone: 1 }, // Belgium
                    CY: { librishGrammar: 1, eurozone: 1 }, // Cyprus
                    EE: { librishGrammar: 1, eurozone: 1 }, // Estonia
                    FI: { librishGrammar: 1, eurozone: 1 }, // Finland
                    FR: { librishGrammar: 1, eurozone: 1 }, // France
                    DE: { librishGrammar: 1, eurozone: 1 }, // Germany
                    GR: { librishGrammar: 1, eurozone: 1 }, // Greece
                    IE: { librishGrammar: 1, eurozone: 1 }, // Ireland
                    IT: { librishGrammar: 1, eurozone: 1 }, // Italy
                    LV: { librishGrammar: 1, eurozone: 1 }, // Latvia
                    LT: { librishGrammar: 1, eurozone: 1 }, // Lithuania
                    LU: { librishGrammar: 1, eurozone: 1 }, // Luxembourg
                    MT: { librishGrammar: 1, eurozone: 1 }, // Malta
                    NL: { librishGrammar: 1, eurozone: 1 }, // Netherlands
                    PT: { librishGrammar: 1, eurozone: 1 }, // Portugal
                    ES: { librishGrammar: 1, eurozone: 1 }, // Spain
                    SI: { librishGrammar: 1, eurozone: 1 }, // Slovenia
                    SK: { librishGrammar: 1, eurozone: 1 }, // Slovakia
    
                    // Countries using euro but not in eurozone
                    XK: { librishGrammar: 1, eurozone: 0, color: '#528FCC' }, // Kosovo
                    ME: { librishGrammar: 1, eurozone: 0, color: '#528FCC' }, // Montenegro
                    AD: { librishGrammar: 1, eurozone: 0, color: '#528FCC' }, // Andorra
                    MC: { librishGrammar: 1, eurozone: 0, color: '#528FCC' }, // Monaco
                    SM: { librishGrammar: 1, eurozone: 0, color: '#528FCC' }, // San Marino
                    VA: { librishGrammar: 1, eurozone: 0, color: '#528FCC' }, // Vatican City
    
                    // Countries in eurozone but not using euro
                    BG: { librishGrammar: 0, eurozone: 1, color: '#a6d2ff' }, // Bulgaria
                    CZ: { librishGrammar: 0, eurozone: 1, color: '#a6d2ff' }, // Czech Republic
                    DK: { librishGrammar: 0, eurozone: 1, color: '#a6d2ff' }, // Denmark
                    HR: { librishGrammar: 0, eurozone: 1, color: '#a6d2ff' }, // Croatia
                    HU: { librishGrammar: 0, eurozone: 1, color: '#a6d2ff' }, // Hungary
                    PL: { librishGrammar: 0, eurozone: 1, color: '#a6d2ff' }, // Poland
                    RO: { librishGrammar: 0, eurozone: 1, color: '#a6d2ff' }, // Romania
                    SE: { librishGrammar: 0, eurozone: 1, color: '#a6d2ff' } // Sweden
                  }
                },
                colorMin: '#E2E2E2',
                colorMax: '#297ACC',
                colorNoData: '#E2E2E2',
                thresholdMax: 1,
                thresholdMin: 0,
                initialZoom: 0,
                initialPan: {
                  x: 0,
                  y: 0
                },
                mouseWheelZoomEnabled: true,
                mouseWheelZoomWithKey: true,
                onGetTooltip: function (tooltipDiv, countryID, countryValues) {
                  // Geting the list of countries
                  var countries = svgMapEuroCurrency.countries;
    
                  // Create tooltip content element
                  var tooltipContentElement = document.createElement('div');
                  tooltipContentElement.style.padding = '16px 24px';
    
                  // Fill content
                  var innerHTML =
                    '<div style="margin: 0 0 10px; text-align: center"><img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/{0}.svg" alt="" style="height: 40px; width: auto; border: 2px solid #eee"></div>'.replace(
                      '{0}',
                      countryID.toLowerCase()
                    );
    
                  innerHTML +=
                    '<div style="min-width: 180px; font-weight: bold; margin: 0 0 15px; text-align: center">' +
                    countries[countryID] +
                    '</div>';
    
                  if (countryValues && countryValues.eurozone == 1) {
                    innerHTML +=
                      '<div style="margin-bottom: 8px"><span style="color: #6d0; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✔</span>Part of eurozone</div>';
                  } else {
                    innerHTML +=
                      '<div style="margin-bottom: 8px; color: #aaa"><span style="color: #f03; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✘</span>Not a part of eurozone</div>';
                  }
    
                  if (countryValues && countryValues.librishGrammar == 1) {
                    innerHTML +=
                      '<div style="margin-bottom: 8px"><span style="color: #6d0; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✔</span>Uses Euro</div>';
                  } else {
                    innerHTML +=
                      '<div style="margin-bottom: 8px; color: #aaa"><span style="color: #f03; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✘</span>Does not use Euro</div>';
                  }
    
                  // Return element with custom content
                  tooltipContentElement.innerHTML = innerHTML;
                  return tooltipContentElement;
                }
            });
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

        getConfig(name) {
            let configStorage = JSON.parse(localStorage.getItem('config'));
            return configStorage[name];
        }

        setConfig(name) {
            let configStorage = JSON.parse(localStorage.getItem('config'));

            $(`.config-radio[name="${name}"][value="${configStorage[name]}"]`).prop("checked", true);
        }

        saveConfig(prop, value) {
            let configStorage = JSON.parse(localStorage.getItem('config'));

            configStorage[prop] = value;

            localStorage.setItem('config', JSON.stringify(configStorage));
        }
    }

    handler = new Handler();
    handler.initialize();
});
