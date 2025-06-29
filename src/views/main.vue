<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Heading from '@/components/heading_main.vue'
import graph from '@/components/graph.vue'

import { ref, onMounted, watch } from "vue";
import axios from "axios";


const api = import.meta.env.VITE_API_URL;
const stats = ref([]);
const dates = ref([]);
const prices = ref([]);
const filteredDates = ref([]);
const filteredPrices = ref([]);


onMounted(async () => {
 
   try {
    const response = await axios.get(`${api}/api/bitcoin`);
    console.log("Data received:", response.data);
    stats.value = response.data
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
   <head>
    <h1>Welcome @!</h1>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
   </head>
     
     <Heading />
      <graph :dates="filteredDates" :prices="filteredPrices" class="graph"/>
       

    <RouterView />

</template>



