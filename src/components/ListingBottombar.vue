<script setup>

</script>

<template>
  <div id='listingLowbar'>
    <div id='statsBar'>
      <div id='tabBtns'>
        <router-link class='tab-btn router-link' :to="{ name: 'Listing' }">Listado</router-link>
        <router-link class='tab-btn router-link' :to="{ name: 'Favorites' }">Favoritos</router-link>
        <router-link class='tab-btn router-link' :to="{ name: 'Statistics' }">Estadísticas</router-link>
      </div>
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
#listingLowbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-top: 2px solid black;
  border-bottom-left-radius: 8px;
  padding: 10px;
}

#statsBar {
  display: flex;
  align-items: center;
  justify-content: center;
}

#tabBtns {
  display: flex;
}
</style>
