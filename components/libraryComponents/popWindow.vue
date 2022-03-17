<template>
  <div v-if="window" id="myModal-1" class="fondo-pantalla-emergente-2">
    <div class="contenedor-pantalla-emergente-ficha--bibliografica">
      <nav class="header-pantalla-emergente-ficha--bibliografica">
        <div class="boton-cerrar">
          <button @click="closeWindow" class="cerrar">x</button>
        </div>
      </nav>
      <div class="contenedor-titulo-pantalla-emergente-ficha--bibliografica">
        <h1
          class="
            titulo-pantalla-emergente
            titulo-pantalla-emergente-ficha--bibliografica
          "
        >
          {{ $t('library.popWinTitle') }}
        </h1>
      </div>

      <div class="contenedor-columnas-pantalla-emergente-ficha--bibliografica">
         <!--
        <div class="columna-izquierda-pantalla-emergente-ficha--bibliografica">
          <p class="ano">
            <span>{{ datasend.year }}</span>
          </p>
        </div>
        -->
        <div class="columna-derecha-pantalla-emergente-ficha--bibliografica">
          <div
            class="
              contenedor-texto-lengua-pantalla-emergente-ficha--bibliografica
            "
          >
            <p class="ficha_texto">
              <!--
              <span class="autor-1">
                <span v-for="author in datasend.authors" :key="author">
                  {{ author }}
                </span> </span
              ><span class="titulo"
                ><i>{{ datasend.title }}</i></span
              >--><span class="resto" v-html="datasend.extra" ></span>
            </p>
          </div>
        </div>
      </div>
      <div class="footer-pantalla-emergente-ficha--bibliografica">
        <button @click="copyData()" class="boton_library">
          {{ $t('library.popWinCopyBuutton') }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    datasend: {
      type: Object,
      default() {
        return { data: {} };
      },
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      json_datasend: {},
      contador: 1,
      window: this.show,
      textToCopy:
       /* this.datasend.year +
        ' ' +
        this.datasend.authrs +
        ' ' +
        this.datasend.title +
        ' ' + */
        this.datasend.extra,
    };
  },
  methods: {
    closeWindow() {
      this.window = false;
      this.$emit('window', this.window);
    },
    copyData() {
      navigator.clipboard
        .writeText(this.textToCopy)
        .then(() => {
          console.log('text copied');
        })
        .catch((err) => {
          console.log('Something went wrong', err);
        });
      this.closeWindow();
    },
  },
};
</script>
