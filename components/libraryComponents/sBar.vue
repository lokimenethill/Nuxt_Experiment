<template lang="">
  <div class="contenedor-general-rebasado">
   
    <div class="contenedor-general">
      <div class="contenedor-breadcums">
        <a class="breadcums">{{ $t('library.title') }}</a>
        <p class="breadcums">/</p>
        <a href="" class="breadcums-activo">Mixtec</a>
        </div>
        <h6>Search in</h6>
        <h1 id="titulo-library">{{ $t('library.title') }}</h1>
        <div class="contenedor-buscador-general">
          <div class="caja-busqueda">
            <!-- Selector personalizado https://www.w3schools.com/howto/howto_custom_select.asp -->
            <!-- Checar por qué se elimina la primera opción -->
            <div class="dropdown-libreria ">
              <v-select v-model="searchSelector" :searchable="false" class="style-library" :options="searchSelectOptions">
              </v-select>
            </div>

            <input v-model="dataSearch" type="search" :placeholder="$t('library.typeWords')" class="input-caja-busqueda">
          </div>

          <div class="contenedor-general-botones-busqueda-library ">
          </div>
         
        </div>
        <div class="contenedor-general-resultados">
          <h4 class="instrucciones">{{totalAnswers}} {{ $t('library.res') }} ({{ $t('library.pg') }} {{pag}} {{ $t('library.of') }} {{maxPage}})</h4>
          <!-- Contenedor de resulatdos, cada tarjeta es un resultado -->
          <div class="table ">
            <div class="table__header ">
              <div class="table__header__row ">
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">{{ $t('library.tTitle') }}</h4>
                  <div class="table__header__row__cell__switch ">
                    <button :class="getAscendingArrowClass('title')"  @click="setAscendingSort('title')"></button>
                    <button :class="getDescendingArrowClass('title')" @click="setDescendingSort('title')"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">{{ $t('library.tAuthor') }}</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"
                    @click="setAscendingSort('authors')"></button>
                    <button class="table__header__row__cell__title__btn__des"
                    @click="setDescendingSort('authors')"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">{{ $t('library.tLang') }}</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"
                    @click="setAscendingSort('terminal_lang')"></button>
                    <button class="table__header__row__cell__title__btn__des"
                    @click="setDescendingSort('terminal_lang')"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">{{ $t('library.tCommunity') }}</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"
                    @click="setAscendingSort('community')"></button>
                    <button class="table__header__row__cell__title__btn__des"
                    @click="setDescendingSort('community')"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">{{ $t('library.tKeywords') }}</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"
                    @click="setAscendingSort('keywords')"></button>
                    <button class="table__header__row__cell__title__btn__des"
                    @click="setDescendingSort('keywords')"></button>
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
                  
                    
                  <span class="table__main__row__cell__data">
                    <span v-for="author in find.authors" :key="author" >
                      {{author}}<br/>
                    </span>
                    </span>
                  
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data__group--lang">{{find.terminal_lang}}
                    <code
                       class="table__main__row__cell__data__group--lang--code">{{find.gtolog}}</code>
                  </span>
                   <span class="table__main__row__cell__data__terminal--lang" v-for="Gpo_lang in find.Gpo_lang" :key="Gpo_lang" >
                      {{Gpo_lang.name}}<code class="table__main__row__cell__data__terminal--lang--code">{{Gpo_lang.gtlog}}</code>
                    </span>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">{{find.community}}</span>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">
                    <span  v-for="keyword in find.keywords" :key="keyword"  >
                        {{keyword}},
                    </span>
                  </span>
                </div>
                <div class="table__main__row__cell  ">
                  <a :href="watchBook(find.source)" :download="find.source" class="table__main__row_cell__button-button_micro none"><span
                      class="material-icons-outlined table__main__row_cell__button-button_micro__icono_boton_descagar_micro">
                      file_download
                    </span></a>
                  <!--Este elemento hace que descargue el documento directamente-->
                </div>
                <div class="table__main__row__cell  ">
                  <button @click="toggleWindow(find.id)" id="myBtn" class="table__main__row_cell__button-button_micro"><span
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
          <p class="informacion-resultados-y-paginas">{{totalAnswers}} {{ $t('library.res') }} {{maxPage}} {{ $t('library.pg') }}s.</p>
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

            
              <input v-model="pagSelectorInput" type="number" min="1" :max="maxPage" :placeholder="$t('library.go2p')" class="caja-input-ir-a-pagina"><button @click="goToPage(pagSelectorInput)" type="submit"
                class="btn-ir-a-pagina"><span class="material-icons-outlined icono-ir-a-pagina">
                  arrow_forward
                </span></button>
          </div>
        </div>
      </div>
        <popWindow
        v-if="showWindow"
        :show="showWindow"
        :datasend="sendDataWindow"
        @window="showWindow = $event"
      />
    </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import _ from 'underscore';
import JsonLibrary from '@/static/libraryBooks/books.json';
import popWindow from '@/components/libraryComponents/popWindow.vue';
export default {
  components: {
    popWindow,
  },
  data() {
    return {
      showWindow: false,
      numOfWindow: null,
      pagSelectorInput: null,
      library: JsonLibrary,
      searchSelector: {},
      dataSearch: '',
      sortTableBy: '',
      ascendingSort: true,
      query_res: {},
      totalAnswers: JsonLibrary.length,
      resultsPerPage: 5,
      maxPage: 0,
      pag: 1,
      searchSelectOptions: [
        { label: this.$t('library.tTitle'), val: 'title' },
        { label: this.$t('library.tAuthor'), val: 'authrs' },
        { label: this.$t('library.tCommunity'), val: 'community' },
        { label: this.$t('library.tLang'), val: 'terminal_lang' },
        { label: this.$t('library.tKeywords'), val: 'kwrds' },
        { label: this.$t('library.all'), val: 'all' },
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
      if (
        this.searchSelector.val === 'authors' ||
        this.searchSelector.val === 'keywords'
      ) {
        filtered = _.filter(sortedBooks, (book) =>
          book[this.searchSelector.val][0]
            .toLowerCase()
            .includes(this.dataSearch.toLowerCase()),
        );
      } else {
        filtered = _.filter(sortedBooks, (book) =>
          book[this.searchSelector.val]
            .toLowerCase()
            .includes(this.dataSearch.toLowerCase()),
        );
      }

      // console.log(this.searchSelector.val);
      return filtered;
    },
    sendDataWindow() {
      return this.library[this.numOfWindow];
    },
  },
  watch: {
    dataSearch() {
      this.totalAnswers = this.items.length;
      this.maxPage = Math.ceil(this.items.length / this.resultsPerPage);
    },
  },
  created() {
    // postprocess data concat Library
    for (let i = 0; i < this.library.length; i++) {
      this.library[i].all ="";
      this.library[i].id = i;
      for (let n = 0; n < this.library[i].authors.length; n++) {
        if (n === 0) {
          this.library[i].authrs = this.library[i].authors[n] + ', ';
        } else {
          this.library[i].authrs += this.library[i].authors[n] + ', ';
        }
      }
      for (let n = 0; n < this.library[i].keywords.length; n++) {
        if (n === 0) {
          this.library[i].kwrds = this.library[i].keywords[n] + ', ';
        } else {
          this.library[i].kwrds += this.library[i].keywords[n] + ', ';
        }
      }
          this.library[i].all += this.library[i].title + ', '+this.library[i].authors[0] + ', '+this.library[i].community + ', '+this.library[i].terminal_lang + ', '+this.library[i].gtolog + ', '+this.library[i].Gpo_lang[0].name + ', '+this.library[i].Gpo_lang[0].gtlog + ', '+this.library[i].keywords[0] + ', '+this.library[i].year + ', ';
        
    }
    this.searchSelector = this.searchSelectOptions[0];
    this.sortTableBy = this.searchSelectOptions[0].val;
    this.maxPage = Math.ceil(JsonLibrary.length / this.resultsPerPage);
  },
  methods: {
    toggleWindow(nw) {
      if (this.showWindow === true) {
        this.showWindow = false;
      } else {
        this.showWindow = true;
        this.numOfWindow = nw;
      }
    },
    watchBook(source) {
      return '/libraryBooks/pdfs/' + source + '.pdf';
    },
    goToPage(page) {
      const tempPag = parseInt(page);
      if (page > this.maxPage || isNaN(tempPag)) {
        alert('No existe esa pagina');
      } else {
        this.pag = parseInt(page);
      }
    },
    nextPage() {
      if (this.pag < this.maxPage) {
        this.pag += 1;
      }
    },
    backPage() {
      if (this.pag > 1) {
        this.pag -= 1;
      }
    },
    setAscendingSort(column) {
      this.ascendingSort = true;
      if (column === 'keywords' || column === 'authors') {
        this.sortTableBy = column[0];
      } else {
        this.sortTableBy = column;
      }
    },
    setDescendingSort(column) {
      if (column === 'keywords' || column === 'authors') {
        this.ascendingSort = false;
        this.sortTableBy = column[0];
      } else {
        this.ascendingSort = false;
        this.sortTableBy = column;
      }
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
      return [`btn-pagina${this.pag === page ? ' btn-pagina' : ''}`];
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
  width: 14.5rem !important;
}
.style-library .vs__search::placeholder {
  margin: 0px;
  padding: 0px;
  width: 14.5rem !important;
}
.style-library .vs__dropdown-toggle {
  background-color: var(--library1);
  border-radius: 0;
  color: white !important;
  margin-right: 0.5rem;
  flex-basis: 12%;
  width: 14.5rem !important;
  padding: 0px !important;
}
.style-library .vs__dropdown-toggle:hover {
  background-color: var(--library2);
}
.style-library .vs__dropdown-menu {
  position: absolute;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.8888rem;
  flex-basis: 10.5%;
  min-width: 14.5rem !important;
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
  width: 14.5rem !important;
}
.style-library .vs__dropdown-menu .vs__dropdown-option {
  padding: 0rem 0rem 0rem 0.25rem;
  width: 14.25rem !important;
}
.style-library .vs__dropdown-menu .vs__dropdown-option--highlight {
  background-color: var(--library2);
}
</style>