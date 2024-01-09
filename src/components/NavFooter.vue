<script setup>

</script>

<template>
  <footer>
    <div id="othersContainer">
      <div id="visitorsCounterContainer">
        <h2 id="visitorsCounterTitle" class='section-subtitle closer-bottom'>Registro de visitantes</h2>
        <a id="visitorsCounter" href="https://info.flagcounter.com/CES0" target="_blank"><img
            src="https://s01.flagcounter.com/count2/CES0/bg_FFFFFF/txt_000000/border_CCCCCC/columns_3/maxflags_9/viewers_3/labels_0/pageviews_0/flags_0/percent_0/"
            alt="Flag Counter" border="0"></a>
      </div>
      <div id="socialMediaContainer">
        <a href="mailto:balanlaedenug@gmail.com" target="_blank">
          <div id="emailContactButton" class="footer-button"><label>balanlaedenug@gmail.com</label></div>
        </a>
        <a href="https://twitter.com/gdlibraterra?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large"
          data-lang="es" data-dnt="true" data-show-count="false" data-show-screen-name="true">Seguir a
          @gdlibraterra</a>
        <a href="https://t.me/balanlaedenuges_bot" target="_blank">
          <div id="telegramBotButton" class="footer-button"><label>Usar nuestro bot, Libra</label></div>
        </a>
      </div>
    </div>
    <p id='footerDescription'>Ideado y desarrollado por Ramiro Yaben.</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
#othersContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}

#socialMediaContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
}

#socialMediaContainer a {
  text-decoration: none;
}

.footer-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 177px;
  height: 27px;
  border-radius: 14px;
  cursor: pointer;
}

.footer-button:hover {
  filter: grayscale(0.3);
}

.footer-button label {
  font-size: 14px;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

#emailContactButton {
  background: #FF0000;
}

#telegramBotButton {
  background: #54A9EB;
}

#visitorsCounterContainer {
  width: auto;
  margin-bottom: 15px;
}

#visitorsCounterTitle {
  margin: 0 0 5px 0;
  text-align: center;
}

#footerDescription {
  font-size: 0.9em;
  max-width: 25vw;
  margin: auto 5px auto 5px;
}

@media only screen and (max-width: 910px) {
  #othersContainer {
    flex-direction: column;
  }

  #visitorsCounterContainer {
    margin-bottom: 15px;
  }

  #visitorsCounterTitle {
    text-align: center;
  }

  a:has(#contactButton) {
    width: 55%;
    margin-top: 10px;
  }
}
</style>
