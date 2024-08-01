<template>
  <div class=".login mt-5 px-5">
    <h2 class="font-weight-bold">Welcome to MSO</h2>
    <p class="text-muted ">Your trusted online store</p>

    <hr class="my-10 " >

    <p class="mb-10 text-muted text-body-1">Forget your password? Don't worry we will send you and email to reset your password</p>

    <p class="font-weight-bold">Email</p>
    <v-text-field variant="outlined" rounded="lg" class="mt-3" color="primary"></v-text-field>
    
    <v-btn block rounded="lg" class="mt-7" color="primary" size="large">Send Verification Email</v-btn>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
</script>

<style lang="scss" scoped></style>