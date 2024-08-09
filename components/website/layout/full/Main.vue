<script setup lang="ts">
import sidebarItems from './vertical-sidebar/sidebarItem';
import { Menu2Icon, UserPlusIcon,LoginIcon,LogoutIcon } from 'vue-tabler-icons';
import { useAuthStore } from '#imports';
const sidebarMenu = shallowRef(sidebarItems);

const sDrawer = ref(false);

const user = computed(()=> useAuthStore().User)

const logout = ()=>{
    useAuthStore().logout()
}
</script>

<template>
    <div >
            <!------Sidebar-------->
            <v-navigation-drawer left elevation="0"  app class="leftSidebar"   v-model="sDrawer"
            >
                <!---Logo part -->
                <div class="pa-5 text-center">
                    <img src="~/assets/images/logo.png" width="60px" class="mx-4 mx-auto">
                </div>

                <!-- ---------------------------------------------- -->
                <!---Navigation -->
                <!-- ---------------------------------------------- -->
                <div>
                <perfect-scrollbar class="scrollnavbar">
                    <v-list class="pa-6">
                        <!---Menu Loop -->
                        <template v-for="(item) in sidebarMenu" >
                            <!---Item Sub Header -->
                            <WebsiteLayoutFullVerticalSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />

                            <!---Single Item-->
                            <WebsiteLayoutFullVerticalSidebarNavItem :item="item" v-else class="leftPadding" />
                            <!---End Single Item-->
                        </template>
                        <v-list-item to="/login" rounded class="mb-1" active-color="primary" v-if="!user">
                            <!---If icon-->
                            <template v-slot:prepend>
                                <LoginIcon />
                            </template>
                            <v-list-item-title>Login</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/register" rounded class="mb-1" active-color="primary" v-if="!user">
                            <!---If icon-->
                            <template v-slot:prepend>
                                <UserPlusIcon />
                            </template>
                            <v-list-item-title>Signup</v-list-item-title>
                        </v-list-item>
                        <v-list-item rounded class="mb-1" active-color="primary" v-if="user" @click="logout">
                            <!---If icon-->
                            <template v-slot:prepend>
                                <LogoutIcon />
                            </template>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <div class="pa-4">
                    </div>
                </perfect-scrollbar>
            </div>
            </v-navigation-drawer>

            <!------Header-------->
            <v-app-bar elevation="0" height="70">
                <div class="d-flex align-center justify-space-between w-100">
                    <div class="d-flex align-center">
                        <v-btn class=" ms-md-3 ms-sm-5 ms-3 text-muted" @click="sDrawer = !sDrawer" icon variant="flat"
                            size="small">
                            <Menu2Icon size="20" stroke-width="1.5" />
                        </v-btn>
                        <v-text-field width="400px" type="search" clearable class="mt-6 d-none d-md-block mx-2" color="primary" rounded="lg" variant="outlined" prepend-inner-icon="mdi-magnify" label="search"></v-text-field>
                    </div>

                    <div>
                        <!--Localization-->
                        <WebsiteLayoutFullVerticalHeaderLanguage/>

                        <v-btn class="custom-hover-primary " variant="text" icon color="primary" to="/cart">
                            <v-badge color="primary" :content="0" max="9">
                                <IconsCart />
                            </v-badge>
                        </v-btn>
                        <!-- <v-btn class="custom-hover-primary btn-icon ml-2" variant="text" icon to="/wish-list" color="skin">
                            <v-badge color="error" :content="0" max="9">
                                <IconsHeart />
                            </v-badge>
                        </v-btn> -->

                        <!-- Notification -->
                        <WebsiteLayoutFullVerticalHeaderNotificationDD v-if="user"/>
                        <!-- Upgrade button -->
                        <WebsiteLayoutFullVerticalHeaderProfileDD v-if="user"/>
                        <v-btn  variant="outlined" to="/"  class="bg-primary ms-4 me-6 " v-else>Login</v-btn>
                    </div>
                </div>
            </v-app-bar>


    </div>

</template>

<style lang="scss">
.top {
    font-size: 12px;

    @media (max-width: 500px) {
        .gmail {
            display: none;
        }
    }
}
</style>
