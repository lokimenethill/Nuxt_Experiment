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
            <div  class="dropdown-libreria ">
              <v-select v-model="searchSelector" :searchable="false" class="style-library" :options="searchSelectOptions">
              </v-select>
            </div>

            <input v-model="dataSearch" type="search" :placeholder="$t('library.typeWords')" class="input-caja-busqueda">
          </div>

          <div class="contenedor-general-botones-busqueda-library ">
          </div>
         <Transition name="alertAnimation">
         <NotEnoughWindow
        v-if="NotEnoughResWindow"
        :showRw="NotEnoughResWindow"
        @alert="NotEnoughResWindow = $event"
      />
      </Transition>
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
                  <a :href="watchBook(find.source)" target="_blank" class="table__main_row__cell__title" v-html="find.title" ></a>
                </div>
                <div class="table__main__row__cell ">
                  
                    
                  <span class="table__main__row__cell__data">
                    <span v-for="(author,id) in find.authors" :key="id" >
                      {{author}}<span v-if="id+1 < find.authors.length">, </br></span>
                    </span>
                    </span>
                  
                </div>
                <div class="table__main__row__cell ">
                  <div class="table__main__row__cell__contenedor__lang " >
                    <button class="table__main__row_cell__button-button_micro--lang" disabled><span
                        class="material-icons table__main__row_cell__button-button_micro__icono_boton_visitar-pantalla_micro">
                        library_books
                      </span></button>
                      
                    <span class="table__main__row__cell__data__terminal--lang" >
                      <span v-for="(terminal_lang,id) in find.terminal_lang" :key="id" >
                         {{terminal_lang.name}}<span v-if="id+1 < find.terminal_lang.length">, </span>
                      </span>
                      </span>
                    </div>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">{{find.community}}</span>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">
                    <span  v-for="(keyword,id) in find.keywords" :key="id"  >
                        {{keyword}}<span v-if="id+1 < find.keywords.length">, </span>
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
                  <button id="myBtn" class="table__main__row_cell__button-button_micro" @click="toggleWindow(find.id)"  ><span
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
            <button class="btn-pagina-anterior" @click="backPage()" >
              <!-- Icono boton ágina anterior -->
              <span class="material-icons-round icono-de-boton-paginacion">
                arrow_back_ios
              </span>
            </button>
            
            <!-- Botones de paginas -->
            <button v-for="index in maxPage" :key="index" :class="getActivePageClass(index)"  @click="goToPage(index)" >{{index}}</button>
            <!-- btn-pagina-activa es un marcador que indica la página en la que se encuentra -->
            <!-- Boton página siguiente -->
            <button class="btn-pagina-siguiente" @click="nextPage()" >
              <span class="material-icons-round icono-de-boton-paginacion ">
                arrow_forward_ios
              </span>
            </button>
          </div>
          <!-- Termina contenedor de botones por página -->

          <!-- Contenedor de input para navegar directamente a una pagina -->
          <div class="contenedor-ir-a-pagina ">
            <!-- Creo que es forzoso usar el formulario -->

            
              <input v-model="pagSelectorInput" type="number" min="1" :max="maxPage" :placeholder="$t('library.go2p')" class="caja-input-ir-a-pagina"><button type="submit" class="btn-ir-a-pagina" @click="goToPage(pagSelectorInput)" 
                ><span class="material-icons-outlined icono-ir-a-pagina">
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
import JsonLibrary from '@/static/library/books.json';
import popWindow from '@/components/libraryComponents/popWindow.vue';
import NotEnoughWindow from '@/components/CommonComponents/NotEnoughWindow.vue';
export default {
  components: {
    popWindow,
    NotEnoughWindow,
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
      NotEnoughResWindow:false,
    //  maxPage: 0,
      pag: 1,
    };
  },
  computed: {
    searchSelectOptions(){
      const list =[
        { label: this.$t('library.tTitle'), val: 'ttle' },
        { label: this.$t('library.tAuthor'), val: 'authrs' },
        { label: this.$t('library.tCommunity'), val: 'cmmunity' },
        { label: this.$t('library.tLang'), val: 'tLang' },
        { label: this.$t('library.tKeywords'), val: 'kwrds' },
        { label: this.$t('library.all'), val: 'all' },
      ];
      return list;
    },
    langW(){
      return this.$i18n.locale;
    },
    items() {
      // Prequeryed URL
       let queryed='';
      if(this.$route.params.id!=="general"){
        queryed = _.filter(this.library, (book) =>
          book.terminal_lang_es[0].name
            .toLowerCase()
            .includes(this.$route.params.id.toLowerCase()),
        );
      }else{
        queryed=this.library;
      }
       // Language Filter Comprobation
      // queryed=this.initkwordsLangFilter(queryed);
      // let tempkword=[];
      for(let i=0;i<queryed.length;i++){
        if(this.$i18n.locale==="es"){
          queryed[i].keywords=queryed[i].keywords_es;
          queryed[i].terminal_lang=queryed[i].terminal_lang_es;
          queryed[i].extra=queryed[i].extra_es;
        }else{
          queryed[i].keywords=queryed[i].keywords_en;
          queryed[i].terminal_lang=queryed[i].terminal_lang_en;
          queryed[i].extra=queryed[i].extra_en;
        }
      }
      // postprocess data concat Library
    for (let i = 0; i < queryed.length; i++) {
       queryed[i].all = '';
       queryed[i].cmmunity='';
       queryed[i].ttle='';
      for (let n = 0; n < queryed[i].authors.length; n++) {
        if (n === 0) {
          queryed[i].authrs = queryed[i].authors[n] + ', '+this.removeSpecialChar(queryed[i].authors[n])+ ', ';
        } else {
          queryed[i].authrs += queryed[i].authors[n] + ', '+this.removeSpecialChar(queryed[i].authors[n])+ ', ';
        }
      }
      for (let n = 0; n < queryed[i].keywords.length; n++) {
        if (n === 0) {
          queryed[i].kwrds = queryed[i].keywords[n] + ', '+this.removeSpecialChar(queryed[i].keywords[n])+ ', ';
        } else {
          queryed[i].kwrds += queryed[i].keywords[n] + ', '+this.removeSpecialChar(queryed[i].keywords[n])+ ', ';
        }
      }
       for (let n = 0; n < queryed[i].terminal_lang.length; n++) {
        if (n === 0) {
          queryed[i].tLang = queryed[i].terminal_lang[n].name + ', '+this.removeSpecialChar(queryed[i].terminal_lang[n].name)+ ', ';
        } else {
          queryed[i].tLang += queryed[i].terminal_lang[n].name + ', '+this.removeSpecialChar(queryed[i].terminal_lang[n].name)+ ', ';
        }
        queryed[i].cmmunity+=queryed[i].community+'+'+ this.removeSpecialChar(queryed[i].community);
        queryed[i].ttle+=queryed[i].title+', '+this.removeSpecialChar(queryed[i].title);
      }
      queryed[i].all +=
        queryed[i].title +
        ', ' +
        queryed[i].authrs +
        ', ' +
        queryed[i].cmmunity +
        ', ' +
        queryed[i].Gpo_lang +
        ', ' +
        queryed[i].gtolog +
        ', ' +
        queryed[i].tLang +
        ', ' +
        // queryed[i].tLang[0].gtlog +
       // ', ' +
        queryed[i].kwrds[0];
    }
      // Sorting
      const sortedBooks = this.ascendingSort
        ? _.sortBy(queryed, this.sortTableBy)
        : _.sortBy(queryed, this.sortTableBy).reverse(); 
      // filtered 
      let filtered = '';
      if (
        this.searchSelector.val === 'authors' ||
        this.searchSelector.val === 'keywords' ||
        this.searchSelector.val === 'terminal_lang'
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
    maxPage(){
      return Math.ceil(this.items.length / this.resultsPerPage);
    },
  },
  watch: {
    dataSearch() {
      this.totalAnswers = this.items.length;
      if(this.totalAnswers<1){
        this.NotEnoughResWindow=true;
        setTimeout(()=>{this.dataSearch="";},2000);
      }
    },
    langW(){
      this.searchSelector = this.searchSelectOptions[0];
    },
  },
  created() {
    for (let i = 0; i < this.library.length; i++) {
      this.library[i].id = i;
    }
    // preprocess lang
  
    this.searchSelector = this.searchSelectOptions[0];
    this.sortTableBy = this.searchSelectOptions[0].val;
  },
  methods: {
    removeSpecialChar(chain){
      const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
      return chain.split('').map( letra => acentos[letra] || letra).join('').toString();	
    },
    toggleWindow(nw) {
      if (this.showWindow === true) {
        this.showWindow = false;
      } else {
        this.showWindow = true;
        this.numOfWindow = nw;
      }
    },
    
    watchBook(source) {
      return source;
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