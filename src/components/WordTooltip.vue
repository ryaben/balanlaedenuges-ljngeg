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
  }
});
</script>

<template>
  <div class='word-tooltip searched-word' :class="{ 'absolute-position': position.x !== 0 && position.y !== 0 }"
    :style="tooltipStyles">
    <div class='result-title'>
      <h2 class='word-name'>{{ wordData.word }}</h2>
      <FavoriteStar :word-data="wordData" :simple-mode="favoriteSimpleMode" />
    </div>
    <p class='word-root'>(en la raíz <i>{{ wordData.root }}</i>)</p>
    <p class='word-type'>{{ writeArray(wordData.types) }} ({{ writeArray(wordData.subtypes) }})</p>
    <p class='word-description'>{{ wordData.description }}</p>
    <hr>
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

</style>
