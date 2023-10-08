<template>
  <v-app>
    <app-navigation @goToPage="(pageName, pageParams) => goToPage(pageName, pageParams)" />
    <component :is="currentPageComponent" :page-params="currentPageParams"
               @goToPage="(pageName, pageParams) => goToPage(pageName, pageParams)" />

  </v-app>
</template>

<script setup>
import AppNavigation from '@/components/AppNavigation.vue';
import MainPage from '@/pages/MainPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue'
import CategoryPage from '@/pages/CategoryPage.vue'
import { ref, computed } from 'vue';


const routes = {
  main: MainPage,
  category: CategoryPage
}

const currentPage = ref('main');
const currentPageParams = ref({});

const goToPage = (pageName, pageParams) => {
  currentPage.value = pageName; //'main' or 'category'
  currentPageParams.value = pageParams;
}

const currentPageComponent = computed(() => {
  return routes[currentPage.value] || NotFoundPage
})

</script>

<style>
.nav {
  padding: 25px
}
</style>