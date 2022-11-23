$(function() {
    class Handler {
        constructor() {
            this.checkLocalStorage();
            this.pageView = window.location.pathname.split('/')[1]
            this.limitParam = this.loadParam('limit');
            this.listingParam = this.getConfig('listing');
        }

        initialize(handler) {
            this.eventsListening(handler);
            this.setCurrentPage(this.pageView);
            this.setConfig("tooltip");
            this.setConfig("listing");

            switch (this.pageView) {
                case "diccionario":
                    if (this.loadParam('lang') && this.loadParam('limit')) {
                        this.dictionarySearch = this.decodeEntities(window.location.pathname.split('/')[2]);
                        this.setSearchDefaults('lang');
                        this.setSearchDefaults('limit');
                        this.displayDictionary(dictionary, this.limitParam, 'searchResult', 50, 200);
                    } else {
                        $("#resultStats").css("display", "none");
                        $("#searchResult").append(`
                            <p class='no-search'>
                                En este diccionario libraterrense-español puede descubrir el significado de un vocablo en el idioma nacional, o buscar una palabra o frase en español para conocer una posible traducción.
                                También <a onclick='handler.searchWord(handler.randomWord(dictionary), "bal", 1)'>podemos cargar una palabra al azar</a>.
                            </p>
                        `);
                    }
                    break;
                case "listado":
                    let currentLetter = this.decodeEntities(window.location.pathname.split('/')[2]);
                    dictionary = this.filterDictionary(dictionary, currentLetter);
                    this.listWords(dictionary, this.listingParam);
                    this.changeListingView(this.listingParam);
                    this.setCurrentListing(this.listingParam);
                    this.setCurrentLetter(currentLetter);
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

        eventsListening(handler) {
            $('#titleDiv').on('click', function() {
                window.location = '/'
            });

            $('#searchButton').on('click', function() {
                handler.customizeSearch();
            });

            $('body').on('keypress', function(event) {
                if (handler.pageView == 'diccionario' && event.keyCode == 13) {
                    handler.customizeSearch();
                }
            });

            $('#configMenuTitle label').on('click', function() {
                let arrow = $('#configMenuTitle label:eq(1)');

                arrow.text(arrow.text() === '◀' ? '▼' : '◀');
                $('#configMenu').slideToggle(200);
            });

            $('.special-character').on('click', function() {
                $('#wordSearch').val($('#wordSearch').val() + $(this).text());
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

            $('.data-index-link').on('mouseenter', function() {
                handler.hoverIndexLink($(this), 'red');
            });

            $('.data-index-link').on('mouseleave', function() {
                handler.hoverIndexLink($(this), 'black');
            });

            $('#searchResult').on('click', '.favorite-icon', function() {
                handler.toggleFavorite($(this).closest('.searched-word').attr('id').slice(5), $(this).siblings('.word-name').text(), 'word');
            });

            $('#favoritesListing').on('click', '.favorite-icon', function() {
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

            $('#wordListing').on('click', '.root-tree-title', function() {
                $(this).closest('.root-tree').find('.root-word-title').toggle(200, 'linear');
                $(this).closest('.root-tree').find('.child-word').toggle(200, 'linear');
                $(this).closest('.root-tree').find('.composed-word').toggle(200, 'linear');
            });

            $('#guidesScreen').on('click', '.root-tree-title.guide', function() {
                $(this).closest('.root-tree').find('.guide-container').toggle(200, 'linear');
            });

            $('section').on('mouseenter', '.root-word-title label, .child-word label, .composed-word label, .listed-word', function() {
                let configStorage = JSON.parse(localStorage.getItem('config'));
                if (configStorage.tooltip == 'true') {
                    handler.loadTooltip($(this).position(), $(this).css('width'), $(this).css('height'), $(this).html(), 'document');
                }
            });

            $('section').on('mouseleave', '.root-word-title label, .child-word label, .composed-word label, .listed-word', function() {
                $('#tooltipArrow').hide();
                $('#wordTooltip').hide();
            });

            $('.guide-polygon').on('mouseenter', function() {
                handler.loadTooltip($(this).position(), $(this).css('width'), $(this).css('height'), $(this).attr('guide-word'), $(this).closest('.guide-container').attr('id'));
            });

            $('.guide-polygon').on('mouseleave', function() {
                $('#tooltipArrow').hide();
                $('#wordTooltip').hide();
            });

            $("#listingStats").on("click", ".category-clickable", function() {
                let parent = $(this).attr("id").slice(9);
                handler.displaySearchStats(dictionary, "subtype", parent);
            });

            $("#listingStats").on("click", ".category-back-button", function() {
                handler.displaySearchStats(dictionary, "type", "Palabra", true);
            });

            $("#listingStats").on("mouseenter", ".category-clickable", function() {
                $(this).css({
                    "background-color": "black",
                    "color": "white"
                });
                $(this).children(".category-value").css("color", "white");
                $(this).children(".colorer").css("display", "none");
            });

            $("#listingStats").on("mouseleave", ".category-clickable", function() {
                $(this).css({
                    "background-color": "white",
                    "color": "black"
                });
                $(this).children(".category-value").css("color", "rgb(216, 13, 13)");
                $(this).children(".colorer").css("display", "block");
            });
        }

        //Reposiciona la ventana del tooltip y carga sus datos.
        loadTooltip(position, width, height, name, parent) {
            if (window.innerWidth >= 660) {
                $('#wordTooltip').html('');
                let cleanedName = name.replace(/<\/?[^>]+(>|$)/g, "");
                let retrievedWord = dictionary.find(function(word) {
                    return word.word_name.toLowerCase() === cleanedName.toLowerCase();
                });

                this.displayDictionary([retrievedWord], 1, 'wordTooltip', 0, 0);

                let windowHeight;
                let windowWidth;
                if (parent === 'document') {
                    windowHeight = document.documentElement.clientHeight;
                    windowWidth = document.documentElement.clientWidth;
                } else {
                    windowHeight = $(`#${parent}`).height();
                    windowWidth = $(`#${parent}`).width();
                }

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
                        
                    $('#wordTooltip').css({
                        'left': `calc(${position.left}px - ${tooltipWidth}px + 12px)`,
                        'margin-right': `calc(${width})`
                    });
                    $('#tooltipArrow').css({
                        'left': `calc(${position.left}px + 11px)`,
                        'margin-right': `calc(${width} - 3px)`,
                        'border-color': 'transparent transparent transparent black'
                    });
                }

                if (position.top <= (windowHeight / 2)) {
                    $('#wordTooltip').css('top', position.top - 15);
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

        //Colorea los links del índice de la ficha técnica.
        hoverIndexLink(link, color) {
            link.css("color", color);
            $(link).children('a').css("color", color);
        }

        //Adapta los aspectos visuales de la vista.
        changeListingView(view) {
            if (view === 'list') {
                $('#wordListing').css({
                    display: 'grid',
                    'justify-items': 'center',
                    'grid-template-columns': '1fr 1fr 1fr 1fr',
                    'grid-template-rows': 'repeat(13, 1fr)'
                });
            } else if (view === 'tree') {
                $('#wordListing').css({
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

            $('#wordSearch').val(this.dictionarySearch);
        }

        //Analiza variables que determinan una búsqueda en el diccionario.
        customizeSearch() {
            let language;
            let limit;

            if ($('.language:eq(0)').is(':checked')) { language = 'bal' }
            else if ($('.language:eq(1)').is(':checked')) { language = 'esp' }

            if ($('#perfect-match').is(':checked')) { limit = 1 }
            else { limit = 0 }dictionary

            this.searchWord($('#wordSearch').val(), language, limit);
        }

        //Redirecciona según string de búsqueda.
        searchWord(searchString, language, limit) {
            window.location = `/diccionario/${searchString}?lang=${language}&limit=${limit}`;
        }

        //Obtiene todos los valores actuales para determinada propiedad de un diccionario.
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
            $("#listingStats").append(`
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

            $("#listingStats").hide();
            $("#listingStats").html("");

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
                $("#listingStats").append(`
                    <div class="category-back">
                        <button class="category-back-button">← Atrás</button>
                    </div>
                `).fadeIn(300);
            }
        }

        //Busca el storage de favoritos y de configuración y crea uno vacío si no lo encuentra.
        checkLocalStorage() {
            if (localStorage.getItem('favoritesStorage') === null) {
                localStorage.setItem('favoritesStorage', '[]');
            }
            if (localStorage.getItem('config') === null) {
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

                $("#navLinks").css({
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
                    $("#navLinks").css({
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
                    $('#favoritesListing').append(`
                        <div id="favorite-${fav.id}" class="favorite-entry">
                            <img class="favorite-icon" src="/client/img/favorite.png" alt="fav">
                            <label class="favorite-title" onclick="handler.searchWord('${fav.name}', 'bal', 1)">${fav.name}</label>
                        </div>
                    `);
                });
            } else {
                $('#favoritesListing').append(`
                    <h3 class="no-favorites">Aún no hay favoritos agregados.</h3>
                `);
            }
        }

        //Filtra el diccionario completo según letra de listado.
        filterDictionary(dictionary, initialLetter) {
            let filteredDictionary = dictionary.filter(function(current) {
                return handler.normalizeText(current.word_name.charAt(0)) === initialLetter;
            });

            return filteredDictionary;
        } 

        //Renderiza los resultados de la query.
        displayDictionary(dictionary, limit, container, displayDelay, fadeDuration) {
            let dictionaryLimit = limit;

            if (this.pageView === "diccionario") {
                let searchLang = this.loadParam("lang");
                let cleanedSearch = this.normalizeText(this.dictionarySearch);
                let lowercasedSearch = this.dictionarySearch.toLowerCase();
                let filteredDictionary;

                if (searchLang === "bal" && dictionaryLimit === "0") {
                    filteredDictionary = dictionary.filter(function(current) {
                        let cleanedWordName = handler.normalizeText(current.word_name);

                        return cleanedWordName.includes(cleanedSearch);
                    });
                    
                } else if (searchLang === "bal" && dictionaryLimit === "1") {
                    filteredDictionary = dictionary.find(function(current) {
                        return current.word_name.toLowerCase() === lowercasedSearch;
                    });

                    if (filteredDictionary != undefined) {
                        filteredDictionary = [filteredDictionary];
                    }
                    
                } else if (searchLang === "esp" && dictionaryLimit === "0") {
                    filteredDictionary = dictionary.filter(function(current) {
                        let cleanedDefinition1 = handler.normalizeText(current.word_definition1);
                        let cleanedDefinition2 = handler.normalizeText(current.word_definition2);
                        let cleanedDefinition3 = handler.normalizeText(current.word_definition3);
                        let cleanedDefinition4 = handler.normalizeText(current.word_definition4);
                        let cleanedDefinition5 = handler.normalizeText(current.word_definition5);

                        return cleanedDefinition1.includes(cleanedSearch) ||
                               cleanedDefinition2.includes(cleanedSearch) ||
                               cleanedDefinition3.includes(cleanedSearch) ||
                               cleanedDefinition4.includes(cleanedSearch) ||
                               cleanedDefinition5.includes(cleanedSearch);
                    });

                } else if (searchLang === "esp" && dictionaryLimit === "1") {
                    let 
                    filteredDictionary = dictionary.find(function(current) {
                        return current.word_definition1.toLowerCase() === lowercasedSearch ||
                               current.word_definition2.toLowerCase() === lowercasedSearch ||
                               current.word_definition3.toLowerCase() === lowercasedSearch ||
                               current.word_definition4.toLowerCase() === lowercasedSearch ||
                               current.word_definition5.toLowerCase() === lowercasedSearch;
                    });

                    if (filteredDictionary != undefined) {
                        filteredDictionary = [filteredDictionary];
                    }
                }

                //Reemplaza el diccionario completo por las coincidencias.
                if (filteredDictionary == undefined) { filteredDictionary = []; }
                dictionary = filteredDictionary;
            }

            if (dictionary.length > 0) {
                if (limit == 0) {
                    dictionaryLimit = dictionary.length;
                    dictionary.sort((a, b) => (a.word_name > b.word_name) ? 1 : -1);
                }
    
                $("#foundWords").text("Resultados obtenidos: " + dictionary.length);
    
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
                        $('#wordListing').append(`
                            <label onclick='handler.searchWord("${word.word_name}", "bal", 1)' class='listed-word'>${word.word_name}</label>
                        `);
                    });
                    break;
                case "tree":
                    function createRootTree(root) {
                        //Busca la entrada de la raíz y agrega la palabra.
                        if ($(`#root-${root}`).length === 0) {
                            $('#wordListing').append(`
                                <ul class='root-tree' id='root-${root}' root-name='${root}'>
                                    <li class='root-tree-title'><label class='root-tree-title-label' onclick='handler.searchWord("${root}", "bal", 0)'>${root}</label>
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
                                        <label onclick='handler.searchWord("${word.word_name}", "bal", 1)'>${word.word_name}</label>
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
                                    <label onclick='handler.searchWord("${word.word_name}", "bal", 1)'>${word.word_name}</label>
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
                                    <label onclick='handler.searchWord("${word.word_name}", "bal", 1)'>${word.word_name}</label>
                                </li>
                            `);
                            
                            $(`#word-${word.word_root}`).closest('.root-tree').find('.root-amount').text(function(i, val) {
                                return parseInt(val) + 1;
                            });

                        //Sustantivos y verbos solo compuestos
                        } else if (currentSubtype.includes('compuesto')) {
                            createRootTree(word.word_root);

                            $(`#root-${word.word_root}`).find('.compositions').append(`
                                <li onclick='handler.searchWord("${word.word_name}", "bal", 1)' id='word-${word.word_name}' class='composed-word'>
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

        //Busca un index aleatorio y devuelve el objeto de la palabra.
        randomWord(dictionary) {
            let max = dictionary.length - 1;
            let randomIndex = Math.floor(Math.random() * (max - 0 + 1) + 0);

            return dictionary[randomIndex].word_name;
        }

        drawWorldMap() {
            var svgMapCountryNames = new svgMap({
                targetElementID: 'svgMapCountryNames',
                data: {
                  data: {
                    librishNaming: {
                        color: '#88e067'
                    }
                  },
                  applyData: 'librishNaming',
                  values: {
                    //Librish naming and full grammar
                    AR: { librishNaming: 1, librishGrammar: 1, librishVocabulary: 1, color: '#072e04' }, // Argentina
                    AU: { librishNaming: 1, librishGrammar: 1, librishVocabulary: 1, color: '#072e04' }, // Australia
                    FI: { librishNaming: 1, librishGrammar: 1 }, // Finland
                    JP: { librishNaming: 1, librishGrammar: 1, librishVocabulary: 1, color: '#072e04' }, // Japan
                    NL: { librishNaming: 1, librishGrammar: 1, librishVocabulary: 1, color: '#072e04' }, // Netherlands
                    KP: { librishNaming: 1, librishGrammar: 1 }, // North Korea
                    NO: { librishNaming: 1, librishGrammar: 1, librishVocabulary: 1, color: '#072e04' }, // Norway
                    RU: { librishNaming: 1, librishGrammar: 1 }, // Russia
                    KR: { librishNaming: 1, librishGrammar: 1 }, // South Korea
                    SE: { librishNaming: 1, librishGrammar: 1 }, // Sweden
                    FR: { librishNaming: 1, librishGrammar: 1 }, // France
                    IE: { librishNaming: 1, librishGrammar: 1 }, // Ireland
                    BY: { librishNaming: 1, librishGrammar: 1 }, // Belarus
                    GL: { librishNaming: 1, librishGrammar: 1, librishVocabulary: 1, color: '#072e04' }, // Greenland
                    IS: { librishNaming: 1, librishGrammar: 1, librishVocabulary: 1, color: '#072e04' }, // Iceland TODO: tierra de hielo
                    CH: { librishNaming: 1, librishGrammar: 1 }, // Switzerland TODO: tierra de los swiss
                    BE: { librishNaming: 1, librishGrammar: 1 }, // Belgium TODO: tierra de las Bélgicas
                    UA: { librishNaming: 1, librishGrammar: 1, librishVocabulary: 1, color: '#072e04' }, // Ukraine TODO: tierra de las Bélgicas
                    CZ: { librishNaming: 1, librishGrammar: 1 }, // Czech Republic TODO: tierra de los checos

                    //Only librish full grammar
                    GI: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Gibraltar
                    TT: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Trinidad and Tobago
                    WF: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Wallis and Futuna
                    VA: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Vatican City
                    GF: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // French Guiana
                    TF: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // French Southern Territories
                    CX: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Christmas Island
                    CK: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Cook Islands
                    CC: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Cocos Islands
                    FO: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Faroe Islands
                    TC: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Turks and Caicos Islands
                    EH: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Western Sahara
                    AI: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Anguilla
                    KY: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Cayman Islands
                    KI: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Kiribati
                    NF: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Norfolk Island
                    CA: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Canada
                    GY: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Guyana
                    US: { librishNaming: 0, librishGrammar: 1, librishVocabulary: 1, color: '#487a36' }, // USA TODO:
                    CW: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Curacao
                    RE: { librishNaming: 0, librishGrammar: 1, color: '#62f252' }, // Reunion

                    //Only librish naming
                    DE: { librishNaming: 1, librishGrammar: 0, color: '#62f252' }, // Germany
                    HU: { librishNaming: 1, librishGrammar: 0, color: '#62f252' }, // Hungary TODO: tierra de los magiares
                    PH: { librishNaming: 1, librishGrammar: 0, color: '#62f252' }, // Filipinas TODO: tierra de Felipe
                    RO: { librishNaming: 1, librishGrammar: 0, color: '#62f252' }, // Romania TODO: tierra de los romanos

                    //Neither librish naming nor full grammar, yet translated
                    PF: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // French Polynesia
                    IM: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Isle of Man
                    MH: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Marshall Islands
                    MP: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Northern Mariana Islands
                    MQ: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Martinique
                    YT: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Mayotte
                    GU: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Guam
                    FK: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Islas Malvinas
                    SR: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Surinam
                    AS: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // American Samoa
                    PN: { librishNaming: 0, librishGrammar: 0, color: '#95f590' }, // Pitcairn Islands
                  }
                },
                colorMin: '#E2E2E2',
                colorMax: '#487a36',
                colorNoData: '#E2E2E2',
                thresholdMax: 1,
                thresholdMin: 0,
                initialZoom: 1,
                initialPan: {
                  x: 0,
                  y: 0
                },
                mouseWheelZoomEnabled: true,
                mouseWheelZoomWithKey: true,
                onGetTooltip: function (tooltipDiv, countryID, countryValues) {
                  // Geting the list of countries
                  var countries = svgMapCountryNames.countries;
    
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
    
                  if (countryValues && countryValues.librishNaming == 1) {
                    innerHTML +=
                      '<div style="margin-bottom: 8px"><span style="color: #6d0; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✔</span>Nomenclatura compuesta libraterrense</div>';
                  } else {
                    innerHTML +=
                      '<div style="margin-bottom: 8px; color: #aaa"><span style="color: #f03; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✘</span>Nomenclatura compuesta libraterrense</div>';
                  }
                  
                  if (countryValues && countryValues.librishGrammar == 1) {
                    innerHTML +=
                      '<div style="margin-bottom: 8px"><span style="color: #6d0; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✔</span>Gramática nativa libraterrense</div>';
                  } else {
                    innerHTML +=
                      '<div style="margin-bottom: 8px; color: #aaa"><span style="color: #f03; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✘</span>Gramática nativa libraterrense</div>';
                  }

                  if (countryValues && countryValues.librishVocabulary == 1) {
                    innerHTML +=
                      '<div style="margin-bottom: 8px"><span style="color: #6d0; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✔</span>Vocabulario nativo libraterrense</div>';
                  } else {
                    innerHTML +=
                      '<div style="margin-bottom: 8px; color: #aaa"><span style="color: #f03; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✘</span>Vocabulario nativo libraterrense</div>';
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

        normalizeText(string) {
            return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        }

        convertCharactersToEntities(string) {
            let strToEntities = string;
            let characters = [
                //Tildes graves
                {char:"%C3%A0", entity:"&agrave"}, {char:"%C3%80", entity:"&Agrave"},
                {char:"%C3%A8", entity:"&egrave"}, {char:"%C3%88", entity:"&Egrave"},
                {char:"%C3%B2", entity:"&ograve"}, {char:"%C3%92", entity:"&Ograve"},
                {char:"%C3%B9", entity:"&ugrave"}, {char:"%C3%99", entity:"&Ugrave"},
                
                //Diéresis
                {char:"%C3%A4", entity:"&auml"}, {char:"%C3%84", entity:"&Auml"},
                {char:"%C3%AB", entity:"&euml"}, {char:"%C3%8B", entity:"&Euml"},
                {char:"%C3%B6", entity:"&ouml"}, {char:"%C3%96", entity:"&Ouml"},
                {char:"%C3%BC", entity:"&uuml"}, {char:"%C3%9C", entity:"&Uuml"},

                //I
                {char:"%C4%B5", entity:"&jcirc;"}, {char:"%C4%B4", entity:"&Jcirc;"},
                //O
                {char:"%C3%B8", entity:"&oslash"}, {char:"%C3%98", entity:"&Oslash"},
                //Espacio
                {char:"%20", entity:"&nbsp;"}
            ]

            for (let i = 0; i < characters.length; i++) {
                const element = characters[i];
                let replaceVal = new RegExp(element.char, "g");
                
                strToEntities = strToEntities.replace(replaceVal, element.entity);
            }

            return strToEntities;
        }

        decodeEntities(string) {
            let txt = document.createElement("textarea");
            
            txt.innerHTML = this.convertCharactersToEntities(string);
            return txt.value;
        }
    }

    handler = new Handler();
    handler.initialize(handler);
});
