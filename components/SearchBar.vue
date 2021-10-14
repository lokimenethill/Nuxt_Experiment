<template lang="">
    <div>
        <h1>Componente barra de busqueda</h1>
                  <select v-model="selected_datalist_first" style="background-color:white;" >
                             <option v-for="(elements) in datalist_first" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                         </select>
                           <select v-model="selected_datalist_second" style="background-color:white;" >
                             <option v-for="(elements) in datalist_second" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                         </select>
                 <input  v-model="search_element" type="text" style="background-color:white;" >
                 <p></p>
                 <div>
                <input  v-model="checkbx" type="checkbox" value="nahuat_orthography" >
                <label for="nahuat_orthography">Activar flexibilidad ortográfica</label>
                <input  v-model="checkbx" type="checkbox"  value="bilingual" >
                <label  for="bilingual">Activar búsqueda bilingüe</label>
                <input  v-model="checkbx" type="checkbox"  value="es_thesaurus_lookup" >
                <label for="es_thesaurus_lookup">Activar tesauro</label>
                    <br>
             
                </div>
      <div v-for="(find, index) in extraFilters" :key="index" :v-bind="index" >
          <p>   
              <select v-model="find.exclude" style="background-color:white;" >
                             <option v-for="(elements) in datalist_condition" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                         </select>
              <select v-model="find.type_tag" style="background-color:white;" >
                             <option v-for="(elements) in datalist_first" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                         </select>
                           <select v-model="find.filter_type" style="background-color:white;" >
                             <option v-for="(elements) in datalist_second" :key="elements.val" :value="elements.val" >{{elements.label}}</option>
                         </select>
                            <input  v-model="find.value" style="background-color:white;" >
                                    <p>
                                     <input  v-model="find.modifiers[0].name" type="checkbox" >
                                     <label >Activar flexibilidad ortográfica</label>
                                     <input  v-model="find.modifiers[1].name" type="checkbox"   >
                                    <label  >Activar búsqueda bilingüe</label>
                                    <input  v-model="find.modifiers[2].name" type="checkbox"   >
                                     <label >Activar tesauro</label>
                                     </p>
                            </p>
  </div>
                <p><button style="background-color:blue;" @click="addFilter" >Añadir filtro</button><button style="background-color:red;" @click="deleteFilter" >Eliminar filtro</button></p>
                <p><button style="background-color:green"  @click="prueba_axios" >Search</button></p>
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
                    <span v-for="(number) in paginator" :key="number" :v-bind="number" > <button @click="goPage(number)" > [{{number}}]</button></span>
                   </p>
                 </p>
             <viewer-Searchbar :datasend=axios_response />
              <div v-if="devstate===true">
                <h4>Axios response{{axios_response}}</h4>
                </div>
    </div>
</template>
<script>
import ViewerSearchbar from "@/components/ViewerSearchbar"
export default {
    components:{
    ViewerSearchbar    
  },
      data(){
    return{
      devstate:false,
      testData:"",
      actualPage:1,
      maxPages:0,
      paginator:[],
      axios_response:{},
      selected_datalist_first:"lemma",
      selected_datalist_first_val:"",
      selected_datalist_second:"begins_with",
      selected_datalist_second_val:"",
      search_element:"",
      checkbx:[] ,
      datalist_first:[
          {label:"Entrada",val:"lemma"},
          {label:"Raiz",val:"root"},
          {label:"Campo semántico",val:"category"},
          {label:"Categoría gramatical",val:"part_of_speech"},
          {label:"Inflexion",val:"inflectional_type"},
          {label:"Significado preciso",val:"precise_meaning"},
          {label:"Significado extendido",val:"extended_meaning"},
          {label:"Frase Ilustrativa",val:"illustrative_phrases"},
          {label:"Búsqueda exhaustiva",val:"complete_search"}
          ],
      datalist_second:[
          {label:"empieza con",val:"begins_with"},
          {label:"termina con",val:"ends_with"},
          {label:"contiene secuencia",val:"contains"},
          {label:"contiene palabra",val:"contains_word"},
          {label:"es exactamente igual a",val:"exactly_equals"},
          {label:"expresión regular",val:"regex"},
          ],
        datalist_condition:[
            {label:"Y",val:"and"},
            {label:"Y no",val:"andNot"},
            {label:"O", val:"or"},
            {label:"O no", val:"orNot"}
        ],
        demodata:{"dataset":"azz",
        "query":[[{"type_tag":"lemma","filter_type":"begins_with","value":"ojtli","exclude":false,"modifiers":[{"name":"nahuat_orthography"}]}]],"global_modifiers":[]},
        extraFilter:[{"type_tag":"lemma","filter_type":"begins_with","value":"ou","exclude":false,"modifiers":[{"name":"nahuat_orthography"}]},{"type_tag":"lemma","filter_type":"begins_with","value":"s","exclude":false,"modifiers":[]}]
        ,
        extraFilters: [],
        functionTester:""
    }
  },
   methods: { 
  async prueba_axios() {
      this.set_values()
    const resp = await this.$axios.$post(process.env.API_HOST,this.demodata)
    this.axios_response = resp
    this.actualPage=resp.page
    this.calcPages()
    this.paginatorMaker()
  },
  watchExtraModifTrue(){
      for(let i=0;i<this.extraFilters.length;i++){
                if(this.extraFilters[i].modifiers[0].name===true){
                  this.extraFilters[i].modifiers[0].name="nahuat_orthography"
                  this.functionTester=this.extraFilters[i].modifiers[0].name
                }
                if(this.extraFilters[i].modifiers[1].name===true){
                  this.extraFilters[i].modifiers[1].name="bilingual"
                  this.functionTester=this.extraFilters[i].modifiers[0].name
                }
                 if(this.extraFilters[i].modifiers[2].name===true){
                  this.extraFilters[i].modifiers[2].name="es_thesaurus_lookup"
                  this.functionTester=this.extraFilters[i].modifiers[0].name
                }
          }
  },
  watchExtraModifFalse(){
       for(let i=0;i<this.extraFilters.length;i++){
               if(this.extraFilters[i].modifiers[0].name===false){
                  this.extraFilters[i].modifiers[0].name=""
                  this.functionTester=this.extraFilters[i].modifiers[0].name
                }
                 if(this.extraFilters[i].modifiers[1].name===false){
                  this.extraFilters[i].modifiers[1].name=""
                  this.functionTester=this.extraFilters[i].modifiers[0].name
                }
                 if(this.extraFilters[i].modifiers[2].name===false){
                  this.extraFilters[i].modifiers[2].name=""
                  this.functionTester=this.extraFilters[i].modifiers[0].name
                }
          }
  },
  setChkBox(){
      const newArrJson=[]
      this.checkbx.forEach(element => {
          newArrJson.push({"name":element})
      });
      return newArrJson
  },
  set_values(){
          this.demodata={"dataset":"azz",
        "query":[[{"type_tag":`${this.selected_datalist_first}`,"filter_type":`${this.selected_datalist_second}`,"value":`${this.search_element}`,"exclude":false,"modifiers":this.setChkBox()}]],"global_modifiers":[]}
       // this.demodata.modifiers.push(this.checkbx)
       this.testData = JSON.stringify(Object.assign({},this.checkbx))
      // this.demodata.query[0][0].modifiers.push(JSON.stringify(this.checkbx))
      this.testData = this.setChkBox()
        
      if(this.extraFilters.length>0){
            this.watchExtraModifTrue()
            this.watchExtraModifFalse()
            this.formatQueryData()

            
      }
      
  },
  formatQueryData(){   
            const extraFiltersQueryFormat=[]
            for(let i = 0 ; i <this.extraFilters.length;i++){
              if(this.extraFilters.length>extraFiltersQueryFormat.length)
              extraFiltersQueryFormat.push(this.extraFilters[i]);
              
            }
            for(let i =0; i < extraFiltersQueryFormat.length;i++){
              let excludeVal=""
              if(extraFiltersQueryFormat[i].exclude==="and" || extraFiltersQueryFormat[i].exclude==="or"){
                excludeVal=extraFiltersQueryFormat[i].exclude
                extraFiltersQueryFormat[i].exclude=false
              }
              if(extraFiltersQueryFormat[i].exclude==="andNot" || extraFiltersQueryFormat==="orNot"){
                excludeVal=extraFiltersQueryFormat[i].exclude
                extraFiltersQueryFormat[i].exclude=true
              }
              if(excludeVal==="and" || excludeVal==="andNot"){
                if(i<=0){
                  this.demodata.query[0].push(extraFiltersQueryFormat[i])
                }else{
                  this.demodata.query[i].push(extraFiltersQueryFormat[i])
                }
              }
              if(excludeVal==="or" || excludeVal==="orNot"){
                this.demodata.query.push([extraFiltersQueryFormat[i]])
              }
            }
            this.testData=extraFiltersQueryFormat
          
                 /*
               this.demodata.query.push([this.extraFilters[i]])
            */
  }
  ,
  addFilter(){
      this.extraFilters.push({"exclude":"and" ,"value": '',"type_tag":`lemma`, "filter_type":'begins_with', "modifiers":[{"name":false},{"name":false },{"name":false }]});
  },
  deleteFilter(){
      this.extraFilters.pop()
  },
  calcPages(){
    this.maxPages = Math.ceil(this.axios_response.total / this.axios_response.pageSize)
  },
  paginatorMaker(){
     for(let i =1;i<=this.maxPages;i++){
      this.paginator.push(i)
    }
  },
  async nextPage(){
    this.calcPages()
    if(this.actualPage<this.maxPages){
    this.actualPage++
    this.demodata.page=this.actualPage
    const resp = await this.$axios.$post(process.env.API_HOST,this.demodata)
    this.axios_response = resp
    }
    
  },
  async prevPage(){
    this.calcPages()
    if(this.actualPage>1){
    this.actualPage--
    this.demodata.page=this.actualPage
    const resp = await this.$axios.$post(process.env.API_HOST,this.demodata)
    this.axios_response = resp
    }
  },
  async goPage(targetPage){
    this.calcPages()
    this.actualPage=targetPage
    this.demodata.page=this.actualPage
    const resp = await this.$axios.$post(process.env.API_HOST,this.demodata)
    this.axios_response = resp
    
  }

},

}
</script>
<style lang="">
    
</style>