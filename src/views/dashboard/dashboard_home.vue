
<template>
<head>
 
    <title>Dashboard</title>


</head>
 <div class="container">
    <div class="sidebar">
      <h2>Dashboard</h2>
        <ul>
            <li><a href= "/dashboard/home" class="dash">Home</a></li>
            <li><a href="/dashboard/data" class="dash">User Data</a></li>
          
        </ul>
    </div>
    <div class="content"></div>
        <div class="header">Welcome {{data.username}}</div>
        <div class="card">
            <h3>Analytics Overview</h3>
            <p>Some summary data can go here...</p>
        </div>
        <div class="card">
            <h3>Recent Activity</h3>
            <p>User actions, logs, and updates can be displayed</p>
            </div>
        </div>
  
</template>  

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
  .sidebar ul li:hover {
    background: #859fbf62;
}
  
  .dash{
    color: white;
    display: block;
 
}

@media (max-width: 1500px){

}
  .container {

    font-family: "Passion One", sans-serif;
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
  
    width: 50vw;
    height:90%;
    max-width: 1700px;
    max-height: 100%;

  
}

.sidebar {
    width: 100%;
    background: #75797c;
    color: white;
    padding: 10px;

    text-align: center;
    max-width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.203);
    
    
}
.sidebar h2 {
    text-align: center;
}
.sidebar ul {
    list-style-type: none;
    padding: 0;
}
.sidebar ul li {
    padding: 10px;
    cursor: pointer;
}

.header {
    background: #9db0bd;
    color: white;
    padding: 15px;
    text-align: center;
    font-size: 20px;
}
.card {
    width: 99%;
    max-height: 100%;
    
    background: white;
    margin-top: 20px;
    padding: 10px;
    max-width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.182);
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #808182;
    
}
        


@media (max-width:1024px){
    .container{
        width: 80vw;
    }
    
}
@media (min-width: 1600px) {
  

  body {
    font-size: 40px;
  }

  .header {
    font-size: 70px;
  }

  .card {
    font-size: 38px;
    padding: 20px;
  }

  .sidebar h2 {
    font-size: 74px;
  }

  .sidebar ul li {
    font-size: 58px;
  }
}
</style>


<script>
import axios from 'axios';

const api = import.meta.env.VITE_API_URL;

export default {
    data() {
        return{
            data: {},
        };

    },

    methods: {

async loadData() {
  try {
    const response = await axios.get(`${api}/api/users/`, {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`,   
    }
    

});
    
    console.log('API Response:', response.data); 
    this.data = response.data;

  } catch (error) {
    console.error('Error fetching data:', error);
    }
  }
 },


    
created() {
    this.loadData(); // Call the function when the component is created
  }
}
</script>