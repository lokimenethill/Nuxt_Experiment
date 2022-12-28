<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">{{$t('commonComponents.ChooseTL')}}</h4>
    <!-- Contenedor  mosaico lenguas terminales sumario -->
    <div class="contenedor-12-col contenedor-sumario-lenguas-terminales">
      <!-- Módulo mosaico lenguas terminales sumario -->
      <div
        id="myBtn"
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-mixteco
        "
        @click="toggleWindow(0)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mixtec.region0')"></span>
        </h3>
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <!-- Módulo mosaico lenguas terminales sumario etc -->
      <div
        id=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-mixteco
        "
        @click="toggleWindow(1)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mixtec.region1')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/magd1235"
            target="_blank"
            >magd1235</a
          ></code
        >
      </div>
      <div
        id=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-mixteco
        "
        @click="toggleWindow(2)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mixtec.region2')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/juxt1235"
            target="_blank"
            >juxt1235</a
          ></code
        >
      </div>
      <div
        id=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-mixteco
        "
        @click="toggleWindow(3)"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mixtec.region4')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/xoch1238"
            target="_blank"
            >xoch1238</a
          ></code
        >
      </div>
      <div
        id=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-mixteco
        "
        @click="toggleWindow(4)"
      >
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/yolo1241"
            target="_blank"
            >yolo1241</a
          ></code
        >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mixtec.region4')"></span>
        </h3>
      </div>
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
    popupWindow,
    backButton,
  },
  data() {
    return {
      showWindow: false,
      numOfWindow: null,
      keyColor:"var(--mixteco0)",
    };
  },
  computed: {
    sendDataWindow() {
      const dataWindow = [
        {
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region0'),
          textContent:this.$t('topicIndex.bottomCards.mixtec.popUpW[0]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/mixteco_historico-image.jpg',
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
              src: 'Mixteco histórico (proto-mixteco)',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Mixteco histórico (proto-mixteco)',
            },
          ],
        },
        {
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region1'),
          textContent:this.$t('topicIndex.bottomCards.mixtec.popUpW[1]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/mixteco_magdalena_penascos-image.jpg',
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
              src: 'Mixteco de Magdalena Peñascos',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Mixteco de Magdalena Peñascos',
            },
          ],
        },
        {
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region2'),
          textContent:this.$t('topicIndex.bottomCards.mixtec.popUpW[2]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/mixteco_san_martin_duraznos-image.jpg',
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
              src: 'Mixteco de San Martín Duraznos',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Mixteco de San Martín Duraznos',
            },
          ],
        },
        
        {
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region3'),
          textContent:this.$t('topicIndex.bottomCards.mixtec.popUpW[3]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/mixteco_san_martin_peras-image.jpg',
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
              src: 'Mixteco de San Martín Peras',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Mixteco de San Martín Peras',
            },
          ],
        },
        
        {
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region4'),
          textContent:this.$t('topicIndex.bottomCards.mixtec.popUpW[4]'),
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/mixteco_xochapan-image.jpg',
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
              src: 'Mixteco de Xochapan',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Mixteco de Xochapan',
            },
          ],
        },
      ];
      console.log(this.numOfWindow);
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
