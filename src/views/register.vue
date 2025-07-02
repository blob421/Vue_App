
<template>
  <head>
  
    <title>Registration Page</title>
 </head>
    <div class="registration-container">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <input type="text" v-model="username" placeholder="Username" required />
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Password" required />
            <button type="submit">Register</button>
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
      email: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(`${api}/api/sign-up`, {
          username: this.username.trim(),
          password: this.password.trim(),
          email: this.email.trim(),
        })
        console.log(this.username, this.email,this.password)
        console.log(response);
        alert('Registration complete');
      } catch (error) {
        this.errorMessage = 'Invalid format';
       
      }
    }
  }
};


</script>

<style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(145deg, #afcae5, #f7f7f7);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: #808182;
        }
        .registration-container {
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