<script setup lang="ts">
import { RouterView } from 'vue-router';
const { locale } = useI18n()
console.log(locale.value)

</script>

<template>
    <v-locale-provider >
        <v-app >
            <WebsiteLayoutFullMain/>
            <v-main >
                <v-container  fluid>
                    <router-view v-slot="{Component,route}">
                        <transition
                        :enter-active-class="route.meta.enterClass"
                        :leave-active-class="route.meta.leaveClass"
                        mode="out-in">
                            <component :is="Component"/>
                        </transition>
                    </router-view>
                    <WebsiteLayoutFullFooter/>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
