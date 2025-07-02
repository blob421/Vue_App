
<template>
<head>
 
    <title>Dashboard</title>


</head>
 <body>
    <div class="sidebar">
      <h2>Dashboard</h2>
        <ul>
            <li><router-link to ="/dashboard/home" class="dash">Home</router-link></li>
            <li><router-link to ="/dashboard/data" class="dash">User Data</router-link></li>
          
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
</body>
  <RouterView />
</template>  


<style>

@media (min-width: 1024px){
  body {
            font-family: "Passion One", sans-serif;
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
            width: 100%;
            display:inline;
            position: absolute;
            left: 50%;
  transform: translateX(-50%);
   
        }

        .sidebar {
            width: 50vw;
            background: #75797c;
            color: white;
            padding: 5px;
            top:1vw;
            text-align: center;
            height: 13vw;
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
        .sidebar ul li:hover {
            background: #859fbf62;
        }
    
        .header {
            background: #9db0bd;
            color: white;
            padding: 15px;
            text-align: center;
            font-size: 20px;
        }
        .card {
            background: white;
            padding: 10px;
            margin: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.203);
            width: 50%;
            text-align: center;
            color: #808182;
        }
               
        .dash{
            color: white;
        }
}

@media (max-width:1023px) {
        body {
            font-family: "Passion One", sans-serif;
            font-size: 25px;
         
  
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
            text-align: center;
            position: absolute;
            left: 50%;
  transform: translateX(-50%);
        }
        .sidebar {
           
            background: #808182;
            color: white;
            width: 90vw;
            padding: 10px;
            opacity: 70%;
            top:1vw;
        }
   
        .sidebar ul {
            list-style-type: none;
            
            padding: 0;
        }
        .sidebar ul li {
            padding: 10px;
            cursor: pointer;
        }
        .sidebar ul li:hover {
            background: #34495E;
        }
     
        
    
        .card {
            background: white;
            padding: 10px;
            margin: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.188);
            height:10vh;
            font-size: 20px;
           
        }
        
        .dash{
            color: white;
        }
    }

@media (max-width:700px){
        body {
            font-family: "Passion One", sans-serif;
            font-size: 15px;
  
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
                 text-align: center;
                position: absolute;
  left: 50%;
  transform: translateX(-50%);
        }
        .sidebar {
           
            background: #808182;
            color: white;
            width: 90vw;
            padding: 10px;
            opacity: 70%;
            top:1vw;
        }
   
        .sidebar ul {
            list-style-type: none;
            
            padding: 0;
        }
        .sidebar ul li {
            padding: 10px;
            cursor: pointer;
        }
        .sidebar ul li:hover {
            background: #34495E;
        }
     
        
    
        .card {
            background: white;
            padding: 10px;
            margin: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.188);
            height:10vh;
            font-size: 13px;
      
           
            
         
        }
        
        .dash{
            color: white;
        }
    }
</style>

<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
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