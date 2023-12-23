<script setup>
defineProps({
  wordData: {
    type: Object,
    required: true,
    default: {}
  }
})
</script>

<template>
  <li class='child-word'>
    <label @mouseenter="sendTooltipData" @mousemove="toggleTooltipDisplay(true)"
      @mouseout="toggleTooltipDisplay(false)">{{ wordData.word }}</label>
  </li>
</template>

<script>
export default {
  emits: [
    'toggle-tooltip', 'tooltip-data'
  ],
  data() {
    return {

    }
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

<style scoped>
.child-word {
  color: rgb(212, 16, 16);
  padding: 0;
  margin: 0;
}

.child-word label {
  cursor: help;
}

.child-word::before {
  content: "║ ╟ ";
}

.child-word::marker {
  content: '';
  display: none;
}
</style>
