<template>

 <head class="login">
      <a href="/login/sign-in">Login |</a> 
      <a href="/">Home |</a> 
      <a href="/login/register">Register</a>
      <a v-if= "isAuthenticated" href="/dashboard/home">| Dashboard</a> 

 </head>
 

</template>

<style>



.login{
    
     position: fixed;
     left: 50%;
     transform: translateX(-50%);
     font-size: 20px;
     font-family: "Passion One", sans-serif;
     top:90%;
     z-index: 1000;
     white-space: nowrap;
     display: inline;
      background: linear-gradient(360deg, #c6e1e9, #ffffff);
     opacity: 95%;
      
     padding: 0rem 3.7vw;
     border-radius: 12px;
     box-shadow: 
     inset 0 0 8px rgb(255, 255, 255), 
     0 4px 12px rgb(255, 255, 255);   
}

@media (max-width:800px){
     .login{
          padding: 0rem 6.7vw;


     }
}

 
@media (min-height:1500px){

     .login{
          font-size: 39px;
          top:80%;
     }
}

@media (min-height:1150px){

     .login{
          font-size: 27px;
          top:80%;
     }
}

</style>

<script>

import { loadData, isTokenReady } from '@/views/useAuth'


export default {
  data() {
    return {
      isAuthenticated: false
    };
  },
   async mounted() {
    await loadData() 
    this.isAuthenticated = isTokenReady.value 
  }
}
  
</script>