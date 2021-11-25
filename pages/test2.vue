<template>
  <div>
    <div class="contenedor-general-rebasado">
      <div class="contenedor-general">
        <h4 class="instrucciones">{{ $t('topicIndex.instructions') }}</h4>
        <div v-if="lexic == false" class="contenedor-topic-index">
          <transition name="lexicons">
            <div
              id=""
              class="topic-index-item lexicons"
              @click="lexiconsPush()"
            >
              <h3 class="titulo-modulo">
                {{ $t('topicIndex.topCards.lexicon.title') }}
              </h3>
              <p class="descripcion-modulo">
                {{ $t('topicIndex.topCards.lexicon.text') }}
              </p>
            </div>
          </transition>
          <div onclick="location.href='#'" class="topic-index-item library">
            <h3 class="titulo-modulo">
              {{ $t('topicIndex.topCards.library.title') }}
            </h3>
            <p class="descripcion-modulo">
              {{ $t('topicIndex.topCards.library.text') }}
            </p>
          </div>
          <div
            id=""
            onclick="location.href='#'"
            class="topic-index-item flora-and-fauna"
          >
            <h3 class="titulo-modulo">
              {{ $t('topicIndex.topCards.flora.title') }}
            </h3>
            <p class="descripcion-modulo">
              {{ $t('topicIndex.topCards.flora.text') }}
            </p>
          </div>
          <div
            id="audios"
            onclick="location.href='#'"
            class="topic-index-item audios"
          >
            <h3 class="titulo-modulo">
              {{ $t('topicIndex.topCards.audios.title') }}
            </h3>
            <p class="descripcion-modulo">
              {{ $t('topicIndex.topCards.audios.text') }}
            </p>
            <!-- &#8209; es un - de no separación y sirve para mantener juntas 2 palabras que van unidas por guion-->
          </div>
          <div
            id="videos"
            onclick="location.href='#'"
            class="topic-index-item videos"
          >
            <h3 class="titulo-modulo">
              {{ $t('topicIndex.topCards.videos.title') }}
            </h3>
            <p class="descripcion-modulo">
              {{ $t('topicIndex.topCards.videos.text') }}
            </p>
          </div>
        </div>
        <!-- Contenedor léxicos - Se despliega al darle click al módulo de Léxicos-->
        <p>
          <strong>NOTA</strong> Esto de aca abajo 👇🏼 debe de aparecer al darle
          click a Léxicos
        </p>
        <div v-if="lexic" class="contenedor-mosaico-lexicos">
          <div onclick="" class="lexico-item item-amuzgo">
            <h5 class="titulo-modulo-lexico">
              {{ $t('topicIndex.bottomCards.amuzgoan.title') }}
            </h5>
            <h3 class="descripcion-modulo-lexico">
              {{ $t('topicIndex.bottomCards.amuzgoan.region0') }}
            </h3>
            <code class="modulo-lexico"
              ><a
                href="https://glottolog.org/resource/languoid/id/sanp1260"
                target="_blank"
                >sanp1260</a
              ></code
            >
          </div>
          <div @click="lexiconsPush()" class="lexico-item-boton-regresar">
            <h5 class="titulo-modulo-lexico-instrucciones">
              {{ $t('topicIndex.bottomCards.back') }}
            </h5>

            <span
              class="material-icons-outlined lexico-item-icono-boton-regresar"
            >
              arrow_back
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lexic: false,
    };
  },
  head() {
    return {
      title: this.$t('navBar.topicIndex'),
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
    lexiconsPush() {
      if (this.lexic === false) {
        this.lexic = true;
      } else {
        this.lexic = false;
      }
    },
  },
};
</script>
<style >
/*CONTENEDOR DE MOSAICO*/
.contenedor-topic-index {
  height: 465px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
}

/*MODULO DE MOSAICO*/
.topic-index-item {
  height: 50%;
  width: 25%;
  flex-grow: 1;
  flex-shrink: 0;
  /*aspect-ratio: 1/1; /*Es para darle proporcion cuadrada, compatible con los navegadores conocidos hasta 2021. Es experimental*/
  display: block;
  padding: 1.5rem 1rem 1rem 1rem;
  margin: 0;
  cursor: pointer;
  /* animation: desplegado-topicos 1s ease-in-out; */
}
.topic-index-item:hover {
  text-decoration: none;
}
.topic-index-item:visited {
  color: none;
}

h3.titulo-modulo {
  font-weight: 600;
  margin-top: 0 !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
}
p.descripcion-modulo {
  color: white;

  line-height: 120%;
}
/*PARTICULARIDADES DE CADA MODULO*/
.animation-reverse {
  animation: reverse;
}
.lexicons {
  width: 50%;
  height: 100%;
  order: -1;
  flex-grow: 2;
  padding-top: 5rem !important;
  background-color: var(--lexicons0);
  animation: desplegado-topicos 1s ease-in-out;
}
.lexicons-enter-active {
  animation: desplegado-topicos 1s ease-in-out;
}
.lexicons-leave-active {
  animation: desplegado-topicos 1s ease-in-out reverse;
}
.lexicons:hover {
  background-color: var(--lexicons1);
}
.library {
  background-color: var(--library1);
  animation: desplegado-topicos 1.1s ease-in-out;
}
.library:hover {
  background-color: var(--library2);
}
.audios {
  background-color: var(--audios0);
  animation: desplegado-topicos 1.2s ease-in-out;
}
.audios:hover {
  background-color: var(--audios1);
}

.flora-and-fauna {
  background-color: var(--flora0);
  animation: desplegado-topicos 1.3s ease-in-out;
}
.flora-and-fauna:hover {
  background-color: var(--flora1);
}
.videos {
  background-color: var(--videos0);
  animation: desplegado-topicos 1.4s ease-in-out;
}
.videos:hover {
  background-color: var(--videos1);
}
/* Animacion mosaico Topic Index */
@keyframes desplegado-topicos {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

/*MODULO DE LEXICOS*/

.contenedor-mosaico-lexicos {
  min-height: 465px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow-x: hidden;
}
.lexico-item {
  flex-basis: 16.66%;
  height: auto;
  aspect-ratio: 1/0.93;
  flex-shrink: 0;
  /*aspect-ratio: 1/1; /*Es para darle proporcion cuadrada, compatible con los navegadores conocidos hasta 2021. Es experimental*/
  display: block;
  padding: 0.5rem;
  margin: 0;
  cursor: pointer;
  border-style: inset;
  background-color: white;
}

.lexico-item:hover a {
  text-decoration: none;
  color: white;
}
.lexico-item:visited {
  color: none;
}
h5.titulo-modulo-lexico {
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 0;
  margin-bottom: 0.8rem;
}
h3.subtitulo-modulo-lexico {
  font-size: 0.6667rem;

  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0 !important;
}
code.modulo-lexico {
  font-size: 0.6rem;
  margin-top: 0.2rem;
  margin-bottom: 0rem;
  display: inline-block;
  background: none;
}
code.modulo-lexico > a {
  color: black;
}
code.modulo-lexico > a:hover {
  text-decoration: underline;
}

code.modulo-lexico > a:visited {
  color: none;
}
h3.descripcion-modulo-lexico {
  font-size: 0.8rem;
  margin-top: 0;
  margin-bottom: 0.05rem;
  letter-spacing: 0.3px;
}

/*Particularidades de cada modulo de lengua terminal*/
div.item-amuzgo {
  border: solid 0.5px var(--amuzgo1);
}
div.item-amuzgo:hover {
  background-color: var(--amuzgo1);
}
div.item-amuzgo .titulo-modulo-lexico {
  color: var(--amuzgo0);
}
div.item-amuzgo .descripcion-modulo-lexico {
  color: var(--amuzgo1);
}
div.item-amuzgo:hover .titulo-modulo-lexico {
  color: white;
  opacity: 0.6;
}
div.item-amuzgo:hover .descripcion-modulo-lexico {
  color: white;
}
/* Nahuatl */
div.item-nahuatl {
  border: solid 0.5px var(--nahuatl0);
  color: var(--nahuatl0);
}
div.item-nahuatl:hover {
  background-color: var(--nahuatl0);
}
div.item-nahuatl .titulo-modulo-lexico {
  color: var(--nahuatl0);
}
div.item-nahuatl .descripcion-modulo-lexico {
  color: var(--nahuatl1);
}
div.item-nahuatl:hover .titulo-modulo-lexico {
  color: white;
  opacity: 0.75;
}
div.item-nahuatl:hover .descripcion-modulo-lexico {
  color: white;
}

/* Maya */
div.item-maya {
  border: solid 0.5px var(--maya1);
  color: var(--maya1);
}
div.item-maya:hover {
  background-color: var(--maya1);
}
div.item-maya .titulo-modulo-lexico {
  color: var(--maya0);
}
div.item-maya .descripcion-modulo-lexico {
  color: var(--maya1);
}
div.item-maya:hover .titulo-modulo-lexico {
  color: white;
  opacity: 0.75;
}

div.item-maya:hover .descripcion-modulo-lexico {
  color: white;
}
/* Mixteco */
div.item-mixteco {
  border: solid 0.5px var(--mixteco1);
  color: var(--mixteco1);
}
div.item-mixteco:hover {
  background-color: var(--mixteco1);
}
div.item-mixteco .titulo-modulo-lexico {
  color: var(--mixteco0);
}
div.item-mixteco .descripcion-modulo-lexico {
  color: var(--mixteco1);
}
div.item-mixteco:hover .titulo-modulo-lexico {
  color: white;
  opacity: 0.65;
}

div.item-mixteco:hover .descripcion-modulo-lexico {
  color: white;
}

/* Totonaco */
div.item-totonaco {
  border: solid 0.5px var(--totonaco1);
  color: var(--totonaco1);
}
div.item-totonaco:hover {
  background-color: var(--totonaco1);
}
div.item-totonaco .titulo-modulo-lexico {
  color: var(--totonaco0);
}
div.item-totonaco .descripcion-modulo-lexico {
  color: var(--totonaco1);
}
div.item-totonaco:hover .titulo-modulo-lexico {
  color: white;
  opacity: 0.6;
}
div.item-totonaco:hover .descripcion-modulo-lexico {
  color: white;
}
div.item-triqui {
  border: solid 0.5px var(--triqui1);
  color: var(--triqui1);
}
div.item-triqui:hover {
  background-color: var(--triqui1);
}
div.item-triqui .titulo-modulo-lexico {
  color: var(--triqui0);
}
div.item-triqui .descripcion-modulo-lexico {
  color: var(--triqui1);
}
div.item-triqui:hover .titulo-modulo-lexico {
  color: white;
  opacity: 0.7;
}
div.item-triqui:hover .descripcion-modulo-lexico {
  color: white;
}

/*Boton regresar*/
.lexico-item-boton-regresar {
  flex-basis: 16.66%;
  height: auto;
  aspect-ratio: 1/0.93;
  flex-shrink: 0;
  padding: 0.5rem;
  margin: 0;
  cursor: pointer;
  border-style: inset;
  border: solid 1px var(--interface0);
  display: block;
  text-align: center;
  position: relative;
  animation: desplegado-lexicos 1.6s ease-in-out;
}
.lexico-item-boton-regresar:hover {
  background-color: var(--interface1);
}
h5.titulo-modulo-lexico-instrucciones {
  color: var(--interface1);
  text-align: left;
  font-size: 0.6667rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.lexico-item-boton-regresar:hover h5.titulo-modulo-lexico-instrucciones {
  color: white;
  opacity: 0.8;
}

.lexico-item-icono-boton-regresar {
  font-size: 5rem;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20%;
  color: var(--interface0);
}
.lexico-item-boton-regresar:hover .lexico-item-icono-boton-regresar {
  color: white;
}

/* Animacion de cada cuadro */
@keyframes desplegado-lexicos {
  0% {
    transform: translateX(600%);
  }
  100% {
    transform: translateX(0%);
  }
}
.lexico-item:nth-of-type(1) {
  animation: desplegado-lexicos 0.9s ease-in-out 1;
}
.lexico-item:nth-of-type(2) {
  animation-delay: 80s;
  animation: desplegado-lexicos 1.1s ease-in-out 1;
  border: solid 5px blue;
}
.lexico-item:nth-of-type(3) {
  animation: desplegado-lexicos 1.2s ease-in-out 1;
}
.lexico-item:nth-of-type(4) {
  animation: desplegado-lexicos 1.3s ease-in-out 1;
}
.lexico-item:nth-of-type(5) {
  animation: desplegado-lexicos 1.4s ease-in-out 1;
}
.lexico-item:nth-of-type(6) {
  animation: desplegado-lexicos 1.5s ease-in-out 1;
}
.lexico-item:nth-of-type(7) {
  animation: desplegado-lexicos 1.1s ease-in-out 1;
}
.lexico-item:nth-of-type(8) {
  animation: desplegado-lexicos 1.2s ease-in-out 1;
}
.lexico-item:nth-of-type(9) {
  animation: desplegado-lexicos 1.3s ease-in-out 1;
}
.lexico-item:nth-of-type(10) {
  animation: desplegado-lexicos 1.4s ease-in-out 1;
}
.lexico-item:nth-of-type(11) {
  animation: desplegado-lexicos 1.5s ease-in-out 1;
}
.lexico-item:nth-of-type(12) {
  animation: desplegado-lexicos 1.6s ease-in-out 1;
}
.lexico-item:nth-of-type(13) {
  animation: desplegado-lexicos 1.2s ease-in-out 1;
}
.lexico-item:nth-of-type(14) {
  animation: desplegado-lexicos 1.3s ease-in-out 1;
}
.lexico-item:nth-of-type(15) {
  animation: desplegado-lexicos 1.4s ease-in-out 1;
}
.lexico-item:nth-of-type(16) {
  animation: desplegado-lexicos 1.5s ease-in-out;
}
</style>