<template>
  <section id='lawsPage'>
    <h2 class='section-subtitle'>Leyes valerianas absolutas</h2>
    <p class='section-content'>
      Son axiomas que representan las bases sobre las cuales se desprende el resto del código legal libraterrense. Fueron
      dictadas
      por la Gran Duquesa, y ponen en práctica cánones universales para moldear el comportamiento cultural y el
      funcionamiento de la sociedad. Si bien en la organización interna del país, la soberanía subnacional e
      incluso la propiedad privada quedan exentas de la injerencia del <i>balanlàedenuges <a class="searchable-word"
          onclick='handler.searchWord("Krjtonur", "bal", 1)'>krjtonur</a></i>
      (porque rige en ellas una normativa propia), las leyes valerianas absolutas son supremas, constantes e inobjetables,
      de forma que imperan en todo el territorio por igual.
    </p>
    <div id="lawsContainer">
      <!-- Headers -->
      <p class="law-number bordered">N°</p>
      <p class="law-bal header bordered">Original</p>
      <p class="law-spa bordered">Traducción</p>
      <p class="law-explanation bordered centered">Explicación</p>
      <!-- Primera ley -->
      <p class="law-number">1.</p>
      <p class="law-bal">Tör waej rjnlug, waej wjljnaj.</p>
      <p class="law-spa">Del cuerpo, la libertad.</p>
      <p class="law-explanation">
        Es la directriz de la vida. Indica que cada persona es libre desde su misma presencia y hacia su misma existencia.
        El ciudadano tiene control de su cuerpo y voluntad absoluta de tomar las decisiones que considere sobre sí mismo.
      </p>
      <!-- Segunda ley -->
      <p class="law-number">2.</p>
      <p class="law-bal">Waej daljaj göljlòdew waej fatjgeg.</p>
      <p class="law-spa">La verdad determina el destino.</p>
      <p class="law-explanation">
        Postula que lo verdadero debe ser siempre el camino, aunque represente adversidad, porque es un orden genuino.
        La falsedad y la mentira, por el contrario, son gravemente penalizadas.
      </p>
      <!-- Tercera ley -->
      <p class="law-number">3.</p>
      <p class="law-bal">Jagnar göljkàj fejfar.</p>
      <p class="law-spa">Vivir es escribir.</p>
      <p class="law-explanation">
        El enunciado refiere a que los actos hablan tanto como las palabras, la acción puede ser decir con silencio.
        Se vincula también con el compromiso y la valoración de hacer, y condena las promesas verbales incumplidas.
      </p>
      <!-- Cuarta ley -->
      <p class="law-number">4.</p>
      <p class="law-bal">Wän laedenug faer wän kefjeg.</p>
      <p class="law-spa">Una tierra para una persona.</p>
      <p class="law-explanation">
        Supone una relación de igualdad entre el ciudadano y su propiedad inmueble. Muy emparentada con la ley primera,
        ya que explica la libertad que rige en la tierra propia y la soberanía del ciudadano.
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
#lawsContainer {
  display: grid;
  margin: 0 15px 15px 0;
  width: auto;
  font-size: 15px;
  grid-template-columns: 4% 28% 28% 40%;
  grid-column-gap: 5px;
}

#lawsContainer p {
  margin: 3px 0 3px 0;
}

.law-number {
  font-weight: bold;
}

.law-bal {
  text-align: center;
}

.law-bal:not(.header) {
  font-style: italic;
  font-weight: bold;
}

.law-spa {
  text-align: center;
}

.law-explanation {
  text-align: justify;
}

#lawsContainer .bordered {
  border-bottom: 1px solid black;
}

#lawsContainer .centered {
  text-align: center;
}
</style>
