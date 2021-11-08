<template>
  <div class="contenedor-selector-leng">
    <div class="menu-item-vertical-line"></div>
    <!-- <button class="selector-lenguaje">{{$i18n.locales[0].name}}</button> -->
    <a
      :class="[
        isSpanishActive ? 'selector-lenguaje-activo' : 'selector-lenguaje',
      ]"
      @click="setLocale($i18n.locales[0].code)"
    >
      {{ $i18n.locales[0].name }}
    </a>
    <p class="divisor-selector-lenguaje">|</p>
    <a
      :class="[
        !isSpanishActive ? 'selector-lenguaje-activo' : 'selector-lenguaje',
      ]"
      @click="setLocale($i18n.locales[1].code)"
    >
      {{ $i18n.locales[1].name }}
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    isSpanishActive() {
      return this.$i18n.locale === 'es';
    },
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem('locale', locale);
    },
  },
};
</script>

<style></style>
