<template lang="">
  <div class="contenedor-general-rebasado">
    <div class="contenedor-general">
      <div class="contenedor-breadcums">
        <a class="breadcums">Library</a>
        <p class="breadcums">/</p>
        <a href="" class="breadcums-activo">Mixtec</a>
        </div>
        <h6>Search in</h6>
        <h1 id="titulo-library">Library</h1>
        <div class="contenedor-buscador-general">
          <div class="caja-busqueda">
            <!-- Selector personalizado https://www.w3schools.com/howto/howto_custom_select.asp -->
            <!-- Checar por qué se elimina la primera opción -->
            <div class="dropdown-libreria ">
              <v-select v-model="searchSelector" :searchable="false" class="style-library" :options="searchSelectOptions">
              </v-select>
            </div>

            <input v-model="dataSearch" type="search" placeholder="Type words for search" class="input-caja-busqueda">
          </div>

          <div class="contenedor-general-botones-busqueda-library ">
          </div>
         
        </div>
        <div class="contenedor-general-resultados">
          <h4 class="instrucciones">{{totalAnswers}} results. (Page {{pag}} de {{maxPage}})</h4>
          <!-- Contenedor de resulatdos, cada tarjeta es un resultado -->
          <div class="table ">
            <div class="table__header ">
              <div class="table__header__row ">
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Title</h4>
                  <div class="table__header__row__cell__switch ">
                    <button :class="getAscendingArrowClass('title')"  @click="setAscendingSort('title')"></button>
                    <button :class="getDescendingArrowClass('title')" @click="setDescendingSort('title')"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Author</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"
                    @click="setAscendingSort('authors')"></button>
                    <button class="table__header__row__cell__title__btn__des"
                    @click="setDescendingSort('authors')"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Comunidad</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"
                    @click="setAscendingSort('authors')"></button>
                    <button class="table__header__row__cell__title__btn__des"
                    @click="setDescendingSort('authors')"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Terminal language</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"
                    @click="setAscendingSort('terminal_lang')"></button>
                    <button class="table__header__row__cell__title__btn__des"
                    @click="setDescendingSort('terminal_lang')"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Palabras Clave</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"
                    @click="setAscendingSort('topics')"></button>
                    <button class="table__header__row__cell__title__btn__des"
                    @click="setDescendingSort('topics')"></button>
                  </div>
                </div>
                 <div class="table__header__row__cell  ">

                </div>
                <div class="table__header__row__cell  ">

                </div>
              </div>
            </div>
            <div class="table__main">
              <div v-for="(find, index) in items" v-show="(pag - 1) * resultsPerPage <= index  && pag * resultsPerPage > index" :key="index" :v-bind="index" >
              <div class="table__main__row">
                <div class="table__main__row__cell ">
                  <a :href="watchBook(find.source)" target="_blank" class="table__main_row__cell__title">{{find.title}}</a>
                </div>
                <div class="table__main__row__cell ">
                  <ul>
                    
                  <span v-for="author in find.authors" :key="author" class="table__main__row__cell__data">
                   <li> {{author}}</li></span>
                  </ul>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">{{find.terminal_lang}}</span>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">{{find.terminal_lang}}</span>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">{{find.topics}}</span>
                </div>
                <div class="table__main__row__cell  ">
                  <a :href="watchBook(find.source)" :download="find.source" class="table__main__row_cell__button-button_micro none"><span
                      class="material-icons-outlined table__main__row_cell__button-button_micro__icono_boton_descagar_micro">
                      file_download
                    </span></a>
                  <!--Este elemento hace que descargue el documento directamente-->
                </div>
                <div class="table__main__row__cell  ">
                  <button id="myBtn" class="table__main__row_cell__button-button_micro"><span
                      class="material-icons-outlined table__main__row_cell__button-button_micro__icono_boton_descagar_micro">
                      info
                    </span></button>
                  <!--Este elemento hace que descargue el documento directamente-->
                </div>
                </div>
              </div>
            </div>
            <div class="footer-tabla">

            </div>

          </div>


        </div>
        <!-- Termina contenedor de resultados -->
        <!-- Inicia contenedor de paginación, esta en ESTILOS GENERALES, ya que este módulo se empleara en varias pantallas -->
        <div class="contenedor-paginacion ">
          <p class="informacion-resultados-y-paginas">{{totalAnswers}} results. {{maxPage}} pages.</p>
          <!-- Contenedor de botones y se planea que aparezcan de 10 en 10 y que la pagina activa este en medio. Es decir si esta en la pagina 24 iniciaria en la 19 y terminaria en la 29 -->
          <div class="contenedor-paginacion-por-pagina ">
            <!-- Boton de página anterior -->
            <button @click="backPage()" class="btn-pagina-anterior">
              <!-- Icono boton ágina anterior -->
              <span class="material-icons-round icono-de-boton-paginacion">
                arrow_back_ios
              </span>
            </button>
            
            <!-- Botones de paginas -->
            <button v-for="index in maxPage" :key="index" @click="goToPage(index)" :class="getActivePageClass(index)">{{index}}</button>
            <!-- btn-pagina-activa es un marcador que indica la página en la que se encuentra -->
            <!-- Boton página siguiente -->
            <button @click="nextPage()" class="btn-pagina-siguiente">
              <span class="material-icons-round icono-de-boton-paginacion ">
                arrow_forward_ios
              </span>
            </button>
          </div>
          <!-- Termina contenedor de botones por página -->

          <!-- Contenedor de input para navegar directamente a una pagina -->
          <div class="contenedor-ir-a-pagina ">
            <!-- Creo que es forzoso usar el formulario -->

            
              <input v-model="pagSelectorInput" type="number" min="1" :max="maxPage" placeholder="Go to page" class="caja-input-ir-a-pagina"><button @click="goToPage(pagSelectorInput)" type="submit"
                class="btn-ir-a-pagina"><span class="material-icons-outlined icono-ir-a-pagina">
                  arrow_forward
                </span></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import _ from 'underscore';
import JsonLibrary from  '@/static/libraryBooks/books.json';

export default {
  data() {
    return {
      pagSelectorInput:null,
      library: JsonLibrary,
      searchSelector: {},
      dataSearch: '',
      sortTableBy: '',
      ascendingSort: true,
      query_res: {},
      totalAnswers:JsonLibrary.length,
      resultsPerPage:5,
      maxPage:0,
      pag:1,
      searchSelectOptions: [
        { label: 'Titulo', val: 'title' },
        { label: 'Autor', val: 'authors' },
        { label: 'Lengua Terminal', val: 'terminal_lang' },
        { label: 'Topico', val: 'topics' },
      ],
    };
  },
  computed: {
    items() {
      // Sorting
      const sortedBooks = this.ascendingSort
        ? _.sortBy(this.library, this.sortTableBy)
        : _.sortBy(this.library, this.sortTableBy).reverse();
      // filtered
      let filtered = '';
      if(this.searchSelector.val==="authors"){
        filtered = _.filter(sortedBooks, (book) =>
        book[this.searchSelector.val][0]
          .toLowerCase()
          .includes(this.dataSearch.toLowerCase()),
      );
      }else{
        filtered = _.filter(sortedBooks, (book) =>
        book[this.searchSelector.val]
          .toLowerCase()
          .includes(this.dataSearch.toLowerCase()),
      );
      }
        
      // console.log(this.searchSelector.val);
      return filtered;
    },
  },
  watch: {
     dataSearch(){
      this.totalAnswers=this.items.length;
      this.maxPage=Math.ceil(this.items.length/this.resultsPerPage);
    },
  },
  created() {
    this.searchSelector = this.searchSelectOptions[0];
    this.sortTableBy = this.searchSelectOptions[0].val;
    this.maxPage=Math.ceil(JsonLibrary.length/this.resultsPerPage);
  },
  methods: {
    watchBook(source){
      return "/libraryBooks/pdfs/"+source+".pdf";
    },
    goToPage(page){
      const tempPag=parseInt(page);
      if(page>this.maxPage || isNaN(tempPag)){
        alert("No existe esa pagina");
      }else{
      this.pag=parseInt(page);
      }
    },
    nextPage(){
      if(this.pag<this.maxPage){
      this.pag+=1;
      }
    },
    backPage(){
      if(this.pag>1){
      this.pag-=1;
      }
    },
    setAscendingSort(column) {
      this.ascendingSort = true;
      this.sortTableBy = column[0];
    },
    setDescendingSort(column) {
      this.ascendingSort = false;
      this.sortTableBy = column[0];
    },
    getAscendingArrowClass(column) {
      return [
        `table__header__row__cell__switch__btn__asc${
          this.sortTableBy === column && this.ascendingSort ? '-active' : ''
        }`,
      ];
    },
    getDescendingArrowClass(column) {
      return [
        `table__header__row__cell__title__btn__des${
          this.sortTableBy === column && !this.ascendingSort ? '-active' : ''
        }`,
      ];
    },
     getActivePageClass(page) {
      return [
        `btn-pagina${
          this.pag === page ? ' btn-pagina' : ''
        }`,
      ];
    },
  },
};
</script>
<style>
/* generales dropdown */
.vs__search {
  margin: 0px !important;
  padding: 0px !important;
  font-family: 'Fira Sans', sans-serif !important;
  font-size: 0.8888rem !important;
  fill: white;
}
.vs__dropdown-option {
  padding: 0rem 0.5rem;
}
/* selector parametros and/or/ornot etc.. */
.style-library .vs__dropdown-option {
  width: 29rem !important;
}
.style-library .vs__search::placeholder {
  margin: 0px;
  padding: 0px;
  width: 29rem !important;
}
.style-library .vs__dropdown-toggle {
  background-color: var(--library1);
  border-radius: 0;
  color: white !important;
  margin-right: 0.5rem;
  flex-basis: 12%;
  width: 29rem !important;
  padding: 0px !important;
}
.style-library .vs__dropdown-toggle:hover {
  background-color: var(--library2);
}
.style-library .vs__dropdown-menu {
  position: absolute;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.8888rem;
  flex-basis: 21%;
  min-width: 29rem !important;
}
.style-library .vs__clear {
  display: none;
}
.style-library .vs__open-indicator {
  fill: white !important;
}
.style-library .vs__selected {
  color: white;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.8888rem;
  padding: 0px !important;
  margin: 0px 0px 0px 0.25rem !important;
}

.style-library .vs__dropdown-menu {
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.8888rem;
  border: 2px solid var(--library1);
  width: 29rem !important;
}
.style-library .vs__dropdown-menu .vs__dropdown-option {
  padding: 0rem 0rem 0rem 0.25rem;
  width: 28.75rem !important;
}
.style-library .vs__dropdown-menu .vs__dropdown-option--highlight {
  background-color: var(--library2);
}
</style>