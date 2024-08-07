<template>
    <div class=".login mt-5 px-5">
        <Title>Project Setup | Login</Title>
        <h2 class="font-weight-bold">Welcome to MSO</h2>
        <p class="text-muted">Your trusted online store</p>

        <hr class="my-10" />
        <form @submit.prevent="login">
            <p class="font-weight-bold">Email</p>
            <v-text-field
                variant="outlined"
                rounded="lg"
                class="mt-3"
                color="primary"
                v-model="email"
                :error-messages="
                    v$.email.$error ? v$.email.$errors[0].$message : ''
                "
            ></v-text-field>
            <p class="font-weight-bold">Password</p>
            <v-text-field
                variant="outlined"
                rounded="lg"
                class="mt-3"
                color="primary"
                type="password"
                v-model="password"
                :error-messages="
                    v$.password.$error ? v$.password.$errors[0].$message : ''
                "
            ></v-text-field>

            <NuxtLink
                to="/forget-password"
                class="text-decoration-none text-indigo-accent-2 text-end d-block"
                >Forget Password?</NuxtLink
            >

            <v-btn type="submit" block rounded="lg" class="mt-7" color="primary" size="large" :loading="loading"
                >Sign in</v-btn
            >
        </form>
        <p class="font-weight-bold mt-10 text-h5" style="word-spacing: 3px">
            New to mso?
            <NuxtLink
                to="/register"
                class="text-decoration-none text-indigo-accent-2"
                >Signup</NuxtLink
            >
        </p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth",
});

import { useVuelidate } from "@vuelidate/core";
import { required, email as Email } from "@vuelidate/validators";
import { useAuthStore } from '../stores/authStore';

const email = ref("");
const password = ref("");

const rules = {
    email: { required, Email },
    password: { required },
};
const v$ = useVuelidate(rules, { email, password });

const loading = ref(false);
const login = async () => {
    v$.value.$validate();
    if (!v$.value.$error) {
        loading.value = true;
        try {
            const data = {
                email: email.value,
                password: password.value,
            };
            await useAuthStore().login(data);
            navigateTo("/");
        } catch (err) {
            console.log("Error while Login: ", err.message);
        }
        loading.value = false;
    }
};
</script>

<style lang="scss" scoped></style>
