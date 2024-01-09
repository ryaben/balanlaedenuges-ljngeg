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
      vhMobile: 0,
      vwMobile: 0,
      navbarElements
    }
  },
  async mounted() {
    await store.dispatch('getDictionary');
    await store.dispatch('getUsers');

    window.addEventListener('resize', () => {
      this.vhMobile = window.innerHeight * 0.01;
      this.vwMobile = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vh-mobile', `${this.vhMobile}px`);
      document.documentElement.style.setProperty('--vw-mobile', `${this.vwMobile}px`);
    });
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

@media only screen and (max-width: 719px) {
  img#flag {
    min-width: 170px;
  }

  #coat {
    min-width: 85px;
  }

  #pageTitle {
    font-size: 24px;
  }

  #pageSubtitle {
    font-size: 15px;
  }
}

@media only screen and (max-width: 659px) {
  img#flag {
    min-width: 135px;
  }
}

@media only screen and (max-width: 470px) {
  img#flag {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.2;
  }

  #titleDiv {
    z-index: 2;
  }

  #coat {
    display: none;
  }

  #homeTitle {
    text-align: center;
  }
}
</style>
