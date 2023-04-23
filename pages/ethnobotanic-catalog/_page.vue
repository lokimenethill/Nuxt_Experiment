<template>
  <div id="contenedor-vue" class="contenedor-general">
    <header>
      <section>
        <nav class="menu-lengua-terminal">
          <button class="lengua-terminal-item" name="mixteco">Mixteco</button>
          <button class="lengua-terminal-item" name="Náhuatl">Náhuatl</button>
          <button class="lengua-terminal-item" name="Totonaco">Totonaco</button>
          <!-- Separator -->
          <button class="lengua-terminal-item" name="Comentario">Comentario</button>
          <!-- Separator -->
          <button class="lengua-terminal-item boton-iconos-lengua-terminal-item" name="Play">
            <span class="material-icons-sharp iconos-lengua-terminal-item">
              music_note
            </span>
          </button>
          <button class="lengua-terminal-item boton-iconos-lengua-terminal-item" name="Rewind">
            <span class="material-icons-sharp iconos-lengua-terminal-item">replay</span>
          </button>
          <button class="lengua-terminal-item boton-iconos-lengua-terminal-item" name="Back">
            <span class="material-icons-sharp iconos-lengua-terminal-item">
              arrow_back
            </span>
          </button>
        </nav>
      </section>
    </header>
    <div class="">

    </div>
    <aside 
      id="sidebar-menu"
      ref="sidebarMenu"
      class="contenedor-menu-flotante abierto">
      <nav class="menu-flotante">
        <div class="menu-flotante-header">
          <button>x</button>
          <h4>Contenido</h4>
        </div>
        <div class="menu-flotante-body"></div>
      </nav>
      <div class="">

      </div>
    </aside>
    <!-- {{$route.params.page}} -->
  </div>
</template>

<script>
// importing species data
import species from "~/assets/data/species.json";
export default {
  data(){
    return {
      playing: false,
      visibleSideBar: false,
      species,
    };
  },
};
</script>

<style scoped>
@import '@/assets/estilos-catalogo-interior.css';
</style>