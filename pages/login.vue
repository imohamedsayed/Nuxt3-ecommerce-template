<template>
  <div class=".login mt-5 px-5">
    <h2 class="font-weight-bold">Welcome to MSO</h2>
    <p class="text-muted ">Your trusted online store</p>

    <hr class="my-10 " >

    <p class="font-weight-bold">Email</p>
    <v-text-field variant="outlined" rounded="lg" class="mt-3" color="primary"></v-text-field>
    <p class="font-weight-bold">Password</p>
    <v-text-field variant="outlined" rounded="lg" class="mt-3" color="primary"></v-text-field>

    <NuxtLink to="/forget-password" class="text-decoration-none text-indigo-accent-2 text-end d-block">Forget Password?</NuxtLink>

    <v-btn block rounded="lg" class="mt-7" color="primary" size="large">Sign in</v-btn>


    <p class="font-weight-bold mt-10 text-h5 " style="word-spacing:3px">New to mso? <NuxtLink to="/register" class="text-decoration-none text-indigo-accent-2">Signup</NuxtLink></p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
</script>

<style lang="scss" scoped></style>
