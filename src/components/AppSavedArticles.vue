<template>
  <v-virtual-scroll height="100%" :items="savedArticles">

    <template v-slot:default="{ item }">
      <v-list-item :key="item.article_id">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-card-subtitle class="d-flex justify-space-between">
          <span>{{ item.source_id }}</span>

          <span>{{ item.publishedAtLocal }}</span>
        </v-card-subtitle>

        <v-list-item-action>
          <v-btn :href="item.link" target=”_blank” variant="tonal">Читать</v-btn>
          <v-spacer></v-spacer>
          <app-save-btn :article="item">

          </app-save-btn>
        </v-list-item-action>

      </v-list-item>
      <v-divider></v-divider>
    </template>

  </v-virtual-scroll>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import AppSaveBtn from './AppSaveBtn.vue';
import { useSavedArticlesStore } from '@/stores/savedArticles'

const store = useSavedArticlesStore();
const { savedArticles } = storeToRefs(store);

</script>
