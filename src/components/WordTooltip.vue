<script setup>
import FavoriteStar from './FavoriteStar.vue';

defineProps({
  wordData: {
    type: Object,
    required: true,
    default: {}
  },
  position: {
    type: Object,
    required: false,
    default: {
      y: 0,
      x: 0
    }
  },
  favoriteSimpleMode: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <div class='word-tooltip searched-word' :style="tooltipStyles">
    <div class='result-title'>
      <h2 class='word-name'>{{ wordData.word }}</h2>
      <FavoriteStar :word-data="wordData" :simple-mode="favoriteSimpleMode" />
    </div>
    <p class='word-root'>(en la raíz <i>{{ wordData.root }}</i>)</p>
    <p class='word-type'>{{ writeArray(wordData.types) }} ({{ writeArray(wordData.subtypes) }})</p>
    <p class='word-description'>{{ wordData.description }}</p>
    <hr style='border-top: 1px solid black;'>
    <p style='font-weight: bold;'>Acepciones:</p>
    <ol class='word-meanings'>
      <div v-for="i in wordData.definitions.length" :key="i">
        <li class="word-meaning">{{ wordData.definitions[i - 1] }}</li>
        <ul style="padding: 0;">
          <li class="word-example"><i>{{ wordData.examples[i - 1] }}</i></li>
        </ul>
      </div>
    </ol>
  </div>
</template>

<script>
export default {
  components: {
    FavoriteStar
  },
  data() {
    return {

    }
  },
  computed: {
    tooltipStyles() {
      return {
        '--tooltip-top': `${this.position.y}px`,
        '--tooltip-left': `${this.position.x}px`
      }
    }
  },
  methods: {
    writeArray(array) {
      let wordArray = '';

      for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (i === 0) {
          wordArray += element
        } else {
          wordArray += `, ${element}`
        }
      }

      return wordArray;
    }
  }
}
</script>

<style scoped>
.word-tooltip {
  position: absolute;
  background-color: white;
  border: solid 1px black;
  z-index: 1;
  width: 500px;
  padding: 0;
  top: var(--tooltip-top);
  left: var(--tooltip-left);
}

.word-tooltip.searched-word {
  padding: 16px;
  border-radius: 6px;
  margin: 8px;
}

.result-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.type-name,
.subtype-name {
  margin: 10px 0 5px 0;
}

.word-meaning {
  margin: 12px auto 5px auto;
  padding-left: 4px;
}

.definition-paratext {
  font-weight: bold;
  text-decoration: underline;
}

.word-example {
  margin: 0;
  font-style: italic;
  list-style: none;
  padding-left: 4px;
}

.word-description {
  margin: 0 auto 1em auto;
}

.word-type {
  display: flex;
  align-items: center;
  margin: 0.7em auto 0.4em auto;
}

.word-name {
  display: flex;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  justify-content: flex-start;
  align-items: flex-end;
}

.favorite-icon {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

li .favorite-icon {
  width: 15px;
  height: 15px;
}

.no-favorites {
  font-size: 20px;
  margin: 15px auto 0 auto;
}

.word-root {
  font-size: 0.8em;
  margin-top: 3px;
  margin-bottom: 12px;
}

ol.word-meanings {
  margin-bottom: 0;
  padding-inline-start: 1em;
  list-style-type: decimal;
}

li.word-meaning::marker {
  font-weight: bold;
  color: red;
  margin-right: 3px;
}
</style>
