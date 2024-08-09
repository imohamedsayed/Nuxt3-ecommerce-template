<template>
    <v-menu>
        <template #activator="{ props }">
            <v-btn class="custom-hover-primary mx-0" variant="text" v-bind="props" icon>
                <v-avatar size="20" v-if="locale == 'en'">
                    <img src="/icons/icon-flag-en.svg" alt="english" />
                </v-avatar>
                <v-avatar size="20" v-else>
                    <img src="/icons/icon-flag-ro.svg" alt="arabic" />
                </v-avatar>
            </v-btn>
        </template>

        <v-sheet rounded="md" width="200" elevation="10" class="mt-2">
            <v-list class="py-0" lines="one" density="compact">
                <v-list-item value="item1" color="primary" @click="changeLocale('en')">
                    <template #prepend>
                        <v-avatar size="20">
                            <img src="/icons/icon-flag-en.svg" />
                        </v-avatar>
                    </template>

                    <v-list-item-title class="text-body-1"> English </v-list-item-title>
                </v-list-item>

                <v-list-item value="item2" color="primary" @click="changeLocale('ar')">
                    <template #prepend>
                        <v-avatar size="20">
                            <img src="/icons/icon-flag-ro.svg" />
                        </v-avatar>
                    </template>

                    <v-list-item-title class="text-body-1"> العربية </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-menu>
</template>

<script setup>
import { useLocale } from 'vuetify';
const { current } = useLocale();
const switchLocalePath = useSwitchLocalePath();
const { locale, setLocale, setLocaleCookie } = useI18n();

function changeLocale(lang) {
	current.value = lang;
	switchLocalePath(lang);
	setLocale(lang);
	setLocaleCookie(lang);
 

}
</script>

<style></style>
