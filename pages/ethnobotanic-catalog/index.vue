<template>
  <div class="">
    <header class="header_home">
      <div class="contenedor-general">
        <h1 class="header__titulo">Catálogo de etnobotánica</h1>
      </div>
    </header>
    <main id="app" class="">
      <div class="main__contenedor_general">
        <section class="main__contenedor_general__header">
          <h2 class="">Contenido</h2>
          <div class="main__contenedor_general__header__contendor__iconos__tipo_visualizacion">
            <button class="boton__icono__tipo_visualizacion" @click="toggleView">
              <span class="material-icons-sharp icono__tipo_visualizacion">
                {{isGrid ? "grid_view" : "view_list"}}
              </span>
            </button>
          </div>
        </section>
        <section id="vue-grid-list" class="main__contenedor_general__main">
          <div :class="[isGrid ? 'indice-grid' : 'indice-list']">
            <card-species-book 
              v-for="especie in especies" 
              :key="especie" 
              :nombre="especie" 
              :is-grid="isGrid" />
          </div>
        </section>
        <p class="smallest">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, earum.
          Dolor, consequuntur accusamus. Repudiandae, eum. Similique ut, itaque
          esse quas temporibus est sint eligendi doloribus sed odio reiciendis
          minima dolore! Enim saepe qui nulla consequuntur iste perspiciatis
          maxime labore totam rem quis eligendi deserunt quasi cumque iusto
          minus minima ex, ducimus, quae tenetur debitis, ut eveniet ipsum.
          Ullam, dolorum explicabo. Exercitationem voluptate iste illo quas, nam
          recusandae obcaecati vero deleniti corporis, mollitia vitae illum
          maxime atque fuga magnam! Sapiente ex tempora perferendis quasi! Eos
          aliquam quidem alias molestias voluptate. Officia. Esto es una prueba
          en git
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGrid: true,
      especies: [
        "Sambucus nigra",
        "Amaranthus hybridus",
        "Amaranthus spinosus",
        "Spondias purpurea",
        "Plumeria rubra",
        "Bidens odorata",
        "Porophyllum ruderale",
        "Tagetes erecta",
        "Crescentia cujete",
        "Parmentiera aculeata",
        "Tabebuia rosea",
        "Wigandia urens",
        "Bursera simaruba",
        "Rhipsalis baccifera",
        "Celtis iguanaea",
        "Trema micrantha",
        "Canna indica",
        "Couepia polyandra",
        "Licania platypus",
        "Commelina erecta",
        "Tradescantia zebrina",
        "Cuscuta",
        "Ipomoea batatas",
        "Ipomoea indica",
        "Merremia umbellata",
        "Costus",
        "Pseudobombax ellipticum",
      ],
    };
  },
  methods:{
    toggleView(){
      this.isGrid = !this.isGrid;
    },
  },
};
</script>

<style scoped>
  @import '@/assets/estilos-catalogo.css';
</style>