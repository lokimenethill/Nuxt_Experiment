<template>
  <div>
    <header class="">
      <!-- Iconos de materialice por medio de googlefonts https://developers.google.com/fonts/docs/material_icons-->
      <!-- Catálogo iconos de google: https://fonts.google.com/icons -->
      <nav class="">
        <nuxt-link :to="localePath('index')">
          <img
            class="logo-mesolex"
            src="/generals/logo-mesolex-menu-01.svg"
            alt="logo mesolex"
          />
        </nuxt-link>

        <nuxt-link
          id="menu-item-1"
          :to="localePath('topicIndex')"
          class="menu-item"
          >{{ $t('navBar.topicIndex') }}</nuxt-link
        >
        <nuxt-link
          id="menu-item-2"
          :to="localePath('languageIndex')"
          class="menu-item"
          >{{ $t('navBar.languagesIndex') }}</nuxt-link
        >
        <nuxt-link
          id="menu-item-3"
          to="../about/about.html"
          class="menu-item"
          >{{ $t('navBar.about') }}</nuxt-link
        >
        <nuxt-link
          id="menu-item-4"
          :to="localePath('help')"
          class="menu-item"
          >{{ $t('navBar.help') }}</nuxt-link
        >
        <!-- Language Selector -->
        <the-language-selector />
      </nav>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer class="">
      <nav class="nav-footer">
        <a id="logo-neh-a" href="https://www.neh.gov/" target="_blank">
          <img
            id="logo-neh"
            class=""
            src="/generals/NEH-logo.png"
            alt="National Endowment for the Humanities logo"
          />
        </a>
        <a href="" class="footer-item">{{ $t('footer.credits') }}</a>
        <a href="" class="footer-item">{{ $t('footer.terms') }}</a>
        <div class="contenedor-footer-item-developed-by">
          <p class="footer-item">{{ $t('footer.dev') }}:</p>
          <img
            id="drako-estudio-logo"
            src="/generals/logo-drakoestudio-icon46px.png"
            alt="Drako Estudio Logo"
          />
          <a
            id="link-drako-estudio"
            href="mailto: contacto@drakoestudio.com.mx."
            class="footer-item"
            >Drako Estudio</a
          >
        </div>
        <a href="mailto:mesolex.director@gmail.com" class="footer-item"
          >mesolex.director@gmail.com</a
        >
      </nav>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: document.cookie,
      test: '',
      localLang: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'POST',
          to: '/post',
        },
        {
          icon: 'mdi-apps',
          title: 'Biblioteca',
          to: '/publicaciones/dino',
        },
        {
          icon: 'mdi-apps',
          title: 'Search Bar',
          to: '/searchView',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
  methods: {
    created() {
      if (process.client) {
        const locale = localStorage.getItem('locale');
        if (locale) {
          this.$i18n.locale = locale;
        }
      }
    },
    // changeLanguage(lang) {
    //   switch (lang) {
    //     case 'es':
    //       document.cookie = 'i18n_redirected=es';
    //       break;
    //     case 'en':
    //       document.cookie = 'i18n_redirected=en';
    //       break;
    //     default:
    //       break;
    //   }
    //   location.reload();
    // },
  },
};
</script>
