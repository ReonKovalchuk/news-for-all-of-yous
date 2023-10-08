<template>
  <my-sheet>
    <h2 class="pa-3 text-h2">Новости в категориях</h2>

    <v-tabs v-model="tab" align-tabs="center" color="grey-darken-1">
      <v-tab v-for="category in categories" :value="category.name" :key="category.name">{{
        category.ru }}</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="category in categories" :key="category.name" :value="category.name">
        <v-container fluid>
          <v-row>
            <v-col cols="4" v-for="n in 6" :key="n">
              <v-skeleton-loader type="article" :loading="true"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </my-sheet>
</template>

<script setup>
import { ref } from 'vue';
const tab = ref(null);
import MySheet from '@/components/MySheet.vue';
import categories from '@/data/categories';
</script>