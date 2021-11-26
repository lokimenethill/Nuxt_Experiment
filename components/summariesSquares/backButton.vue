<template>
  <div @click="back()" class="sumario-lexico-item-boton-regresar">
    <h5 class="titulo-sumario-modulo-lexico-instrucciones">
      {{ $t('topicIndex.bottomCards.back') }}
    </h5>
    <span
      class="material-icons-outlined sumario-lexico-item-icono-boton-regresar"
    >
      arrow_back
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
    
    };
  },
  computed: {
    
  },
  methods: {
   back(){
     this.$router.go(-1);
   },
  },
};
</script>
