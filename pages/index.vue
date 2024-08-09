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
const { $api } = useNuxtApp();
import {useI18n} from "vue-i18n"
const {locale} = useI18n()
onMounted(async ()=>{
    try{
        const res = await $api.get("/api/categories/parents")
        if(res.status == 200){
            // console.log(res)
        }else{
            throw new Error(res.response.data.message)
        }
    }catch(error){
        console.log("Error while fetching data: ",error.message)
    }
})

definePageMeta({
    enterClass: 'animate__animated animate__fadeInRight',
    leaveClass: 'animate__animated animate__fadeOutLeft'
})
onMounted(() => {
    useGsap.utils.toArray('.product-card').forEach((box) => {
        useGsap.from(box, {
            x: -200,
            opacity: 0,
            duration:1,
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
