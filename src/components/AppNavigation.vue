<template>
  <v-app-bar elevation="2" class="py-1">
    <v-btn prepend-icon="mdi-playlist-star" variant="text" @click.stop="drawer = !drawer"
           size="large">Список для
      чтения
      <template v-slot:prepend>
        <v-icon size="large"></v-icon>
      </template></v-btn>
    <v-spacer></v-spacer>

    <v-app-bar-title class="text-center text-h3">
      <v-icon icon="mdi-newspaper-variant-multiple-outline" size="large"></v-icon> News for all of
      yous
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <App-theme-toggle />
    <v-btn icon="mdi-home" @click="$emit('goToPage', 'main', {})">
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <app-saved-articles> </app-saved-articles>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from 'vue';
import AppThemeToggle from '@/components/AppThemeToggle.vue';
import AppSavedArticles from '@/components/AppSavedArticles.vue';


const drawer = ref(false);
const group = ref(null);

watch(group, () => { drawer = false })

</script>
