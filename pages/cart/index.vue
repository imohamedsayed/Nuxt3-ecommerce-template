<template>
  <div class="cart">
    <v-breadcrumbs :items="items">
      <template v-slot:prepend>
        <v-btn icon elevation="0" class="bg-background" to="/">
          <v-icon
            class="mx-1"
            size="small"
            icon="mdi-home"
            color="deep-purple-lighten-2"
          ></v-icon>
        </v-btn>
        <v-icon icon="mdi-chevron-right" v-if="$i18n?.locale === 'EN'"></v-icon>
        <v-icon icon="mdi-chevron-right" v-else></v-icon>
      </template>
      <template v-slot:divider v-if="$i18n?.locale === 'EN'">
        <v-icon icon="mdi-chevron-left"></v-icon>
      </template>
      <template v-slot:divider v-else>
        <v-icon icon="mdi-chevron-left"></v-icon>
      </template>
    </v-breadcrumbs>
      <v-row>
        <v-col cols="12" md="8">
          <div class="cart-item px-2 mb-5 animate__animated animate__fadeInDown" v-for="i in 3" :key="i">
            <v-row class="align-center">
              <v-col cols="1">
                <v-btn
                  icon="mdi-delete"
                  class="text-error"
                  elevation="0"
                ></v-btn>
              </v-col>
              <v-col cols="6">
                <v-row class="align-center">
                  <v-col cols="4">
                    <v-img src="~/assets/images/products/sports-1.jpg">
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
                  </v-col>
                  <v-col cols="8">
                    <v-list-item-title class="font-weight-bold"
                      >Nike Shoes 44mm white</v-list-item-title
                    >
                    <v-list-item-text class="text-body-1 text-muted"
                      >Sports wear</v-list-item-text
                    >
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="3">
                <div class="qty d-flex gap-2 gap-md-3 gap-lg-4 align-center">
                  <v-btn icon="mdi-plus" size="sm"></v-btn>
                  3
                  <v-btn icon="mdi-minus" size="sm"></v-btn>
                </div>
              </v-col>
              <v-col cols="2">
                <div class="price d-flex gap-2">
                  <p class="font-weight-bold text-muted d-none d-md-block">
                    Pricing
                  </p>
                  <p class="font-weight-bold text-primary">$21.20</p>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="mt-7">
            <v-row>
              <v-col cols="6" md="4">
                <div class="cart-info">
                  <p class="text-muted">
                    <v-icon class="mx-2">mdi-arrow-left</v-icon>
                    Back to shopping
                  </p>
                </div>
              </v-col>
              <v-col cols="6" md="4">
                <div class="cart-info">
                  <p class="text-muted">
                    <v-icon class="mx-2">mdi-truck</v-icon>
                    Delivery
                    <span class="delivery font-weight-bold mx-1">$21</span>
                  </p>
                </div>
              </v-col>
              <v-col cols="6" md="4">
                <div class="cart-info">
                  <p class="text-muted">
                    SubTotal
                    <span
                      class="total text-primary font-weight-bold text-h3 mx-2"
                      >$221.00</span
                    >
                  </p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="0" class="checkout pt-4">
            <v-tabs v-model="tab" align-tabs="center" color="primary">
              <v-tab :value="1"
                ><v-icon class="mx-1">mdi-cash-multiple</v-icon>Cash</v-tab
              >
              <v-tab :value="2"
                ><v-icon class="mx-1">mdi-credit-card-outline</v-icon
                >Visa</v-tab
              >
            </v-tabs>
            <v-tabs-window v-model="tab" class="">
              <v-tabs-window-item :value="1">
                <WebsiteCartCheckoutCash class="pt-10" />
              </v-tabs-window-item>
              <v-tabs-window-item :value="2">
                <WebsiteCartCheckoutVisa />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script setup>
definePageMeta({
    enterClass: 'animate__animated animate__fadeInLeft',
    leaveClass: 'animate__animated animate__fadeOutRight'
})
const tab = ref(1);
const items = [
  {
    title: "Cart",
    disabled: true,
    href: "/cart",
  },
];
</script>

<style lang="scss" scoped>
.cart {
  .cart-item {
    background: #fdf9ff;
  }

  .cart-info {
    padding: 40px 20px;
    background: #fdf9ff;
    border-radius: 10px;
  }

  .checkout {
    background: linear-gradient(to bottom right, #5d88ff4a, #9970da5a);
  }
}


</style>
