<template lang="">
    <div>
       <h4>Preview component searchbar</h4>
          {{prueba}}
            <button style="background-color:orange;" @click="pruebastorepush()" >try me</button>
    </div>
</template>
<script>
export default {
  props:{
    prueba:{
      type:String,
      default:""
    }
  },
      data(){
    return{
     contador:1
    }
  },
   methods: { 
     pruebastorepush(){
       
     }
  },

}
</script>
<style lang="">
    
</style>