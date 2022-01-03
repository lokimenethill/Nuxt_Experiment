<template lang="">
     <div class="contenedor-general-rebasado">
        <div class="contenedor-general">
         <h6>Lexicon</h6>
        <h1>Nahuat of the Sierra Nororiental de Puebla</h1>

        <div class="contenedor-elementos-notas-lexico">
          <a href="#" class="icono-vinculo-readme ">
            <span class="material-icons icono-readme ">
              info
            </span>
          </a>
          <a href="#" class="texto-vinculo-readme">Readme for more information</a>
        </div>
         <div class="caja-busqueda-lexico">
                
                   <select v-model="selected_datalist_first"  >
                              <option v-for="(elements) in datalist_first" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                          </select>
                           
                            <select v-model="selected_datalist_second" >
                              <option v-for="(elements) in datalist_second" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                          </select>
                         
                  <input class="input-caja-busqueda-lexico"  v-model="search_element" type="text"  placeholder="Type words for search"  >
                  </div>
                  <p></p>
                  <div class="contenedor-general-opciones-busqueda">
                 <label class="contenedor-checkbox-custom ">
                 <input  v-model="checkbx" type="checkbox" value="nahuat_orthography" >
                 <span class="cuadro-check"></span>
                 <span class="etiqueta-checkbox" for="nahuat_orthography">Activar flexibilidad ortográfica</span>
                 </label>
                 <label class="contenedor-checkbox-custom ">
                 <input  v-model="checkbx" type="checkbox"  value="bilingual" >
                 <span class="cuadro-check"></span>
                 <span class="etiqueta-checkbox" for="bilingual">Activar búsqueda bilingüe</span>
                 </label>
                 <label class="contenedor-checkbox-custom ">
                 <input  v-model="checkbx" type="checkbox"  value="es_thesaurus_lookup" >
                 <span class="cuadro-check"></span>
                 <span class="etiqueta-checkbox" for="es_thesaurus_lookup">Activar tesauro</span>
                 </label>
                 <label class="contenedor-checkbox-custom ">
                 <input  v-model="onlyWtSound" type="checkbox"  value="es_thesaurus_lookup" >
                 <span class="cuadro-check"></span>
                 <span class="etiqueta-checkbox" for="es_thesaurus_lookup">Mostrar solo con audio</span>
                 </label>
                     <br>
              
                 </div>
                 
       <div v-for="(find, index) in extraFilters" :key="index" :v-bind="index" >
             <span class="caja-busqueda-lexico"  >
             
               <select  class="dropdown-opcion-filtro" v-model="find.exclude" style="background-color:white;" >
                              <option v-for="(elements) in datalist_condition" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                          </select>
               <select v-model="find.type_tag" style="background-color:white;" >
                              <option v-for="(elements) in datalist_first" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                          </select>
                            <select v-model="find.filter_type" style="background-color:white;" >
                              <option v-for="(elements) in datalist_second" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                          </select>
                          
                             <input class="input-caja-busqueda-lexico"  v-model="find.value" >
                              <button @click="deleteOfFilter(index)"  class="eliminar-filtro" >x</button>
                             </span>
                                     <div class="contenedor-general-opciones-busqueda">
                                       <label class="contenedor-checkbox-custom ">
                                      <input  v-model="find.modifiers[0].name" type="checkbox" >
                                       <span class="cuadro-check"></span>
                                      <span class="etiqueta-checkbox">Activar flexibilidad ortográfica</span>
                                      </label>
                                      <label class="contenedor-checkbox-custom ">
                                      <input  v-model="find.modifiers[1].name" type="checkbox"   >
                                      <span class="cuadro-check"></span>
                                     <span class="etiqueta-checkbox" >Activar búsqueda bilingüe</span>
                                     </label>
                                     <label class="contenedor-checkbox-custom ">
                                     <input  v-model="find.modifiers[2].name" type="checkbox"   >
                                     <span class="cuadro-check"></span>
                                      <span class="etiqueta-checkbox" >Activar tesauro</span>
                                      </label>
                                      </div>
                             
                             </div>
 <div class="contenedor-general-botones-busqueda ">
    <div class="contenedor-botones-izquierda ">
                 <button id="adfilter" class="btn-secundario" @click="addFilter" >Añadir filtro</button>
                 </div>
                  <div class="contenedor-botones-derecha  ">
                  <button type="reset" @click="reset()" id="reset-lexico-buscador" class="btn-secundario">Reset</button>
                 <button type="submit" id="search-lexico" @click="prueba_axios" >Search</button>
                  </div>
                 </div>
                  <p v-if="axios_response.page" ><button style="background-color:purple;"  @click="prevPage" >Pagina anterior</button><button style="background-color:purple;"  @click="nextPage" >Siguiente pagina</button></p>
                  
                 <div v-if="devstate===true">
                 <span>opciones seleccionadas: {{ checkbx }}</span>
                 <h3>demo query build:{{demodata}}</h3>
                 <h1>test data:{{testData}}</h1>
                 <h3>test extra filters:{{extraFilters}}</h3>
                 <h4>Functions test {{functionTester}}</h4>
                 <h3>pagina actual{{actualPage}}</h3>
                 </div>
                  <p v-if="axios_response.page" >Maximo numero de paginas{{maxPages}}
                    <p>
                     <span v-for="(number) in paginator" :key="number" :v-bind="number" > 
                       <button  v-if="number===actualPage" @click="goPage(number)"  > [{{number}}] </button>
                       <button v-if="number!=actualPage" @click="goPage(number)" > [{{number}}] </button>
                     </span>
                    </p>
                  </p>
              <viewer-Searchbar :datasend=axios_response />
               <div v-if="devstate===true">
                 <h4>Axios response{{axios_response}}</h4>
                 </div>
                </div>
                 </div>
     </div>
</template>

<script>
import ViewerSearchbar from '@/components/ViewerSearchbar';
export default {
  components: {
    ViewerSearchbar,
  },
  data() {
    return {
      onlyWtSound:false,
      devstate: false,
      testData: '',
      actualPage: 1,
      maxPages: 0,
      paginator: [],
      axios_response: {},
      selected_datalist_first: 'lemma',
      selected_datalist_first_val: '',
      selected_datalist_second: 'begins_with',
      selected_datalist_second_val: '',
      search_element: '',
      checkbx: [],
      datalist_first: [
        { label: 'Entrada', val: 'lemma' },
        { label: 'Raiz', val: 'root' },
        { label: 'Campo semántico', val: 'category' },
        { label: 'Categoría gramatical', val: 'part_of_speech' },
        { label: 'Inflexion', val: 'inflectional_type' },
        { label: 'Significado preciso', val: 'precise_meaning' },
        { label: 'Significado extendido', val: 'extended_meaning' },
        { label: 'Frase Ilustrativa', val: 'illustrative_phrases' },
        { label: 'Búsqueda exhaustiva', val: 'complete_search' },
      ],
      datalist_second: [
        { label: 'empieza con', val: 'begins_with' },
        { label: 'termina con', val: 'ends_with' },
        { label: 'contiene secuencia', val: 'contains' },
        { label: 'contiene palabra', val: 'contains_word' },
        { label: 'es exactamente igual a', val: 'exactly_equals' },
        { label: 'expresión regular', val: 'regex' },
      ],
      datalist_condition: [
        { label: 'Y', val: 'and' },
        { label: 'Y no', val: 'andNot' },
        { label: 'O', val: 'or' },
        { label: 'O no', val: 'orNot' },
      ],
      demodata: {
        dataset: 'azz',
        query: [
          [
            {
              type_tag: 'lemma',
              filter_type: 'begins_with',
              value: 'ojtli',
              exclude: false,
              modifiers: [{ name: 'nahuat_orthography' }],
            },
          ],
        ],
        global_modifiers: [],
      },
      extraFilter: [
        {
          type_tag: 'lemma',
          filter_type: 'begins_with',
          value: 'ou',
          exclude: false,
          modifiers: [{ name: 'nahuat_orthography' }],
        },
        {
          type_tag: 'lemma',
          filter_type: 'begins_with',
          value: 's',
          exclude: false,
          modifiers: [],
        },
      ],
      extraFilters: [],
      functionTester: '',
    };
  },
  methods: {
    async prueba_axios() {
      this.paginator = [];
      this.set_values();
      const resp = await this.$axios.$post(process.env.API_HOST, this.demodata);
      this.axios_response = resp;
      this.actualPage = resp.page;
      this.calcPages();
      this.paginatorMaker();
    },
    watchExtraModifTrue() {
      for (let i = 0; i < this.extraFilters.length; i++) {
        if (this.extraFilters[i].modifiers[0].name === true) {
          this.extraFilters[i].modifiers[0].name = 'nahuat_orthography';
          this.functionTester = this.extraFilters[i].modifiers[0].name;
        }
        if (this.extraFilters[i].modifiers[1].name === true) {
          this.extraFilters[i].modifiers[1].name = 'bilingual';
          this.functionTester = this.extraFilters[i].modifiers[0].name;
        }
        if (this.extraFilters[i].modifiers[2].name === true) {
          this.extraFilters[i].modifiers[2].name = 'es_thesaurus_lookup';
          this.functionTester = this.extraFilters[i].modifiers[0].name;
        }
      }
    },
    watchExtraModifFalse() {
      for (let i = 0; i < this.extraFilters.length; i++) {
        if (this.extraFilters[i].modifiers[0].name === false) {
          this.extraFilters[i].modifiers[0].name = '';
          this.functionTester = this.extraFilters[i].modifiers[0].name;
        }
        if (this.extraFilters[i].modifiers[1].name === false) {
          this.extraFilters[i].modifiers[1].name = '';
          this.functionTester = this.extraFilters[i].modifiers[0].name;
        }
        if (this.extraFilters[i].modifiers[2].name === false) {
          this.extraFilters[i].modifiers[2].name = '';
          this.functionTester = this.extraFilters[i].modifiers[0].name;
        }
      }
    },
    setChkBox() {
      const newArrJson = [];
      this.checkbx.forEach((element) => {
        newArrJson.push({ name: element });
      });
      return newArrJson;
    },
    set_values() {
      

      
      this.demodata = {
        dataset: 'azz',
        query: [
          [
            {
              type_tag: `${this.selected_datalist_first}`,
              filter_type: `${this.selected_datalist_second}`,
              value: `${this.search_element}`,
              exclude: false,
              modifiers: this.setChkBox(),
            },
          ],
        ],
        global_modifiers: [],
      };
      if(this.onlyWtSound===true){
        this.demodata.global_modifiers.push({name: "only_with_sound"});
      }
      // this.demodata.modifiers.push(this.checkbx)
      this.testData = JSON.stringify(Object.assign({}, this.checkbx));
      // this.demodata.query[0][0].modifiers.push(JSON.stringify(this.checkbx))
      this.testData = this.setChkBox();

      if (this.extraFilters.length > 0) {
        this.watchExtraModifTrue();
        this.watchExtraModifFalse();
        this.formatQueryData();
      }
    },
    formatQueryData() {
      const extraFiltersQueryFormat = [];
      for (let i = 0; i < this.extraFilters.length; i++) {
        if (this.extraFilters.length > extraFiltersQueryFormat.length)
          extraFiltersQueryFormat.push(this.extraFilters[i]);
      }
      for (let i = 0; i < extraFiltersQueryFormat.length; i++) {
        let excludeVal = '';
        if (
          extraFiltersQueryFormat[i].exclude === 'and' ||
          extraFiltersQueryFormat[i].exclude === 'or'
        ) {
          excludeVal = extraFiltersQueryFormat[i].exclude;
          extraFiltersQueryFormat[i].exclude = false;
        }
        if (
          extraFiltersQueryFormat[i].exclude === 'andNot' ||
          extraFiltersQueryFormat === 'orNot'
        ) {
          excludeVal = extraFiltersQueryFormat[i].exclude;
          extraFiltersQueryFormat[i].exclude = true;
        }
        if (excludeVal === 'and' || excludeVal === 'andNot') {
          if (i <= 0) {
            this.demodata.query[0].push(extraFiltersQueryFormat[i]);
          } else {
            this.demodata.query[i].push(extraFiltersQueryFormat[i]);
          }
        }
        if (excludeVal === 'or' || excludeVal === 'orNot') {
          this.demodata.query.push([extraFiltersQueryFormat[i]]);
        }
      }
      this.testData = extraFiltersQueryFormat;

      /*
               this.demodata.query.push([this.extraFilters[i]])
            */
    },
    addFilter() {
      this.extraFilters.push({
        exclude: 'and',
        value: '',
        type_tag: `lemma`,
        filter_type: 'begins_with',
        modifiers: [{ name: false }, { name: false }, { name: false }],
      });
    },
    deleteFilter() {
      this.extraFilters.pop();
    },
    deleteOfFilter(target){
      if(target===0){
        this.extraFilters.splice(target,target+1);
      }
      this.extraFilters.splice(target,target);
    },
    reset(){
      for(let i=0;i<this.extraFilter.length;i++){
      this.deleteFilter();
      }
      this.search_element='';
      this.checkbx=[];
    },
    calcPages() {
      this.maxPages = Math.ceil(
        this.axios_response.total / this.axios_response.pageSize,
      );
    },
    paginatorMaker() {
      for (let i = 1; i <= this.maxPages; i++) {
        this.paginator.push(i);
      }
    },
    async nextPage() {
      this.calcPages();
      if (this.actualPage < this.maxPages) {
        this.actualPage++;
        this.demodata.page = this.actualPage;
        const resp = await this.$axios.$post(
          process.env.API_HOST,
          this.demodata,
        );
        this.axios_response = resp;
      }
    },
    async prevPage() {
      this.calcPages();
      if (this.actualPage > 1) {
        this.actualPage--;
        this.demodata.page = this.actualPage;
        const resp = await this.$axios.$post(
          process.env.API_HOST,
          this.demodata,
        );
        this.axios_response = resp;
      }
    },
    async goPage(targetPage) {
      this.calcPages();
      this.actualPage = targetPage;
      this.demodata.page = this.actualPage;
      const resp = await this.$axios.$post(process.env.API_HOST, this.demodata);
      this.axios_response = resp;
    },
  },
};
</script>
<style>
.contenedor-elementos-notas-lexico {
  height: 1.5rem;
  max-width: 100%;
  display: flex;
  align-items: center;
}
/* <div class="contenedor-elementos-notas-lexico e1">
          <a href="#" class="icono-vinculo-readme e1">
            <span class="material-icons icono-readme e2">
              info
            </span>
          </a>
          <a href="#" class="texto-vinculo-readme e2">Readme for more information</a>
        </div> */
a.icono-vinculo-readme {
  margin: 0;

  margin: 0;
  padding: 0;
}
a.icono-vinculo-readme:hover {
  text-decoration: none;
}
span.icono-readme {
  color: var(--interfacesp);
  font-size: 1.25rem;
  display: block;
  margin: 0 !important;
  padding: 0 !important ;
}
span.icono-readme:hover {
  color: var(--interface0);
}
a.texto-vinculo-readme {
  font-size: 0.6667rem;
  margin-left: 0.25rem;
  min-width: 9.25rem;
  color: var(--negro);
}
a.texto-vinculo-readme:hover {
  font-weight: 500;
  color: var(--interface0) !important;
}

a.texto-vinculo-readme:visited {
  color: currentColor;
}

.contenedor-buscador-general-lexico {
  margin-top: 2rem;
}

.caja-busqueda-lexico {
  height: 2.5rem;
  border: 1px solid var(--gris3);
  display: flex;
  align-items: center;
  padding-left: 0.38rem;
  margin-bottom: 0.5rem;
}

.caja-busqueda-lexico:focus-within {
  outline: 3px solid #009d9375;
  /* Hace que se enfocque el elemento padre */
}

/* Dropdown tipo busqueda */
.dropdown-tipo-busqueda {
  position: relative;
  font-family: "Fira Sans", sans-serif;
  font-size: 0.8888rem;
  flex-basis: 21%;
  margin-right: 0.5rem;
}
.dropdown-tipo-busqueda:focus {
  outline: 2px solid var(--interfacesp);
}
.dropdown-tipo-busqueda select {
  display: none; /*hide original SELECT element: */
}
.select-selected {
  background-color: var(--dr-tp-busq0);
}
.select-selected:hover {
  background-color: var(--dr-tp-busq1);
}
/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 0.55rem;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}
/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 0.25rem;
}

/* style the items (options),  */
.select-items div {
  color: var(--dr-tp-busq0);
  padding: 0.25rem;
  border: 1px solid transparent;
  /* border-color: transparent var(--videos1) transparent var(--videos1); */
  cursor: pointer;
}
/* including the selected item: */
.select-selected {
  color: white;
  padding: 0.25rem;
  border: 1px solid transparent;
  /* border-color: transparent transparent var(--videos1) transparent; */
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid var(--dr-tp-busq1);
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover,
.same-as-selected {
  background-color: var(--dr-tp-busq1);
  color: white !important;
}
/* --------------------------------------------------------------------- */

/* Dropdow parametros de palabras */
/* The container must be positioned relative: */
.dropdow-parametros-palabras {
  position: relative;
  font-family: "Fira Sans", sans-serif;
  font-size: 0.8888rem;
  flex-basis: 19%;
  margin-right: 0.5rem;
}
.dropdow-parametros-palabras:focus {
  outline: 3px solid #009d9375;
}

.dropdow-parametros-palabras select {
  display: none; /*hide original SELECT element: */
}

.dropdow-parametros-palabras .select-selected {
  background-color: var(--dr-par-pal0);
}
.dropdow-parametros-palabras .select-selected:hover {
  background-color: var(--dr-par-pal1);
}

/* Style the arrow inside the select element:
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
} */

/* Point the arrow upwards when the select box is open (active):
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
} */

/* style the items (options), */
.dropdow-parametros-palabras .select-items div {
  color: var(--dr-par-pal0);
  padding: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
}
/*including the selected item: */
.dropdow-parametros-palabras .select-selected {
  color: white;
  padding: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
}
/* Style items (options): */
.dropdow-parametros-palabras .select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid var(--dr-par-pal1);
}

/* Hide the items when the select box is closed: */
.dropdow-parametros-palabras .select-hide {
  display: none;
}

.dropdow-parametros-palabras .select-items div:hover,
.dropdow-parametros-palabras .same-as-selected {
  background-color: var(--dr-par-pal1);
  color: white !important;
}
/* Dropdow opciones al añadir filtro */
.dropdown-opcion-filtro {
  position: relative;
  font-family: "Fira Sans", sans-serif;
  font-size: 0.8888rem;
  flex-basis: 12%;
  margin-right: 0.5rem;
}
.dropdown-opcion-filtro:focus {
  outline: 3px solid #009d9375;
}

.dropdown-opcion-filtro select {
  display: none; /*hide original SELECT element: */
}

.dropdown-opcion-filtro .select-selected {
  background-color: var(--dr-fil-mas0);
}
.dropdown-opcion-filtro .select-selected:hover {
  background-color: var(--dr-fil-mas1);
}

/* Style the arrow inside the select element: */
/* .dropdown-opcion-filtro .select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
} */

/* Point the arrow upwards when the select box is open (active): */
/* .dropdown-opcion-filtro .select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
} */

/* style the items (options), including the selected item: */
.dropdown-opcion-filtro .select-items div {
  color: var(--dr-fil-mas0);
  padding: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
}
.dropdown-opcion-filtro .select-selected {
  color: white;
  padding: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
}

/* Style items (options): */
.dropdown-opcion-filtro .select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid var(--dr-fil-mas1);
}

/* Hide the items when the select box is closed: */
.dropdown-opcion-filtro .select-hide {
  display: none;
}

.dropdown-opcion-filtro .select-items div:hover,
.same-as-selected {
  background-color: var(--dr-fil-mas1);
  color: white !important;
}
/* Caja de texto de busqueda*/

.input-caja-busqueda-lexico {
  align-self: stretch;
  flex-basis: 50%;
  flex: 1;
  padding: 0 0.5rem;
  margin: 0;
  border: none;
  font-size: 0.8888rem;
  font-weight: 500;
  height: 100%;
}
.input-caja-busqueda-lexico:focus {
  outline: none;
}
.input-caja-busqueda-lexico::placeholder {
  color: var(--gris3);
  font-size: 0.8888rem;
  font-weight: 400 !important;
}
.input-caja-busqueda-lexico::-webkit-input-placeholder {
  color: var(--gris3);
  font-size: 0.8888rem;
  font-weight: 400 !important;
}
.input-caja-busqueda-lexico:-ms-input-placeholder {
  color: var(--gris3);
  font-size: 0.8888rem;
  font-weight: 400 !important;
}
.input-caja-busqueda-lexico::-moz-placeholder {
  color: var(--gris3);
  font-size: 0.8888rem;
  font-weight: 400 !important;
}
/* Contenedor general de checboxes de lexicos */
.contenedor-general-opciones-busqueda {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 2rem;
}
/* Contenedor de checkboxes y etiquetas */

.contenedor-general-opciones-busqueda .contenedor-checkbox-custom {
  margin-right: 0.75rem;
  margin-left: 0 !important;
}
.contenedor-general-opciones-busqueda .contenedor-checkbox-custom:last-of-type {
  margin-right: 0rem;
  padding-right: 0 !important;
}

/* BOTONES DE buscador lexico */
.contenedor-general-botones-busqueda {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

/* Boton eliminar filtro */

button.eliminar-filtro {
  align-self: stretch;
  flex-basis: 2rem;
  aspect-ratio: 1/1;
  color: var(--interface1);
  padding: 0;
  margin: 0;
  border: 2px solid var(--interface1) !important;
  background: white;
  box-sizing: content-box;
  margin-left: 0.25rem;
}
button.eliminar-filtro:hover {
  color: white;
  background-color: var(--interface0);
  border-color: var(--interface0);
}

/* RESULTADOS */
.contenedor-general-resultados {
  margin-top: 4rem;
}

</style>