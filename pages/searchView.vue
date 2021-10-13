<template>
<div>
 <search-Bar/>
 <viewer-Searchbar/>
</div>

</template>
<script>
import SearchBar from "@/components/SearchBar"
import ViewerSearchbar from "@/components/ViewerSearchbar"
export default {
      components:{
    SearchBar,
    ViewerSearchbar    
  },
}
</script>