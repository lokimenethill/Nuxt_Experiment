<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">{{$t('commonComponents.ChooseTL')}}</h4>
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
      keyColor:"var(--maya0)",
    };
  },
  computed: {
    sendDataWindow() {
      const dataWindow = [
        {
          rootLang: this.$t('languageIndex.mayan.title'),
          title: this.$t('topicIndex.bottomCards.mayan.region0'),
          textContent:
            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/maya_chol-image.jpg',
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
              src: 'Diccionario histórico de Chol (Maya): Las fuentes léxica de 1789 a 1935',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Diccionario histórico de Chol (Maya): Las fuentes léxica de 1789 a 1935',
            },
          ],
        },
        {
          rootLang: this.$t('languageIndex.mayan.title'),
          title: this.$t('topicIndex.bottomCards.mayan.region1'),
          textContent:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/maya_chuj-image.jpg',
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
              src: 'Diccionario de Chuj (Maya) hablado en San Mateo Ixtatán, Guatemala (1964–65)',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Diccionario de Chuj (Maya) hablado en San Mateo Ixtatán, Guatemala (1964–65)',
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
