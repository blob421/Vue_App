<script setup>
import { RouterLink, RouterView } from 'vue-router'
import login from '@/components/login_register.vue'


</script>

<template>
  
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

      
      <login />
  <RouterView />
  
</template>

<style>

   .container{
    position: relative;
    display:flex;
    flex-direction: column;
    
}

    .links {
    position:fixed;
    bottom:0vw;
    left:47.8vw;
    z-index: 1000;
    

}
 .div{
  
    width: 100%;
  height: 100vh;

 }

</style>