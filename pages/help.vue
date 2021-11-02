<template>
    <main class=''>
        <div v-html="$t('help.content')" ></div>
  </main>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  head(){
    return{
      title:this.$t('navBar.help')
    /* metatags  
    meta:[
        {name:'twitter:title', content: this.post.title},
        {name:'twitter:description', content:"prueba de proyecto nuxt"},
        {name:'twitter:image', content:'none'},
        {name:'twitter:card', content:'summary_large_image'}
      ]
      */
    }
  },
  methods: {
  async prueba_axios() {
    const ip = await this.$axios.$get('http://icanhazip.com')
    this.prueba = ip
  }
}
}
</script>
<style >
h1.titulo-estaticas {
  color: var(--help);
}
</style>