<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            color="primary"
            variant="outlined"
            label="State"
            prepend-inner-icon="mdi-town-hall"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            color="primary"
            variant="outlined"
            label="City"
            prepend-inner-icon="mdi-city"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            color="primary"
            variant="outlined"
            label="Street"
            prepend-inner-icon="mdi-map"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            color="primary"
            variant="outlined"
            label="Building or house number"
            prepend-inner-icon="mdi-home-city-outline"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            color="primary"
            variant="outlined"
            label="Apartment"
            prepend-inner-icon="mdi-home-outline"
          ></v-select>
        </v-col>
      </v-row>
      <v-btn block color="indigo-accent-2" size="large" rounded="lg"
        >Checkout</v-btn
      >
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
