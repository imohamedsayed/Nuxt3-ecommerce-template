<template>
  <div class="profile">
    <div class="profile-img">
      <v-sheet class="profile-img-section pa-8">
        <div class="background">
          <v-img src="~/assets/images/users/avatar-1.jpg" cover class="img" alt="">
            <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                    ></v-progress-circular>
                  </div>
                </template>
          </v-img>
        </div>
        <div
          class="d-flex position-relative index-3 align-center gap-2 flex-column flex-md-row"
        >
          <v-card width="240" height="240" class="mt-5">
            <v-img src="~/assets/images/users/avatar-1.jpg" cover>
              <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                    ></v-progress-circular>
                  </div>
                </template>
            </v-img>
          </v-card>
          <div class="name">
            <v-card-title class="text-black">Mohamed Sayed</v-card-title>
            <v-card-text>Customer</v-card-text>
          </div>
        </div>
      </v-sheet>
    </div>

    <SharedUiParentCard class="mt-10">
      <v-container>
        <div class="">
          <v-tabs
            v-model="tab"
            align-tabs="center"
            bg-color="primary"
            stacked
          >
            <v-tab value="tab-1">
              <v-icon icon="mdi-account"></v-icon>
              Account Details
            </v-tab>

            <v-tab value="tab-2">
              <v-icon icon="mdi-truck"></v-icon>
              Orders
            </v-tab>

            <v-tab value="tab-3">
              <v-icon icon="mdi-file-multiple"></v-icon>
              Bills
            </v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="tab-1">
              <v-card flat>
                <form class="mt-10">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field color="primary" variant="outlined" prepend-inner-icon="mdi-account" label="First Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field color="primary" variant="outlined" prepend-inner-icon="mdi-account" label="Last Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field color="primary" variant="outlined" prepend-inner-icon="mdi-phone" label="Phone"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-radio-group inline color="primary">
                        <v-radio label="Male" value="male"></v-radio>
                        <v-radio label="Female" value="female"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12">
                      <v-btn color="primary">Save Changes</v-btn>
                    </v-col>
                  </v-row>
                </form>

                <hr class="my-16"/>

                <v-row>
                  <v-col cols="12">
                    <v-text-field color="primary" type="password" variant="outlined" prepend-inner-icon="mdi-lock" label="password"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field color="primary" type="password" variant="outlined" prepend-inner-icon="mdi-lock" label="New Password"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field color="primary" type="password" variant="outlined" prepend-inner-icon="mdi-lock" label="Confirm Password"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-btn color="deep-purple-lighten-1">Change Password</v-btn>
                  </v-col>
                </v-row>

              </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item value="tab-2">
              <v-card flat>
                <v-card-text>
                  <p>
                    Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                    egestas, lacus ante convallis tellus, vitae iaculis lacus
                    elit id tortor. Sed mollis, eros et ultrices tempus, mauris
                    ipsum aliquam libero, non adipiscing dolor urna a orci.
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Nunc sed turpis.
                  </p>

                  <p>
                    Suspendisse feugiat. Suspendisse faucibus, nunc et
                    pellentesque egestas, lacus ante convallis tellus, vitae
                    iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                    ultrices semper, ligula arcu tristique sapien, a accumsan
                    nisi mauris ac eros. In hac habitasse platea dictumst. Fusce
                    ac felis sit amet ligula pharetra condimentum.
                  </p>

                  <p>
                    Sed consequat, leo eget bibendum sodales, augue velit cursus
                    nunc, quis gravida magna mi a libero. Nam commodo suscipit
                    quam. In consectetuer turpis ut velit. Sed cursus turpis
                    vitae tortor. Aliquam eu nunc.
                  </p>

                  <p>
                    Etiam ut purus mattis mauris sodales aliquam. Ut varius
                    tincidunt libero. Aenean viverra rhoncus pede. Duis leo.
                    Fusce fermentum odio nec arcu.
                  </p>

                  <p class="mb-0">
                    Donec venenatis vulputate lorem. Aenean viverra rhoncus
                    pede. In dui magna, posuere eget, vestibulum et, tempor
                    auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim
                    turpis, dictum sed, iaculis a, condimentum nec, nisi.
                  </p>
                </v-card-text>
              </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item value="tab-3">
              <v-card flat>
                <v-card-text>
                  <p>
                    Fusce a quam. Phasellus nec sem in justo pellentesque
                    facilisis. Nam eget dui. Proin viverra, ligula sit amet
                    ultrices semper, ligula arcu tristique sapien, a accumsan
                    nisi mauris ac eros. In dui magna, posuere eget, vestibulum
                    et, tempor auctor, justo.
                  </p>

                  <p class="mb-0">
                    Cras sagittis. Phasellus nec sem in justo pellentesque
                    facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                    ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nam at tortor in tellus interdum
                    sagittis.
                  </p>
                </v-card-text>
              </v-card>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-container>
    </SharedUiParentCard>
  </div>
</template>

<script setup>

definePageMeta({
    middleware:["auth"],
    enterClass: 'animate__animated animate__fadeInLeft',
    leaveClass: 'animate__animated animate__fadeOutRight'
})

const tab = ref("tab-1");
onMounted(() => {
  console.log('mounted')
})
</script>

<style lang="scss" scoped>
.profile {
  .profile-img {
    position: relative;

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 70%;
      filter: blur(6px);
    }

    .name {
      border-radius: 10px;
      backdrop-filter: blur(4px);
    }
  }
}
</style>
