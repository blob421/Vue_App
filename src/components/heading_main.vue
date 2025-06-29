<script>
</script>

<template>
  
<div class="title-container">
  <h1 class="title">Welcome to my web app</h1>
</div>
  
   
</template>


<style>
.title-container {
   display: flex;
  justify-content: center; /* horizontally centers */
  align-items: center;     /* vertically centers (optional) */
  width: 100vw;
  
}

.title {
  font-size: 5px;
  
   max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  transform-origin: center center;
  transition: transform 0.3s ease;
  position: relative;
  right:-11vw;
}

@media (max-width: 4096px) {
  .title {
    font-size: 4vw;
    position: absolute;
    top: 2vh;
    right: 14vw;
  }
}
@media (max-width: 1023px) {
  .title {
    font-size: 35px;
    top: 1vw;
    right: 15vw;
  }
}
@media (max-width: 540px) {
  .title {
    font-size: 25px;
    top: 1vw;
    right: 8vw;
  }
}

</style>

