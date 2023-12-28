<script setup>
import WordTooltip from "../components/WordTooltip.vue";
import store from "../store";
</script>

<template>
  <section id="searchScreen">
    <div id="searchBox">
      <div id="specialCharacters">
        <label style="margin-left: 5px" class="special-character">à</label>
        <label class="special-character">è</label>
        <label class="special-character">ĵ</label>
        <label class="special-character">ò</label>
        <label class="special-character">ù</label>
        <label class="special-character">ä</label>
        <label class="special-character">ë</label>
        <label class="special-character">ö</label>
        <label class="special-character">ü</label>
        <label class="special-character">ø</label>
        <div id="languageSelection">
          <input
            id="language-bal"
            class="language"
            name="language"
            type="radio"
            checked
          />
          <label class="language-option" for="language-bal">
            <img src="/img/flag.png" alt="BAL" width="32" draggable="false" />
          </label>
          <input
            id="language-esp"
            class="language"
            name="language"
            type="radio"
          />
          <label class="language-option" for="language-esp">
            <img src="/img/flag2.png" alt="ESP" width="32" draggable="false" />
          </label>
        </div>
      </div>
      <input
        id="wordSearch"
        v-model="searchString"
        type="text"
        placeholder="Buscar una palabra..."
      />
      <div id="perfectMatchContainer">
        <label for="perfect-match">Resultado exacto</label>
        <input id="perfect-match" type="checkbox" name="perfect-match" />
      </div>
      <button id="searchButton" @click="search">Buscar</button>
    </div>
    <div id="searchResult">
      <p v-if="searchString == ''" class="no-search">
        En este diccionario libraterrense-español puede descubrir el significado
        de un vocablo en el idioma nacional, o buscar una palabra o frase en
        español para conocer una posible traducción. También podemos
        <span class="random-search-text">cargar una palabra al azar.</span>
      </p>

      <WordTooltip
        v-for="(word, i) in searchResult"
        :key="i"
        :position="{ y: 0, x: 0 }"
        :word-data="word"
        :favorite-simple-mode="true"
      />
    </div>
    <div v-show="searchString != ''" id="resultStats" class="results-bar">
      <p class="results-text"></p>
      <p class="last-update-text"></p>
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
      searchString: "",
      searchResult: [],
    };
  },
  computed: {
    wordsDictionary() {
      return store.getters.dictionary;
    },
  },
  methods: {
    search() {
      const that = this;

      this.searchResult = this.wordsDictionary.filter(function (word) {
        return word.word.toLowerCase().includes(that.searchString.toLowerCase());
      });
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
  min-height: 500px;
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
</style>
