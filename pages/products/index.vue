<template>
  <div class="products">
      <div class="search-input fill-hight d-flex flex-column justify-center">
        <p class="text-center">Search for a product </p>
        <v-container class="">
            <div class="d-flex align-center gap-2">
                <v-text-field variant="outlined" color="primary" prepend-inner-icon="mdi-magnify" label="search"></v-text-field>
                <v-btn class="mb-6" icon="mdi-magnify" elevation="0" color="primary"></v-btn>
            </div>            
        </v-container>
        <div class="custom-shape-divider-bottom-1722214516">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
        </svg>
      </div>
      </div>

      <div class="products">
        <v-container fluid>
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
            <v-col cols="2" class="d-md-none">
            <v-btn elevation="0" @click="showFilters = true" icon><Menu2Icon/></v-btn>
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
              <hr>
              <v-range-slider class="mt-4" color="primary" label="price range" min="200" max="600"></v-range-slider>        
              <hr>
              <p class="text-muted">color</p>
              <v-chip-group color="primary">
                <v-chip variant="text" color="primary"><v-avatar color="primary"></v-avatar></v-chip>
                <v-chip variant="text" color="yellow"><v-avatar color="yellow"></v-avatar></v-chip>
                <v-chip variant="text" color="green"><v-avatar color="green"></v-avatar></v-chip>
                <v-chip variant="text" color="pink"><v-avatar color="pink"></v-avatar></v-chip>
                <v-chip variant="text" color="purple"><v-avatar color="purple"></v-avatar></v-chip>
                <v-chip variant="text" color="white"><v-avatar color="white"></v-avatar></v-chip>
              </v-chip-group>
            </v-col>
            <v-col cols="12" md="9">
                <v-row v-if="!loading" class="">
                  <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id" class="product-col">
                      <Product :product="product" />
                  </v-col>
                </v-row>
                <div class="loading  text-center" v-else>
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

      </div>
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
              <hr>
              <v-range-slider class="mt-4" color="primary" label="price range" min="200" max="600"></v-range-slider>        
              <hr>
              <p class="text-muted">color</p>
              <v-chip-group color="primary">
                <v-chip variant="text" color="primary"><v-avatar color="primary"></v-avatar></v-chip>
                <v-chip variant="text" color="yellow"><v-avatar color="yellow"></v-avatar></v-chip>
                <v-chip variant="text" color="green"><v-avatar color="green"></v-avatar></v-chip>
                <v-chip variant="text" color="pink"><v-avatar color="pink"></v-avatar></v-chip>
                <v-chip variant="text" color="purple"><v-avatar color="purple"></v-avatar></v-chip>
                <v-chip variant="text" color="white"><v-avatar color="white"></v-avatar></v-chip>
              </v-chip-group>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="showFilters = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { Menu2Icon } from 'vue-tabler-icons';

const showFilters = ref(false);

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
    const res = await axios.get(`api/products/?${sort.value}=${sort2.value}&page=` + page.value);
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
.products {
  .search-input {
    position: relative;
    height: 60vh;

    @media(max-width:600px) {
      height: 50vh;
    }

    background: linear-gradient(to bottom right, #ECEFF1, #fff);

  }
}

.custom-shape-divider-bottom-1722214516 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1722214516 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 166px;
}

.custom-shape-divider-bottom-1722214516 .shape-fill {
  fill: #FFFFFF;
}
</style>