<template>
  <div class="notifications">
    <v-breadcrumbs :items="items">
      <template v-slot:prepend>
        <v-btn icon elevation="0" class="bg-background" to="/">
          <v-icon
            class="mx-1"
            size="small"
            icon="mdi-home"
            color="primary"
          ></v-icon>
        </v-btn>
        <v-icon icon="mdi-chevron-right" v-if="$i18n?.locale === 'EN'"></v-icon>
        <v-icon icon="mdi-chevron-right" v-else></v-icon>
      </template>
      <template v-slot:divider v-if="$i18n?.locale === 'EN'">
        <v-icon icon="mdi-chevron-left"></v-icon>
      </template>
      <template v-slot:divider v-else>
        <v-icon icon="mdi-chevron-left"></v-icon>
      </template>
    </v-breadcrumbs>


    <div class="all-notifications">
      <v-container>

        <v-row>
          <v-col cols="12" md="6" v-for="i in 8" :key="i">
            <v-list-item  title="New update about your order"  color="primary" :class="[i % 3 == 0 ? 'bg-primary' : 'bg-lightsecondary', 'pa-4', 'rounded-lg', 'elevation-1', i%2==0?'left':'right']">
              <v-list-item-subtitle>
                <span>your order now is being shipped</span><br />
                <span class="mt-2 d-inline-block">23 minutes ago</span><br />
              </v-list-item-subtitle>
              <template #prepend>
                <v-avatar size="40" icon="mdi-bell-outline" color="primary" />
              </template>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
    enterClass: 'animate__animated animate__fadeInLeft',
    leaveClass: 'animate__animated animate__fadeOutRight'
})
const {$api } = useNuxtApp()
onMounted(async() => {
    try{
        const res = await $api.get("/api/notifications")
        if(res.status == 200){
            console.log(res.data)
        }else{
            throw new Error(res.response.data.message)
        }
    }catch(error){
        console.log(error.message)
    }

    useGsap.utils.toArray('.left').forEach((box) => {
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
    useGsap.utils.toArray('.right').forEach((box) => {
        useGsap.from(box, {
            x: 200,
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

const items = [
  {
    title: "Notifications",
    disabled: true,
    href: "/notifications",
  },
];
</script>

<style lang="scss" scoped></style>
