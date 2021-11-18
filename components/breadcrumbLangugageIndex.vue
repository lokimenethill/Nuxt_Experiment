<template>
  <div class="contenedor-breadcums">
    <nuxt-link :to="localePath('languageIndex')" class="breadcums">{{
      $t('navBar.languagesIndex')
    }}</nuxt-link>
    <p class="breadcums">/</p>
    <a href="" class="breadcums-activo">{{ datasend }}</a>
  </div>
</template>
<script>
export default {
  props: {
    datasend: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    pruebastorepush() {},
  },
};
</script>