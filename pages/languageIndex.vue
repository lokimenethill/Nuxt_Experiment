<template>
  <div>
    <div class="contenedor-general">
      <h4 class="instrucciones">{{ $t('languageIndex.choose') }}</h4>
      <div class="contenedor-languaje-index">
        <div id="amuzgo" class="language-index-item" >
          <nuxt-link
            class="none"
            :to="localePath('/languageIndexView/amuzgoan')"
          >
            <h3 class="titulo-modulo">
              {{ $t('languageIndex.amuzgoan.title') }}
            </h3>
          </nuxt-link>
          <p class="descripcion-modulo">
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/amuzgoan')"
            >
              {{ $t('languageIndex.amuzgoan.preText') }}
            </nuxt-link>
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/amuz1254"
                target="_blank"
                >amuz1254</a
              ></code
            ><nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/amuzgoan')"
            >
              <span v-html="$t('languageIndex.amuzgoan.text')"></span>
            </nuxt-link>
          </p>
        </div>

        <div id="maya" class="language-index-item">
          <nuxt-link
            class="none"
            style="text-decoration: none"
            :to="localePath('/languageIndexView/mayan')"
          >
            <h3 class="titulo-modulo">{{ $t('languageIndex.mayan.title') }}</h3>
          </nuxt-link>
          <p class="descripcion-modulo">
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/mayan')"
            >
              {{ $t('languageIndex.mayan.preText') }}
            </nuxt-link>
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/maya1287"
                target="_blank"
                >maya1287</a
              ></code
            >
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/mayan')"
            >
              <span v-html="$t('languageIndex.mayan.text')"></span>
            </nuxt-link>
          </p>
        </div>
        <div id="mazateco" class="language-index-item">
          <nuxt-link
            class="none"
            style="text-decoration: none"
            :to="localePath('/languageIndexView/mazatec')"
          >
            <h3 class="titulo-modulo">{{ $t('languageIndex.mazatec.title') }}</h3>
          </nuxt-link>
          <p class="descripcion-modulo">
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/mazatec')"
            >
              {{ $t('languageIndex.mazatec.preText') }}
            </nuxt-link>
           <code><a href="https://glottolog.org/resource/languoid/id/maza1295" target="_blank">maza1295</a></code>,
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/mazatec')"
            >
              <span v-html="$t('languageIndex.mazatec.text')"></span>
            </nuxt-link>
          </p>
        </div>
                <div id="mixe" class="language-index-item">
          <nuxt-link
            class="none"
            style="text-decoration: none"
            :to="localePath('/languageIndexView/mixtec')"
          >
            <h3 class="titulo-modulo">
              {{ $t('languageIndex.mixe.title') }}
            </h3>
          </nuxt-link>
          <p class="descripcion-modulo">
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/mixe')"
            >
              {{ $t('languageIndex.mixe.preText') }}
            </nuxt-link>
            <code
              ><a
                href=" https://glottolog.org/resource/languoid/id/mixe1286"
                target="_blank"
                >mixe1286</a
              ></code
            >
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/mixe')"
            >
              <span v-html="$t('languageIndex.mixe.text')"></span>
            </nuxt-link>
          </p>
        </div>
        <div id="mixteco" class="language-index-item">
          <nuxt-link
            class="none"
            style="text-decoration: none"
            :to="localePath('/languageIndexView/mixtec')"
          >
            <h3 class="titulo-modulo">
              {{ $t('languageIndex.mixtec.title') }}
            </h3>
          </nuxt-link>
          <p class="descripcion-modulo">
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/mixtec')"
            >
              {{ $t('languageIndex.mixtec.preText') }}
            </nuxt-link>
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/mixt1427"
                target="_blank"
                >mixt1247</a
              ></code
            >
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/mixtec')"
            >
              <span v-html="$t('languageIndex.mixtec.text')"></span>
            </nuxt-link>
          </p>
        </div>
                <div id="nahuatl" class="language-index-item">
          <nuxt-link
            class="none"
            style="text-decoration: none"
            :to="localePath('/languageIndexView/nahuatl')"
          >
            <h3 class="titulo-modulo">
              {{ $t('languageIndex.nahuatl.title') }}
            </h3>
          </nuxt-link>
          <p class="descripcion-modulo">
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/nahuatl')"
            >
              {{ $t('languageIndex.nahuatl.preText') }}
            </nuxt-link>
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/azte1234"
                target="_blank"
                >azte1234</a
              ></code
            ><nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/nahuatl')"
            >
              <span v-html="$t('languageIndex.nahuatl.text')"></span>
            </nuxt-link>
          </p>
        </div>
        <div id="totonaco" class="language-index-item">
          <nuxt-link
            class="none"
            style="text-decoration: none"
            :to="localePath('/languageIndexView/totonacan')"
          >
            <h3 class="titulo-modulo">
              {{ $t('languageIndex.totonacan.title') }}
            </h3>
          </nuxt-link>
          <p class="descripcion-modulo">
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/totonacan')"
            >
              <span v-html="$t('languageIndex.totonacan.preText')"></span>
            </nuxt-link>
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/toto1251"
                target="_blank"
                >toto1251</a
              ></code
            ><nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/totonacan')"
            >
              <span v-html="$t('languageIndex.totonacan.text')"></span>
            </nuxt-link>
          </p>
        </div>
        <div id="triqui" class="language-index-item">
          <nuxt-link
            class="none"
            style="text-decoration: none"
            :to="localePath('/languageIndexView/triqui')"
          >
            <h3 class="titulo-modulo">
              {{ $t('languageIndex.triqui.title') }}
            </h3>
          </nuxt-link>
          <p class="descripcion-modulo">
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/triqui')"
            >
              {{ $t('languageIndex.triqui.preText') }}
            </nuxt-link>
            <code
              ><a
                href="https://glottolog.org/resource/languoid/id/triq1251"
                target="_blank"
                >triq1251</a
              ></code
            >
            <nuxt-link
              class="none"
              style="text-decoration: none"
              :to="localePath('/languageIndexView/triqui')"
              ><span v-html="$t('languageIndex.triqui.text')"></span>
            </nuxt-link>
          </p>
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
<style >
.contenedor-languaje-index {
  display: flex;
  flex-flow: row wrap;
  overflow-y: hidden;
  overflow-x: scroll;
}

.language-index-item {
  height: 232px;
  width: 33.333%;
  flex-grow: 0;
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
#mazateco {
  background-color: var(--mazateco0);
  animation: desplegado-gpo-lenguas 1.6s ease-in-out;
}
#mazateco:hover {
  background-color: var(--mazateco1);
}
#mixe {
  background-color: var(--mixe0);
  animation: desplegado-gpo-lenguas 1.5s ease-in-out;
}
#mixe:hover {
  background-color: var(--mixe1);
}
#mixteco {
  background-color: var(--mixteco0);
  animation: desplegado-gpo-lenguas 1.5s ease-in-out;
}
#mixteco:hover {
  background-color: var(--mixteco1);
}
#totonaco {
  background-color: var(--totonaco0);
  animation: desplegado-gpo-lenguas 1.4s ease-in-out;
}
#totonaco:hover {
  background-color: var(--totonaco1);
}
#triqui {
  background-color: var(--triqui0);
  animation: desplegado-gpo-lenguas 1.8s ease-in-out;
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