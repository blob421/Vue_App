<template>
<head>
    <title>Login Page</title>
  
</head>

    <div class="login-container">
        <h2>Change your password</h2>
        <form @submit.prevent="login">
            <input type="password" v-model="password" placeholder="Current password" required />
            <input type="password" v-model="newPassword" placeholder="New password" required />
            <input type="password" v-model="confirm_password" placeholder="Confirm new password" required />
            <button type="submit" :disabled="passwordMismatch">Update</button>
            
        </form>
    </div>
   

      <div v-if="passwordMismatch" class="mismatch">
      Passwords don't match.
    </div>

</template>
<script>
import axios from 'axios';

const api = import.meta.env.VITE_API_URL;

export default {
  data() {
    return {

      password: '',
      newPassword:'',
      confirm_password:'',
      errorMessage: ''
    };
  },
  computed: {
    passwordMismatch() {
      return this.newPassword !== this.confirm_password;}
    },
    
  methods: {
    async login() {
      try {
  const response = await axios.post(`${api}/change/password`, 

  {
    new_password: this.newPassword,
    old_password: this.password
  },

  {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
    }
  }

);
       
    
        
        alert('Password updated !');
        window.location.href = '/dashboard/home'
      } catch (error) {
        this.errorMessage = "Your password is incorrect";
       
      }
    }
  }
};


</script>
<style>
.mismatch {
    position:absolute;
    bottom: 13%;
    left: 50%;
    transform: translateX(-50%);
    color : rgb(115, 112, 112);
}

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
            width: 100vw;
            aspect-ratio: 7 / 4;
            color: #808182;
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

@media (max-width: 1023px) {
  p {
  font-size: 10px;
  
  }

}      
</style>