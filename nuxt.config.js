import vueI18n from './config/i18n';

export default {
  ssr: false,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  target: 'server',
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
      {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
      {
        rel:"preconnect",
        href:"https://fonts.googleapis.com",
      },
      {
        rel:"preconnect", 
        href:"https://fonts.gstatic.com",
      },
      {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
      },
      {
        re:"manifest",
        href:"../imagenes-generales/favicon_package/site.webmanifest",
      }
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
