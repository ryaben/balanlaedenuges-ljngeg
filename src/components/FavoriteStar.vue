<script setup>
defineProps({
  wordData: {
    type: Object,
    required: true,
    default: {},
  },
  simpleMode: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div
    :id="'favorite-' + wordData.id"
    class="favorite-entry"
    :class="{ 'extended-mode': simpleMode === false }"
  >
    <img
      class="favorite-icon"
      :src="iconSource"
      alt="Favorite"
      @click="toggleFavorite"
    />
    <label v-if="simpleMode === false" class="favorite-title">{{
      wordData.word
    }}</label>
  </div>
</template>

<script>
import favoriteIcon from '/img/favorite.png';
import nonFavoriteIcon from '/img/non-favorite.png';

export default {
  emits: [],
  data() {
    return {
      iconSource: ""
    };
  },
  computed: {},
  methods: {
    toggleFavorite() {
      let storage = JSON.parse(localStorage.getItem("favoritesStorage"));

      if (storage.find((el) => el.id === this.wordData.id) === undefined) {
        storage.push({
          id: this.wordData.id,
          word: this.wordData.word,
        });
        this.setLocalStorage(storage);
        this.updateIconSource(favoriteIcon);

      } else {
        const that = this;
        let filteredStorage = storage.filter(function (element) {
          return element.id !== that.wordData.id;
        });
        this.setLocalStorage(filteredStorage);
        this.updateIconSource(nonFavoriteIcon);
      }
    },
    setLocalStorage(value) {
      localStorage.setItem("favoritesStorage", JSON.stringify(value));
    },
    updateIconSource(condition) {
      this.iconSource = condition;
    }
  },
  mounted() {
    let storage = JSON.parse(localStorage.getItem("favoritesStorage"));

    if (storage.find((el) => el.id === this.wordData.id) === undefined) {
      this.updateIconSource(nonFavoriteIcon);
    } else {
      this.updateIconSource(favoriteIcon);
    }
  }
};
</script>

<style scoped>
.favorite-entry.extended-mode {
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgrey;
}

.favorite-title {
  margin: 2px;
}
.favorite-title:hover {
  background-color: red;
  color: white;
  cursor: pointer;
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
</style>
