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
      <!--
      <div
        id=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-mixteco
        "
        @click="toggleWindow(3)"
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
      -->
      <div
        id=""
        class="
          sumario-lengua-terminal-item sumario-lengua-terminal-item-mixteco
        "
        @click="toggleWindow(4)"
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
        @click="toggleWindow(5)"
      >
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/yolo1241"
            target="_blank"
            >yolo1241</a
          ></code
        >
        <h3 class="sumario-lengua-terminal-titulo">
          <span v-html="$t('topicIndex.bottomCards.mixtec.region5')"></span>
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
          textContent:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
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
          textContent:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
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
          textContent:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
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
        /*
        {
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region3'),
          textContent:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
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
        */
        {
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region4'),
          textContent:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
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
        {
          rootLang: this.$t('languageIndex.mixtec.title'),
          title: this.$t('topicIndex.bottomCards.mixtec.region5'),
          textContent:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi aperiam officiis numquam recusandae voluptatem, natus veritatis atque neque in mollitia dicta dolor ea molestias ipsam non nam, ex, vitae facilis nemo nobis distinctio quis. Similique corporis animi obcaecati ex modi nam ipsum quis ducimus consequatur facilis culpa, laboriosam numquam atque quos voluptatem sequi! Sint, sed natus. Porro vitae doloribus commodi, neque illo autem? Autem asperiores praesentium voluptatibus id illum nihil dolore consequuntur, blanditiis enim maiores odit nostrum officiis veniam, magni tempore deleniti ab nemo dolores exercitationem, facilis laborum. Minus provident exercitationem animi sunt facilis accusamus? Minima commodi dignissimos molestiae. Illo quas excepturi iste facilis amet possimus quaerat nesciunt aliquam dicta. Delectus nemo est nihil officia saepe voluptates necessitatibus sed!',
          imgUri:
            '/generals/IMAGENES_TERMINAL_LANGUAGES_sumario/mixteco_yoloxochitl-image.jpg',
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
              src: 'Mixteco de Yoloxóchitl',
            },
          ],
          grammar: [
            {
              display: 'Ver documentos',
              src: 'Mixteco de Yoloxóchitl',
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
