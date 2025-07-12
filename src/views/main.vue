<script setup>
import { RouterLink, RouterView } from 'vue-router'

import graph from '@/components/graph.vue'

import { ref, onMounted, watch } from "vue";
import axios from "axios";


const api = import.meta.env.VITE_API_URL;
const stats = ref([]);
const dates = ref([]);
const prices = ref([]);


onMounted(async () => {
 
   try {
    const response = await axios.get(`${api}/api/bitcoin`);
    stats.value = response.data.content.sort((a, b) => new Date(a.date) - new Date(b.date));
  

    if (Array.isArray(stats.value)) {
    dates.value = stats.value.map(entry => new Date(entry.date));
    prices.value = stats.value.map(entry => entry.price);
  }
   
    
  } catch (error) {
    console.error('API Error:', error);
  }

});

watch([dates, prices], ([newDates, newPrices]) => {

});
</script>

<template>
    <head>
        <h1>Main</h1>
   
    </head>

      <graph :dates="dates" :prices="prices" class="graph"/>
       

    <RouterView />

</template>



<style>
body{
   background: linear-gradient(145deg, #afcae5, #f7f7f7);

}
</style>