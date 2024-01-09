<script setup>
import ChildWord from './ChildWord.vue';
import store from '../store';

defineProps({
  wordData: {
    type: Object,
    required: true,
    default: {}
  },
  displayed: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <ul class='root-word' :id="'word-' + wordData.word" :word-type="writeArray(wordData.types)" :word-name="wordData.word">
    <li v-show="displayed" class='root-word-title'>
      <label @mouseenter="sendTooltipData" @mousemove="toggleTooltipDisplay(true)"
        @mouseout="toggleTooltipDisplay(false)">{{ wordData.word }}</label>
    </li>
    <ChildWord v-show="displayed" v-for="(child, i) in childWordsWithThisRoot" :key="i" :word-data="child"
      @toggle-tooltip="toggleChildTooltip" @tooltip-data="sendChildTooltipData" />
  </ul>
</template>

<script>
export default {
  emits: [
    'toggle-tooltip', 'tooltip-data'
  ],
  components: {
    ChildWord
  },
  data() {
    return {

    }
  },
  computed: {
    wordsDictionary() {
      return store.getters.dictionary;
    },
    allWordsWithThisRoot() {
      return this.wordsDictionary.filter(el => el.root === this.wordData.word).sort();
    },
    childWordsWithThisRoot() {
      const that = this;
      let applicableWords = [];

      this.allWordsWithThisRoot.forEach(function (word) {
        let wordTypes = that.writeArray(word.types);
        let wordSubtypes = that.writeArray(word.subtypes);

        if (((wordTypes.includes('Sustantivo') || wordTypes.includes('Verbo')) && (wordSubtypes.includes('diminutivizado') || wordSubtypes.includes('aumentativizado') || wordSubtypes.includes('colectivizado') || wordSubtypes.includes('ampliado') || wordSubtypes.includes('anulado'))) || (wordTypes.includes('Adjetivo') && !wordSubtypes.includes('compuesto'))) {
          applicableWords.push(word)
        }
      });

      return applicableWords.sort();
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
    },
    toggleTooltipDisplay(value) {
      this.$emit('toggle-tooltip', value);
    },
    sendTooltipData() {
      this.$emit('tooltip-data', this.wordData);
    },
    toggleChildTooltip(incomingValue) {
      this.$emit('toggle-tooltip', incomingValue);
    },
    sendChildTooltipData(incomingWordData) {
      this.$emit('tooltip-data', incomingWordData);
    }
  }
}
</script>

<style scoped>
.root-word-title label {
  cursor: help;
}
</style>
