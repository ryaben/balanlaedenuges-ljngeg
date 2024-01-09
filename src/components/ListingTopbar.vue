<script setup>
import store from '../store';

defineProps({
  letters: {
    type: Array,
    required: true,
    default: ["A"]
  },
  activeLetter: {
    type: String,
    required: true,
    default: "A"
  }
})
</script>

<template>
  <div id='lettersBox'>
    <label v-for="(letter, i) in letters" :key="i" :id="'letter' + letter" class='letter-listing'
      :class="{ 'letter-selected': activeLetter === letter }"
      @click="activateLetter(letter); filterWordsByLetter(letter);">{{ letter }}</label>
  </div>
</template>

<script>
export default {
  computed: {
    wordsDictionary() {
      return store.getters.dictionary;
    }
  },
  methods: {
    activateLetter(letter) {
      this.$emit('letter-change', letter);
    },
    filterWordsByLetter(letter) {
      const that = this;

      this.wordsDictionary.forEach(function(element) {
        if (that.normalizeString(element.root.charAt(0)) === letter) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      })
    },
    normalizeString(string) {
      return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
  }
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
</style>
