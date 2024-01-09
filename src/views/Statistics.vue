<script setup>
import TypeStat from '../components/TypeStat.vue';
import ListingBottombar from '../components/ListingBottombar.vue';
import store from '../store';
</script>

<template>
    <section class='listing-screen' :class="{ 'vertical-center': wordsDictionary.length === 0 }">
        <div class="loading-container" v-show="wordsDictionary.length === 0">
            <img src="/img/loading.gif" alt="Loading">
            <label>Cargando base de datos, por favor espere...</label>
        </div>

        <div v-show="wordsDictionary.length > 0" class='info-listing' id='listingStats'>
            <div id="category-Tipo" class="category-entry">
                <p class="category-header">Tipo</p>
                <p class="category-header">Cantidad</p>
                <p class="category-header">Porcentaje</p>
            </div>
            <div id="category-Tipo" class="category-entry category-clickable" @click="countTypes">
                <div class="colorer" style="width: 100%; border-bottom: 2px solid black;"></div>
                <p class="category-title">Palabra</p>
                <p class="category-value">{{ wordsDictionary.length }}</p>
                <p class="category-percentage">100.00%</p>
            </div>

            <p v-if="typesList.length === 0" class="section-content" style="text-align: center; margin-top: 10px;">Haga clic
                en las categorías para desplegar más
                información.</p>

            <TypeStat v-for="(type, i) in typesList" :key="i" :type-name="type.name" :type-count="type.count"
                :subtypes-data="type.subtypes" />
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
            typesList: []
        }
    },
    computed: {
        wordsDictionary() {
            return store.getters.dictionary;
        }
    },
    methods: {
        countTypes() {
            if (this.typesList.length === 0) {
                let typesList = []

                this.wordsDictionary.forEach(function (word) {
                    for (let i = 0; i < word.types.length; i++) {
                        const type = word.types[i];
                        const subtype = word.subtypes[i];
                        const cleanedSubtypes = subtype.split(", ");

                        if (typesList.find(el => el.name.charAt(0).toUpperCase() + el.name.slice(1) === type.charAt(0).toUpperCase() + type.slice(1)) === undefined) {
                            typesList.push({
                                name: type.charAt(0).toUpperCase() + type.slice(1),
                                count: 1,
                                subtypes: []
                            });
                        } else {
                            typesList[typesList.findIndex(e => e.name.charAt(0).toUpperCase() + e.name.slice(1) === type.charAt(0).toUpperCase() + type.slice(1))].count++;
                        }

                        cleanedSubtypes.forEach(function (cleanedSubtype) {
                            const parentType = typesList.findIndex(e => e.name.charAt(0).toUpperCase() + e.name.slice(1) === type.charAt(0).toUpperCase() + type.slice(1));
                            const typeInTypesList = typesList[parentType].subtypes.find(el => el.name.charAt(0).toUpperCase() + el.name.slice(1) === cleanedSubtype.charAt(0).toUpperCase() + cleanedSubtype.slice(1));

                            if (typeInTypesList === undefined) {
                                typesList[parentType].subtypes.push({
                                    name: cleanedSubtype.charAt(0).toUpperCase() + cleanedSubtype.slice(1),
                                    count: 1
                                });
                            } else {
                                typeInTypesList.count++;
                            }
                        });
                    }
                });

                typesList.sort((a, b) => (a.count < b.count) ? 1 : -1);
                typesList.forEach(function (type) {
                    type.subtypes.sort((a, b) => (a.count < b.count) ? 1 : -1);
                });

                return this.typesList = typesList;
            } else {
                this.typesList = [];
            }

        }
    }
}
</script>

<style scoped>
.listing-screen {
    max-height: none;
}

.listing-screen.vertical-center {
    justify-content: space-between;
    padding-top: 50px;
}

@media only screen and (max-width: 719px) {
    #listingStats {
        overflow-y: scroll;
    }
}

@media only screen and (max-width: 659px) {
    .listing-screen {
        width: 100%;
    }
}
</style>
