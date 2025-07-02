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
    font-size: 18px;
    font-family: "Passion One", sans-serif;
    top:90%;
    z-index: 1000;
   
    display: flex;  
}



</style>

<script>
export default {
     computed : {
          isAuthenticated() {
               return !!localStorage.getItem("jwtToken");
          }
     }
}
</script>