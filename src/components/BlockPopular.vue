<template>
  <my-sheet>

    <h2 class="pa-3 mt-3 mb-4 text-h2">Часто читают</h2>
    <v-row>

      <v-col xs="12" sm="6" md="4" lg="12" v-for="article in topHeadlines.articles">
        <card :article-data="article" :key="article.article_id" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn
               @click.prevent="$emit('goToPage', 'category', { category: 'top', page: 1 })">Еще</v-btn>
      </v-col>
    </v-row>
  </my-sheet>
</template>

<script setup>
import Card from '@/components/Card.vue';
import { getTopHeadlines } from '@/script/getData'
import MySheet from '@/components/MySheet.vue';
const topHeadlines = await getTopHeadlines('top', 5);


</script>