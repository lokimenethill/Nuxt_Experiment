<template>
  <div v-if="window" id="myModal" class="fondo-pantalla-emergente">
    <div
    :style="{color: computedColor}"
      class="
        contenedor-pantalla-emergente contenedor-pantalla-emergente-mixteco
      "
    >
      <nav class="header-pantalla-emergente">
        <div class="contenedor-breadcums-pantalla-emergente">
          <nuxt-link
            :to="localePath('languageIndex')"
            class="breadcums-pantalla-emergente"
            >{{ $t('navBar.languagesIndex') }}</nuxt-link
          >
          <p class="separador-breadcums">/</p>
          <a class="breadcums-pantalla-emergente" @click="closeWindow"  >{{
            datasend.rootLang
          }}</a>
          <p class="separador-breadcums">/</p>
          <a href="#" class="breadcums-pantalla-emergente-activo"  v-html="datasend.title" ></a>
        </div>
        <div class="boton-cerrar">
          <button class="cerrar" @click="closeWindow">x</button>
        </div>
      </nav>
      <div class="contenedor-titulo-pantalla-emergente">
        <h1 class="titulo-pantalla-emergente titulo-pantalla-emergente-mixteco" :style="{color: computedColor}"  v-html="datasend.title" >
          
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
              {{ $t('home.ilustration') }}: {{datasend.imgMeta}}
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="footer-pantalla-emergente">
        <div
          class="footer-columna-item lexicons-footer-item-pantalla-emergente"
        >
          <h2
          :style="{color: computedColor}"
            class="
              titulo-footer-pantalla-emergente
              titulo-footer-pantalla-emergente-mixteco
            "
          >
            {{ $t('summaryButtomPopUp.c1') }}
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
            :style="{color: computedColor}"
          >
             {{ $t('summaryButtomPopUp.c2') }}
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
            :style="{color: computedColor}"
          >
             {{ $t('summaryButtomPopUp.c3') }}
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
            :style="{color: computedColor}"
          >
             {{ $t('summaryButtomPopUp.c4') }}
          </h2>
          <a
            v-for="(element, index) in datasend.grammar"
            :key="index"
            :v-bind="index"
            class="vinculo-footer-pantalla-emergente"
            >{{ element.display }}</a
          >
        </div>
        <div class="footer-columna-item-creditos  ">
              <!-- <h2 class="titulo-footer-pantalla-emergente titulo-footer-pantalla-emergente-mixteco">Credits</h2> -->
              <nuxt-link :to="localePath('credits')"                class="vinculo-footer-pantalla-emergente-creditos  ">{{ $t('summaryButtomPopUp.c5') }}</nuxt-link>
              <img class="logo_creditos " src="/generals/logo-mesolex-menu-01.svg">

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
    show: {
      type: Boolean,
      default: true,
    },
    keyC: {
      type: String,
      default:"",
    },
  },
  data() {
    return {
      json_datasend: {},
      contador: 1,
      window: this.show,
    };
  },
  computed:{
    computedColor(){
      return this.keyC;
    },
  },
  methods: {
    closeWindow() {
      this.window = false;
      this.$emit('window', this.window);
    },
  },
};
</script>
