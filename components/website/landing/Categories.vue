<template>
  <div class="categories">
    <v-row>
      <v-col cols="12" md="3">
        <div class="category-box rounded-lg px-4 py-3 ">
          <v-row class="align-center">
            <v-col cols="4">
              <v-img
                src="~/assets/images/icons/dress.svg"
                class="mx-auto"
                width="50px"
              >
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
            <v-col cols="8">
              <v-list-item-title class="text-primary font-weight-black"
                >Dresses</v-list-item-title
              >
              <NuxtLink class="text-body-1" to="/">View All</NuxtLink>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="category-box rounded-lg px-4 py-3">
          <v-row class="align-center">
            <v-col cols="4">
              <v-img
                src="~/assets/images/icons/coat.svg"
                class="mx-auto"
                width="50px"
              >
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
            <v-col cols="8">
              <v-list-item-title class="text-primary font-weight-black"
                >Jackets</v-list-item-title
              >
              <NuxtLink class="text-body-1" to="/">View All</NuxtLink>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="category-box rounded-lg px-4 py-3">
          <v-row class="align-center">
            <v-col cols="4">
              <v-img
                src="~/assets/images/icons/shoes.svg"
                class="mx-auto"
                width="50px"
              >
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
            <v-col cols="8">
              <v-list-item-title class="text-primary font-weight-black"
                >Sports wear</v-list-item-title
              >
              <NuxtLink class="text-body-1" to="/">View All</NuxtLink>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="category-box rounded-lg px-4 py-3">
          <v-row class="align-center">
            <v-col cols="4">
              <v-img
                src="~/assets/images/icons/watch.svg"
                class="mx-auto"
                width="50px"
              >
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
            <v-col cols="8">
              <v-list-item-title class="text-primary font-weight-black"
                >Smart Watches</v-list-item-title
              >
              <NuxtLink class="text-body-1" to="/">View All</NuxtLink>
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
.categories {
  margin-top: 100px;

  .category-box {
    border: 1px solid rgba(0, 0, 0, 0.077);
    box-shadow: 1px 1px 12px 1px rgba(0, 0, 0, 0.05);
    margin-bottom: 10px;

    a {
      text-decoration: none;
    }
  }
}
</style>
