<script setup>
import NavLink from '../components/NavLink.vue';

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
            <NavLink v-for="(section, i) in navbarSections" :key="i" :section-data="section" />
        </ul>
    </nav>
</template>

<script>
export default {
    components: {
        NavLink
    },
    data() {
        return {
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

@media only screen and (max-width: 659px) {
    #optionsTab {
        display: none;
        border-top-right-radius: 5px;
    }

    #nav-wrapper {
        width: auto;
    }

    nav {
        z-index: 2;
        background: white;
        width: auto;
        border: 2px solid black;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        margin-top: 0;
        margin-bottom: 0.5vh;
        height: auto;
    }

    #navLinks {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: auto;
        border-radius: 8px;
        padding: 10px 0 10px 0;
        margin: auto 10px auto 10px;
        overflow: hidden;
    }
}

@media only screen and (max-width: 470px) {
    nav {
        width: calc(calc(var(--vw-mobile, 1vw) * 99) - 8px);
    }
}
</style>
