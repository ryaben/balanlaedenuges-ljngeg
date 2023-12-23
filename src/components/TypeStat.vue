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
  }
})
</script>

<template>
  <div :id="'category-' + typeName" class="category-entry category-clickable">
    <div class="colorer" :style="{ 'width': ((typeCount * 100) / wordsDictionary.length).toFixed(2) + '%' }"></div>
    <p class="category-title">{{ typeName }}</p>
    <p class="category-value">{{ typeCount }}</p>
    <p class="category-percentage">{{ ((typeCount * 100) / wordsDictionary.length).toFixed(2) + "%" }}</p>
  </div>
</template>

<script>
export default {
  emits: [

  ],
  data() {
    return {

    }
  },
  computed: {
    wordsDictionary() {
      return store.getters.dictionary;
    },
  },
  methods: {
    toggleTooltipDisplay(value) {
      this.$emit('toggle-tooltip', value);
    },
    sendTooltipData() {
      this.$emit('tooltip-data', this.wordData);
    }
  }
}
</script>

<style scoped></style>
