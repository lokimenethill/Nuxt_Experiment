<template>
  <div v-if="window" id="myModal" class="fondo-pantalla-emergente">
    <div
      class="
        contenedor-pantalla-emergente contenedor-pantalla-emergente-mixteco
      "
    >
      <nav class="header-pantalla-emergente">
        <div class="contenedor-breadcums-pantalla-emergente">
          <nuxt-link :to="localePath('languageIndex')" class="breadcums-pantalla-emergente">{{ $t('navBar.languagesIndex') }}</nuxt-link>
          <p class="separador-breadcums">/</p>
          <a @click="closeWindow" class="breadcums-pantalla-emergente">{{datasend.rootLang}}</a>
          <p class="separador-breadcums">/</p>
          <a href="" class="breadcums-pantalla-emergente-activo">{{datasend.title}}</a>
        </div>
        <div class="boton-cerrar">
          <button class="cerrar" @click="closeWindow">x</button>
        </div>
      </nav>
      <div class="contenedor-titulo-pantalla-emergente">
        <h1 class="titulo-pantalla-emergente titulo-pantalla-emergente-mixteco">
          {{ datasend.title }}
        </h1>
      </div>

      <div class="contenedor-columnas-pantalla-emergente">
        <div class="columna-izquierda-pantalla-emergente">
          <div class="contenedor-texto-lengua-pantalla-emergente">
            <p>{{ datasend.textContent }}</p>
          </div>
        </div>
        <div class="columna-derecha-pantalla-emergente">
          <figure class="figure-pantalla-emergente">
            <img
              class="imagen-pantalla-emergente"
              :src="datasend.imgUri"
              alt=""
            />
            <figcaption class="pie-foto-pantalla-emergente">
              Pie de foto
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="footer-pantalla-emergente">
        <div
          class="footer-columna-item lexicons-footer-item-pantalla-emergente"
        >
          <h2
            class="
              titulo-footer-pantalla-emergente
              titulo-footer-pantalla-emergente-mixteco
            "
          >
            Lexicons
          </h2>
          <a
            v-for="(element, index) in datasend.lexicons"
            :key="index"
            :v-bind="index"
            class="vinculo-footer-pantalla-emergente"
            >{{ element.display }}</a
          >
        </div>
        <div class="footer-columna-item">
          <h2
            class="
              titulo-footer-pantalla-emergente
              titulo-footer-pantalla-emergente-mixteco
            "
          >
            Flora & fauna
          </h2>
          <a
            v-for="(element, index) in datasend.floraFauna"
            :key="index"
            :v-bind="index"
            class="vinculo-footer-pantalla-emergente"
            >{{ element.display }}</a
          >
        </div>
        <div class="footer-columna-item">
          <h2
            class="
              titulo-footer-pantalla-emergente
              titulo-footer-pantalla-emergente-mixteco
            "
          >
            Corpora
          </h2>
          <a
            v-for="(element, index) in datasend.corpora"
            :key="index"
            :v-bind="index"
            class="vinculo-footer-pantalla-emergente"
            >{{ element.display }}</a
          >
        </div>
        <div class="footer-columna-item">
          <h2
            class="
              titulo-footer-pantalla-emergente
              titulo-footer-pantalla-emergente-mixteco
            "
          >
            Grammar
          </h2>
          <a
            v-for="(element, index) in datasend.grammar"
            :key="index"
            :v-bind="index"
            class="vinculo-footer-pantalla-emergente"
            >{{ element.display }}</a
          >
        </div>
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
    showWs: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      json_datasend: {},
      contador: 1,
      window: this.showWs,
    };
  },
  methods: {
    closeWindow() {
      this.window = false;
      this.$emit('window', this.window);
    },
  },
};
</script>
