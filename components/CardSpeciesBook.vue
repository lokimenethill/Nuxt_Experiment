<template>
  <div :class=" [isGrid ? 'indice__tarjeta' : 'indice__tarjeta-vista-lista']">
    <div :class="[isGrid ? 'indice__tarjeta__header' : 'indice__tarjeta__header-vista-lista']">
      <!-- :TODO FALTA AGREGAR I18N A LOS LINKS  -->
      <nuxt-link 
        to="/en/ethnobotanic-catalog/Pseudobombax%20ellipticum" 
        :class="[isGrid ? 'indice__tarjeta__header__liga'
        : 'indice__tarjeta__header__liga-vista-lista']">
        <img 
          :class="[isGrid ? 'indice__tarjeta__header__liga__img' : 'oculto']" 
          :src="especie.miniatura_img_url" alt="Imagen 1 a 1">
        <div :class="[isGrid ? 'indice__tarjeta__header__data-container' : 'indice__tarjeta__header__data-container-vista-lista']">
          <h3 :class="[isGrid ? 'indice__tarjeta__header__liga__titulo' : 'indice__tarjeta__header__liga__titulo-vista-lista']">
          <i>{{especie.nombre_cientifico}}</i>
          {{especie.indicador_subespecie}}
          <i>{{especie.subespecie}}</i>
          {{especie.autor}}</h3>
          <h4 class="indice__tarjeta__header__liga__familia">{{especie.familia}}</h4>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// importing species data
import species from "~/assets/data/species.json";

export default {
  props: {
    nombre: {
      type: String,
      default: "sin especie",
      requiered: true,
    },
    isGrid: Boolean,
  },
  // 1.3 Definir data del componente
  data() {
    return {
      especie: {},
    };
  },
  created(){
    // Se extrae el nombre de la propiedad
    const nombre = this.nombre;
    // Se busca la informacion de al especie en el arreglo
    // de especies con Array.prototype.find()
    const especieEncontrada = species.find(
      (especie) => especie.nombre_cientifico === nombre,
    );
    this.especie = especieEncontrada;
  },

};
</script>

<style scoped>
  @import '@/assets/estilos-catalogo.css';
</style>