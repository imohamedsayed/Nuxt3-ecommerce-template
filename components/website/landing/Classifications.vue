<template>
  <div class="classifications">
    <v-row>
      <v-col cols="12" md="4">
        <p class="font-weight-bold title">New Arrivals</p>
        <v-divider class="mb-10"></v-divider>

        <div class="product-box elevation-1 rounded-lg mb-5" v-for="i in 4" :key=i>
          <v-row class="align-center">
            <v-col cols="3">
              <div class="">
                <v-img src="~/assets/images/products/2.jpg" class="mx-auto" width="60px">
                   <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
            </template>
                </v-img>
              </div>
            </v-col>
            <v-col cols="9">
              <div class="details">
                <v-list-item-title class="font-weight-bold ellipse">Relaxed Shirt</v-list-item-title>
                <span class="d-block text-muted">Clothes</span>
                <div><p ><span class="text-primary font-800">48$</span> <del>$50.00</del></p></div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <p class="font-weight-bold title">Trending</p>

        <v-divider class="mb-10"></v-divider>

        <div class="product-box elevation-1 rounded-lg mb-5" v-for="i in 4" :key=i>
          <v-row class="align-center">
            <v-col cols="3">
              <div class="">
                <v-img src="~/assets/images/products/4.jpg" class="mx-auto" width="60px">
                   <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
            </template>
                </v-img>
              </div>
            </v-col>
            <v-col cols="9">
              
              <div class="details">
                <v-list-item-title class="font-weight-bold ellipse">Relaxed Shirt</v-list-item-title>
                <span class="d-block text-muted">Clothes</span>
                <div><p ><span class="text-primary font-800">48$</span> <del>$50.00</del></p></div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <p class="font-weight-bold title">Top Rated</p>
        <v-divider class="mb-10"></v-divider>
        <div class="product-box elevation-1 rounded-lg mb-5" v-for="i in 4" :key=i>
          <v-row class="align-center">
            <v-col cols="3">
              <div class="">
                <v-img src="~/assets/images/products/3.jpg" class="mx-auto" width="60px">
                   <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
            </template>
                </v-img>
              </div>
            </v-col>
            <v-col cols="9">
              <div class="details">
                <v-list-item-title class="font-weight-bold ellipse line-1" >Relaxed Shirt </v-list-item-title>
                <span class="d-block text-muted">Clothes</span>
                <div><p ><span class="text-primary font-800">48$</span> <del>$50.00</del></p></div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.classifications {
  margin-top: 100px;

  .title {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.252);
  }
}
</style>