<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">Choose a terminal language</h4>
    <!-- Contenedor  mosaico lenguas terminales sumario -->
    <div class="contenedor-12-col contenedor-sumario-lenguas-terminales">
      <!-- Módulo mosaico lenguas terminales sumario -->
      <div
        id="myBtn"
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-totonaco
        "
        @click="toggleWindow(0)"
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
      keyColor:"var(--totonaco0)",
    };
  },
  computed: {
    sendDataWindow() {
      const dataWindow = [
        {
          rootLang: this.$t('languageIndex.totonacan.title'),
          title: this.$t('topicIndex.bottomCards.totonacan.region0'),
          textContent:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
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
              src: 'uri://',
            },
          ],
          corpora: [
            {
              display: this.$t('languageIndex.watchVideos'),
              src: 'Totonaco del municipio de Zongozotla',
            },
          ],
          grammar: [
            {
              display: this.$t('languageIndex.watchBooks'),
              src: 'Totonaco del municipio de Zongozotla',
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
