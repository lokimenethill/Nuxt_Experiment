<template>
  <div v-show="alert" class="contenedor-alerta-animada">
            <div class="contenedor-alerta">
              <button @click="closeWindow()" class="boton-cerrar-alerta">x</button>
              <div class="contenedor-main-alerta ">
                <p class="texto-alerta">{{ $t('commonComponents.NotEnoughWindow') }}</p>
              </div>
            </div>
          </div>
</template>
<script>
export default {
  props: {
    showRw: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      alert: this.showRw,
    };
  },
  methods: {
    closeWindow() {
      this.alert = false;
      this.$emit('alert', this.alert);
    },
  },
};
</script>
