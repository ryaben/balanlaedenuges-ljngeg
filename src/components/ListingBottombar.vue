<script setup>

</script>

<template>
  <div id='listingLowbar'>
    <div id='statsBar'>
      <div id='tabBtns'>
        <router-link class='tab-btn router-link' :to="{ name: 'Dictionary' }">Buscador</router-link>
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

@media only screen and (max-width: 860px) {
  #listingLowbar {
    flex-direction: column;
  }
}

@media only screen and (max-width: 719px) {
  .tab-btn {
    width: 105px;
  }
}

@media only screen and (max-width: 659px) {
  #tabBtns {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .tab-btn {
    width: -moz-fit-content;
    width: fit-content;
  }
}
</style>
