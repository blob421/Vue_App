<template>

    <div ref="plotlyChart" class="graph"></div>

</template>


<script setup>

import Plotly from 'plotly.js-dist';
import { ref, watch} from "vue";

const plotlyChart = ref(null);
const { dates, prices } = defineProps(["dates", "prices"]);

watch([() => dates, () => prices], ([newDates, newPrices]) => {
  console.log("New Dates received in Graph.vue:", newDates);
  console.log("New Prices received in Graph.vue:", newPrices);
  renderPlot();
});

const renderPlot = () => {
  if (!plotlyChart.value) {
    console.error("Plotly container not found!");
    return;
  }
      const trace = {
        x: dates,
        y: prices,
        mode: 'lines',
        type: 'scatter',
        line: {
        color: 'orange',  // Change line color here
        width: 3        // Adjust thickness if needed
  }
      };

      const layout = { 

    title: {
      text: "Bitcoin movement",  'x': 0.505, 
        'y':0.89, font : { size: 18, color: "#ffffff", family: "solidity: 0.2" }
    },
      template: "plotly_dark", // Dark theme
    paper_bgcolor: "#171717",  // Background outside the plot
    plot_bgcolor: "#171717",   // Background inside the plot
    
    xaxis: {
       showline: false, // ✅ Removes the x-axis line
       showgrid: false, // ✅ Removes the x-axis grid lines
       zeroline: false, // ✅ Removes the baseline
       title: {
      text: "Date",
      font: { size: 15, color: "#ffffff", family: "solidity: 0.2" }
    },
     tickangle: 0,
     automargin: true, // ✅ Prevent labels from overlapping
     tickmode: "auto",
     dtick: 86400000 * 2,
     tickformat: "%b %d",
     linecolor: "#506784",
     zerolinecolor: "#283442",
     zerolinewidth: 2,
     ticks: "",
     color: "#171717", // ✅ Axis line color
     tickfont: { size: 11, color: "#ffffff", family: "solidity: 0.2" }
     
    
  },
  yaxis: {
           title: {
      text: "USD",
      font: { size: 14, color: "#ffffff", family: "solidity: 0.2" },
      standoff: 15
    },
    showline: false, // ✅ Removes the x-axis line
    
    zeroline: false, // ✅ Removes the baseline
    linecolor: "#506784",
    gridcolor: "#506784",
    zerolinecolor: "#283442",
    zerolinewidth: 2,
    tickfont: { size: 11, color: "#ffffff", family: "solidity: 0.2" },
    ticksuffix:"   "
  }
};
      const plotData = [
  {
    type: "barpolar",
    marker: {
      line: { color: "rgb(17,17,17)", width: 0.5 },
      pattern: { fillmode: "overlay", size: 10, solidity: 0.2 }
    }
  },
  {
    type: "bar",
    error_x: { color: "#f2f5fa" },
    error_y: { color: "#f2f5fa" },
    marker: {
      line: { color: "rgb(17,17,17)", width: 0.5 },
      pattern: { fillmode: "overlay", size: 10, solidity: 0.2 }
    }
  }
];

     
      Plotly.newPlot(plotlyChart.value, [trace], layout);

    }
  
</script>

<style>

.graph {


  top:10vw;
  width: 80vw;             
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  box-sizing: border-box;
}
  

</style>