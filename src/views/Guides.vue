<template>
    <section id='guidesScreen'>
        <h1 class='section-title'>Guías de vocabulario</h1>
        <p class="section-content">
            Por medio de este apartado se proveerán numerosas guías interactivas sobre
            distintos ámbitos de la vida cotidiana y/o el conocimiento humano, con su
            correspondiente vocabulario y sus respectivas traducciones al idioma
            libraterrense:
        </p>

        <ul id="tree-map" class="root-tree guide">
            <li class="root-tree-title guide"><label class="root-tree-title-label guide">Mapa mundial</label></li>

            <div id="map-container" class="guide-container">
                <!-- <script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>
                <link href="/res/map/svgMap.css" rel="stylesheet" />
                <script src="/res/map/svgMap.js"></script> -->

                <div id="svgMapCountryNames"></div>
            </div>
        </ul>

        <ul id="tree-household" class="root-tree guide">
            <li class="root-tree-title guide"><label class="root-tree-title-label guide">Composición de la casa</label></li>

            <div id="householdContainer" class="guide-container">
                <!-- <%- include('./partials/tooltip.ejs') %> -->

                    <img id='householdImage' src="/img/household-guide.jpg" alt="Composición del hogar">
                    <div id="guide-oven" class="guide-polygon household-top-item" guide-word="Laektajklànördnug"></div>
                    <div id="guide-fridge" class="guide-polygon household-top-item" guide-word="Laekaenànördnug"></div>
                    <div id="guide-bathroom" class="guide-polygon" guide-word="Jagaurkĵgeg"></div>
            </div>
        </ul>
    </section>
</template>

<script>
import mapValues from '../assets/worldMapValues';

export default {
    data() {
        return {
            mapValues
        }
    },
}
</script>

<style href="../assets/guides.css" rel="stylesheet"></style>

<style scoped></style>
