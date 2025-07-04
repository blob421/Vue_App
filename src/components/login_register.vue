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
     top:92%;
     z-index: 1000;
     white-space: nowrap;
     display: inline;
      background: linear-gradient(360deg, #c6e1e9, #ffffff);
     opacity: 95%;
      
    padding: 0rem 5.7vw;
     border-radius: 12px;
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
export default {
     computed : {
          isAuthenticated() {
               return !!localStorage.getItem("jwtToken");
          }
     }
}
</script>