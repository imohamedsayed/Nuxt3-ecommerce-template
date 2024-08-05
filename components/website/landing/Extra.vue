<template>
    <div class="extra ">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <div class="extra-box text-center">
                        <v-img src="~/assets/images/icons/delivery.png" class="mx-auto" height="80px" width="80px">
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                </div>
                            </template>

                        </v-img>
                        <p class="text-muted mt-2 font-weight-bold">Free Delivery</p>
                        <span class="text-body-1 text-grey-darken-1">
                            Our free shipping policy applies to all orders, regardless of order value or destination
                        </span>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="extra-box text-center">
                        <v-img src="~/assets/images/icons/credit-card.png" class="mx-auto" height="80px" width="80px">
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                </div>
                            </template>

                        </v-img>
                        <p class="text-muted mt-2 font-weight-bold">Secure Payment</p>
                        <span class="text-body-1 text-darken-lighten-1">
                            Your Payment is always safe, secure and protected at all times
                        </span>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="extra-box text-center">
                        <v-img src="~/assets/images/icons/headset.png" class="mx-auto" height="80px" width="80px">
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                </div>
                            </template>

                        </v-img>
                        <p class="text-muted mt-2 font-weight-bold">Support Online 24/7</p>
                        <span class="text-body-1 text-grey-darken-1">
                            We are available 24/7 to assist you with any question, or issue you may have
                        </span>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
onMounted(() => {

    useGsap.utils.toArray('.extra-box').forEach((box) => {
        useGsap.from(box, {
            y: 200,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: box,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        });
    });

})
</script>

<style lang="scss" scoped>
.extra {
    margin-top: 100px;
    background: #5d88ff2b;
    border-radius: 10px;

    .extra-box {
        background: #fff;
        border-radius: 10px;
        padding: 20px 10px;
    }

}
</style>
