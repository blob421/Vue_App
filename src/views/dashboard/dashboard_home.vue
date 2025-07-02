
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
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
        }
        .sidebar {
            width: 250px;
            background: #808182;
            color: white;
            height: 100vh;
            padding: 20px;
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
            background: #34495E;
        }
        .content {
            flex: 1;
            padding: 20px;
            background: #ECF0F1;
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
            padding: 15px;
            margin: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
               
        .dash{
            color: white;
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