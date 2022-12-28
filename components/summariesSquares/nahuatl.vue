<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">{{$t('commonComponents.ChooseTL')}}</h4>
    <!-- Contenedor  mosaico lenguas terminales sumario -->
    <div class="contenedor-12-col contenedor-sumario-lenguas-terminales">
      <!-- Módulo mosaico lenguas terminales sumario -->
      <div
        id="myBtn"
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-nahuatl
        "
        @click="toggleWindow(0)"
      >
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/high1278

              "
            target="_blank"
            >high1278</a
          ></code
        >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.nahuatl.region0')"></span>
        </h3>
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <div
        id="myBtn"
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-nahuatl
        "
        @click="toggleWindow(1)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.nahuatl.region1')"></span>
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
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-nahuatl
        "
        @click="toggleWindow(2)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.nahuatl.region2')"></span>
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
      keyColor:"var(--nahuatl0)",
    };
  },
  computed: {
    sendDataWindow() {
      const dataWindow = [
        {
          rootLang: this.$t('languageIndex.nahuatl.title'),
          title: this.$t('topicIndex.bottomCards.nahuatl.region0'),
          textContent:this.$t('topicIndex.bottomCards.nahuatl.popUpW[0]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/nahuatl_sierra_nororiental-image.jpg',
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
              src: 'uri://',
            },
          ],
          corpora: [
            {
              display: this.$t('languageIndex.watchVideos'),
              src: 'Náhuat de la Sierra Nororiental de Puebla',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Náhuat de la Sierra Nororiental de Puebla',
            },
          ],
        },
        {
          rootLang: this.$t('languageIndex.nahuatl.title'),
          title: this.$t('topicIndex.bottomCards.nahuatl.region1'),
          textContent:this.$t('topicIndex.bottomCards.nahuatl.popUpW[1]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/nahuatl_meyacapan-image.jpg',
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
              src: 'uri://',
            },
          ],
          corpora: [
            {
              display: this.$t('languageIndex.watchVideos'),
              src: 'Náhuatl de Mecayapan, Veracruz',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Náhuatl de Mecayapan, Veracruz',
            },
          ],
        },
        {
          rootLang: this.$t('languageIndex.nahuatl.title'),
          title: this.$t('topicIndex.bottomCards.nahuatl.region2'),
          textContent:this.$t('topicIndex.bottomCards.nahuatl.popUpW[2]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/nahuatl_tetelzingo-image.jpg',
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
              src: 'uri://',
            },
          ],
          corpora: [
            {
              display: this.$t('languageIndex.watchVideos'),
              src: 'Náhuatl de Tetelcingo, Morelos',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Náhuatl de Tetelcingo, Morelos',
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
