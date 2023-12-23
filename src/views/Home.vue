<template>
    <section id='homePage'>
        <h1 class='section-title no-underline'>¡Les damos la bienvenida al sitio web oficial de Libraterra!</h1>
        <div id="wavingFlagsContainer">
            <img class="waving-symbol" src="/img/wavingFlag.gif" alt="Bandera flameando">
            <p id="homeWelcoming" class="section-content">
                Nos resulta muy grato contar con su presencia aquí, la que ha sido determinada por el <a
                    class="searchable-word" onclick='handler.searchWord("Fatjgeg", "bal", 1)'><i>fatjgeg</i></a>.
                Encontrarán en esta web la más completa información de este pintoresco país imaginario al
                que todos sus tantos ciudadanos tenemos el honor de poder llamar hogar.
                Somos un pueblo firme y resiliente que ha sabido luchar cuando se le convocaba, y también escrito la paz
                cuando era la mejor opción.
                Acarreamos una historia de orgullo, respeto y progreso, con su inevitable cuota de momentos oscuros que
                lamentamos,
                pero siempre yendo firmes hacia el <a class="searchable-word"
                    onclick='handler.searchWord("Balanug", "bal", 1)'><i>balanug</i></a>.
                Uno de los rasgos más originales de nuestra cultura es el <a class="searchable-word"
                    onclick='handler.searchWord("Balalàedenuges", "bal", 1)'><i>balalàedenuges</i></a>,
                nuestra querida lengua nativa. Podrán obtener acceso al diccionario, listado completo de palabras y guías
                educativas.
                Sin más preámbulos, sean cordialmente <a href="./informacion">invitados a descubrirnos</a>.
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
</style>
