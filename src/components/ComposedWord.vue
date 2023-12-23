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
  },
  isDummy: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <li :id="'word-' + wordData.word" class='composed-word'>
    <label :class="{ 'dummy-word': isDummy }" @mouseenter="sendTooltipData" @mousemove="toggleTooltipDisplay(true)"
      @mouseout="toggleTooltipDisplay(false)">{{ wordData.word }}</label>
  </li>
  <ChildWord v-show="displayed" v-for="(child, i) in composedChildWordsWithThisRoot" :key="i" :word-data="child"
    @toggle-tooltip="toggleChildTooltip" @tooltip-data="sendChildTooltipData" />
</template>

<script>
export default {
  components: {
    ChildWord
  },
  emits: [
    'toggle-tooltip', 'tooltip-data'
  ],
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
    composedChildWordsWithThisRoot() {
      const that = this;
      let applicableWords = [];

      this.allWordsWithThisRoot.forEach(function (word) {
        let wordTypes = that.writeArray(word.types);
        let wordSubtypes = that.writeArray(word.subtypes);

        if (wordSubtypes.includes('compuesto') && (wordSubtypes.includes('diminutivizado') || wordSubtypes.includes('aumentativizado') || wordSubtypes.includes('colectivizado') || wordSubtypes.includes('ampliado') || wordSubtypes.includes('anulado')) || wordTypes.includes('Adjetivo')) {
          applicableWords.push(word);
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
.composed-word {
  color: darkslategrey;
}

.composed-word label {
  cursor: help;
}

.dummy-word {
  color: gray;
  text-decoration: line-through;
  pointer-events: none;
}
</style>
