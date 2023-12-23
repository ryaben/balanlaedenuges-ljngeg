<script setup>
defineProps({
    navbarSections: {
        type: Array,
        required: true,
        default: [
            {
                sectionLabel: "Section",
                sectionLinks: [
                    {
                        linkLabel: "Home",
                        linkRoute: "Home",
                        highlighted: false
                    }
                ]
            }
        ]
    }
})
</script>

<template>
    <nav>
        <div id='optionsTab'>
            <div id="configMenuTitle">
                <label>⚙️ Menú de configuración</label>
                <label>◀</label>
            </div>
            <div id="configMenu">
                <div class="config-section nav-config">
                    <label>Vista previa de palabra</label>
                    <div class="config-options">
                        <label><input class="config-radio" type="radio" name="tooltip" value="true">Sí</label>
                        <label><input class="config-radio" type="radio" name="tooltip" value="false">No</label>
                    </div>
                </div>
                <div class="config-section nav-config">
                    <label>Vista del listado</label>
                    <div class="config-options">
                        <label><input class='config-radio' type='radio' name='listing' value='list'>Lista</label>
                        <label><input class='config-radio' type='radio' name='listing' value='tree'>Árbol</label>
                    </div>
                </div>
            </div>
        </div>
        <ul id='navLinks'>
            <ul v-for="(section, i) in navbarSections" :key="i" class='nav-section' :label='section.sectionLabel'>
                <li v-for="(link, j) in section.sectionLinks" class="nav-link"
                    :class="{ 'nav-highlighted': link.highlighted }" :key="j"
                    @click="colorLink('section' + i + 'navLink' + j)">
                    <router-link class="router-link" :to="{ name: link.linkRoute }">{{ link.linkLabel }}</router-link>
                </li>
            </ul>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            activeLink: 'section1navLink1'
        }
    },
    methods: {
        colorLink(navLink) {
            this.activeLink = navLink;
        }
    }
}
</script>

<style scoped>
#optionsTab {
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    border-bottom: 2px solid black;
    padding: 7px;
    border-top-left-radius: 5px;
}

#configMenuTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    width: 100%;
    border-radius: 6px;
}

#configMenuTitle:hover {
    background-color: darkslategray;
    color: white;
}

#configMenuTitle label {
    cursor: pointer;
    padding: 3px;
}

#configMenuTitle label:nth-child(1) {
    width: 100%;
}

#configMenu {
    display: none;
    border-top: solid 1px black;
    padding: 3px;
    margin-top: 3px;
}

#navLinks {
    list-style-type: circle;
    padding: 0 10px 10px 10px;
    margin-block-start: 0;
    margin-block-end: 0;
    overflow-y: scroll;
}

.config-section {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
}

.config-options {
    display: flex;
    align-items: center;
}

.config-radio {
    cursor: pointer;
}

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
</style>
