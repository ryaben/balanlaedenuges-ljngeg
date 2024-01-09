<script setup>
import WordTooltip from "../components/WordTooltip.vue";
import store from "../store";
import { notify } from "@kyvg/vue3-notification";
</script>

<template>
  <section id="searchScreen" :class="{ 'vertical-center': wordsDictionary.length === 0 }">
    <div class="loading-container" v-show="wordsDictionary.length === 0">
      <img src="/img/loading.gif" alt="Loading">
      <label>Cargando base de datos, por favor espere...</label>
    </div>

    <div v-if="wordsDictionary.length > 0" id="searchBox">
      <div id="specialCharacters">
        <label style="margin-left: 5px" class="special-character" @click="writeCharacter">à</label>
        <label class="special-character" @click="writeCharacter">è</label>
        <label class="special-character" @click="writeCharacter">ĵ</label>
        <label class="special-character" @click="writeCharacter">ò</label>
        <label class="special-character" @click="writeCharacter">ù</label>
        <label class="special-character" @click="writeCharacter">ä</label>
        <label class="special-character" @click="writeCharacter">ë</label>
        <label class="special-character" @click="writeCharacter">ö</label>
        <label class="special-character" @click="writeCharacter">ü</label>
        <label class="special-character" @click="writeCharacter">ø</label>
        <div id="languageSelection">
          <input v-model="searchLanguage" id="language-bal" class="language" name="language" type="radio"
            value="balanlaedenuges" />
          <label class="language-option" for="language-bal">
            <img src="/img/flag.png" alt="BAL" width="32" draggable="false" />
          </label>
          <input v-model="searchLanguage" id="language-esp" class="language" name="language" type="radio"
            value="spanish" />
          <label class="language-option" for="language-esp">
            <img src="/img/flag2.png" alt="ESP" width="32" draggable="false" />
          </label>
        </div>
      </div>
      <input id="wordSearch" v-model="searchString" type="text" placeholder="Buscar una palabra..." />
      <div id="perfectMatchContainer">
        <label for="perfect-match">Resultado exacto</label>
        <input v-model="perfectMatch" id="perfect-match" type="checkbox" name="perfect-match" />
      </div>
      <button id="searchButton" @click="search">Buscar</button>
    </div>
    <div v-if="wordsDictionary.length > 0" id="searchResult">
      <p v-show="!searchPerformed" class="no-search">
        En este diccionario libraterrense-español puede descubrir el significado
        de un vocablo en el idioma nacional, o buscar una palabra o frase en
        español para conocer una posible traducción. También podemos
        <span class="random-search-text" @click="randomSearch">cargar una palabra al azar.</span>
      </p>
      <div v-show="searchPerformed && searchResult.length === 0" class="empty-search">
        La búsqueda no arrojó resultados.
      </div>

      <WordTooltip v-for="(word, i) in searchResult" :key="i" :position="{ y: 0, x: 0 }" :word-data="word"
        :favorite-simple-mode="true" />
    </div>
    <div v-show="searchPerformed" id="resultStats" class="results-bar">
      <p class="results-text">Resultados obtenidos: <b>{{ searchResult.length }}</b></p>
      <button id="randomWord" class="portal-submit" @click="randomSearch">Palabra al azar</button>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    WordTooltip,
  },
  data() {
    return {
      searchPerformed: false,
      searchString: "",
      searchResult: [],
      searchLanguage: 'balanlaedenuges',
      perfectMatch: false
    };
  },
  computed: {
    wordsDictionary() {
      return store.getters.dictionary;
    },
  },
  methods: {
    search() {
      if (this.searchString.length < 3) {
        notify({
          title: "Cantidad mínima de caracteres no alcanzada",
          text: "Necesita ingresar al menos tres (3) caracteres para iniciar una consulta.",
          type: "warning"
        });
      } else {
        const that = this;
        const normalizedSearch = this.normalizeString(this.searchString.toLowerCase());

        this.searchPerformed = true;

        if (this.searchLanguage === "spanish") {
          let spanishResult = []

          this.wordsDictionary.forEach(function (word) {
            word.definitions.forEach(function (definition) {
              const normalizedDefinition = that.normalizeString(definition.toLowerCase());

              if (!that.perfectMatch && normalizedDefinition.includes(normalizedSearch)) {
                spanishResult.push(word);
              } else if (that.perfectMatch && normalizedDefinition === normalizedSearch) {
                spanishResult.push(word);
              }
            });
          });

          this.searchResult = spanishResult;

        } else if (this.searchLanguage === "balanlaedenuges") {
          this.searchResult = this.wordsDictionary.filter(function (word) {
            const normalizedWord = that.normalizeString(word.word.toLowerCase());
            if (!that.perfectMatch) {
              return normalizedWord.includes(normalizedSearch);
            } else {
              return normalizedWord === normalizedSearch;
            }
          });

        }

        this.searchResult.sort((a, b) => (a.word > b.word) ? 1 : ((b.word > a.word) ? -1 : 0));

        notify({
          title: "Solicitud completada",
          text: `La búsqueda ha devuelto el/los ${that.searchResult.length} resultado(s) coincidente(s) con el criterio.`,
          type: "success"
        });
      }
    },
    randomSearch() {
      const max = this.wordsDictionary.length - 1;
      const randomIndex = Math.floor(Math.random() * (max - 0 + 1) + 0);

      this.searchLanguage = 'balanlaedenuges';
      this.searchString = this.wordsDictionary[randomIndex].word;
      this.perfectMatch = true;
      this.search();
    },
    writeCharacter(event) {
      this.searchString += event.target.innerHTML;
    },
    normalizeString(string) {
      return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },
  },
};
</script>

<style scoped>
#searchScreen {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  min-height: 353px;
}

#searchScreen.vertical-center {
  justify-content: center;
}

#searchBox {
  display: flex;
  justify-content: space-around;
  padding: 1em;
  background-color: lightgrey;
  border-bottom: 2px solid black;
  border-top-left-radius: 8px;
}

#specialCharacters {
  display: flex;
  align-items: center;
  min-width: 240px;
  padding: 6px 2px 6px 2px;
  margin-right: 15px;
  border: 1px solid darkgrey;
  background-color: white;
}

#languageSelection {
  display: flex;
  align-items: center;
  border-left: 1px solid grey;
  margin-left: 5px;
}

#wordSubscreen {
  display: flex;
  justify-content: center;
}

#wordSearch {
  width: 48%;
  font-size: 1.1em;
  border: 1px solid darkgray;
  border-right: none;
}

#perfectMatchContainer {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: white;
  border: 1px solid darkgray;
  border-left: 1px dashed darkgray;
  margin-right: 15px;
  padding-right: 5px;
}

#perfectMatchContainer label {
  font-size: 0.7em;
}

#searchButton {
  width: 25%;
  font-size: 1.1em;
  background-color: darkgrey;
}

#searchResult {
  min-height: 244px;
}

.special-character {
  font-size: 1.2em;
  margin: auto 1.5px auto 1.5px;
}

.special-character:hover {
  background-color: red;
  color: white;
  cursor: pointer;
}

.language-option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.language-option img {
  border-radius: 4px;
}

.result-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p.no-search {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin: 12px 10% 8px 10%;
}

.random-search-text {
  color: red;
  cursor: pointer;
}

.results-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lightgrey;
  min-height: calc(6vh - 2px);
  padding-left: 15px;
  padding-right: 10px;
  border-top: 2px solid black;
  border-bottom-left-radius: 6px;
}

.results-text {
  font-size: 15px;
  margin: 0px;
}

.searched-word,
.empty-search {
  padding: 1em;
  border: 1px dashed grey;
  border-radius: 6px;
  margin: 13px;
}

.empty-search {
  text-align: center;
}

#randomWord {
  width: 20%;
  max-width: 150px;
  margin: 5px 0 5px 0;
  min-height: 35px;
}

/* Tooltip */

.word-tooltip.searched-word {
  width: auto;
  border: 1px dashed grey;
  margin: 13px;
}

@media only screen and (max-width: 860px) {
  #searchBox {
    padding: 0.6em;
  }

  #specialCharacters {
    min-width: 108px;
    padding: 6px 6px 6px 2px;
    margin-right: 8px;
  }

  #perfectMatchContainer {
    margin-right: 8px;
  }

  #languageSelection {
    border-left: none;
    margin-left: 0px;
  }

  .special-character {
    display: none;
  }
}

@media only screen and (max-width: 659px) {
  #searchResult {
    overflow-y: scroll;
  }

  #searchBox {
    flex-wrap: wrap;
  }

  #specialCharacters {
    width: 100%;
    justify-content: center;
    padding: 5px 0 5px 0;
    margin-right: 0px;
    margin-bottom: 6px;
  }

  .special-character {
    display: block;
    font-size: 1.5em;
    margin: auto 4px auto 4px;
  }

  #languageSelection {
    border-left: 2px solid gray;
    margin-left: 3px;
  }

  label.language-option img {
    width: 36px;
  }

  #wordSearch {
    height: 37px;
  }

  #perfectMatchContainer {
    width: 22%;
    margin-right: auto;
    justify-content: center;
  }
}
</style>
