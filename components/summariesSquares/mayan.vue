<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">Choose a terminal language</h4>
    <!-- Contenedor  mosaico lenguas terminales sumario -->
    <div class="contenedor-12-col contenedor-sumario-lenguas-terminales">
      <!-- Módulo mosaico lenguas terminales sumario -->
      <div
        id="myBtn"
        onclick=""
        class="sumario-lengua-terminal-item sumario-lengua-terminal-item-maya"
        @click="toggleWindow(0)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mayan.region0')"></span>
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
      <div
        id="myBtn"
        onclick=""
        class="sumario-lengua-terminal-item sumario-lengua-terminal-item-maya"
         @click="toggleWindow(1)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mayan.region1')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/chuj1250"
            target="_blank"
            >chuj1250</a
          ></code
        >
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <!-- Módulo mosaico lenguas terminales sumario etc -->
      <backButton />
    </div>
     <div>
      <popupWindow
        v-if="showWindow"
        :show="showWindow"
        :datasend="sendDataWindow"
        @window="showWindow = $event"
      />
    </div>
  </div>
</template>
<script>
import popupWindow from '@/components/summariesSquares/popupWindow.vue';
import backButton from '@/components/summariesSquares/backButton.vue';
export default {
  components: {
    popupWindow,
    backButton,
  },
    data() {
    return {
      showWindow: false,
      numOfWindow: null,
    };
  },
  computed: {
    sendDataWindow() {
      const dataWindow = [
        {
          rootLang: this.$t('languageIndex.mayan.title'),
          title: this.$t('topicIndex.bottomCards.mayan.region0'),
          textContent: 'contenido',
          imgUri: '/generals/imagen4a3.jpg',
          lexicons: [
            {
              display: 'lexicon1',
              src: 'uri://',
            },
            {
              display: 'lexicon2',
              src: 'uri://',
            },
          ],
          floraFauna: [
            {
              display: 'flora1',
              src: 'uri://',
            },
            {
              display: 'flora2',
              src: 'uri://',
            },
          ],
          corpora: [
            {
              display: 'corpora1',
              src: 'uri://',
            },
            {
              display: 'corpora2',
              src: 'uri://',
            },
          ],
          grammar: [
            {
              display: 'grammar1',
              src: 'uri://',
            },
            {
              display: 'grammar2',
              src: 'uri://',
            },
          ],
        },
         {
          rootLang: this.$t('languageIndex.mayan.title'),
          title: this.$t('topicIndex.bottomCards.mayan.region1'),
          textContent: 'contenido',
          imgUri: '/generals/imagen4a3.jpg',
          lexicons: [
            {
              display: 'lexicon1',
              src: 'uri://',
            },
            {
              display: 'lexicon2',
              src: 'uri://',
            },
          ],
          floraFauna: [
            {
              display: 'flora1',
              src: 'uri://',
            },
            {
              display: 'flora2',
              src: 'uri://',
            },
          ],
          corpora: [
            {
              display: 'corpora1',
              src: 'uri://',
            },
            {
              display: 'corpora2',
              src: 'uri://',
            },
          ],
          grammar: [
            {
              display: 'grammar1',
              src: 'uri://',
            },
            {
              display: 'grammar2',
              src: 'uri://',
            },
          ],
        },
      ];
      return dataWindow[this.numOfWindow];
    },
  },
   methods: {
    toggleWindow(nw) {
      if (this.showWindow === true) {
        this.showWindow = false;
      } else {
        this.showWindow = true;
        this.numOfWindow = nw;
      }
    },
  },
};
</script>
