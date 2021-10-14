<template lang="">
    <div>
       <h1>Preview componente searchbar</h1>
       <div v-if="datasend.page">
       <h2>{{datasend.pageSize}} Resultados mostrados de ({{datasend.total}}) totales</h2>
        </div>
         <div v-for="(element, index) in datasend.data" :key="index" :v-bind="index" >
           <div style="border:0.5px solid white;">
             <div style="border:0.5px solid red;">{{String(element.headword)}} | Citación:{{String(element.citation_forms)}}, Formas alt.;{{String(element.glosses)}} | Categoría gramatical:<span v-for="(grammars) in element.grammar_groups" :key="grammars.part_of_speech" :v-bind="grammars.part_of_speech" >{{grammars.part_of_speech}}</span> | Campo semántico: {{String(element.categories)}}
             <p></p>
             <div v-for="(media) in element.media" :key="media.url" :v-bind="media.url">
                <audio :src="media.url" controls="controls" :type="media.mime_type" preload="preload">
                </audio>
             </div>
           

             </div>
             <div style="border:0.5px solid yellow;">
                <ol>
                  <li v-for="(sense) in element.senses" :key="sense.sense" :v-bind="sense.sense">{{sense.sense}} <p></p>
                  <ul>
                    <li v-for="(example) in sense.examples" :key="example.original.text" :v-bind="example.original.text">{{example.original.text}} 
                      <p v-if="example.translation" style="color:teal;"  > {{example.translation.text}}</p>
                    </li>
                  </ul>
                 </li>
                </ol>
             </div>
             <div style="border:0.5px solid teal;">
               <p v-for="(note) in element.notes" :key="note.text" :v-bind="note.text">Nota {{note.note_type}}:{{note.text}}</p>
             </div>
           </div>
         </div>
    </div>
</template>
<script>

export default {
  props:{
    datasend:{
      type:Object,
      default(){
        return {data:{}}
      }
    }
  },
      data(){
    return{
      json_datasend:{},
     contador:1
    }
  },
   methods: { 
     pruebastorepush(){
       
     }
  }
}
</script>
<style lang="">
    
</style>