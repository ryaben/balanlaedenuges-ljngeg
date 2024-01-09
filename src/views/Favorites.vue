<script setup>
import ListingBottombar from "../components/ListingBottombar.vue";
import FavoriteStar from "../components/FavoriteStar.vue";
</script>

<template>
  <section class="listing-screen">
    <div class="info-listing" id="favoritesListing">
      <h3 v-if="gatherFavorites.length == 0" class="no-favorites">Aún no hay favoritos agregados.</h3>
      <FavoriteStar v-if="gatherFavorites" v-for="(favorite, i) in gatherFavorites" :key="i" :simple-mode="false"
        :word-data="favorite" />
    </div>
    <ListingBottombar />
  </section>
</template>

<script>
export default {
  components: {
    ListingBottombar,
    FavoriteStar
  },
  data() {
    return {};
  },
  computed: {
    gatherFavorites() {
      try {
        return JSON.parse(localStorage.getItem("favoritesStorage"));
      } catch {
        return [];
      }
    },
  },
};
</script>

<style scoped>
#listingStats {
  display: flex;
  flex-direction: column;
  width: auto;
  font-size: 1.5em;
  padding: 0;
}

#favoritesListing {
  display: flex;
  flex-direction: column;
  font-size: 1.6em;
  padding: 5px;
}

.no-favorites {
  font-size: 20px;
  margin: 20px auto 0 auto;
}

@media only screen and (max-width: 659px) {
  .listing-screen {
    width: 100%;
  }
}
</style>
