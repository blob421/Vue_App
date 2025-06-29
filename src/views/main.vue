<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Heading from '@/components/heading_main.vue'
import graph from '@/components/graph.vue'

import { ref, onMounted, watch } from "vue";
import axios from "axios";


const api = import.meta.env.VITE_API_URL
const stats = ref([]);
const dates = ref([]);
const prices = ref([])
const filteredDates = ref([]);
const filteredPrices = ref([]);


onMounted(async () => {
 
   try {
    const response = await axios.get(`${api}/api/bitcoin`);
    console.log("Data received:", response.data);
    stats.value = response.data.content.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log("content:", stats.value)
    if (Array.isArray(stats.value)) {
    dates.value = stats.value.map(entry => new Date(entry.date));
    prices.value = stats.value.map(entry => entry.price);
  }
    const today = new Date();
    const thirteenDaysAgo = new Date();
    thirteenDaysAgo.setDate(today.getDate() - 14);

    // ✅ Filter out only the last 13 days
    const filteredStats = stats.value.filter(entry => new Date(entry.date) >= thirteenDaysAgo);

    // ✅ Update reactive values with filtered data
    filteredDates.value = filteredStats.map(entry => new Date(entry.date));
    filteredPrices.value = filteredStats.map(entry => entry.price);
   
    console.log("consts:", dates)
  } catch (error) {
    console.error('API Error:', error);
  }
});

watch([dates, prices], ([newDates, newPrices]) => {
  console.log("Updated Dates:", newDates);
  console.log("Updated Prices:", newPrices);
});
</script>

<template>
   <Heading class="title"/>
   
    
      <graph :dates="filteredDates" :prices="filteredPrices" class="graph"/>
       

    <RouterView />

</template>

<style>
 
 .graph{position:absolute;
       right: 11.3vw;
       top: 11vw;
      

      }  

 h2 {
    position: absolute;
    left: 16.4vw;
    top: 5vw;
    grid-template-columns: repeat(3, 1fr) space-between;
    gap: 10 px;
    display: flex;
    
    width: 60%;  
  }
  .p{
    position: absolute;
    left:10vw;

  }
  .title {
  
     color: white;
     
     position: absolute;
     top: 2vw;
     left: 31vw;
     display:flex;
     font-size: 35px;
     
     font-family: Sans-serif;
  }

   html{
    overflow-x: hidden;
    max-width: 100%;
}
@media (max-width: 541px) {
   .title{
    top:50px;
    left: 19vw;
    font-size: 23px;
    position: absolute;
   }

   h2{width: 80%;
      
      top: 17vw;
      left:9vw;
      position:absolute;
      text-align: center;
      margin-bottom: 10px;
   }
}
 

.body{background-color: orange;
   color-scheme: orange;
 }
@media (min-width: 541px) and (max-width: 766px) {
   .title{
    top:50px;
    left: 18vw;
    font-size: 23px;
    position: absolute;
   }

   h2{width: 70%;
   
      top: 17vw;
      left:13.5vw;
      position:absolute;
      text-align: center;
   }
}
@media (min-width:767px) and (max-width: 1025px) {
   .title{
    top:5vw;
    left: 31.7vw;
    font-size: 30px;
    
   }
   
   h2{width: 80%;

      top: 15vw;
      left: 9vw;
      position:absolute;
      
   }
}



</style>

