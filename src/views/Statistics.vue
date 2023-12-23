<script setup>
import TypeStat from '../components/TypeStat.vue';
import ListingBottombar from '../components/ListingBottombar.vue';
import store from '../store';
</script>

<template>
    <section class='listing-screen'>
        <div class='info-listing' id='listingStats'>
            <div id="category-Tipo" class="category-entry">
                <p class="category-header">Tipo</p>
                <p class="category-header">Cantidad</p>
                <p class="category-header">Porcentaje</p>
            </div>
            <div id="category-Tipo" class="category-entry">
                <div class="colorer" style="width: 100%; border-bottom: 2px solid black;"></div>
                <p class="category-title">Palabra</p>
                <p class="category-value">{{ wordsDictionary.length }}</p>
                <p class="category-percentage">100.00%</p>
            </div>

            <TypeStat v-for="(type, i) in countTypes" :key="i" :type-name="type.name" :type-count="type.count" />
        </div>
        <ListingBottombar />
    </section>
</template>

<script>
export default {
    components: {
        TypeStat,
        ListingBottombar
    },
    data() {
        return {

        }
    },
    computed: {
        wordsDictionary() {
            return store.getters.dictionary;
        },
        countTypes() {
            let types = []

            this.wordsDictionary.forEach(function (word) {
                word.types.forEach(function (type) {
                    if (types.find(el => el.name.charAt(0).toUpperCase() + el.name.slice(1) === type.charAt(0).toUpperCase() + type.slice(1)) === undefined) {
                        types.push({
                            name: type.charAt(0).toUpperCase() + type.slice(1),
                            count: 1
                        });
                    } else {
                        types[types.findIndex(e => e.name.charAt(0).toUpperCase() + e.name.slice(1) === type.charAt(0).toUpperCase() + type.slice(1))].count++;
                    }
                });
            });

            types.sort();
            return types;
        }
    }
}
</script>

<style scoped>

</style>
