<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
    <v-locale-provider >
        <v-app>
            <DashboardLayoutFullMain/>
            <v-main>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                        <RouterView />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
