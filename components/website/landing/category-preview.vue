<template>
  <div class="category-preview">
    <div class="header">
      <div class="d-flex align-center justify-space-between ">
        <h2>Accessories</h2>
        <NuxtLink to="/" class="text-primary">view all</NuxtLink>
      </div>
      <v-chip-group >
        <v-chip color="primary" value="popular">Popular</v-chip>
        <v-chip color="primary" value="top">Top</v-chip>
        <v-chip color="primary" value="recent">Recent</v-chip>
      </v-chip-group>
    </div>
    <v-row class="mt-10">
      <v-col col="12" md="6" lg="3" v-for="i in 8" :key="i" class="product-column">
        <v-card class="product-card">
                <img src="~/assets/images/products/sports-1.jpg" class="w-100"  >
                <!-- <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
            </template>
          </v-img> -->
          <p class="text-primary mx-4 font-weight-bold">Shoes</p>
          <v-card-title class="text-body-2 font-weight-bold">Mens Winter Leathers Jackets</v-card-title>
          <v-card-text>
            <div class="text-center">
            <v-rating
              v-model="rating"
              active-color="warning"
              value="4"
              disabled
            ></v-rating>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex align-center">
              <v-btn text color="primary">View Details</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const rating = ref(3.5);


</script>

<style lang="scss" scoped>
.category-preview {
  margin-top: 100px;

  a {
    text-transform: capitalize;
    text-decoration: none
  }

}
</style>
