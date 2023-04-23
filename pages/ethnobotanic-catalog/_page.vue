<template>
  <div id="contenedor-vue" class="contenedor-general">
    <header>
      <section>
        <nav class="menu-lengua-terminal">
          <button 
            class="lengua-terminal-item"
            name="mixteco"
            :disabled="isButtonActive('mixtec')"
            :class="{ activo : isButtonActive('mixtec')}"
            @click="setLanguageText('mixtec')">
            Mixteco
          </button>
          <button 
            class="lengua-terminal-item" name="Náhuatl"
            :disabled="isButtonActive('nahuatl')"
            :class="{ activo : isButtonActive('nahuatl')}"
            @click="setLanguageText('nahuatl')">
            Náhuatl
          </button>
          <button 
            class="lengua-terminal-item" name="Totonaco"
            :disabled="isButtonActive('totonac')"
            :class="{ activo : isButtonActive('totonac')}"
            @click="setLanguageText('totonac')">
            Totonaco
          </button>
          <!-- Separator -->
          <button
            class="lengua-terminal-item"
            name="Comentario"
            :class="{ activo : isButtonActive('comment')}" 
            @click="setLanguageText('comment')">
            Comentario
          </button>
          <!-- Separator -->
          <button
            class="lengua-terminal-item boton-iconos-lengua-terminal-item" 
            name="Play"
            :disabled="isButtonActive('comment')"
            @click="playPause">
            <span class="material-icons-sharp iconos-lengua-terminal-item">
              {{ playing ? 'pause' : 'music_note' }}
            </span>
          </button>
          <button
            class="lengua-terminal-item boton-iconos-lengua-terminal-item"
            name="Rewind"
            :disabled="isButtonActive('comment')" 
            @click="resetAudio">
            <span class="material-icons-sharp iconos-lengua-terminal-item">
              replay
            </span>
          </button>
          <button 
            class="lengua-terminal-item boton-iconos-lengua-terminal-item" 
            name="Back"
            @click="goToEthobotanicCatalog">
            <span class="material-icons-sharp iconos-lengua-terminal-item">
              arrow_back
            </span>
          </button>
        </nav>
      </section>
    </header>
    <div class="">
      <species-viewer ref="speciesViewer" :especie="especie" :text="topPanelSelection"/>
    </div>
    <aside 
      id="sidebar-menu"
      ref="sidebarMenu"
      class="contenedor-menu-flotante abierto">
      <nav class="menu-flotante">
        <div class="menu-flotante-header">
          <button @click="toggleSideBar">x</button>
          <h4>Contenido</h4>
        </div>
        <div class="menu-flotante-body">
          <nuxt-link 
            v-for="especieItem in speciesDataset"
            :key="especieItem.nombre_cientifico"
            to="/en/ethnobotanic-catalog/Pseudobombax%20ellipticum">
            <div class="menu-flotante-body__data-container-vista-lista">
              <h3 class="menu-flotante-body__liga__titulo-vista-lista">
                <i>{{especieItem.nombre_cientifico}}</i> {{especieItem.indicador_subespecie}}
                <i>{{especieItem.subespecie}}</i>
                {{especieItem.autor}}
              </h3>
              <h4 class="menu-flotante-body__liga__familia">{{especieItem.familia}}</h4>
            </div>
          </nuxt-link>
        </div>
      </nav>
      <div class="">
        <button class="boton-menu-flotante" @click="toggleSideBar">
          <span class="material-icons-sharp">
            {{ visibleSideBar ? 'close': 'view_list' }}
          </span>
        </button>
        <span class="material-icons-sharp">keyboard_arrow_right</span>
      </div>
    </aside>
    <audio ref="audio" :src="getAudioUrl()">Download audio</audio>
  </div>
</template>

<script>
// importing species data
// Auxiliary Variables
const topPanelOptions = {
  mixtec: "_mixteco",
  nahuatl: "_nahuatl",
  totonac: "_totonaco",
  comment: "comentario",
};

export default {
  async asyncData({ params }){
    const speciesDataset = await require('~/assets/data/species.json');
    const especie = speciesDataset.find( species => species.nombre_cientifico === params.page );
    return{
      especie,
      speciesDataset,
    };
  },
  data(){
    return {
      topPanelSelection: topPanelOptions.mixtec,
      playing: false,
      visibleSideBar: false,
    };
  },
  methods:{
    getAudioUrl(){
      return this.topPanelSelection === "comentario"? 
      "" : this.especie[`audio${this.topPanelSelection}_url`];
    },
    playPause(){
      if (this.playing) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
      this.playing = !this.playing;
    },
    resetAudio() {
      this.$refs.audio.currentTime = 0;
    },
    stop() {
      this.playing = false;
    },
    isButtonActive(buttonName) {
      return topPanelOptions[buttonName] === this.topPanelSelection;
    },
    setLanguageText(language){
      this.stop();
      this.topPanelSelection = topPanelOptions[language];
      this.$refs.speciesViewer.setLanguageText("spanish");
      if (language === "comment"){
        this.$refs.speciesViewer.$refs.translationPanel.style.order = "-1";
      }else{
        this.$refs.speciesViewer.$refs.translationPanel.style.order = "0";
      }
    },
    goToEthobotanicCatalog(){
      const localePath = '/ethnobotanic-catalog';
      const currentLocale = this.$i18n.locale;
      const url = `/${currentLocale}${localePath}`;
      this.$router.push(url);
    },
    toggleSideBar(){
      this.visibleSideBar = !this.visibleSideBar;
      if (this.visibleSideBar) {
        this.$refs.sidebarMenu.style.left = "0";
      } else {
        this.$refs.sidebarMenu.style.left = "-40%";
      }
    },
  },
};
</script>

<style scoped>
@import '@/assets/estilos-catalogo.css';
@import '@/assets/estilos-catalogo-interior.css';
</style>