<template>
  <my-sheet>
    <h1 class="pa-3 text-h1">Новое</h1>

    <v-row>
      <v-alert v-if="topHeadlines.message" type="error">
        Error: {{ topHeadlines.message }}
      </v-alert>
      <v-col v-else sm="6" lg="4" v-for="article in topHeadlines.articles">
        <Card :article-data="article" :key="article.article_id"></Card>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn @click.prevent="$emit('goToPage', 'category', { category: '' })">Еще</v-btn>
      </v-col>
    </v-row>
  </my-sheet>
</template>

<script setup>

import Card from '@/components/Card.vue';
import { getTopHeadlines } from '@/script/getData'
import MySheet from '@/components/MySheet.vue';

const topHeadlines = await getTopHeadlines('', 8);

</script>