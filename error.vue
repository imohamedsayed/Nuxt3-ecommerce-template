<script setup >
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });

</script>
<template>
  <div class="d-flex justify-center align-center text-center h-100vh">
    <Title>Error {{ error.statusCode }}</Title>
      <div>
          <img src="/images/background/errorimg.svg" width="500" alt="404" />
          <h1 class="text-h1 pt-3">Opps!!!</h1>
          <h4 class="text-h4 my-8">{{ error.message }}.</h4>
          <v-btn flat color="primary" class="mb-4" @click="handleClearError">Go Back to Home</v-btn>
      </div>    
  </div>
</template>
