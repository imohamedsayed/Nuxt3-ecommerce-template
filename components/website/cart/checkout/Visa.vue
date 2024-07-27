<template>
  <div>
    <v-container fluid>
      <v-stepper
        v-model="step"
        style="background: transparent"
        elevation="0"  
        alt-labels 
      >
        <v-stepper-header>
      <v-stepper-item
        title="Location"
        :value="1"
        color="primary"
      ></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item
        title="Checkout"
        :value="2"
        color="primary"

      ></v-stepper-item>

    </v-stepper-header>

 
      </v-stepper>

      <v-window v-model="step">
        <v-window-item :value="1">
            <v-card flat style="background: transparent">
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
              <v-col cols="12">
                <v-btn block color="indigo-accent-3"> confirm</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>
        <v-window-item :value="2">
<v-card title="Step Two" flat style="background: transparent"
            >...</v-card
          >

        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>

<script setup>
const step = ref(1);
</script>

<style lang="scss" scoped></style>
