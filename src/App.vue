<script setup>
import { RouterLink, RouterView } from 'vue-router'
import login from '@/components/login_register.vue'
import { ref, onMounted } from 'vue'
import { loadData } from '@/views/useAuth.js'


onMounted(async () => {
  await loadData()
})

</script>

<template>
   
      <login />

      <RouterView />
  
</template>

