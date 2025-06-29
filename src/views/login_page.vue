
<template>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
 
</head>

    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="text" v-model="username" placeholder="Username" required />
            <input type="password" v-model="password" placeholder="Password" required />
             <button type="submit">Login</button>
            
        </form>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

</template>
<script>
import axios from 'axios';

const api = import.meta.env.VITE_API_URL;

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${api}/api/sign-in`, {
          username: this.username,
          password: this.password
        })
       
        console.log(response);
        localStorage.setItem("jwtToken", response.data.access_token);
        localStorage.setItem('user_id', response.data.user_id)
        alert('Login successful!');
      } catch (error) {
        this.errorMessage = 'Invalid credentials. Please try again.';
       
      }
    }
  }
};


</script>
<style>
body {
            font-family: Arial,bold , sans-serif;
            color:rgba(156, 177, 181, 0.911);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
           
}
.login-container {
            background-color: hsla(0, 100%, 99%, 0.765);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(119, 36, 8, 0.878);
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
button {
            background-color: #70ccfa;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
button:hover {
            background-color: #3e91c9;
        



      }
</style>