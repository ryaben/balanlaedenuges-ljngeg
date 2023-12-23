<script setup>
import RootWord from './RootWord.vue';
import ComposedWord from './ComposedWord.vue';
import dummyWords from '../assets/dummyWords';
import store from '../store';

defineProps({
  rootTitle: {
    type: String,
    required: true,
    default: "root"
  }
})
</script>

<template>
  <ul class='root-tree' :id="'root-' + rootTitle" :ref="'root' + rootTitle" :root-name="rootTitle">
    <li class='root-tree-title' @click="toggleRootDisplay">
      <label class='root-tree-title-label'>{{ rootTitle }}</label>
      <div class='root-extra'>
        <div class='root-amount-group'>
          <label class='root-amount'>{{ wordCount }}</label>
          <label> palabra(s)</label>
        </div>
      </div>
    </li>
    <RootWord v-for="(word, i) in commonWordsWithThisRoot" :key="i" :word-data="word" :displayed="displayed"
      @toggle-tooltip="toggleTooltipDisplay" @tooltip-data="sendTooltipData" />
    <ul class='compositions' v-show="displayed">
      <ComposedWord v-for="(word, i) in composedWordsWithThisRoot" :key="i" :word-data="word" :displayed="displayed"
        @toggle-tooltip="toggleTooltipDisplay" @tooltip-data="sendTooltipData" />
      <ComposedWord v-for="(dummy, i) in allDummiesWithThisRoot" :key="i" :word-data="dummy" :displayed="displayed"
        :is-dummy="true" />
    </ul>
  </ul>
</template>

<script>
export default {
  components: {
    RootWord,
    ComposedWord
  },
  emits: [
    'toggle-tooltip', 'tooltip-data'
  ],
  data() {
    return {
      displayed: false,
      wordCount: 0
    }
  },
  computed: {
    wordsDictionary() {
      return store.getters.dictionary;
    },
    dummiesDictionary() {
      return dummyWords;
    },
    allDummiesWithThisRoot() {
      return this.dummiesDictionary.filter(el => el.root === this.rootTitle).sort();
    },
    allWordsWithThisRoot() {
      return this.wordsDictionary.filter(el => el.root === this.rootTitle).sort();
    },
    commonWordsWithThisRoot() {
      const that = this;
      let applicableWords = [];

      this.allWordsWithThisRoot.forEach(function (word) {
        let wordTypes = that.writeArray(word.types);
        let wordSubtypes = that.writeArray(word.subtypes);

        if ((wordTypes.includes('Adverbio') || wordTypes.includes('Interjección') || wordTypes.includes('Adposición') || wordTypes.includes('Pronombre') || wordTypes.includes('Artículo') || wordTypes.includes('Conjunción') || wordTypes.includes('Contracción') || wordSubtypes.includes('común') || wordSubtypes.includes('exceptuado') || wordSubtypes.includes('extranjerismo')) && !wordTypes.includes('Adjetivo')) {
          applicableWords.push(word)
        }
      });

      return applicableWords.sort();
    },
    composedWordsWithThisRoot() {
      const that = this;
      let applicableWords = [];

      this.allWordsWithThisRoot.forEach(function (word) {
        let wordSubtypes = that.writeArray(word.subtypes);

        if (wordSubtypes.includes('compuesto') && (!wordSubtypes.includes('diminutivizado') && !wordSubtypes.includes('aumentativizado') && !wordSubtypes.includes('colectivizado') && !wordSubtypes.includes('ampliado') && !wordSubtypes.includes('anulado'))) {
          applicableWords.push(word)
        }
      });

      return applicableWords.sort();
    }
  },
  methods: {
    toggleRootDisplay() {
      this.displayed = !this.displayed;
    },
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
    sendTooltipData(value) {
      this.$emit('tooltip-data', value);
    }
  },
  mounted() {
    const that = this;

    this.$nextTick(function () {
      const thisRoot = document.getElementById('root-' + this.rootTitle);
      const rootWords = thisRoot.getElementsByClassName('root-word');
      const childWords = thisRoot.getElementsByClassName('child-word');
      const composedWords = thisRoot.getElementsByClassName('composed-word');

      that.wordCount = rootWords.length + childWords.length + composedWords.length;
    });
  },
  beforeUnmount() {
    this.wordCount = 0;
  }
}
</script>

<style scoped>
.root-tree {
  list-style: none;
  border: 2px darkred solid;
  border-radius: 4px;
  margin-block-end: 0;
  margin-block-start: 0;
  padding-inline-start: 0;
  margin: 4px;
}

.root-tree.guide {
  margin-left: 25px;
  margin-right: 25px;
}

.root-tree-title {
  display: flex;
  justify-content: space-between;
  padding: 3px;
  min-height: 22px;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
}

.root-tree-title.guide {
  font-style: normal;
}

.root-tree-title:hover {
  background-color: black;
  color: white;
  transition: 200ms;
  cursor: pointer;
}

.root-tree-title-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.root-tree-title-label:not(.guide):hover {
  background-color: red;
}

.root-extra {
  display: flex;
}

.root-amount-group {
  font-style: normal;
  font-weight: normal;
}

.compositions {
  padding-inline-start: 0px;
  /* border-top: 2px dashed grey; */
}
</style>
