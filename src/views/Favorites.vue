<script setup>
import ListingBottombar from '../components/ListingBottombar.vue';
</script>

<template>
    <section class='listing-screen'>
        <div class='info-listing' id='favoritesListing'>

        </div>
        <ListingBottombar />
    </section>
</template>

<script>
export default {
    components: {
        ListingBottombar
    },
    data() {
        return {

        }
    },
}
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
}
</style>
