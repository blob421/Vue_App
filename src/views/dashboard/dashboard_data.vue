
<template>
<head>
 
    <title>Dashboard</title>


</head>
 <body>
    <div class="sidebar">
      <h2>Dashboard</h2>
        <ul>
            <li><a href="/dashboard/home" class="dash">Home</a></li>
            <li><a href ="/dashboard/data" class="dash">User Data</a></li>
         
        </ul>
    </div>

        <div class="card">
         <h3>Username:</h3>
         <p>{{ data.username }}</p>
        
        </div>
          
        <div class="card">
            <h3>Password:</h3>
            <p><a href= "/update_password">Change password</a></p>
        </div>
        <div class="card">
            <h3>Email address:</h3>
            <p>{{ data.email }}</p>
            </div>
</body>
</template>  


<style>

@media (min-width: 1024px){
  body {
            font-family: "Passion One", sans-serif;
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
            width: 93.3vw;
            display:inline;
            height: 200%;
         
   
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
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
            width: 93vw;
            display:inline;
            height: 200%;
         
        }
        .sidebar {
            font-size: 30px;
            text-align: center;
            background: #808182;
            color: white;
            width: 100%;
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
            text-align: center;
            background: white;
            padding: 10px;
            margin: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.188);
            height:10vh;
            font-size: 27px;
            color: #808182;
           
        }
        
        .dash{
            color: white;
        }
    }

@media (max-width:700px){
        body {
             font-family: "Passion One", sans-serif;
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
            width: 93vw;
            display:inline;
            height: 200%;
            
         
        }
        .sidebar {
            font-size: 18px;
           text-align: center;
            background: #808182;
            color: white;
            width: 100%;
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
            text-align: center;
            background: white;
            padding: 10px;
            margin: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.188);
            height:10vh;
            font-size: 17px;
            color: #808182;
      
        }
        
        .dash{
            color: white;
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