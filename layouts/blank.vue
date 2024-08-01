<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
    <v-locale-provider >
        <v-app>   
            <v-main>
                    <RouterView />
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
