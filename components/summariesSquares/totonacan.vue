<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">Choose a terminal language</h4>
    <!-- Contenedor  mosaico lenguas terminales sumario -->
    <div class="contenedor-12-col contenedor-sumario-lenguas-terminales">
      <!-- Módulo mosaico lenguas terminales sumario -->
      <div
        id="myBtn"
        onclick=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-totonaco
        "
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.totonacan.region0')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/high1243"
            target="_blank"
            >high1243</a
          ></code
        >
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <!-- Módulo mosaico lenguas terminales sumario etc -->
      <div id="" onclick="" class="sumario-lexico-item-boton-regresar">
        <h5 class="titulo-sumario-modulo-lexico-instrucciones">
          {{ $t('topicIndex.bottomCards.back') }}
        </h5>
        <span
          class="
            material-icons-outlined
            sumario-lexico-item-icono-boton-regresar
          "
        >
          arrow_back
        </span>
      </div>
    </div>
  </div>
</template>