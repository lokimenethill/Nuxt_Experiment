<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">Choose a terminal language</h4>
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
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mixtec.region3')"></span>
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
      >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mixtec.region5')"></span>
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/yolo1241"
            target="_blank"
            >yolo1241</a
          ></code
        >
      </div>
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
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region0'),
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
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region1'),
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
