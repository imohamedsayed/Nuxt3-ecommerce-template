<template>
  <div class="category">
    <v-sheet height="420" class="category-cover " elevation="0" >
      <v-img src="~/assets/images/background/gaming.jpg" max-height="400" cover rounded="lg" >
         <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="primary"
                      indeterminate
                    ></v-progress-circular>
                  </div>
          </template>

      </v-img>
      <div class="overlay rounded-lg">Gaming</div>
      <div class="custom-shape-divider-bottom-1722211211">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
</div>
    </v-sheet>

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
    <v-container>


      <div class="products-list mt-10">
         <v-row class="align-center">
            <v-col cols="12" md="2">
                <v-select
                    label="Sort"
                    variant="plain"
                    :items="sortOptions"
                    class="bg-background font-weight-bold"
                    v-model="sort"
                    @update:model-value="fetchData"
                ></v-select>
            </v-col>
            <v-col cols="12" md="4">
                <v-chip-group v-model="sort2" selected-class="text-primary" color="primary" mandatory @update:model-value="fetchData">
                    <v-chip value="asc"
                        ><IconsAscending />
                        <v-tooltip activator="parent">Ascending</v-tooltip>
                    </v-chip>
                    <v-chip value="desc"
                        ><IconsDescending /> <v-tooltip activator="parent">Descending</v-tooltip></v-chip
                    >
                </v-chip-group>
            </v-col>
        </v-row>
        <hr class="mb-10" />
            <div class="products">
            <v-row v-if="!loading" class="">
                <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id" class="product-col">
                    <Product :product="product" />
                </v-col>
            </v-row>

            <div class="loading py-10 text-center" v-else>
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
        </div>
      </div>

    </v-container>

  </div>
</template>

<script setup>

const props = defineProps({
  products: {
    type: Array,
    required: true
  },
  category: {
    type: Number,
    required: true
  },
  pagination: {
    type: Object,
    required: true
  }
});


const items = [
  {
    title: "Categories",
    disabled: false,
    href: '/cart'
  }, {
    title: 'Category',
    disabled: true,

  }
];
const sortOptions = [
  { title: 'Sort by latest', value: 'latcreatedAt' },
  { title: 'Sort by price', value: 'price' }
];
const sort = ref('latcreatedAt');
const sort2 = ref('asc');
const page = ref(1);
const products = ref(props.products);
const loading = ref(true);


const fetchData = async () => {
  loading.value = true;
  try {
    const res = await axios.get(`api/products/${props.category}/categories?${sort.value}=${sort2.value}&page=` + page.value);
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
.category {
  .category-cover {
    position: relative;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 20px);
      display: grid;
      place-content: center;
      color: white;
      background: rgba(0, 0, 0, 0.2);
      font-size: 2.2rem;
      letter-spacing: 4px;
    }
  }
}

.custom-shape-divider-bottom-1722211211 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1722211211 svg {
  position: relative;
  display: block;
  width: calc(135% + 1.3px);
  height: 106px;
}

.custom-shape-divider-bottom-1722211211 .shape-fill {
  fill: #FFFFFF;
}
</style>