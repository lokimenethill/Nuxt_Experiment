<template>
  <main class="contendor-textos">
    <section class="main-columna-izquierda">
      <section style="min-height: 4%;">
        <h3 class="nombre-especie-lengua-terminal">
          {{especie[`nombre${text}`]}}
        </h3>
      </section>
      <h1 class="nombre-cientifico">
        <i>{{especie.nombre_cientifico}}</i>
        {{especie.indicador_subespecie}} 
        <i>{{especie.subespecie}}</i>
        {{especie.autor}}
      </h1>
      <h2 class="familia">{{especie.familia}}</h2>
      <a :href="especie.imagen_principal_url" target="_blank">
        <img
          :src="especie.imagen_principal_url"
          alt="Imagen representativa de la especie"
          width="100%"
          height="auto">
      </a>
    </section>
    <section class="main-columna-derecha">
      <article>
        <div class="contenedor-lengua-terminal">
          <div v-html="getTopText()"></div>
        </div>
      </article>
      <hr class="divisor-lengua-terminal--traduccion">
      <div id="menu-traduccion" class="menu-traduccion">
        <button 
          class="menu-traduccion-item"
          :class="{ activo: isButtonActive('spanish')}"
          @click="setLanguageText('spanish')">
          Español
        </button>
        <button 
          class="menu-traduccion-item"
          :class="{ activo: isButtonActive('english')}"
          @click="setLanguageText('english')">
            English
        </button>
      </div>
      <article v-show="text !== 'comentario'">
        <div class="contenedor-traduccion">
          <div v-html="especie[`texto${text}${translationLanguage}`]"></div>
        </div>
      </article>
      <audio ref="audio" :src="getAudioUrl()">Download audio</audio>
    </section>
  </main>
</template>

<script>
// Auxiliary Variables
const topPanelOptions = {
  mixtec: "_mixteco",
  nahuatl: "_nahuatl",
  totonac: "_totonaco",
  comment: "comentario",
};

const bottomPanelOptions = {
  english: "_ing",
  spanish: "_esp",
};
export default {
  props: {
    especie: {
      type: Object,
      default: () =>{},
    },
    text: {
      type: String,
      default: topPanelOptions.mixtec,
    },
  },
  data(){
    return {
      translationLanguage: bottomPanelOptions.spanish,
    };
  },
  methods:{
    getTopText(){
      return this.especie[
        this.text === "comentario"
          ? `comentario${this.translationLanguage}`
          : `texto${this.text}`
      ];
    },
    isButtonActive(buttonName){
      return bottomPanelOptions[buttonName] === this.translationLanguage;
    },
    setLanguageText(language) {
      this.translationLanguage = bottomPanelOptions[language];
    },
    getAudioUrl(){
      return this.text === "comentario"? "" : this.especie[`audio${this.text}_url`];
    },
  },
};
</script>

<style scoped>
@import '@/assets/estilos-catalogo.css';
@import '@/assets/estilos-catalogo-interior.css';
</style>