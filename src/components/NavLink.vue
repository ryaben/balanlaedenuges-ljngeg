<script setup>
defineProps({
    sectionData: {
        type: Object,
        required: true,
        default: {}
    }
});
</script>

<template>
    <ul class='nav-section' :label='sectionData.sectionLabel' @click="toggleMobileView">
        <li v-show="mobileView || windowWidth > 659" v-for="(link, j) in sectionData.sectionLinks" class="nav-link" :class="{ 'nav-highlighted': link.highlighted }"
            :key="j">
            <router-link class="router-link" :to="{ name: link.linkRoute }">{{ link.linkLabel }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    emits: [
        'mobile-view-toggled'
    ],
    data() {
        return {
            mobileView: false,
            windowWidth: window.innerWidth
        }
    },
    methods: {
        toggleMobileView() {
            this.mobileView = !this.mobileView;
            this.$emit('mobile-view-toggled', this.mobileView);
        },
        onResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize);
    }
}
</script>

<style scoped>
.nav-section {
    padding: 0;
    margin-top: 8px;
    pointer-events: none;
}

.nav-section:before {
    display: block;
    content: attr(label);
    font-size: 1.5em;
    font-weight: bold;
    color: darkred;
    border-bottom: 1px solid darkred;
}

.nav-link {
    list-style: none;
    font-size: 1.2em;
    margin: 3px auto 3px auto;
    border-radius: 4px;
    cursor: pointer;
    pointer-events: all;
}

.nav-link:hover {
    background-color: indianred;
    color: white;
    transition: ease;
    transition-duration: 100ms;
}

.nav-link .router-link-active {
    background-color: red;
    color: white;
    border-radius: 4px;
}

.nav-link.nav-highlighted {
    font-weight: bold;
}

@media only screen and (max-width: 659px) {
    .nav-mobile {
        margin-left: 10px;
        margin-right: 10px;
    }

    .config-section.nav-mobile {
        margin: 0 10px 4px 10px;
    }

    .nav-section {
        margin-top: 0px;
        pointer-events: all;
    }

    .nav-section::before {
        border-bottom: none;
        padding: 2px;
        font-size: 1em;
    }

    .nav-section:hover {
        background-color: lightgrey;
        color: white;
        cursor: pointer;
        border-radius: 4px;
    }

    .nav-section:nth-child(1) {
        display: block;
    }

    /* .nav-section:nth-child(1)::before {
        color: black;
        font-weight: bold;
    } */
}

@media only screen and (max-width: 470px) {
    .nav-section::before {
        font-size: 0.9em;
    }
}
</style>
