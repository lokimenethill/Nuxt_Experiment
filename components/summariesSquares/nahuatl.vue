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
          sumario-lengua-terminal-item sumario-lengua-terminal-item-nahuatl
        "
      >
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/high1278

              "
            target="_blank"
            >high1278</a
          ></code
        >

        <nuxt-link :to="localePath('nahuatllexicon')" >
          <h3 class="sumario-lengua-terminal-titulo">
            <span v-html="$t('topicIndex.bottomCards.nahuatl.region0')"></span>
          </h3>
        </nuxt-link>
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <div
        id="myBtn"
        onclick=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-nahuatl
        "
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.nahuatl.region1')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/isth1242"
            target="_blank"
            >isth1242</a
          ></code
        >
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <div
        id="myBtn"
        onclick=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-nahuatl
        "
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.nahuatl.region2')"></span>
        </h3>

        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/tete1251"
            target="_blank"
            >tete1251</a
          ></code
        >
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <div
        id="myBtn"
        onclick=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-nahuatl
        "
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.nahuatl.region3')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/chol1282"
            target="_blank"
            >chol1282</a
          ></code
        >
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <!-- Módulo mosaico lenguas terminales sumario etc -->
      <backButton />
    </div>
  </div>
</template>
<script>
import backButton from '@/components/summariesSquares/backButton.vue';
export default {
  components: {
    backButton,
  },
};
</script>
