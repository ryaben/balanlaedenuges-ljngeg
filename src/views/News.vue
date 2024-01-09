<script setup>
import TwitterTimeline from 'vue-twitter-timeline';
</script>

<template>
    <section id='newsPage'>
        <!-- <a class="twitter-timeline" data-chrome="noborders" data-tweet-limit="10" data-lang="es" data-theme="light"
            href="https://twitter.com/gdlibraterra?ref_src=twsrc%5Etfw">Cargando noticias...</a> -->
        <TwitterTimeline class="twitter-timeline" url="gdlibraterra?ref_src=twsrc%5Etfw" description="Cargando noticias..."
            lang="es" theme="light" ref="timeline" doNotTrack></TwitterTimeline>
    </section>
</template>

<script>
export default {
    components: {
        TwitterTimeline
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
#newsPage {
    padding-bottom: 25px;
}
</style>
