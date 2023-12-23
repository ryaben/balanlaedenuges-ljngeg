import { createWebHistory, createRouter } from "vue-router";

//Views importadas
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Information from "../views/Information.vue";
import PortalMain from "../views/PortalMain.vue";
import PortalLogin from "../views/PortalLogin.vue";
import PortalRegistration from "../views/PortalRegistration.vue";
import PortalReset from "../views/PortalReset.vue";

import Diplomacy from "../views/Diplomacy.vue";
import Laws from "../views/Laws.vue";

import Dictionary from "../views/Dictionary.vue";
import Listing from "../views/Listing.vue";
import Favorites from "../views/Favorites.vue";
import Statistics from "../views/Statistics.vue";
import Nouns from "../views/Nouns.vue";
import Verbs from "../views/Verbs.vue";
import Adjectives from "../views/Adjectives.vue";
import Pronouns from "../views/Pronouns.vue";
import Compounds from "../views/Compounds.vue";
import Phonetics from "../views/Phonetics.vue";
import Guides from "../views/Guides.vue";

//Rutas
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/informacion",
    name: "Information",
    component: Information
  },
  {
    path: "/noticias",
    name: "News",
    component: News
  },
  {
    path: "/portal-principal",
    name: "PortalMain",
    component: PortalMain
  },
  {
    path: "/portal-login",
    name: "PortalLogin",
    component: PortalLogin
  },
  {
    path: "/portal-registro",
    name: "PortalRegistration",
    component: PortalRegistration
  },
  {
    path: "/portal-restablecimiento",
    name: "PortalReset",
    component: PortalReset
  },
  {
    path: "/noticias",
    name: "News",
    component: News
  },
  {
    path: "/tratados",
    name: "Diplomacy",
    component: Diplomacy
  },
  {
    path: "/leyes",
    name: "Laws",
    component: Laws
  },
  {
    path: "/diccionario",
    name: "Dictionary",
    component: Dictionary
  },
  {
    path: "/listado",
    name: "Listing",
    component: Listing
  },
  {
    path: "/favoritos",
    name: "Favorites",
    component: Favorites
  },
  {
    path: "/estadisticas",
    name: "Statistics",
    component: Statistics
  },
  {
    path: "/sustantivos",
    name: "Nouns",
    component: Nouns
  },
  {
    path: "/verbos",
    name: "Verbs",
    component: Verbs
  },
  {
    path: "/adjetivos",
    name: "Adjectives",
    component: Adjectives
  },
  {
    path: "/pronombres",
    name: "Pronouns",
    component: Pronouns
  },
  {
    path: "/composiciones",
    name: "Compounds",
    component: Compounds
  },
  {
    path: "/fonetica",
    name: "Phonetics",
    component: Phonetics
  },
  {
    path: "/guias",
    name: "Guides",
    component: Guides
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;