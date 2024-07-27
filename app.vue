<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useError } from 'nuxt/app'

onErrorCaptured((error) => {
  throw createError({
    statusCode: error.statusCode || 500,
    message: error.message || 'An unexpected error occurred'
  })
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;500;600;700;800;900;1000&display=swap');

html:lang(AR)* {
  font-family: 'Cairo';
}

.text-center {
  text-align: center !important;
}

body::-webkit-scrollbar {
  width: 15px;
}

body::-webkit-scrollbar-track {
  background: #fff;
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(#5D87FF, #367cb5);
  opacity: 0.2;
  border: 3px solid #fff;
  border-radius: 10px;
  transition: all 0.3s ease;
}

:root {
  --skin-color: #2a388a;
}
</style>