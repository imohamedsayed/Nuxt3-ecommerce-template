<template>
  <div>
    <v-footer class="pa-4 pt-8  mt-10 " style="background:#eff3fd">
      <v-row class="justify-md-space-around">
        <v-col cols="12" md="4" lg="3">
          <div>
            <h3 class="text-primary mb-5">MSO Store</h3>
            <p class="text-muted">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>

            <p class="mt-7 text-muted">Developed By <span class="text-primary font-weight-bold">Mohamed Sayed</span></p>
            <p>&copy; 2024 - MSO</p>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <p class="text-primary font-weight-bold mb-5">Links</p>
          <div>
          <v-row>
            <v-col cols="6">
                <v-list-item>Home</v-list-item>
                <v-list-item>Men's</v-list-item>
                <v-list-item>Women's</v-list-item>
                <v-list-item>categories</v-list-item>
              </v-col>
              <v-col cols="6">
                  <v-list-item>Login</v-list-item>
                  <v-list-item>Signup</v-list-item>
                  <v-list-item>About us</v-list-item>
                  <v-list-item>Blogs</v-list-item>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3">
          <p class="text-primary mb-5 font-weight-bold">Contact Us</p>
          <p class="text-muted">
            Get in touch with us via mail phone.We are waiting for your call or message
          </p>
          <v-btn class="mt-7" block rounded="lg" color="deep-purple-lighten-2">info@mso.com</v-btn>
          <div class="socials mt-5">
            <v-btn icon="mdi-facebook" color="blue-darken-2" class="mx-1"></v-btn>
            <v-btn icon="mdi-twitter" color="blue-accent-2" class="mx-1"></v-btn>
            <v-btn icon="mdi-whatsapp" color="teal-accent-3" class="mx-1"></v-btn>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>