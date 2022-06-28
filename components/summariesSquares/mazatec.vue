<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">Choose a terminal language</h4>
    <!-- Contenedor  mosaico lenguas terminales sumario -->
    <div class="contenedor-12-col contenedor-sumario-lenguas-terminales">
      <!-- Módulo mosaico lenguas terminales sumario -->
      <div
        id="myBtn"
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-mazateco
        "
        @click="toggleWindow(0)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mazatec.region0')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/huau1238"
            target="_blank"
            >huau1238</a
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
        :keyC="keyColor"
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
    backButton,
    popupWindow,
  },
  data() {
    return {
      showWindow: false,
      numOfWindow: null,
      keyColor:"var(--mazateco0)",
    };
  },
  computed: {
    sendDataWindow() {
      const dataWindow = [
        {
          rootLang: this.$t('languageIndex.mazatec.title'),
          title: this.$t('topicIndex.bottomCards.mazatec.region0'),
          textContent:this.$t('topicIndex.bottomCards.mazatec.popUpW[0]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/totonaco_zangozotla-image.jpg',
          imgMeta:"Inocencio Jiménez",
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
              src: 'Mazateco de Huautla',
            },
          ],
          corpora: [
            {
              display: this.$t('languageIndex.watchVideos'),
              src: 'uri://',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Mazateco de Huautla',
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
