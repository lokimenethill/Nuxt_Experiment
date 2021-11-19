<template>
  <div>
    <div class="contenedor-general">
      <h4 class="instrucciones">{{ $t('languageIndex.title') }}</h4>
      <div class="contenedor-languaje-index">
        <div class="language-index-item" id="amuzgo">
          <nuxt-link style="text-decoration: none;" :to="localePath('/languageIndexView/amuzgoan')" >
          <h3 class="titulo-modulo">
            {{ $t('languageIndex.amuzgoan.title') }}
          </h3>
          <p class="descripcion-modulo">
            {{ $t('languageIndex.amuzgoan.preText') }}
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/amuz1254"
                target="_blank"
                >amuz1254</a
              ></code
            >
            {{ $t('languageIndex.amuzgoan.text') }}
          </p>
          </nuxt-link>
        </div>
        <div class="language-index-item" id="nahuatl">
          <nuxt-link style="text-decoration: none;" :to="localePath('/languageIndexView/nahuatl')" >
          <h3 class="titulo-modulo">{{ $t('languageIndex.nahuatl.title') }}</h3>
          <p class="descripcion-modulo">
            {{ $t('languageIndex.nahuatl.preText') }}
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/azte1234"
                target="_blank"
                >azte1234</a
              ></code
            >
            {{ $t('languageIndex.nahuatl.text') }}
          </p>
          </nuxt-link>
        </div>
        <div class="language-index-item" id="maya">
          <nuxt-link style="text-decoration: none;" :to="localePath('/languageIndexView/mayan')" >
          <h3 class="titulo-modulo">{{ $t('languageIndex.mayan.title') }}</h3>
          <p class="descripcion-modulo">
            {{ $t('languageIndex.mayan.preText') }}
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/maya1287"
                target="_blank"
                >maya1287</a
              ></code
            >
            {{ $t('languageIndex.mayan.text') }}
          </p>
          </nuxt-link>
        </div>
        <div
          class="language-index-item"
          id="mixteco"
        >
        <nuxt-link style="text-decoration: none;" :to="localePath('/languageIndexView/mixtec')" >
          <h3 class="titulo-modulo">{{ $t('languageIndex.mixtec.title') }}</h3>
          <p class="descripcion-modulo">
            {{ $t('languageIndex.mixtec.preText') }}
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/mixt1427"
                target="_blank"
                >mixt1247</a
              ></code
            >
            {{ $t('languageIndex.mixtec.text') }}
          </p>
          </nuxt-link>
        </div>
        <div class="language-index-item" id="totonaco">
           <nuxt-link style="text-decoration: none;" :to="localePath('/languageIndexView/totonacan')" >
          <h3 class="titulo-modulo">
            {{ $t('languageIndex.totonacan.title') }}
          </h3>
          <p class="descripcion-modulo">
            {{ $t('languageIndex.totonacan.preText') }}
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/toto1251"
                target="_blank"
                >toto1251</a
              ></code
            >
            {{ $t('languageIndex.totonacan.text') }}
          </p>
           </nuxt-link>
        </div>
        <div class="language-index-item" id="triqui">
           <nuxt-link style="text-decoration: none;" :to="localePath('/languageIndexView/triqui')" >
          <h3 class="titulo-modulo">{{ $t('languageIndex.triqui.title') }}</h3>
          <p class="descripcion-modulo">
            {{ $t('languageIndex.triqui.preText') }}
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/triq1251"
                target="_blank"
                >triq1251</a
              ></code
            >
            {{ $t('languageIndex.triqui.text') }}
          </p>
           </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: this.$t('navBar.languagesIndex'),
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
<style >.contenedor-languaje-index {
  height: 465px;
  display: flex;
  flex-flow: row wrap;
  overflow-y: hidden;
  overflow-x: hidden;
}

.language-index-item {
  height: 50%;
  width: 33.333%;
  flex-grow: 1;
  flex-shrink: 0;
  /*aspect-ratio: 1/1; /*Es para darle proporcion cuadrada, compatible con los navegadores conocidos hasta 2021. Es experimental*/
  display: block;
  padding: 1rem 1rem 1rem 1rem;
  margin: 0;
  cursor: pointer;
  background-color: var(--interface1);
}

h3.titulo-modulo {
  font-weight: 600;
  margin-top: 0 !important;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
}
p.descripcion-modulo {
  font-size: 0.86rem !important;
  color: white;
}

.descripcion-modulo code {
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: darken;
}
.descripcion-modulo code:hover {
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: darken;
}

/* PARTICULARIDADES*/
#amuzgo {
  background-color: var(--amuzgo0);
  animation: desplegado-gpo-lenguas 1s ease-in-out;
}
#amuzgo:hover {
  background-color: var(--amuzgo1);
}
#nahuatl {
  background-color: var(--nahuatl0);
  animation: desplegado-gpo-lenguas 1.1s ease-in-out;
}
#nahuatl:hover {
  background-color: var(--nahuatl1);
}
#maya {
  background-color: var(--maya0);
  animation: desplegado-gpo-lenguas 1.2s ease-in-out;
}
#maya:hover {
  background-color: var(--maya1);
}
#mixteco {
  background-color: var(--mixteco0);
  animation: desplegado-gpo-lenguas 1.6s ease-in-out;
}
#mixteco:hover {
  background-color: var(--mixteco1);
}
#totonaco {
  background-color: var(--totonaco0);
  animation: desplegado-gpo-lenguas 1.5s ease-in-out;
}
#totonaco:hover {
  background-color: var(--totonaco1);
}
#triqui {
  background-color: var(--triqui0);
  animation: desplegado-gpo-lenguas 1.4s ease-in-out;
}
#triqui:hover {
  background-color: var(--triqui1);
}

/* Animacion desplegado-gpo-lenguas */
@keyframes desplegado-gpo-lenguas {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>