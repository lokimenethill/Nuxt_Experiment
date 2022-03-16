<template>
  <main class="">
    <div v-html="$t('about.content')"></div>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: this.$t('navBar.about'),
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
  },
};
</script>
<style>
#about-mesolex,
#topic-index-about {
  color: var(--flora1);
}
</style>
