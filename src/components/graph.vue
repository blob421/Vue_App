<template>
    <div class="container"> 

      <div ref="plotlyChart" class="graph"></div>
    </div>
   
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
        fill: "tonexty",
        fillgradient: {
        type: 'vertical',
        colorscale: [[0,'rgba(255, 139, 37, 0.5)'], [1,'rgba(245, 187, 39, 1)']],
      },
        showlegend: false,
        line: {
        color: "orange",  // Change line color here
        width: 2.7,       // Adjust thickness if needed
       
        
      }
    };
        const minY = Math.min(...prices);

        const baseTrace = {
          x: dates,
          y: Array(prices.length).fill(minY),
          type: "scatter",
          mode: "lines",
          line: { color: "transparent" },
          showlegend: false,
 
    };

        const layout = { margin: {
          r:70
      },
 

        title: {
          text: "Bitcoin movement",  'x': 0.505, 
          'y':0.89, font : { size: 18, color: "#ffffff", family: "solidity: 0.2" }
      },
        template: "plotly_dark", // Dark theme
        paper_bgcolor: "#171717",  // Background outside the plot
        plot_bgcolor: '#171717',   // Background inside the plot
        
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
        const config = {responsive: true};

     
        Plotly.newPlot(plotlyChart.value, [baseTrace, trace], layout, config);

  }
  
  
</script>

<style>
* { box-sizing: border-box; }

    body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}
    body{
        background: linear-gradient(145deg, #afcae5, #f7f7f7);

    display: flex;
    justify-content: center;
    align-items: center; /* changed from center */
    width: 100%;
    height: 100vh;
}
.container{
    min-width: 700px;
    max-width: 1100px;
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -30%);
  
    
}   
 .graph{

    width:88%;
    margin-left: auto;
    margin-right: auto;
    opacity: 92%;
   
  }
@media (min-width:2000px){
  .container{
    transform: translate(-50%, -80%) scale(2);
  }
  .graph{
    width: 80%;
  }
}

@media (max-width: 1023px) {
    .container{

      transform: translate(-50%, -30%) scale(1);
  
  }
    .graph{
      width:95%
    }


}
@media (max-width: 767px) {

  .container{
   
   transform: translate(-50%, -50%) scale(0.6);
}
  .graph{
    width:100%;
  }
}
@media (max-width: 376px) {

  .container{
   
   transform: translate(-50%, -60%) scale(0.5);
}
  .graph{
    width:100%;
  }
}
@media (max-width: 320px) {

  .container{
   
   transform: translate(-50%, -50%) scale(0.49);
}
  .graph{
    width:100%;
  }
}

@media (max-height:400px){

  .container{
       transform: translate(-50%, 5%) 


  }
}
</style>