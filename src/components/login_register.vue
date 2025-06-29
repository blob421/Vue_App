<template>

 <head class="login">
      <a href="/login/sign-in">Login</a> |
      <a href="/">Home</a> |
      <a href="/login/register">Register</a> |
      <a id="dashboardLink">Dashboard</a>

 </head>
 

</template>

<style>



.login{
    
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-family:fantasy;
    top:94%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    display: flex;  
}



</style>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const userId = localStorage.getItem("user_id");
        if (userId) {
            document.getElementById("dashboardLink").href = `/dashboard/${userId}`;
        }
    });
</script>