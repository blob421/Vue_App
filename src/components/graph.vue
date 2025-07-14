<template>
    <div class="container">
       
      <h class="h">Welcome to my web</h>
      <div ref="plotlyChart" class="graph"></div>
      <div ref = "plotlyChart2" class = "graph2"></div>
    </div>
   
</template>

<script setup>
import Plotly from 'plotly.js-dist';
import { ref, watch} from "vue";

const plotlyChart = ref(null);
const plotlyChart2 = ref(null);
const { dates, prices, dates2, prices2 } = defineProps(["dates", "prices", "dates2", "prices2"]);

watch([() => dates, () => prices, () => dates2, () => prices2], () => {

  renderPlot();
  renderPlot2();
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
          text: "Bitcoin movement",  'x': 0.5, 
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
        const config = {
          responsive: true, 
          staticPlot: true
        };

     
        Plotly.newPlot(plotlyChart.value, [baseTrace, trace], layout, config);

  }
  const renderPlot2 = () => {
  if (!plotlyChart2.value) {
    console.error("Plotly container not found!");
    return;
  }
      const trace2 = {

        x: dates2,
        y: prices2,
        mode: 'lines',
        fill: "tonexty",
        fillgradient: {
        type: 'vertical',
        colorscale: [[0,'rgba(161, 255, 238, 0.3)'], [1,'rgba(0, 218, 139, 1)']],
      },
        showlegend: false,
        line: {
        color: "lightgreen",  // Change line color here
        width: 2.7,       // Adjust thickness if needed
       
        
      }
    };
        const minY = Math.min(...prices2);

        const baseTrace2 = {
          x: dates2,
          y: Array(prices2.length).fill(minY),
          type: "scatter",
          mode: "lines",
          line: { color: "transparent" },
          showlegend: false,
 
    };

        const layout2 = { margin: {
          r:70
      },
 

        title: {
          text: "Ethereum movement",  'x': 0.5, 
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
        const config2 = {
          responsive: true,
          staticPlot: true
        };

     
        Plotly.newPlot(plotlyChart2.value, [baseTrace2, trace2], layout2, config2);

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
    
    
    display: flex;
    justify-content: center;
    align-items: center; /* changed from center */
    width: 100%;
    height: 100vh;

}

 .graph{
   
    margin-left: auto;
    margin-right: auto;
    opacity: 92%;
    min-height: 500px;
    /*border: 2px blue solid;*/
   
  }

 .graph2{
    margin-left: auto;
    margin-right: auto;
   
    min-height: 500px;
  
    /*border: 2px green solid;*/
    opacity: 92%;
    padding-top: 4rem;
  
    
    
    
 }

.container{
    padding-top: 7rem;
    min-width: 750px;
    max-width: 800px;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    width:75%;
     opacity: 92%;
    /*border: 2px red solid;*/
    
    height: 125% !important;
    
   

    
}   
 .h{
   font-family: "Titan One", sans-serif;;
  font-size: 1.5rem;
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
  position: absolute;
  top: 1%;
  left: 50%;
  width: 55%;
  text-align: center;
  transform: translateX(-50%);
  opacity: 95%;}
  
 @media (max-width:4000px){
  .container{
    top: 0%;
    transform: translateX(-50%) scale(1.75);
    transform-origin: top;
    padding-top: clamp(10rem, 20vh, 20rem);

   
  }
} 
  
@media (max-width:1500px){
  .container{
 
    transform: translateX(-50%) scale(0.95);
    transform-origin: top;
   
     padding-top: 8rem;
  }
  
  
}

@media (max-width:767px){
  .container{
    transform: translateX(-50%) scale(0.5);
    transform-origin: top;
     padding-top: clamp(10rem, 25vh, 20rem);
    
  }
  .h{
    font-size: 2.2rem;
     width: 82%;
  }
}

@media (max-width:450px){
  .container{
     transform: translateX(-50%) scale(0.45);
    transform-origin: top;
  }
}

</style>