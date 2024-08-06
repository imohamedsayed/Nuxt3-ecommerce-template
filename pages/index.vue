<template>
  <div >
    <WebsiteLandingIntro/>
    <v-container>
      <WebsiteLandingCategories/>
      <WebsiteLandingClassifications/>
      <WebsiteLandingCategoryPreview/>
      <WebsiteLandingCategoryPreview/>
      <WebsiteLandingCategoryPreview/>
    </v-container>
    <WebsiteLandingExtra/>
  </div>
</template>

<script setup>
definePageMeta({
    enterClass: 'animate__animated animate__fadeInRight',
    leaveClass: 'animate__animated animate__fadeOutLeft'
})
onMounted(() => {
    useGsap.utils.toArray('.product-card').forEach((box) => {
        useGsap.from(box, {
            x: -200,
            opacity: 0,
            duration:0.5,
            scrollTrigger: {
                trigger: box,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        });
    });
})

</script>

<style lang="scss" scoped></style>
