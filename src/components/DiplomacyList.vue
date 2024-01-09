<script setup>
defineProps({
  diplomaticEntries: {
    type: Array,
    required: true,
    default: [
      {
        flag: 'flag.png',
        partnerName: 'Gran Ducado de Libraterra',
        partnerLink: 'http://balanlaedenug.net.ar/',
        relation: 'Tratado de Reconocimiento Propio',
        accessText: 'Descargar',
        accessLink: 'http://balanlaedenug.net.ar/'
      }
    ]
  }
})
</script>

<template>
  <div class="diplomacy-list-container">
    <div v-for="(entry, i) in diplomaticEntries" :key="i" class="diplomatic-entry">
      <img class="foreign-logo" :src="'/img/' + entry.flag" alt="Flag">
      <label class="foreign-name"><a :href="entry.partnerLink" target="_blank">{{ entry.partnerName }}</a></label>
      <label class="foreign-status">{{ entry.relation }}</label>
      <label class="foreign-document"><a :href="entry.accessLink" target="_blank">{{ entry.accessText }}</a></label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.diplomacy-list-container {
  display: flex;
  flex-direction: column;
  margin: 0 0 25px 0;
  padding: 10px;
  width: auto;
  border: 2px solid darkgrey;
  border-radius: 8px;
}

.diplomatic-entry {
  display: grid;
  text-align: center;
  align-items: center;
  width: auto;
  grid-template-columns: 13% 30% 40% 17%;
  grid-row-gap: 10px;
  margin-bottom: 10px;
}

.diplomatic-entry:last-child {
  margin-bottom: 0;
}

.foreign-logo {
  width: 100%;
  min-width: 32px;
  max-width: 72px;
  height: 45px;
  border: 1px solid black;
}

.foreign-name,
.foreign-status,
.foreign-document {
  font-size: 15px;
}

.foreign-document {
  font-weight: bold;
}

@media only screen and (max-width: 470px) {

  .foreign-name,
  .foreign-status,
  .foreign-document {
    font-size: 12px;
  }
}
</style>
