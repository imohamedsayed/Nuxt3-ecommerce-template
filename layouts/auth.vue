<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <v-locale-provider>
    <v-app>
      <v-main>
        <v-row>
          <v-col

            cols="12"
            md="6"
            lg="8"
            class="login-column img  align-center d-none d-md-flex"
          >
            <v-img src="~/assets/images/background/login-bg.svg">
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
          <v-col cols="12" md="6" lg="4" class="login-column">
            <div class="form pt-16">
              <v-container>
                <RouterView />
              </v-container>
            </div>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>

<style lang="scss" scoped>
.login-column {
  height: 100vh;
  overflow-y:  auto;
  &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: #5d88ff82;
        border-radius: 20px;
        transition: all 0.3s ease;

        &:hover {
          background: #5d87ff;
        }}
  &.img {
    background: #eef3fd;
  }
}


</style>
