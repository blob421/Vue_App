<script setup>
import { RouterLink, RouterView } from 'vue-router'

import graph from '@/components/graph.vue'
import { ref, onMounted, watch } from "vue";
import axios from "axios";


const api = import.meta.env.VITE_API_URL;
const stats = ref([]);
const dates = ref([]);
const prices = ref([]);

const stats2 = ref([]);
const dates2 = ref([]);
const prices2 = ref([]);


onMounted(async () => {
 
   try {
    const response = await axios.get(`${api}/api/bitcoin`);
    stats.value = response.data.content.sort((a, b) => new Date(a.date) - new Date(b.date));

    const response2 = await axios.get(`${api}/api/eth`);
    stats2.value = response2.data.content.sort((a, b) => new Date(a.date) - new Date(b.date));

    if (Array.isArray(stats.value)) {
    dates.value = stats.value.map(entry => new Date(entry.date));
    prices.value = stats.value.map(entry => entry.price);
  }
    if (Array.isArray(stats2.value)) {
    dates2.value = stats2.value.map(entry => new Date(entry.date));
    prices2.value = stats2.value.map(entry => entry.price);
  }
   
    
  } catch (error) {
    console.error('API Error:', error);
  }
   }
);

watch([dates, prices, dates2, prices2], () => {
});

</script>


<template>
   <head>
    <title>Home</title>
   </head>
    
    <graph :dates="dates" :prices="prices" :dates2="dates2" :prices2="prices2"/>
    
    <RouterView />

</template>


<style>
body{
   background: linear-gradient(145deg, #afcae5, #f7f7f7);
   
  height: 150vh;
  overflow-y: auto;
}
   


</style>