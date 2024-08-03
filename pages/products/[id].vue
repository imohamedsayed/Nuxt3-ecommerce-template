<template>
  <div class="product">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-row>
            <!-- Thumbnails -->
            <v-col cols="12" md="3" class="order-1 order-md-0">
              <v-row>
                <v-col
                  cols="3"
                  md="12"
                  v-for="(img, index) in images"
                  :key="index"
                >
                  <div class="another-img mb-2">
                    <v-img
                      src="~/assets/images/products/1.jpg"
                      @click="setSelectedImage(index)"
                      class="thumbnail"
                      :class="{
                        'selected-thumbnail': selectedImageIndex === index,
                      }"
                      height="80"
                      width="80"
                    >
                      <template v-slot:placeholder>
                        <div
                          class="d-flex align-center justify-center fill-height"
                        >
                          <v-progress-circular
                            color="grey-lighten-4"
                            indeterminate
                          ></v-progress-circular>
                        </div>
                      </template>
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <!-- Main Image -->
            <v-col cols="12" md="9">
              <v-img src="~/assets/images/products/2.jpg" height="400px">
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                    ></v-progress-circular>
                  </div>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <h2>T-Shirt Name</h2>
           <v-rating
              :model-value="4"
              color="orange-darken-2"
              density="compact"
              size="large"
              readonly
              class="mt-5"
            ></v-rating>

            <p class="mt-4"><span class="text-primary font-weight-bold text-h4"> 120$</span> <del class="text-grey-darken-1 mx-2">200$</del> <v-chip color="success">80$ Discount</v-chip></p>


            <table class="w-100 w-md-75 w-lg-50 mt-10 font-weight-black">
              <tbody>
                <tr>
                  <td >Color:</td>
                  <td>Black</td>
                </tr>
                 <tr >
                  <td>Quantity:</td>
                  <td>320</td>
                </tr>
              </tbody>
            </table>

            <div class="mt-10 d-flex gap-2">
              <v-btn color="primary" size="large" class=" w-50">Add to cart</v-btn>
              <v-btn color="primary" size="large" variant="outlined" class="w-50">Add to wishlist</v-btn>
            </div>
          </v-col>
      </v-row>

      <div class="description mt-10">
        <h2>Description</h2>
        <div class="mt-4 text-muted">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga possimus consequuntur deserunt unde officia dignissimos aspernatur, provident ipsa autem magni perferendis ab tempora assumenda id eos illo libero, ducimus voluptatem saepe distinctio quis placeat vero laborum. Similique iusto, alias cupiditate eius veritatis perferendis maiores quaerat, aperiam tempore nesciunt, iure laudantium animi assumenda fugit earum dicta eaque. Aspernatur voluptatem esse temporibus, eius maxime, beatae maiores fuga ipsum ex eum minima commodi! Suscipit laboriosam vitae sunt a tempore exercitationem laudantium esse, nemo sit assumenda odit eaque incidunt obcaecati eveniet repellat ab. Sed minus molestias doloremque saepe similique maxime, consectetur dignissimos rerum dolores?</p>
        </div>
      </div>

      <div class="mt-16">
         <div class="d-flex align-center justify-space-between ">
          <h2>Similar products</h2>
          <NuxtLink to="/" class="text-primary">view all</NuxtLink>
        </div>
        <v-row class="mt-10">
      <v-col col="12" md="6" lg="3" v-for="i in 4" :key="i">
        <v-card class="product-card">
          <v-img src="~/assets/images/products/sports-1.jpg">
            <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
            </template>
          </v-img>
          <p class="text-primary mx-4 font-weight-bold">Shoes</p>
          <v-card-title class="text-body-2 font-weight-bold">Mens Winter Leathers Jackets</v-card-title>
          <v-card-text>
            <div class="">
            <v-rating
              :model-value="4"
              color="orange-darken-2"
              density="compact"
              size="large"
              readonly
              class="mt-5"
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
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
    enterClass: 'animate__animated animate__fadeInLeft',
    leaveClass: 'animate__animated animate__fadeOutRight'
})

const images = [
  "~/assets/images/products/1.jpg",
  "~/assets/images/products/2.jpg",
  "~/assets/images/products/3.jpg",
  "~/assets/images/products/4.jpg",
];

const selectedImageIndex = ref(0);

const setSelectedImage = (index) => {
  selectedImageIndex.value = index;
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 100px;

  a {
    text-transform: capitalize;
    text-decoration: none
  }

}

.thumbnail {
  cursor: pointer;
  border: 2px solid transparent;
}

.selected-thumbnail {
  border: 2px solid #5d87ff;
}


.description {
  h2 {
    padding-bottom: 10px;
    border-bottom: 1px solid #555
  }
}
</style>
