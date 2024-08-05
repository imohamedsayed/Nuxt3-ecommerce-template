<template>
    <div class="categories">
        <v-container>
            <v-breadcrumbs :items="items">
                <template v-slot:prepend>
                    <v-btn icon elevation="0" class="bg-background" to="/">
                        <v-icon class="mx-1" size="small" icon="mdi-home" color="primary"></v-icon>
                    </v-btn>
                    <v-icon icon="mdi-chevron-right" v-if="$i18n?.locale === 'EN'"></v-icon>
                    <v-icon icon="mdi-chevron-right" v-else></v-icon>
                </template>
                <template v-slot:divider v-if="$i18n?.locale === 'EN'">
                    <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
                <template v-slot:divider v-else>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
            </v-breadcrumbs>

            <h2 class="mt-10 text-textPrimary">Shop by category</h2>
            <v-row class="mt-4">
                <v-col cols="12" md="6" lg="4" v-for="i in 9" :key="i" class="category-column">
                        <v-card class="category-card" elevation="0" >
                            <v-img src="~/assets/images/background/gaming.jpg"
                                class="white--text rounded-lg elevation-3 w-100" min-height="250" cover >
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular color="primary" indeterminate></v-progress-circular>
                                    </div>
                                </template>
                            </v-img>
                            <v-card-title class="title text-center">Category Name</v-card-title>
                        </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>

definePageMeta({
    enterClass: 'animate__animated animate__fadeInLeft',
    leaveClass: 'animate__animated animate__fadeOutRight'
})

const items = [
    {
        title: "Categories",
        disabled: false,
        href: '/cart'
    }
];

onMounted(() => {
    useGsap.utils.toArray('.category-column').forEach((box) => {
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

<style lang="scss" scoped>
.categories {
    .category-card {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

        &:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        .v-img {
            position: relative;
        }

        .title {
            font-size: 1.25rem;
            font-weight: bold;
        }
        .description {
            font-size: 0.875rem;
            color: #6b6b6b;
        }
        .v-card-actions {
            display: flex;
            align-items: center;
        }
    }
}
</style>
