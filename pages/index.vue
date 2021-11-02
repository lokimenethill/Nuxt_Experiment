<template>
    <main class="">
    <div class="contenedor-general-rebasado">
      <div class="contenedor-general">
        <h1>{{$t('home.title')}}</h1>
        <p class="large">
          {{$t('home.p1')}}
        </p>
      </div>
    </div>
      <div class="contenedor-slideshow">
        <div class="slide ">
          <div id="slide1" class="contenido-slide " >
            <!--Para fondo-->
            <div class="contenedor-slideshow-anidado">
              <!--Para contenido-->
            </div>

          </div>
          <div class="contenedor-credito-slideshow">
            <p class="credito-slideshow ">{{$t('home.ilustration')}}: Inocencio Jiménez</p>
          </div>
        </div>
      </div>

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
      title:this.$t('navBar.home')
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
.contenedor-slideshow {
  width: 100%;
  height: 378px;
}
.slide {
  height: 100%;
}
.contenido-slide {
  height: calc(378px - 1.5rem);
}

.contenedor-slideshow-anidado {
  height: 100%;
  max-width: 1020px;
  margin: 0px auto;
  padding: 1rem;
}

.contenedor-credito-slideshow {
  padding: 0 1rem 0 0;
  margin: 1rem auto 0 auto;
  max-width: 1020px;
}

p.credito-slideshow {
  font-size: 0.6666rem; /*12 px*/
  line-height: 100%;
  margin-top: 0;
  margin-bottom: 0;
  text-align: right;
  color: var(--gris1);
}
/*Slides de home*/
#slide1 {
  background-image: url(/home/slide1-background.jpg);
  background-repeat: no-repeat;
  background-size: 125%;
  background-position: 40% 0%;
  animation: scala-background-120-a-100 15s linear 1;
}
/* animaciones de slider individuales  */
@keyframes scala-background-120-a-100 {
  100% {
    background-size: 110%;
    background-position: 50% 0%;
  }
}
@media only screen and (min-width: 1400px) {
  .contenedor-slideshow {
    width: 100%;
    min-height: 800px;
  }
  .contenido-slide {
    min-height: calc(800px - 1.5rem);
  }
}
</style>