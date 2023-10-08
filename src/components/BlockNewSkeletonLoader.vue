<template>
  <my-sheet>
    <h1 class="pa-3 text-h1">Новое</h1>

    <v-row>
      <v-col sm="6" lg="4" v-for="n in 6" :key="n">
        <v-skeleton-loader type="article" :loading="true"></v-skeleton-loader>
      </v-col>
    </v-row>

  </my-sheet>
</template>

<script setup>
import MySheet from '@/components/MySheet.vue';
// import categories from '@/data/categories';
</script>