<template>
    
	<div class="card">
  <div class="card-content">
    
      <ul>
		  <li v-for="item in definition">-{{ item }}</li>

	  </ul>
    
   
  </div>
 
</div>
</template>

<script>
export default {

    props: {
		
		definition: {}
			
},

}
</script>

<style>

</style>
