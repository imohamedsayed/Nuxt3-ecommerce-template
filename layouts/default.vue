<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
    <v-locale-provider >
        <v-app>   
            <WebsiteLayoutFullMain/>
            <v-main>
                <v-container  fluid>
                    <RouterView />
                    <WebsiteLayoutFullFooter/>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
