<template>
    <div class="wishlist">
        <v-breadcrumbs :items="bItems">
            <template v-slot:prepend>
                <v-btn icon elevation="0" class="bg-background" to="/">
                    <v-icon class="mx-1" size="small" icon="mdi-home" color="pink-accent-3"></v-icon>
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
        <v-container>
            <SharedUiParentCard>
                <v-card-title class="d-flex align-center pe-2">
                    <v-spacer></v-spacer>

                    <v-text-field v-model="search" density="compact" label="Search" prepend-inner-icon="mdi-magnify"
                        variant="solo-filled" flat hide-details single-line></v-text-field>
                </v-card-title>

                <v-divider></v-divider>
                <v-data-table v-model:search="search" :items="items">
                    <template v-slot:header.stock>
                        <div class="text-end">Stock</div>
                    </template>
                    <template v-slot:header.action>
                        <div class="text-end">Actions</div>
                    </template>

                    <template v-slot:item.image="{ item }">
                        <v-card class="my-2 " elevation="2" rounded>
                            <v-img :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                                height="64" cover></v-img>
                        </v-card>
                    </template>

                    <template v-slot:item.rating="{ item }">
                        <v-rating :model-value="item.rating" color="orange-darken-2" density="compact" size="small"
                            readonly></v-rating>
                    </template>

                    <template v-slot:item.stock="{ item }">
                        <div class="text-end">
                            <v-chip :color="item.stock ? 'green' : 'red'"
                                :text="item.stock ? 'In stock' : 'Out of stock'" class="text-uppercase" size="small"
                                label></v-chip>
                        </div>
                    </template>
                    <template v-slot:item.action="{ item }">
                        <div class="text-end">
                            <v-btn icon="mdi-cart-plus" elevation="0"></v-btn>
                        </div>
                    </template>
                </v-data-table>
            </SharedUiParentCard>
        </v-container>
    </div>
</template>

<script setup>

definePageMeta({
    enterClass: 'animate__animated animate__fadeInRight',
    leaveClass: 'animate__animated animate__fadeOutLeft'
})

const tab = ref(1);
const bItems = [
    {
        title: "Wishlist",
        disabled: true,
        href: "/wishlist",
    },
];
const search = ref("");
const items = ref([
    {
        name: "Nebula GTX 3080",
        image: "1.png",
        price: 699.99,
        rating: 5,
        stock: true,
        action: "",
    },
    {
        name: "Galaxy RTX 3080",
        image: "2.png",
        price: 799.99,
        rating: 4,
        stock: false,
        action: "",
    },
    {
        name: "Orion RX 6800 XT",
        image: "3.png",
        price: 649.99,
        rating: 3,
        stock: true,
        action: "",
    },
    {
        name: "Vortex RTX 3090",
        image: "4.png",
        price: 1499.99,
        rating: 4,
        stock: true,
        action: "",
    },
    {
        name: "Cosmos GTX 1660 Super",
        image: "5.png",
        price: 299.99,
        rating: 4,
        stock: false,
        action: "",
    },
]);
</script>

<style lang="scss" scoped>
.wishlist {
    thead {
        background: #5d87ff;
    }
}
</style>
