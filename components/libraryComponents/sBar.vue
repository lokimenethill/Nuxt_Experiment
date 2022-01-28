<template lang="">
     <div class="contenedor-general-rebasado">
      <div class="contenedor-general">
        <div class="contenedor-breadcums"><a class="breadcums">Library</a>
          <p class="breadcums">/</p><a href="" class="breadcums-activo">Mixtec</a>
        </div>
        <h6>Search in</h6>
        <h1 id="titulo-library">Library</h1>




        <div class="contenedor-buscador-general">
         
            <div class="caja-busqueda">
              <!-- Selector personalizado https://www.w3schools.com/howto/howto_custom_select.asp -->
              <!-- Checar por qué se elimina la primera opción -->
              <div class="dropdown-libreria ">
                 <v-select :searchable="false" class="style-library" v-model="selected_datalist_first" :options="datalist_first"></v-select>
              </div>
              <input v-model="dataSearch" type="search" placeholder="Type words for search" class="input-caja-busqueda">
            </div>





            <div class="contenedor-general-botones-busqueda-library ">
             
            </div>
         
        </div>
        <div class="contenedor-general-resultados">
          <h4 class="instrucciones">{#} results. (Page {#} de {#})</h4>
          <!-- Contenedor de resulatdos, cada tarjeta es un resultado -->
          <div class="table ">
            <div class="table__header ">
              <div class="table__header__row ">
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Title</h4>
                  <div class="table__header__row__cell__switch ">
                    <button @click="sortByTitle_asc()"  class="table__header__row__cell__switch__btn__asc-active"></button>
                    <button @click="sortByTitle_desc()" class="table__header__row__cell__title__btn__des"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Author</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"></button>
                    <button class="table__header__row__cell__title__btn__des"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Terminal language</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"></button>
                    <button class="table__header__row__cell__title__btn__des"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">
                  <h4 class="table__header__row__cell__title">Topics</h4>
                  <div class="table__header__row__cell__switch">
                    <button class="table__header__row__cell__switch__btn__asc"></button>
                    <button class="table__header__row__cell__title__btn__des"></button>
                  </div>
                </div>
                <div class="table__header__row__cell  ">

                </div>
              </div>
            </div>
            <div class="table__main">
              <div v-for="(find, index) in items" :key="index" :v-bind="index" >
              <div class="table__main__row">
                <div class="table__main__row__cell ">
                  <a href="#" taget="_blank" class="table__main_row__cell__title">{{find.title}}</a>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">{{find.author}}</span>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">{{find.terminal_lang}}</span>
                </div>
                <div class="table__main__row__cell ">
                  <span class="table__main__row__cell__data">{{find.topics}}</span>
                </div>
                <div class="table__main__row__cell  ">
                  <button class="table__main__row_cell__button-button_micro"><span
                      class="material-icons-outlined table__main__row_cell__button-button_micro__icono_boton_descagar_micro">
                      file_download
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
          <p class="informacion-resultados-y-paginas">{#} results. {#} pages.</p>
          <!-- Contenedor de botones y se planea que aparezcan de 10 en 10 y que la pagina activa este en medio. Es decir si esta en la pagina 24 iniciaria en la 19 y terminaria en la 29 -->
          <div class="contenedor-paginacion-por-pagina ">
            <!-- Boton de página anterior -->
            <button class="btn-pagina-anterior">
              <!-- Icono boton ágina anterior -->
              <span class="material-icons-round icono-de-boton-paginacion">
                arrow_back_ios
              </span>
            </button>
            <!-- Botones de paginas -->
            <button class="btn-pagina">4</button>
            <!-- btn-pagina-activa es un marcador que indica la página en la que se encuentra -->
            <button class="btn-pagina btn-pagina-activa">5</button>
            <button class="btn-pagina">6</button>
            <button class="btn-pagina">7</button>
            <button class="btn-pagina">8</button>
            <button class="btn-pagina">9</button>
            <button class="btn-pagina">10</button>
            <!-- Boton página siguiente -->
            <button class="btn-pagina-siguiente">
              <span class="material-icons-round icono-de-boton-paginacion ">
                arrow_forward_ios
              </span>
            </button>
          </div>
          <!-- Termina contenedor de botones por página -->

          <!-- Contenedor de input para navegar directamente a una pagina -->
          <div class="contenedor-ir-a-pagina ">
            <!-- Creo que es forzoso usar el formulario -->

            
              <input type="number" min="0" placeholder="Go to page" class="caja-input-ir-a-pagina"><button type="submit"
                class="btn-ir-a-pagina"><span class="material-icons-outlined icono-ir-a-pagina">
                  arrow_forward
                </span></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import JSonLibrary from '@/static/libraryBooks/books.json';
export default {
  data() {
    return {
      JsonLib: JSonLibrary,
      query_res: {},
      dataSearch: '',
      selected_datalist_first: { label: 'Titulo', val: 'title' },
      datalist_first: [
        { label: 'Titulo', val: 'title' },
        { label: 'Autor', val: 'author' },
        { label: 'Lengua Terminal', val: 'terminal_lang' },
        { label: 'Topico', val: 'topics' },
      ],
    };
  },
  watch: {},
  methods: {
    sortByTitle_asc() {
      this.JsonLib.sort(function(a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    },
    sortByTitle_desc() {
      this.JsonLib.sort(function(a, b) {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
    },
  },
  computed: {
    items() {
      switch (this.selected_datalist_first.val) {
        case 'title':
          return this.JsonLib.filter((item) => {
            return item.title
              .toLowerCase()
              .includes(this.dataSearch.toLowerCase());
          });
        case 'author':
          return this.JsonLib.filter((item) => {
            return item.author
              .toLowerCase()
              .includes(this.dataSearch.toLowerCase());
          });
        case 'terminal_lang':
          return this.JsonLib.filter((item) => {
            return item.terminal_lang
              .toLowerCase()
              .includes(this.dataSearch.toLowerCase());
          });
        case 'topics':
          return this.JsonLib.filter((item) => {
            return item.topics
              .toLowerCase()
              .includes(this.dataSearch.toLowerCase());
          });
      }
      return 0;
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