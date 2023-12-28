<script setup>
import store from '../store';

defineProps({
  typeName: {
    type: String,
    required: true,
    default: 'Type'
  },
  typeCount: {
    type: Number,
    required: true,
    default: 0
  },
  subtypesData: {
    type: Array,
    required: false,
    default: []
  },
})
</script>

<template>
  <div :id="'category-' + typeName" class="category-entry category-clickable" @click="toggleSubtypesDisplay">
    <div class="colorer" :style="{ 'width': ((typeCount * 100) / wordsDictionary.length).toFixed(2) + '%' }"></div>
    <p class="category-title">{{ typeName }}</p>
    <p class="category-value">{{ typeCount }}</p>
    <p class="category-percentage">{{ ((typeCount * 100) / wordsDictionary.length).toFixed(2) + "%" }}</p>
  </div>

  <div v-show="displaySubtypes" v-for="(subtype, i) in subtypesData" :key="i" :id="'category-' + subtype.name" class="category-entry category-nonclickable">
    <div class="colorer" :style="{ 'width': ((subtype.count * 100) / wordsDictionary.length).toFixed(2) + '%' }"></div>
    <p class="category-title">{{ subtype.name }}</p>
    <p class="category-value">{{ subtype.count }}</p>
    <p class="category-percentage">{{ ((subtype.count * 100) / wordsDictionary.length).toFixed(2) + "%" }}</p>
  </div>
</template>

<script>
export default {
  emits: [

  ],
  data() {
    return {
      displaySubtypes: false
    }
  },
  computed: {
    wordsDictionary() {
      return store.getters.dictionary;
    },
  },
  methods: {
    toggleSubtypesDisplay() {
      this.displaySubtypes = !this.displaySubtypes;
    }
  }
}
</script>

<style scoped></style>
