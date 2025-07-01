
<template>

<h1 class="title-container">Welcome to my web app</h1>
  
</template>


<style>

.title-container {
 position: absolute;
 font-family: "Titan One", sans-serif;;
  top: 5%; 
  left: 50%;
  transform: translateX(-50%);
 display: inline-block;
  padding: 0.6rem 1.4rem;
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(145deg, #cde5ed, #f0f6f8);
  color: #959696;
  border-radius: 12px;
  border: 2px solid #ffffff;
  box-shadow: 
    inset 0 0 8px rgb(255, 255, 255), /* Inner frosty glow */
    0 4px 12px rgb(255, 255, 255);       /* Outer cool shadow */
  text-shadow: 1px 1px 1px white;
  backdrop-filter: blur(2px);
  transition: all 0.3s ease;
  -webkit-backdrop-filter: blur(2px); /* ✅ Safari support */
  backdrop-filter: blur(2px); 
}


@media (max-width: 1023px) {
  .graph {
  font-size: 20px;
  
  }

}
@media (max-width: 414px) {
  .title-container {
  font-size: 20px;
  
  }

}
</style>

