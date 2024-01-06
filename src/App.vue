<script setup>
import Navbar from './components/Navbar.vue';
import NavFooter from './components/NavFooter.vue';
import navbarElements from './assets/navbarElements';
import store from './store';
</script>

<template>
  <header>
    <img id='flag' src='/img/flag.png' alt='flag'>
    <div id='titleDiv'>
      <router-link id='pageTitle' class="router-link" :to="{ name: 'Home' }">Gërteg tjl Balanlàedenug</router-link>
      <h3 id='pageSubtitle'>'Tör waej rjnlug, waej wjljnaj.'</h3>
    </div>
    <img id='coat' src='/img/coat.png' alt='coat'>
  </header>

  <main>
    <div id="nav-wrapper" style="display: flex; flex-direction: column;">
      <Navbar :navbar-sections="navbarElements" />
      <NavFooter />
    </div>
    <router-view />
  </main>

  <notifications position="top right" width="350px" :speed="700" :pause-on-hover="true" />
</template>

<script>
export default {
  components: {
    Navbar,
    NavFooter
  },
  data() {
    return {
      navbarElements
    }
  },
  async mounted() {
    await store.dispatch('getDictionary');
    await store.dispatch('getUsers');
  }
}
</script>

<style scoped>
#flag {
  width: 17vw;
  min-width: 225px;
  height: 100%;
}

#titleDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

#pageTitle {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0;
}

#pageSubtitle {
  font-size: 18px;
  margin-top: 10px;
  font-style: italic;
  font-weight: normal;
}

#coat {
  height: 100%;
  width: 10vw;
  min-width: 120px;
}
</style>
