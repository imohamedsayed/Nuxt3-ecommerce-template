<template>
  <div class=".login  px-5">
 <h2 class="font-weight-bold">Welcome to MSO</h2>
    <p class="text-muted ">Your trusted online store</p>

    <hr class="my-10 " >
    <p class="font-weight-bold">Name</p>
    <v-text-field variant="outlined" rounded="lg" class="mt-3" color="primary"></v-text-field>
    <p class="font-weight-bold">Email</p>
    <v-text-field variant="outlined" rounded="lg" class="mt-3" color="primary"></v-text-field>
    <p class="font-weight-bold">Password</p>
    <v-text-field variant="outlined" rounded="lg" class="mt-3" color="primary"></v-text-field>
    <p class="font-weight-bold">Confirm Password</p>
    <v-text-field variant="outlined" rounded="lg" class="mt-3" color="primary"></v-text-field>
  
    
    <v-btn block rounded="lg" class="mt-7" color="primary" size="large">Sign up</v-btn>


    <p class="font-weight-bold mt-10 text-h5 " style="word-spacing:3px">Already have an account? <NuxtLink to="/login" class="text-decoration-none text-indigo-accent-2">Login</NuxtLink></p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
</script>

<style lang="scss" scoped></style>