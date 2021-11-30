<template>
  <main class="">
    <div v-html="$t('terms.content')"></div>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: this.$t('footer.terms'),
      /* metatags
    meta:[
        {name:'twitter:title', content: this.post.title},
        {name:'twitter:description', content:"prueba de proyecto nuxt"},
        {name:'twitter:image', content:'none'},
        {name:'twitter:card', content:'summary_large_image'}
      ]
      */
    };
  },
  methods: {
    async prueba_axios() {
      const ip = await this.$axios.$get('http://icanhazip.com');
      this.prueba = ip;
    },
  },
};
</script>
<style>
#terms-conditions {
  color: var(--terms);
}
</style>