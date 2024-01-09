<template>
  <section id='homePage'>
    <h1 class='section-title no-underline'>¡Les damos la bienvenida al sitio web oficial de Libraterra!</h1>
    <div id="wavingFlagsContainer">
      <img class="waving-symbol" src="/img/wavingFlag.gif" alt="Bandera flameando">
      <p id="homeWelcoming" class="section-content">
        Nos resulta muy grato contar con su presencia aquí, la que ha sido determinada por el <i>fatjgeg</i>.
        Encontrarán en esta web la más completa información de este pintoresco país imaginario al
        que todos sus tantos ciudadanos tenemos el honor de poder llamar hogar.
        Somos un pueblo firme y resiliente que ha sabido luchar cuando se le convocaba, y también escrito la paz
        cuando era la mejor opción.
        Acarreamos una historia de orgullo, respeto y progreso, con su inevitable cuota de momentos oscuros que
        lamentamos,
        pero siempre yendo firmes hacia el <i>balanug</i>.
        Uno de los rasgos más originales de nuestra cultura es el <i>balalàedenuges</i>,
        nuestra querida lengua nativa. Podrán obtener acceso al diccionario, listado completo de palabras y guías
        educativas.
        Sin más preámbulos, sean cordialmente <router-link :to="{ name: 'Information' }">invitados a descubrirnos</router-link>.
        <br><br>
        <b>Krug. Ramiro, Asesor de Gobierno</b>
      </p>
    </div>
  </section>
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
#homePage {
  padding-bottom: 30px;
}

#homePage .section-title {
  text-align: center;
}

.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 {
  display: none;
}

#wavingFlagsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
}

#homeWelcoming {
  margin: 5px 0 5px 25px;
}

.waving-symbol {
  width: 380px;
  max-width: 380px;
}

@media only screen and (max-width: 1120px) {
  #wavingFlagsContainer {
    flex-direction: column;
  }

  .waving-symbol {
    width: 70%;
  }

  #homeWelcoming {
    margin: 25px 0 5px 0;
  }
}

@media only screen and (max-width: 659px) {
  #homePage {
    width: calc(100% - 53px);
  }
}
</style>
