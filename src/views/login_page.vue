
<template>
<head>

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
p{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top:49%;
  color:#8e9193;

}
body {
            font-family: Arial,bold , sans-serif;
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            aspect-ratio: 7 / 4;
}
.login-container {
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgb(247, 247, 247);
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
            border: 1px solid #fefefe;
            border-radius: 5px;
        }
button {
            background-color: #9b9c93;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
button:hover {
            background-color: #646c70;
            }
</style>