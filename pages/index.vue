<template>
  <div >
    <WebsiteLandingIntro/>
    <v-container>
      <WebsiteLandingCategories/>
      <WebsiteLandingClassifications/>
      <WebsiteLandingCategoryPreview />
      <WebsiteLandingCategoryPreview />
      <WebsiteLandingCategoryPreview />
    </v-container>
    <WebsiteLandingExtra/>
  </div>
</template>

<script setup>
definePageMeta({
    enterClass: 'animate__animated animate__fadeInRight',
    leaveClass: 'animate__animated animate__fadeOutLeft'
})


</script>

<style lang="scss" scoped></style>
