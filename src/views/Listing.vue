<script setup>
import WordTooltip from '../components/WordTooltip.vue';
import ListingBottombar from '../components/ListingBottombar.vue';
import RootTree from '../components/RootTree.vue';
import store from '../store';
</script>

<template>
    <section class='listing-screen'>
        <div id='lettersBox'>
            <label v-for="(letter, i) in lettersArray" :key="i" :id="'letter' + letter" class='letter-listing'
                :class="{ 'letter-selected': activatedLetter === letter }" @click="activateLetter(letter)">{{ letter
                }}</label>
        </div>

        <div class="loading-container" v-show="wordsDictionary.length === 0">
            <img src="/img/loading.gif" alt="Loading">
            <label>Cargando base de datos, por favor espere...</label>
        </div>

        <div class='info-listing' id='wordListing' v-show="wordsDictionary.length > 0">
            <WordTooltip v-if="tooltipDisplay" :word-data="tooltipWordData" :position="{ y: mousePosY, x: mousePosX }"
                :favorite-simple-mode="true" />

            <p class='letter-stats'><b>{{ activeLetterRoots.length }} palabras</b> comienzan con {{ activatedLetter }},
                dentro de <b>{{ filteredVisibleRoots.length }} raíces</b>.</p>
            <RootTree v-for="(root, i) in filteredVisibleRoots" :key="componentKey" :root-title="root" :displayed="false"
                :active-letter="activatedLetter" @toggle-tooltip="toggleTooltipDisplay" @tooltip-data="sendTooltipData" />
        </div>
        <ListingBottombar />
    </section>
</template>

<script>
export default {
    components: {
        WordTooltip,
        ListingBottombar
    },
    data() {
        return {
            lettersArray: ['A', 'B', 'D', 'E', 'F', 'G', 'J', 'K', 'L', 'O', 'R', 'S', 'T', 'U', 'W'],
            activatedLetter: 'A',
            tooltipWordData: {
                word: 'Placeholder', root: 'Placeholder', description: 'Placeholder',
                types: [''], subtypes: [''], definitions: [''], examples: ['']
            },
            filteredVisibleRoots: [],
            tooltipDisplay: false,
            windowHeight: window.innerHeight,
            mousePosX: 0,
            mousePosY: 0,
            componentKey: 0
        }
    },
    computed: {
        wordsDictionary() {
            return store.getters.dictionary;
        },
        activeLetterRoots() {
            return this.wordsDictionary.filter(el => this.normalizeString(el.root.charAt(0)) === this.activatedLetter);
        }
    },
    methods: {
        filterVisibleRoots() {
            const that = this;
            let visibleRoots = [];

            this.activeLetterRoots.forEach(function (word) {
                let wordTypes = that.writeArray(word.types);
                let wordSubtypes = that.writeArray(word.subtypes);

                if (visibleRoots.find(el => el === word.root) === undefined) {
                    if ((wordTypes.includes('Adverbio') || wordTypes.includes('Interjección') || wordTypes.includes('Adposición') || wordTypes.includes('Pronombre') || wordTypes.includes('Artículo') || wordTypes.includes('Conjunción') || wordTypes.includes('Contracción') || wordSubtypes.includes('común') || wordSubtypes.includes('exceptuado') || wordSubtypes.includes('extranjerismo') || (wordSubtypes.includes('compuesto') && word.hasParent === false)) && !wordTypes.includes('Adjetivo')) {
                        visibleRoots.push(word.root);
                    }
                }
            });

            return this.filteredVisibleRoots = visibleRoots.sort((a, b) => (a > b) ? 1 : -1);
        },
        activateLetter(newLetter) {
            this.activatedLetter = newLetter;
            this.filterVisibleRoots();
            this.forceRerender();
        },
        normalizeString(string) {
            return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        },
        writeArray(array) {
            let wordArray = '';

            for (let i = 0; i < array.length; i++) {
                const element = array[i];

                if (i === 0) {
                    wordArray += element;
                } else {
                    wordArray += `, ${element}`;
                }
            }

            return wordArray;
        },
        onResize() {
            this.windowHeight = window.innerHeight;
        },
        toggleTooltipDisplay(incomingTooltipDisplayValue) {
            this.tooltipDisplay = incomingTooltipDisplayValue;
        },
        sendTooltipData(incomingWordData) {
            this.tooltipWordData = incomingWordData;
        },
        forceRerender() {
            this.componentKey += 1;
        }
    },
    mounted() {
        document.addEventListener("mousemove", (event) => {
            this.mousePosX = event.clientX;
            this.mousePosY = event.clientY;
        });
        window.addEventListener('resize', this.onResize);

        this.filterVisibleRoots();
    },
}
</script>

<style scoped>
#lettersBox {
    display: flex;
    justify-content: space-between;
    font-size: 1.3em;
    padding: 9px 5% 8px 5%;
    width: 90%;
    border-bottom: 2px solid black;
    border-top-left-radius: 8px;
    background-color: lightgray;
}

.letter-listing {
    text-align: center;
    cursor: pointer;
    width: 4%;
    border-radius: 4px;
    background-color: transparent;
    color: black;
}

.letter-listing:hover {
    background-color: darkslategrey;
    color: white;
}

.letter-listing.letter-selected {
    background-color: black;
    color: white;
}

.listing-screen {
    max-height: 97.5vh;
}

#lettersBox {
    display: flex;
    justify-content: space-between;
    font-size: 1.3em;
    padding: 9px 5% 8px 5%;
    width: 90%;
    border-bottom: 2px solid black;
    border-top-left-radius: 8px;
    background-color: lightgray;
}

.info-listing,
.listing-stats,
#searchResult {
    overflow-y: auto;
    padding: 5px;
    height: 100%;
}

.letter-stats {
    width: auto;
    text-align: center;
    padding-top: 0px;
    padding-bottom: 5px;
    margin: 0 4px 8px 4px;
    border-bottom: 1px solid black;
    font-size: 15px;
}
</style>
