<template>
  <div class="offers">
    <div class="title bg-lightsecondary pa-4 rounded-lg">
      <v-card-title class="font-weight-bold">Offers</v-card-title>
      <v-breadcrumbs :items="items">
        <template v-slot:prepend>
          <v-btn icon elevation="0" variant="text" to="/">
            <v-icon
              class="mx-1"
              size="small"
              icon="mdi-home"
              color="primary"
            ></v-icon>
          </v-btn>
          <v-icon
            icon="mdi-chevron-right"
            v-if="$i18n?.locale === 'EN'"
          ></v-icon>
          <v-icon icon="mdi-chevron-right" v-else></v-icon>
        </template>
        <template v-slot:divider v-if="$i18n?.locale === 'EN'">
          <v-icon icon="mdi-chevron-left"></v-icon>
        </template>
        <template v-slot:divider v-else>
          <v-icon icon="mdi-chevron-left"></v-icon>
        </template>
      </v-breadcrumbs>
      <img src="~/assets/images/background/ChatBc.png" alt="" />
    </div>

    <SharedUiParentCard  class="products mt-16">
      <v-container>
        <v-row class="align-center">
          <v-col cols="6" md="2">
            <v-select
              label="Sort"
              variant="plain"
              :items="sortOptions"
              class="bg-background font-weight-bold"
              v-model="sort"
              @update:model-value="fetchData"
            ></v-select>
          </v-col>
          <v-col cols="4" md="4">
            <v-chip-group
              v-model="sort2"
              selected-class="text-primary"
              color="primary"
              mandatory
              @update:model-value="fetchData"
            >
              <v-chip value="asc"
                ><IconsAscending />
                <v-tooltip activator="parent">Ascending</v-tooltip>
              </v-chip>
              <v-chip value="desc"
                ><IconsDescending />
                <v-tooltip activator="parent">Descending</v-tooltip></v-chip
              >
            </v-chip-group>
          </v-col>
          <v-col cols="2" class="d-md-none">
            <v-btn elevation="0" @click="showFilters = true" icon
              ><Menu2Icon
            /></v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" class="d-none d-md-block">
            <v-checkbox label="Clothes" color="primary"></v-checkbox>
            <v-checkbox label="Electronics" color="primary"></v-checkbox>
            <v-checkbox label="Accessories" color="primary"></v-checkbox>
            <v-checkbox label="Computers" color="primary"></v-checkbox>
            <v-checkbox label="Food" color="primary"></v-checkbox>
            <v-checkbox label="Animals" color="primary"></v-checkbox>
            <hr />
            <v-range-slider
              class="mt-4"
              color="primary"
              label="price range"
              min="200"
              max="600"
            ></v-range-slider>
            <hr />
            <p class="text-muted">color</p>
            <v-chip-group color="primary">
              <v-chip variant="text" color="primary"
                ><v-avatar color="primary"></v-avatar
              ></v-chip>
              <v-chip variant="text" color="yellow"
                ><v-avatar color="yellow"></v-avatar
              ></v-chip>
              <v-chip variant="text" color="green"
                ><v-avatar color="green"></v-avatar
              ></v-chip>
              <v-chip variant="text" color="pink"
                ><v-avatar color="pink"></v-avatar
              ></v-chip>
              <v-chip variant="text" color="purple"
                ><v-avatar color="purple"></v-avatar
              ></v-chip>
              <v-chip variant="text" color="white"
                ><v-avatar color="white"></v-avatar
              ></v-chip>
            </v-chip-group>
            <hr />
            <p class="text-muted">Rating</p>
            <v-rating v-model="rating" hover active-color="orange" half-increments></v-rating>
          </v-col>
          <v-col cols="12" md="9">
            <v-row v-if="!loading" class="">
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="product in products"
                :key="product.id"
                class="product-col"
              >
                <Product :product="product" />
              </v-col>
            </v-row>
            <div class="loading text-center" v-else>
              <v-row class="">
                <v-col cols="12" md="6" lg="3" v-for="i in 8" :key="i">
                  <v-skeleton-loader type="card"></v-skeleton-loader>
                </v-col>
              </v-row>
            </div>
            <v-pagination
              class="mt-15"
              dir="ltr"
              v-model="page"
              :length="pagination?.last_page || 10"
              color="primary"
              @update:model-value="fetchData"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-container>
    </SharedUiParentCard>
    <v-dialog v-model="showFilters" persistent max-width="400px">
      <v-card>
        <v-card-title>Filters</v-card-title>
        <v-card-text>
          <v-checkbox label="Clothes" color="primary"></v-checkbox>
          <v-checkbox label="Electronics" color="primary"></v-checkbox>
          <v-checkbox label="Accessories" color="primary"></v-checkbox>
          <v-checkbox label="Computers" color="primary"></v-checkbox>
          <v-checkbox label="Food" color="primary"></v-checkbox>
          <v-checkbox label="Animals" color="primary"></v-checkbox>
          <hr />
          <v-range-slider
            class="mt-4"
            color="primary"
            label="price range"
            min="200"
            max="600"
          ></v-range-slider>
          <hr />
          <p class="text-muted">color</p>
          <v-chip-group color="primary">
            <v-chip variant="text" color="primary"
              ><v-avatar color="primary"></v-avatar
            ></v-chip>
            <v-chip variant="text" color="yellow"
              ><v-avatar color="yellow"></v-avatar
            ></v-chip>
            <v-chip variant="text" color="green"
              ><v-avatar color="green"></v-avatar
            ></v-chip>
            <v-chip variant="text" color="pink"
              ><v-avatar color="pink"></v-avatar
            ></v-chip>
            <v-chip variant="text" color="purple"
              ><v-avatar color="purple"></v-avatar
            ></v-chip>
            <v-chip variant="text" color="white"
              ><v-avatar color="white"></v-avatar
            ></v-chip>
          </v-chip-group>
           <p class="text-muted">Rating</p>
            <v-rating v-model="rating" hover active-color="orange" half-increments></v-rating>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="showFilters = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const items = [
  {
    title: "Offers",
    disabled: true,
    href: "/offers",
  },
];
import { Menu2Icon } from "vue-tabler-icons";

const showFilters = ref(false);

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  pagination: {
    type: Object,
    required: true,
  },
});
const rating = ref('')
const sortOptions = [
  { title: "Sort by latest", value: "latcreatedAt" },
  { title: "Sort by price", value: "price" },
];
const sort = ref("latcreatedAt");
const sort2 = ref("asc");
const page = ref(1);
const products = ref(props.products);
const loading = ref(true);

const fetchData = async () => {
  loading.value = true;
  try {
    const res = await axios.get(
      `api/products/?${sort.value}=${sort2.value}&page=` + page.value
    );
    if (res.status === 200) {
      products.value = res.data.products;
    } else {
      throw new Error(res.response.data.message);
    }
  } catch (error) {
    console.error(error.message);
  }
  loading.value = false;
};
</script>

<style lang="scss" scoped>
.offers {
  .title {
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      right: 1%;
      bottom: -30%;
    }
  }
}
</style>
