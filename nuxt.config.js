import vueI18n from './config/i18n';

export default {
  ssr: false,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - prueba1',
    title: 'prueba1',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/generals/logo-mesolex-favicon-01.svg',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/estilos.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n', '@nuxtjs/axios'],
  // internacionalizacion
  i18n: {
    parsePages: true,
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: 'es',
    },
    locales: [
      { code: 'es', name: 'ESP' },
      { code: 'en', name: 'ENG' },
    ],
    defaultLocale: 'en',
    vueI18n,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    API_HOST: 'https://staging.mesolex.org/api/search/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
