
<template>
<div class="title_container">
  <h1 class="title">Welcome to my web app</h1>

</div>

  
  
   
</template>


<style>


  

.title {
  font-size: clamp(1rem, 2vw, 3rem);
  background: linear-gradient(360deg, #c6e1e9, #ffffff);
  color: #959696;
  white-space: nowrap;        
  overflow: hidden;            
  text-overflow: ellipsis;
  padding: 0.6rem 1.8rem;
  font-weight: 600;
  text-shadow: 1px 1px 1px white;
  backdrop-filter: blur(2px);
  transition: all 0.3s ease;
  border-radius: 12px;
  border: 2px solid #ffffff;
  box-shadow: 
  inset 0 0 8px rgb(255, 255, 255), 
  0 4px 12px rgb(255, 255, 255);       
  opacity: 95%;
}
  .title_container{
    font-family: "Titan One", sans-serif;;
    position: absolute;
    top: 5%; 
    left: 50%;
    transform: translateX(-50%);
   
    

  }



</style>

