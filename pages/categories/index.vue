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
                <v-col cols="12" md="6" lg="4" v-for="i in 9" :key="i" class="d-flex">
                    <v-hover v-slot:default="{ isHovering }">
                        <v-card class="product-card" :elevation="isHovering ? 6 : 0">
                            <v-img src="~/assets/images/background/gaming.jpg"
                                class="white--text rounded-lg elevation-3">
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular color="primary" indeterminate></v-progress-circular>
                                    </div>
                                </template>
                                <v-overlay :value="isHovering" class="overlay">
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-btn class="mx-2" color="primary" outlined>Add to Cart</v-btn>
                                        <v-btn class="mx-2" color="primary" outlined>View Details</v-btn>
                                    </v-row>
                                </v-overlay>
                            </v-img>
                            <v-card-title class="title text-center">Category Name</v-card-title>
                        </v-card>
                    </v-hover>
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
    useGsap.utils.toArray('.product-card').forEach((box) => {
        useGsap.from(box, {
            x: -100,
            opacity: 0,
            duration:1,
            ease: 'ease-in-out',
            scrollTrigger: {
                trigger: box,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play reverse restart reverse'
            }
        });
    });
})
</script>

<style lang="scss" scoped>
.categories {
    .product-card {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

        &:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        .v-img {
            position: relative;

            .overlay {
                background: rgba(0, 0, 0, 0.5);
                opacity: 0;
                transition: opacity 0.3s ease-in-out;

                &.v-overlay--active {
                    opacity: 1;
                }
            }
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
